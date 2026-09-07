"""Audit rendered metadata and internal links on a running local build."""
import concurrent.futures
import json
import sys
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3102"
SITE = "https://www.soufianeboutatss.sbs"

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical = []
        self.alternates = {}
        self.links = set()
        self.h1 = 0
        self.description = False
        self.lang = None
        self.title = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html": self.lang = a.get("lang")
        if tag == "h1": self.h1 += 1
        if tag == "title": self.title = True
        if tag == "meta" and a.get("name") == "description": self.description = bool(a.get("content"))
        if tag == "link" and a.get("rel") == "canonical": self.canonical.append(a.get("href"))
        if tag == "link" and a.get("hreflang"): self.alternates[a["hreflang"]] = a.get("href")
        if tag == "a" and a.get("href", "").startswith("/") and not a["href"].startswith("//"):
            self.links.add(urllib.parse.urlsplit(a["href"]).path)

def fetch(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=60) as response:
            if "text/html" not in response.headers.get("Content-Type", ""):
                return path, None, response.status
            html = response.read().decode("utf-8")
            parser = Page()
            parser.feed(html)
            return path, parser, response.status
    except Exception as error:
        return path, None, str(error)

xml = ET.fromstring(urllib.request.urlopen(BASE + "/sitemap.xml").read())
paths = [urllib.parse.urlsplit(node.text).path or "/" for node in xml.findall("{*}url/{*}loc")]
issues = []
if len(paths) != len(set(paths)): issues.append("Duplicate sitemap URLs")
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    pages = {path: (page, status) for path, page, status in pool.map(fetch, paths)}
incoming = {path: set() for path in paths}
extra = set()
for path, (page, status) in pages.items():
    if status != 200:
        issues.append(f"{path}: {status}")
        continue
    if page.canonical != [SITE + path]: issues.append(f"{path}: canonical {page.canonical}")
    if page.h1 != 1 or not page.description or not page.title: issues.append(f"{path}: missing metadata or H1 count {page.h1}")
    if page.lang != ("en" if path.startswith("/en") else "ar" if path == "/ar" else "fr"): issues.append(f"{path}: wrong HTML language")
    for href in page.links:
        if href in incoming and href != path: incoming[href].add(path)
        elif href not in pages and not href.startswith(("/api/", "/admin")): extra.add(href)
    for lang, href in page.alternates.items():
        target = urllib.parse.urlsplit(href).path or "/"
        other = pages.get(target, (None, None))[0]
        if other is None or other.alternates != page.alternates: issues.append(f"{path}: non-reciprocal hreflang {lang} -> {target}")
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for path, _, status in pool.map(fetch, extra):
        if status != 200: issues.append(f"Broken internal target {path}: {status}")
report = {"pages": len(pages), "additional_targets": len(extra), "issues": issues, "orphans": [path for path, sources in incoming.items() if not sources]}
Path("output").mkdir(exist_ok=True)
Path("output/seo-audit.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(report, ensure_ascii=True, indent=2))
sys.exit(bool(issues or report["orphans"]))

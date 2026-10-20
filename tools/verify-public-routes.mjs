import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { request } from 'node:http';

const port = 3103;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch(`${base}/robots.txt`)).ok) { ready = true; break; } } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  assert.ok(ready, 'Production server did not start');
  const audit = spawnSync('python', ['tools/audit-seo.py', base], { encoding: 'utf8' });
  process.stdout.write(audit.stdout);
  if (audit.stderr) process.stderr.write(audit.stderr);
  assert.equal(audit.status, 0, 'Rendered sitemap audit failed');

  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  const prerender = JSON.parse(readFileSync('.next/prerender-manifest.json', 'utf8'));
  const titles = new Map();
  const descriptions = new Map();
  for (const path of paths) {
    assert.ok(prerender.routes[path], `Public page is not prerendered: ${path}`);
    const response = await fetch(base + path, { redirect: 'manual' });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title && description, `Missing title or description: ${path}`);
    assert.ok(!titles.has(title), `Duplicate title: ${path} and ${titles.get(title)}`);
    assert.ok(!descriptions.has(description), `Duplicate description: ${path} and ${descriptions.get(description)}`);
    titles.set(title, path); descriptions.set(description, path);
    const locale = path === '/ar' ? 'ar' : path === '/en' || path.startsWith('/en/') ? 'en' : 'fr';
    assert.ok(html.includes(`<html lang="${locale}" dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`), `Language or direction incorrect: ${path}`);
  }
  for (const path of ['/missing-seo-check', '/blog/missing-seo-check', '/portfolio/missing-seo-check', '/en/missing-seo-check']) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404, `Unknown route must return HTTP 404: ${path}`);
    assert.match(await response.text(), /<meta name="robots" content="noindex/);
  }
  for (const [path, target] of [['/', '/fr'], ['/referencement-seo-casablanca', '/casablanca/seo'], ['/creation-site-internet-casablanca', '/creation-site-web-casablanca']]) {
    const response = await fetch(base + path, { redirect: 'manual' });
    assert.ok([301, 308].includes(response.status), `Permanent redirect missing: ${path}`);
    assert.equal(new URL(response.headers.get('location'), base).pathname, target);
  }
  // Use http.request: fetch may normalize the Host header to the URL host.
  const canonicalHost = await new Promise((resolve, reject) => {
    const req = request(`${base}/fr`, { headers: { host: 'soufianeboutatss.sbs' } }, response => {
      response.resume(); resolve(response);
    });
    req.on('error', reject); req.end();
  });
  assert.equal(canonicalHost.statusCode, 308);
  assert.equal(canonicalHost.headers.location, 'https://www.soufianeboutatss.sbs/fr');
  const admin = await fetch(`${base}/admin`);
  assert.match(await admin.text(), /name="robots" content="noindex/);
  assert.ok(!prerender.routes['/admin'], 'Authenticated admin must stay dynamic');
  console.log(`PASS: ${paths.length} static public pages, unique metadata, FR/EN/AR, 404s, canonical redirects and dynamic admin.`);
} finally {
  server.kill('SIGTERM');
}

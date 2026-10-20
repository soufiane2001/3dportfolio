// Article HTML is authored in the repository. This adds stable, accessible
// in-page navigation; it is not a sanitizer for untrusted HTML.
export function articleOutline(content: string) {
  const headings: { id: string; label: string }[] = [];
  const html = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (_heading, attributes: string, body: string) => {
    const existing = attributes.match(/\bid=["']([^"']+)["']/);
    const id = existing?.[1] ?? `article-section-${headings.length + 1}`;
    const label = body.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
    headings.push({ id, label });
    return `<h2${attributes}${existing ? "" : ` id="${id}"`}>${body}</h2>`;
  });
  return { html, headings };
}

const ALLOWED_TAGS = new Set([
  "B",
  "STRONG",
  "I",
  "EM",
  "U",
  "P",
  "BR",
  "DIV",
  "UL",
  "OL",
  "LI",
  "BLOCKQUOTE",
  "H1",
  "H2",
  "H3",
  "PRE",
  "CODE",
  "A",
  "SPAN",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  A: new Set(["href", "target", "rel", "class"]),
  SPAN: new Set(["class"]),
  DIV: new Set(["class"]),
  P: new Set(["class"]),
  UL: new Set(["class"]),
  OL: new Set(["class"]),
  LI: new Set(["class"]),
  H1: new Set(["class"]),
  H2: new Set(["class"]),
  H3: new Set(["class"]),
  PRE: new Set([]),
  CODE: new Set([]),
};

function isSafeHref(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.protocol === "http:" || url.protocol === "https:" || url.protocol === "mailto:";
  } catch {
    return false;
  }
}

export function sanitizeRichTextHtml(html: string): string {
  if (!html) return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
  const toRemove: Element[] = [];

  let current = walker.nextNode() as Element | null;
  while (current) {
    const el = current;

    if (!ALLOWED_TAGS.has(el.tagName)) {
      toRemove.push(el);
    } else {
      // Strip event handlers, styles, and unknown attributes.
      for (const attr of Array.from(el.attributes)) {
        const name = attr.name.toLowerCase();
        if (name.startsWith("on") || name === "style") {
          el.removeAttribute(attr.name);
          continue;
        }

        const allowed = ALLOWED_ATTRS[el.tagName] ?? new Set<string>();
        if (!allowed.has(attr.name)) el.removeAttribute(attr.name);
      }

      // If we allow class, restrict it to Quill-related classes only.
      if (el.hasAttribute("class")) {
        const safe = (el.getAttribute("class") ?? "")
          .split(/\s+/)
          .filter(Boolean)
          .filter((c) => c.startsWith("ql-"));
        if (safe.length) el.setAttribute("class", safe.join(" "));
        else el.removeAttribute("class");
      }

      if (el.tagName === "A") {
        const href = el.getAttribute("href") ?? "";
        if (!isSafeHref(href)) {
          el.removeAttribute("href");
        } else {
          el.setAttribute("rel", "noopener noreferrer");
          if (!el.getAttribute("target")) el.setAttribute("target", "_blank");
        }
      }
    }

    current = walker.nextNode() as Element | null;
  }

  // Replace disallowed elements with their text content to preserve user input.
  for (const el of toRemove) {
    const text = doc.createTextNode(el.textContent ?? "");
    el.replaceWith(text);
  }

  // Remove any script/style tags that might remain.
  doc.querySelectorAll("script,style").forEach((n) => n.remove());

  return doc.body.innerHTML;
}


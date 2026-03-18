import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { sanitizeRichTextHtml } from "../../utils/sanitizeRichTextHtml";

export type BlogTextStyle = {
  fontFamily: string;
  fontSize: string; // e.g. "14px"
  lineHeight: number; // 1, 1.5, 2
  formatting: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };
};

const FONT_OPTIONS = [
  { label: "Poppins", value: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "Roboto", value: "Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif" },
  { label: "Arial", value: "Arial, system-ui, -apple-system, Segoe UI, sans-serif" },
  { label: "Georgia", value: "Georgia, Times, serif" },
  { label: "Times New Roman", value: "\"Times New Roman\", Times, serif" },
];

const SIZE_OPTIONS = [
  { label: "Small", value: "14px" },
  { label: "Medium", value: "18px" },
  { label: "Large", value: "24px" },
];

const LINE_HEIGHT_OPTIONS: Array<{ label: string; value: number }> = [
  { label: "1", value: 1 },
  { label: "1.5", value: 1.5 },
  { label: "2", value: 2 },
];

function toolbarButtonClass(active: boolean) {
  return clsx(
    "px-3 py-2 rounded-lg border text-sm font-semibold transition",
    active
      ? "bg-cyan-600 border-cyan-500 text-white"
      : "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700"
  );
}

export default function BlogRichEditor({
  valueHtml,
  onChangeHtml,
  style,
  onChangeStyle,
}: {
  valueHtml: string;
  onChangeHtml: (nextHtml: string) => void;
  style: BlogTextStyle;
  onChangeStyle: (next: BlogTextStyle) => void;
}) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [hasFocus, setHasFocus] = useState(false);

  // Keep editor DOM in sync when external value changes.
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    const incoming = valueHtml ?? "";
    if (el.innerHTML !== incoming) el.innerHTML = incoming;
  }, [valueHtml]);

  const sanitizedPreviewHtml = useMemo(() => sanitizeRichTextHtml(valueHtml), [valueHtml]);

  const refreshFormatStateFromSelection = () => {
    // execCommand is deprecated but still supported broadly; for this simple editor it’s OK.
    try {
      const bold = document.queryCommandState("bold");
      const italic = document.queryCommandState("italic");
      const underline = document.queryCommandState("underline");
      onChangeStyle({
        ...style,
        formatting: { bold, italic, underline },
      });
    } catch {
      // no-op
    }
  };

  const exec = (command: "bold" | "italic" | "underline") => {
    const el = editorRef.current;
    if (!el) return;
    el.focus();
    document.execCommand(command);
    refreshFormatStateFromSelection();
    onChangeHtml(el.innerHTML);
  };

  const editorTextStyle: React.CSSProperties = {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    lineHeight: style.lineHeight,
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">Font</span>
          <select
            value={style.fontFamily}
            onChange={(e) =>
              onChangeStyle({
                ...style,
                fontFamily: e.target.value,
              })
            }
            className="rounded-lg bg-gray-700 text-white border border-gray-600 px-3 py-2"
          >
            {FONT_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">Size</span>
          <select
            value={style.fontSize}
            onChange={(e) =>
              onChangeStyle({
                ...style,
                fontSize: e.target.value,
              })
            }
            className="rounded-lg bg-gray-700 text-white border border-gray-600 px-3 py-2"
          >
            {SIZE_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">Line</span>
          <select
            value={String(style.lineHeight)}
            onChange={(e) =>
              onChangeStyle({
                ...style,
                lineHeight: Number(e.target.value),
              })
            }
            className="rounded-lg bg-gray-700 text-white border border-gray-600 px-3 py-2"
          >
            {LINE_HEIGHT_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            className={toolbarButtonClass(style.formatting.bold)}
            onClick={() => exec("bold")}
            aria-pressed={style.formatting.bold}
          >
            B
          </button>
          <button
            type="button"
            className={toolbarButtonClass(style.formatting.italic)}
            onClick={() => exec("italic")}
            aria-pressed={style.formatting.italic}
          >
            I
          </button>
          <button
            type="button"
            className={toolbarButtonClass(style.formatting.underline)}
            onClick={() => exec("underline")}
            aria-pressed={style.formatting.underline}
          >
            U
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-100 font-semibold">Editor</h3>
            <span className="text-xs text-gray-400">
              {hasFocus ? "Editing" : "Click to edit"}
            </span>
          </div>

          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            onKeyUp={refreshFormatStateFromSelection}
            onMouseUp={refreshFormatStateFromSelection}
            onInput={() => {
              const el = editorRef.current;
              if (!el) return;
              onChangeHtml(el.innerHTML);
            }}
            className={clsx(
              "min-h-[220px] rounded-xl border px-4 py-3 outline-none",
              "bg-gray-900 text-gray-100 border-gray-700 focus:ring-2 focus:ring-cyan-500"
            )}
            style={editorTextStyle}
            data-placeholder="Write your blog..."
          />
          <p className="text-xs text-gray-400">
            Tip: Select text then click **B/I/U**.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-100 font-semibold">Live Preview</h3>
          <div
            className="min-h-[220px] rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100"
            style={editorTextStyle}
          >
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizedPreviewHtml || "<p class='text-gray-400'>Nothing to preview yet.</p>" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


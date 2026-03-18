import ReactQuill from "react-quill-new";
import Quill from "quill";

// Limit fonts to the required list.
const Font = Quill.import("formats/font");
Font.whitelist = ["poppins", "roboto", "arial", "georgia", "times-new-roman"];
Quill.register(Font, true);

// Limit sizes to a simple set (inline via classes).
const Size = Quill.import("formats/size");
Size.whitelist = ["small", "medium", "large"];
Quill.register(Size, true);

export type QuillValue = {
  html: string;
};

const modules = {
  toolbar: [
    [{ font: Font.whitelist }],
    [{ size: Size.whitelist }],
    ["bold", "italic"],
    ["clean"],
  ],
};

const formats = ["font", "size", "bold", "italic"];

export default function QuillBlogEditor({
  valueHtml,
  onChangeHtml,
}: {
  valueHtml: string;
  onChangeHtml: (nextHtml: string) => void;
}) {
  return (
    <div className="space-y-2">
      <ReactQuill
        theme="snow"
        value={valueHtml}
        onChange={onChangeHtml}
        modules={modules}
        formats={formats}
      />

      {/* Dark mode tweaks for admin UI */}
      <style>
        {`
          /* Make the editor fit your dark admin UI a bit better */
          .ql-toolbar.ql-snow { border-color: rgb(55 65 81); border-radius: 0.75rem 0.75rem 0 0; background: rgb(31 41 55); }
          .ql-container.ql-snow { border-color: rgb(55 65 81); border-radius: 0 0 0.75rem 0.75rem; background: rgb(17 24 39); color: rgb(243 244 246); }
          .ql-editor { min-height: 220px; }
          .ql-snow .ql-stroke { stroke: rgb(229 231 235); }
          .ql-snow .ql-fill { fill: rgb(229 231 235); }
          .ql-snow .ql-picker { color: rgb(229 231 235); }
          .ql-snow .ql-picker-options { background: rgb(17 24 39); border-color: rgb(55 65 81); }
        `}
      </style>
    </div>
  );
}


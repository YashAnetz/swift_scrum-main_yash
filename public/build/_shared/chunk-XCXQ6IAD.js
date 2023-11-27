import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/components/error-base.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ErrorBase = ({ variant, message, href }) => {
  const imgPath = `/images/error-${variant}.svg`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[500px] text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: imgPath,
        alt: "Server error",
        className: "mx-auto mb-4 h-[350px] w-auto"
      },
      void 0,
      false,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "a",
      {
        href,
        className: "max-w-[100px] text-lg text-primary-main hover:underline dark:text-primary-main-dark",
        children: message
      },
      void 0,
      false,
      {
        fileName: "src/app/components/error-base.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/error-base.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};

export {
  ErrorBase
};
//# sourceMappingURL=/build/_shared/chunk-XCXQ6IAD.js.map

import {
  Error500
} from "/build/_shared/chunk-SVGTTPU7.js";
import "/build/_shared/chunk-XCXQ6IAD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/server-error.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error500, { message: errorMessage, href: "board" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function Error500Route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "This will never show because of the server error 500" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/server-error.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  Error500Route as default
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/server-error-7FRKP6YA.js.map

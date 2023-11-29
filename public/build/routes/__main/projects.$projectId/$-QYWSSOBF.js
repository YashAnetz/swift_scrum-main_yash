import {
  Error404
} from "/build/_shared/chunk-Y5IUY2WO.js";
import {
  useParams
} from "/build/_shared/chunk-N6RV6PVQ.js";
import "/build/_shared/chunk-XCXQ6IAD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CatchBoundary() {
  const params = useParams();
  const projectId = params.projectId;
  const slug = params["*"];
  const errorMessage = `The section "/${slug}" does not exists, so a fallback 404 is shown (check network tab). Navigate to boards page`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error404, { message: errorMessage, href: `/projects/${projectId}/board` }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/$.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function Error404Route() {
  return null;
}
export {
  CatchBoundary,
  Error404Route as default
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/$-QYWSSOBF.js.map

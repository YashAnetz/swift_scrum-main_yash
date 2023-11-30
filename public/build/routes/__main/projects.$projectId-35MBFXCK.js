import "/build/_shared/chunk-AUYLHJJM.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-Y5IUY2WO.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
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

// src/app/routes/__main/projects.$projectId.tsx
var import_node = __toESM(require_node());

// src/app/ui/main/project/project.view.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var sectionTitles = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog"
};
var defaultSection = "board";
var ProjectView = ({
  name,
  description,
  image
}) => {
  const location = useLocation();
  const section = location.pathname.split("/").slice(-1)[0];
  const sectionTitle = sectionTitles[section] || sectionTitles[defaultSection];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { backgroundColor: "#425B7D" }, className: "relative flex h-full flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-10 flex h-full w-full flex-grow flex-col py-6 px-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: { color: "#ffd460", padding: "10px", width: "600px", borderRadius: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects", className: "underline underline-offset-[3px]", children: "open" }, void 0, false, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "/" }, void 0, false, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: name }, void 0, false, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 mb-5 font-primary-black text-3xl", children: sectionTitle }, void 0, false, {
        fileName: "src/app/ui/main/project/project.view.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/project.view.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/project/project.view.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/project.view.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/project/project.view.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this);
};

// src/app/routes/__main/projects.$projectId.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { projectSummary } = data;
  const title = `Swift Scrum - ${projectSummary.name || "Project"}`;
  const description = "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/project.png";
  const url = `https://jira-clone.fly.dev/projects/${projectSummary.id}`;
  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
    "twitter:card": "summary_large_image",
    "twitter:site": url,
    "twitter:domain": "jira-clone.fly.dev",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:width": "1457",
    "twitter:image:height": "872",
    "twitter:image:alt": title,
    "twitter:creator": "@Jack_DanielSG",
    "twitter:creator:id": "Jack_DanielSG"
  };
  const properties = {
    "og:url": url,
    "og:type": "website",
    "og:site_name": title,
    "og:title": title,
    "og:description": description,
    "og:image": image
  };
  return [...formatTags(tags), ...formatProperties(properties)];
};
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "The Project page failed. Navigate to the projects page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Error500, { message: errorMessage, href: "/projects" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const errorMessage = "Project not found. Navigate to the projects page";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Error404, { message: errorMessage, href: "/projects" }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function ProjectRoute() {
  const { projectSummary } = useLoaderData();
  const { name, description, image } = projectSummary;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectView, { name, description, image }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  ProjectRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId-35MBFXCK.js.map

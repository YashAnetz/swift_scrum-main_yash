import {
  Cancel,
  Confirm,
  Content,
  Description,
  MdDeleteOutline,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  doneIssuesMock1,
  doneIssuesMock2,
  inProgressIssuesMock1,
  inProgressIssuesMock2,
  todoIssuesMock1,
  todoIssuesMock2
} from "/build/_shared/chunk-EDGCQ7EH.js";
import {
  usersMock
} from "/build/_shared/chunk-NCHMJE4I.js";
import {
  categoryTypeDict,
  categoryTypes
} from "/build/_shared/chunk-VD4CXEVL.js";
import "/build/_shared/chunk-EEOCHXUC.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-GE42YXME.js";
import "/build/_shared/chunk-KTTHBX2X.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.tsx
var import_node = __toESM(require_node());

// src/domain/category/category.mock.ts
var createdAt = (/* @__PURE__ */ new Date("2022-01-01")).valueOf();
var updatedAt = (/* @__PURE__ */ new Date("2022-01-01")).valueOf();
var ids1 = [
  "1e8877a7-91dc-46de-bce0-f077ad922fc8",
  "46964edd-62e0-4c2f-90bf-e275ee087433",
  "c1278ad3-29b3-422c-8219-54bb66b26ff4"
];
var issuesMock1 = [todoIssuesMock1, inProgressIssuesMock1, doneIssuesMock1];
var ids2 = [
  "bbb348d5-ef02-447c-94f5-5fbf1ceeac07",
  "14055a19-1a79-4b16-90fb-811652e33128",
  "aa102bcb-335c-4d82-8392-058f6172ebe8"
];
var issuesMock2 = [todoIssuesMock2, inProgressIssuesMock2, doneIssuesMock2];
var categoriesMock1 = categoryTypes.map((categoryType, index) => {
  const id = ids1[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock1[index];
  return {
    id,
    name,
    issues,
    type,
    order,
    createdAt,
    updatedAt
  };
});
var categoriesMock2 = categoryTypes.map((categoryType, index) => {
  const id = ids2[index];
  const name = categoryTypeDict[categoryType];
  const type = categoryType;
  const order = index;
  const issues = issuesMock2[index];
  return {
    id,
    name,
    type,
    issues,
    order,
    createdAt,
    updatedAt
  };
});

// src/domain/project/project.mock.ts
var projectMock1 = {
  id: "jira-clone",
  name: "JIRA Clone",
  description: "Software project",
  users: usersMock,
  categories: categoriesMock1,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 10:00")).valueOf()
};
var projectMock2 = {
  id: "second-project",
  name: "Second project",
  description: "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
  users: usersMock.slice(0, 3),
  // Only the first 3 users
  categories: categoriesMock2,
  image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10401?size=xxlarge",
  createdAt: (/* @__PURE__ */ new Date("2023-01-01 11:00")).valueOf()
};
var projectsMock = [projectMock1, projectMock2];

// src/app/ui/main/projects/projects.view.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var defaultProjectsIds = projectsMock.map(
  (projectMock) => projectMock.id
);
var ProjectsView = ({
  projectsSummary
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { backgroundColor: "#2D4059", height: "100vh" }, className: "bg-white p-6 dark:bg-dark-400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: { color: "#ffd460", marginLeft: "300px" }, className: "font-primary-black text-2xl", children: "PROJECTS" }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginLeft: "300px" }, className: "4 mt-4 grid grid-cols-auto-400 gap-8", children: projectsSummary.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, { project }, project.id, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        style: { backgroundColor: "#ffd460", marginLeft: "300px", borderRadius: "20px" },
        to: "new",
        className: "mt-8 flex w-fit items-center rounded bg-grey-300 py-3 pl-3 pr-4 hover:bg-primary-light hover:text-primary-main dark:bg-dark-200 dark:hover:bg-dark-100 dark:hover:text-font-main-dark",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 leading-4", children: "Add Project" }, void 0, false, {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var ProjectCard = ({ project }) => {
  const isDefaultProject = defaultProjectsIds.includes(project.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        style: { display: "flex", flexDirection: "column", backgroundColor: "#ffd460", borderRadius: "20px", width: "300px" },
        to: project.id,
        className: t(
          "group flex rounded shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
          "hover:-translate-y-0.5 hover:bg-primary-light hover:text-primary-main hover:shadow-md hover:outline-primary-main dark:bg-dark-200 dark:hover:text-primary-main-dark dark:hover:outline-primary-main-dark"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              style: { borderRadius: "20px", width: "80px", height: "80px", margin: "10px" },
              src: project.image || "/images/default-project.png",
              alt: "Project",
              width: "90px",
              height: "104px",
              className: "h-auto w-[90px] rounded-l object-cover"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1 px-3 pt-2 pb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg", children: project.name }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "min-h-[40px] font-primary-light text-sm text-font-light text-opacity-100 line-clamp-2 dark:text-white dark:text-opacity-60 dark:group-hover:text-primary-main-dark", children: project.description }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Trigger,
        {
          className: t(
            "flex items-center gap-1 cursor-pointer border-none text-sm mt-1",
            isDefaultProject ? "text-font-light dark:text-font-light-dark text-opacity-50 dark:text-opacity-40 cursor-not-allowed" : "text-icon dark:text-font-light-dark hover:text-error-main dark:hover:text-error-main-dark"
          ),
          "aria-label": "Open delete issue dialog",
          title: isDefaultProject ? "Cannot delete default project" : "Delete project",
          disabled: isDefaultProject,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdDeleteOutline, { size: 15 }, void 0, false, {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            "Delete project"
          ]
        },
        void 0,
        true,
        {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay, {}, void 0, false, {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Delete issue?" }, void 0, false, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, false, {
            fileName: "src/app/ui/main/projects/projects.view.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Form,
            {
              method: "delete",
              className: "mt-8 flex w-full justify-end gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, { "aria-label": "Cancel", children: "Cancel" }, void 0, false, {
                  fileName: "src/app/ui/main/projects/projects.view.tsx",
                  lineNumber: 99,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Confirm,
                  {
                    name: "_action",
                    value: "delete",
                    type: "submit",
                    "aria-label": "Delete issue",
                    children: "Delete"
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/app/ui/main/projects/projects.view.tsx",
                    lineNumber: 102,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "projectId", value: project.id }, void 0, false, {
                  fileName: "src/app/ui/main/projects/projects.view.tsx",
                  lineNumber: 110,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "src/app/ui/main/projects/projects.view.tsx",
              lineNumber: 95,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/app/ui/main/projects/projects.view.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/projects/projects.view.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/projects/projects.view.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/projects/projects.view.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main/projects.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  const title = "Jira clone - Projects";
  const description = "See all your projects in one place. Create new ones and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/projects.png";
  const url = "https://jira-clone.fly.dev/projects";
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
    "twitter:image:width": "1297",
    "twitter:image:height": "635",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full w-full text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-[200px] mb-6 text-lg", children: "/projects ERROR" }, void 0, false, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "text-primary-main hover:underline", children: "Navigate to home" }, void 0, false, {
      fileName: "src/app/routes/__main/projects.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ProjectsRoute() {
  const { projectsSummary } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectsView, { projectsSummary }, void 0, false, {
    fileName: "src/app/routes/__main/projects.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  ProjectsRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects-Q5JVE54A.js.map

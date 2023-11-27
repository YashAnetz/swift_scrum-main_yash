import {
  IssuePanel
} from "/build/_shared/chunk-B5UC4I5R.js";
import "/build/_shared/chunk-HFO4DK57.js";
import "/build/_shared/chunk-4NR53C3Y.js";
import "/build/_shared/chunk-VXZWJF3R.js";
import "/build/_shared/chunk-EDGCQ7EH.js";
import "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-WFQVPQSX.js";
import "/build/_shared/chunk-6R7GYKXN.js";
import "/build/_shared/chunk-UD3IMZBA.js";
import {
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff
} from "/build/_shared/chunk-EEOCHXUC.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-TH5S6TNI.js";
import "/build/_shared/chunk-P4P35UP3.js";
import "/build/_shared/chunk-4TVAHHRS.js";
import "/build/_shared/chunk-EZ43UAVT.js";
import "/build/_shared/chunk-HKTS347N.js";
import "/build/_shared/chunk-GE42YXME.js";
import "/build/_shared/chunk-KTTHBX2X.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-Y5IUY2WO.js";
import {
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import "/build/_shared/chunk-XCXQ6IAD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { issue, projectId } = data;
  const title = `Jira clone - ${issue.name}`;
  const description = issue.description || "No description";
  const image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/${issue.name}`;
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
    "twitter:image:width": "1452",
    "twitter:image:height": "865",
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
function CatchBoundary() {
  const location = useLocation();
  const navigate = useNavigate();
  const boardUrl = location.pathname.split("/issue")[0];
  const handleProgrammaticNavigation = () => {
    navigate(boardUrl);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
    {
      className: t(
        "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto bg-black bg-opacity-50 py-[40px] px-[40px]",
        "radix-state-open:animate-fade-in duration-300"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
        {
          onPointerDownOutside: handleProgrammaticNavigation,
          className: t(
            "relative z-50 flex rounded-md bg-white py-12 px-20 shadow-lg flex-center dark:bg-dark-300",
            "duration-300 radix-state-open:animate-slide-up"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Error404,
            {
              message: "This issue does not exist. Go to the board page",
              href: boardUrl
            },
            void 0,
            false,
            {
              fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
              lineNumber: 183,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
          lineNumber: 176,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
      lineNumber: 170,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 169,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}
function IssuePanelRoute() {
  const { issue } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IssuePanel, { issue }, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/$issueId.tsx",
    lineNumber: 196,
    columnNumber: 10
  }, this);
}
export {
  CatchBoundary,
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board/issue/$issueId-CQGFCC5B.js.map

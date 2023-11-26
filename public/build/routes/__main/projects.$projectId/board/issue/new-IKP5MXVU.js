import {
  IssuePanel
} from "/build/_shared/chunk-IELYD6QZ.js";
import "/build/_shared/chunk-VZDUXWBL.js";
import "/build/_shared/chunk-56M7ZW4T.js";
import "/build/_shared/chunk-5M6ZSNFD.js";
import "/build/_shared/chunk-EDGCQ7EH.js";
import "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-VRFK2U4R.js";
import "/build/_shared/chunk-6R7GYKXN.js";
import "/build/_shared/chunk-UD3IMZBA.js";
import "/build/_shared/chunk-EEOCHXUC.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-TH5S6TNI.js";
import "/build/_shared/chunk-P4P35UP3.js";
import "/build/_shared/chunk-4TVAHHRS.js";
import "/build/_shared/chunk-EZ43UAVT.js";
import "/build/_shared/chunk-RB7NZDFW.js";
import "/build/_shared/chunk-GE42YXME.js";
import "/build/_shared/chunk-KTTHBX2X.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import "/build/_shared/chunk-FSLR7CSD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/__main/projects.$projectId/board/issue/new.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  const { projectId } = data;
  const title = `Jira clone - Create issue`;
  const description = "Create new issue, edit it and and assigne team members.";
  const image = "https://jira-clone.fly.dev/static/images/readme/issue-panel.png";
  const url = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/new`;
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
function IssuePanelRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IssuePanel, {}, void 0, false, {
    fileName: "src/app/routes/__main/projects.$projectId/board/issue/new.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
export {
  IssuePanelRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/__main/projects.$projectId/board/issue/new-IKP5MXVU.js.map

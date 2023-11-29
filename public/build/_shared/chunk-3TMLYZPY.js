import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectTriggerIcon
} from "/build/_shared/chunk-HFO4DK57.js";
import {
  PriorityIcon,
  TaskIcon,
  useProjectStore
} from "/build/_shared/chunk-4NR53C3Y.js";
import {
  $cc7e05a45900e73f$export$1ff3c3f08ae963c0,
  $cc7e05a45900e73f$export$2f60d3ec9ad468f2,
  $cc7e05a45900e73f$export$4c8d1a57a761ef94,
  $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
  $cc7e05a45900e73f$export$bf1aedc3039c8d63,
  $cc7e05a45900e73f$export$d5c6c08dc2d3ca7,
  $cc7e05a45900e73f$export$d6e5bf9c43ea9319
} from "/build/_shared/chunk-VXZWJF3R.js";
import {
  Cancel,
  Confirm,
  Content as Content2,
  Description as Description2,
  MdDeleteOutline,
  Overlay as Overlay2,
  Portal as Portal2,
  Root as Root2,
  Title as Title3,
  Trigger,
  defaultIssuesIds,
  prioritiesMock
} from "/build/_shared/chunk-376LLFFT.js";
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  TextareaAutosize,
  Title,
  Title2,
  textAreOnlySpaces
} from "/build/_shared/chunk-WFQVPQSX.js";
import {
  IoCloseOutline,
  Kbd
} from "/build/_shared/chunk-6R7GYKXN.js";
import {
  Q
} from "/build/_shared/chunk-TH5S6TNI.js";
import {
  useUserStore
} from "/build/_shared/chunk-EZ43UAVT.js";
import {
  UserAvatar
} from "/build/_shared/chunk-HKTS347N.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLocation,
  useNavigate,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-N6RV6PVQ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_react8 = __toESM(require_react());

// src/utils/formatDateTime.ts
var formatDateTime = (timestamp) => {
  const locale = "en-US";
  const date = new Date(timestamp).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const time = new Date(timestamp).toLocaleTimeString(locale, {
    hour12: false,
    timeStyle: "short"
  });
  return `${time} \xB7 ${date}`;
};

// src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PanelHeaderIssue = ({
  id,
  deleteDisabled
}) => {
  const location = useLocation();
  const previousUrl = location.pathname.split("/issue")[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex flex-grow items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskIcon, { size: 20 }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-font-light text-opacity-80 dark:text-font-light-dark", children: id }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteIssueModalDialog, { disabled: deleteDisabled }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: previousUrl,
        className: "ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100",
        "aria-label": "Close issue panel",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IoCloseOutline, { size: 32 }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var DeleteIssueModalDialog = ({
  disabled
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Trigger,
      {
        className: t(
          "flex cursor-pointer rounded border-none p-1.5 text-icon flex-center hover:bg-grey-300 dark:text-font-light-dark dark:hover:bg-dark-100",
          disabled ? "cursor-not-allowed" : "hover:text-error-main dark:hover:text-error-main-dark"
        ),
        "aria-label": "Open delete issue dialog",
        disabled,
        title: disabled ? "This user cannot delete the issue" : "Delete issue",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdDeleteOutline, { size: 26 }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay2, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title3, { children: "Delete issue?" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description2, { children: "This action is permanent and cannot be undone. Are you sure you want to remove this issue completely?" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "delete", className: "mt-8 flex w-full justify-end gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, { "aria-label": "Cancel", children: "Cancel" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
            lineNumber: 71,
            columnNumber: 13
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
              fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/panel-header-issue.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var EditBox = ({
  defaultMessage,
  autofocus,
  save,
  cancel
}) => {
  const [message, setMessage] = (0, import_react2.useState)(defaultMessage);
  const [initError, setInitError] = (0, import_react2.useState)(false);
  const [isEditing, setIsEditing] = (0, import_react2.useState)(false);
  const messageIsValid = () => {
    return message.length > 0 && !textAreOnlySpaces(message);
  };
  const resetValues = () => {
    setMessage(defaultMessage);
    setInitError(false);
    setIsEditing(false);
  };
  const onSave = () => {
    if (messageIsValid()) {
      save(message);
      resetValues();
    } else {
      setInitError(true);
    }
  };
  const onCancel = () => {
    if (cancel)
      cancel();
    resetValues();
  };
  const onFocus = () => setIsEditing(true);
  const isError = initError && !messageIsValid();
  const buttonStyle = t("mt-2 py-2.5 px-4 rounded");
  const placeholder = isError ? "Message cannot be empty" : "Add your comment...";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextareaAutosize,
      {
        name: "comment",
        value: message,
        setValue: setMessage,
        placeholder,
        onFocus,
        autofocus,
        textareaClassName: t(
          "min-h-[80px] leading-6 font-primary-light outline outline-2 outline-grey-400 focus:outline-primary-main dark:outline-dark-200 dark:focus:outline-primary-main-dark bg-grey-200",
          isError && "placeholder:text-error-main placeholder:text-opacity-70 !outline-error-main !outline-2"
        )
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: t("space-x-2 text-sm", isEditing ? "visible" : "hidden"),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              type: "button",
              className: t(
                buttonStyle,
                "bg-primary-main text-white hover:bg-primary-main-hover"
              ),
              onClick: onSave,
              "aria-label": "Save comment",
              children: "Save"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 65,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              className: t(
                buttonStyle,
                "hover:bg-error-light hover:text-error-dark dark:hover:bg-dark-100 dark:hover:text-font-main-dark"
              ),
              onClick: onCancel,
              "aria-label": "Cancel comment",
              children: "Cancel"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
              lineNumber: 76,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/edit-box.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var CreateComment = ({
  addComment
}) => {
  const { user } = useUserStore();
  const save = (message) => {
    addComment({
      id: "temp-" + v4_default(),
      user,
      message,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex items-start gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditBox, { defaultMessage: "", save }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/create-comment.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var ViewComment = ({
  comment,
  removeComment
}) => {
  const { user } = useUserStore();
  const [isEditing, setIsEditing] = (0, import_react3.useState)(false);
  const fetcher = useFetcher();
  const isNotSelfComment = comment.user.id !== user.id;
  const edit = () => setIsEditing(true);
  const cancel = () => setIsEditing(false);
  const remove = () => {
    removeComment(comment.id);
    if (comment.id.startsWith("temp-"))
      return;
    fetcher.submit(
      { commentId: comment.id, _action: "deleteComment" },
      { method: "delete" }
    );
  };
  const save = (commentText) => {
    comment.message = commentText;
    setIsEditing(false);
  };
  const IdleComment = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "font-primary-light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: comment.message }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: t(
          "mt-3 text-font-light dark:text-font-light-dark",
          isNotSelfComment ? "hidden" : "visible"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              onClick: edit,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Edit comment",
              children: "Edit"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              onClick: remove,
              disabled: isNotSelfComment,
              className: "font-primary-light text-xs hover:underline",
              "aria-label": "Delete comment",
              children: "Delete"
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserAvatar, { ...comment.user }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mr-4 inline-block font-primary-bold", children: comment.user.name }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-primary-light text-xs", children: [
        comment.createdAt ? formatDateTime(comment.createdAt) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { children: "Date undefined" }, void 0, false, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        commentIsEdited(comment) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "mx-2", children: "\xB7" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "EDITED" }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3", children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        EditBox,
        {
          defaultMessage: comment.message,
          save,
          cancel,
          autofocus: true
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
          lineNumber: 91,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IdleComment, {}, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/comment/view-comment.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
};
var commentIsEdited = (comment) => {
  const createdAtInSeconds = Math.floor(comment.createdAt / 1e3);
  const updatedAtInSeconds = Math.floor(comment.updatedAt / 1e3);
  return createdAtInSeconds !== updatedAtInSeconds;
};

// src/app/ui/main/project/board/issue-panel/select-status.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var SelectStatus = ({ initStatus }) => {
  var _a;
  const projectStore = useProjectStore();
  const categories = projectStore.project.categories;
  const initCategory = categories.find(
    (category) => category.type === initStatus
  );
  if (!initCategory) {
    throw new Error("No default category found");
  }
  const defaultValue = initCategory.id;
  const [selectedValue, setSelectedValue] = (0, import_react5.useState)(defaultValue);
  const selectedStatus = (_a = categories.find(
    (category) => category.id === selectedValue
  )) == null ? void 0 : _a.type;
  const onValueChange = (value) => {
    setSelectedValue(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
    {
      name: "status",
      defaultValue,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          SelectTrigger,
          {
            "aria-label": "Open status select",
            className: t(
              selectedStatus === "IN_PROGRESS" && "!bg-primary-main !text-white hover:!bg-primary-main-hover",
              selectedStatus === "DONE" && "!bg-success-main !text-white hover:!bg-success-light"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$4c8d1a57a761ef94, { className: "pt-1" }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 50,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTriggerIcon, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 51,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 41,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { children: [
            categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: category.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItemIndicator, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "span",
                {
                  className: t(
                    "flex w-fit items-center gap-2 rounded p-0.5 text-2xs uppercase dark:bg-dark-300",
                    category.type === "TODO" && "bg-grey-300 text-font-grey dark:text-font-light-dark",
                    category.type === "IN_PROGRESS" && "bg-primary-light text-primary-main dark:text-primary-main-dark",
                    category.type === "DONE" && "bg-font-success-light text-font-success-main dark:text-font-success-main-dark"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children: category.name }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
                  lineNumber: 59,
                  columnNumber: 15
                },
                this
              )
            ] }, index, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-status.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-priority.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var SelectPriority = ({ initPriority }) => {
  const [selectValue, setSelectValue] = (0, import_react6.useState)(initPriority);
  const onValueChange = (value) => {
    const priority = value;
    setSelectValue(priority);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
    {
      name: "priority",
      defaultValue: initPriority,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectTrigger, { "aria-label": "Open priority select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PriorityIcon, { priority: selectValue }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$4c8d1a57a761ef94, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectTriggerIcon, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { children: [
            prioritiesMock.map((priority, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              SelectItem,
              {
                value: priority.id,
                className: "text-xs uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectItemIndicator, {}, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 43,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PriorityIcon, { priority: priority.id }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children: priority.name }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                    lineNumber: 45,
                    columnNumber: 15
                  }, this)
                ]
              },
              index,
              true,
              {
                fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
                lineNumber: 38,
                columnNumber: 13
              },
              this
            )),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-priority.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/select-asignee.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var SelectAsignee = ({ initAsignee }) => {
  const projectStore = useProjectStore();
  const users = projectStore.project.users;
  const [selectedValue, setSelectedValue] = (0, import_react7.useState)(initAsignee);
  const onValueChange = (userId) => {
    const asignee = projectStore.project.users.find(
      (user) => user.id === userId
    );
    if (asignee) {
      setSelectedValue(asignee);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
    {
      style: { backgroundColor: "#2D4059" },
      name: "asignee",
      defaultValue: initAsignee.id,
      onValueChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectTrigger, { "aria-label": "Open asignee select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatar, { ...selectedValue, size: 32 }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$4c8d1a57a761ef94, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectTriggerIcon, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectContent, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { children: [
            users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectItem, { value: user.id, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SelectItemIndicator, {}, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children: user.name }, void 0, false, {
                fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
                lineNumber: 50,
                columnNumber: 15
              }, this)
            ] }, index, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, {}, void 0, false, {
              fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, {}, void 0, false, {
            fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/app/ui/main/project/board/issue-panel/select-asignee.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
};

// src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var IssuePanel = ({ issue }) => {
  var _a;
  const [isOpen, setIsOpen] = (0, import_react8.useState)(true);
  const [comments, setComments] = (0, import_react8.useState)((issue == null ? void 0 : issue.comments) || []);
  const [portalContainer, setPortalContainer] = (0, import_react8.useState)(
    null
  );
  const { user } = useUserStore();
  const reporter = issue ? issue.reporter : user;
  const formRef = (0, import_react8.useRef)(null);
  const actionData = useActionData();
  const fetcher = useFetcher();
  const params = useSearchParams();
  const transition = useTransition();
  const location = useLocation();
  const navigate = useNavigate();
  const initStatus = params[0].get("category") || "TODO";
  const userIsNotReporter = user.id !== reporter.id;
  const postData = (0, import_react8.useCallback)(
    (formTarget) => {
      const isExistingIssue = Boolean(issue == null ? void 0 : issue.id);
      const formData = new FormData(formTarget);
      const action = isExistingIssue ? "update" : "create";
      formData.set("comments", JSON.stringify(comments));
      formData.set("_action", action);
      fetcher.submit(formData, {
        method: "post"
      });
    },
    [comments, fetcher]
  );
  const handleProgrammaticSubmit = (0, import_react8.useCallback)(() => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);
  const onKeyDown = (0, import_react8.useCallback)(
    (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );
  const handleFormSumbit = (e) => {
    e.preventDefault();
    postData(e.currentTarget);
  };
  const handleProgrammaticClose = () => {
    setIsOpen(false);
  };
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  const removeComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };
  (0, import_react8.useEffect)(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  (0, import_react8.useEffect)(() => {
    if (!isOpen) {
      setTimeout(() => {
        const previousUrl = location.pathname.split("/issue")[0];
        navigate(previousUrl);
      }, 300);
    }
  }, [isOpen, navigate, location.pathname]);
  (0, import_react8.useEffect)(() => {
    var _a2;
    const formAction = (_a2 = fetcher.formData) == null ? void 0 : _a2.get("_action");
    if (fetcher.type === "actionRedirect" && formAction === "create") {
      Q.success("Issue created successfully");
    }
  }, [fetcher.type]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Root, { open: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Portal, { container: portalContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Overlay, { className: isOpen ? "" : "bg-opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      Content,
      {
        onEscapeKeyDown: handleProgrammaticClose,
        onPointerDownOutside: handleProgrammaticClose,
        className: isOpen ? "" : "translate-y-[10px] opacity-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            PanelHeaderIssue,
            {
              id: (issue == null ? void 0 : issue.id) || "Create new issue",
              deleteDisabled: userIsNotReporter || defaultIssuesIds.includes((issue == null ? void 0 : issue.id) || "")
            },
            void 0,
            false,
            {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 133,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { style: { backgroundColor: "#2D4059", width: "940px", padding: "20px", borderRadius: "20px" }, method: "post", onSubmit: handleFormSumbit, ref: formRef, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-5 gap-16", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "col-span-2 space-y-10 dark:text-font-light-dark", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "mb-1", children: "Status" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 144,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    SelectStatus,
                    {
                      initStatus: (issue == null ? void 0 : issue.categoryType) || initStatus
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 145,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 143,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "mb-1", children: "Priority" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 150,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    SelectPriority,
                    {
                      initPriority: (issue == null ? void 0 : issue.priority.id) || "low"
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 151,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 149,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "mb-1", children: "Asignee" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 156,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectAsignee, { initAsignee: (issue == null ? void 0 : issue.asignee) || user }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 157,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 155,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "mb-1", children: "Reporter" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 160,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { backgroundColor: "#5a7fb0", borderRadius: "5px" }, className: "mt-1 flex w-fit items-center gap-2  bg-grey-300 py-1 pl-1 pr-3.5 pb-1 dark:bg-dark-500", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UserAvatar, { ...reporter }, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 162,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                      "input",
                      {
                        type: "hidden",
                        name: "reporter",
                        value: reporter.id
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                        lineNumber: 163,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "m-0", children: reporter.name }, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 168,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 161,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 159,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { color: "#ffd460" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CreatedUpdatedAt, { issue }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 171,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 142,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "col-span-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Title, { className: "my-5 -ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Title2,
                  {
                    initTitle: (issue == null ? void 0 : issue.name) || "",
                    readOnly: userIsNotReporter,
                    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 177,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 176,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "font-primary-black text-font-main dark:text-font-main-dark", children: "Description" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 183,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { color: "#ffd460" }, className: "-ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  Description,
                  {
                    initDescription: (issue == null ? void 0 : issue.description) || "",
                    readOnly: userIsNotReporter
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 186,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#ffd460" }, className: "font-primary-black text-font-main dark:text-font-main-dark", children: "Comments" }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 193,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CreateComment, { addComment }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 197,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 196,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { style: { color: "white" }, className: "mt-8 space-y-6", children: comments.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    ViewComment,
                    {
                      comment,
                      removeComment
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 202,
                      columnNumber: 29
                    },
                    this
                  ) }, comment.id, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 201,
                    columnNumber: 27
                  }, this)) }, void 0, false, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 199,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 192,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 175,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6 grid grid-cols-3 items-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { style: { color: "#ffd460" }, className: " text-2xs text-font-light text-opacity-80 dark:text-font-light-dark", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Kbd, { children: "Shift" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 215,
                  columnNumber: 27
                }, this),
                " + ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Kbd, { children: "S" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 215,
                  columnNumber: 46
                }, this),
                " to accept"
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 214,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "button",
                {
                  style: { color: "#ffd460", backgroundColor: "#5a7fb0", borderRadius: "20px" },
                  type: "submit",
                  className: "flex w-fit cursor-pointer items-center gap-4 justify-self-center rounded border-none bg-primary-main py-2 px-8 font-primary-bold text-lg text-white enabled:hover:bg-primary-main-hover disabled:cursor-not-allowed disabled:opacity-60",
                  disabled: transition.state !== "idle",
                  "aria-label": "Accept changes",
                  children: transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
                    "Submmiting",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Spinner, {}, void 0, false, {
                      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                      lineNumber: 226,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                    lineNumber: 224,
                    columnNumber: 23
                  }, this) : "Accept"
                },
                void 0,
                false,
                {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 217,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { style: { color: "#ffd460" }, className: "justify-self-end font-primary-light text-2xs text-font-light text-opacity-80 dark:text-font-light-dark", children: [
                "Press ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Kbd, { children: "Esc" }, void 0, false, {
                  fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                  lineNumber: 233,
                  columnNumber: 27
                }, this),
                " to close"
              ] }, void 0, true, {
                fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
                lineNumber: 232,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
              lineNumber: 213,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 128,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "div",
      {
        ref: setPortalContainer,
        className: "fixed top-0 left-0 w-full h-full z-50"
      },
      void 0,
      false,
      {
        fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
        lineNumber: 242,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
};
var CreatedUpdatedAt = ({ issue }) => {
  const values = [
    { label: "Created at:", value: issue == null ? void 0 : issue.createdAt },
    { label: "Updated at:", value: issue == null ? void 0 : issue.updatedAt }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tbody", { className: "text-sm", children: values.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { className: "pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-2", children: label }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 266,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 265,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-2 text-white", children: value ? formatDateTime(value) : "Just now" }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 269,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
      lineNumber: 268,
      columnNumber: 13
    }, this)
  ] }, label, true, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 264,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 262,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 261,
    columnNumber: 5
  }, this);
};
var Spinner = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    "aria-hidden": "true",
    className: "dark:text-gray-600 mr-2 inline-block h-5 w-5 animate-spin fill-grey-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentBaseColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
          lineNumber: 288,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentColor"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
          lineNumber: 292,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "src/app/ui/main/project/board/issue-panel/issue-panel.view.tsx",
    lineNumber: 281,
    columnNumber: 3
  },
  this
);

export {
  IssuePanel
};
//# sourceMappingURL=/build/_shared/chunk-3TMLYZPY.js.map

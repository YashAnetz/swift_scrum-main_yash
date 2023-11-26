import {
  $d08ef79370b62062$export$1ff3c3f08ae963c0,
  $d08ef79370b62062$export$41fb9f06171c75f4,
  $d08ef79370b62062$export$602eac185826482c,
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  $d08ef79370b62062$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-RA6QCO7A.js";
import {
  FaPowerOff
} from "/build/_shared/chunk-P4P35UP3.js";
import "/build/_shared/chunk-4TVAHHRS.js";
import {
  UserContextProvider,
  useUserStore
} from "/build/_shared/chunk-EZ43UAVT.js";
import {
  UserAvatar
} from "/build/_shared/chunk-RB7NZDFW.js";
import "/build/_shared/chunk-GE42YXME.js";
import "/build/_shared/chunk-KTTHBX2X.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// empty-module:@app/session-storage/user-storage.server
var require_user_storage = __commonJS({
  "empty-module:@app/session-storage/user-storage.server"(exports, module) {
    module.exports = {};
  }
});

// src/app/routes/__main.tsx
var import_node = __toESM(require_node());
var import_user_storage = __toESM(require_user_storage());

// src/app/ui/main/header/user-profile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var UserProfile = () => {
  const { user } = useUserStore();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$be92b6f5f03c0fe9, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$41fb9f06171c75f4, { className: "ml-1 rounded-full outline outline-2 outline-grey-300 hover:outline-primary-main dark:outline-grey-600 dark:hover:outline-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      $d08ef79370b62062$export$7c6e2c02157bb7d2,
      {
        align: "end",
        sideOffset: 5,
        className: t(
          "z-50 rounded bg-white shadow-md-dark dark:bg-dark-400",
          "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { className: "flex flex-col items-center p-3 !outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...user, size: 80 }, void 0, false, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 26,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-2 text-lg", children: user.name }, void 0, false, {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$1ff3c3f08ae963c0, { className: "h-px bg-grey-500 dark:bg-dark-100" }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { className: "select-none p-1 !outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "action/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              onClick: (e) => e.stopPropagation(),
              className: "flex w-full items-center gap-2 rounded p-2 text-sm text-error-main hover:bg-error-light dark:text-error-main-dark dark:hover:bg-dark-100",
              "aria-label": "Log out",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaPowerOff, {}, void 0, false, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 38,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Log out" }, void 0, false, {
                  fileName: "src/app/ui/main/header/user-profile.tsx",
                  lineNumber: 39,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "src/app/ui/main/header/user-profile.tsx",
              lineNumber: 32,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "src/app/ui/main/header/user-profile.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/header/user-profile.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/user-profile.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/header/user-profile.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/header/logomain.png
var logomain_default = "/build/_assets/logomain-FDFXRGJZ.png";

// src/app/ui/main/header/header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Header = () => {
  const iconBaseClass = "w-[24px] h-[24px] rounded-full flex items-center justify-center cursor-pointer fill-white hover:bg-primary-light hover:text-primary-main dark:text-white dark:fill-dark-300 dark:hover:bg-dark-100 dark:hover:text-primary-main-dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { style: { backgroundColor: "#2D4059" }, className: "relative z-10 flex w-full items-center justify-between bg-white py-2 px-5 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] dark:bg-dark-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Link,
      {
        to: "/",
        className: "flex cursor-pointer items-center rounded py-2 px-3 hover:bg-primary-light dark:hover:bg-dark-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logomain_default, width: 24, height: 24, alt: "Logo" }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { color: "white" }, className: "ml-2", children: "swiftScrum" }, void 0, false, {
            fileName: "src/app/ui/main/header/header.tsx",
            lineNumber: 22,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/ui/main/header/header.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserProfile, {}, void 0, false, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/ui/main/header/header.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/header/header.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// src/app/ui/main/main.layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MainLayout = ({ user }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserContextProvider, { user, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full flex-col bg-white dark:bg-dark-400 dark:text-font-main-dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, {}, void 0, false, {
      fileName: "src/app/ui/main/main.layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/ui/main/main.layout.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/ui/main/main.layout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// src/app/routes/__main.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function AppRoute() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MainLayout, { user }, void 0, false, {
    fileName: "src/app/routes/__main.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
export {
  AppRoute as default
};
//# sourceMappingURL=/build/routes/__main-2QA6EXTK.js.map

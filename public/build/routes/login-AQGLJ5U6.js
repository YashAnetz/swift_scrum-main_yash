import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectTriggerIcon
} from "/build/_shared/chunk-VZDUXWBL.js";
import {
  $cc7e05a45900e73f$export$1ff3c3f08ae963c0,
  $cc7e05a45900e73f$export$2f60d3ec9ad468f2,
  $cc7e05a45900e73f$export$4c8d1a57a761ef94,
  $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
  $cc7e05a45900e73f$export$bf1aedc3039c8d63,
  $cc7e05a45900e73f$export$d5c6c08dc2d3ca7,
  $cc7e05a45900e73f$export$d6e5bf9c43ea9319
} from "/build/_shared/chunk-5M6ZSNFD.js";
import {
  userMock1
} from "/build/_shared/chunk-NCHMJE4I.js";
import "/build/_shared/chunk-UD3IMZBA.js";
import "/build/_shared/chunk-KHVVK2Q5.js";
import "/build/_shared/chunk-4TVAHHRS.js";
import {
  UserAvatar
} from "/build/_shared/chunk-RB7NZDFW.js";
import "/build/_shared/chunk-KTTHBX2X.js";
import "/build/_shared/chunk-6DAQMQYB.js";
import "/build/_shared/chunk-FSLR7CSD.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/app/routes/login.tsx
var import_node = __toESM(require_node());

// src/app/ui/login/login.view.tsx
var import_react = __toESM(require_react());

// src/app/ui/login/logomain.png
var logomain_default = "/build/_assets/logomain-FDFXRGJZ.png";

// src/app/ui/login/login.view.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LoginView = ({ users }) => {
  const [selectedValue, setSelectedValue] = (0, import_react.useState)(userMock1);
  const onValueChange = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-[800px] pt-[20vh]", style: { backgroundColor: "#2D4059", position: "relative", padding: "250px", borderRadius: "10px", top: "0px", left: "0", right: "0", left: "0", margin: "auto", height: "100vh" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: logomain_default }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: { fontSize: "20px", color: "#ffd460" }, children: "Login to swiftScrum" }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: { fontSize: "20px", color: "white" }, className: "mt-3 mb-8 font-primary-light text-lg text-font-dark dark:text-font-light-dark", children: "Users have been added by your organization . Contact your admin to add new users." }, void 0, false, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mx-auto w-[300px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $cc7e05a45900e73f$export$be92b6f5f03c0fe9,
        {
          name: "user",
          defaultValue: userMock1.id,
          onValueChange,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              SelectTrigger,
              {
                style: { backgroundColor: "#ffd460", borderRadius: "30px" },
                className: "flex w-full justify-between",
                "aria-label": "Open user select",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...selectedValue }, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 44,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$4c8d1a57a761ef94, {}, void 0, false, {
                      fileName: "src/app/ui/login/login.view.tsx",
                      lineNumber: 45,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTriggerIcon, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 39,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { children: [
                users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: user.id, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemIndicator, {}, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 54,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { ...user }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 55,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children: user.name }, void 0, false, {
                    fileName: "src/app/ui/login/login.view.tsx",
                    lineNumber: 56,
                    columnNumber: 19
                  }, this)
                ] }, index, true, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this)),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, {}, void 0, false, {
                  fileName: "src/app/ui/login/login.view.tsx",
                  lineNumber: 59,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, {}, void 0, false, {
                fileName: "src/app/ui/login/login.view.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "src/app/ui/login/login.view.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          style: { width: "100px", backgroundColor: "#FFD460", marginTop: "10px", height: "30px", borderRadius: "20px" },
          type: "submit",
          name: "_action",
          value: "setUser",
          "aria-label": "Login",
          children: "Login"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          style: { width: "150px", backgroundColor: "#FFD460", marginTop: "10px", marginLeft: "10px", height: "30px", borderRadius: "20px" },
          children: "Contact Admin"
        },
        void 0,
        false,
        {
          fileName: "src/app/ui/login/login.view.tsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/ui/login/login.view.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/ui/login/login.view.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};

// src/app/routes/login.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LoginRoute() {
  const { users } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoginView, { users }, void 0, false, {
    fileName: "src/app/routes/login.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
export {
  LoginRoute as default
};
//# sourceMappingURL=/build/routes/login-AQGLJ5U6.js.map

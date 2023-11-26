import {
  k
} from "/build/_shared/chunk-TH5S6TNI.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  formatProperties,
  formatTags
} from "/build/_shared/chunk-NY22QEBI.js";
import {
  Error404
} from "/build/_shared/chunk-Y5IUY2WO.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-QERF53GL.js";
import {
  require_node
} from "/build/_shared/chunk-WA2U3LPD.js";
import {
  Error500
} from "/build/_shared/chunk-SVGTTPU7.js";
import "/build/_shared/chunk-XCXQ6IAD.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// empty-module:./session-storage/theme-storage.server
var require_theme_storage = __commonJS({
  "empty-module:./session-storage/theme-storage.server"(exports, module) {
    module.exports = {};
  }
});

// src/app/root.tsx
var import_react3 = __toESM(require_react());
var import_node = __toESM(require_node());

// src/app/store/theme.store.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["LIGHT"] = "light";
  Theme2["DARK"] = "dark";
  return Theme2;
})(Theme || {});
var themes = Object.values(Theme);
var Preference = /* @__PURE__ */ ((Preference2) => {
  Preference2["SELECTED"] = "selected";
  Preference2["SYSTEM"] = "system";
  return Preference2;
})(Preference || {});
var preferences = Object.values(Preference);
var DEFAULT_PREFERENCE = "system" /* SYSTEM */;
var ThemeContext = (0, import_react.createContext)(null);
var prefersLightMQ = "(prefers-color-scheme: light)";
var getSystemTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */;
var ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference
}) => {
  const [theme, setThemeState] = (0, import_react.useState)(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme))
        return specifiedTheme;
      else
        return null;
    }
    if (typeof window !== "object")
      return null;
    return getSystemTheme();
  });
  const [preference, setPreference] = (0, import_react.useState)(() => {
    if (isValidPreference(specifiedPreference))
      return specifiedPreference;
    return DEFAULT_PREFERENCE;
  });
  const persistTheme = useFetcher();
  const persistThemeRef = (0, import_react.useRef)(persistTheme);
  (0, import_react.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      if (preference !== "system" /* SYSTEM */)
        return;
      const newTheme = mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */;
      setThemeState(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preference]);
  const setTheme = (0, import_react.useCallback)(
    (newTheme, newPreference = "system" /* SYSTEM */) => {
      persistThemeRef.current.submit(
        { theme: newTheme, preference: newPreference },
        { action: "action/set-theme", method: "post" }
      );
      setThemeState(newTheme);
      setPreference(newPreference);
    },
    []
  );
  const value = {
    theme,
    preference,
    setTheme
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value, children }, void 0, false, {
    fileName: "src/app/store/theme.store.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
};
var useTheme = () => {
  const themeContext = (0, import_react.useContext)(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
var isValidPreference = (preference) => {
  return preferences.includes(preference);
};

// src/app/root.tsx
var import_theme_storage = __toESM(require_theme_storage());

// src/app/components/toast.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Toast = () => {
  const { theme } = useTheme();
  const toastTheme = theme || "light" /* LIGHT */;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    k,
    {
      position: "top-right",
      autoClose: 5e3,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: toastTheme
    },
    void 0,
    false,
    {
      fileName: "src/app/components/toast.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
};

// src/app/styles/app-compiled.css
var app_compiled_default = "/build/_assets/app-compiled-DD2OTY5O.css";

// src/app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-O3VH7KO3.css";

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-MAHHHE2E.css";

// src/app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: fonts_default },
    { rel: "stylesheet", href: app_compiled_default },
    { rel: "stylesheet", href: ReactToastify_default },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
  ];
};
var meta = () => {
  const title = "Jira clone";
  const description = "Task manager application inspired in Jira. Side project made with Remix, React, Tailwind, TypeScript and more.";
  const image = "https://jira-clone.fly.dev/static/images/select-theme-light.png";
  const url = "https://jira-clone.fly.dev";
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
    "twitter:image:width": "951",
    "twitter:image:height": "696",
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
function AppWithProviders() {
  const { theme, preference } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ThemeProvider, { specifiedTheme: theme, specifiedPreference: preference, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(App, {}, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
var App = () => {
  const loaderData = useLoaderData();
  const { theme: sessionTheme, preference: sessionPreference } = loaderData;
  const { theme } = useTheme();
  const fetcher = useFetcher();
  const isDarkTheme = theme === "dark" /* DARK */;
  (0, import_react3.useEffect)(() => {
    if (sessionTheme && sessionPreference === "selected" /* SELECTED */)
      return;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" /* DARK */ : "light" /* LIGHT */;
    fetcher.submit(
      { theme: systemTheme, preference: "system" /* SYSTEM */ },
      { action: "action/set-theme", method: "post" }
    );
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: t("h-full", isDarkTheme && "dark" /* DARK */), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full font-primary text-font-main dark:bg-dark-300 dark:text-font-main-dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Toast, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: !sessionTheme ? `
                (function () {
                  if (typeof window === 'undefined') return;

                  const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                  if (isSystemThemeDark) {
                    const htmlElement = document.documentElement;
                    htmlElement.classList.add('dark');
                  }
                })();
              ` : ""
          }
        },
        void 0,
        false,
        {
          fileName: "src/app/root.tsx",
          lineNumber: 130,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/root.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
};
var errorComponentStyle = {
  maxWidth: "500px",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#0052cc",
  fontFamily: "sans-serif",
  fontWeight: "bold"
};
function ErrorBoundary({ error }) {
  console.error(error);
  const errorMessage = "It seems there is a critical error! Please try again or contact me at: danielserrano.contacto@gmail.com";
  return (
    // Inline styles because tailwind is not loaded at this point
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error500, { message: errorMessage, href: "/" }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 173,
      columnNumber: 5
    }, this)
  );
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Oops! Not found" }, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/app/root.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/root.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: errorComponentStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Error404,
      {
        message: "It seems that you have lost! Go to the main page",
        href: "/"
      },
      void 0,
      false,
      {
        fileName: "src/app/root.tsx",
        lineNumber: 189,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/root.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/root.tsx",
    lineNumber: 181,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  AppWithProviders as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-CKCTNMRW.js.map

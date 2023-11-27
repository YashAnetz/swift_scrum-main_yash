import {
  $cc7e05a45900e73f$export$41fb9f06171c75f4,
  $cc7e05a45900e73f$export$6d08773d2e66f8f2,
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2,
  $cc7e05a45900e73f$export$c3468e2714d175fa,
  $cc7e05a45900e73f$export$f04a61298a47a40f
} from "/build/_shared/chunk-VXZWJF3R.js";
import {
  twix
} from "/build/_shared/chunk-KHVVK2Q5.js";
import {
  GenIcon
} from "/build/_shared/chunk-KTTHBX2X.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// node_modules/react-icons/ri/index.esm.js
function RiArrowDropDownLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" } }] })(props);
}

// src/app/components/select.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SelectTrigger = twix(
  $cc7e05a45900e73f$export$41fb9f06171c75f4,
  t(
    "flex cursor-pointer items-center rounded border-none bg-grey-300 dark:bg-dark-500 py-1.5 px-2",
    "font-primary-bold text-sm text-font-grey dark:text-font-main-dark hover:bg-grey-500 dark:hover:bg-dark-200"
  )
);
var SelectTriggerIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$f04a61298a47a40f, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiArrowDropDownLine, { size: 28 }, void 0, false, {
  fileName: "src/app/components/select.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/components/select.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);
var SelectContent = twix(
  $cc7e05a45900e73f$export$7c6e2c02157bb7d2,
  "border-1 border-grey-400 bg-white dark:bg-dark-500 py-1 shadow-md"
);
var SelectItem = twix(
  $cc7e05a45900e73f$export$6d08773d2e66f8f2,
  t(
    "relative flex items-center gap-2 cursor-pointer select-none border-l-[3px] border-l-transparent p-2 pl-8",
    "font-primary-bold text-sm text-font-grey dark:text-font-light-dark font-primary-bold text-sm text-font-grey",
    "focus:border-l-[3px] focus:border-l-primary-main focus:bg-grey-300 focus-visible:outline-none dark:focus:bg-dark-100 dark:hover:bg-dark-100 outline-none"
  )
);
var SelectItemIndicator = twix(
  $cc7e05a45900e73f$export$c3468e2714d175fa,
  "absolute left-3 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-primary-main"
);

export {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator
};
//# sourceMappingURL=/build/_shared/chunk-HFO4DK57.js.map

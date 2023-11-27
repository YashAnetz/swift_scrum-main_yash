import {
  userMock1,
  userMock2,
  usersMock
} from "/build/_shared/chunk-BQPQJZQN.js";
import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$69b62a49393917d6,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-EEOCHXUC.js";
import {
  twix
} from "/build/_shared/chunk-KHVVK2Q5.js";
import {
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  GenIcon,
  _extends
} from "/build/_shared/chunk-KTTHBX2X.js";
import {
  t
} from "/build/_shared/chunk-FSLR7CSD.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-JR7JHID7.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// src/domain/comment/comment.mock.ts
var createdAt = Date.now();
var updatedAt = Date.now();
var commentMock1 = {
  id: "92149ee5-0459-4286-8323-1542e1295154",
  user: usersMock[3],
  // Jessie
  message: "Investigated the user registration bug. Found an issue with the validation process. Working on a fix and will update once resolved.",
  createdAt,
  updatedAt
};
var commentMock2 = {
  id: "3375b7ea-425d-4bd3-a728-c8888b63a7f2",
  user: usersMock[7],
  // Little Green Men
  message: "Started implementing advanced search options for improved functionality. Discussing design considerations with the team to ensure a seamless user experience.",
  createdAt,
  updatedAt
};
var commentMock3 = {
  id: "ee000718-85e5-44ac-91e2-e29340fb0b61",
  user: usersMock[5],
  // Mr. Potato
  message: "This is not they only accessible feature implemented. By using Radix UI, components like select, dialog or checkboxes are accessible by default, and you can handle them with the keyboard.",
  createdAt,
  updatedAt
};
var commentMock4 = {
  id: "c0db6d6f-f395-4882-8bf4-e644f0e45460",
  user: userMock1,
  // Daniel Serrano
  message: "Conducted a performance analysis of the dashboard. Identified key bottlenecks and planning optimizations. Next step is to implement and test improvements.",
  createdAt,
  updatedAt
};
var commentMock5 = {
  id: "6c57eff9-f310-470a-b8e9-0f5234b63f5a",
  user: usersMock[6],
  // Ms. Potato
  message: "Researched and selected a secure two-factor authentication solution. Starting the implementation process. Will update with progress and any challenges.",
  createdAt,
  updatedAt
};

// src/domain/priority/priority.mock.ts
var prioritiesMock = [
  {
    id: "low",
    name: "Low",
    order: 0
  },
  {
    id: "medium",
    name: "Medium",
    order: 1
  },
  {
    id: "high",
    name: "High",
    order: 2
  }
];
var priorityLow = prioritiesMock[0];
var priorityMedium = prioritiesMock[1];
var priorityHigh = prioritiesMock[2];

// src/domain/issue/issue.mock.ts
var createdAt2 = (/* @__PURE__ */ new Date("2022-01-18 11:00")).valueOf();
var todoIssuesMock1 = [];
var inProgressIssuesMock1 = [
  {
    id: "ea07f7ca-13e9-4143-b623-f5713adef81a",
    name: "User Registration Bug",
    description: "Users are unable to register on the website due to a bug in the registration process. Investigate and fix the issue.",
    reporter: userMock1,
    // Daniel Serrano
    asignee: userMock2,
    // Woody
    comments: [],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: createdAt2
  },
  {
    id: "23717058-379a-447a-a215-e425a124154f",
    name: "Enhance Search Functionality",
    description: "Improve the search feature to allow users to filter and find information more efficiently. Consider adding advanced search options and keyword highlighting.",
    reporter: userMock2,
    // Woody
    asignee: usersMock[2],
    // Buzz Lightyear
    comments: [commentMock1, commentMock2],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 17:50")).valueOf()
  }
];
var doneIssuesMock1 = [
  {
    id: "cb3eb5e6-299d-4e1a-8521-a5541f8403e4",
    name: "Performance Optimization for Dashboard",
    description: "The dashboard is slow to load, affecting user experience. Identify and implement performance optimizations to ensure quicker loading times.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 10:51")).valueOf()
  },
  {
    id: "8264e3fc-dd97-4abe-9612-deee6472e5c4",
    name: "Implement Two-Factor Authentication",
    description: "Strengthen security by adding two-factor authentication (2FA) for user accounts. Research and implement a secure 2FA solution.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock3],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 02:04")).valueOf()
  },
  {
    id: "4db55cbf-222d-424a-b23b-08e61534c706",
    name: "Update Third-Party Libraries",
    description: "Some third-party libraries used in the project are outdated. Update them to the latest versions to benefit from bug fixes and new features.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock4, commentMock5],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 15:28")).valueOf()
  }
];
var todoIssuesMock2 = [
  {
    id: "f3efefcf-7859-4241-8b03-4ae815183355",
    name: "Responsive Design for Mobile",
    description: "Ensure that the application is fully responsive on mobile devices. Test and fix any layout or functionality issues on different screen sizes.",
    reporter: userMock1,
    asignee: userMock2,
    comments: [],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-18 11:01")).valueOf()
  },
  {
    id: "6bf6a1f4-20bb-492b-8ea4-4aa18efeb062",
    name: "Email Notification Configuration",
    description: "Users are not receiving email notifications for important events. Review and configure email notification settings to ensure users are appropriately informed.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt: createdAt2,
    updatedAt: (/* @__PURE__ */ new Date("2022-01-23 14:28")).valueOf()
  }
];
var inProgressIssuesMock2 = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Add dark mode",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt: createdAt2,
    updatedAt: createdAt2
  }
];
var doneIssuesMock2 = [];
var defaultIssuesIds = [
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2
].flat().map((issue) => issue.id);

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
var $905f4ae918aab1aa$export$6edd7a623ef0f40b = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends({}, dialogScope, triggerProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
var $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ (0, import_react.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), /* @__PURE__ */ (0, import_react.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref
  }));
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// src/app/components/alert-dialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var buttonBaseClass = t(
  "border-none py-1.5 px-3.5 rounded bg-grey-300 dark:bg-dark-100 font-primary-bold cursor-pointer"
);
var Root = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
var Trigger = $905f4ae918aab1aa$export$41fb9f06171c75f4;
var Portal = $905f4ae918aab1aa$export$602eac185826482c;
var Overlay = twix(
  $905f4ae918aab1aa$export$c6fdb837b070b4ff,
  "fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-40"
);
var Content = twix(
  $905f4ae918aab1aa$export$7c6e2c02157bb7d2,
  "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-5 shadow-lg dark:bg-dark-300"
);
var Title = twix(
  $905f4ae918aab1aa$export$f99233281efd08a0,
  "mb-5 font-primary-black text-3xl"
);
var Description = twix(
  $905f4ae918aab1aa$export$393edc798c47379d,
  "mt-8 flex w-full justify-end gap-4"
);
var Cancel = twix(
  $905f4ae918aab1aa$export$848c9b7ead0df967,
  t(
    "hover:bg-grey-400 dark:text-font-light-dark dark:hover:bg-dark-500",
    buttonBaseClass
  )
);
var Confirm = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "button",
  {
    ...props,
    className: t(
      buttonBaseClass,
      "bg-error-light text-error-dark hover:bg-error-hover dark:bg-error-main-dark dark:text-error-light-dark dark:hover:bg-error-hover-dark",
      props.className
    ),
    children: props.children
  },
  void 0,
  false,
  {
    fileName: "src/app/components/alert-dialog.tsx",
    lineNumber: 38,
    columnNumber: 3
  },
  this
);

// node_modules/react-icons/md/index.esm.js
function MdDeleteOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" } }] })(props);
}

export {
  prioritiesMock,
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2,
  defaultIssuesIds,
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Confirm,
  MdDeleteOutline
};
//# sourceMappingURL=/build/_shared/chunk-376LLFFT.js.map

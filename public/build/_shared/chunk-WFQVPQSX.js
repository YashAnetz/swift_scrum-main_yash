import {
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-EEOCHXUC.js";
import {
  twix
} from "/build/_shared/chunk-KHVVK2Q5.js";
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

// src/utils/text-are-only-spaces.ts
var textAreOnlySpaces = (text) => {
  return /^( )\1*$/.test(text);
};

// src/app/components/dialog.tsx
var Root = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var Portal = $5d3850c4d0b4e6c7$export$602eac185826482c;
var Title = $5d3850c4d0b4e6c7$export$f99233281efd08a0;
var Overlay = twix(
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  t(
    "absolute top-0 left-0 z-50 box-border grid h-full w-full place-items-center overflow-y-auto py-[40px] px-[40px]",
    "radix-state-open:animate-fade-in duration-300 bg-black bg-opacity-50 backdrop-blur-md"
  )
);
var Content = twix(
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  t(
    "relative z-50 w-4/5 max-w-[1000px] rounded-md bg-white py-6 px-8 shadow-lg dark:bg-dark-300",
    "duration-300 radix-state-open:animate-slide-up"
  )
);

// src/app/components/title.tsx
var import_react2 = __toESM(require_react());

// src/app/components/textarea-autosize.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TextareaAutosize = (props) => {
  const {
    name,
    value,
    setValue,
    placeholder,
    readOnly,
    autofocus,
    textareaClassName,
    onFocus,
    onBlur
  } = props;
  const [textareaHeight, setTextareaHeight] = (0, import_react.useState)(40);
  const textareaRef = (0, import_react.useRef)(null);
  const handleOnFocus = (e) => {
    const target = e.currentTarget;
    const length = target.value.length;
    target.setSelectionRange(length, length);
    if (onFocus)
      onFocus();
  };
  const handleTitleChange = (e) => {
    const value2 = e.currentTarget.value;
    setValue(value2);
  };
  const valueIsNotOnlySpaces = () => {
    return !/^( )\1*$/.test(value);
  };
  (0, import_react.useLayoutEffect)(() => {
    if (!textareaRef.current)
      return;
    setTextareaHeight(textareaRef.current.scrollHeight);
  }, [value]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "textarea",
      {
        name,
        className: t(
          "box-border w-full resize-none overflow-y-hidden rounded-md border-none p-3 text-font-main outline-2 hover:bg-grey-300 focus-visible:bg-white dark:bg-dark-500 dark:text-font-main-dark",
          textareaClassName
        ),
        value,
        onChange: handleTitleChange,
        placeholder,
        readOnly,
        onFocus: handleOnFocus,
        onBlur,
        style: { height: `${textareaHeight}px` },
        autoFocus: autofocus
      },
      void 0,
      false,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "p",
      {
        ref: textareaRef,
        className: t(
          "absolute top-0 left-0 -z-10 box-border overflow-y-hidden p-3 opacity-0",
          textareaClassName
        ),
        children: valueIsNotOnlySpaces() && value || placeholder
      },
      void 0,
      false,
      {
        fileName: "src/app/components/textarea-autosize.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/textarea-autosize.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// src/app/components/title.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var DEFAULT_MAX_LENGTH = 80;
var Title2 = ({
  initTitle,
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error
}) => {
  const [title, setTitle] = (0, import_react2.useState)(initTitle);
  const [isFocus, setIsFocus] = (0, import_react2.useState)(true);
  const isMaxLength = title.length >= maxLength;
  const requireError = error && (title.length === 0 || textAreOnlySpaces(title));
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);
  const updateTitle = (newTitle) => {
    if (newTitle.length > maxLength)
      return;
    setTitle(newTitle);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { color: "#2D4059" }, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextareaAutosize,
      {
        name: "title",
        value: title,
        setValue: updateTitle,
        placeholder: "Enter Issue name",
        readOnly,
        onFocus,
        onBlur,
        textareaClassName: t(
          "text-2xl",
          requireError && "focus-visible:outline-error-main outline outline-2 outline-error-main dark:outline-error-main-dark dark:focus-visible:outline-error-main-dark"
        ),
        autofocus: true
      },
      void 0,
      false,
      {
        fileName: "src/app/components/title.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    requireError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-3 font-primary-light text-sm text-error-main dark:text-error-main-dark", children: error }, void 0, false, {
      fileName: "src/app/components/title.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    isFocus && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "span",
      {
        className: t(
          "absolute right-0 top-full ",
          isMaxLength ? "text-error-main dark:text-error-main-dark" : "text-font-light dark:text-font-light-dark"
        ),
        children: [
          title.length,
          " / ",
          maxLength
        ]
      },
      void 0,
      true,
      {
        fileName: "src/app/components/title.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/app/components/title.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

// src/app/components/description.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Description = ({
  initDescription,
  readOnly
}) => {
  const [description, setDescription] = (0, import_react3.useState)(initDescription);
  const updateDescription = (newDescription) => {
    setDescription(newDescription);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1 [&_textarea]:font-primary-light [&_textarea]:leading-6 [&_p]:font-primary-light [&_p]:leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    TextareaAutosize,
    {
      name: "description",
      value: description,
      setValue: updateDescription,
      placeholder: "Add a description",
      readOnly
    },
    void 0,
    false,
    {
      fileName: "src/app/components/description.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "src/app/components/description.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

export {
  Root,
  Portal,
  Title,
  Overlay,
  Content,
  TextareaAutosize,
  textAreOnlySpaces,
  Title2,
  Description
};
//# sourceMappingURL=/build/_shared/chunk-WFQVPQSX.js.map

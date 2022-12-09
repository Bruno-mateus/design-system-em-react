"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultiStep: () => MultiStep,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toast: () => Toast,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(src_exports);

// src/styles/index.ts
var import_react = require("@stitches/react");

// ../tokens/src/colors.ts
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D",
  test: "#fff"
};

// ../tokens/src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// ../tokens/src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// ../tokens/src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// ../tokens/src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// ../tokens/src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
var {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray100",
  margin: 0,
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "xl"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray100",
  margin: 0,
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
var import_react2 = __toESM(require("react"));

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  width: "$12",
  heights: "$12",
  borderRadius: "$full",
  display: "inline-block",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");
function Avatar2(props) {
  return /* @__PURE__ */ import_react2.default.createElement(AvatarContainer, null, /* @__PURE__ */ import_react2.default.createElement(AvatarImage, __spreadValues({}, props)), /* @__PURE__ */ import_react2.default.createElement(AvatarFallback, { delayMs: 600 }, /* @__PURE__ */ import_react2.default.createElement(import_phosphor_react.User, null)));
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.8
  },
  svg: {
    width: "$4",
    height: "$4"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          backgroundColor: "$gray200",
          borderColor: "$gray200"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
var import_react3 = __toESM(require("react"));

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: "0.5",
    cursor: "not-allowed"
  }
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    colors: "$gray400"
  }
});
var WithPrefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});

// src/components/TextInput/index.tsx
function TextInput(_a) {
  var _b = _a, { prefix: prefix2 } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ import_react3.default.createElement(TextInputContainer, null, !!prefix2 && /* @__PURE__ */ import_react3.default.createElement(WithPrefix, null, prefix2), /* @__PURE__ */ import_react3.default.createElement(Input, __spreadValues({}, props)));
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
var import_react4 = __toESM(require("react"));
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  "&:focus": {
    border: "2px solid $ignite300"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideOut} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideIn} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
function Checkbox2() {
  return /* @__PURE__ */ import_react4.default.createElement(CheckboxContainer, null, /* @__PURE__ */ import_react4.default.createElement(CheckboxIndicator, { asChild: true }, /* @__PURE__ */ import_react4.default.createElement(import_phosphor_react2.Check, { weight: "bold" })));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/index.tsx
var import_react5 = __toESM(require("react"));

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ import_react5.default.createElement(MultiStepContainer, null, /* @__PURE__ */ import_react5.default.createElement(Label, null, "Passo ", currentStep, " de ", size), /* @__PURE__ */ import_react5.default.createElement(Steps, { css: { "--steps-size": size } }, Array.from({ length: size }, (_, i) => i + 1).map((step) => {
    return /* @__PURE__ */ import_react5.default.createElement(Step, { key: step, active: currentStep >= step });
  })));
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/index.tsx
var import_react6 = __toESM(require("react"));
var TooltipPrimitive2 = __toESM(require("@radix-ui/react-tooltip"));

// src/components/Tooltip/styles.ts
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var TooltipContent = styled(TooltipPrimitive.Content, {
  background: "$gray900",
  fontFamily: "$default",
  padding: "$3 $4",
  borderRadius: "$sm",
  color: "$white",
  fontSize: "$sm",
  boxShadow: "4px 16px 24px rgba(0,0,0,0.25)"
});
var TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$gray900"
});

// src/components/Tooltip/index.tsx
function Tooltip(_a) {
  var _b = _a, { children, content } = _b, props = __objRest(_b, ["children", "content"]);
  return /* @__PURE__ */ import_react6.default.createElement(TooltipPrimitive2.Provider, null, /* @__PURE__ */ import_react6.default.createElement(TooltipPrimitive2.Root, null, /* @__PURE__ */ import_react6.default.createElement(TooltipPrimitive2.Trigger, { asChild: true }, children), /* @__PURE__ */ import_react6.default.createElement(TooltipPrimitive2.Portal, null, /* @__PURE__ */ import_react6.default.createElement(TooltipContent, null, content, /* @__PURE__ */ import_react6.default.createElement(TooltipArrow, null)))));
}
Tooltip.displayName = "Tooltip";

// src/components/Toast/index.tsx
var import_react7 = __toESM(require("react"));
var ToastPrimitive2 = __toESM(require("@radix-ui/react-toast"));

// src/components/Toast/styles.tsx
var ToastPrimitive = __toESM(require("@radix-ui/react-toast"));
var VIEWPORT_PADDING = 25;
var hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var slideIn2 = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" }
});
var swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});
var ToastRoot = styled(ToastPrimitive.Root, {
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  padding: "$3 $4",
  position: "relative",
  '&[data-state="open"]': {
    animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))"
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out"
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`
  }
});

// src/components/Toast/index.tsx
function Toast(_a) {
  var _b = _a, { title, description } = _b, props = __objRest(_b, ["title", "description"]);
  return /* @__PURE__ */ import_react7.default.createElement(ToastPrimitive2.Provider, null, /* @__PURE__ */ import_react7.default.createElement(ToastRoot, { duration: 3e3 }, /* @__PURE__ */ import_react7.default.createElement(ToastPrimitive2.Title, null, title), description && /* @__PURE__ */ import_react7.default.createElement(ToastPrimitive2.Description, null, description), /* @__PURE__ */ import_react7.default.createElement(ToastPrimitive2.Close, null, "close")), /* @__PURE__ */ import_react7.default.createElement(ToastPrimitive2.Viewport, null));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip
});

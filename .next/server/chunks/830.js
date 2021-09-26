"use strict";
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9034);
/* harmony import */ var _context_TransitionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro
}) => {
  const {
    timeline
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TransitionContext__WEBPACK_IMPORTED_MODULE_4__/* .TransitionContext */ .q);
  const el = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(() => {
    // intro animation
    if (set) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(el.current, _objectSpread({}, set));
    }

    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(el.current, _objectSpread(_objectSpread({}, to), {}, {
      delay: delay || 0,
      duration: durationIn
    })); // outro animation

    if (!skipOutro) {
      timeline.add(gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(el.current, _objectSpread(_objectSpread({}, from), {}, {
        delay: delayOut || 0,
        duration: durationOut
      })), 0);
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
    as: as,
    sx: from,
    ref: el,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AnimateInOut));

/***/ }),

/***/ 6703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Wrapper)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
// EXTERNAL MODULE: ./src/animation/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(9034);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/context/TransitionContext.js
var TransitionContext = __webpack_require__(5568);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/layout/Head.js





const DocHead = props => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "canonical",
      href: props.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: props.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: props.description
    }), props.imageUrl && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: props.imageUrl
    }), props.imageAlt && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image:alt",
      content: props.imageAlt
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: props.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:card",
      content: props.imageUrl ? "summary_large_image" : "summary"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:site",
      content: props.twitter
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:creator",
      content: props.twitter
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:title",
      content: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:description",
      content: props.description
    }), props.imageUrl && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image",
      content: props.imageUrl
    }), props.imageAlt && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image:alt",
      content: props.imageAlt
    })]
  })
});

/* harmony default export */ const Head = (DocHead);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/layout/Theme.js
const Theme = {
  useCustomProperties: true,
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    heading: "inherit"
  },
  fontSizes: [16, 18, 20, 24, 30, 36, 40, 48, 64, 72, 96],
  fontWeights: {
    lite: 200,
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  colors: {
    primary: "#26ac06",
    secondary: "#41e169",
    background: "#fff",
    text: "#1b1e21",
    blue: "#4169e1",
    cyan: "#41b9e1",
    gray: "#aeb3c0",
    green: "#41e169",
    purple: "#6941e1",
    orange: "#fba100",
    pink: "#e141b9",
    red: "#ee5555",
    white: "#fff",
    yellow: "#FFDD22"
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ["32em", "48em", "64em", "80em"],
  radii: [0, 3, 6],
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none"
  }
};
/* harmony default export */ const layout_Theme = (Theme);
;// CONCATENATED MODULE: ./src/layout/Style.js


/** @jsxRuntime classic */

/** @jsx jsx */



const Style = props => (0,external_theme_ui_.jsx)((style_default()), {
  id: "1517951075",
  dynamic: [layout_Theme.fonts.body, layout_Theme.colors.primary, layout_Theme.fonts.heading, layout_Theme.colors.primary]
}, ["button,hr,input{overflow:visible;}", "progress,sub,sup{vertical-align:baseline;}", "[type=\"checkbox\"],[type=\"radio\"],legend{box-sizing:border-box;padding:0;}", "html{line-height:1.2;-webkit-text-size-adjust:100%;}", `body{margin:0;font-family:${layout_Theme.fonts.body};}`, "hr{box-sizing:content-box;height:0;}", "code,kbd,pre,samp{font-family:monospace,monospace;font-size:14px;}", "pre{padding:16px 32px 16px 16px;margin:0 0 32px 0;background:#f4f4f4;display:inline-block;}", "pre code{padding:0;background:none;}", "code{background:#f4f4f4;padding:4px 6px;}", "a{background-color:transparent;}", "abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}", "b,strong{font-weight:bolder;}", "small{font-size:80%;}", "sub,sup{font-size:75%;line-height:0;position:relative;}", "sub{bottom:-0.25em;}", "sup{top:-0.5em;}", "img{border-style:none;}", "button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}", "button,select{text-transform:none;}", "[type=\"button\"],[type=\"reset\"],[type=\"submit\"],button{-webkit-appearance:button;}", "[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}", "[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px;}", "fieldset{padding:0.35em 0.75em 0.625em;}", "legend{color:inherit;display:table;max-width:100%;white-space:normal;}", "textarea{overflow:auto;}", "[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}", "[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}", "[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}", "::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}", "details{display:block;}", "summary{display:list-item;}", "[hidden],template{display:none;}", "html{box-sizing:border-box;}", "*,*:before,*:after{box-sizing:inherit;}", "body{margin:0;min-height:100vh;height:100%;}", `button,input[type="submit"]{cursor:pointer;background:${layout_Theme.colors.primary};color:white;border-radius:4px;border:none;}`, "p{line-height:1.5;margin:0 0 16px;}", "ul{margin-top:0;}", "li{margin-bottom:8px;}", "select{padding:8px;}", `h1,h2,h3,h4,h5,h6{text-rendering:optimizelegibility;line-height:1.2;margin:0 0 16px;font-family:${layout_Theme.fonts.heading};}`, "input,select,textarea{padding:4px;border:solid 2px #aed7ff;font-size:16px;font-family:inherit;}", "select{-webkit-appearance:menulist;}", "table{border-collapse:collapse;}", "input{text-align:inherit;padding-left:4px;}", `a{color:${layout_Theme.colors.primary};}`, "#docs h2,#docs h3{padding-top:16px;padding-bottom:8px;}", "#docs a{font-weight:600;}", "#docs pre{max-width:100%;overflow:scroll;}", "#toc a{-webkit-text-decoration:none;text-decoration:none;}", "#toc li li a{-webkit-text-decoration:underline;text-decoration:underline;}", "#toc ul{margin:0;padding-left:32px;}", "#toc ul>li{padding-top:16px;list-style:none;}", "#toc li li{padding-top:16px;padding-bottom:0;font-size:16px;margin:0;list-style:disc;}"]);

/* harmony default export */ const layout_Style = (Style);
;// CONCATENATED MODULE: ./src/ui/Main.js



const Main = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
    as: "main",
    sx: {
      display: "flex",
      flex: 1
    },
    children: children
  });
};

/* harmony default export */ const ui_Main = (Main);
// EXTERNAL MODULE: ./src/ui/Footer.js
var Footer = __webpack_require__(150);
;// CONCATENATED MODULE: ./src/layout/Layout.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Layout = props => {
  const {
    setBackground
  } = (0,external_react_.useContext)(TransitionContext/* TransitionContext */.q);
  (0,external_react_.useEffect)(() => {
    setBackground(props.background || "white");
  }, [props.background]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head, _objectSpread({}, props)), /*#__PURE__*/jsx_runtime_.jsx(ui_Main, {
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_Style, {})]
  });
};

/* harmony default export */ const layout_Layout = (Layout);
;// CONCATENATED MODULE: ./src/layout/Wrapper.js
function Wrapper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Wrapper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Wrapper_ownKeys(Object(source), true).forEach(function (key) { Wrapper_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Wrapper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Wrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Wrapper = props => {
  // Want Google Analytics? --> https://github.com/react-ga/react-ga --> add your UI code below
  // ReactGA.initialize("UA-1234567-89")
  // ReactGA.set({ anonymizeIp: true })
  // if (typeof window !== "undefined") {
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }
  return /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.ThemeProvider, {
    theme: layout_Theme,
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_Layout, Wrapper_objectSpread({}, props))
  });
};

/* harmony default export */ const layout_Wrapper = (Wrapper);

/***/ })

};
;
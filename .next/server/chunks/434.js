"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 9034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ 5568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ TransitionContext),
/* harmony export */   "k": () => (/* binding */ TransitionProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const TransitionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

const TransitionProvider = ({
  children
}) => {
  const {
    0: timeline,
    1: setTimeline
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => gsap__WEBPACK_IMPORTED_MODULE_1___default().timeline({
    paused: true
  }));
  const {
    0: background,
    1: setBackground
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("white");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TransitionContext.Provider, {
    value: {
      timeline,
      setTimeline,
      background,
      setBackground
    },
    children: children
  });
};



/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7631);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_TransitionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Footer = () => {
  const {
    background
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TransitionContext__WEBPACK_IMPORTED_MODULE_2__/* .TransitionContext */ .q);
  const linkColor = background === "white" ? "green" : "greenyellow";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
    as: "footer",
    sx: {
      p: 4,
      color: background === "white" ? "#888" : "#AAA",
      textAlign: "center",
      fontSize: 1
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
      as: "span",
      sx: {
        mx: 3,
        display: "inline-block",
        py: 3
      },
      children: ["Created by", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
        sx: {
          color: linkColor,
          fontWeight: 500
        },
        href: "https://johnpolacek",
        children: "John Polacek"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
      as: "span",
      sx: {
        mx: 3,
        display: "inline-block",
        py: 3
      },
      children: ["Open sourced on", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
        sx: {
          color: linkColor,
          fontWeight: 500
        },
        href: "https://github.com/johnpolacek/TweenPages",
        children: "Github"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
      as: "span",
      sx: {
        mx: 3,
        display: "inline-block",
        py: 3
      },
      children: ["Follow", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
        sx: {
          color: linkColor,
          fontWeight: 500
        },
        href: "https://twitter.com/johnpolacek",
        children: "@johnpolacek"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ })

};
;
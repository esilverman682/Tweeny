"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9034);
/* harmony import */ var _context_TransitionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5568);
/* harmony import */ var _AnimateInOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7367);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const ScaleInOut = ({
  children,
  delay,
  as,
  scale,
  ease,
  duration,
  x,
  y,
  skipOutro,
  scaleTo,
  xTo,
  yTo
}) => {
  const s = scale || 0.01;
  const e = ease || "elastic.out";
  const d = duration || 1;
  const sTo = scaleTo || 1;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AnimateInOut__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    as: as || "div",
    durationIn: d,
    durationOut: d / 4,
    delay: delay,
    skipOutro: skipOutro,
    set: {
      opacity: 0,
      scale: s,
      x: x || 0,
      y: y || 0
    },
    from: {
      opacity: 0,
      scale: s,
      x: x || 0,
      y: y || 0
    },
    to: {
      opacity: 1,
      scale: sTo,
      ease: e,
      x: xTo || 0,
      y: yTo || 0
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScaleInOut);

/***/ })

};
;
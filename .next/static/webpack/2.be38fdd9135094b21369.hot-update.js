webpackHotUpdate_N_E(2,{

/***/ "./components/FallText.js":
/*!********************************!*\
  !*** ./components/FallText.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/wrivera/Desktop/Tweeny/components/FallText.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar content = {\n  animate: {\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\nvar title = {\n  initial: {\n    y: -20,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 0.7,\n      ease: [0.6, -0.05, 0.01, 0.99]\n    }\n  }\n};\nvar inputs = {\n  initial: {\n    y: -20,\n    opacity: 0\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 0.7,\n      ease: [0.6, -0.05, 0.01, 0.99]\n    }\n  }\n};\n\nvar FallText = function FallText() {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].section, {\n    exit: {\n      opacity: 0\n    },\n    className: \"relative text-gray-700 body-font\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: content,\n    animate: \"animate\",\n    initial: \"initial\",\n    className: \"container px-5 py-24 mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: title,\n    className: \"flex flex-col w-full mb-12 text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"Contact Us\"), __jsx(\"p\", {\n    className: \"mx-auto text-base leading-relaxed lg:w-2/3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, \"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: inputs,\n    className: \"mx-auto lg:w-1/2 md:w-2/3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-wrap -m-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"w-1/2 p-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: \"w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500\",\n    placeholder: \"Name\",\n    type: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"w-1/2 p-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: \"w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500\",\n    placeholder: \"Email\",\n    type: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"w-full p-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(\"textarea\", {\n    className: \"block w-full h-48 px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:border-red-500\",\n    placeholder: \"Message\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"w-full p-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }, \"Send\")), __jsx(\"div\", {\n    className: \"w-full p-2 pt-8 mt-8 text-center border-t border-gray-200\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"text-red-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, \"example@email.com\"), __jsx(\"p\", {\n    className: \"my-5 leading-normal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"49 Smith St.\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), \"Saint Cloud, MN 56301\"), __jsx(\"span\", {\n    className: \"inline-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"text-gray-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    fill: \"currentColor\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: \"2\",\n    className: \"w-5 h-5\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    d: \"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 21\n    }\n  }))), __jsx(\"a\", {\n    className: \"ml-4 text-gray-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    fill: \"currentColor\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: \"2\",\n    className: \"w-5 h-5\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    d: \"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 21\n    }\n  }))), __jsx(\"a\", {\n    className: \"ml-4 text-gray-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    fill: \"none\",\n    stroke: \"currentColor\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: \"2\",\n    className: \"w-5 h-5\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 19\n    }\n  }, __jsx(\"rect\", {\n    width: \"20\",\n    height: \"20\",\n    x: \"2\",\n    y: \"2\",\n    rx: \"5\",\n    ry: \"5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 21\n    }\n  }), __jsx(\"path\", {\n    d: \"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 21\n    }\n  }))), __jsx(\"a\", {\n    className: \"ml-4 text-gray-500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    fill: \"currentColor\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: \"2\",\n    className: \"w-5 h-5\",\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    d: \"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 21\n    }\n  })))))))));\n};\n\n_c = FallText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FallText);\n\nvar _c;\n\n$RefreshReg$(_c, \"FallText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYWxsVGV4dC5qcz81YmJkIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsInRpdGxlIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwiaW5wdXRzIiwiRmFsbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFBRUMscUJBQWUsRUFBRTtBQUFuQjtBQURMO0FBREssQ0FBaEI7QUFNQSxJQUFNQyxLQUFLLEdBQUc7QUFDWkMsU0FBTyxFQUFFO0FBQUVDLEtBQUMsRUFBRSxDQUFDLEVBQU47QUFBVUMsV0FBTyxFQUFFO0FBQW5CLEdBREc7QUFFWk4sU0FBTyxFQUFFO0FBQ1BLLEtBQUMsRUFBRSxDQURJO0FBRVBDLFdBQU8sRUFBRSxDQUZGO0FBR1BMLGNBQVUsRUFBRTtBQUNWTSxjQUFRLEVBQUUsR0FEQTtBQUVWQyxVQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBQyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUZJO0FBSEw7QUFGRyxDQUFkO0FBWUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JMLFNBQU8sRUFBRTtBQUFFQyxLQUFDLEVBQUUsQ0FBQyxFQUFOO0FBQVVDLFdBQU8sRUFBRTtBQUFuQixHQURJO0FBRWJOLFNBQU8sRUFBRTtBQUNQSyxLQUFDLEVBQUUsQ0FESTtBQUVQQyxXQUFPLEVBQUUsQ0FGRjtBQUdQTCxjQUFVLEVBQUU7QUFDVk0sY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQUMsSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFGSTtBQUhMO0FBRkksQ0FBZjs7QUFZQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JC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Q0U7QUFBRyxhQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxpQkFBYSxFQUFDLE9BRmhCO0FBR0Usa0JBQWMsRUFBQyxPQUhqQjtBQUlFLGVBQVcsRUFBQyxHQUpkO0FBS0UsYUFBUyxFQUFDLFNBTFo7QUFNRSxXQUFPLEVBQUMsV0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBTSxLQUFDLEVBQUMsZ0xBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0E5Q0YsQ0FQRixDQTFCRixDQURGLENBbEJGLENBSkYsQ0FERjtBQTBIRCxDQTNIRDs7S0FBTUMsUTtBQTZIU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZhbGxUZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgY29udGVudCA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjEgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBpbml0aWFsOiB7IHk6IC0yMCwgb3BhY2l0eTogMCB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjcsXG4gICAgICBlYXNlOiBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGlucHV0cyA9IHtcbiAgaW5pdGlhbDogeyB5OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHk6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC43LFxuICAgICAgZWFzZTogWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBGYWxsVGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnNlY3Rpb25cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1ncmF5LTcwMCBib2R5LWZvbnRcIlxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtjb250ZW50fVxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiXG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgdmFyaWFudHM9e3RpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG1iLTEyIHRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc206dGV4dC0zeGwgdGl0bGUtZm9udFwiPlxuICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWJhc2UgbGVhZGluZy1yZWxheGVkIGxnOnctMi8zXCI+XG4gICAgICAgICAgICBXaGF0ZXZlciBjYXJkaWdhbiB0b3RlIGJhZyB0dW1ibHIgaGV4YWdvbiBicm9va2x5biBhc3ltbWV0cmljYWxcbiAgICAgICAgICAgIGdlbnRyaWZ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17aW5wdXRzfSBjbGFzc05hbWU9XCJteC1hdXRvIGxnOnctMS8yIG1kOnctMi8zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHAtMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHRleHQtYmFzZSBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1yZWQtNTAwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiB0ZXh0LWJhc2UgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLTQ4IHB4LTQgcHktMiB0ZXh0LWJhc2UgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkIHJlc2l6ZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggcHgtOCBweS0yIG14LWF1dG8gdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLTAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcmVkLTYwMFwiPlxuICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBwdC04IG10LTggdGV4dC1jZW50ZXIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPmV4YW1wbGVAZW1haWwuY29tPC9hPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS01IGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgNDkgU21pdGggU3QuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgU2FpbnQgQ2xvdWQsIE1OIDU2MzAxXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMDExLTFoM3pcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMDEzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAwLS4wOC0uODNBNy43MiA3LjcyIDAgMDAyMyAzelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICB4PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgeT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgcnk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiAxMS4zN0E0IDQgMCAxMTEyLjYzIDggNCA0IDAgMDExNiAxMS4zN3ptMS41LTQuODdoLjAxXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMS41YTguMzggOC4zOCAwIDAxLS45IDMuOCA4LjUgOC41IDAgMDEtNy42IDQuNyA4LjM4IDguMzggMCAwMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAxLS45LTMuOCA4LjUgOC41IDAgMDE0LjctNy42IDguMzggOC4zOCAwIDAxMy44LS45aC41YTguNDggOC40OCAwIDAxOCA4di41elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFsbFRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FallText.js\n");

/***/ })

})
"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const productsDb = [{
  name: "The Catalyzer",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 16.0
}, {
  name: "Shooting Stars",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 21.15
}, {
  name: "Neptune",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 12.0
}, {
  name: "The 400 Blows",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 18.4
}, {
  name: "The Catalyzer",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 16.0
}, {
  name: "Shooting Stars",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 21.15
}, {
  name: "Neptune",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 12.0
}, {
  name: "The 400 Blows",
  category: "CATEGORY",
  img: "https://dummyimage.com/420x260",
  price: 18.4
}];

const content = isFirstMount => ({
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: isFirstMount ? 2.8 : 0
    }
  }
});

const title = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
const products = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
function IndexPage({
  isFirstMount
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
    exit: {
      opacity: 0
    },
    children: [isFirstMount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(InitialTransition, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
      initial: "initial",
      animate: "animate",
      variants: content(isFirstMount),
      className: "space-y-12",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
        variants: title,
        className: "text-6xl font-black text-center",
        children: "Welcome to tailstore!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
        variants: products,
        className: "text-gray-700 body-font",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
          class: "w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat",
          style: "background:url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              class: "lg:w-3/6 lg:pr-0 pr-0",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h1", {
                class: "font-medium text-5xl text-white",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                class: "leading-relaxed mt-4 text-white",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              class: "lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                class: "relative mb-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
                  for: "full-name",
                  class: "leading-7 text-sm text-gray-600",
                  children: "Name"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  class: "w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                class: "relative mb-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
                  for: "email",
                  class: "leading-7 text-sm text-gray-600",
                  children: "Email"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  class: "w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                class: "relative mb-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
                  for: "email",
                  class: "leading-7 text-sm text-gray-600",
                  children: "Phone"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                  type: "email",
                  id: "phone",
                  name: "phone",
                  class: "w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                class: "relative mb-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
                  for: "email",
                  class: "leading-7 text-sm text-gray-600",
                  children: "Message"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
                  id: "message",
                  name: "message",
                  rows: "4",
                  class: "w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                class: "text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg",
                children: "Submit"
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "container px-5 pt-12 mx-auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "flex flex-wrap -m-4",
            children: productsDb.map((product, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Product, _objectSpread({}, product), index))
          })
        })]
      })]
    })]
  });
}

const Product = ({
  img,
  category,
  name,
  price
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: "w-full p-4 lg:w-1/4 md:w-1/2",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
    className: "relative block h-48 overflow-hidden rounded",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
      alt: "ecommerce",
      className: "block object-cover object-center w-full h-full",
      src: img
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mt-4",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
      className: "mb-1 text-xs tracking-widest text-gray-500 title-font",
      children: category
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
      className: "text-lg font-medium text-gray-900 title-font",
      children: [name, " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "mt-1",
      children: ["$", price.toFixed(2)]
    })]
  })]
});

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};
const textContainer = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  }
};
const text = {
  initial: {
    y: 40
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "absolute z-50 flex items-center justify-center w-full bg-black",
    initial: "initial",
    animate: "animate",
    variants: blackBox,
    onAnimationStart: () => document.body.classList.add("overflow-hidden"),
    onAnimationComplete: () => document.body.classList.remove("overflow-hidden"),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.svg, {
      variants: textContainer,
      className: "absolute z-50 flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("pattern", {
        id: "pattern",
        patternUnits: "userSpaceOnUse",
        width: 750,
        height: 800,
        className: "text-white",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
          className: "w-full h-full fill-current"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.rect, {
          variants: text,
          className: "w-full h-full text-gray-600 fill-current"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("text", {
        className: "text-4xl font-bold",
        textAnchor: "middle",
        x: "50%",
        y: "50%",
        style: {
          fill: "url(#pattern)"
        },
        children: "tailstore"
      })]
    })
  });
};

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(124));
module.exports = __webpack_exports__;

})();
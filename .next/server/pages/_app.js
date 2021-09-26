(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col min-h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "flex-1",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

const Header = () => {
  const {
    asPath
  } = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "text-gray-700 body-font",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-10 h-10 p-2 text-white bg-red-500 rounded-full",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-3 text-xl",
            children: "tailstore"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: `hover:text-gray-900 ${asPath === "/" ? "font-black text-black" : ""}`,
            children: "Store"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: asPath === "/contact" ? "font-black text-black" : "hover:text-gray-900",
            children: "Contact Us"
          })
        })]
      })]
    })
  });
};

const Footer = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
  className: "text-gray-700 body-font",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "flex items-center justify-center font-medium text-gray-900 title-font md:justify-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          className: "w-10 h-10 p-2 text-white bg-red-500 rounded-full",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-3 text-xl",
          children: "tailstore"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "mt-2 text-sm text-gray-500",
        children: "Air plant banjo lyft occupy retro adaptogen indego"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "mb-3 text-sm font-medium tracking-widest text-gray-900 title-font",
          children: "CATEGORIES"
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["First Link", "Second Link", "Third Link", "Fourth link"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "mb-3 text-sm font-medium tracking-widest text-gray-900 title-font",
          children: "CATEGORIES"
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["First Link", "Second Link", "Third Link", "Fourth link"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "mb-3 text-sm font-medium tracking-widest text-gray-900 title-font",
          children: "CATEGORIES"
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["First Link", "Second Link", "Third Link", "Fourth link"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "mb-3 text-sm font-medium tracking-widest text-gray-900 title-font",
          children: "CATEGORIES"
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["First Link", "Second Link", "Third Link", "Fourth link"]
        })]
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-gray-200",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-center text-gray-500 sm:text-left",
        children: ["\xA9 2020 tailstore \u2014", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://twitter.com/Jose_R_Felix",
          rel: "noopener noreferrer",
          className: "ml-1 text-gray-600",
          target: "_blank",
          children: "@Jose_R_Felix"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-gray-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "0",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              stroke: "none",
              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
              cx: "4",
              cy: "4",
              r: "2",
              stroke: "none"
            })]
          })
        })]
      })]
    })
  })]
});

const Links = ({
  names
}) => /*#__PURE__*/jsx_runtime_.jsx("nav", {
  className: "mb-10 list-none",
  children: names.map(name => /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "text-gray-600 hover:text-gray-800",
      children: name
    })
  }, name))
});

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps,
  router
}) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange); // If the component is unmounted, unsubscribe
    // from the event with the `off` method:

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      exitBeforeEnter: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({
        isFirstMount: isFirstMount
      }, pageProps), router.route)
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(659)));
module.exports = __webpack_exports__;

})();
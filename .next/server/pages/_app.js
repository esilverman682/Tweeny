(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./src/context/TransitionContext.js
var TransitionContext = __webpack_require__(5568);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/animation/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(9034);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/animation/TransitionLayout.js





function TransitionLayout({
  children
}) {
  const {
    0: displayChildren,
    1: setDisplayChildren
  } = (0,external_react_.useState)(children);
  const {
    timeline,
    background
  } = (0,external_react_.useContext)(TransitionContext/* TransitionContext */.q);
  const el = (0,external_react_.useRef)();
  (0,useIsomorphicLayoutEffect/* default */.Z)(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);
  (0,useIsomorphicLayoutEffect/* default */.Z)(() => {
    external_gsap_.gsap.to(el.current, {
      background,
      duration: 1
    });
  }, [background]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: el,
    children: displayChildren
  });
}
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(7631);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/ui/NavHome.js









const NavHome = () => {
  const icon = (0,external_react_.useRef)();
  const text = (0,external_react_.useRef)();
  (0,useIsomorphicLayoutEffect/* default */.Z)(() => {
    external_gsap_.gsap.set(icon.current, {
      x: -10
    });
    external_gsap_.gsap.to(icon.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out"
    });
    external_gsap_.gsap.set(text.current, {
      x: -10
    });
    external_gsap_.gsap.to(text.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.75,
      ease: "power4.out"
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Link, {
      sx: {
        cursor: "pointer"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Text, {
        as: "h1",
        sx: {
          py: [2, 3],
          px: 3,
          fontSize: 3,
          fontWeight: 200,
          display: "inline-block",
          color: "black",
          m: 0
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Text, {
          as: "span",
          sx: {
            pr: 2,
            position: "relative",
            top: "-2px",
            color: "primary"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
            ref: icon,
            as: "span",
            sx: {
              display: "inline-block",
              opacity: 0
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Image, {
              src: "/img/double-right.svg",
              alt: "",
              sx: {
                height: "20px",
                position: "relative",
                top: "5px",
                left: "4px"
              }
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Text, {
          ref: text,
          sx: {
            display: "inline-block",
            opacity: 0
          },
          as: "span",
          children: "TweenPages"
        })]
      })
    })
  });
};

/* harmony default export */ const ui_NavHome = (NavHome);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/ui/NavLink.js








const NavLink = ({
  children,
  href,
  delay
}) => {
  const el = (0,external_react_.useRef)();
  (0,useIsomorphicLayoutEffect/* default */.Z)(() => {
    external_gsap_.gsap.set(el.current, {
      y: 20
    });
    external_gsap_.gsap.to(el.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out"
    });
  }, []);
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Link, {
      ref: el,
      sx: {
        opacity: 0,
        p: 3,
        mt: 1,
        fontSize: 2,
        fontWeight: 600,
        display: "inline-block",
        textDecoration: "none",
        color: router.pathname === href ? "black" : "primary",
        cursor: "pointer"
      },
      children: children
    })
  });
};

/* harmony default export */ const ui_NavLink = (NavLink);
;// CONCATENATED MODULE: ./src/ui/GithubLink.js



const GithubLink = props => /*#__PURE__*/_jsx(Link, {
  href: "https://github.com/johnpolacek/project-starter",
  title: "Go to Project on Github",
  sx: {
    display: "inline-block",
    px: [2, 2, 2, 2, 3],
    position: "relative",
    top: "7px",
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    }
  },
  children: /*#__PURE__*/_jsx("svg", {
    alt: "Go to Project on Github",
    height: "32",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    })
  })
});

/* harmony default export */ const ui_GithubLink = ((/* unused pure expression or super */ null && (GithubLink)));
;// CONCATENATED MODULE: ./src/ui/Nav.js







const Nav = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
  as: "nav",
  sx: {
    display: "flex",
    flexWrap: "wrap",
    py: [2, 0],
    bg: "white",
    position: "relative",
    zIndex: 999999
  },
  children: [/*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
    sx: {
      width: ["100%", "50%"],
      pl: [0, 3],
      textAlign: ["center", "left"]
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(ui_NavHome, {})
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
    sx: {
      width: ["100%", "50%"],
      textAlign: ["center", "right"],
      pr: [0, 3],
      overflow: "hidden"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
      href: "/",
      delay: 3,
      children: "one"
    }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
      href: "/two",
      delay: 3.1,
      children: "two"
    }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
      href: "/three",
      delay: 3.2,
      children: "three"
    }), /*#__PURE__*/jsx_runtime_.jsx(ui_NavLink, {
      href: "/docs",
      delay: 3.3,
      children: "docs"
    })]
  })]
});

/* harmony default export */ const ui_Nav = (Nav);
;// CONCATENATED MODULE: ./src/ui/Header.js



const Header = props => /*#__PURE__*/jsx_runtime_.jsx("header", {
  children: /*#__PURE__*/jsx_runtime_.jsx(ui_Nav, {})
});

/* harmony default export */ const ui_Header = (Header);
// EXTERNAL MODULE: ./src/ui/Footer.js
var Footer = __webpack_require__(150);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(TransitionContext/* TransitionProvider */.k, {
    children: /*#__PURE__*/jsx_runtime_.jsx(TransitionLayout, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
        sx: {
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })
    })
  });
}

/***/ }),

/***/ 9015:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7631:
/***/ ((module) => {

"use strict";
module.exports = require("theme-ui");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,434], () => (__webpack_exec__(1453)));
module.exports = __webpack_exports__;

})();
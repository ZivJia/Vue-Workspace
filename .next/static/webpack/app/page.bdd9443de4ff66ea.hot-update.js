"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Checklist.js":
/*!******************************!*\
  !*** ./src/app/Checklist.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_LinearProgress_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,LinearProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((param)=>{\n    let { checklistCategory } = param;\n    const finished = checklistCategory.checklist.re;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_LinearProgress_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        width: \"100%\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_LinearProgress_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            height: \"80px\",\n            sx: {\n                backgroundColor: checklistCategory.finishedColor\n            },\n            container: true,\n            display: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_LinearProgress_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    height: \"80px\",\n                    alignItems: \"center\",\n                    flexGrow: 1\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/Checklist.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_LinearProgress_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    width: \"140px\",\n                    height: \"80px\",\n                    sx: {\n                        backgroundColor: checklistCategory.unfinishedColor\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"logos/back.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/Checklist.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/Checklist.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/Checklist.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/Checklist.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hlY2tsaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBb0Q7QUFFcEQsK0RBQWU7UUFBQyxFQUFDRSxpQkFBaUIsRUFBQztJQUNqQyxNQUFNQyxXQUFXRCxrQkFBa0JFLFNBQVMsQ0FBQ0MsRUFBRTtJQUMvQyxxQkFBTyw4REFBQ0wsK0ZBQUlBO1FBQUNNLE9BQU07a0JBQ2pCLDRFQUFDTiwrRkFBSUE7WUFBQ08sUUFBTztZQUFPQyxJQUFJO2dCQUFFQyxpQkFBaUJQLGtCQUFrQlEsYUFBYTtZQUFDO1lBQUdDLFNBQVM7WUFBQ0MsU0FBUTs7OEJBQzlGLDhEQUFDWiwrRkFBSUE7b0JBQUNPLFFBQU87b0JBQU9NLFlBQVc7b0JBQVNDLFVBQVU7Ozs7Ozs4QkFDbEQsOERBQUNkLCtGQUFJQTtvQkFDSE0sT0FBTTtvQkFDTkMsUUFBTztvQkFDUEMsSUFBSTt3QkFBRUMsaUJBQWlCUCxrQkFBa0JhLGVBQWU7b0JBQUM7OEJBRXpELDRFQUFDQzt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hlY2tsaXN0LmpzPzQ3NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgTGluZWFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hlY2tsaXN0Q2F0ZWdvcnl9KSA9PiB7XG4gIGNvbnN0IGZpbmlzaGVkID0gY2hlY2tsaXN0Q2F0ZWdvcnkuY2hlY2tsaXN0LnJlXG4gIHJldHVybiA8R3JpZCB3aWR0aD0nMTAwJSc+XG4gICAgPEdyaWQgaGVpZ2h0PSc4MHB4JyBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrbGlzdENhdGVnb3J5LmZpbmlzaGVkQ29sb3IgfX0gY29udGFpbmVyIGRpc3BsYXk9J2ZsZXgnPlxuICAgICAgPEdyaWQgaGVpZ2h0PSc4MHB4JyBhbGlnbkl0ZW1zPSdjZW50ZXInIGZsZXhHcm93PXsxfT48L0dyaWQ+XG4gICAgICA8R3JpZCBcbiAgICAgICAgd2lkdGg9JzE0MHB4JyBcbiAgICAgICAgaGVpZ2h0PSc4MHB4JyBcbiAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiBjaGVja2xpc3RDYXRlZ29yeS51bmZpbmlzaGVkQ29sb3IgfX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9J2xvZ29zL2JhY2sucG5nJy8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICA8L0dyaWQ+XG59Il0sIm5hbWVzIjpbIkdyaWQiLCJMaW5lYXJQcm9ncmVzcyIsImNoZWNrbGlzdENhdGVnb3J5IiwiZmluaXNoZWQiLCJjaGVja2xpc3QiLCJyZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaW5pc2hlZENvbG9yIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsInVuZmluaXNoZWRDb2xvciIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Checklist.js\n"));

/***/ })

});
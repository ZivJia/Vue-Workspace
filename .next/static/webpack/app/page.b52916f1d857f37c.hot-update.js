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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [frontendList, setFrontendList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend);\n    const [backendList, setBackendList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend);\n    const [infraList, setInfraList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra);\n    const [pipelineList, setPipelineList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            selectedCategory,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                container: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            category: \"frontend\",\n                            checklistCategory: frontendList\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 2\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            category: \"backend\",\n                            checklistCategory: backendList\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            category: \"infra\",\n                            checklistCategory: infraList\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 2\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        xs: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            category: \"pipeline\",\n                            checklistCategory: pipelineList\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OX/iFF+kI8fgHemOhvhOq3/jF+c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQztBQUNkO0FBQ0s7QUFDTTtBQUNQO0FBR3RCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQ0QscURBQTRCO0lBQzdFLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQ0Qsb0RBQTJCO0lBQzFFLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ0Qsa0RBQXlCO0lBQ3BFLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDRCxxREFBNEI7SUFFN0UsTUFBTSxDQUFDYyxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6RCxxQkFDRSw4REFBQ2U7UUFBS0MsV0FBV2YsOERBQVc7O1lBRXhCWTswQkFFRiw4REFBQ1YsZ0ZBQUlBO2dCQUFDYyxTQUFTOztrQ0FDYiw4REFBQ2QsZ0ZBQUlBO3dCQUFDZSxJQUFJO3dCQUFDQyxJQUFJO2tDQUNiLDRFQUFDakIsc0RBQWFBOzRCQUNaa0IsVUFBUzs0QkFDVEMsbUJBQW1CaEI7Ozs7Ozs7Ozs7O2tDQUd2Qiw4REFBQ0YsZ0ZBQUlBO3dCQUFDZSxJQUFJO3dCQUFDQyxJQUFJOzs7Ozs7a0NBQ2YsOERBQUNoQixnRkFBSUE7d0JBQUNlLElBQUk7d0JBQUNDLElBQUk7a0NBQ2IsNEVBQUNqQixzREFBYUE7NEJBQ1prQixVQUFTOzRCQUNUQyxtQkFBbUJkOzs7Ozs7Ozs7OztrQ0FHdkIsOERBQUNKLGdGQUFJQTt3QkFBQ2UsSUFBSTt3QkFBQ0MsSUFBSTtrQ0FDYiw0RUFBQ2pCLHNEQUFhQTs0QkFDWmtCLFVBQVM7NEJBQ1RDLG1CQUFtQlo7Ozs7Ozs7Ozs7O2tDQUd2Qiw4REFBQ04sZ0ZBQUlBO3dCQUFDZSxJQUFJO3dCQUFDQyxJQUFJOzs7Ozs7a0NBQ2YsOERBQUNoQixnRkFBSUE7d0JBQUNlLElBQUk7d0JBQUNDLElBQUk7a0NBQ2IsNEVBQUNqQixzREFBYUE7NEJBQ1prQixVQUFTOzRCQUNUQyxtQkFBbUJWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtHQTNDd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgZGVmYXVsdENoZWNrbGlzdCBmcm9tICcuL2NoZWNrbGlzdC5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gXCIuL0RvdWdobnV0Q2hhcnRcIjtcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZnJvbnRlbmRMaXN0LCBzZXRGcm9udGVuZExpc3RdID0gdXNlU3RhdGUoZGVmYXVsdENoZWNrbGlzdFsnZnJvbnRlbmQnXSlcbiAgY29uc3QgW2JhY2tlbmRMaXN0LCBzZXRCYWNrZW5kTGlzdF0gPSB1c2VTdGF0ZShkZWZhdWx0Q2hlY2tsaXN0WydiYWNrZW5kJ10pXG4gIGNvbnN0IFtpbmZyYUxpc3QsIHNldEluZnJhTGlzdF0gPSB1c2VTdGF0ZShkZWZhdWx0Q2hlY2tsaXN0WydpbmZyYSddKVxuICBjb25zdCBbcGlwZWxpbmVMaXN0LCBzZXRQaXBlbGluZUxpc3RdID0gdXNlU3RhdGUoZGVmYXVsdENoZWNrbGlzdFsncGlwZWxpbmUnXSlcblxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKVxuICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSBcbiAgICAgIH1cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgPERvdWdobnV0Q2hhcnRcbiAgICAgICAgICAgIGNhdGVnb3J5PSdmcm9udGVuZCdcbiAgICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5PXtmcm9udGVuZExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfS8+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxuICAgICAgICAgIDxEb3VnaG51dENoYXJ0XG4gICAgICAgICAgICBjYXRlZ29yeT0nYmFja2VuZCdcbiAgICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5PXtiYWNrZW5kTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxuICAgICAgICAgIDxEb3VnaG51dENoYXJ0XG4gICAgICAgICAgICBjYXRlZ29yeT0naW5mcmEnXG4gICAgICAgICAgICBjaGVja2xpc3RDYXRlZ29yeT17aW5mcmFMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0vPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cbiAgICAgICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICAgICAgY2F0ZWdvcnk9J3BpcGVsaW5lJ1xuICAgICAgICAgICAgY2hlY2tsaXN0Q2F0ZWdvcnk9e3BpcGVsaW5lTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRDaGVja2xpc3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkRvdWdobnV0Q2hhcnQiLCJHcmlkIiwiSG9tZSIsImZyb250ZW5kTGlzdCIsInNldEZyb250ZW5kTGlzdCIsImJhY2tlbmRMaXN0Iiwic2V0QmFja2VuZExpc3QiLCJpbmZyYUxpc3QiLCJzZXRJbmZyYUxpc3QiLCJwaXBlbGluZUxpc3QiLCJzZXRQaXBlbGluZUxpc3QiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJjYXRlZ29yeSIsImNoZWNrbGlzdENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
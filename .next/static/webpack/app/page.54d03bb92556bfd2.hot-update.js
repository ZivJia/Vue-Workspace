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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [frontendList, setFrontendList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend);\n    const [backendList, setBackendList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend);\n    const [infraList, setInfraList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra);\n    const [pipelineList, setPipelineList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: !!selectedCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"sdfdsf\"\n        }, void 0, false, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            container: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        category: \"frontend\",\n                        checklistCategory: frontendList\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 2\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        category: \"backend\",\n                        checklistCategory: backendList\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        category: \"infra\",\n                        checklistCategory: infraList\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 2\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    item: true,\n                    xs: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        category: \"pipeline\",\n                        checklistCategory: pipelineList\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OX/iFF+kI8fgHemOhvhOq3/jF+c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQztBQUNkO0FBQ0s7QUFDTTtBQUNQO0FBR3RCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQ0QscURBQTRCO0lBQzdFLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQ0Qsb0RBQTJCO0lBQzFFLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ0Qsa0RBQXlCO0lBQ3BFLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDRCxxREFBNEI7SUFFN0UsTUFBTSxDQUFDYyxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUd6RCxxQkFDRSw4REFBQ2U7UUFBS0MsV0FBV2YsOERBQVc7a0JBRXhCLENBQUMsQ0FBQ1ksaUNBQ0YsOERBQUNJO3NCQUFJOzs7OztpQ0FDTCw4REFBQ2QsZ0ZBQUlBO1lBQUNlLFNBQVM7OzhCQUNiLDhEQUFDZixnRkFBSUE7b0JBQUNnQixJQUFJO29CQUFDQyxJQUFJOzhCQUNiLDRFQUFDbEIsc0RBQWFBO3dCQUNabUIsVUFBUzt3QkFDVEMsbUJBQW1CakI7Ozs7Ozs7Ozs7OzhCQUd2Qiw4REFBQ0YsZ0ZBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0MsSUFBSTs7Ozs7OzhCQUNmLDhEQUFDakIsZ0ZBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0MsSUFBSTs4QkFDYiw0RUFBQ2xCLHNEQUFhQTt3QkFDWm1CLFVBQVM7d0JBQ1RDLG1CQUFtQmY7Ozs7Ozs7Ozs7OzhCQUd2Qiw4REFBQ0osZ0ZBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0MsSUFBSTs4QkFDYiw0RUFBQ2xCLHNEQUFhQTt3QkFDWm1CLFVBQVM7d0JBQ1RDLG1CQUFtQmI7Ozs7Ozs7Ozs7OzhCQUd2Qiw4REFBQ04sZ0ZBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0MsSUFBSTs7Ozs7OzhCQUNmLDhEQUFDakIsZ0ZBQUlBO29CQUFDZ0IsSUFBSTtvQkFBQ0MsSUFBSTs4QkFDYiw0RUFBQ2xCLHNEQUFhQTt3QkFDWm1CLFVBQVM7d0JBQ1RDLG1CQUFtQlg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakM7R0E5Q3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGRlZmF1bHRDaGVja2xpc3QgZnJvbSAnLi9jaGVja2xpc3QuanNvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tIFwiLi9Eb3VnaG51dENoYXJ0XCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zyb250ZW5kTGlzdCwgc2V0RnJvbnRlbmRMaXN0XSA9IHVzZVN0YXRlKGRlZmF1bHRDaGVja2xpc3RbJ2Zyb250ZW5kJ10pXG4gIGNvbnN0IFtiYWNrZW5kTGlzdCwgc2V0QmFja2VuZExpc3RdID0gdXNlU3RhdGUoZGVmYXVsdENoZWNrbGlzdFsnYmFja2VuZCddKVxuICBjb25zdCBbaW5mcmFMaXN0LCBzZXRJbmZyYUxpc3RdID0gdXNlU3RhdGUoZGVmYXVsdENoZWNrbGlzdFsnaW5mcmEnXSlcbiAgY29uc3QgW3BpcGVsaW5lTGlzdCwgc2V0UGlwZWxpbmVMaXN0XSA9IHVzZVN0YXRlKGRlZmF1bHRDaGVja2xpc3RbJ3BpcGVsaW5lJ10pXG5cbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbClcbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAge1xuICAgICAgICAhIXNlbGVjdGVkQ2F0ZWdvcnkgPyBcbiAgICAgICAgPGRpdj5zZGZkc2Y8L2Rpdj4gOlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICAgICAgICBjYXRlZ29yeT0nZnJvbnRlbmQnXG4gICAgICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5PXtmcm9udGVuZExpc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfS8+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICAgICAgICBjYXRlZ29yeT0nYmFja2VuZCdcbiAgICAgICAgICAgICAgY2hlY2tsaXN0Q2F0ZWdvcnk9e2JhY2tlbmRMaXN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICAgICAgICBjYXRlZ29yeT0naW5mcmEnXG4gICAgICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5PXtpbmZyYUxpc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfS8+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICAgICAgICBjYXRlZ29yeT0ncGlwZWxpbmUnXG4gICAgICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5PXtwaXBlbGluZUxpc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgfVxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRDaGVja2xpc3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkRvdWdobnV0Q2hhcnQiLCJHcmlkIiwiSG9tZSIsImZyb250ZW5kTGlzdCIsInNldEZyb250ZW5kTGlzdCIsImJhY2tlbmRMaXN0Iiwic2V0QmFja2VuZExpc3QiLCJpbmZyYUxpc3QiLCJzZXRJbmZyYUxpc3QiLCJwaXBlbGluZUxpc3QiLCJzZXRQaXBlbGluZUxpc3QiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJjYXRlZ29yeSIsImNoZWNrbGlzdENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
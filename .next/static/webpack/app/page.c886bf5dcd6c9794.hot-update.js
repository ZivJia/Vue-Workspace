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

/***/ "(app-pages-browser)/./src/app/DoughnutChart.js":
/*!**********************************!*\
  !*** ./src/app/DoughnutChart.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);\nconst getFinishedCount = (checklist)=>{\n    return checklist.reduce((acc, cur)=>acc + cur.value ? 1 : 0, 0);\n};\nconst getChartData = (checklistCategory)=>{\n    const checklist = checklistCategory.checklist;\n    const finishedCount = getFinishedCount(checklist);\n    return {\n        labels: [\n            \"Finished\",\n            \"Waiting Action\"\n        ],\n        datasets: [\n            {\n                data: [\n                    finishedCount,\n                    checklist.length - finishedCount\n                ],\n                backgroundColor: [\n                    checklistCategory.finishedColor,\n                    checklistCategory.unfinishedColor\n                ],\n                borderWidth: 0,\n                hoverOffset: 4\n            }\n        ]\n    };\n};\nfunction DoughnutChart(param) {\n    let { checklistCategory, category } = param;\n    const chartData = getChartData(checklistCategory);\n    const pngPath = \"logos/\".concat(category, \".png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        direction: \"row\",\n        mb: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pngPath,\n                        style: {\n                            marginLeft: \"70px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: true,\n                        xs: 10,\n                        width: \"400px\",\n                        height: \"400px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Doughnut, {\n                            data: chartData,\n                            options: {\n                                plugins: {\n                                    legend: {\n                                        display: true\n                                    }\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: true,\n                xs: 2\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRG91Z2hudXRDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQjtBQUNpQjtBQUNVO0FBQ2hCO0FBRXJDRSwyQ0FBS0EsQ0FBQ0ksUUFBUSxDQUFDSCxnREFBVUEsRUFBRUMsNkNBQU9BO0FBRWxDLE1BQU1HLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxVQUFVQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsTUFBUUQsTUFBTUMsSUFBSUMsS0FBSyxHQUFHLElBQUksR0FBRztBQUNqRTtBQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7SUFDcEIsTUFBTU4sWUFBWU0sa0JBQWtCTixTQUFTO0lBQzdDLE1BQU1PLGdCQUFnQlIsaUJBQWlCQztJQUN2QyxPQUFPO1FBQ0xRLFFBQVE7WUFDTjtZQUNBO1NBQ0Q7UUFDREMsVUFBVTtZQUNSO2dCQUNFQyxNQUFNO29CQUNKSDtvQkFDQVAsVUFBVVcsTUFBTSxHQUFHSjtpQkFDcEI7Z0JBQ0RLLGlCQUFpQjtvQkFDZk4sa0JBQWtCTyxhQUFhO29CQUMvQlAsa0JBQWtCUSxlQUFlO2lCQUtsQztnQkFDREMsYUFBYTtnQkFDYkMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtBQUNGO0FBRUEsU0FBU0MsY0FBYyxLQUErQjtRQUEvQixFQUFFWCxpQkFBaUIsRUFBRVksUUFBUSxFQUFFLEdBQS9CO0lBQ3JCLE1BQU1DLFlBQVlkLGFBQWFDO0lBQy9CLE1BQU1jLFVBQVUsU0FBa0IsT0FBVEYsVUFBUztJQUVsQyxxQkFDRSw4REFBQ3JCLGdGQUFJQTtRQUFDd0IsU0FBUztRQUFDQyxXQUFVO1FBQU1DLElBQUk7OzBCQUNsQyw4REFBQzFCLGdGQUFJQTs7a0NBQ0gsOERBQUMyQjt3QkFBSUMsS0FBS0w7d0JBQVNNLE9BQU87NEJBQUNDLFlBQVk7d0JBQU07Ozs7OztrQ0FDN0MsOERBQUM5QixnRkFBSUE7d0JBQUMrQixJQUFJO3dCQUFDQyxJQUFJO3dCQUFJQyxPQUFNO3dCQUFRQyxRQUFPO2tDQUN0Qyw0RUFBQ3RDLHFEQUFRQTs0QkFBQ2lCLE1BQU1TOzRCQUFXYSxTQUFTO2dDQUNsQ0MsU0FBUztvQ0FDUEMsUUFBUTt3Q0FDSkMsU0FBUztvQ0FDYjtnQ0FDRjs0QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVAsOERBQUN0QyxnRkFBSUE7Z0JBQUMrQixJQUFJO2dCQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7QUFJckI7S0F0QlNaO0FBdUJULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvRG91Z2hudXRDaGFydC5qcz9lYTJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IENoYXJ0LCBBcmNFbGVtZW50LCBUb29sdGlwIH0gZnJvbSAnY2hhcnQuanMnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuQ2hhcnQucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCk7XG5cbmNvbnN0IGdldEZpbmlzaGVkQ291bnQgPSAoY2hlY2tsaXN0KSA9PiB7XG4gIHJldHVybiBjaGVja2xpc3QucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnZhbHVlID8gMSA6IDAsIDApXG59XG5cbmNvbnN0IGdldENoYXJ0RGF0YSA9IChjaGVja2xpc3RDYXRlZ29yeSkgPT4ge1xuICBjb25zdCBjaGVja2xpc3QgPSBjaGVja2xpc3RDYXRlZ29yeS5jaGVja2xpc3RcbiAgY29uc3QgZmluaXNoZWRDb3VudCA9IGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0KVxuICByZXR1cm4ge1xuICAgIGxhYmVsczogW1xuICAgICAgJ0ZpbmlzaGVkJyxcbiAgICAgICdXYWl0aW5nIEFjdGlvbidcbiAgICBdLCBcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgZmluaXNoZWRDb3VudCxcbiAgICAgICAgICBjaGVja2xpc3QubGVuZ3RoIC0gZmluaXNoZWRDb3VudFxuICAgICAgICBdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBjaGVja2xpc3RDYXRlZ29yeS5maW5pc2hlZENvbG9yLFxuICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5LnVuZmluaXNoZWRDb2xvcixcbiAgICAgICAgICAvLyBcIiMzM2ZmYmJcIixcbiAgICAgICAgICAvLyBcIiM3M2ZmZmZcIixcbiAgICAgICAgICAvLyBcIiNmZmZhNzNcIixcbiAgICAgICAgICAvLyBcIiNmNTdmN2ZcIlxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDRcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gRG91Z2hudXRDaGFydCh7IGNoZWNrbGlzdENhdGVnb3J5LCBjYXRlZ29yeSB9KSB7XG4gIGNvbnN0IGNoYXJ0RGF0YSA9IGdldENoYXJ0RGF0YShjaGVja2xpc3RDYXRlZ29yeSlcbiAgY29uc3QgcG5nUGF0aCA9IGBsb2dvcy8ke2NhdGVnb3J5fS5wbmdgXG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIG1iPXsxMH0+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPGltZyBzcmM9e3BuZ1BhdGh9IHN0eWxlPXt7bWFyZ2luTGVmdDogXCI3MHB4XCJ9fS8+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSB3aWR0aD0nNDAwcHgnIGhlaWdodD0nNDAwcHgnPlxuICAgICAgICAgIDxEb3VnaG51dCBkYXRhPXtjaGFydERhdGF9IG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBEb3VnaG51dENoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvdWdobnV0IiwiQ2hhcnQiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkdyaWQiLCJyZWdpc3RlciIsImdldEZpbmlzaGVkQ291bnQiLCJjaGVja2xpc3QiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJ2YWx1ZSIsImdldENoYXJ0RGF0YSIsImNoZWNrbGlzdENhdGVnb3J5IiwiZmluaXNoZWRDb3VudCIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImJhY2tncm91bmRDb2xvciIsImZpbmlzaGVkQ29sb3IiLCJ1bmZpbmlzaGVkQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0IiwiRG91Z2hudXRDaGFydCIsImNhdGVnb3J5IiwiY2hhcnREYXRhIiwicG5nUGF0aCIsImNvbnRhaW5lciIsImRpcmVjdGlvbiIsIm1iIiwiaW1nIiwic3JjIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiaXRlbSIsInhzIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DoughnutChart.js\n"));

/***/ })

});
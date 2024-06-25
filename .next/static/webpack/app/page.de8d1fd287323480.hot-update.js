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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);\nconst getFinishedCount = (checklist)=>{\n    return checklist.reduce((acc, cur)=>acc + cur.value ? 1 : 0, 0);\n};\nconst getChartData = (checklistCategory)=>{\n    const checklist = checklistCategory.checklist;\n    const finishedCount = getFinishedCount(checklist);\n    return {\n        labels: [\n            \"Finished\",\n            \"Waiting Action\"\n        ],\n        datasets: [\n            {\n                data: [\n                    finishedCount,\n                    checklist.length - finishedCount\n                ],\n                backgroundColor: [\n                    checklistCategory.finishedColor,\n                    checklistCategory.unfinishedColor\n                ],\n                borderWidth: 0,\n                hoverOffset: 4\n            }\n        ]\n    };\n};\nfunction DoughnutChart(param) {\n    let { checklistCategory } = param;\n    const chartData = getChartData(checklistCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        direction: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: true,\n                xs: 10,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Doughnut, {\n                    data: chartData,\n                    options: {\n                        plugins: {\n                            legend: {\n                                display: true\n                            }\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: true,\n                xs: 2,\n                sx: {\n                    width: \"100px\",\n                    backgroundColor: \"red\",\n                    height: \"100%\"\n                },\n                children: \"sdfdsfdsf\"\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRG91Z2hudXRDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQjtBQUNpQjtBQUNVO0FBQ2hCO0FBRXJDRSwyQ0FBS0EsQ0FBQ0ksUUFBUSxDQUFDSCxnREFBVUEsRUFBRUMsNkNBQU9BO0FBRWxDLE1BQU1HLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxVQUFVQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsTUFBUUQsTUFBTUMsSUFBSUMsS0FBSyxHQUFHLElBQUksR0FBRztBQUNqRTtBQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7SUFDcEIsTUFBTU4sWUFBWU0sa0JBQWtCTixTQUFTO0lBQzdDLE1BQU1PLGdCQUFnQlIsaUJBQWlCQztJQUN2QyxPQUFPO1FBQ0xRLFFBQVE7WUFDTjtZQUNBO1NBQ0Q7UUFDREMsVUFBVTtZQUNSO2dCQUNFQyxNQUFNO29CQUNKSDtvQkFDQVAsVUFBVVcsTUFBTSxHQUFHSjtpQkFDcEI7Z0JBQ0RLLGlCQUFpQjtvQkFDZk4sa0JBQWtCTyxhQUFhO29CQUMvQlAsa0JBQWtCUSxlQUFlO2lCQUtsQztnQkFDREMsYUFBYTtnQkFDYkMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtBQUNGO0FBRUEsU0FBU0MsY0FBYyxLQUFxQjtRQUFyQixFQUFFWCxpQkFBaUIsRUFBRSxHQUFyQjtJQUNyQixNQUFNWSxZQUFZYixhQUFhQztJQUUvQixxQkFDRSw4REFBQ1QsZ0ZBQUlBO1FBQUNzQixTQUFTO1FBQUNDLFdBQVU7OzBCQUN4Qiw4REFBQ3ZCLGdGQUFJQTtnQkFBQ3dCLElBQUk7Z0JBQUNDLElBQUk7MEJBQ2IsNEVBQUM3QixxREFBUUE7b0JBQUNpQixNQUFNUTtvQkFBV0ssU0FBUzt3QkFDbENDLFNBQVM7NEJBQ1BDLFFBQVE7Z0NBQ0pDLFNBQVM7NEJBQ2I7d0JBQ0Y7b0JBQUM7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDN0IsZ0ZBQUlBO2dCQUFDd0IsSUFBSTtnQkFBQ0MsSUFBSTtnQkFBR0ssSUFBSTtvQkFBQ0MsT0FBTztvQkFBU2hCLGlCQUFpQjtvQkFBT2lCLFFBQVE7Z0JBQU07MEJBQUc7Ozs7Ozs7Ozs7OztBQUt0RjtLQW5CU1o7QUFvQlQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Eb3VnaG51dENoYXJ0LmpzP2VhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgQ2hhcnQsIEFyY0VsZW1lbnQsIFRvb2x0aXAgfSBmcm9tICdjaGFydC5qcydcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5DaGFydC5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwKTtcblxuY29uc3QgZ2V0RmluaXNoZWRDb3VudCA9IChjaGVja2xpc3QpID0+IHtcbiAgcmV0dXJuIGNoZWNrbGlzdC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIudmFsdWUgPyAxIDogMCwgMClcbn1cblxuY29uc3QgZ2V0Q2hhcnREYXRhID0gKGNoZWNrbGlzdENhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENhdGVnb3J5LmNoZWNrbGlzdFxuICBjb25zdCBmaW5pc2hlZENvdW50ID0gZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3QpXG4gIHJldHVybiB7XG4gICAgbGFiZWxzOiBbXG4gICAgICAnRmluaXNoZWQnLFxuICAgICAgJ1dhaXRpbmcgQWN0aW9uJ1xuICAgIF0sIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICBmaW5pc2hlZENvdW50LFxuICAgICAgICAgIGNoZWNrbGlzdC5sZW5ndGggLSBmaW5pc2hlZENvdW50XG4gICAgICAgIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5LmZpbmlzaGVkQ29sb3IsXG4gICAgICAgICAgY2hlY2tsaXN0Q2F0ZWdvcnkudW5maW5pc2hlZENvbG9yLFxuICAgICAgICAgIC8vIFwiIzMzZmZiYlwiLFxuICAgICAgICAgIC8vIFwiIzczZmZmZlwiLFxuICAgICAgICAgIC8vIFwiI2ZmZmE3M1wiLFxuICAgICAgICAgIC8vIFwiI2Y1N2Y3ZlwiXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICBob3Zlck9mZnNldDogNFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBEb3VnaG51dENoYXJ0KHsgY2hlY2tsaXN0Q2F0ZWdvcnkgfSkge1xuICBjb25zdCBjaGFydERhdGEgPSBnZXRDaGFydERhdGEoY2hlY2tsaXN0Q2F0ZWdvcnkpXG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxuICAgICAgICA8RG91Z2hudXQgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXt7XG4gICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fX1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN4PXt7d2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIGhlaWdodDogJzEwMCUnfX0+XG4gICAgICAgIHNkZmRzZmRzZlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRG91Z2hudXQiLCJDaGFydCIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiR3JpZCIsInJlZ2lzdGVyIiwiZ2V0RmluaXNoZWRDb3VudCIsImNoZWNrbGlzdCIsInJlZHVjZSIsImFjYyIsImN1ciIsInZhbHVlIiwiZ2V0Q2hhcnREYXRhIiwiY2hlY2tsaXN0Q2F0ZWdvcnkiLCJmaW5pc2hlZENvdW50IiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwibGVuZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwiZmluaXNoZWRDb2xvciIsInVuZmluaXNoZWRDb2xvciIsImJvcmRlcldpZHRoIiwiaG92ZXJPZmZzZXQiLCJEb3VnaG51dENoYXJ0IiwiY2hhcnREYXRhIiwiY29udGFpbmVyIiwiZGlyZWN0aW9uIiwiaXRlbSIsInhzIiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwic3giLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DoughnutChart.js\n"));

/***/ })

});
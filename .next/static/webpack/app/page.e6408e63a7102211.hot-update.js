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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);\nconst getFinishedCount = (checklist)=>{\n    return checklist.reduce((acc, cur)=>acc + cur.value ? 1 : 0, 0);\n};\nconst getChartData = (checklistCategory)=>{\n    const checklist = checklistCategory.checklist;\n    const finishedCount = getFinishedCount(checklist);\n    return {\n        labels: [\n            \"Finished\",\n            \"Waiting Action\"\n        ],\n        datasets: [\n            {\n                data: [\n                    finishedCount,\n                    checklist.length - finishedCount\n                ],\n                backgroundColor: [\n                    checklistCategory.finishedColor,\n                    checklistCategory.unfinishedColor\n                ],\n                borderWidth: 0,\n                hoverOffset: 4\n            }\n        ]\n    };\n};\nfunction DoughnutChart(param) {\n    let { checklistCategory } = param;\n    const chartData = getChartData(checklistCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n                data: chartData,\n                options: {\n                    plugins: {\n                        legend: {\n                            display: true\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100px\",\n                    backgroundColor: \"red\",\n                    height: \"100%\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRG91Z2hudXRDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTBCO0FBQ2lCO0FBQ1U7QUFFckRFLDJDQUFLQSxDQUFDRyxRQUFRLENBQUNGLGdEQUFVQSxFQUFFQyw2Q0FBT0E7QUFFbEMsTUFBTUUsbUJBQW1CLENBQUNDO0lBQ3hCLE9BQU9BLFVBQVVDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFRRCxNQUFNQyxJQUFJQyxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQ2pFO0FBRUEsTUFBTUMsZUFBZSxDQUFDQztJQUNwQixNQUFNTixZQUFZTSxrQkFBa0JOLFNBQVM7SUFDN0MsTUFBTU8sZ0JBQWdCUixpQkFBaUJDO0lBQ3ZDLE9BQU87UUFDTFEsUUFBUTtZQUNOO1lBQ0E7U0FDRDtRQUNEQyxVQUFVO1lBQ1I7Z0JBQ0VDLE1BQU07b0JBQ0pIO29CQUNBUCxVQUFVVyxNQUFNLEdBQUdKO2lCQUNwQjtnQkFDREssaUJBQWlCO29CQUNmTixrQkFBa0JPLGFBQWE7b0JBQy9CUCxrQkFBa0JRLGVBQWU7aUJBS2xDO2dCQUNEQyxhQUFhO2dCQUNiQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0FBQ0Y7QUFFQSxTQUFTQyxjQUFjLEtBQXFCO1FBQXJCLEVBQUVYLGlCQUFpQixFQUFFLEdBQXJCO0lBQ3JCLE1BQU1ZLFlBQVliLGFBQWFDO0lBRS9CLHFCQUNFLDhEQUFDYTs7MEJBQ0MsOERBQUN6QixxREFBUUE7Z0JBQUNnQixNQUFNUTtnQkFBV0UsU0FBUztvQkFDbENDLFNBQVM7d0JBQ1BDLFFBQVE7NEJBQ0pDLFNBQVM7d0JBQ2I7b0JBQ0Y7Z0JBQUM7Ozs7OzswQkFFSCw4REFBQ0o7Z0JBQUlLLE9BQU87b0JBQUNDLE9BQU87b0JBQVNiLGlCQUFpQjtvQkFBT2MsUUFBUTtnQkFBTTs7Ozs7Ozs7Ozs7O0FBS3pFO0tBakJTVDtBQWtCVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0RvdWdobnV0Q2hhcnQuanM/ZWEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgeyBDaGFydCwgQXJjRWxlbWVudCwgVG9vbHRpcCB9IGZyb20gJ2NoYXJ0LmpzJ1xuXG5DaGFydC5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwKTtcblxuY29uc3QgZ2V0RmluaXNoZWRDb3VudCA9IChjaGVja2xpc3QpID0+IHtcbiAgcmV0dXJuIGNoZWNrbGlzdC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIudmFsdWUgPyAxIDogMCwgMClcbn1cblxuY29uc3QgZ2V0Q2hhcnREYXRhID0gKGNoZWNrbGlzdENhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENhdGVnb3J5LmNoZWNrbGlzdFxuICBjb25zdCBmaW5pc2hlZENvdW50ID0gZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3QpXG4gIHJldHVybiB7XG4gICAgbGFiZWxzOiBbXG4gICAgICAnRmluaXNoZWQnLFxuICAgICAgJ1dhaXRpbmcgQWN0aW9uJ1xuICAgIF0sIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICBmaW5pc2hlZENvdW50LFxuICAgICAgICAgIGNoZWNrbGlzdC5sZW5ndGggLSBmaW5pc2hlZENvdW50XG4gICAgICAgIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5LmZpbmlzaGVkQ29sb3IsXG4gICAgICAgICAgY2hlY2tsaXN0Q2F0ZWdvcnkudW5maW5pc2hlZENvbG9yLFxuICAgICAgICAgIC8vIFwiIzMzZmZiYlwiLFxuICAgICAgICAgIC8vIFwiIzczZmZmZlwiLFxuICAgICAgICAgIC8vIFwiI2ZmZmE3M1wiLFxuICAgICAgICAgIC8vIFwiI2Y1N2Y3ZlwiXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICBob3Zlck9mZnNldDogNFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBEb3VnaG51dENoYXJ0KHsgY2hlY2tsaXN0Q2F0ZWdvcnkgfSkge1xuICBjb25zdCBjaGFydERhdGEgPSBnZXRDaGFydERhdGEoY2hlY2tsaXN0Q2F0ZWdvcnkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERvdWdobnV0IGRhdGE9e2NoYXJ0RGF0YX0gb3B0aW9ucz17e1xuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9fX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIGhlaWdodDogJzEwMCUnfX0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRG91Z2hudXRDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJEb3VnaG51dCIsIkNoYXJ0IiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJyZWdpc3RlciIsImdldEZpbmlzaGVkQ291bnQiLCJjaGVja2xpc3QiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJ2YWx1ZSIsImdldENoYXJ0RGF0YSIsImNoZWNrbGlzdENhdGVnb3J5IiwiZmluaXNoZWRDb3VudCIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImJhY2tncm91bmRDb2xvciIsImZpbmlzaGVkQ29sb3IiLCJ1bmZpbmlzaGVkQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0IiwiRG91Z2hudXRDaGFydCIsImNoYXJ0RGF0YSIsImRpdiIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DoughnutChart.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);\nconst getFinishedCount = (checklist)=>{\n    return checklist.filter((task)=>task.value === true).length;\n};\nconst getChartData = (checklistCategory)=>{\n    const checklist = checklistCategory.checklist;\n    const finishedCount = getFinishedCount(checklist);\n    return {\n        labels: [\n            \"Finished\",\n            \"Waiting Action\"\n        ],\n        datasets: [\n            {\n                data: [\n                    finishedCount,\n                    checklist.length - finishedCount\n                ],\n                backgroundColor: [\n                    checklistCategory.finishedColor,\n                    checklistCategory.unfinishedColor\n                ],\n                borderWidth: 0,\n                hoverOffset: 4\n            }\n        ]\n    };\n};\nfunction DoughnutChart(param) {\n    let { checklistCategory, category, onClickDoughnut } = param;\n    const chartData = getChartData(checklistCategory);\n    const pngPath = \"logos/\".concat(category, \".png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        direction: \"row\",\n        mb: 5,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pngPath,\n                        style: {\n                            marginLeft: \"70px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: true,\n                        xs: 10,\n                        width: \"400px\",\n                        height: \"400px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Doughnut, {\n                            data: chartData,\n                            options: {\n                                plugins: {\n                                    legend: {\n                                        display: true\n                                    }\n                                }\n                            },\n                            onClick: ()=>onClickDoughnut(category)\n                        }, void 0, false, {\n                            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: true,\n                xs: 2\n            }, void 0, false, {\n                fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/DoughnutChart.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRG91Z2hudXRDaGFydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQjtBQUNpQjtBQUNVO0FBQ2hCO0FBRXJDRSwyQ0FBS0EsQ0FBQ0ksUUFBUSxDQUFDSCxnREFBVUEsRUFBRUMsNkNBQU9BO0FBRWxDLE1BQU1HLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxVQUFVQyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEtBQUssS0FBSyxNQUFNQyxNQUFNO0FBQzdEO0FBRUEsTUFBTUMsZUFBZSxDQUFDQztJQUNwQixNQUFNTixZQUFZTSxrQkFBa0JOLFNBQVM7SUFDN0MsTUFBTU8sZ0JBQWdCUixpQkFBaUJDO0lBQ3ZDLE9BQU87UUFDTFEsUUFBUTtZQUNOO1lBQ0E7U0FDRDtRQUNEQyxVQUFVO1lBQ1I7Z0JBQ0VDLE1BQU07b0JBQ0pIO29CQUNBUCxVQUFVSSxNQUFNLEdBQUdHO2lCQUNwQjtnQkFDREksaUJBQWlCO29CQUNmTCxrQkFBa0JNLGFBQWE7b0JBQy9CTixrQkFBa0JPLGVBQWU7aUJBQ2xDO2dCQUNEQyxhQUFhO2dCQUNiQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0FBQ0Y7QUFFQSxTQUFTQyxjQUFjLEtBQWdEO1FBQWhELEVBQUVWLGlCQUFpQixFQUFFVyxRQUFRLEVBQUVDLGVBQWUsRUFBRSxHQUFoRDtJQUNyQixNQUFNQyxZQUFZZCxhQUFhQztJQUMvQixNQUFNYyxVQUFVLFNBQWtCLE9BQVRILFVBQVM7SUFFbEMscUJBQ0UsOERBQUNwQixnRkFBSUE7UUFBQ3dCLFNBQVM7UUFBQ0MsV0FBVTtRQUFNQyxJQUFJOzswQkFDbEMsOERBQUMxQixnRkFBSUE7O2tDQUNILDhEQUFDMkI7d0JBQUlDLEtBQUtMO3dCQUFTTSxPQUFPOzRCQUFDQyxZQUFZO3dCQUFNOzs7Ozs7a0NBQzdDLDhEQUFDOUIsZ0ZBQUlBO3dCQUFDK0IsSUFBSTt3QkFBQ0MsSUFBSTt3QkFBSUMsT0FBTTt3QkFBUUMsUUFBTztrQ0FDdEMsNEVBQUN0QyxxREFBUUE7NEJBQUNpQixNQUFNUzs0QkFBV2EsU0FBUztnQ0FDbENDLFNBQVM7b0NBQ1BDLFFBQVE7d0NBQ0pDLFNBQVM7b0NBQ2I7Z0NBQ0Y7NEJBQUM7NEJBQ0RDLFNBQVMsSUFBTWxCLGdCQUFnQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyQyw4REFBQ3BCLGdGQUFJQTtnQkFBQytCLElBQUk7Z0JBQUNDLElBQUk7Ozs7Ozs7Ozs7OztBQUlyQjtLQXZCU2I7QUF3QlQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Eb3VnaG51dENoYXJ0LmpzP2VhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgQ2hhcnQsIEFyY0VsZW1lbnQsIFRvb2x0aXAgfSBmcm9tICdjaGFydC5qcydcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5DaGFydC5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwKTtcblxuY29uc3QgZ2V0RmluaXNoZWRDb3VudCA9IChjaGVja2xpc3QpID0+IHtcbiAgcmV0dXJuIGNoZWNrbGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnZhbHVlID09PSB0cnVlKS5sZW5ndGhcbn1cblxuY29uc3QgZ2V0Q2hhcnREYXRhID0gKGNoZWNrbGlzdENhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENhdGVnb3J5LmNoZWNrbGlzdFxuICBjb25zdCBmaW5pc2hlZENvdW50ID0gZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3QpXG4gIHJldHVybiB7XG4gICAgbGFiZWxzOiBbXG4gICAgICAnRmluaXNoZWQnLFxuICAgICAgJ1dhaXRpbmcgQWN0aW9uJ1xuICAgIF0sIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICBmaW5pc2hlZENvdW50LFxuICAgICAgICAgIGNoZWNrbGlzdC5sZW5ndGggLSBmaW5pc2hlZENvdW50XG4gICAgICAgIF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgIGNoZWNrbGlzdENhdGVnb3J5LmZpbmlzaGVkQ29sb3IsXG4gICAgICAgICAgY2hlY2tsaXN0Q2F0ZWdvcnkudW5maW5pc2hlZENvbG9yLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgaG92ZXJPZmZzZXQ6IDRcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gRG91Z2hudXRDaGFydCh7IGNoZWNrbGlzdENhdGVnb3J5LCBjYXRlZ29yeSwgb25DbGlja0RvdWdobnV0IH0pIHtcbiAgY29uc3QgY2hhcnREYXRhID0gZ2V0Q2hhcnREYXRhKGNoZWNrbGlzdENhdGVnb3J5KVxuICBjb25zdCBwbmdQYXRoID0gYGxvZ29zLyR7Y2F0ZWdvcnl9LnBuZ2BcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycgbWI9ezV9PlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxpbWcgc3JjPXtwbmdQYXRofSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiNzBweFwifX0vPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gd2lkdGg9JzQwMHB4JyBoZWlnaHQ9JzQwMHB4Jz5cbiAgICAgICAgICA8RG91Z2hudXQgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXt7XG4gICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRG91Z2hudXQoY2F0ZWdvcnkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRG91Z2hudXQiLCJDaGFydCIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiR3JpZCIsInJlZ2lzdGVyIiwiZ2V0RmluaXNoZWRDb3VudCIsImNoZWNrbGlzdCIsImZpbHRlciIsInRhc2siLCJ2YWx1ZSIsImxlbmd0aCIsImdldENoYXJ0RGF0YSIsImNoZWNrbGlzdENhdGVnb3J5IiwiZmluaXNoZWRDb3VudCIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImZpbmlzaGVkQ29sb3IiLCJ1bmZpbmlzaGVkQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyT2Zmc2V0IiwiRG91Z2hudXRDaGFydCIsImNhdGVnb3J5Iiwib25DbGlja0RvdWdobnV0IiwiY2hhcnREYXRhIiwicG5nUGF0aCIsImNvbnRhaW5lciIsImRpcmVjdGlvbiIsIm1iIiwiaW1nIiwic3JjIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiaXRlbSIsInhzIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DoughnutChart.js\n"));

/***/ })

});
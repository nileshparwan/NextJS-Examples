"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Post = function(props) {\n    var _this1 = _this;\n    var posts = props.posts;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\kparwan\\\\Creative Cloud Files\\\\Project\\\\NextJs\\\\movie-app\\\\pages\\\\post.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kparwan\\\\Creative Cloud Files\\\\Project\\\\NextJs\\\\movie-app\\\\pages\\\\post.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"I am a post\"\n            }),\n            posts.map(function(post) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kparwan\\\\Creative Cloud Files\\\\Project\\\\NextJs\\\\movie-app\\\\pages\\\\post.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: _this1\n                });\n            })\n        ]\n    }));\n};\n_c = Post;\nPost.getInitialProps = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var posts;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,_actions__WEBPACK_IMPORTED_MODULE_3__.getPosts)();\n            case 2:\n                posts = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    posts: posts\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsR0FBSyxDQUFDRSxJQUFJLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDckIsR0FBSyxDQUFHQyxLQUFLLEdBQUtELEtBQUssQ0FBZkMsS0FBSztJQUViLE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O2lGQUNyQkMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFXOztZQUVkSCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJOzhCQUNYLE1BQU0sd0RBQUxKLENBQUc7Ozs7Ozs7Ozs7O0FBTXBCLENBQUM7S0FkS0gsSUFBSTtBQWdCVkEsSUFBSSxDQUFDUSxlQUFlLHFGQUFHLFFBQVEsV0FBSSxDQUFDO1FBQzFCTixLQUFLOzs7Ozt1QkFBU0gsa0RBQVE7O2dCQUF0QkcsS0FBSzs2Q0FDSixDQUFDO29CQUFDQSxLQUFLLEVBQUxBLEtBQUs7Z0JBQUMsQ0FBQzs7Ozs7O0FBQ3BCLENBQUM7QUFFRCwrREFBZUYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+SSBhbSBhIHBvc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xyXG4gICAgcmV0dXJuIHsgcG9zdHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UG9zdHMiLCJQb3N0IiwicHJvcHMiLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicG9zdCIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"getMovieById\": () => (/* binding */ getMovieById),\n/* harmony export */   \"createMovie\": () => (/* binding */ createMovie),\n/* harmony export */   \"updateMovie\": () => (/* binding */ updateMovie),\n/* harmony export */   \"deleteMovie\": () => (/* binding */ deleteMovie),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BASE_URL = \"http://localhost:3000\";\nconst MOVIE_DATA = [];\nconst CATEGORY_DATA = [\n    {\n        id: 0,\n        name: \"all\"\n    },\n    {\n        id: 1,\n        name: \"drama\"\n    },\n    {\n        id: 2,\n        name: \"action\"\n    },\n    {\n        id: 3,\n        name: \"adventure\"\n    },\n    {\n        id: 4,\n        name: \"historical\"\n    }\n];\nconst getCategories = ()=>{\n    return new Promise((resolve, reject)=>{\n        setTimeout(()=>{\n            resolve(CATEGORY_DATA);\n        }, 50);\n    });\n};\nconst getMovies = ()=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE_URL}/api/v1/movies`).then((res)=>res.data\n    );\n};\nconst getMovieById = (id)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE_URL}/api/v1/movies/${id}`).then((res)=>res.data\n    );\n};\nconst createMovie = (movie)=>{\n    movie.id = Math.random().toString(36).substr(2, 5);\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/api/v1/movies`, movie).then((res)=>res.data\n    );\n};\nconst updateMovie = (movie)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie).then((res)=>res.data\n    );\n};\nconst deleteMovie = (id)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](`${BASE_URL}/api/v1/movies/${id}`).then((res)=>res.data\n    );\n};\nconst getPosts = ()=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE_URL}/api/v1/post`).then((res)=>res.data\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUF1QjtBQUN4QyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFFckIsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBQztJQUNuQixDQUFDO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFLO0lBQUMsQ0FBQztJQUN0QixDQUFDO1FBQUNELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFPO0lBQUMsQ0FBQztJQUN4QixDQUFDO1FBQUNELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUN6QixDQUFDO1FBQUNELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFXO0lBQUMsQ0FBQztJQUM1QixDQUFDO1FBQUNELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFZO0lBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRU0sS0FBSyxDQUFDQyxhQUFhLE9BQVMsQ0FBQztJQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxHQUFLLENBQUM7UUFDckNDLFVBQVUsS0FBTyxDQUFDO1lBQ2RGLE9BQU8sQ0FBQ0wsYUFBYTtRQUN6QixDQUFDLEVBQUUsRUFBRTtJQUNULENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDUSxTQUFTLE9BQVMsQ0FBQztJQUM1QixNQUFNLENBQUNYLGdEQUFTLElBQUlDLFFBQVEsQ0FBQyxjQUFjLEdBQUdZLElBQUksRUFBQ0MsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUk7O0FBQ3RFLENBQUM7QUFFTSxLQUFLLENBQUNDLFlBQVksSUFBSVosRUFBRSxHQUFLLENBQUM7SUFDakMsTUFBTSxDQUFDSixnREFBUyxJQUFJQyxRQUFRLENBQUMsZUFBZSxFQUFFRyxFQUFFLElBQUlTLElBQUksRUFBQ0MsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUk7O0FBQzVFLENBQUM7QUFFTSxLQUFLLENBQUNFLFdBQVcsSUFBSUMsS0FBSyxHQUFLLENBQUM7SUFDbkNBLEtBQUssQ0FBQ2QsRUFBRSxHQUFHZSxJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLEVBQUUsRUFBRUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3RCLGlEQUFVLElBQUlDLFFBQVEsQ0FBQyxjQUFjLEdBQUdpQixLQUFLLEVBQUVMLElBQUksRUFBQ0MsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUk7O0FBQzlFLENBQUM7QUFFTSxLQUFLLENBQUNTLFdBQVcsSUFBSU4sS0FBSyxHQUFLLENBQUM7SUFDbkMsTUFBTSxDQUFDbEIsa0RBQVcsSUFBSUMsUUFBUSxDQUFDLGVBQWUsRUFBRWlCLEtBQUssQ0FBQ2QsRUFBRSxJQUFJYyxLQUFLLEVBQUVMLElBQUksRUFBQ0MsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUk7O0FBQzNGLENBQUM7QUFFTSxLQUFLLENBQUNXLFdBQVcsSUFBSXRCLEVBQUUsR0FBSyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ0osc0RBQVksSUFBSUMsUUFBUSxDQUFDLGVBQWUsRUFBRUcsRUFBRSxJQUFJUyxJQUFJLEVBQUNDLEdBQUcsR0FBSUEsR0FBRyxDQUFDQyxJQUFJOztBQUMvRSxDQUFDO0FBRU0sS0FBSyxDQUFDYSxRQUFRLE9BQVMsQ0FBQztJQUMzQixNQUFNLENBQUM1QixnREFBUyxJQUFJQyxRQUFRLENBQUMsWUFBWSxHQUFHWSxJQUFJLEVBQUNDLEdBQUcsR0FBSUEsR0FBRyxDQUFDQyxJQUFJOztBQUNwRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtYXBwLy4vYWN0aW9ucy9pbmRleC5qcz82OGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmNvbnN0IE1PVklFX0RBVEEgPSBbXTtcclxuXHJcbmNvbnN0IENBVEVHT1JZX0RBVEEgPSBbXHJcbiAgICB7IGlkOiAwLCBuYW1lOiBcImFsbFwiIH0sXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcImRyYW1hXCIgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiYWN0aW9uXCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiYWR2ZW50dXJlXCIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiaGlzdG9yaWNhbFwiIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShDQVRFR09SWV9EQVRBKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9hcGkvdjEvbW92aWVzYCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllQnlJZCA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHtCQVNFX1VSTH0vYXBpL3YxL21vdmllcy8ke2lkfWApLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVNb3ZpZSA9IChtb3ZpZSkgPT4ge1xyXG4gICAgbW92aWUuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXBpL3YxL21vdmllc2AsIG1vdmllKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWUgPSAobW92aWUpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgJHtCQVNFX1VSTH0vYXBpL3YxL21vdmllcy8ke21vdmllLmlkfWAsIG1vdmllKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7QkFTRV9VUkx9L2FwaS92MS9tb3ZpZXMvJHtpZH1gKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9hcGkvdjEvcG9zdGApLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJCQVNFX1VSTCIsIk1PVklFX0RBVEEiLCJDQVRFR09SWV9EQVRBIiwiaWQiLCJuYW1lIiwiZ2V0Q2F0ZWdvcmllcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldE1vdmllcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2V0TW92aWVCeUlkIiwiY3JlYXRlTW92aWUiLCJtb3ZpZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInBvc3QiLCJ1cGRhdGVNb3ZpZSIsInBhdGNoIiwiZGVsZXRlTW92aWUiLCJkZWxldGUiLCJnZXRQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/index.js\n");

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n\n\n\nconst Post = (props)=>{\n    const { posts  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\kparwan\\\\Creative Cloud Files\\\\Project\\\\NextJs\\\\movie-app\\\\pages\\\\post.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kparwan\\\\Creative Cloud Files\\\\Project\\\\NextJs\\\\movie-app\\\\pages\\\\post.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"I am a post\"\n            }),\n            JSON.stringify(posts)\n        ]\n    }));\n};\nPost.getInitialProps = async ()=>{\n    const posts = await (0,_actions__WEBPACK_IMPORTED_MODULE_2__.getPosts)();\n    return {\n        posts\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUVyQyxLQUFLLENBQUNFLElBQUksSUFBSUMsS0FBSyxHQUFLLENBQUM7SUFDckIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFDLENBQUMsR0FBR0QsS0FBSztJQUV2QixNQUFNLHVFQUNERSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztpRkFDckJDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBVzs7WUFFZEMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLEtBQUs7OztBQUdqQyxDQUFDO0FBRURGLElBQUksQ0FBQ1EsZUFBZSxhQUFlLENBQUM7SUFDaEMsS0FBSyxDQUFDTixLQUFLLEdBQUcsS0FBSyxDQUFDSCxrREFBUTtJQUM1QixNQUFNLENBQUMsQ0FBQztRQUFDRyxLQUFLO0lBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsaUVBQWVGLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWFwcC8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+SSBhbSBhIHBvc3Q8L2gxPlxyXG5cclxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHBvc3RzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuICAgIHJldHVybiB7IHBvc3RzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFBvc3RzIiwiUG9zdCIsInByb3BzIiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();
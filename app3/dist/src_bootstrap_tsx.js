(self["webpackChunkapp3"] = self["webpackChunkapp3"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./src/Search.tsx");



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "App SearchEngine 123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search__WEBPACK_IMPORTED_MODULE_1__.default, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Search.tsx":
/*!************************!*\
  !*** ./src/Search.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Search = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex'
    }
  }, "search: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");



react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_tsx.js.map
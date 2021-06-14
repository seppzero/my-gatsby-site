(self["webpackChunkapp3"] = self["webpackChunkapp3"] || []).push([[496],{

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/Search.tsx


const Search = () => {
  const [searchTerm, setSearchTerm] = (0,react.useState)('');
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex'
    }
  }, "search: ", /*#__PURE__*/react.createElement("input", null), searchTerm);
};

/* harmony default export */ const src_Search = (Search);
;// CONCATENATED MODULE: ./src/App.tsx



function App() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "App SearchEngine"), /*#__PURE__*/react.createElement(src_Search, null));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/bootstrap.tsx



react_dom.render( /*#__PURE__*/react.createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=496.js.map
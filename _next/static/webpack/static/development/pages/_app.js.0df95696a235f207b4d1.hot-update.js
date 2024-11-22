webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./action/homeAction.js":
/*!******************************!*\
  !*** ./action/homeAction.js ***!
  \******************************/
/*! exports provided: getHome, getHomeSuccess, getHomeErr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeSuccess", function() { return getHomeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeErr", function() { return getHomeErr; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./action/types.js");

var getHome = function getHome() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_HOME"]
  };
};
var getHomeSuccess = function getHomeSuccess(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_SUCCESS"],
    data: data
  };
};
var getHomeErr = function getHomeErr(err) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_ERR"],
    err: err
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.0df95696a235f207b4d1.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./saga/homeSaga.js":
/*!**************************!*\
  !*** ./saga/homeSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_englishAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/englishAction */ "./action/englishAction.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../host */ "./host.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getHomeSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(homeSaga);






var apiGetEnglishStory = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/english/listStory.json");
var apiGetEnglishListPhonic = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/phonics/listPhonics_v3.json"); // const apiGetEnglishBook = `${englishCdn}/english/`;
// put = vs dispatch

function getHomeSaga() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getHomeSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_ENGLISH_STORY"]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiGetEnglishStory);

        case 6:
          res = _context.sent;
          data = res.data;
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishStorySuccess"](data));

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);
          _context.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishStoryErr"](_context.t0));

        case 17:
          _context.next = 0;
          break;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 12]]);
}

function homeSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function homeSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getHomeSaga);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/* harmony default export */ __webpack_exports__["default"] = (homeSaga); //takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm

/***/ })

})
//# sourceMappingURL=_app.js.3621dd20f3105e6dd5c0.hot-update.js.map
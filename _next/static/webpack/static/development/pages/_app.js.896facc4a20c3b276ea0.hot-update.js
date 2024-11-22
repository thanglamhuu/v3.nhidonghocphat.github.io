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
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEnglishStorySaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEnglishBookSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEnglishListPhonicsSaga),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getEnglishPhonicSaga),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(englishStorySaga);






var apiGetEnglishStory = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/english/listStory.json");
var apiGetEnglishListPhonic = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/phonics/listPhonics_v3.json"); // const apiGetEnglishBook = `${englishCdn}/english/`;
// put = vs dispatch

function getEnglishStorySaga() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEnglishStorySaga$(_context) {
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

function getEnglishBookSaga(_ref) {
  var data, apiGetEnglishBook, res, _data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEnglishBookSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref.data;
          apiGetEnglishBook = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/english/").concat(data, "/content.json");
          console.log(apiGetEnglishBook);
          _context2.prev = 3;
          _context2.next = 6;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiGetEnglishBook);

        case 6:
          res = _context2.sent;
          _data = res.data;
          console.log(_data);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishBookSuccess"](_data));

        case 11:
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
          _context2.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishBookErr"]());

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[3, 13]]);
}

function getEnglishListPhonicsSaga() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEnglishListPhonicsSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {}

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_ENGLISH_LIST_PHONIC"]);

        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiGetEnglishListPhonic);

        case 6:
          res = _context3.sent;
          data = res.data;
          _context3.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishListPhonicSuccess"](data));

        case 10:
          _context3.next = 17;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](3);
          console.log(_context3.t0);
          _context3.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishListPhonicErr"](_context3.t0));

        case 17:
          _context3.next = 0;
          break;

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[3, 12]]);
}

function getEnglishPhonicSaga(_ref2) {
  var data, apiGetEnglishPhonic, res, _data2;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getEnglishPhonicSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          data = _ref2.data;
          apiGetEnglishPhonic = "".concat(_host__WEBPACK_IMPORTED_MODULE_5__["englishCdn"], "/phonics/").concat(data, ".json");
          _context4.prev = 2;
          _context4.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiGetEnglishPhonic);

        case 5:
          res = _context4.sent;
          _data2 = res.data;
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishPhonicSuccess"](_data2));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          console.log(_context4.t0);
          _context4.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action_englishAction__WEBPACK_IMPORTED_MODULE_3__["getEnglishPhonicErr"]());

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[2, 11]]);
}

function englishStorySaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function englishStorySaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getEnglishStorySaga);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_ENGLISH_BOOK"], getEnglishBookSaga);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getEnglishListPhonicsSaga);

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_ENGLISH_PHONIC"], getEnglishPhonicSaga);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

/* harmony default export */ __webpack_exports__["default"] = (englishStorySaga); //takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm

/***/ }),

/***/ "./saga/rootSaga.js":
/*!**************************!*\
  !*** ./saga/rootSaga.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _userSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSaga */ "./saga/userSaga.js");
/* harmony import */ var _englishSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./englishSaga */ "./saga/englishSaga.js");
/* harmony import */ var _homeSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeSaga */ "./saga/homeSaga.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_userSaga__WEBPACK_IMPORTED_MODULE_2__["default"]);

        case 3:
          _context.t1 = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_englishSaga__WEBPACK_IMPORTED_MODULE_3__["default"]);

        case 6:
          _context.t2 = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_homeSaga__WEBPACK_IMPORTED_MODULE_4__["default"]);

        case 9:
          _context.t3 = _context.sent;
          _context.t4 = [_context.t1, _context.t2, _context.t3];
          _context.next = 13;
          return (0, _context.t0)(_context.t4);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ })

})
//# sourceMappingURL=_app.js.896facc4a20c3b276ea0.hot-update.js.map
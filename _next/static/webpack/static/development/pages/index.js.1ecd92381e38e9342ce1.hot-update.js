webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/homepage/BaiHocListHome.js":
/*!***********************************************!*\
  !*** ./components/homepage/BaiHocListHome.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media */ "./components/media.js");
/* harmony import */ var _IconNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconNew */ "./components/homepage/IconNew.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  min-height: 30px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        background-color:#fff !important;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;margin-left: 5px;margin-right: 5px;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: #eee !important;\n  display: block;\n  text-decoration: none;\n  min-height: 23px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 33%;\n  padding: 1px !important;\n  ", ";\n  border: 1px solid ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Link = _routes__WEBPACK_IMPORTED_MODULE_4___default.a.Link,
    Router = _routes__WEBPACK_IMPORTED_MODULE_4___default.a.Router;




var TatCaBaiHocTitle = 'Tất cả các bài';
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var BaiHocListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
var BaiHocListLI = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li(_templateObject3(), _media__WEBPACK_IMPORTED_MODULE_7__["default"].sm(_templateObject4()), _styles_theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.textLink, function (props) {
  return (!props.soChan || props.soChan === 0) && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
});
var LinkI = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Link)(_templateObject6());

function getShortContent(content) {
  return "".concat(content.substring(0, 200), "... (xem ti\u1EBFp)");
}

var BaiHocItem = function BaiHocItem(_ref) {
  var baihoc = _ref.baihoc,
      showNew = _ref.showNew,
      prefix = _ref.prefix;
  var item = baihoc;

  if (!item || !item.id) {
    return '';
  }

  var linkTo = item.link || "".concat(prefix + item.id); // if (item.link === TatCaBaiHocTitle) {
  //   linkTo = '/chuong/giaoTrinhDich';
  // }

  var id = item.id;
  var soChan = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(id.substr(1, 2).replace('B', '')) % 2;
  {
    /* <LinkI key={id} className="linkNdhp" to={linkTo} style={{ paddingLeft: 5 }}> */
  }
  return __jsx(BaiHocListLI, {
    soChan: soChan
  }, __jsx(LinkI, {
    key: id,
    to: linkTo
  }, item.title));
};

var BaiHocListHome = function BaiHocListHome(_ref2) {
  var loading = _ref2.loading,
      baiHocs = _ref2.baiHocs,
      linkAll = _ref2.linkAll,
      prefix = _ref2.prefix;
  var baiHocAll = baiHocs;
  var i = 0;
  var itemAll = {
    chuong: 'B - Chương 1',
    content: 's',
    id: 'C0B0',
    title: TatCaBaiHocTitle,
    link: linkAll
  };
  var cards = '';

  if (baiHocAll) {
    baiHocAll.push(itemAll);
    cards = baiHocAll.map(function (item) {
      return __jsx(BaiHocItem, {
        key: "".concat(linkAll + ++i),
        baihoc: item,
        showNew: i === 1,
        prefix: prefix
      });
    });
  }

  return __jsx(ContentWrapper, null, __jsx(BaiHocListWrapper, null, cards));
};

BaiHocListHome.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (BaiHocListHome);

/***/ })

})
//# sourceMappingURL=index.js.1ecd92381e38e9342ce1.hot-update.js.map
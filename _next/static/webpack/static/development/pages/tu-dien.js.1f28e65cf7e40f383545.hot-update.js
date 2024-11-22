webpackHotUpdate("static\\development\\pages\\tu-dien.js",{

/***/ "./pages/tu-dien.js":
/*!**************************!*\
  !*** ./pages/tu-dien.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_tuDien_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/tuDien/page */ "./components/tuDien/page.js");
/* harmony import */ var _components_tuDien_DictComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/tuDien/DictComponent */ "./components/tuDien/DictComponent.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/analystics */ "./utils/analystics.js");
/* harmony import */ var _components_NdhpLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NdhpLayout */ "./components/NdhpLayout.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  background-color: #f1f1f1;\n  margin: 5px;\n  padding: 3px 3px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 25px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  background-color: DodgerBlue;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  padding: 1 rem !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var JumbotronI = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Jumbotron"])(_templateObject());
var DivContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2());
var But = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a(_templateObject3());

var _default =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Page);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      _utils_analystics__WEBPACK_IMPORTED_MODULE_13__["trackPageView"]("index");
      return __jsx(_components_NdhpLayout__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        navmenu: false,
        container: false
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], null, __jsx(_components_tuDien_DictComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "text-muted small"
      }), __jsx("br", null), __jsx("h4", null, "H\xE3y like ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavbarBrand"], {
        href: "https://www.facebook.com/pg/Tudiendichcom-354125561828018/posts/?ref=page_internal",
        target: "blank",
        style: {
          color: '#3B5998'
        }
      }, __jsx("span", {
        className: "icon ion-logo-facebook mr-1"
      }), " Fanpage T\u1EEB \u0110i\u1EC3n D\u1ECBch"), "\u0111\u1EC3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt c\xE1c b\xE0i vi\u1EBFt hay v\u1EC1 d\u1ECBch thu\u1EADt."), __jsx("h4", null, "N\u1EBFu b\u1EA1n c\xF3 y\xEAu c\u1EA7u trang web c\u1EA7n ch\u1EC9nh s\u1EEDa g\xEC, h\xE3y chat ngay v\u1EDBi ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavbarBrand"], {
        href: "http://m.me/354125561828018",
        target: "blank",
        style: {
          color: '#0078FF'
        }
      }))));
    }
  }]);

  return _default;
}(_components_tuDien_page__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ })

})
//# sourceMappingURL=tu-dien.js.1f28e65cf7e40f383545.hot-update.js.map
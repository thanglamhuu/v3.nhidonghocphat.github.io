webpackHotUpdate("static\\development\\pages\\tu-dien.js",{

/***/ "./components/header/ActiveLink.js":
/*!*****************************************!*\
  !*** ./components/header/ActiveLink.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/analystics */ "./utils/analystics.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media */ "./components/media.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Link = _routes__WEBPACK_IMPORTED_MODULE_5___default.a.Link,
    Router = _routes__WEBPACK_IMPORTED_MODULE_5___default.a.Router;
var linkStyle = {
  marginRight: 15
};
var SpanI = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject2()));

function ActiveLink(props) {
  var icon = props.icon,
      asPath = props.asPath;
  return __jsx("li", null, __jsx(FontAwesomeIcon, {
    size: "xs",
    icon: icon
  }), __jsx(Link, {
    route: "/"
  }, __jsx(SpanI, {
    className: "nav-link ".concat(asPath === '/' && 'active'),
    style: linkStyle
  }, props.name)));
} // function ActiveLink1(props) {
//   // const {icon,asPath} = props;
//   return 
//     <li>
//         <div>
//           {/* <FontAwesomeIcon size="xs" icon={icon} /> */}
// <Link  route="/">
//   <SpanI  className={`nav-link ${props.asPath === '/' && 'active'}`} style={linkStyle}>Trang Chủ</SpanI>
// </Link>
//         </div>
//     </li>
//   ;
// }


/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=tu-dien.js.5fc9e6768575b2ef3ed5.hot-update.js.map
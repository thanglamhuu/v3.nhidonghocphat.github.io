(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{9318:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cau-trich-dan-ds",function(){return e(1330)}])},9797:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(5697)),o=function(n){return n.showNew?(0,r.jsx)("span",{className:"blinking",children:"new"}):""};o.propTypes={showNew:e.n(i)().bool.isRequired},t.Z=o},1330:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return B},default:function(){return J}});var r=e(5893),i=e(7294),o=e(6456),c=e(450),a=e(3733),u=e(7355),s=e(5697),f=e.n(s),l=e(262),p=e.n(l),d=e(2125),h=(e(9514),e(4062)),x=e(1677),v=e(9797),b=e(6077);function g(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function w(n){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function j(n,t){return(j=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function m(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var _=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function N(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=w(n);if(t){var i=w(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return y(this,e)}}function O(){var n=m(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return O=function(){return n},n}function T(){var n=m(["\n  font-size: 10pt; /* Safari */\n"]);return T=function(){return n},n}function k(){var n=m(["\n    width: 45%;\n    margin-left:8px;\n    margin-right:8px;\n  "]);return k=function(){return n},n}function R(){var n=m(["\n  cursor: pointer;\n  float: left;\n  position: relative;\n  flex-direction: column;\n  margin: 4px 4px;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1px;\n  padding-right: 1px;\n  background-color: white;\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  width: 15.3%;\n\n  ",";\n"]);return R=function(){return n},n}function S(){var n=m(["\n  border-radius:5px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  padding: 2px 2px !important;\n"]);return S=function(){return n},n}var P=p().Link,E=(p().Router,d.default.div(O())),D=d.default.span(T()),C=d.default.div(R(),x.Z.sm(k())),z=d.default.div(S());function H(n){return console.log("ldl",n),n.map((function(n){return(0,r.jsx)(C,{children:(0,r.jsxs)(z,{sm:"6",md:"2",children:[(0,r.jsx)(D,{children:n.id?(0,h.hv)(n.id):"-"}),(0,r.jsx)(P,{route:n.id?"".concat(b.io,"/").concat(n.id):b.Js,children:(0,r.jsxs)("a",{href:n.id?"".concat(b.io,"/").concat(n.id):b.Js,className:"linkNdhp",children:[(0,r.jsx)("img",{src:"".concat(n.imgSrc),alt:"".concat(n.chuHan),width:"100%"}),(0,r.jsx)("i",{className:"icon-info bottom-align-text",style:{fontSize:20,paddingRight:3}}),(0,r.jsx)("span",{className:"fontChinese",children:n.chuHan}),(0,r.jsx)(v.Z,{showNew:!1}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:n.hanViet})]})})]})},n.id)}))}var Z=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&j(n,t)}(c,n);var t,e,i,o=N(c);function c(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,n)).state={baiHocs:""},t}return t=c,(e=[{key:"render",value:function(){var n=this.props,t=n.loading,e=n.exercises;if(!e)return(0,r.jsx)("span",{children:"."});var i=e,o={id:e.length+1,chuHan:"T\u1ea5t c\u1ea3",imgSrc:"".concat(b.uD,"/ndhpi/tatca.jpg"),hanViet:""};return i.push(o),(0,r.jsx)(E,{className:t?"content-loading":"",children:H(e)})}}])&&g(t.prototype,e),i&&g(t,i),c}(i.Component);Z.propTypes={exercises:f().arrayOf(f().shape())},Z.defaultProps={};var I=(0,o.$j)((function(n){return console.log("state.trichDanReducer",n.trichDanReducer),{exercises:n.trichDanReducer.data}}),(function(n){return{getTrichDan:function(){return n((0,u.Iv)())}}}))(Z),B=!0,J=function(){return(0,o.I0)()((0,u.Iv)()),(0,r.jsx)(a.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(c.W2,{children:(0,r.jsx)(I,{className:"text-muted small"})})})}},4062:function(n,t,e){"use strict";e.d(t,{hv:function(){return r}});e(6486);var r=function(n){var t="20".concat(n),e=["CN","T2","T3","T4","T5","T6","T7"][new Date([t.slice(0,4),t.slice(4,6),t.slice(6,8)].join("-")).getDay()];return t="".concat(e," ").concat([t.slice(6,8),t.slice(4,6),t.slice(0,4)].join("/"))}}},function(n){n.O(0,[523,260,934,733,774,888,179],(function(){return t=9318,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
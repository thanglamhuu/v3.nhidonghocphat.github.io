(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8571:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trich-dan/[id]",function(){return e(3362)}])},3362:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return an},default:function(){return un}});var r=e(5893),i=(e(1664),e(9008),e(450)),c=e(3733),o=e(7294),a=e(2962),u=e(2125),s=e(5697),l=e.n(s),h=e(6964),f=e.n(h),d=e(262),p=e.n(d),g=e(894),b=e(3033),y=e(5172),v=e(1677),m=e(9669),j=e.n(m),x=e(8585),w=e(714),O=e(6077);function _(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function k(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function P(n){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function V(n,t){return!t||"object"!==C(t)&&"function"!==typeof t?_(n):t}function H(n,t){return(H=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function N(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var C=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function S(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=P(n);if(t){var i=P(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return V(this,e)}}function D(){var n=N(["\n  display:none;\n  display:block;\n  width:100%;\n  height:0;\n"]);return D=function(){return n},n}function E(){var n=N(["\n  position:fixed; \n  top:0; \n  left:0; \n  bottom:0; \n  right:0; \n  width:90%; \n  line-height: 1;\n  height:90%; \n  margin:0; \n  padding:0; \n  overflow:hidden; \n"]);return E=function(){return n},n}function R(){var n=N(["\n  width: 70%;\n  font-size: 14pt;\n"]);return R=function(){return n},n}function T(){var n=N(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 500px;\n"]);return T=function(){return n},n}var B=u.default.div(D()),L=(u.default.div(E()),u.default.span(R())),z=u.default.iframe(T()),Z=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&H(n,t)}(a,n);var t,e,c,o=S(a);function a(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,n)).state={modal:!1,bos:{}},j().get("".concat(O.uD,"/dictBo.json")).then((function(n){t.setState({bos:n.data})})),t.toggle=t.toggle.bind(_(t)),t}return t=a,(e=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal}),g.L9("ChuHan","Han",this.props.chinesse)}},{key:"render",value:function(){var n=this.props,t=n.id,e=n.chinesse,c=this.state,o=c.modal,a=c.bos[e],u="";return a&&(u="C\u1ea5u t\u1ea1o: "+a.bo),"\n"===e?(0,r.jsx)(B,{}):"#B"===e?"":(0,r.jsxs)("div",{className:"inline",children:[(0,r.jsx)("button",{className:"btnChuHan inline",onClick:this.toggle,children:e}),(0,r.jsxs)(i.u_,{isOpen:o,toggle:this.toggle,children:[(0,r.jsx)(i.xB,{toggle:this.toggle,children:(0,x.kL)(e)}),(0,r.jsx)(i.fe,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:(0,w.g)(e),width:"60px",height:"60px",srcSet:(0,w.g)(e),alt:"bar"}),(0,r.jsx)(L,{children:u},t),(0,r.jsx)(z,{src:"".concat(O.uD,"/dictHtmls/").concat((0,x.kL)(e),".htm")})]})},t)]},t)]})}}])&&k(t.prototype,e),c&&k(t,c),a}(o.Component);function K(){var n,t,e=(n=["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return K=function(){return e},e}Z.propTypes={chinesse:l().string},Z.defaultProps={chinesse:""};var X=u.default.div(K());function M(n){var t=(0,x.$V)(n),e=[],i=0;for(i=0;i<t.length;i++)e.push({id:i,chinesse:t[i]});return e.map((function(n){return(0,r.jsx)(Z,{id:n.id,chinesse:n.chinesse},n.id)}))}var G=function(n){var t=n.chuHan;return(0,r.jsx)(X,{children:M(t)})};G.propTypes={chuHan:l().string},G.defaultProps={chuHan:""};var J=e(3850),U=e(8129);function W(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function q(n){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function A(n,t){return!t||"object"!==Q(t)&&"function"!==typeof t?W(n):t}function F(n,t){return(F=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function I(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var Q=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function Y(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=q(n);if(t){var i=q(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return A(this,e)}}function nn(){var n=I(["width: 100%;"]);return nn=function(){return n},n}function tn(){var n=I(["\n  width: 80%;\n  ",";\n"]);return tn=function(){return n},n}function en(){var n=I(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return en=function(){return n},n}function rn(){var n=I(["\n  cursor: pointer;\n  padding: 0.15rem 0.2rem;\n  font-size: 80%;\n  font-weight: 400;\n  line-height: 1;\n  border-radius: 0.2rem;\n  color: #8D8E90;\n  text-align: center;\n  background-color: #fff;\n  border-color: #8D8E90;\n"]);return rn=function(){return n},n}p().Link,p().Router;var cn=u.default.div(tn(),v.Z.md(nn())),on=(u.default.audio(en()),u.default.button(rn()),function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&F(n,t)}(u,n);var t,e,c,o=Y(u);function u(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,n)).state={},t.playCallback=t.playCallback.bind(W(t)),t}return t=u,(e=[{key:"playCallback",value:function(n){var t=this.props,e=(t.error,t.loading,t.trichDan),r="http://nhidonghocphat.com/luyenDichsMp3/".concat(e.chuHan,".mp3");this.setState({url:r})}},{key:"render",value:function(){try{var n=this.props,t=n.error,e=n.loading,c=n.trichDan;if(t)return(0,r.jsx)(y.Z,{content:t});var o="http://nhidonghocphat.com/luyenDichsMp3/".concat(c.chuHan,".mp3");if(e||!c)return(0,r.jsx)(b.Z,{});g.L9("LuyenDich","Detail",c.chuHan);var u="http://nhidonghocphat.com/ndhp-social/luyen-dich/".concat(c.id,".html"),s="".concat(c.chuHan," - ").concat(c.hanViet," - Ngh\u0129a Vi\u1ec7t:").concat(c.nghiaViet," http://nhidonghocphat.com"),l="".concat(c.chuHan," - ").concat(c.hanViet," - ").concat(c.nghiaViet);return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.PB,{title:"".concat(c.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(c.hanViet," \xc2m B\u1eafc Kinh: ").concat(c.bacKinh),canonical:"".concat(O.vE,"/").concat(O.io,"/").concat(c.id),openGraph:{url:"".concat(O.vE,"/").concat(O.io,"/").concat(c.id),title:"".concat(c.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(c.hanViet," \xc2m B\u1eafc Kinh: ").concat(c.bacKinh),images:[{url:c.imgSrc}]}}),(0,r.jsxs)("h1",{className:"h1Title",children:["Luy\u1ec7n D\u1ecbch ",c.chuHan]}),(0,r.jsx)("div",{sm:"12",md:"12",className:"d-flex justify-content-center",children:(0,r.jsxs)(cn,{className:"row",children:[(0,r.jsx)(i.JX,{sm:"12",md:"6",children:(0,r.jsx)("img",{src:"".concat(c.imgSrc),alt:"".concat(c.imgOrg),width:"100%",style:{borderRadius:5}})}),(0,r.jsxs)(i.JX,{className:"text-left",sm:"12",md:"6",children:[(0,r.jsx)(U.Z,{chinesse:c.chuHan,hanViet:c.hanViet,bacKinh:c.bacKinh,playCallback:this.playCallback,curUrl:o,baiHocid:""}),(0,r.jsxs)("span",{style:{paddingLeft:10},children:["Ngh\u0129a Vi\u1ec7t: ",(0,r.jsx)("b",{children:c.nghiaViet})]}),(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(J.Z,{shareUrl:u,title:s,shortTitle:l,content:"".concat(c.chuHan," - H\xe1n Vi\u1ec7t: ").concat(c.hanViet," - Ngh\u0129a Vi\u1ec7t: ").concat(c.nghiaViet)}),(0,r.jsxs)(f(),{"data-clipboard-text":"".concat(c.chuHan," \nH\xe1n Vi\u1ec7t: ").concat(c.hanViet," \nNgh\u0129a Vi\u1ec7t: ").concat(c.nghiaViet," \n\u1ea2nh: ").concat(c.imgSrc," \nChi ti\u1ebft t\u1ea1i http://nhidonghocphat.com/luyenDich/").concat(c.id),style:{marginLeft:10},children:[(0,r.jsx)("i",{className:"icon-docs"})," Copy n\u1ed9i dung \u0111\u1ec3 share"]})]})}catch(h){return console.log("error",h),(0,r.jsx)(y.Z,{title:"M\u1edf T\u1eadp D\u1ecbch",content:h})}}}])&&$(t.prototype,e),c&&$(t,c),u}(o.Component));on.propTypes={trichDan:l().shape(),error:l().string,loading:l().bool},on.defaultProps={error:null,loading:!1};var an=!0;function un(n){var t=n.trichDan,e=n.id;return(0,r.jsx)(c.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(i.W2,{children:(0,r.jsx)(on,{id:e,trichDan:t,role:"",loading:!1})})})}}},function(n){n.O(0,[523,260,934,962,138,733,989,774,888,179],(function(){return t=8571,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
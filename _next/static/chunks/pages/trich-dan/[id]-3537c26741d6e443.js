(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8571:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trich-dan/[id]",function(){return e(3362)}])},3362:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return ct},default:function(){return at}});var r=e(5893),o=(e(1664),e(9008),e(450)),i=e(9690),c=e(7294),a=e(2962),u=e(2125),l=e(5697),s=e.n(l),f=e(6964),h=e.n(f),p=e(262),d=e.n(p),y=e(894),b=e(3033),w=e(5172),v=e(1677),g=e(9669),m=e.n(g),j=e(8585),O=e(714),x=e(6077);function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,n){return!n||"object"!==N(n)&&"function"!==typeof n?k(t):n}function C(t,n){return(C=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Z(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var N=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function E(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=P(t);if(n){var o=P(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return S(this,e)}}function H(){var t=Z(["\n  display:none;\n  display:block;\n  width:100%;\n  height:0;\n"]);return H=function(){return t},t}function V(){var t=Z(["\n  position:fixed; \n  top:0; \n  left:0; \n  bottom:0; \n  right:0; \n  width:90%; \n  line-height: 1;\n  height:90%; \n  margin:0; \n  padding:0; \n  overflow:hidden; \n"]);return V=function(){return t},t}function D(){var t=Z(["\n  width: 70%;\n  font-size: 14pt;\n"]);return D=function(){return t},t}function R(){var t=Z(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 500px;\n"]);return R=function(){return t},t}var z=u.ZP.div(H()),B=(u.ZP.div(V()),u.ZP.span(D())),L=u.ZP.iframe(R()),T=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&C(t,n)}(a,t);var n,e,i,c=E(a);function a(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(n=c.call(this,t)).state={modal:!1,bos:{}},m().get("".concat(x.uD,"/dictBo.json")).then((function(t){n.setState({bos:t.data})})),n.toggle=n.toggle.bind(k(n)),n}return n=a,(e=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal}),y.L9("ChuHan","Han",this.props.chinesse)}},{key:"render",value:function(){var t=this.props,n=t.id,e=t.chinesse,i=this.state,c=i.modal,a=i.bos[e],u="";return a&&(u="C\u1ea5u t\u1ea1o: "+a.bo),"\n"===e?(0,r.jsx)(z,{}):"#B"===e?"":(0,r.jsxs)("div",{className:"inline",children:[(0,r.jsx)("button",{className:"btnChuHan inline",onClick:this.toggle,children:e}),(0,r.jsxs)(o.u_,{isOpen:c,toggle:this.toggle,children:[(0,r.jsx)(o.xB,{toggle:this.toggle,children:(0,j.kL)(e)}),(0,r.jsx)(o.fe,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:(0,O.g)(e),width:"60px",height:"60px",srcSet:(0,O.g)(e),alt:"bar"}),(0,r.jsx)(B,{children:u},n),(0,r.jsx)(L,{src:"".concat(x.uD,"/dictHtmls/").concat((0,j.kL)(e),".htm")})]})},n)]},n)]})}}])&&_(n.prototype,e),i&&_(n,i),a}(c.Component);function W(){var t,n,e=(t=["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));return W=function(){return e},e}T.propTypes={chinesse:s().string},T.defaultProps={chinesse:""};var A=u.ZP.div(W());function I(t){var n=(0,j.$V)(t),e=[],o=0;for(o=0;o<n.length;o++)e.push({id:o,chinesse:n[o]});return e.map((function(t){return(0,r.jsx)(T,{id:t.id,chinesse:t.chinesse},t.id)}))}var K=function(t){var n=t.chuHan;return(0,r.jsx)(A,{children:I(n)})};K.propTypes={chuHan:s().string},K.defaultProps={chuHan:""};var M=e(3850),X=e(8129);function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,n){return!n||"object"!==$(n)&&"function"!==typeof n?q(t):n}function J(t,n){return(J=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Y(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var $=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function Q(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=F(t);if(n){var o=F(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return G(this,e)}}function tt(){var t=Y(["width: 100%;"]);return tt=function(){return t},t}function nt(){var t=Y(["\n  width: 80%;\n  ",";\n"]);return nt=function(){return t},t}function et(){var t=Y(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return et=function(){return t},t}function rt(){var t=Y(["\n  cursor: pointer;\n  padding: 0.15rem 0.2rem;\n  font-size: 80%;\n  font-weight: 400;\n  line-height: 1;\n  border-radius: 0.2rem;\n  color: #8D8E90;\n  text-align: center;\n  background-color: #fff;\n  border-color: #8D8E90;\n"]);return rt=function(){return t},t}d().Link,d().Router;var ot=u.ZP.div(nt(),v.Z.md(tt())),it=(u.ZP.audio(et()),u.ZP.button(rt()),function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&J(t,n)}(u,t);var n,e,i,c=Q(u);function u(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(n=c.call(this,t)).state={},n.playCallback=n.playCallback.bind(q(n)),n}return n=u,(e=[{key:"playCallback",value:function(t){var n=this.props,e=(n.error,n.loading,n.trichDan),r="http://nhidonghocphat.com/luyenDichsMp3/".concat(e.chuHan,".mp3");this.setState({url:r})}},{key:"render",value:function(){try{var t=this.props,n=t.error,e=t.loading,i=t.trichDan;if(n)return(0,r.jsx)(w.Z,{content:n});var c="http://nhidonghocphat.com/luyenDichsMp3/".concat(i.chuHan,".mp3");if(e||!i)return(0,r.jsx)(b.Z,{});y.L9("LuyenDich","Detail",i.chuHan);var u="http://nhidonghocphat.com/ndhp-social/luyen-dich/".concat(i.id,".html"),l="".concat(i.chuHan," - ").concat(i.hanViet," - Ngh\u0129a Vi\u1ec7t:").concat(i.nghiaViet," http://nhidonghocphat.com"),s="".concat(i.chuHan," - ").concat(i.hanViet," - ").concat(i.nghiaViet);return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.PB,{title:"".concat(i.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(i.hanViet," \xc2m B\u1eafc Kinh: ").concat(i.bacKinh),canonical:"".concat(x.vE,"/").concat(x.io,"/").concat(i.id),openGraph:{url:"".concat(x.vE,"/").concat(x.io,"/").concat(i.id),title:"".concat(i.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(i.hanViet," \xc2m B\u1eafc Kinh: ").concat(i.bacKinh),images:[{url:i.imgSrc}]}}),(0,r.jsxs)("h1",{className:"h1Title",children:["Luy\u1ec7n D\u1ecbch ",i.chuHan]}),(0,r.jsx)("div",{sm:"12",md:"12",className:"d-flex justify-content-center",children:(0,r.jsxs)(ot,{className:"row",children:[(0,r.jsx)(o.JX,{sm:"12",md:"6",children:(0,r.jsx)("img",{src:"".concat(i.imgSrc),alt:"".concat(i.imgOrg),width:"100%",style:{borderRadius:5}})}),(0,r.jsxs)(o.JX,{className:"text-left",sm:"12",md:"6",children:[(0,r.jsx)(X.Z,{chinesse:i.chuHan,hanViet:i.hanViet,bacKinh:i.bacKinh,playCallback:this.playCallback,curUrl:c,baiHocid:""}),(0,r.jsxs)("span",{style:{paddingLeft:10},children:["Ngh\u0129a Vi\u1ec7t: ",(0,r.jsx)("b",{children:i.nghiaViet})]}),(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(M.Z,{shareUrl:u,title:l,shortTitle:s,content:"".concat(i.chuHan," - H\xe1n Vi\u1ec7t: ").concat(i.hanViet," - Ngh\u0129a Vi\u1ec7t: ").concat(i.nghiaViet)}),(0,r.jsxs)(h(),{"data-clipboard-text":"".concat(i.chuHan," \nH\xe1n Vi\u1ec7t: ").concat(i.hanViet," \nNgh\u0129a Vi\u1ec7t: ").concat(i.nghiaViet," \n\u1ea2nh: ").concat(i.imgSrc," \nChi ti\u1ebft t\u1ea1i http://nhidonghocphat.com/luyenDich/").concat(i.id),style:{marginLeft:10},children:[(0,r.jsx)("i",{className:"icon-docs"})," Copy n\u1ed9i dung \u0111\u1ec3 share"]})]})}catch(f){return console.log("error",f),(0,r.jsx)(w.Z,{title:"M\u1edf T\u1eadp D\u1ecbch",content:f})}}}])&&U(n.prototype,e),i&&U(n,i),u}(c.Component));it.propTypes={trichDan:s().shape(),error:s().string,loading:s().bool},it.defaultProps={error:null,loading:!1};var ct=!0;function at(t){var n=t.trichDan,e=t.id;return(0,r.jsx)(i.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(o.W2,{children:(0,r.jsx)(it,{id:e,trichDan:n,role:"",loading:!1})})})}},1020:function(t,n,e){"use strict";var r=(0,e(7267).Z)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});n.Z=r},6573:function(t,n,e){"use strict";var r=e(5456),o=e(6459);var i=(0,e(9075).Z)("facebook",(function(t,n){var e=n.quote,i=n.hashtag;return(0,r.Z)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:t,quote:e,hashtag:i})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});n.Z=i},7385:function(t,n,e){"use strict";var r=(0,e(7267).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});n.Z=r},6616:function(t,n,e){"use strict";var r=e(5456),o=e(6459);var i=(0,e(9075).Z)("twitter",(function(t,n){var e=n.title,i=n.via,c=n.hashtags,a=void 0===c?[]:c,u=n.related,l=void 0===u?[]:u;return(0,r.Z)(t,"twitter.url"),(0,r.Z)(Array.isArray(a),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:t,text:e,via:i,hashtags:a.length>0?a.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});n.Z=i},2730:function(t,n,e){"use strict";var r=(0,e(7267).Z)({color:"#7C529E",networkName:"viber",path:"m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z"});n.Z=r},4746:function(t,n,e){"use strict";var r=e(5456),o=e(6459);var i=(0,e(9075).Z)("viber",(function(t,n){var e=n.title,i=n.separator;return(0,r.Z)(t,"viber.url"),"viber://forward"+(0,o.Z)({text:e?e+i+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:660,windowHeight:460});n.Z=i},7267:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(7294),o=function(){return o=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},o.apply(this,arguments)},i=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};function c(t){var n=function(n){var e=n.bgStyle,c=n.borderRadius,a=n.iconFillColor,u=n.round,l=n.size,s=i(n,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",o({viewBox:"0 0 64 64",width:l,height:l},s),u?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:e}):r.createElement("rect",{width:"64",height:"64",rx:c,ry:c,fill:t.color,style:e}),r.createElement("path",{d:t.path,fill:a}))};return n.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},n}},9075:function(t,n,e){"use strict";e.d(n,{Z:function(){return v}});var r=e(7294),o=e(4184),i=e.n(o),c=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),a=function(){return a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},a.apply(this,arguments)},u=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(n){i(n)}}function a(t){try{u(r.throw(t))}catch(n){i(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,a)}u((r=r.apply(t,n||[])).next())}))},l=function(t,n){var e,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(a){i=[6,a],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e},f=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},h=function(t,n){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-n/2}},p=function(t,n){return{top:(window.screen.height-n)/2,left:(window.screen.width-t)/2}};function d(t,n,e){var r=n.height,o=n.width,i=s(n,["height","width"]),c=a({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),u=window.open(t,"",Object.keys(c).map((function(t){return t+"="+c[t]})).join(", "));if(e)var l=window.setInterval((function(){try{(null===u||u.closed)&&(window.clearInterval(l),e(u))}catch(t){console.error(t)}}),1e3);return u}var y=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.openShareDialog=function(t){var e=n.props,r=e.onShareWindowClose,o=e.windowHeight,i=void 0===o?400:o,c=e.windowPosition,u=void 0===c?"windowCenter":c,l=e.windowWidth,s=void 0===l?550:l;d(t,a({height:i,width:s},"windowCenter"===u?h(s,i):p(s,i)),r)},n.handleClick=function(t){return u(n,void 0,void 0,(function(){var n,e,r,o,i,c,a,u,s,h;return l(this,(function(l){switch(l.label){case 0:return n=this.props,e=n.beforeOnClick,r=n.disabled,o=n.networkLink,i=n.onClick,c=n.url,a=n.openShareDialogOnClick,u=n.opts,s=o(c,u),r?[2]:(t.preventDefault(),e?(h=e(),f(h)?[4,h]:[3,2]):[3,2]);case 1:l.sent(),l.label=2;case 2:return a&&this.openShareDialog(s),i&&i(t,s),[2]}}))}))},n}return c(n,t),n.prototype.render=function(){var t=this.props,n=(t.beforeOnClick,t.children),e=t.className,o=t.disabled,c=t.disabledStyle,u=t.forwardedRef,l=(t.networkLink,t.networkName),f=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),h=t.style,p=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,s(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},e),y=a(a(f?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},h),o&&c);return r.createElement("button",a({},p,{"aria-label":p["aria-label"]||l,className:d,onClick:this.handleClick,ref:u,style:y}),n)},n.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},n}(r.Component),b=y,w=function(){return w=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},w.apply(this,arguments)};var v=function(t,n,e,o){function i(i,c){var a=e(i),u=w({},i);return Object.keys(a).forEach((function(t){delete u[t]})),r.createElement(b,w({},o,u,{forwardedRef:c,networkName:t,networkLink:n,opts:e(i)}))}return i.displayName="ShareButton-"+t,(0,r.forwardRef)(i)}},5456:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),o=function(t){function n(n){var e=t.call(this,n)||this;return e.name="AssertionError",e}return r(n,t),n}(Error);function i(t,n){if(!t)throw new o(n)}},6459:function(t,n,e){"use strict";function r(t){var n=Object.entries(t).filter((function(t){var n=t[1];return void 0!==n&&null!==n})).map((function(t){var n=t[0],e=t[1];return encodeURIComponent(n)+"="+encodeURIComponent(String(e))}));return n.length>0?"?"+n.join("&"):""}e.d(n,{Z:function(){return r}})}},function(t){t.O(0,[523,260,934,962,964,509,640,774,888,179],(function(){return n=8571,t(t.s=n);var n}));var n=t.O();_N_E=n}]);
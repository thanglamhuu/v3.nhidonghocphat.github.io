"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{4680:function(n,e,t){t.d(e,{Z:function(){return Un}});var r=t(4051),i=t.n(r),o=t(5893),c=t(7294),a=t(6456),s=t(2125),u=(t(6486),t(2962)),l=t(450),h=t(1677);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=d(["\n  width:100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]);return f=function(){return n},n}function p(){var n=d(["\n  width:100%;\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  border-radius: 5px;\n"]);return p=function(){return n},n}var x=s.ZP.div(f()),g=s.ZP.a(p()),m=function(n){var e=n.imgSrc,t=n.url;return(0,o.jsx)(x,{children:(0,o.jsx)(g,{href:t,children:(0,o.jsx)("img",{src:e,style:{width:"100%"},alt:"*"})})})},v=t(4872),b=t(5697),j=t.n(b),w=t(262),y=t.n(w),N=t(8341),P=t.n(N),k=t(1662),Z=t(9797);function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function H(){var n=O(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);return H=function(){return n},n}function T(){var n=O(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);return T=function(){return n},n}function C(){var n=O(["-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;margin-left: 5px;margin-right: 5px;"]);return C=function(){return n},n}function R(){var n=O(["\n        background-color:#fff !important;\n      "]);return R=function(){return n},n}function B(){var n=O(["\n  background-color: #eee !important;\n  text-align: left;\n  display: block;\n  text-decoration: none;\n  min-height: 23px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 33%;\n  padding: 1px !important;\n  ",";\n  border: 1px solid ",";\n  ",";\n"]);return B=function(){return n},n}function S(){var n=O(["\n  width: 100%;\n  min-height: 30px;\n  paddingLeft: 5;\n"]);return S=function(){return n},n}var D=y().Link,_=(y().Router,s.ZP.div(H())),z=s.ZP.ul(T()),L=s.ZP.li(B(),h.Z.sm(C()),k.Z.colors.textLink,(function(n){return(!n.soChan||0===n.soChan)&&(0,s.iv)(R())})),E=(0,s.ZP)(D)(S());var G=function(n){var e=n.baihoc,t=n.showNew,r=n.prefix,i=e;if(!i||!i.id)return"";var c=i.link||"".concat(r,"/").concat(i.id),a=i.id,s=parseInt(a.substr(1,2).replace("B",""))%2;return(0,o.jsx)(L,{soChan:s,children:(0,o.jsx)(E,{route:c,children:(0,o.jsxs)("a",{className:"linkNdhp",children:[i.title,(0,o.jsx)(Z.Z,{showNew:t})]})},a)})};G.propTypes={baihoc:j().shape().isRequired,showNew:j().bool};var K=function(n){n.loading;var e=n.baiHocs,t=n.linkAll,r=n.prefix,i=e,c=0,a={chuong:"B - Ch\u01b0\u01a1ng 1",content:"s",id:"C0B0",title:"T\u1ea5t c\u1ea3 c\xe1c b\xe0i",link:t},s="";return i&&(i.push(a),s=i.map((function(n){return(0,o.jsx)(G,{baihoc:n,showNew:1===c,prefix:r},"".concat(t+ ++c))}))),console.log(t,"baiHocs",e,s),(0,o.jsx)(_,{children:(0,o.jsx)(z,{children:s})})};K.propTypes={baiHocs:j().arrayOf(j().shape()).isRequired,loading:j().bool.isRequired},K.defaultProps={};var q=K,A=(t(9514),t(4062)),F=t(6077);function J(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function V(){var n=J(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return V=function(){return n},n}function I(){var n=J(["\n  font-size: 10pt; /* Safari */\n"]);return I=function(){return n},n}function M(){var n=J(["\n    width: 45%;\n    margin-left:8px;\n    margin-right:8px;\n  "]);return M=function(){return n},n}function $(){var n=J(["\n  cursor: pointer;\n  float: left;\n  position: relative;\n  flex-direction: column;\n  margin: 4px 4px;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1px;\n  padding-right: 1px;\n  background-color: white;\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  width: 15.3%;\n\n  ",";\n"]);return $=function(){return n},n}function X(){var n=J(["\n  border-radius:5px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  padding: 2px 2px !important;\n"]);return X=function(){return n},n}var U=s.ZP.div(V()),W=s.ZP.span(I()),Y=s.ZP.div($(),h.Z.sm(M())),Q=s.ZP.div(X());function nn(n){return console.log("ldl",n),n.map((function(n){return(0,o.jsx)(Y,{youTubeId:!0,children:(0,o.jsxs)(Q,{sm:"6",md:"2",children:[(0,o.jsx)(W,{children:n.id?(0,A.hv)(n.id):"-"}),(0,o.jsxs)("a",{href:n.id?"".concat(F.io,"/").concat(n.id):F.Js,className:"linkNdhp",children:[(0,o.jsx)("img",{src:"".concat(n.imgSrc),alt:"".concat(n.chuHan),width:"100%"}),(0,o.jsx)("i",{className:"icon-info bottom-align-text",style:{fontSize:20,paddingRight:3}}),(0,o.jsx)("span",{className:"fontChinese",children:n.chuHan}),(0,o.jsx)(Z.Z,{showNew:!1}),(0,o.jsx)("br",{})]}),(0,o.jsx)("span",{children:n.hanViet})]})},n.id)}))}var en=function(n){var e=n.loading,t=n.exercises,r=t,i={id:t.length+1,chuHan:"T\u1ea5t c\u1ea3",imgSrc:"".concat(F.uD,"/ndhpi/tatca.jpg"),hanViet:""};return r.push(i),(0,o.jsx)(U,{className:e?"content-loading":"",children:nn(t)})};en.propTypes={exercises:j().arrayOf(j().shape()).isRequired,loading:j().bool.isRequired},en.defaultProps={};var tn=en,rn=t(2814),on=t(9398);function cn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function an(n,e,t,r,i,o,c){try{var a=n[o](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function sn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function un(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function ln(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hn(n){return(hn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function dn(n,e){return!e||"object"!==xn(e)&&"function"!==typeof e?cn(n):e}function fn(n,e){return(fn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function pn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var xn=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function gn(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=hn(n);if(e){var i=hn(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return dn(this,t)}}function mn(){var n=pn(["\n  width: 100%;\n  min-height: 30px;\n"]);return mn=function(){return n},n}function vn(){var n=pn(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return vn=function(){return n},n}function bn(){var n=pn(["\n    flex-direction: column;\n  "]);return bn=function(){return n},n}function jn(){var n=pn(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  ",";\n"]);return jn=function(){return n},n}function wn(){var n=pn(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return wn=function(){return n},n}function yn(){var n=pn(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 20%;\n\n  ",";\n"]);return yn=function(){return n},n}function Nn(){var n=pn(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return Nn=function(){return n},n}function Pn(){var n=pn(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n\n  ",";\n"]);return Pn=function(){return n},n}function kn(){var n=pn(["\n  width: 100%;\n"]);return kn=function(){return n},n}function Zn(){var n=pn([" width: 100%;"]);return Zn=function(){return n},n}function On(){var n=pn(["\n  width: 100%;\n  float: left; \n  ",";\n"]);return On=function(){return n},n}function Hn(){var n=pn([" display: none;"]);return Hn=function(){return n},n}function Tn(){var n=pn([" width: 13%;"]);return Tn=function(){return n},n}function Cn(){var n=pn(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return Cn=function(){return n},n}function Rn(){var n=pn([" width: 13%;"]);return Rn=function(){return n},n}function Bn(){var n=pn([" display: none;"]);return Bn=function(){return n},n}function Sn(){var n=pn(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return Sn=function(){return n},n}function Dn(){var n=pn([" -ms-flex: 0 0 63%; flex: 0 0 63%; max-width: 63%;"]);return Dn=function(){return n},n}function _n(){var n=pn([" -ms-flex: 0 0 100%; flex: 0 0 100%; max-width: 100%;"]);return _n=function(){return n},n}function zn(){var n=pn(["\n  padding: 2px 2px;\n    -ms-flex: 0 0 80%;\n    max-width: 80%;\n    diplay: inline;\n    ",";\n    ",";\n"]);return zn=function(){return n},n}function Ln(){var n=pn(["\n  padding: 3px 3px !important;\n  background-color: white;  \n  height: 100%;\n  text-align: left;\n"]);return Ln=function(){return n},n}var En=y().Link,Gn=(y().Router,on.nc0),Kn=(0,s.ZP)(En)(mn()),qn=(s.ZP.div(vn()),s.ZP.div(jn(),h.Z.sm(bn())),s.ZP.div(yn(),h.Z.sm(wn())),s.ZP.div(Pn(),h.Z.sm(Nn())),(0,s.ZP)(l.X2)(kn())),An=s.ZP.div(On(),h.Z.sm(Zn())),Fn=s.ZP.img(Cn(),h.Z.sm(Hn()),h.Z.md(Tn())),Jn=s.ZP.img(Sn(),h.Z.md(Rn()),h.Z.sm(Bn())),Vn=s.ZP.div(zn(),h.Z.md(Dn()),h.Z.sm(_n())),In=s.ZP.div(Ln()),Mn={width:20},$n=function(n){if(!n||!n.baiHocs||0==n.length)return(0,o.jsx)("span",{});var e=n.baiHocs[0];return e&&e.id?(0,o.jsx)(Vn,{children:(0,o.jsxs)(In,{children:[(0,o.jsx)(Kn,{route:"".concat(F.aH,"/").concat(e.id),style:{paddingLeft:5,textAlign:"left"},children:(0,o.jsxs)("a",{className:"linkNdhp",children:[e.title,(0,o.jsx)(rn.G,{size:"1x",icon:Gn,style:Mn})]})}),(0,o.jsx)("div",{className:"html-wrapper-home_bhlist",children:P()(e.content)})]})},"".concat(e.id)):""},Xn=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&fn(n,e)}(a,n);var e,t,r,c=gn(a);function a(){var n;return sn(this,a),ln(cn(n=c.apply(this,arguments)),"state",{list:null}),ln(cn(n),"onClickBook",(function(e){n.setState({activedBook:e}),n.props.getEnglishBook(e)})),ln(cn(n),"onClickLesson",(function(e){console.log("onClickLesson",e),n.setState({activedLesson:e})})),n}return e=a,t=[{key:"componentDidMount",value:function(){this.props.getHome()}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){console.log("homeReducer will",n.homeReducer.type),this.props.homeReducer!==n.homeReducer&&this.setState(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){ln(n,e,t[e])}))}return n}({},n.homeReducer.data)),this.props.homeReducer.type!==n.homeReducer.type&&this.props.getHome()}},{key:"render",value:function(){var n=this.state,e=n.baiHocs,t=n.gtTkpsgnl,r=n.luyenDichs;console.log("baiHocs, gtTkpsgnl",t);var i=!1;return(0,o.jsxs)("div",{className:"homeBound",children:[(0,o.jsx)(u.PB,{title:"H\u1ecdc d\u1ecbch ch\u1eef H\xe1n - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt",description:"H\u1ed7 tr\u1ee3 h\u1ecdc Ch\u1eef H\xe1n t\u1eeb \u0111\u1ea7u, ho\xe0n to\xe0n mi\u1ec5n ph\xed t\u1eeb 214 B\u1ed9, Ph\xe1t \xe2m B\u1eafc Kinh, Nhi \u0110\u1ed3ng H\u1ecdc Ph\u1eadt, T\u1ecbnh Kh\xf4ng Ph\xe1p S\u01b0 Gia Ng\xf4n L\u1ee5c",canonical:"".concat(F.vE),openGraph:{url:"".concat(F.vE),title:"H\u1ecdc d\u1ecbch ch\u1eef H\xe1n - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt",description:"H\u1ed7 tr\u1ee3 h\u1ecdc Ch\u1eef H\xe1n t\u1eeb \u0111\u1ea7u, ho\xe0n to\xe0n mi\u1ec5n ph\xed t\u1eeb 214 B\u1ed9, Ph\xe1t \xe2m B\u1eafc Kinh, Nhi \u0110\u1ed3ng H\u1ecdc Ph\u1eadt, T\u1ecbnh Kh\xf4ng Ph\xe1p S\u01b0 Gia Ng\xf4n L\u1ee5c",images:[{url:"".concat(F.uD,"/images-web/demo.jpg")}]}}),(0,o.jsxs)("div",{className:"homeContent",children:[(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:F.Z$,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"Gi\xe1o tr\xecnh h\u1ecdc d\u1ecbch Nhi \u0110\u1ed3ng H\u1ecdc Ph\u1eadt  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),(0,o.jsxs)(qn,{children:[(0,o.jsx)(Fn,{src:"./static/images/ndhp/ChiLacVoNhuDocThu.jpg",style:{width:"8%",float:"left"}}),(0,o.jsx)($n,{baiHocs:e,style:{width:"50%"}}),(0,o.jsx)(Jn,{src:"./static/images/ndhp/ChiYeuMacNhuGiaoTu.jpg",style:{width:"8%",float:"right"}})]}),e&&(0,o.jsx)(q,{loading:i,baiHocs:e,linkAll:F.Z$,prefix:F.aH})]})}),(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:F.Zg,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"Gi\xe1o tr\xecnh T\u1ecbnh Kh\xf4ng Ph\xe1p S\u01b0 Gia Ng\xf4n L\u1ee5c  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),e&&(0,o.jsx)(q,{loading:i,baiHocs:t,linkAll:F.Zg,prefix:F.f9})]})}),(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:F.Js,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"C\xe1c c\xe2u \u0111\u1ed1i, tr\xedch d\u1eabn"})]})}),r&&(0,o.jsx)(tn,{loading:i,exercises:r})]})})]}),(0,o.jsxs)("div",{className:"homeSidebar",children:[(0,o.jsx)("div",{className:"pt-4 pt-sm-0",children:(0,o.jsx)("a",{className:"linkNdhp",href:"https://www.tinhkhongphapngu.net/",children:(0,o.jsx)("img",{src:"".concat(F.uD,"/tinhkhongphapngubn.jpg"),style:{width:"100%"},alt:"*"})})}),(0,o.jsx)(m,{imgSrc:"".concat(F.uD,"/images-web/lop-hoc-dich-chu-han-truc-tuyent.jpg"),url:"".concat(F.uD,"/gttd/CH21-010-03.pdf")}),(0,o.jsx)(m,{imgSrc:"".concat(F.uD,"/images-web/youtube-nhi-dong-hoc-phat.jpg"),url:"https://www.youtube.com/playlist?list=PLyzPM-oZ65rFvvO5yJVLdRnBj1FpBfpHf"}),(0,o.jsx)(m,{imgSrc:"".concat(F.uD,"/images-web/download-nhi-dong-hoc-phat.jpg"),url:"https://drive.google.com/uc?id=17f3Zyn5RBsJpy5Kx6kFFepBp60crlO0C&export=download"}),(0,o.jsx)("div",{className:"pt-4 pt-sm-0 boxDiv",children:(0,o.jsxs)(l.JX,{className:"pt-4 pt-sm-0",children:[(0,o.jsx)("a",{className:"linkNdhp",href:"/gioiThieu",children:"* L\u1eddi gi\u1edbi thi\u1ec7u"}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{className:"linkNdhp",href:"phuongPhapHocTap",children:"* Ph\u01b0\u01a1ng ph\xe1p h\u1ecdc t\u1eadp"}),(0,o.jsx)("br",{})]})}),(0,o.jsxs)("div",{className:"pt-4 pt-sm-0 boxDiv",children:[(0,o.jsxs)("a",{className:"linkNdhp",href:"/giaoTrinhDich/C0B1",children:["C\xe1ch h\u1ecdc ch\u1eef H\xe1n",(0,o.jsx)("br",{}),"214 B\u1ed9 ph\u1ea7n 1"]}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{className:"linkNdhp",href:"/giaoTrinhDich/C0B2",children:"214 B\u1ed9 ph\u1ea7n 2"}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{className:"linkNdhp",href:"/giaoTrinhDich/C0B3",children:"214 B\u1ed9 ph\u1ea7n 3"}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{className:"linkNdhp",href:"/giaoTrinhDich/C0B4",children:"Ph\xe1t \xe2m B\u1eafc Kinh"}),(0,o.jsx)("br",{})]})]})]})}}],r=[{key:"getInitialProps",value:function(n){var e;return n.ctx.store,(e=i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(n){an(o,r,i,c,a,"next",n)}function a(n){an(o,r,i,c,a,"throw",n)}c(void 0)}))})()}}],t&&un(e.prototype,t),r&&un(e,r),a}(c.Component),Un=(0,a.$j)((function(n){return{homeReducer:n.homeReducer}}),(function(n){return{getHome:function(){return n((0,v.eb)())}}}))(Xn)},9797:function(n,e,t){var r=t(5893),i=(t(7294),t(5697)),o=function(n){return n.showNew?(0,r.jsx)("span",{className:"blinking",children:"new"}):""};o.propTypes={showNew:t.n(i)().bool.isRequired},e.Z=o},4062:function(n,e,t){t.d(e,{hv:function(){return r}});t(6486);var r=function(n){var e="20".concat(n),t=["CN","T2","T3","T4","T5","T6","T7"][new Date([e.slice(0,4),e.slice(4,6),e.slice(6,8)].join("-")).getDay()];return e="".concat(t," ").concat([e.slice(6,8),e.slice(4,6),e.slice(0,4)].join("/"))}}}]);
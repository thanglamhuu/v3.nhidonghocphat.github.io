"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{2539:function(n,e,t){t.d(e,{Z:function(){return Jn}});var r=t(4051),i=t.n(r),o=t(5893),c=t(7294),a=t(6456),u=t(2125),s=(t(6486),t(3966)),l=t(4872),f=t(5697),d=t.n(f),p=t(262),h=t.n(p),x=t(8341),m=t.n(x),g=t(1662),v=t(1677),b=t(9797);function w(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function j(){var n=w(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);return j=function(){return n},n}function y(){var n=w(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);return y=function(){return n},n}function k(){var n=w(["-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;margin-left: 5px;margin-right: 5px;"]);return k=function(){return n},n}function N(){var n=w(["\n        background-color:#fff !important;\n      "]);return N=function(){return n},n}function P(){var n=w(["\n  background-color: #eee !important;\n  text-align: left;\n  display: block;\n  text-decoration: none;\n  min-height: 23px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 33%;\n  padding: 1px !important;\n  ",";\n  border: 1px solid ",";\n  ",";\n"]);return P=function(){return n},n}function O(){var n=w(["\n  width: 100%;\n  min-height: 30px;\n  paddingLeft: 5;\n"]);return O=function(){return n},n}var T=h().Link,R=(h().Router,u.default.div(j())),Z=u.default.ul(y()),H=u.default.li(P(),v.Z.sm(k()),g.Z.colors.textLink,(function(n){return(!n.soChan||0===n.soChan)&&(0,u.css)(N())})),_=(0,u.default)(T)(O());var C=function(n){var e=n.baihoc,t=n.showNew,r=n.prefix,i=e;if(!i||!i.id)return"";var c=i.link||"/".concat(r,"/").concat(i.id),a=i.id,u=parseInt(a.substr(1,2).replace("B",""))%2;return(0,o.jsx)(H,{soChan:u,children:(0,o.jsx)(_,{route:c,children:(0,o.jsxs)("a",{className:"linkNdhp",children:[i.title,(0,o.jsx)(b.Z,{showNew:t})]})},a)})};C.propTypes={baihoc:d().shape().isRequired,showNew:d().bool};var S=function(n){n.loading;var e=n.baiHocs,t=n.linkAll,r=n.prefix,i=e,c=0,a={chuong:"B - Ch\u01b0\u01a1ng 1",content:"s",id:"C0B0",title:"T\u1ea5t c\u1ea3 c\xe1c b\xe0i",link:t},u="";return i&&(i.push(a),u=i.map((function(n){return(0,o.jsx)(C,{baihoc:n,showNew:1===c,prefix:r},"".concat(t+ ++c))}))),console.log(t,"baiHocs",e,u),(0,o.jsx)(R,{children:(0,o.jsx)(Z,{children:u})})};S.propTypes={baiHocs:d().arrayOf(d().shape()).isRequired,loading:d().bool.isRequired},S.defaultProps={};var z=S,L=(t(9514),t(4062)),B=t(6077);function D(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function E(){var n=D(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return E=function(){return n},n}function A(){var n=D(["\n  font-size: 10pt; /* Safari */\n"]);return A=function(){return n},n}function q(){var n=D(["\n    width: 45%;\n    margin-left:8px;\n    margin-right:8px;\n  "]);return q=function(){return n},n}function G(){var n=D(["\n  cursor: pointer;\n  float: left;\n  position: relative;\n  flex-direction: column;\n  margin: 4px 4px;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1px;\n  padding-right: 1px;\n  background-color: white;\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  width: 15.3%;\n\n  ",";\n"]);return G=function(){return n},n}function F(){var n=D(["\n  border-radius:5px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  padding: 2px 2px !important;\n"]);return F=function(){return n},n}var M=u.default.div(E()),I=u.default.span(A()),V=u.default.div(G(),v.Z.sm(q())),$=u.default.div(F());function J(n){return console.log("ldl",n),n.map((function(n){return(0,o.jsx)(V,{youTubeId:!0,children:(0,o.jsxs)($,{sm:"6",md:"2",children:[(0,o.jsx)(I,{children:n.id?(0,L.hv)(n.id):"-"}),(0,o.jsxs)("a",{href:n.id?"".concat(B.io,"/").concat(n.id):B.Js,className:"linkNdhp",children:[(0,o.jsx)("img",{src:"".concat(n.imgSrc),alt:"".concat(n.chuHan),width:"100%"}),(0,o.jsx)("i",{className:"icon-info bottom-align-text",style:{fontSize:20,paddingRight:3}}),(0,o.jsx)("span",{className:"fontChinese",children:n.chuHan}),(0,o.jsx)(b.Z,{showNew:!1}),(0,o.jsx)("br",{})]}),(0,o.jsx)("span",{children:n.hanViet})]})},n.id)}))}var W=function(n){var e=n.loading,t=n.exercises,r=t,i={id:t.length+1,chuHan:"T\u1ea5t c\u1ea3",imgSrc:"".concat(B.uD,"/ndhpi/tatca.jpg"),hanViet:""};return r.push(i),(0,o.jsx)(M,{className:e?"content-loading":"",children:J(t)})};W.propTypes={exercises:d().arrayOf(d().shape()).isRequired,loading:d().bool.isRequired},W.defaultProps={};var K=W,U=t(2814),X=t(9398),Y=t(450);function Q(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function nn(n,e,t,r,i,o,c){try{var a=n[o](c),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,i)}function en(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function tn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function rn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function on(n){return(on=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function cn(n,e){return!e||"object"!==sn(e)&&"function"!==typeof e?Q(n):e}function an(n,e){return(an=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function un(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var sn=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function ln(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=on(n);if(e){var i=on(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return cn(this,t)}}function fn(){var n=un(["\n    text-align: center;\n    max-width: 1170px;\n  "]);return fn=function(){return n},n}function dn(){var n=un(["\n  background-color: #fafafa;\n  text-align: right;\n  width: 100%;\n  max-width: 1170px;\n  ",";\n\n"]);return dn=function(){return n},n}function pn(){var n=un(["\n  width: 100%;\n  min-height: 30px;\n"]);return pn=function(){return n},n}function hn(){var n=un(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return hn=function(){return n},n}function xn(){var n=un(["\n    flex-direction: column;\n  "]);return xn=function(){return n},n}function mn(){var n=un(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  ",";\n"]);return mn=function(){return n},n}function gn(){var n=un(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return gn=function(){return n},n}function vn(){var n=un(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 20%;\n\n  ",";\n"]);return vn=function(){return n},n}function bn(){var n=un(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return bn=function(){return n},n}function wn(){var n=un(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n\n  ",";\n"]);return wn=function(){return n},n}function jn(){var n=un(["\n  width: 100%;\n"]);return jn=function(){return n},n}function yn(){var n=un([" width: 100%;"]);return yn=function(){return n},n}function kn(){var n=un(["\n  width: 100%;\n  float: left; \n  ",";\n"]);return kn=function(){return n},n}function Nn(){var n=un([" display: none;"]);return Nn=function(){return n},n}function Pn(){var n=un([" width: 13%;"]);return Pn=function(){return n},n}function On(){var n=un(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return On=function(){return n},n}function Tn(){var n=un([" width: 13%;"]);return Tn=function(){return n},n}function Rn(){var n=un([" display: none;"]);return Rn=function(){return n},n}function Zn(){var n=un(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return Zn=function(){return n},n}function Hn(){var n=un([" -ms-flex: 0 0 63%; flex: 0 0 63%; max-width: 63%;"]);return Hn=function(){return n},n}function _n(){var n=un([" -ms-flex: 0 0 100%; flex: 0 0 100%; max-width: 100%;"]);return _n=function(){return n},n}function Cn(){var n=un(["\n  padding: 2px 2px;\n    -ms-flex: 0 0 80%;\n    max-width: 80%;\n    diplay: inline;\n    ",";\n    ",";\n"]);return Cn=function(){return n},n}function Sn(){var n=un(["\n  padding: 3px 3px !important;\n  background-color: white;  \n  height: 100%;\n  text-align: left;\n"]);return Sn=function(){return n},n}var zn=h().Link,Ln=(h().Router,X.nc0),Bn=u.default.div(dn(),s.ZP.md(fn())),Dn=(0,u.default)(zn)(pn()),En=(u.default.div(hn()),u.default.div(mn(),s.ZP.sm(xn())),u.default.div(vn(),s.ZP.sm(gn())),u.default.div(wn(),s.ZP.sm(bn())),(0,u.default)(Y.X2)(jn())),An=u.default.div(kn(),s.ZP.sm(yn())),qn=u.default.img(On(),s.ZP.sm(Nn()),s.ZP.md(Pn())),Gn=u.default.img(Zn(),s.ZP.md(Tn()),s.ZP.sm(Rn())),Fn=u.default.div(Cn(),s.ZP.md(Hn()),s.ZP.sm(_n())),Mn=u.default.div(Sn()),In={width:20},Vn=function(n){if(!n||!n.baiHocs||0==n.length)return(0,o.jsx)("span",{});var e=n.baiHocs[0];return e&&e.id?(0,o.jsx)(Fn,{children:(0,o.jsxs)(Mn,{children:[(0,o.jsx)(Dn,{route:"/giaoTrinhDich/".concat(e.id),style:{paddingLeft:5,textAlign:"left"},children:(0,o.jsxs)("a",{className:"linkNdhp",children:[e.title,(0,o.jsx)(U.G,{size:"1x",icon:Ln,style:In})]})}),(0,o.jsx)("div",{className:"html-wrapper-home_bhlist",children:m()(e.content)})]})},"".concat(e.id)):""},$n=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&an(n,e)}(a,n);var e,t,r,c=ln(a);function a(){var n;return en(this,a),rn(Q(n=c.apply(this,arguments)),"state",{list:null}),rn(Q(n),"onClickBook",(function(e){n.setState({activedBook:e}),n.props.getEnglishBook(e)})),rn(Q(n),"onClickLesson",(function(e){console.log("onClickLesson",e),n.setState({activedLesson:e})})),n}return e=a,t=[{key:"componentDidMount",value:function(){this.props.getHome()}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){console.log("homeReducer will",n.homeReducer.type),this.props.homeReducer!==n.homeReducer&&this.setState(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){rn(n,e,t[e])}))}return n}({},n.homeReducer.data)),this.props.homeReducer.type!==n.homeReducer.type&&this.props.getHome()}},{key:"render",value:function(){var n=this.state,e=n.baiHocs,t=n.gtTkpsgnl,r=n.luyenDichs;console.log("baiHocs, gtTkpsgnl",t);var i=!1;return(0,o.jsxs)(Bn,{children:[(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:B.Z$,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"Gi\xe1o tr\xecnh h\u1ecdc d\u1ecbch Nhi \u0110\u1ed3ng H\u1ecdc Ph\u1eadt  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),(0,o.jsxs)(En,{children:[(0,o.jsx)(qn,{src:"./static/images/ndhp/ChiLacVoNhuDocThu.jpg",style:{width:"8%",float:"left"}}),(0,o.jsx)(Vn,{baiHocs:e,style:{width:"50%"}}),(0,o.jsx)(Gn,{src:"./static/images/ndhp/ChiYeuMacNhuGiaoTu.jpg",style:{width:"8%",float:"right"}})]}),e&&(0,o.jsx)(z,{loading:i,baiHocs:e,linkAll:B.Z$,prefix:B.aH})]})}),(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:B.Zg,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"Gi\xe1o tr\xecnh T\u1ecbnh Kh\xf4ng Ph\xe1p S\u01b0 Gia Ng\xf4n L\u1ee5c  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),e&&(0,o.jsx)(z,{loading:i,baiHocs:t,linkAll:B.Zg,prefix:B.f9})]})}),(0,o.jsx)(An,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:B.Js,children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"C\xe1c c\xe2u \u0111\u1ed1i, tr\xedch d\u1eabn"})]})}),r&&(0,o.jsx)(K,{loading:i,exercises:r})]})})]})}}],r=[{key:"getInitialProps",value:function(n){var e;return n.ctx.store,(e=i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(n){nn(o,r,i,c,a,"next",n)}function a(n){nn(o,r,i,c,a,"throw",n)}c(void 0)}))})()}}],t&&tn(e.prototype,t),r&&tn(e,r),a}(c.Component),Jn=(0,a.$j)((function(n){return{homeReducer:n.homeReducer}}),(function(n){return{getHome:function(){return n((0,l.eb)())}}}))($n)},9797:function(n,e,t){var r=t(5893),i=(t(7294),t(5697)),o=function(n){return n.showNew?(0,r.jsx)("span",{className:"blinking",children:"new"}):""};o.propTypes={showNew:t.n(i)().bool.isRequired},e.Z=o},4062:function(n,e,t){t.d(e,{hv:function(){return r}});t(6486);var r=function(n){var e="20".concat(n),t=["CN","T2","T3","T4","T5","T6","T7"][new Date([e.slice(0,4),e.slice(4,6),e.slice(6,8)].join("-")).getDay()];return e="".concat(t," ").concat([e.slice(6,8),e.slice(4,6),e.slice(0,4)].join("/"))}},3966:function(n,e,t){var r=o(t(4799)),i=t(2125);function o(n){return n&&n.__esModule?n:{default:n}}var c=o(t(804)).default.flexboxgrid.breakpoints,a=(0,r.default)(c).reduce((function(n,e){return n[e]=function(){return(0,i.css)(["@media (max-width:","em){",";}"],c[e],i.css.apply(void 0,arguments))},n}),{});e.ZP=a},804:function(n,e,t){t.r(e),e.default={fonts:{family:{base:"Arial, Helvetica, sans-serif",fallback:"Arial, sans-serif"},size:{normal:"14px",small:"13px",large:"16px"}},colors:{text:"#040404",inversedText:"#EBEBEB",background:"#FFF",inversedLink:"#18428c",inversedLinkHover:"#fc7546",link:"#18428c",black:"#18428c",grey:"#888",green:"#0e0",red:"#e00"},flexboxgrid:{gutterWidth:1,outerMargin:2,container:{sm:38,md:58,lg:72},breakpoints:{xs:10,sm:40,md:60,lg:75}},spacing:{xs:"5px",sm:"10px",md:"15px"}}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8571:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trich-dan/[id]",function(){return e(3362)}])},2547:function(n,t,e){"use strict";var r=e(5893),i=e(7294),o=e(5697),c=e.n(o),a=e(2125),s=e(2814),u=e(9398);e(894);function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,t){return!t||"object"!==b(t)&&"function"!==typeof t?l(n):t}function d(n,t){return(d=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var b=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function g(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=f(n);if(t){var i=f(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return p(this,e)}}function y(){var n,t,e=(n=["\n    font-weight: 600;\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return y=function(){return e},e}a.ZP.i(y());var v=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&d(n,t)}(c,n);var t,e,i,o=g(c);function c(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,n)).onClickPlay=t.onClickPlay.bind(l(t)),t}return t=c,(e=[{key:"onClickPlay",value:function(){var n=this.props,t=n.url,e=t===n.curUrl?"":t;this.props.playCallback(e)}},{key:"render",value:function(){var n=this.props,t=n.url,e=t===n.curUrl?u.Bg$:u.zc;return(0,r.jsx)("div",{onClick:this.onClickPlay,className:"btnPlay no-print",children:(0,r.jsx)(s.G,{size:"1x",icon:e})},t)}}])&&h(t.prototype,e),i&&h(t,i),c}(i.Component);v.propTypes={url:c().string,curUrl:c().string,playCallback:c().func},v.defaultProps={url:"",curUrl:""}},5267:function(n,t,e){"use strict";e.d(t,{Z:function(){return C}});var r=e(5893),i=e(7294),o=e(5697),c=e.n(o),a=e(2125),s=(e(9669),e(894)),u=e(450),l=e(5172),h=e(8585),f=e(6077);e(2547);function p(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function b(n){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,t){return!t||"object"!==m(t)&&"function"!==typeof t?p(n):t}function y(n,t){return(y=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function v(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var m=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function j(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=b(n);if(t){var i=b(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return g(this,e)}}function x(){var n=v(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return x=function(){return n},n}function w(){var n=v(['\n  font-family: \'KmdKaiTi\', \'KaiTi\', "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif;\n  font-size: 400%;\n']);return w=function(){return n},n}function _(){var n=v(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);return _=function(){return n},n}var O=a.ZP.audio(x()),C=(a.ZP.span(w()),a.ZP.iframe(_()),function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&y(n,t)}(c,n);var t,e,i,o=j(c);function c(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,n)).state={},t.handleClick=t.handleClick.bind(p(t)),t.toggle=t.toggle.bind(p(t)),t}return t=c,(e=[{key:"toggle",value:function(){var n=this.props,t=n.chinesse;(0,n.toggleChinese)(t)}},{key:"handleClick",value:function(){var n=(0,h.FA)(this.props.bacKinh);new Audio("".concat(f.uD,"/BasicSound/").concat(n)).play(),s.L9("ChuHan","BacKinh",this.props.bacKinh)}},{key:"render",value:function(){try{var n=this.props,t=n.error,e=n.id,i=n.chinesse,o=n.hanViet,c=n.bacKinh;if(n.toggleChinese,n.playCallback,n.curUrl,t)return(0,r.jsx)(l.Z,{content:t});if("\n"===i)return(0,r.jsx)("div",{className:"breakLine"});if(i.includes(".mp3"))return(0,r.jsx)(O,{className:"no-print",controls:!0,loop:!0,src:i,type:"audio/mp3"});if("#B"===i)return"";var a=c&&(0,r.jsx)(u.X2,{style:{padding:1,margin:1},children:(0,r.jsx)("button",{className:"btnBacKinh",onClick:this.handleClick,children:c})});return(0,r.jsx)("div",{children:(0,r.jsx)(u.Zb,{className:"chuHanPrint",style:{borderLeftWidth:0,borderRightWidth:0},children:(0,r.jsxs)(u.eW,{style:{padding:0},children:[(0,r.jsx)(u.Ol,{style:{padding:0},children:(0,r.jsx)("button",{className:"btnChuHan",id:"btnChuHan".concat(e),onClick:this.toggle,style:{borderLeftWidth:0,borderRightWidth:0},children:i})}),(0,r.jsx)(u.X2,{style:{padding:1,margin:1,fontSize:18},children:(0,r.jsx)("small",{children:o})}),a]})},"".concat(e))})}catch(s){return console.log("error",s),(0,r.jsx)(l.Z,{title:"Ch\u1eef H\xe1n",content:s+""})}}}])&&d(t.prototype,e),i&&d(t,i),c}(i.Component));C.propTypes={error:c().string,chinesse:c().string,chinessNoSign:c().string,hanViet:c().string,bacKinh:c().string,id:c().number,toggleChinese:c().func,playCallback:c().func,curUrl:c().string},C.defaultProps={error:null,chinesse:"",chinessNoSign:"",hanViet:"",bacKinh:"",id:"",curUrl:""}},8129:function(n,t,e){"use strict";e.d(t,{Z:function(){return S}});var r=e(5893),i=e(7294),o=e(5697),c=e.n(o),a=e(2125),s=e(9669),u=e.n(s),l=e(6486),h=e.n(l),f=e(894),p=e(450),d=e(5172),b=e(8585),g=e(6077),y=e(5267),v=e(714);function m(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function j(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function x(n){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function w(n,t){return!t||"object"!==C(t)&&"function"!==typeof t?m(n):t}function _(n,t){return(_=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function O(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var C=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function k(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=x(n);if(t){var i=x(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return w(this,e)}}function P(){var n=O(["\n  width: 70%;\n  font-size: 14pt;\n"]);return P=function(){return n},n}function N(){var n=O(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);return N=function(){return n},n}var H=a.ZP.span(P()),Z=a.ZP.iframe(N());var S=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_(n,t)}(c,n);var t,e,i,o=k(c);function c(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,n)).state={modal:!1,selectedChinese:"",bos:{}},u().get("".concat(g.uD,"/dictBo.json")).then((function(n){t.setState({bos:n.data})})),t.handleClick=t.handleClick.bind(m(t)),t.toggle=t.toggle.bind(m(t)),t.toggleChinese=t.toggleChinese.bind(m(t)),t}return t=c,(e=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal}),f.L9("ChuHan","Han",this.props.selectedChinese)}},{key:"toggleChinese",value:function(n){this.setState({selectedChinese:n,modal:!this.state.modal}),f.L9("ChuHan","Han",this.props.selectedChinese)}},{key:"handleClick",value:function(){var n=(0,b.FA)(this.props.bacKinh);new Audio("".concat(g.uD,"/BasicSound/").concat(n)).play(),f.L9("ChuHan","BacKinh",this.props.bacKinh)}},{key:"render",value:function(){try{var n=this.props,t=n.baiHocid,e=n.chinesse,i=n.hanViet,o=n.bacKinh,c=n.playCallback,a=n.folderPath,s=n.curUrl,u=this.state,l=u.modal,f=u.selectedChinese,m=u.bos[f],j="";m&&(j="C\u1ea5u t\u1ea1o: "+m.bo);var x="ChuHanCom";h().isNil(e)||(x=function(n,t,e,i,o,c,a,s){var u=(0,b.$V)(n),l=(0,b.r9)(t),h=(0,b.r9)(e),f=[],p=0,d=1;for(p=0;p<u.length;p++)"\n"===u[p]&&f.push({id:1e3*d+p,chinesse:"".concat(g.uD,"/").concat(a,"/").concat(i+d++,".mp3"),hanViet:"",bacKinh:""}),f.push({id:p,chinesse:u[p],hanViet:l[p],bacKinh:h[p]});return""===i?f.push({id:1e3*d+p,chinesse:s,hanViet:"",bacKinh:""}):f.push({id:1e3*d+p,chinesse:"".concat(g.uD,"/").concat(a,"/").concat(i+d++,".mp3"),hanViet:"",bacKinh:""}),f.map((function(n){return(0,r.jsx)(y.Z,{id:n.id,chinesse:n.chinesse,hanViet:n.hanViet,bacKinh:n.bacKinh,toggleChinese:o,playCallback:c,curUrl:s},n.id)}))}(e,i,o,t,this.toggleChinese,c,a,s));var w=l&&(0,r.jsxs)(p.u_,{isOpen:l,toggle:this.toggle,className:this.props.className,children:[(0,r.jsx)(p.xB,{toggle:this.toggle,children:(0,b.kL)(f)}),(0,r.jsxs)(p.fe,{children:[(0,r.jsx)("img",{src:(0,v.g)(f),width:"60px",height:"60px",srcSet:(0,v.g)(f),alt:""}),(0,r.jsx)(H,{children:j}),(0,r.jsx)(Z,{src:"".concat(g.uD,"/dictHtmls/").concat((0,b.kL)(f),".htm")})]})]});return console.log("modal",l,"selectedChinese",f,"moda",w),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"no-print",children:"C\xf3 th\u1ec3 click l\xean c\xe1c ch\u1eef H\xe1n \u0111\u1ec3 tra t\u1eeb \u0111i\u1ec3n t\u1eebng ch\u1eef, click l\xean \xe2m B\u1eafc Kinh \u0111\u1ec3 nghe ph\xe1t \xe2m"}),(0,r.jsx)("div",{className:"chuHanListComponentDiv",children:x}),w]})}catch(_){return console.log("error",_),(0,r.jsx)(d.Z,{title:"Ch\u1eef H\xe1n",content:_+""})}}}])&&j(t.prototype,e),i&&j(t,i),c}(i.Component);S.propTypes={chinesse:c().string,hanViet:c().string,bacKinh:c().string,baiHocid:c().string,playCallback:c().func,curUrl:c().string},S.defaultProps={chinesse:"",hanViet:"",bacKinh:"",baiHocid:"",curUrl:""}},5172:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(5697)),o=e.n(i),c=e(450),a=e(262),s=function(n){var t=n.title,e=n.content;return(0,r.jsx)(c.X2,{children:(0,r.jsxs)(c.JX,{lg:"4",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsx)("p",{children:e}),(0,r.jsx)("p",{children:(0,r.jsx)(a.Link,{to:"/",className:"btn btn-primary",children:"Trang ch\u1ee7"})})]})})};s.propTypes={title:o().string,content:o().string},s.defaultProps={title:"Xin l\u1ed7i",content:"An unexpected error came up"},t.Z=s},3033:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(450));t.Z=function(){return(0,r.jsx)(i.X2,{children:(0,r.jsx)(i.JX,{md:{size:6,offset:3},children:(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)(i.Ex,{bar:!0,animated:!0,value:"100",children:"Loading"})})})})}},3850:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(5697)),o=e.n(i),c=(e(262),e(6573)),a=e(1020),s=e(6616),u=e(7385),l=e(4746),h=e(2730),f=function(n){var t=n.shareUrl,e=n.title,i=n.shortTitle;n.content;return(0,r.jsxs)("div",{className:"Demo__container no-print",children:[(0,r.jsx)("div",{className:"Demo__some-network",children:"Chia s\u1ebb l\xean"}),(0,r.jsx)("div",{className:"Demo__some-network",children:(0,r.jsx)(c.Z,{url:t,quote:e,hashtag:"#nhidonghocphat",className:"Demo__some-network__share-button",children:(0,r.jsx)(a.Z,{size:32,round:!0})})}),(0,r.jsxs)("div",{className:"Demo__some-network",children:[(0,r.jsx)(s.Z,{url:t,title:e,className:"Demo__some-network__share-button",children:(0,r.jsx)(u.Z,{size:32,round:!0})}),(0,r.jsx)("div",{className:"Demo__some-network__share-count",children:"\xa0"})]}),(0,r.jsx)("div",{className:"Demo__some-network",children:(0,r.jsx)(l.Z,{url:t,title:i,body:"body",className:"Demo__some-network__share-button",children:(0,r.jsx)(h.Z,{size:32,round:!0})})})]})};f.propTypes={title:o().string,shortTitle:o().string,content:o().string,shareUrl:o().string},f.defaultProps={title:"",shortTitle:"",content:"",shareUrl:"http://nhidonghocphat.com"},t.Z=f},3362:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return an},default:function(){return sn}});var r=e(5893),i=(e(1664),e(9008),e(450)),o=e(9823),c=e(7294),a=e(2962),s=e(2125),u=e(5697),l=e.n(u),h=e(6964),f=e.n(h),p=e(262),d=e.n(p),b=e(894),g=e(3033),y=e(5172),v=e(1677),m=e(9669),j=e.n(m),x=e(8585),w=e(714),_=e(6077);function O(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function C(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function k(n){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function P(n,t){return!t||"object"!==Z(t)&&"function"!==typeof t?O(n):t}function N(n,t){return(N=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var Z=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function S(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=k(n);if(t){var i=k(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return P(this,e)}}function V(){var n=H(["\n  display:none;\n  display:block;\n  width:100%;\n  height:0;\n"]);return V=function(){return n},n}function R(){var n=H(["\n  position:fixed; \n  top:0; \n  left:0; \n  bottom:0; \n  right:0; \n  width:90%; \n  line-height: 1;\n  height:90%; \n  margin:0; \n  padding:0; \n  overflow:hidden; \n"]);return R=function(){return n},n}function D(){var n=H(["\n  width: 70%;\n  font-size: 14pt;\n"]);return D=function(){return n},n}function K(){var n=H(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 500px;\n"]);return K=function(){return n},n}var T=s.ZP.div(V()),B=(s.ZP.div(R()),s.ZP.span(D())),E=s.ZP.iframe(K()),z=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&N(n,t)}(a,n);var t,e,o,c=S(a);function a(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,n)).state={modal:!1,bos:{}},j().get("".concat(_.uD,"/dictBo.json")).then((function(n){t.setState({bos:n.data})})),t.toggle=t.toggle.bind(O(t)),t}return t=a,(e=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal}),b.L9("ChuHan","Han",this.props.chinesse)}},{key:"render",value:function(){var n=this.props,t=n.id,e=n.chinesse,o=this.state,c=o.modal,a=o.bos[e],s="";return a&&(s="C\u1ea5u t\u1ea1o: "+a.bo),"\n"===e?(0,r.jsx)(T,{}):"#B"===e?"":(0,r.jsxs)("div",{className:"inline",children:[(0,r.jsx)("button",{className:"btnChuHan inline",onClick:this.toggle,children:e}),(0,r.jsxs)(i.u_,{isOpen:c,toggle:this.toggle,children:[(0,r.jsx)(i.xB,{toggle:this.toggle,children:(0,x.kL)(e)}),(0,r.jsx)(i.fe,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:(0,w.g)(e),width:"60px",height:"60px",srcSet:(0,w.g)(e),alt:"bar"}),(0,r.jsx)(B,{children:s},t),(0,r.jsx)(E,{src:"".concat(_.uD,"/dictHtmls/").concat((0,x.kL)(e),".htm")})]})},t)]},t)]})}}])&&C(t.prototype,e),o&&C(t,o),a}(c.Component);function L(){var n,t,e=(n=["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return L=function(){return e},e}z.propTypes={chinesse:l().string},z.defaultProps={chinesse:""};var U=s.ZP.div(L());function X(n){var t=(0,x.$V)(n),e=[],i=0;for(i=0;i<t.length;i++)e.push({id:i,chinesse:t[i]});return e.map((function(n){return(0,r.jsx)(z,{id:n.id,chinesse:n.chinesse},n.id)}))}var A=function(n){var t=n.chuHan;return(0,r.jsx)(U,{children:X(t)})};A.propTypes={chuHan:l().string},A.defaultProps={chuHan:""};var W=e(3850),M=e(8129);function G(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function J(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function $(n){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function F(n,t){return!t||"object"!==Q(t)&&"function"!==typeof t?G(n):t}function Y(n,t){return(Y=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function q(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var Q=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function I(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=$(n);if(t){var i=$(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return F(this,e)}}function nn(){var n=q(["width: 100%;"]);return nn=function(){return n},n}function tn(){var n=q(["\n  width: 80%;\n  ",";\n"]);return tn=function(){return n},n}function en(){var n=q(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return en=function(){return n},n}function rn(){var n=q(["\n  cursor: pointer;\n  padding: 0.15rem 0.2rem;\n  font-size: 80%;\n  font-weight: 400;\n  line-height: 1;\n  border-radius: 0.2rem;\n  color: #8D8E90;\n  text-align: center;\n  background-color: #fff;\n  border-color: #8D8E90;\n"]);return rn=function(){return n},n}d().Link,d().Router;var on=s.ZP.div(tn(),v.Z.md(nn())),cn=(s.ZP.audio(en()),s.ZP.button(rn()),function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&Y(n,t)}(s,n);var t,e,o,c=I(s);function s(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,n)).state={},t.playCallback=t.playCallback.bind(G(t)),t}return t=s,(e=[{key:"playCallback",value:function(n){var t=this.props,e=(t.error,t.loading,t.trichDan),r="http://nhidonghocphat.com/luyenDichsMp3/".concat(e.chuHan,".mp3");this.setState({url:r})}},{key:"render",value:function(){try{var n=this.props,t=n.error,e=n.loading,o=n.trichDan;if(t)return(0,r.jsx)(y.Z,{content:t});var c="http://nhidonghocphat.com/luyenDichsMp3/".concat(o.chuHan,".mp3");if(e||!o)return(0,r.jsx)(g.Z,{});b.L9("LuyenDich","Detail",o.chuHan);var s="http://nhidonghocphat.com/ndhp-social/luyen-dich/".concat(o.id,".html"),u="".concat(o.chuHan," - ").concat(o.hanViet," - Ngh\u0129a Vi\u1ec7t:").concat(o.nghiaViet," http://nhidonghocphat.com"),l="".concat(o.chuHan," - ").concat(o.hanViet," - ").concat(o.nghiaViet);return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.PB,{title:"".concat(o.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(o.hanViet," \xc2m B\u1eafc Kinh: ").concat(o.bacKinh),canonical:"".concat(_.vE,"/").concat(_.io,"/").concat(o.id),openGraph:{url:"".concat(_.vE,"/").concat(_.io,"/").concat(o.id),title:"".concat(o.nghiaViet," - Nhi \u0111\u1ed3ng h\u1ecdc Ph\u1eadt"),description:"".concat(o.hanViet," \xc2m B\u1eafc Kinh: ").concat(o.bacKinh),images:[{url:o.imgSrc}]}}),(0,r.jsxs)("h1",{className:"h1Title",children:["Luy\u1ec7n D\u1ecbch ",o.chuHan]}),(0,r.jsx)("div",{sm:"12",md:"12",className:"d-flex justify-content-center",children:(0,r.jsxs)(on,{className:"row",children:[(0,r.jsx)(i.JX,{sm:"12",md:"6",children:(0,r.jsx)("img",{src:"".concat(o.imgSrc),alt:"".concat(o.imgOrg),width:"100%",style:{borderRadius:5}})}),(0,r.jsxs)(i.JX,{className:"text-left",sm:"12",md:"6",children:[(0,r.jsx)(M.Z,{chinesse:o.chuHan,hanViet:o.hanViet,bacKinh:o.bacKinh,playCallback:this.playCallback,curUrl:c,baiHocid:""}),(0,r.jsxs)("span",{style:{paddingLeft:10},children:["Ngh\u0129a Vi\u1ec7t: ",(0,r.jsx)("b",{children:o.nghiaViet})]}),(0,r.jsx)("br",{})]})]})}),(0,r.jsx)(W.Z,{shareUrl:s,title:u,shortTitle:l,content:"".concat(o.chuHan," - H\xe1n Vi\u1ec7t: ").concat(o.hanViet," - Ngh\u0129a Vi\u1ec7t: ").concat(o.nghiaViet)}),(0,r.jsxs)(f(),{"data-clipboard-text":"".concat(o.chuHan," \nH\xe1n Vi\u1ec7t: ").concat(o.hanViet," \nNgh\u0129a Vi\u1ec7t: ").concat(o.nghiaViet," \n\u1ea2nh: ").concat(o.imgSrc," \nChi ti\u1ebft t\u1ea1i http://nhidonghocphat.com/luyenDich/").concat(o.id),style:{marginLeft:10},children:[(0,r.jsx)("i",{className:"icon-docs"})," Copy n\u1ed9i dung \u0111\u1ec3 share"]})]})}catch(h){return console.log("error",h),(0,r.jsx)(y.Z,{title:"M\u1edf T\u1eadp D\u1ecbch",content:h})}}}])&&J(t.prototype,e),o&&J(t,o),s}(c.Component));cn.propTypes={trichDan:l().shape(),error:l().string,loading:l().bool},cn.defaultProps={error:null,loading:!1};var an=!0;function sn(n){var t=n.trichDan,e=n.id;return(0,r.jsx)(o.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(i.W2,{children:(0,r.jsx)(cn,{id:e,trichDan:t,role:"",loading:!1})})})}},714:function(n,t,e){"use strict";e.d(t,{g:function(){return i}});var r=e(6077);var i=function(n){return r.uD+"/huongdanviet/"+function(n){if(!n||void 0===n)return"";var t=n.length;if(0==t)return 63;var e=n.charCodeAt(0);if(1==t)return e;var r=n.charCodeAt(1);if(2==t)return((31&e)<<6)+(63&r);var i=n.charCodeAt(2);if(3==t)return((15&e)<<12)+((63&r)<<6)+(63&i);var o=n.charCodeAt(3);return 4==t?((7&e)<<18)+((63&r)<<12)+((63&i)<<6)+(63&o):63}(n)+".svg"}}},function(n){n.O(0,[8523,260,2867,2962,1138,9823,9774,2888,179],(function(){return t=8571,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
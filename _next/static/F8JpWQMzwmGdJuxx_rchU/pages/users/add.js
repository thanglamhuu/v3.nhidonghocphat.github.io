(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"2mql":function(t,e,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(t){return r.isMemo(t)?i:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var a=Object.defineProperty,s=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(d){var o=y(n);o&&o!==d&&t(e,o,r)}var i=s(n);p&&(i=i.concat(p(n)));for(var c=f(e),m=f(n),b=0;b<i.length;++b){var h=i[b];if(!u[h]&&(!r||!r[h])&&(!m||!m[h])&&(!c||!c[h])){var v=l(n,h);try{a(e,h,v)}catch(_){}}}}return e}},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"AT/M":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Hh2w:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/add",function(){return n("OxUL")}])},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),o=n.n(r),u=n("Z7t5"),i=n.n(u);function c(t){return(c="function"===typeof i.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":typeof t})(t)}function f(t){return(f="function"===typeof i.a&&"symbol"===c(o.a)?function(t){return c(t)}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":c(t)})(t)}var a=n("AT/M");function s(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?Object(a.a)(t):e}n.d(e,"a",(function(){return s}))},OxUL:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),u=n("MI3g"),i=n("a7VT"),c=n("AT/M"),f=n("Tit0"),a=n("vYYK"),s=n("q1tI"),p=n.n(s),l=n("/MKj"),y=n("ut3o"),d=n("8cHP"),m=p.a.createElement,b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var o=arguments.length,f=new Array(o),s=0;s<o;s++)f[s]=arguments[s];return n=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(f))),Object(a.a)(Object(c.a)(n),"state",{}),Object(a.a)(Object(c.a)(n),"changeText",(function(t){var e=t.target;n.setState(Object(a.a)({},e.name,e.value))})),Object(a.a)(Object(c.a)(n),"onSubmit",(function(t){t.preventDefault();var e=n.state,r=e.name,o=e.job,u=e.phone;r&&o&&u&&n.props.dispatch(Object(y.a)(r,o,u))})),n}return Object(f.a)(e,t),Object(o.a)(e,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.props.userReducer!==t.userReducer&&d.Router.pushRoute("users")}},{key:"render",value:function(){return m("div",null,m("p",null,"Add New."),m("form",{onSubmit:this.onSubmit},m("input",{name:"name",placeholder:"Your Name",onChange:this.changeText}),m("input",{name:"job",placeholder:"Your Job",onChange:this.changeText}),m("input",{name:"phone",placeholder:"Your Phone",onChange:this.changeText}),m("button",{type:"submit"},"Submit")))}}]),e}(p.a.Component);e.default=Object(l.b)((function(t){return t}))(b)},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),o=n.n(r),u=n("TRZx"),i=n.n(u);function c(t,e){return(c=i.a||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}n.d(e,"a",(function(){return f}))},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),u=n("XJU/"),i=n("2GTP"),c=n("EXMj"),f=n("oioR"),a=n("MPFp"),s=n("UO39"),p=n("TJWN"),l=n("jmDH"),y=n("6/1s").fastKey,d=n("n3ko"),m=l?"_s":"size",b=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,a){var s=t((function(t,r){c(t,s,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=r&&f(r,n,t[a],t)}));return u(s.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=d(this,e),r=b(n,t);if(r){var o=r.n,u=r.p;delete n._i[r.i],r.r=!0,u&&(u.n=o),o&&(o.p=u),n._f==r&&(n._f=o),n._l==r&&(n._l=u),n[m]--}return!!r},forEach:function(t){d(this,e);for(var n,r=i(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!b(d(this,e),t)}}),l&&r(s.prototype,"size",{get:function(){return d(this,e)[m]}}),s},def:function(t,e,n){var r,o,u=b(t,e);return u?u.v=n:(t._l=u={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=u),r&&(r.n=u),t[m]++,"F"!==o&&(t._i[o]=u)),t},getEntry:b,setStrong:function(t,e,n){a(t,e,(function(t,n){this._t=d(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?s(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,s(1))}),n?"entries":"values",!n,!0),p(e)}}},a7VT:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("Bhuq"),o=n.n(r),u=n("TRZx"),i=n.n(u);function c(t){return(c=i.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},qT12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function S(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case p:case l:case i:case f:case c:case d:return t;default:switch(t=t&&t.$$typeof){case s:case y:case h:case b:case a:return t;default:return e}}case u:return e}}}function w(t){return S(t)===l}e.typeOf=S,e.AsyncMode=p,e.ConcurrentMode=l,e.ContextConsumer=s,e.ContextProvider=a,e.Element=o,e.ForwardRef=y,e.Fragment=i,e.Lazy=h,e.Memo=b,e.Portal=u,e.Profiler=f,e.StrictMode=c,e.Suspense=d,e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===i||t===l||t===f||t===c||t===d||t===m||"object"===typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===b||t.$$typeof===a||t.$$typeof===s||t.$$typeof===y||t.$$typeof===v||t.$$typeof===_||t.$$typeof===g)},e.isAsyncMode=function(t){return w(t)||S(t)===p},e.isConcurrentMode=w,e.isContextConsumer=function(t){return S(t)===s},e.isContextProvider=function(t){return S(t)===a},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return S(t)===y},e.isFragment=function(t){return S(t)===i},e.isLazy=function(t){return S(t)===h},e.isMemo=function(t){return S(t)===b},e.isPortal=function(t){return S(t)===u},e.isProfiler=function(t){return S(t)===f},e.isStrictMode=function(t){return S(t)===c},e.isSuspense=function(t){return S(t)===d}},sLSF:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hfKm"),o=n.n(r);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function i(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}},ut3o:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return l}));var r=n("eG9x"),o=function(){return{type:r.s}},u=function(t){return{type:r.u,data:t}},i=function(t){return{type:r.t,err:t}},c=function(t,e,n){return{type:r.a,data:{name:t,job:e,phone:n}}},f=function(){return{type:r.c}},a=function(){return{type:r.b}},s=function(t){return{type:r.d,data:t}},p=function(){return{type:r.f}},l=function(){return{type:r.e}}},vYYK:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hfKm"),o=n.n(r);function u(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}},[["Hh2w",1,2,0,3,4,6,12]]]);
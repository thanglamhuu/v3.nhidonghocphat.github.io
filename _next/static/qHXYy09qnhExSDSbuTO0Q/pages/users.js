(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"3Hq7":function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t("rt45"),a=t("q1tI"),i=t.n(a),u=t("Foj8"),c=t("vOnD"),s=i.a.createElement;function o(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return o=function(){return e},e}var l=c.default.div(o()),d={display:"flex",border:"1px solid #DDD",height:"100%",alignItems:"center",justifyContent:"center"};function f(e){return s(l,null,s("div",{style:d},s(u.a,null),e.children))}},NhoZ:function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),a=t.n(r),i=t("0iUn"),u=t("sLSF"),c=t("MI3g"),s=t("a7VT"),o=t("AT/M"),l=t("Tit0"),d=t("vYYK"),f=t("rt45"),p=t("q1tI"),m=t.n(p),v=t("/MKj"),b=t("3Hq7"),h=t("vOnD"),y=t("8cHP"),g=t("ut3o"),N=m.a.createElement;function w(){var e=Object(f.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    .main-title{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    .head-table{\n        display: grid;\n        grid-template-columns: 10% 40% 25% 20% 5%;\n        font-weight:bold;\n        margin-bottom:10px;\n    }\n    .body-table{\n        .block-row{\n            display: grid;\n            grid-template-columns: 10% 40% 25% 20% 5%;\n            margin-bottom: 10px;\n            .full-name{\n                display: flex;\n                .avatar{\n                    width: 50px;\n                    height: 50px;\n                    overflow: hidden;\n                    border-radius: 100%;\n                    margin-right: 10px;\n                    img{\n                        width:100%;\n                    }\n                }\n            }\n        }\n    }\n"]);return w=function(){return e},e}var j=h.default.div(w()),x=function(e){function n(){var e,t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return t=Object(c.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a))),Object(d.a)(Object(o.a)(t),"state",{users:null}),Object(d.a)(Object(o.a)(t),"onAddNew",(function(){y.Router.pushRoute("addUser")})),Object(d.a)(Object(o.a)(t),"onDeleteUser",(function(e){t.props.deleteUser(e)})),t}return Object(l.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.usersReducer!==e.usersReducer&&this.setState({users:e.usersReducer.data}),this.props.usersReducer.type!==e.usersReducer.type&&this.props.getUser()}},{key:"render",value:function(){var e=this,n=this.state.users;return N(b.a,null,N(j,null,N("div",{className:"main-title"},N("p",null,"Users Page."),N("button",{onClick:this.onAddNew},"Add New")),N("div",{className:"main-table-user"},N("div",{className:"head-table"},N("div",{className:"headitem"},"STT"),N("div",{className:"headitem"},"Full Name"),N("div",{className:"headitem"},"Job"),N("div",{className:"headitem"},"Phone"),N("div",{className:"headitem"},"Action")),N("div",{className:"body-table"},n&&n.map((function(n,t){return N("div",{className:"block-row",key:t},N("div",{className:"nomal-text"},t+1),N("div",{className:"full-name "},N("div",{className:"avatar"},N("img",{src:n.avatar,alt:"item"})),N("p",null,n.name)),N("div",{className:"nomal-text"},n.job),N("div",{className:"nomal-text"},n.phone),N("div",{className:"nomal-text"},N("button",{onClick:function(){e.onDeleteUser(n.id)}},"Delete")))}))))))}}],[{key:"getInitialProps",value:function(e){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.ctx.store;case 1:case"end":return n.stop()}}))}}]),n}(m.a.Component);n.default=Object(v.b)((function(e){return{usersReducer:e.userReducer}}),(function(e){return{getUser:function(){return e(Object(g.g)())},deleteUser:function(n){return e(Object(g.d)(n))}}}))(x)},URgp:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t("NhoZ")}])},ut3o:function(e,n,t){"use strict";t.d(n,"g",(function(){return a})),t.d(n,"i",(function(){return i})),t.d(n,"h",(function(){return u})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"e",(function(){return f}));var r=t("eG9x"),a=function(){return{type:r.s}},i=function(e){return{type:r.u,data:e}},u=function(e){return{type:r.t,err:e}},c=function(e,n,t){return{type:r.a,data:{name:e,job:n,phone:t}}},s=function(){return{type:r.c}},o=function(){return{type:r.b}},l=function(e){return{type:r.d,data:e}},d=function(){return{type:r.f}},f=function(){return{type:r.e}}},vYYK:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("hfKm"),a=t.n(r);function i(e,n,t){return n in e?a()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}}},[["URgp",1,2,0,41,42,43,44,49]]]);
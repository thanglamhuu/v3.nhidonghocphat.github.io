"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{1486:function(n,e,t){var i=t(5893),a=t(7294),o=t(6456),r=(t(6486),t(6711)),h=t(8585),c=t(2162),s=t.n(c),l=t(164);function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,e){return!e||"object"!==b(e)&&"function"!==typeof e?u(n):e}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var b=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function C(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=g(n);if(e){var a=g(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return p(this,t)}}function v(n){return n&&n.hv?n=0===(n=n.hv.split(",")).length?"":1===n.length?n[0]:"".concat(n[0]):""}var m=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}(c,n);var e,t,a,o=C(c);function c(n){var e;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this,n)).state={newHanViet:"",newBacKinh:"",newNghia:"",newWord:"",dict:{}};var t=e.props.tuDienBo;return console.log("InitComponentData ",t),(0,h.le)(t)&&(console.log("InitComponentData call dispatch getTuDien"),(0,l.bh)().dispatch((0,r.$)())),e.onChangeHandlerNewWord=e.onChangeHandlerNewWord.bind(u(e)),e.onChangeHandlerNewHanViet=e.onChangeHandlerNewHanViet.bind(u(e)),e.onChangeHandlerBacKinh=e.onChangeHandlerBacKinh.bind(u(e)),e.onChangeHandlerNewNghia=e.onChangeHandlerNewNghia.bind(u(e)),e.reportNew=e.reportNew.bind(u(e)),e}return e=c,(t=[{key:"componentWillReceiveProps",value:function(n){var e=n.editTuMoi;(0,h.le)(e)||this.setState({newHanViet:e.hanViet,newBacKinh:e.bacKinh,newWord:e.chuHan,newNghia:e.nghiaViet})}},{key:"onChangeHandlerNewWord",value:function(n){var e=n.target.value,t=this.props.dict,i=(0,h.Qw)(e),a=function(n,e){var t,i=(0,h.$V)(n),a=[],o=0;for(o=0;o<i.length;o++){var r="";(t=e[(0,h.kL)(i[o])])&&(r=t.hv),a.push({id:o,chinesse:i[o],hanViet:r,bacKinh:"",nghiaViet:v(t),nghias:t?t.nghia:""})}return a}(i,t),o="";a.map((function(n){return o+=" "+n.hanViet,""})),this.setState({newWord:i,newHanViet:o.trim(),newBacKinh:s()(i),newNghia:""})}},{key:"onChangeHandlerNewNghia",value:function(n){this.setState({newNghia:(0,h.Qw)(n.target.value)})}},{key:"onChangeHandlerNewHanViet",value:function(n){this.setState({newHanViet:(0,h.Qw)(n.target.value)})}},{key:"onChangeHandlerBacKinh",value:function(n){this.setState({newBacKinh:n.target.value})}},{key:"reportNew",value:function(){var n=this.state,e=n.newWord,t=n.newHanViet,i=n.newNghia,a=n.newBacKinh;this.props.clickThemTuMoi({chuHan:e,hanViet:t,bacKinh:a,nghiaViet:i})}},{key:"render",value:function(){this.props.dict;var n=this.state,e=n.newWord,t=n.newHanViet,a=n.newNghia,o=n.newBacKinh;try{var r=this,c=this.props.tuDienBo;return(0,h.le)(c)?(0,i.jsx)("span",{children:"."}):(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{children:"Th\xeam t\u1eeb m\u1edbi"}),(0,i.jsx)("input",{className:"txtInput",id:"newWord",placeholder:"t\u1eeb m\u1edbi",value:e,onChange:this.onChangeHandlerNewWord}),(0,i.jsx)("input",{className:"txtInput",id:"newHanViet",placeholder:"\xe2m H\xe1n Vi\u1ec7t",value:t,onChange:this.onChangeHandlerNewHanViet}),(0,i.jsx)("input",{className:"txtInput",id:"newBacKinh",placeholder:"\xe2m B\u1eafc Kinh",value:o,onChange:this.onChangeHandlerBacKinh}),(0,i.jsx)("input",{className:"txtInput",id:"newNghia",placeholder:"ngh\u0129a",value:a,onChange:this.onChangeHandlerNewNghia}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{className:"btnProcess",onClick:this.reportNew,children:"Th\xeam t\u1eeb"}),(0,i.jsx)("button",{className:"btnTuMoiRemove",onClick:function(){return r.props.removeClick(e)},children:"X\xf3a t\u1eeb"})]})}catch(s){return console.log("error",s),(0,i.jsx)(Error,{title:"M\u1edf B\xe0i H\u1ecdc",content:s+""})}}}])&&d(e.prototype,t),a&&d(e,a),c}(a.Component);e.Z=(0,o.$j)((function(n){return{tuDienBo:n.tuDienReducer.data,dict:n.tuDienReducer.dict}}),(function(n){return{getTuDien:function(){return n((0,r.$)())}}}))(m)},674:function(n,e,t){var i=t(5893),a=t(7294),o=t(5697),r=t.n(o),h=t(450),c=t(5152),s=t.n(c),l=t(6486),u=t.n(l),d=t(2207),g=t.n(d),p=t(6456),f=t(262),b=t(2125),C=t(3463),v=t(8341),m=t.n(v),x=(t(2162),t(6725)),H=t(3033),y=t(5172),w=t(5267),j=t(8585),k=t(1310),N=t(6077),T=t(7264),V=t(5480),S=t(9718),B=t(1486),K=t(164),M=t(7607);function I(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function P(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function O(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z(n){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function R(n,e){return!e||"object"!==_(e)&&"function"!==typeof e?I(n):e}function E(n,e){return(E=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function D(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var _=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function L(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=Z(n);if(e){var a=Z(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return R(this,t)}}function X(){var n=D(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return X=function(){return n},n}function z(){var n=D(["\n  width: 100%;\n  height: auto;\n"]);return z=function(){return n},n}function Q(){var n=D(["\n  resize: none;\n  border-width: 0;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 16px;\n  padding-top: 10px;\n  ::placeholder {\n    color: #9a9fa6;\n  }\n"]);return Q=function(){return n},n}function W(){var n=D(["\n  resize: none;\n  border-width: 1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 73%;\n  font-size: 16px;\n"]);return W=function(){return n},n}function A(){var n=D(["\n  width: 100%;\n"]);return A=function(){return n},n}function F(){var n=D(["\n  width: 100%;\n"]);return F=function(){return n},n}var J=s()(Promise.all([t.e(2937),t.e(1167)]).then(t.t.bind(t,1167,23)),{loadableGenerated:{webpack:function(){return[1167]}},ssr:!1,loading:function(){return(0,i.jsx)("p",{children:"Loading ..."})}}),$={toolbar:[[{header:"1"},{header:"2"},{header:"3"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},q=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],G=b.ZP.div(X()),Y=(b.ZP.img(z()),{width:"640px",playerVars:{autoplay:0}});function U(n){n.target.pauseVideo()}var nn=(0,b.ZP)(C.Z)(Q()),en=((0,b.ZP)(C.Z)(W()),(0,b.ZP)(h.Zb)(A())),tn=(0,b.ZP)(h.cw)(F()),an=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&E(n,e)}(r,n);var e,t,a,o=L(r);function r(n){var e;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),O(I(e=o.call(this,n)),"handleChangeNghiaViet",(function(n,t,i,a){console.log("handleChangeNghiaViet",cotent,i,a.getHTML()),e.setState({daSua:!0,content:a.getHTML()})})),O(I(e),"QuillHandleChange",(function(n,t,i,a){"user"==i&&e.setState({content:n})})),O(I(e),"QuillHandleChangeExtra",(function(n,t,i,a){"user"==i&&e.setState({extraContent:n})}));var t=e.props.baiHoc;return(0,j.le)(t)&&(t={id:"",content:".",chuong:"",title:"",chinesse:"",hanViet:"",bacKinh:"",extraContent:"",youTubeId:"",fileMp3:!1,shortClipId:"",tuMois:[],editTuMoi:{chuHan:"",hanViet:"",bacKinh:"",nghiaViet:""},correctExcel:0,htmlShow:!1}),e.state={id:t.id,error:t?n.error:x.Z.baiHoc404,loading:n.loading,content:".",chuong:t.chuong,title:t.title,chinesse:t.chinesse,hanViet:t.hanViet,bacKinh:t.bacKinh,extraContent:t.extraContent,youTubeId:t.youTubeId,tuMois:t.tuMois,editTuMoi:t.editTuMoi,fileMp3:t.fileMp3||!1,shortClipId:t.shortClipId||"",correctExcel:0,htmlShow:!1,daSua:!1,modal:!1,modalCacNetBo:"",modalChuHan:"",modalHanViet:""},e.onChangeHandlerID=e.onChangeHandlerID.bind(I(e)),e.onChangeHtmlShow=e.onChangeHtmlShow.bind(I(e)),e.onChangeFileMp3=e.onChangeFileMp3.bind(I(e)),e.onChangeshortClip=e.onChangeshortClip.bind(I(e)),e.onChangeHandlerTitle=e.onChangeHandlerTitle.bind(I(e)),e.onChangeHandlerChuong=e.onChangeHandlerChuong.bind(I(e)),e.onChangeHandlerExtraContent=e.onChangeHandlerExtraContent.bind(I(e)),e.onChangeHandlerYouTube=e.onChangeHandlerYouTube.bind(I(e)),e.onChangeHandlerChuHan=e.onChangeHandlerChuHan.bind(I(e)),e.onChangeHandlerHanViet=e.onChangeHandlerHanViet.bind(I(e)),e.onChangeHandlerBacKinh=e.onChangeHandlerBacKinh.bind(I(e)),e.toggle=e.toggle.bind(I(e)),e.handleBacKinhClick=e.handleBacKinhClick.bind(I(e)),e.QuillHandleChange=u().debounce(e.QuillHandleChange.bind(I(e)),100),e.QuillHandleChangeExtra=u().debounce(e.QuillHandleChangeExtra.bind(I(e)),100),e.onHtmlChangeNghiaViet=u().debounce(e.onHtmlChangeNghiaViet.bind(I(e)),100),e.onChangeNghiaViet=u().debounce(e.onChangeNghiaViet.bind(I(e)),100),e.handleChangeNghiaViet=e.handleChangeNghiaViet.bind(I(e)),e.onHtmlChangeExtraContent=e.onHtmlChangeExtraContent.bind(I(e)),e.updateBaiHoc=e.updateBaiHoc.bind(I(e)),e.chuanChuHanTuExcel=e.chuanChuHanTuExcel.bind(I(e)),e.chuanAnHanViet=e.chuanAnHanViet.bind(I(e)),e.taoPhatAm=e.taoPhatAm.bind(I(e)),e.clickThemTuMoi=e.clickThemTuMoi.bind(I(e)),e.clickSuaTuMoi=e.clickSuaTuMoi.bind(I(e)),e.removeClick=e.removeClick.bind(I(e)),e.duaBaiHocLenTrangChu=e.duaBaiHocLenTrangChu.bind(I(e)),e.goBaiHocKhoiTrangChu=e.goBaiHocKhoiTrangChu.bind(I(e)),e.handleBacKinhClick=e.handleBacKinhClick.bind(I(e)),e}return e=r,(t=[{key:"componentWillReceiveProps",value:function(n){if(!(0,j.le)(n.baiHoc)&&(n.baiHoc.id!==this.state.id||n.baiHoc.content!==this.state.content)){var e=n.baiHoc,t=e.tuMois;(0,j.le)(t)&&(t=[]),this.setState({daSua:!1,id:e.id,content:e.content,chuong:e.chuong,title:e.title,chinesse:e.chinesse,hanViet:e.hanViet,bacKinh:e.bacKinh,extraContent:e.extraContent,youTubeId:e.youTubeId,fileMp3:e.fileMp3||!1,shortClipId:e.shortClipId,tuMois:t})}}},{key:"onChangeHtmlShow",value:function(n){this.setState({htmlShow:!this.state.htmlShow})}},{key:"onChangeHandlerTitle",value:function(n){this.setState({daSua:!0,title:n.target.value})}},{key:"onHtmlChangeNghiaViet",value:function(n){console.log("onHtmlChangeNghiaViet",n),this.setState({daSua:!0,content:n})}},{key:"onChangeNghiaViet",value:function(n){console.log("onChangeNghiaViet",n.target.value),this.setState({daSua:!0,content:n.target.value})}},{key:"onChangeFileMp3",value:function(){this.setState({daSua:!0,fileMp3:!this.state.fileMp3})}},{key:"onChangeshortClip",value:function(n){this.setState({daSua:!0,shortClipId:n.target.value})}},{key:"onHtmlChangeExtraContent",value:function(n){this.setState({daSua:!0,extraContent:n})}},{key:"onChangeHandlerExtraContent",value:function(n){this.setState({daSua:!0,extraContent:n.target.value})}},{key:"onChangeHandlerYouTube",value:function(n){this.setState({daSua:!0,youTubeId:n.target.value})}},{key:"onChangeHandlerID",value:function(n){var e=n.target.value;if(e.indexOf("\n")>0){var t=this.state.youTubeId;e=e.replaceAll("\n",""),t=(0,k.T)(e),u().isNil(t)||this.setState({daSua:!0,youTubeId:t})}this.setState({daSua:!0,id:e})}},{key:"onChangeHandlerChuong",value:function(n){this.setState({daSua:!0,chuong:n.target.value})}},{key:"onChangeHandlerChuHan",value:function(n){this.setState({daSua:!0,chinesse:n.target.value})}},{key:"toggle",value:function(n){if(n&&void 0!==n){var e=this.props.tuDienBo[n],t=this.props.tuDienDict[n];this.setState({modal:!this.state.modal,modalChuHan:n,modalHanViet:t&&t.hv,modalCacNetBo:e&&e.bo})}else this.setState({modal:!this.state.modal})}},{key:"handleBacKinhClick",value:function(n){(0,j.fr)(n)}},{key:"onChangeHandlerHanViet",value:function(n){this.setState({daSua:!0,hanViet:n.target.value})}},{key:"onChangeHandlerBacKinh",value:function(n){this.setState({daSua:!0,bacKinh:n.target.value})}},{key:"chuanChuHanTuExcel",value:function(){var n=this.state,e=n.chinesse;if(1!==n.correctExcel){var t=e.split("\n"),i="",a=0;for(a=0;a<t.length;a++)i+=t[a],a++;i=(0,j.ko)(i,"\n",""),i=(0,j.ko)(i,"\t",""),i=(0,j.ko)(i,".","\u3002"),i=(0,j.ko)(i,"\u3002\u300d","\u300d\u3002"),i=(0,j.ko)(i,"\u3002","\u3002\n"),this.setState({daSua:!0,chinesse:i,correctExcel:1})}}},{key:"chuanAnHanViet",value:function(){var n=this.state.hanViet;this.setState({daSua:!0,hanViet:(0,j.KB)(n)})}},{key:"taoPhatAm",value:function(){var n=this.state,e=n.chinesse;n.hanViet,this.setState({daSua:!0,bacKinh:(0,j.N4)(e)})}},{key:"clickThemTuMoi",value:function(n){var e=n.chuHan,t=(n.hanViet,n.bacKinh,n.nghiaViet,this.state.tuMois),i=[],a=!1,o=0;if((0,j.le)(t))i.push(n);else{for(o=0;o<t.length;o++)t[o].chuHan===e?(i.push(n),a=!0):i.push(t[o]);a||i.push(n)}this.setState({daSua:!0,tuMois:i});var r={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,extraContent:this.state.extraContent,youTubeId:this.state.youTubeId,chinesse:this.state.chinesse,hanViet:this.state.hanViet,bacKinh:this.state.bacKinh,loginName:this.props.loginName,fileMp3:this.state.fileMp3,shortClipId:this.state.shortClipId,tuMois:i};(0,K.bh)().dispatch((0,T.tm)(r))}},{key:"clickSuaTuMoi",value:function(n){this.setState({daSua:!0,editTuMoi:n})}},{key:"removeClick",value:function(n){var e=this.state.tuMois,t=[],i=0;if(!(0,j.le)(e))for(i=0;i<e.length;i++)e[i].chuHan===n||t.push(e[i]);console.log("removeClick",t),this.setState({daSua:!0,tuMois:t})}},{key:"updateBaiHoc",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,extraContent:this.state.extraContent,youTubeId:this.state.youTubeId,chinesse:this.state.chinesse,hanViet:this.state.hanViet,bacKinh:this.state.bacKinh,loginName:this.props.loginName,fileMp3:this.state.fileMp3,shortClipId:this.state.shortClipId,tuMois:this.state.tuMois};(0,K.bh)().dispatch((0,T.tm)(n))}},{key:"duaBaiHocLenTrangChu",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,loginName:this.props.loginName};(0,K.bh)().dispatch((0,T.Ou)(n))}},{key:"goBaiHocKhoiTrangChu",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,loginName:this.props.loginName};(0,K.bh)().dispatch((0,T.kk)(n))}},{key:"render",value:function(){var n,e=this.props,t=(e.baiHoc,e.userData),a=u().get(t,"userInfo.role",""),o=this.state,r=o.id,c=o.content,s=o.title,l=o.chuong,d=o.chinesse,p=o.hanViet,b=o.bacKinh,C=o.extraContent,v=o.youTubeId,x=o.loading,k=o.error,T=o.shortClipId,K=o.htmlShow,I=o.tuMois,P=o.editTuMoi,O=o.modal;if(o.modalCacNetBo,o.modalChuHan,o.modalHanViet,x)return(0,i.jsx)(H.Z,{});if(k)return(0,i.jsx)(y.Z,{content:k});if(n=function(n,e,t,a){var o=(0,j.$V)(n),r=(0,j.r9)(e),h=(0,j.r9)(t),c=[],s=0;for(s=0;s<o.length;s++)c.push({id:s,chinesse:o[s],hanViet:r[s],bacKinh:h[s]});return c.map((function(n){return(0,i.jsx)(w.Z,{id:n.id,chinesse:n.chinesse,hanViet:n.hanViet,bacKinh:n.bacKinh},n.id)}))}(d,p,b),"Admin"!==a)return(0,i.jsx)("h2",{children:"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n ch\u1ec9nh s\u1eeda b\xe0i vi\u1ebft"});var Z="",R="";return K?(R=c,Z=(0,i.jsx)(nn,{id:"inputTextNghiaViet",value:c,onChange:this.onChangeNghiaViet})):void 0!=window&&(u().isNil(c)||(R=m()(c)),Z=(0,i.jsx)("div",{className:"editorContainer",children:(0,i.jsx)(J,{value:c,onChange:this.QuillHandleChange,modules:$,formats:q,theme:"snow"})})),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"divRow",children:[(0,i.jsx)(f.Link,{className:"btn btn-secondary",route:"".concat(N.f9).concat(r),children:(0,i.jsx)("a",{href:"".concat(N.f9).concat(r),children:" Quay l\u1ea1i"})}),(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"}),(0,i.jsx)("button",{className:"btn",onClick:this.duaBaiHocLenTrangChu,children:"\u0110\u01b0a l\xean trang ch\u1ee7"}),(0,i.jsx)("button",{className:"btn",onClick:this.goBaiHocKhoiTrangChu,children:"G\u1ee1 b\xe0i kh\u1ecfi trang ch\u1ee7"}),(0,i.jsxs)("h3",{children:["Ch\u1ec9nh s\u1eeda b\xe0i: ",r]})]}),(0,i.jsxs)("div",{className:"divRow",children:[(0,i.jsx)("input",{id:"id",type:"text",value:r,placeholder:"ID b\xe0i h\u1ecdc",onChange:this.onChangeHandlerID,style:{width:80,marginRight:3}}),(0,i.jsx)("input",{id:"chuong",type:"text",value:l,placeholder:"Ch\u01b0\u01a1ng C.B0.",onChange:this.onChangeHandlerChuong,style:{width:80,marginRight:3}}),(0,i.jsx)("input",{id:"title",type:"text",value:s,placeholder:"Ti\xeau \u0111\u1ec1",onChange:this.onChangeHandlerTitle,style:{width:550,marginRight:3}}),(0,i.jsx)("input",{id:"shortClipId",type:"text",value:T,placeholder:"ID short clip",onChange:this.onChangeshortClip,style:{width:150,marginRight:3}}),(0,i.jsx)("input",{id:"youTubeId",type:"text",value:v,placeholder:"ID clip",onChange:this.onChangeHandlerYouTube,style:{width:100,marginRight:3}}),(0,i.jsx)("a",{htmlFor:"youTubeId",href:"https://www.youtube.com/playlist?list=PLyzPM-oZ65rFvvO5yJVLdRnBj1FpBfpHf",target:"_blank",children:"(list)"}),(0,i.jsx)(h.__,{for:"htmlShow",children:"Html"}),(0,i.jsx)("input",{type:"checkbox",onChange:this.onChangeHtmlShow})]}),(0,i.jsxs)(h.X2,{children:[(0,i.jsx)(h.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsxs)(h.Zb,{children:[(0,i.jsx)(h.Ol,{children:"Ngh\u0129a vi\u1ec7t"}),Z]})}),(0,i.jsx)(h.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsxs)(h.Zb,{children:[(0,i.jsx)(h.Ol,{children:"Gi\u1ea3ng r\u1ed9ng"}),(0,i.jsx)(J,{value:C,onChange:this.QuillHandleChangeExtra,modules:$,formats:q,theme:"snow"})]})})]}),(0,i.jsxs)(h.X2,{children:[(0,i.jsx)(S.Z,{wordList:I,edit:!0,clickSuaTuMoi:this.clickSuaTuMoi,toggle:this.toggle,handleClick:this.handleBacKinhClick}),(0,i.jsx)(B.Z,{clickThemTuMoi:this.clickThemTuMoi,editTuMoi:P,removeClick:this.removeClick})]}),(0,i.jsx)(h.X2,{children:(0,i.jsxs)(tn,{children:[(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"}),(0,i.jsx)(h.__,{for:"inputChuHan",children:"Ch\u1eef H\xe1n"}),(0,i.jsx)("span",{children:"\uff0c \uff1a \u300c \u300d\u300a\u300b\u3002 \u2026"}),(0,i.jsx)(nn,{id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:d,onChange:this.onChangeHandlerChuHan}),(0,i.jsx)(nn,{id:"inputHanViet",placeholder:"H\xe1n Vi\u1ec7t",value:p,onChange:this.onChangeHandlerHanViet}),(0,i.jsx)("button",{className:"btn",onClick:this.chuanAnHanViet,children:"Chu\u1ea9n H\xe1n Vi\u1ec7t"}),(0,i.jsx)("button",{className:"btn",onClick:this.taoPhatAm,children:"T\u1ea1o ph\xe1t \xe2m t\u1ef1 \u0111\u1ed9ng"}),(0,i.jsx)("a",{href:"https://docs.google.com/document/d/1bGYToo1bUMuvzov7F23rjXs0IFsFpZv2Pfr-nhh9HtQ/edit",target:"_blank",children:"Ki\u1ec3m tra PABK"}),(0,i.jsx)(nn,{id:"inputBacKinh",placeholder:"B\u1eafc Kinh",value:b,onChange:this.onChangeHandlerBacKinh}),(0,i.jsx)("p",{children:"Qui t\u1eafc: \u0110\u1ec3 g\u1ed9p \u0111\xfang b\u1ed9 ba ch\u1eef H\xe1n, H\xe1n Vi\u1ec7t, B\u1eafc Kinh \\n - Ba ph\u1ea7n n\xe0y ph\u1ea3i c\xf3 d\u1ea5u ch\u1ea5m ph\u1ea7n k\u1ebft th\xfac c\xe2u. - N\xean cho xu\u1ed1ng d\xf2ng t\u1eebng c\xe2u \u0111\u1ec3 \u0111\u1ed1i chi\u1ebfu cho d\u1ec5. - Ph\u1ea7n H\xe1n Vi\u1ec7t, B\u1eafc Kinh s\u1ebd t\xe1ch t\u1eeb b\u1eb1ng d\u1ea5u c\xe1ch."})]})}),(0,i.jsx)(h.X2,{className:"pb-3",children:(0,i.jsxs)(h.JX,{children:[(0,i.jsx)(f.Link,{className:"btn btn-secondary",route:"".concat(N.Zg,"/").concat(r),children:(0,i.jsx)("a",{href:"".concat(N.Zg,"/").concat(r),children:" Quay l\u1ea1i"})}),(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"})]})}),(0,i.jsx)(h.X2,{children:(0,i.jsx)("h1",{children:"K\u1ebft qu\u1ea3"})}),(0,i.jsxs)(h.X2,{children:[(0,i.jsx)(h.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsx)(h.X2,{children:(0,i.jsxs)(en,{sm:"12",md:"6",children:[(0,i.jsx)(h.Ol,{children:"Ngh\u0129a vi\u1ec7t"}),R]})})}),(0,i.jsx)(h.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsx)(h.X2,{children:(0,i.jsx)(g(),{id:v,opts:Y,onReady:U})})})]}),(0,i.jsx)(h.X2,{children:(0,i.jsxs)(h.Zb,{children:[(0,i.jsx)(h.Ol,{children:"Ch\u1eef H\xe1n"}),(0,i.jsx)(G,{children:n}),O&&(0,i.jsx)(M.Z,{className:"frameTudien",modal:this.state.modal,toggle:this.toggle,modalChuHan:this.state.modalChuHan,modalHanViet:this.state.modalHanViet,modalCacNetBo:this.state.modalCacNetBo})]})}),(0,i.jsx)(h.X2,{children:(0,i.jsxs)(en,{children:[(0,i.jsx)(h.Ol,{children:"Gi\u1ea3ng r\u1ed9ng"}),(0,i.jsx)(h.eW,{className:"html-wrapper",children:!u().isNil(C)&&m()(C)})]})}),(0,i.jsx)(V.Z,{})]})}}])&&P(e.prototype,t),a&&P(e,a),r}(a.Component);an.propTypes={role:r().string,loginName:r().string,error:r().string,loading:r().bool,id:r().string,baiHoc:r().shape({id:r().string,content:r().string,title:r().string,chuong:r().string,chinesse:r().string,hanViet:r().string,bacKinh:r().string,extraContent:r().string,youTubeId:r().string,fileMp3:r().bool,shortClipId:r().string}),updateTkpsgnl:r().func,duaBaiHocLenTrangChu:r().func,goBaiHocKhoiTrangChu:r().func,setError:r().func},an.defaultProps={error:null,baiHoc:null};var on={updateTkpsgnl:T.tm,duaBaiHocLenTrangChu:T.Ou,goBaiHocKhoiTrangChu:T.kk};e.ZP=(0,p.$j)((function(n){return{userData:n.memberReducer.data,baiHoc:n.tkpsgnlReducer.dataEdit,tuDienBo:n.tuDienReducer.data,tuDienDict:n.tuDienReducer.dict}}),on)(an)},5480:function(n,e,t){var i=t(5893),a=(t(7294),t(5697)),o=t.n(a),r=t(2125),h=t(262),c=(t(8341),t(1662)),s=t(1677),l=t(6077);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=u(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);return d=function(){return n},n}function g(){var n=u(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);return g=function(){return n},n}function p(){var n=u(["font-size: 9pt;padding-right: 2px !important;-ms-flex: 0 0 11.8%;flex: 0 0 11.8%;max-width: 11.8%;"]);return p=function(){return n},n}function f(){var n=u(["\n        background-color:#fff !important;\n      "]);return f=function(){return n},n}function b(){var n=u(["\n  background-color: #eee !important;\n  display: block;\n  text-decoration: none;\n  min-height: 25px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 6%;\n  text-align: center;\n  ",";\n  border: 1px solid ",";\n  ",";\n"]);return b=function(){return n},n}function C(){var n=u(["\n  width: 100%;\n  min-height: 30px;\n"]);return C=function(){return n},n}var v=r.ZP.div(d()),m=r.ZP.ul(g()),x=r.ZP.li(b(),s.Z.sm(p()),c.Z.colors.textLink,(function(n){return(!n.soChan||0===n.soChan)&&(0,r.iv)(f())})),H=(0,r.ZP)(h.Link)(C()),y=function(n){var e=n.baihoc,t=e.id,a=e.title;if(!e||!t)return"";var o="".concat(l.f9).concat(t),r=parseInt(t.substr(1,2).replace("B",""))%2;return(0,i.jsx)(x,{soChan:r,children:(0,i.jsx)(H,{className:"linkNdhp",to:o,style:{paddingLeft:5},children:a})})};y.propTypes={baihoc:o().shape().isRequired};var w=function(){var n=[],e=1,t=1;for(e=1;e<=1;e++){for(t=1;t<10;t++)n.push({id:"C".concat(e,"B0").concat(t),title:"C".concat(e,"B0").concat(t)});for(t=10;t<37;t++)n.push({id:"C".concat(e,"B").concat(t),title:"C".concat(e,"B").concat(t)})}var a=n.map((function(n){return(0,i.jsx)(y,{baihoc:n,showNew:1===e},"bhi".concat(++e))}));return(0,i.jsxs)(v,{children:[(0,i.jsx)("div",{className:"h2Title",children:"Danh s\xe1ch b\xe0i luy\u1ec7n d\u1ecbch"}),(0,i.jsx)(m,{children:a})]})};w.propTypes={},w.defaultProps={},e.Z=w}}]);
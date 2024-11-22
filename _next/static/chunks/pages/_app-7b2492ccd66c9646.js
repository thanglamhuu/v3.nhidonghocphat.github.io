from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=m`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,N=m`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${D} 1s linear infinite;
`,M=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=m`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,F=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=b("div")`
  position: absolute;
`,W=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=m`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:n})=>{let{icon:t,type:i,iconTheme:r}=n;return void 0!==t?"string"==typeof t?e.createElement(K,null,t):t:"blank"===i?null:e.createElement(W,null,e.createElement(L,{...r}),"loading"!==i&&e.createElement(B,null,"error"===i?e.createElement(A,{...r}):e.createElement(F,{...r})))},V=n=>`\n0% {transform: translate3d(0,${-200*n}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,G=n=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*n}%,-1px) scale(.6); opacity:0;}\n`,Y=b("div",e.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=e.memo((({toast:n,position:t,style:i,children:r})=>{let h=null!=n&&n.height?((n,t)=>{let i=n.includes("top")?1:-1,[e,r]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(i),G(i)];return{animation:t?`${m(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${m(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||t||"top-center",n.visible):{opacity:0},u=e.createElement($,{toast:n}),o=e.createElement(Z,{...n.ariaProps},j(n.message,n));return e.createElement(Y,{className:n.className,style:{...h,...i,...n.style}},"function"==typeof r?r({icon:u,message:o}):e.createElement(e.Fragment,null,u,o))}));!function(n,t,i,e){g.p=t,y=n,p=i,z=e}(e.createElement);var X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Q=({reverseOrder:n,position:t="top-center",toastOptions:i,gutter:r,children:h,containerStyle:u,containerClassName:o})=>{let{toasts:s,handlers:g}=O(i);return e.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...u},className:o,onMouseEnter:g.startPause,onMouseLeave:g.endPause},s.map((i=>{let u=i.position||t,o=((n,t)=>{let i=n.includes("top"),e=i?{top:0}:{bottom:0},r=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(i?1:-1)}px)`,...e,...r}})(u,g.calculateOffset(i,{reverseOrder:n,gutter:r,defaultPosition:t})),s=i.height?void 0:(n=>t=>{t&&setTimeout((()=>{let i=t.getBoundingClientRect();n(i)}))})((n=>{g.updateHeight(i.id,n.height)}));return e.createElement("div",{ref:s,className:i.visible?X:"",key:i.id,style:o},"custom"===i.type?j(i.message,i):h?h(i):e.createElement(J,{toast:i,position:u}))})))},nn=S}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[9774,179],(function(){return t(1118),t(880)}));var i=n.O();_N_E=i}]);
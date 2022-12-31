"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Animations",l={unversionedId:"guides/animations",id:"guides/animations",title:"Animations",description:"You can pick one of ready to use animations from library or implement your own.",source:"@site/docs/guides/animations.md",sourceDirName:"guides",slug:"/guides/animations",permalink:"/react-native-unicorn-modals/docs/guides/animations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Themes",permalink:"/react-native-unicorn-modals/docs/guides/themes"},next:{title:"Custom components",permalink:"/react-native-unicorn-modals/docs/guides/custom-components"}},s={},c=[{value:"Internal animations",id:"internal-animations",level:2},{value:"Custom animations",id:"custom-animations",level:2}],m={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"animations"},"Animations"),(0,r.kt)("p",null,"You can pick one of ready to use animations from library or implement your own."),(0,r.kt)("h2",{id:"internal-animations"},"Internal animations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("inlineCode",{parentName:"strong"},"fade"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("inlineCode",{parentName:"strong"},"scale"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("inlineCode",{parentName:"strong"},"slideUp"))," (default)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"fade",src:n(5571).Z,width:"400",height:"226"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"scale",src:n(1790).Z,width:"400",height:"226"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"slideUp",src:n(5526).Z,width:"400",height:"226"}))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  createModalProvider,\n  Alert,\n  // highlight-start\n  fade,\n  scale,\n  slideUp,\n  // highlight-end\n} from 'react-native-unicorn-modals';\n\nconst Provider = createModalProvider(\n  { alert: Alert },\n  {\n    animationDuration: 400,\n    // highlight-next-line\n    animationWorklet: slideUp,\n  },\n);\n")),(0,r.kt)("h2",{id:"custom-animations"},"Custom animations"),(0,r.kt)("p",null,"Just create reanimated worklet function. You have an access to animation progress (from 0 to 1) in the first argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { interpolate } from 'react-native-reanimated';\n\n// highlight-start\nfunction scaleDown(value) {\n  'worklet';\n  return {\n    opacity: value,\n    transform: [{ scale: interpolate(value, [0, 1], [1.2, 1]) }],\n  };\n}\n// highlight-end\n\nconst ModalProvider = createModalProvider(\n  { alert: Alert },\n  // highlight-next-line\n  { animationWorklet: scaleDown },\n);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"scaleDown",src:n(3266).Z,width:"400",height:"358"})))}p.isMDXComponent=!0},3266:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/custom-scaleDown-0f270ad61482e0a15958958870857d6f.gif"},5571:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fade-02949bc38859bae4bd57c38b18681e2d.gif"},1790:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scale-0c3448c643508b9331cf24a7ce102327.gif"},5526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slideUp-a1b1d85135ab1b91f0fab149f5c307a2.gif"}}]);
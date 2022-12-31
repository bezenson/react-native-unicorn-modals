"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[187],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2495:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={},i="ModalProvider",l={unversionedId:"api/ModalProvider",id:"api/ModalProvider",title:"ModalProvider",description:"ModalProvider is a React Component which is returned by createModalProvider call. Normally this component should wrap your application.",source:"@site/docs/api/ModalProvider.md",sourceDirName:"api",slug:"/api/ModalProvider",permalink:"/react-native-unicorn-modals/docs/api/ModalProvider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/react-native-unicorn-modals/docs/guides/typescript"},next:{title:"createModalProvider",permalink:"/react-native-unicorn-modals/docs/api/createModalProvider"}},p={},c=[{value:"Props",id:"props",level:2},{value:"<code>theme</code>",id:"theme",level:3}],d={toc:c};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modalprovider"},(0,o.kt)("inlineCode",{parentName:"h1"},"ModalProvider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ModalProvider")," is a React Component which is returned by ",(0,o.kt)("a",{parentName:"p",href:"./createModalProvider"},(0,o.kt)("inlineCode",{parentName:"a"},"createModalProvider"))," call. Normally this component should wrap your application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ModalProvider = createModalProvider({ /* ... */ });\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"theme"},(0,o.kt)("inlineCode",{parentName:"h3"},"theme")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"theme")," prop accepts an object with colors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<ModalProvider theme={{ /* theme */ }}>{/* ... */}</ModalProvider>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about default theme properties at ",(0,o.kt)("a",{parentName:"p",href:"useTheme#default-theme-properties"},"here"),".")))}s.isMDXComponent=!0}}]);
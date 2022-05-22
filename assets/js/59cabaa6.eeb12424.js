"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9580],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=c(n),d=o,m=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},814:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u="Prettify Content",c={unversionedId:"Transformation/prettify",id:"Transformation/prettify",title:"Prettify Content",description:"ConnXio (CX) supports prettifying message content in XML and JSON. As JSON data is often output without line breaks to save space, it can be extremely difficult to actually read and make sense of it. This feature hopes to solve the problem by formatting and beautifying the JSON data so that it is easy to read and debug by human beings.",source:"@site/docs/Transformation/prettify.md",sourceDirName:"Transformation",slug:"/Transformation/prettify",permalink:"/Transformation/prettify",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Transformation/prettify.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Format Conversion",permalink:"/Transformation/format-conversion"},next:{title:"Splitting",permalink:"/Transformation/splitting"}},p={},f=[{value:"Adding prettify to content",id:"adding-prettify-to-content",level:2}],l={toc:f};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prettify-content"},"Prettify Content"),(0,i.kt)("p",null,"ConnXio (CX) supports prettifying message content in XML and JSON. As JSON data is often output without line breaks to save space, it can be extremely difficult to actually read and make sense of it. This feature hopes to solve the problem by formatting and beautifying the JSON data so that it is easy to read and debug by human beings."),(0,i.kt)("h2",{id:"adding-prettify-to-content"},"Adding prettify to content"),(0,i.kt)("p",null,"Add the shape from the transformation shape menu and move it to the correct place in the pipeline. Prettify should probably be the last step unless you are debugging."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Prettify%20menu.png?sv=2020-04-08&st=2021-10-26T11%3A28%3A06Z&se=2040-10-27T11%3A28%3A00Z&sr=b&sp=r&sig=nkS7KFgvnLRcukS86iyvkY1uMRguc%2BEVwgDSSCWgz8I%3D",alt:"img"})))}d.isMDXComponent=!0}}]);
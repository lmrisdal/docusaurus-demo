"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5845],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6753:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],c={},s="Encoding",l={unversionedId:"encoding",id:"encoding",title:"Encoding",description:"Encoding is a complex and hazardous area of integration. When we talk about encoding in ConnXio (CX) we mean the actual character encoding used to compile the messages or files. A in depth overview of encoding can be found on Wikipedia. This page describes how CX handles encoding and potential pitfalls.",source:"@site/docs/encoding.md",sourceDirName:".",slug:"/encoding",permalink:"/encoding",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/encoding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/core-concepts"},next:{title:"Functionality",permalink:"/functionality"}},u={},d=[{value:"How ConnXio handles encoding",id:"how-connxio-handles-encoding",level:2},{value:"Potential pitfalls",id:"potential-pitfalls",level:2}],p={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"encoding"},"Encoding"),(0,a.kt)("p",null,"Encoding is a complex and hazardous area of integration. When we talk about encoding in ConnXio (CX) we mean the actual character encoding used to compile the messages or files. A in depth overview of encoding can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Character_encoding"},"Wikipedia"),". This page describes how CX handles encoding and potential pitfalls."),(0,a.kt)("h2",{id:"how-connxio-handles-encoding"},"How ConnXio handles encoding"),(0,a.kt)("p",null,"In CX we handle encoding by transforming all text to utf-8. We do this by leveraging the internal library for .net which converts characters between character sets. This means that we support all encoding sets that uses characters included in utf-8 (a complete list can be found here; ",(0,a.kt)("a",{parentName:"p",href:"https://www.charset.org/utf-8"},"https://www.charset.org/utf-8"),"). The utf-8 character set is very large and encompasses most scenario's, if you want CX to process files that have characters outside utf-8 you can contact us for more information or help.\\\nThe actual encoding process used by CX when handling files looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Encoding%20diagram.png?sv=2020-08-04&st=2021-11-25T13%3A06%3A15Z&se=2040-11-26T13%3A06%3A00Z&sr=b&sp=r&sig=Pk4UavUnTU2cN%2Be1p%2Be6qgOd5y6%2FMM2AbRlIF1foMzQ%3D",alt:"img"})),(0,a.kt)("p",null,"The example above has configured Ascii as the inbound encoding and Iso 8859-1 as the outbound encoding."),(0,a.kt)("h2",{id:"potential-pitfalls"},"Potential pitfalls"),(0,a.kt)("p",null,"To avoid pitfalls please refer to the following list and adhere to it as much as possible:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Be sure to check the actual encoding of your inbound file. If the encoding is configured wrong the error may be almost impossible to detect until production systems suddenly start to store garbled data."),(0,a.kt)("li",{parentName:"ol"},"Check that the outbound encoding support all characters from the inbound encoding. The content will be garbled if a character is not present in the outbound set. As such ",(0,a.kt)("em",{parentName:"li"},"inbound encoding must be larger that the outbound"),"."),(0,a.kt)("li",{parentName:"ol"},"If you have very large incoming sets check that they are nor larger than utf-8."),(0,a.kt)("li",{parentName:"ol"},"Do tests with uncommon characters before deploying an integration to into production.")))}h.isMDXComponent=!0}}]);
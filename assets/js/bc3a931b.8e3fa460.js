"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1989],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Overview",sidebar_position:1},p="Adapters",u={unversionedId:"Adapters/Overview",id:"Adapters/Overview",title:"Overview",description:"- Adapters",source:"@site/docs/Adapters/Overview.md",sourceDirName:"Adapters",slug:"/Adapters/Overview",permalink:"/Adapters/Overview",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Adapters/Overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"The ConnXio Api",permalink:"/Adapters/Inbound/api"}},l={},c=[{value:"Retry",id:"retry",level:2},{value:"Acknowledgment events",id:"acknowledgment-events",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adapters"},"Adapters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adapters"},"Adapters"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retry"},"Retry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#acknowledgment-events"},"Acknowledgment events"))))),(0,a.kt)("p",null,'We use the word "Adapters" to describe the components that start or complete an integration flow by interfacing with systems outside of ConnXio (CX) through various protocols. Subsequently we put adapters into two categories; ',(0,a.kt)("em",{parentName:"p"},"inbound")," and ",(0,a.kt)("em",{parentName:"p"},"outbound"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inbound adapters")," reach out to other systems over their configured protocol, search for files to pick up and then use parallel processing to pick up said files and upload them to the internal engines to start processing them. Inbound adapters give customers a plethora of settings to configure based on their protocol and the behavior described within the scope of that protocol. For example you might be able to configure security, pick rates, parallel processing thresholds, duplicate detection, etc.\\\nInbound adapters are set up to trigger off of a time interval with a minimum interval of one minute. The minimum interval is 1 minute because the system picks up and runs each inbound configuration once every minute."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Outbound adapters")," are different from inbound adapters in the way they ",(0,a.kt)("em",{parentName:"p"},"push")," messages instead of picking them up. The way these adapters function are more akin to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"webhooks")," and the REST outbound adapter is actually a webhook in and of itself. The outbound webhooks react to events supplied by the CX internal engine and sends the processed messages to the configured place based on the configuration set up for the protocol that the adapter communicates over."),(0,a.kt)("h2",{id:"retry"},"Retry"),(0,a.kt)("p",null,"General retry information can be found ",(0,a.kt)("a",{parentName:"p",href:"/retry"},"here"),". For specific information see the detailed information per adapter."),(0,a.kt)("h2",{id:"acknowledgment-events"},"Acknowledgment events"),(0,a.kt)("p",null,"All outbound adapters supply users with the ability to send an acknowledgement (ACK) of a completed message delivery. The guide describing the configuration process is detailed ",(0,a.kt)("a",{parentName:"p",href:"/adapters/outbound/acknowledgment"},"here"),". The concept of sending ACK messages is inspired by the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment"},"TCP")," protocol and gives our customers the ability to verify that a message has been delivered successfully in close to real time. When enabled, this feature supplies an external system with an event with contents supplied by using the standard CX ",(0,a.kt)("a",{parentName:"p",href:"/transformation/code-components"},"code mapping functionality"),", which makes the ACK message extremely powerful as it can contain almost anything, even the delivered message itself."))}m.isMDXComponent=!0}}]);
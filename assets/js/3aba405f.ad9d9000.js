"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9618],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Email Inbound Adapter",u={unversionedId:"Adapters/Inbound/email",id:"Adapters/Inbound/email",title:"Email Inbound Adapter",description:"- Email Inbound Adapter",source:"@site/docs/Adapters/Inbound/email.md",sourceDirName:"Adapters/Inbound",slug:"/Adapters/Inbound/email",permalink:"/Adapters/Inbound/email",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Adapters/Inbound/email.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Storage Outbound Adapter",permalink:"/Adapters/Inbound/azure-storage"},next:{title:"Event Grid Adapter",permalink:"/Adapters/Inbound/event-grid"}},p={},c=[{value:"Limitations",id:"limitations",level:2},{value:"Configuring email connections",id:"configuring-email-connections",level:2},{value:"Polling interval",id:"polling-interval",level:2},{value:"Retry",id:"retry",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"email-inbound-adapter"},"Email Inbound Adapter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#email-inbound-adapter"},"Email Inbound Adapter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#limitations"},"Limitations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-email-connections"},"Configuring email connections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#polling-interval"},"Polling interval")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#retry"},"Retry"))))),(0,i.kt)("p",null,"ConnXio (CX) lets customers provide messages to the CX pipeline by configuring connections to email accounts. We currently support POP3 and IMAP protocols. This page details limitations of email protocols and how to configure and connect to an email account."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"There are several limitations inherent to the POP3 and IMAP protocols, subsequently we do not recommend sending large volumes through email. Of the two protocols, we recommend using IMAP since this is the newer, more secure and faster choice. Be aware that we do not currently support searching or excluding emails from the pickup, as such all messages arriving in on the email server will be processed according to the configuration."),(0,i.kt)("h2",{id:"configuring-email-connections"},"Configuring email connections"),(0,i.kt)("p",null,'To configure CX to start processing your email messages select the Email option in "Inbound Connection" shape:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Azure%20storage%20menu.png?sv=2020-04-08&st=2021-10-27T11%3A56%3A53Z&se=2040-10-28T12%3A56%3A00Z&sr=b&sp=r&sig=S%2FltUS0elTLePVt5Aq536uNkr7Pa9XcY8ovTFJLUhmc%3D",alt:"img"})),(0,i.kt)("p",null,"A new window pops up. Add data as seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Email%20config.PNG?sv=2020-04-08&st=2021-11-03T09%3A18%3A05Z&se=2040-11-04T09%3A18%3A00Z&sr=b&sp=r&sig=EBWhGmnlgHWBK8tH5JmkqcRVkU7rlR9B9XrD0tDKEro%3D",alt:"img"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username"),": The email username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password"),": The email account password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host"),": The server that hosts the email account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host Type"),": The type of protocol used on the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port"),": The port for connecting to the server. IMAP typically uses port 993 over SSL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Send Attachments"),": When turned on attachments are treated as separate messages, ie. if a message is delivered to the server with two attachments CX will process each attachment as a separate message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Send Message Body"),": When turned on CX will process the message body as a single message through the pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete Messages"),": POP3 will always delete messages as the protocol does not support changing the ",(0,i.kt)("em",{parentName:"li"},"read")," property. IMAP will mark messages asa read by default. Turn this property on to make IMAP delete messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use SSL"),": Most hosts require SSL. Turn this on to make CX contact the host with SSL enabled.")),(0,i.kt)("h2",{id:"polling-interval"},"Polling interval"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"needs picture"),"\nPolling interval dictates when files are picked from the Azure Storage account. The minimum interval allowed at this time is 60 seconds. You can specify intervals by typing in seconds."),(0,i.kt)("h2",{id:"retry"},"Retry"),(0,i.kt)("p",null,"Since CX reaches out and picks up files when using the Email inbound adapter, retry is handled by the CX framework. If a fault happens when the ",(0,i.kt)("a",{parentName:"p",href:"#polling-interval"},"polling interval")," hits, the integration will be marked for execution at the next interval, which is after 60 seconds. This means that even if you have the polling interval set to trigger hourly or event daily, CX will try to execute the configuration every minute util it succeeds. This does not happen if the message is already picked up however since CX cant be sure the message is possible to requeue on the external message. The message will then be sent to catastrophic retry as described in the ",(0,i.kt)("a",{parentName:"p",href:"/Retry"},"Retry Page"),"."))}d.isMDXComponent=!0}}]);
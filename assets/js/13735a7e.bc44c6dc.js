"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[54],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2884:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},l="Azure Storage Outbound Adapter",u={unversionedId:"Adapters/Inbound/azure-storage",id:"Adapters/Inbound/azure-storage",title:"Azure Storage Outbound Adapter",description:"ConnXio (CX) lets customers provide messages to the CX pipeline by configuring connections to Azure Storage accounts. We currently support messages as blobs or files. This page details how to configure Azure storage connections and what functionality is available by delivering files through this medium.",source:"@site/docs/Adapters/Inbound/azure-storage.md",sourceDirName:"Adapters/Inbound",slug:"/Adapters/Inbound/azure-storage",permalink:"/docusaurus-demo/Adapters/Inbound/azure-storage",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Adapters/Inbound/azure-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The ConnXio Api",permalink:"/docusaurus-demo/Adapters/Inbound/api"},next:{title:"Email Inbound Adapter",permalink:"/docusaurus-demo/Adapters/Inbound/email"}},c={},p=[{value:"Limitations",id:"limitations",level:2},{value:"Configuring Azure Storage connections",id:"configuring-azure-storage-connections",level:2},{value:"Retry",id:"retry",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-storage-outbound-adapter"},"Azure Storage Outbound Adapter"),(0,i.kt)("p",null,"ConnXio (CX) lets customers provide messages to the CX pipeline by configuring connections to Azure Storage accounts. We currently support messages as ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/storage/blobs/"},"blobs")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-create-file-share?tabs=azure-portal"},"files"),". This page details how to configure Azure storage connections and what functionality is available by delivering files through this medium."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Azure Storage provides a modern interface for file and message transfer which is robust, fast and cheap. By leveraging the Azure infrastructure Microsoft has turned storage into a powerhouse in and of itself which CX takes full advantage of. Essentially this means that there are very few limitations on the technology itself, this enables CX to handle an almost unlimited amount of messages, different types of files and metadata through the Azure Storage technology. The only real limitation is the CX-wide limit of 100mb per message."),(0,i.kt)("h2",{id:"configuring-azure-storage-connections"},"Configuring Azure Storage connections"),(0,i.kt)("p",null,'To configure CX to start picking your messages select the Azure Storage option in "Inbound Connection" shape:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Azure%20storage%20menu.png?sv=2020-04-08&st=2021-10-27T11%3A56%3A53Z&se=2040-10-28T12%3A56%3A00Z&sr=b&sp=r&sig=S%2FltUS0elTLePVt5Aq536uNkr7Pa9XcY8ovTFJLUhmc%3D",alt:"img"})),(0,i.kt)("p",null,"A new window pops up, we will be using ",(0,i.kt)("em",{parentName:"p"},"blob")," communication as an example. Add data as seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Azure%20storage%20inbound%20config.png?sv=2020-08-04&st=2022-01-11T09%3A41%3A50Z&se=2040-01-12T09%3A41%3A00Z&sr=b&sp=r&sig=z9%2BSZHX%2FJBl4eTScIlSkg3mxnlPEVwXIKIHehVv0hYs%3D",alt:"img"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Polling Interval"),": Dictates when files are picked from the Azure Storage account. The minimum interval allowed at this time is 60 seconds. You can specify intervals by typing in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage type"),": Select storage type to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connection String Security Configuration"),": Reference to the ",(0,i.kt)("a",{parentName:"li",href:"/Security/Security-Configurations"},"Security Configuration")," that contains the relevant connection properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Container Name"),": The name of the container. This container must exist before CX start picking messages. We will not create it for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Directory"),": Specifies which directory CX should target for file pickup. If this is kept blank the root directory is used (Azure Storage ",(0,i.kt)("em",{parentName:"li"},"File Share")," only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batch Size"),": The number of messages to in a single thread. The lower the number the more threads are spawned, ie. 1000 messages are stored on blob, batch size is set to 100, CX reads that there are 1000 files and spawns 10 parallel threads for pickup and processing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"File Pick Limit"),": The amount of files to pick per run of the engine. If polling interval is set to 1 minute and this variable is set to 1 message, CX will pick 1 message per minute. This variable is primarily used to slow down message processing to not kill receiving services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"File Pick Sort Type"),": Changed the way files are sorted when ",(0,i.kt)("strong",{parentName:"li"},"File Pick Limit")," is used. Has no effect without ",(0,i.kt)("strong",{parentName:"li"},"File Pick Limit"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ignore Inbound MetaData"),": If enabled, the adapter will ignore all blob related metadata, such as interchangeId.")),(0,i.kt)("h2",{id:"retry"},"Retry"),(0,i.kt)("p",null,"Since CX reaches out and picks up files when using Azure Storage, retry is handled by the CX framework. If a fault happens when the ",(0,i.kt)("a",{parentName:"p",href:"#polling-interval"},"polling interval")," hits, the integration will be marked for execution at the next interval, which is after 60 seconds. This means that even if you have the polling interval set to trigger hourly or event daily, CX will try to execute the configuration every minute util it succeeds. This does not happen if the message is already picked up however since CX cant be sure the message is possible to requeue on the external storage. The message will then be sent to catastrophic retry as described in the ",(0,i.kt)("a",{parentName:"p",href:"/Retry"},"Retry Page"),"."))}d.isMDXComponent=!0}}]);
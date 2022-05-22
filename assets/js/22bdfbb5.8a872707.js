"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[8028],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={},u="Service Bus Outbound Adapter",l={unversionedId:"Adapters/Outbound/service-bus",id:"Adapters/Outbound/service-bus",title:"Service Bus Outbound Adapter",description:"ConnXio (CX) lets customers receive data from the CX pipeline by enqueueing it onto Azure Service Bus. This page details how to create an integration which sends messages to Azure Service Bus.",source:"@site/docs/Adapters/Outbound/service-bus.md",sourceDirName:"Adapters/Outbound",slug:"/Adapters/Outbound/service-bus",permalink:"/docusaurus-demo/Adapters/Outbound/service-bus",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Adapters/Outbound/service-bus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rest Outbound Adapter",permalink:"/docusaurus-demo/Adapters/Outbound/rest"},next:{title:"(S)FTP Outbound adapter",permalink:"/docusaurus-demo/Adapters/Outbound/sftp"}},c={},d=[{value:"Limitations",id:"limitations",level:2},{value:"Message transfer pattern",id:"message-transfer-pattern",level:2},{value:"Metadata on Bus, data as blob",id:"metadata-on-bus-data-as-blob",level:3},{value:"SasUri Only",id:"sasuri-only",level:4},{value:"Deafult contract",id:"deafult-contract",level:4},{value:"Pure Message Sending",id:"pure-message-sending",level:3},{value:"Configuring Service Bus message delivery",id:"configuring-service-bus-message-delivery",level:2},{value:"Retry",id:"retry",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"service-bus-outbound-adapter"},"Service Bus Outbound Adapter"),(0,s.kt)("p",null,"ConnXio (CX) lets customers receive data from the CX pipeline by enqueueing it onto ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"},"Azure Service Bus"),". This page details how to create an integration which sends messages to Azure Service Bus."),(0,s.kt)("h2",{id:"limitations"},"Limitations"),(0,s.kt)("p",null,"There are almost no limitations on Service Bus, it is in many ways the superior way to handle and transfer data in the cloud. We use Service Bus exclusively internally. Service Bus handles almost an unlimited amount of messages and can be scaled to fit your needs. There are some patterns you should be familiar with when using Service Bus, if you opt out of these patterns be aware that you might end up hitting limitations of your own making."),(0,s.kt)("p",null,"The Service Bus adapter is limited to using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions"},"Topics")," currently. If you need Queue functionality or other changes please contact your CX representative."),(0,s.kt)("h2",{id:"message-transfer-pattern"},"Message transfer pattern"),(0,s.kt)("p",null,"We support two patterns when sending data to external Service Bus from the CX pipeline:"),(0,s.kt)("h3",{id:"metadata-on-bus-data-as-blob"},"Metadata on Bus, data as blob"),(0,s.kt)("p",null,"This pattern is by far the most secure, robust, fast and reliable way to use Service Bus, and entails CX pushing metadata messages to Service Bus that contain a reference to a file hosted in a way that lets you retrieve it by Rest. The easiest and most cost efficient way to do this is by using AzureStorage Blob which is why CX includes a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"},"SasUri")," within the output message."),(0,s.kt)("p",null,"There are multiple advantages to using this metadata pattern instead of supplying the data inside the Service Bus. ",(0,s.kt)("strong",{parentName:"p"},"Firstly")," there are limits on how much data Service Bus allows on the bus which suggests that adding data directly is not recommended. ",(0,s.kt)("strong",{parentName:"p"},"Secondly")," a blob framework is much more robust and cost efficient at storing data than a Queue infrastructure. ",(0,s.kt)("strong",{parentName:"p"},"Thirdly")," you can scale down your service bus since large messages will not be hogging your message unit capacity. There are even more benefits to using metadata on bus but these are easily accessible on the internet and in Microsoft documentation."),(0,s.kt)("h4",{id:"sasuri-only"},"SasUri Only"),(0,s.kt)("p",null,"The messages you receive on the configured Service Bus is simply the SasUri and nothing more and looks something like this:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"https://cx.blob.core.windows.net/container/Azure%20storage%20menu.png?sv=2020-04-08&st=2021-10-27T11%3A56%3A53Z&se=2040-10-28T12%3A56%3A00Z&sr=b&sp=r&sig=S%2FltxxxlTLePVt5xxxx6uNkr7Pa9XcY8ovTFJxxx%3D")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The InterchangeId is provided in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/servicebus/message-headers-and-properties#message-properties"},"UserProperties")," with the key ",(0,s.kt)("inlineCode",{parentName:"p"},"InterchangeId"),".")),(0,s.kt)("p",null,"When a message arrives on your Service Bus all you need to do to precess it is to pick up the content with the SasUri and the InterchangeId from UserProperties (if needed for further logging or other uses)"),(0,s.kt)("h4",{id:"deafult-contract"},"Deafult contract"),(0,s.kt)("p",null,"The default contract is the same as the one used when sending messages to the inbound Service Bus adapter.The messages you will receive on your Service Bus is a JSON and looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SasUri": "***********************************",\n    "FileName": "file.json",\n    "InterchangeId": "f681382-****-567c-81d8-****""\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"SasUri"),": The uri that hosts the actual message data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"FileName"),": A generated file name for det message."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"InterchangeId"),": If needed for further logging or other uses.")),(0,s.kt)("h3",{id:"pure-message-sending"},"Pure Message Sending"),(0,s.kt)("p",null,"This pattern involves sending the data itself through Service Bus. This is not recommended and should only be done is special cases where handling blobs are impossible or contributes to higher risk. A message sent with pure messaging is composed of data only, to be more specific you send the data ",(0,s.kt)("em",{parentName:"p"},"as the service bus message"),". You will handle the Service Bus message itself as the content when it arrives in your handler."),(0,s.kt)("h2",{id:"configuring-service-bus-message-delivery"},"Configuring Service Bus message delivery"),(0,s.kt)("p",null,'To configure CX to start sending data to your Service Bus select the "Service Bus" option in the "Outbound Connections" shape:'),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Outbound%20adapter%20menu.PNG?sv=2020-08-04&st=2021-11-08T12%3A31%3A58Z&se=2040-11-09T12%3A31%3A00Z&sr=b&sp=r&sig=a6JtbEkJT287%2BgNvJN3pR5fpONaBX6eyXHeDQS%2FD5cs%3D",alt:"img"})),(0,s.kt)("p",null,"A new window pops up. Add data as seen below:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Service%20bus%20outbound%20config.png?sv=2020-08-04&st=2022-05-02T11%3A59%3A06Z&se=2040-05-03T11%3A59%3A00Z&sr=b&sp=r&sig=cYMR8m3f2ugTGubirtHz%2BIPtARJL1YDavcCkL5MlUH8%3D",alt:"img"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Connection String Security Configuration"),": Reference to the ",(0,s.kt)("a",{parentName:"li",href:"/Security/Security-Configurations"},"Security Configuration")," that contains the relevant connection properties."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Adapter Name"),": The logical name of the adapter. This is shown in the configuration view on close."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Topic Name"),": The name of the topic."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Service bus message label"),": The label to be added to the service bus message."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Use Pure Message Sending"),": Enables the ",(0,s.kt)("a",{parentName:"li",href:"#pure-message-sending"},"Pure Message Sending Pattern"),". If kept unchecked one of the ",(0,s.kt)("a",{parentName:"li",href:"#metadata-on-bus-data-as-blob"},"Metadata on Bus, data as blob")," patterns is used."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Service bus message body contract"),": Specifies witch of the ",(0,s.kt)("a",{parentName:"li",href:"#metadata-on-bus-data-as-blob"},"Metadata on Bus, data as blob")," patterns is used."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Send Acknowledgement"),": Is explained ",(0,s.kt)("a",{parentName:"li",href:"/Adapters/Outbound/Acknowledgment"},"here"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Duplicate Detection"),": Terminate the message if the exact same has been processed any time the last five days."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Termination Status"),": The status used for logged in when a duplicate is terminated. If left empty, the status will default to 'Terminated'")),(0,s.kt)("h2",{id:"retry"},"Retry"),(0,s.kt)("p",null,"Retry on all outbound adapters is currently handled by the linear retry described on the ",(0,s.kt)("a",{parentName:"p",href:"/Retry"},"Retry page"),". This may change in the future as we are looking into enabling backoff retry."))}m.isMDXComponent=!0}}]);
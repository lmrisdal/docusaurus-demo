"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5693],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return h}});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(s),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return s?n.createElement(m,o(o({ref:t},c),{},{components:s})):n.createElement(m,o({ref:t},c))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<i;u++)o[u]=s[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},4798:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=s(7462),r=s(3366),i=(s(7294),s(3905)),o=["components"],a={slug:"/use-cases/persisting-state"},l="Persisting State",u={unversionedId:"Use Cases/persisting-state",id:"Use Cases/persisting-state",title:"Persisting State",description:"This page is incomplete and should not be used.",source:"@site/docs/Use Cases/persisting-state.md",sourceDirName:"Use Cases",slug:"/use-cases/persisting-state",permalink:"/docusaurus-demo/use-cases/persisting-state",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Use Cases/persisting-state.md",tags:[],version:"current",frontMatter:{slug:"/use-cases/persisting-state"},sidebar:"tutorialSidebar",previous:{title:"Persistent Orchestration",permalink:"/docusaurus-demo/use-cases/persistent-orchestration"},next:{title:"Core Concepts",permalink:"/docusaurus-demo/core-concepts"}},c={},p=[{value:"The Case",id:"the-case",level:2},{value:"Setting up the integration",id:"setting-up-the-integration",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"persisting-state"},"Persisting State"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This page is incomplete and should not be used.")),(0,i.kt)("p",null,"There are many scenarios where you might want to persist state when integrating systems. This page will describe and handle a common scenario where persistent state is required, it will also describe the pitfalls and discuss the complexity introduced when using ConnXio (CX) with persisted state."),(0,i.kt)("h2",{id:"the-case"},"The Case"),(0,i.kt)("p",null,"To illustrate the use case we will be using a specific example. For persistent orchestration we have selected the following case:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Use%20Case%20-%20Persisting%20State.png?sv=2020-08-04&st=2021-11-26T13%3A01%3A21Z&se=2040-11-27T13%3A01%3A00Z&sr=b&sp=r&sig=fDejCqVC3m1QVOZNiRYq9RO%2Fb4uPpvh0%2F%2BaJrtvR5kI%3D",alt:"img"})),(0,i.kt)("p",null,"As you can see in the diagram above we will be moving data from an Api serving user objects to an external recruiting tool. CX will get messages from the inbound Api every hour. The user Api is master for the user data and users can and will be deleted, but the user Api does not have soft delete. This means that the receiving recruitment tool can't know if a user has been deleted or not without cleaning out all entries that are not received by CX. If we choose to make the recruitment system delete all non-received events we can potentially delete users that fail or are delayed for some reason either in the User Api or in CX itself. This can cause users to loose access or loss of system specific settings created in the recruitment Api relating to the user. To solve this problem we want CX to remember what users were sent last time and, instead of not sending information about deleted users, we make CX actively send delete messages for the deleted users. If your receiving Api does not support delete events or similar mechanisms you can use the ",(0,i.kt)("a",{parentName:"p",href:"/Adapters/Outbound/Acknowledgment"},"acknowledgements")," functionality in tandem with alerting on log events to handle failures manually or automatically in the receiving system. For this use case we will assume that the receiving system has a delete endpoint."),(0,i.kt)("h2",{id:"setting-up-the-integration"},"Setting up the integration"),(0,i.kt)("p",null,"We set up the integration in the portal by configuring the inbound adapter to use the Rest inbound type:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Rest%20Inbound%20Config.png?sv=2020-08-04&st=2021-11-04T11%3A54%3A52Z&se=2040-11-05T11%3A54%3A00Z&sr=b&sp=r&sig=A2BUYolZuVJZ08rvAFV91MXGTRtGP%2F7Ybns0gjELH3o%3D",alt:"img"})),(0,i.kt)("p",null,"After that we configure the outbound adapter to use rest as well, but this time we configure the adapter to use Acknowledgements (ack) to add files to blob. It's the ack function which lets us force CX to hold state. We need to configure the usage of said state as a data collection as well which is explained later. The configuration for the outbound adapter should look something like this:"),(0,i.kt)("p",null,"Outbound Adapter:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Use%20Case%20State-%20Outbound-Rest.png?sv=2020-08-04&st=2021-11-29T12%3A50%3A55Z&se=2040-11-30T12%3A50%3A00Z&sr=b&sp=r&sig=stFOJDP17uAhAxd7a8NJwvXlnE2ru3m2VbbDJCT1zDo%3D",alt:"img"})),(0,i.kt)("p",null,"Ack:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Use%20Case%20State%20Ack.png?sv=2020-08-04&st=2021-11-29T12%3A43%3A54Z&se=2040-11-30T12%3A43%3A00Z&sr=b&sp=r&sig=rV06Ki%2FV2Y9YLDlzegbYcKcQQ6d9VDTPRz%2Fjy1zH7TI%3D",alt:"img"})),(0,i.kt)("p",null,"There are several points to note here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The rest communication is unchanged from non persisted state configuration. We send the messages as we would in any Rest sync operation."),(0,i.kt)("li",{parentName:"ol"},'The magic happens in the Ack functionality. The ack is sent only if a message is successfully received by the receiving system, this is ensured by setting the "Send Negative Acknowledgement" to the off position. '),(0,i.kt)("li",{parentName:"ol"},'The message body of the Ack request is the message content itself. This is ensured implicitly by not setting a value for the "Code Acknowledgement Map". This is important as this is the value we need for the second part of the case where we refer to the persistent store.'),(0,i.kt)("li",{parentName:"ol"},"The Url specified in the ack refers to a blob container and a filename based on the userId. This is very important since we need to be able to get the same previous information for the user.")))}h.isMDXComponent=!0}}]);
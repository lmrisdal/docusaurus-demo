"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1475],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},c="Batching",l={unversionedId:"Transformation/batching",id:"Transformation/batching",title:"Batching",description:"ConnXio (CX) gives customers the ability to batch messages into larger single units. We do this by creating a bucket where messages are queued for a set interval until they are picked up, run through a code mapping and then sent as a single message through the pipeline. There are certain limits to batching functionality that will be explained on this page as well the process of batching itself.",source:"@site/docs/Transformation/batching.md",sourceDirName:"Transformation",slug:"/Transformation/batching",permalink:"/Transformation/batching",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Transformation/batching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration Account Mapping",permalink:"/Transformation/Integration Account/mapping"},next:{title:"Code Components",permalink:"/Transformation/code-components"}},u={},m=[{value:"Limitations",id:"limitations",level:2},{value:"Creating batching code components",id:"creating-batching-code-components",level:2},{value:"Retry",id:"retry",level:2}],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"batching"},"Batching"),(0,i.kt)("p",null,"ConnXio (CX) gives customers the ability to batch messages into larger single units. We do this by creating a bucket where messages are queued for a set interval until they are picked up, run through a ",(0,i.kt)("a",{parentName:"p",href:"/Transformation/code-components"},"code mapping")," and then sent as a single message through the pipeline. There are certain limits to batching functionality that will be explained on this page as well the process of batching itself."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Batching entails waiting for messages within a set interval and then transforming said messages into a single unit before processing that unit through the CX pipeline")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"There are certain limits imposed upon the batching functionality to not overwhelm the system. These boundaries are fluent and subject to change in the future. As of now the following limits are in effect:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"MaxMessageBatchCount is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")),(0,i.kt)("li",{parentName:"ol"},"ConnXio only supports messages below ",(0,i.kt)("inlineCode",{parentName:"li"},"100mb")," (see ",(0,i.kt)("a",{parentName:"li",href:"/adapters/inbound/azure-storage#Limitations"},"Integration limitations"),")")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MaxMessageBatchCount")," is a variable that governs how many messages are possible to batch into a single message. If the bucket containing messages is larger than 1000 messages before the batching interval triggers then one message will be created per 1000 messages in the bucket. To use an example:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"2300 messages are present in the bucket. The interval fires. Three files are created, the first and second file contains 1000 batched messages, the third file contains 300 messages.")),(0,i.kt)("p",null,"This limitation is in place for a number of reasons, the first being that we want to force users to not create files too big for CX to handle. The seconds reason is that each batch is given its own set of resources and currently these resources have their limit set to not create files that will overwhelm external and internal systems. We do have future plans to support large files above 100mb, contact us for more information."),(0,i.kt)("h2",{id:"creating-batching-code-components"},"Creating batching code components"),(0,i.kt)("p",null,"When implementing batching into your integration the first step is to create the code that joins your messages together into a cohesive whole. This is done in more or less the same way as ",(0,i.kt)("a",{parentName:"p",href:"/Transformation/Code-Components"},"map code components")," but with a few key differences."),(0,i.kt)("p",null,"Firstly you need to create the batching code itself, see the map components page for a simple rundown of the process, but instead of using the boiler plate detailed for maps you use the one detailed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Initialize\n{\n    /// <summary>\n    /// Method name must be Batch and class name Initialize\n    /// </summary>\n    /// <param name="messages">A list of the messages picked from the bucket in bytes</param>\n    /// <param name="encoding">Added mostly for backwards compatibility, is always utf-8</param>\n    /// <returns></returns>\n    public string Batch(List<byte[]> messages, Encoding encoding)\n    {\n        var msgIns = new List<MsgIn>();\n\n        //Make list of objects instead of bytes\n        foreach (var message in messages)\n        {\n            msgIns.Add(JsonConvert.DeserializeObject<MsgIn>(encoding.GetString(message)));\n        }\n\n        //Create new outbound message\n        var msgOut = new MsgOut();\n\n        //Add content to new message\n        msgOut.Type = msgIns[0].Type;\n        msgOut.Values = new List<string>();\n\n        foreach (var msg in msgIns)\n        {\n            msgOut.Values.Add(msg.Value);\n        }\n\n        //Return message as string\n        return JsonConvert.SerializeObject(msgOut);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upload the component")," by using the methods described on the ",(0,i.kt)("a",{parentName:"p",href:"/Transformation/Code-Components"},"code components page"),". Remember to choose the ",(0,i.kt)("em",{parentName:"p"},"batching")," type."),(0,i.kt)("h2",{id:"retry"},"Retry"),(0,i.kt)("p",null,"Batching has multiple retry patterns that differ based on which step of the batching process that fails. If the process fails on transient errors before running the batching code component the system puts messages back in queue and tries again 60 seconds later. If the failure is happens after running the batching code the algorithm tries to send the message multiple times with increasing delay until the message is scheduled for retry through the ",(0,i.kt)("a",{parentName:"p",href:"/Retry"},"disaster pipeline"),"."),(0,i.kt)("p",null,"Retry can end up sending smaller files than anticipated. If you experience problems like this, your logging provider should have received warnings about the fault, if not please contact your representative."))}h.isMDXComponent=!0}}]);
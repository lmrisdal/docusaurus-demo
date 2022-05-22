"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7114],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9596:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="Variable Replacement",p={unversionedId:"Transformation/variable-replacement",id:"Transformation/variable-replacement",title:"Variable Replacement",description:"- Variable Replacement",source:"@site/docs/Transformation/variable-replacement.md",sourceDirName:"Transformation",slug:"/Transformation/variable-replacement",permalink:"/docusaurus-demo/Transformation/variable-replacement",draft:!1,editUrl:"https://github.com/lmrisdal/docusaurus-demo/tree/main/docs/Transformation/variable-replacement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Splitting",permalink:"/docusaurus-demo/Transformation/splitting"},next:{title:"Use Cases",permalink:"/docusaurus-demo/use-cases"}},u={},c=[{value:"Query language",id:"query-language",level:2},{value:"Quick reference",id:"quick-reference",level:3},{value:"Use cases",id:"use-cases",level:2},{value:"Inbound adapters",id:"inbound-adapters",level:3},{value:"REST Fetch",id:"rest-fetch",level:4},{value:"Data collection",id:"data-collection",level:3},{value:"Logging",id:"logging",level:3},{value:"Outbound adapters",id:"outbound-adapters",level:3},{value:"Azure Storage",id:"azure-storage",level:4},{value:"REST Push",id:"rest-push",level:4},{value:"SFTP Push",id:"sftp-push",level:4}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"variable-replacement"},"Variable Replacement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#variable-replacement"},"Variable Replacement"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query-language"},"Query language"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#quick-reference"},"Quick reference")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-cases"},"Use cases"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inbound-adapters"},"Inbound adapters"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rest-fetch"},"REST Fetch")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#data-collection"},"Data collection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#logging"},"Logging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#outbound-adapters"},"Outbound adapters"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#azure-storage"},"Azure Storage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rest-push"},"REST Push")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sftp-push"},"SFTP Push"))))))))),(0,l.kt)("p",null,"At various stages through ConnXio (CX) you can use the ",(0,l.kt)("em",{parentName:"p"},"variable replacement")," functionality to access metadata and message content to enrich everything from URL's to file names and logging options. This page details where and how to use variable replacement."),(0,l.kt)("h2",{id:"query-language"},"Query language"),(0,l.kt)("p",null,"Variable replacement uses a simple query language to function. The following table contains all available keywords (more may be added later):"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example JSON file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "node1": \n    { \n        "array": \n        [ \n            {"element1": "Value1"},\n            {"element2": "Value2"}\n        ],\n        "parentElement": "ParentValue"\n    } \n}    \n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example XML file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<note>\n    <to>You</to>\n    <from>Me</from>\n    <heading>Integration</heading>\n    <body>Use ConnXio!</body>\n</note>\n")),(0,l.kt)("p",null,"Metadata is explained ",(0,l.kt)("a",{parentName:"p",href:"/Metadata"},"here")," but for reference we have copied the structure here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MetaData\n{\n    public string InterchangeId { get; set; }\n    public string InboundFileName { get; set; } = "filename";\n    public string OutboundFileName { get; set; }\n    public DateTime Started { get; set; }\n    public Dictionary<string, string> DataCollection { get; set; }\n    public Dictionary<string, string> UserDefinedProperties { get; set; }\n    public string ConfigCorrelationId { get; set; }\n    public string TransformationBlobName { get; set; }\n    public string OutboundBlobName { get; set; }\n    public string InboundAdapter { get; set; }\n    public string InboundEndpoint { get; set; }\n    public string OutboundAdapter { get; set; }\n    public string OutboundEndpoint { get; set; }\n    public string TransactionType { get; set; }\n    public int ManualResendCount { get; set; }\n}\n')),(0,l.kt)("h3",{id:"quick-reference"},"Quick reference"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Variable value"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaced with the name of the file if available, if not then defaults to empty string. Does not include the extension."),(0,l.kt)("td",{parentName:"tr",align:null},"myfilename.txt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{filename}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/myfilename"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guid"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaced with totally random GUID"),(0,l.kt)("td",{parentName:"tr",align:null},"4ec6cc49-6d66-4a2a-b0ac-c5ab942cbdab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{guid}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/4ec6cc49-6d66-4a2a-b0ac-c5ab942cbdab"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interchange"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaced with the interchange id that is either generated as a guid when the message hits CX or specified by the customer on entry"),(0,l.kt)("td",{parentName:"tr",align:null},"myid-1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{interchange}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/myid-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},'Searches the file for the hierarchy specified after the "file:" keyword e.g. "{file:rootNode.secondsNode.thirdNode}". This works for JSON and XML. In json you can also specify arrays using the bracket syntax like this; "file:rootNode.array',"[0]",'.node}"'),(0,l.kt)("td",{parentName:"tr",align:null},"See example json and xml above"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON: ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{file:node1.array[1].element2}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/Value2}")," ",(0,l.kt)("br",null)," ",(0,l.kt)("br",null)," XML: ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{file:note.heading}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/integration"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"Accesses metadata, which is essentially a JSON object which can be accessed in the same way as JSON files as described above e.g. {metadata:rootNode.secondNode.thirdNode}."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("em",{parentName:"td"},"Metadata")," structure above"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{metadata:InboundFileName}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/filename"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datacollection, datacollection#json"),(0,l.kt)("td",{parentName:"tr",align:null},"Access the data collection key/value set. This set is populated by the ",(0,l.kt)("a",{parentName:"td",href:"/Transformation/Data-Collection"},"datacollection transformation"),'. Use the key set in the configured data collection to select the corresponding value. If the value is JSON parsable you can add the "#json" suffix to target JSON nodes.'),(0,l.kt)("td",{parentName:"tr",align:null},'Key is "mykey" and value is the example JSON file above.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{datacollection#json:mykey.node1.array[1].element1}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/value1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userdefinedproperties, userdefinedproperties#json"),(0,l.kt)("td",{parentName:"tr",align:null},"Access the user-defined properties key/value set. This set is populated from within ",(0,l.kt)("a",{parentName:"td",href:"/Transformation/code-components"},"code mapping"),'. Use the key set from within the code mapping to select the corresponding value. If the value is JSON parsable you can add the "#json" suffix to target JSON nodes.'),(0,l.kt)("td",{parentName:"tr",align:null},'Key is "mykey" and value is the example JSON file above.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/{userdefinedproperties#json:mykey.node1.array[1].element1}")," becomes ",(0,l.kt)("inlineCode",{parentName:"td"},"http://www.myapi.com/value1"))))),(0,l.kt)("h2",{id:"use-cases"},"Use cases"),(0,l.kt)("p",null,"Variable replacement can be used in various ways to simulate orchestration or to dynamically change endpoints or addresses. Following is a list of where variable replacement can be used:"),(0,l.kt)("h3",{id:"inbound-adapters"},"Inbound adapters"),(0,l.kt)("h4",{id:"rest-fetch"},"REST Fetch"),(0,l.kt)("p",null,"You can use variable replacement on the ",(0,l.kt)("a",{parentName:"p",href:"/Adapters/Inbound/Rest"},"inbound REST adapter")," URL field like shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Http%20Inbound%20Variable%20Incection.PNG?sv=2020-04-08&st=2021-09-19T11%3A02%3A00Z&se=2037-10-20T11%3A02%3A00Z&sr=b&sp=r&sig=rfVbo%2BwsjzX7XfQqp09vLfCqutI3riI1X1a0oEgOjsQ%3D",alt:"img"})),(0,l.kt)("p",null,"However, since most of the variables don't make sense so early in the pipeline, only metadata actually works. An example can be seen above."),(0,l.kt)("h3",{id:"data-collection"},"Data collection"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Transformation/Data-Collection"},"Data collection")," supports all forms of variable replacement. Below you can see a pretty complex example that calculates the route based on the file and the ",(0,l.kt)("a",{parentName:"p",href:"/Core-Concepts"},"InterchangeId"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Datacollection%20variable%20replacement.PNG?sv=2020-04-08&st=2021-09-19T11%3A12%3A00Z&se=2040-10-20T11%3A12%3A00Z&sr=b&sp=r&sig=2gUVxSSnsXFWskM5v9tr56kzv4OG6iBdmG9v%2FYG3r1c%3D",alt:"img"})),(0,l.kt)("h3",{id:"logging"},"Logging"),(0,l.kt)("p",null,"You can use variable replacement to change the log events to use custom values. The following fields support variable replacement:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The webhook URL"),(0,l.kt)("li",{parentName:"ul"},"Transaction Tag")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Logging%20variable%20replacement.PNG?sv=2020-04-08&st=2021-09-19T11%3A39%3A00Z&se=2040-10-20T11%3A39%3A00Z&sr=b&sp=r&sig=IhzISXiKkcu5SWfEr3Wa0ShXRtMrTuKsMv0U7NhzPFE%3D",alt:"img"})),(0,l.kt)("h3",{id:"outbound-adapters"},"Outbound adapters"),(0,l.kt)("h4",{id:"azure-storage"},"Azure Storage"),(0,l.kt)("p",null,"Blob and azure file outbound adapters support variable replacement on the outbound blob and file name:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/Azure%20storage%20variable%20replacement.PNG?sv=2020-04-08&st=2021-09-20T08%3A21%3A00Z&se=2040-10-21T08%3A21%3A00Z&sr=b&sp=r&sig=d%2FLLapJMSUoE0botbQz02jlv46IaHwqxL4gaN5YMeWI%3D",alt:"img"})),(0,l.kt)("h4",{id:"rest-push"},"REST Push"),(0,l.kt)("p",null,"This functions the same way as the ",(0,l.kt)("a",{parentName:"p",href:"#rest-fetch"},"outbound REST adapter"),", but on outbound you have access to all file and data-collection variables as well."),(0,l.kt)("h4",{id:"sftp-push"},"SFTP Push"),(0,l.kt)("p",null,"Variable replacement can be used on the output file name like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cmhpictsa.blob.core.windows.net/pictures/SFTP%20out%20variable%20replacement.PNG?sv=2020-04-08&st=2021-09-20T08%3A28%3A00Z&se=2040-10-21T08%3A28%3A00Z&sr=b&sp=r&sig=AH%2FsrgpSvKhMF2FWhM%2FxylxjgEr69trGsnwGW43as1w%3D",alt:"img"})))}d.isMDXComponent=!0}}]);
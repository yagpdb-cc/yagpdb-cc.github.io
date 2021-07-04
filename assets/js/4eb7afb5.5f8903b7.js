(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[4634],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4652:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o={sidebar_position:1,title:"Giveaway Package (Basic Version)",sidebase_label:"Basic Giveaway Read Me"},s={unversionedId:"giveaway/basic/basicREADME",id:"giveaway/basic/basicREADME",isDocsHomePage:!1,title:"Giveaway Package (Basic Version)",description:"This is a giveaway package for YAGPDB bot consisting of 2 Custom Commands (CCs). Both must be saved for it to work as expected.",source:"@site/docs/giveaway/basic/basicREADME.md",sourceDirName:"giveaway/basic",slug:"/giveaway/basic/basicREADME",permalink:"/giveaway/basic/basicREADME",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/giveaway/basic/basicREADME.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Giveaway Package (Basic Version)",sidebase_label:"Basic Giveaway Read Me"},sidebar:"tutorialSidebar",previous:{title:"X Word Story",permalink:"/funccs/xwordstory"},next:{title:"Basic Giveaway",permalink:"/giveaway/basic/basicgiveaway"}},l=[{value:"Sub-Commands (precede all commands by the prefix for YOUR server to invoke them):",id:"sub-commands-precede-all-commands-by-the-prefix-for-your-server-to-invoke-them",children:[]},{value:"ExecCC support:",id:"execcc-support",children:[]},{value:"Inbuilt syntax displayer:",id:"inbuilt-syntax-displayer",children:[]},{value:"Things which can be modified:",id:"things-which-can-be-modified",children:[]}],p={toc:l};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a giveaway package for YAGPDB bot consisting of 2 Custom Commands (CCs). Both must be saved for it to work as expected."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sub-commands-precede-all-commands-by-the-prefix-for-your-server-to-invoke-them"},"Sub-Commands (precede all commands by the prefix for YOUR server to invoke them):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"giveaway start <Time> [Prize]")),(0,r.kt)("p",{parentName:"li"},"Use: To start a new giveaway."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Time>")," It is specified as the amount of time after which giveaway winners will be announced or how long giveaway will be active.",(0,r.kt)("br",{parentName:"p"}),"\n","Format is (num)y(num)mo(num)w(num)d(num)h(num)m(num)s."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"eg: 1y7mo2w1d3h4m15s = 1 year 7 months 2 weeks 1 day 3 hours 4 minutes and 15 seconds.\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," must not contain spaces in between and use the mentioned format only i.e d not days for specifying days so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[Prize]")," A string which will contain the prize of the giveaway , can be multiple words."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Optional Flags:"),"  "),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"for specifying max number of participants( default is unlimited).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-w"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"for specifying number of winners ( default is 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel (ID/Mention)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"for specifying the channel for giveaway to take place ( default is current channel)")))),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(prefix)giveaway start 1d12h Ps4 Pro -p 50 -w 2 -c #giveaway-channel")," will start a giveaway in the #giveaway-channel which will remain active for 1 day 12 hours with max participants as 50 and max winners as 2.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"giveaway end <ID>"),"\nEnds a giveaway with specified ID and will announce the winners instantly. Will update giveaway announcement message."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ID is the long number which can be obtained using: ",(0,r.kt)("inlineCode",{parentName:"p"},"g list")," command and is also mentioned in the giveaway announcement embed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"giveaway cancel <ID>"),"\nCancels a giveaway with specified ID WITHOUT announcing winners. Will update giveaway announcement message."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ID is the long number which can be obtained using: ",(0,r.kt)("inlineCode",{parentName:"p"},"g list")," command and is also mentioned in the giveaway announcement embed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"giveaway list"),"\nLists all active giveaways with their IDs , Prize and Ending Time."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"execcc-support"},"ExecCC support:"),(0,r.kt)("p",null,"Code has inbuilt intuitive execCC support. ExecData for invoking command via execCC is simply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"giveaway <Sub_Command> <argument_1> <argument_2> ..."\n')),(0,r.kt)("h4",{id:"examples"},"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{{execCC $CCID_for_giveaway_cc nil 0 "-giveaway start 1d Coins -w 2"}}')," is equivalent to: ",(0,r.kt)("inlineCode",{parentName:"p"},"-giveaway start 1d Coins"),(0,r.kt)("br",{parentName:"p"}),"\n","Above will start a giveaway in the same channel in which execCC is invoked with a duration of 1 day with max winners: 2 and prize: Coins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{{execCC $CCID_for_giveaway_cc nil 0 "-givewaway end 11106339"}}')," is equivalent to: ",(0,r.kt)("inlineCode",{parentName:"p"},"-giveaway end 11106339"),(0,r.kt)("br",{parentName:"p"}),"\n","Above will end the giveaway with ID = ",(0,r.kt)("inlineCode",{parentName:"p"},"11106339")," immediately and announce the winners."))),(0,r.kt)("p",null,'So in general you can pass the ExecData as simply trigger followed by Sub-Command and arguments separated by a space " " all joined into a single string.'),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"inbuilt-syntax-displayer"},"Inbuilt syntax displayer:"),(0,r.kt)("p",null,"The main command also has an inbuilt syntax displayer which can be invoked by simply typing the trigger without any arguments."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"things-which-can-be-modified"},"Things which can be modified:"),(0,r.kt)("p",null,"The giveaway emoji is present as the Top of both commands and can be modified according to choice but remember!! needs to be modified for both commands (CCs)."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"this-custom-command-was-authored-and-developed-by-satty9361"},"This custom command was authored and developed by ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}c.isMDXComponent=!0}}]);
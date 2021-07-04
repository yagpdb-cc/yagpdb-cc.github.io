(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[9784],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8814:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={sidebar_position:1,title:"YAGPDB CAH Groups",sidebar_label:"CAH Read Me"},s={unversionedId:"funccs/YAGPDB-CAH-groups/CAH_ReadMe",id:"funccs/YAGPDB-CAH-groups/CAH_ReadMe",isDocsHomePage:!1,title:"YAGPDB CAH Groups",description:"Make groups of card packs for YAGPDB Cards Against Humanity games!",source:"@site/docs/funccs/YAGPDB-CAH-groups/CAH_ReadMe.md",sourceDirName:"funccs/YAGPDB-CAH-groups",slug:"/funccs/YAGPDB-CAH-groups/CAH_ReadMe",permalink:"/funccs/YAGPDB-CAH-groups/CAH_ReadMe",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/YAGPDB-CAH-groups/CAH_ReadMe.md",version:"current",sidebar_label:"CAH Read Me",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"YAGPDB CAH Groups",sidebar_label:"CAH Read Me"},sidebar:"tutorialSidebar",previous:{title:"Fun Commands",permalink:"/funccs/funccsREADME"},next:{title:"delgroup",permalink:"/funccs/YAGPDB-CAH-groups/delgroup"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Make groups of card packs for YAGPDB Cards Against Humanity games!"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"This folder contains a set of custom commands for use with YAGPD."),(0,a.kt)("p",null,"Each command has a corresponding text file. To set up the command system, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the Custom Commands section of the YAGPDB Control Panel (under ",(0,a.kt)("inlineCode",{parentName:"li"},"Core > Custom Commands")," in the left sidebar).  "),(0,a.kt)("li",{parentName:"ul"},"(Optional but recommended) Create a new custom command group (by clicking the plus icon next to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ungrouped")," tab). Set the desired permissions for this group of commands."),(0,a.kt)("li",{parentName:"ul"},"Hit ",(0,a.kt)("inlineCode",{parentName:"li"},"Save group settings"),"."),(0,a.kt)("li",{parentName:"ul"},"To add a new command:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hit ",(0,a.kt)("inlineCode",{parentName:"li"},"Create a new Custom Command")," (the other big green button at the bottom of the page)."),(0,a.kt)("li",{parentName:"ul"},"Pick a file from this repository to start with."),(0,a.kt)("li",{parentName:"ul"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Command (mention/cmd prefix)")," as the ",(0,a.kt)("inlineCode",{parentName:"li"},"Trigger type"),"."),(0,a.kt)("li",{parentName:"ul"},"Set the command's trigger to the name of the command you just chose."),(0,a.kt)("li",{parentName:"ul"},"Paste the contents of the file into the command's ",(0,a.kt)("inlineCode",{parentName:"li"},"Response")," box."),(0,a.kt)("li",{parentName:"ul"},"Some commands have configuration variables that you'll need to change. These will be near the top of the command, right after the description block."))),(0,a.kt)("li",{parentName:"ul"},"Repeat the above step for all other files in this repo (except this one, of course)."),(0,a.kt)("li",{parentName:"ul"},"Test it out! Some of the commands will provide usage tips if you do something wrong.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,'Since this is premade code, it should "just work." However, if things go wrong or don\'t work at all, try rechecking the permissions (for the group as well as the individual command), or re-paste the code into the ',(0,a.kt)("inlineCode",{parentName:"p"},"Response")," box. If all else fails, contact us in the YAGPDB ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/4udtcA5"},"support server"),"!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This custom command was authored by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LRitzdorf"},"@LRitzdorf"),"."))}c.isMDXComponent=!0}}]);
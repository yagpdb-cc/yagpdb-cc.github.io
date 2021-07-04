(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[9805],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6661:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={sidebar_position:3,title:"Choose"},i={unversionedId:"funccs/choose",id:"funccs/choose",isDocsHomePage:!1,title:"Choose",description:"This command makes YAGPDB choose a given item from the ones provided.",source:"@site/docs/funccs/choose.md",sourceDirName:"funccs",slug:"/funccs/choose",permalink:"/funccs/choose",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/choose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Choose"},sidebar:"tutorialSidebar",previous:{title:"Animal",permalink:"/funccs/animal"},next:{title:"Starboard V2",permalink:"/funccs/starboard/starboardReadMe"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command makes YAGPDB choose a given item from the ones provided."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"choose")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-choose <...items>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command makes YAGPDB choose a given item from the ones provided. Usage: `-choose <...items>`.\n\n    Recommended trigger: Command trigger with trigger `choose`.\n*/}}\n\n{{ if .CmdArgs }}\n    {{ .User.Mention }}, I choose **{{ index .CmdArgs (randInt (len .CmdArgs)) }}**!\n{{ else }}\n    Please provide some items for me to choose: for example, `-choose "go to sleep" "stay awake" no`.\n{{ end }}\n')))}u.isMDXComponent=!0}}]);
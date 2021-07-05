(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7167],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4376:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={sidebar_position:3,title:"endgame"},p=void 0,u={unversionedId:"funccs/YAGPDB-CAH-groups/endgame",id:"funccs/YAGPDB-CAH-groups/endgame",isDocsHomePage:!1,title:"endgame",description:"This command deletes a group of CAH card packs.",source:"@site/docs/funccs/YAGPDB-CAH-groups/endgame.md",sourceDirName:"funccs/YAGPDB-CAH-groups",slug:"/funccs/YAGPDB-CAH-groups/endgame",permalink:"/funccs/YAGPDB-CAH-groups/endgame",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/YAGPDB-CAH-groups/endgame.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"endgame"},sidebar:"tutorialSidebar",previous:{title:"delgroup",permalink:"/funccs/YAGPDB-CAH-groups/delgroup"},next:{title:"listgroups",permalink:"/funccs/YAGPDB-CAH-groups/listgroups"}},s=[],l={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command deletes a group of CAH card packs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"endgame")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-endgame")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command ends the current CAH game. It\'s really just an alias of `cah end`, added for syntactic consistency with `newgame` in this command set.\n\n    Usage: `-endgame`\n\n    Recommended trigger: `endgame`\n    Trigger type: Command\n\n    Credits:\n    LRitzdorf <https://github.com/LRitzdorf>\n*/}}\n\n{{ exec "cah end" }}\n')))}m.isMDXComponent=!0}}]);
(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[6819],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={sidebar_position:3,title:"AFK Leave Feed",sidebar_label:"leaveFeed"},s={unversionedId:"afk/leaveFeed",id:"afk/leaveFeed",isDocsHomePage:!1,title:"AFK Leave Feed",description:"This code is supposed to be put in the leave feed. It removes the AFK messages of users who have left the server.",source:"@site/docs/afk/leaveFeed.md",sourceDirName:"afk",slug:"/afk/leaveFeed",permalink:"/yagpdb-cc/afk/leaveFeed",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/afk/leaveFeed.md",version:"current",sidebar_label:"leaveFeed",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"AFK Leave Feed",sidebar_label:"leaveFeed"},sidebar:"tutorialSidebar",previous:{title:"AFK CC",permalink:"/yagpdb-cc/afk/afkcc"},next:{title:"Birthdays System",permalink:"/yagpdb-cc/birthday/birthdayREADME"}},c=[],l={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This code is supposed to be put in the leave feed. It removes the AFK messages of users who have left the server.",(0,o.kt)("br",{parentName:"p"}),"\n","It is optional, meaning that the other CCs in this system will work fine without it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Leave Message")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This code is supposed to be put in the leave feed. It removes the AFK messages of users who have left the server.\n    It is optional, meaning that the other CCs in this system will work fine without it.\n*/}}\n\n{{ dbDel .User.ID "afk" }}\n{{/* If you already have a leave message, you can put it here. */}}\n')))}p.isMDXComponent=!0}}]);
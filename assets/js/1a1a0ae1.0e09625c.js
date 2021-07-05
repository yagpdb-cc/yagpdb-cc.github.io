(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[5911],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:4,title:"Bookmark"},c=void 0,l={unversionedId:"utilities/bookmark",id:"utilities/bookmark",isDocsHomePage:!1,title:"Bookmark",description:"This custom commands functions similar to the reminder command, however it will send a DM instantly.",source:"@site/docs/utilities/bookmark.md",sourceDirName:"utilities",slug:"/utilities/bookmark",permalink:"/utilities/bookmark",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/utilities/bookmark.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Bookmark"},sidebar:"tutorialSidebar",previous:{title:"Big Emoji",permalink:"/utilities/bigemoji"},next:{title:"CC to File",permalink:"/utilities/cc2file"}},u=[],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This custom commands functions similar to the reminder command, however it will send a DM instantly.",(0,o.kt)("br",{parentName:"p"}),"\n","One could say like a private pin command. Nothing much, but quite handy I think  :)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A(?:-\\s?|<@!?204255221017214977>\\s*)b(?:ook)?m(?:ark)?(?:\\s+|\\z)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-bookmark <message>"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-bm <message>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This custom commands functions similar to the reminder command, however it will send a DM instantly.\n    One could say like a private pin command. Nothing much, but quite handy I think  :)\n\n    Usage:  \n        Bookmark <message>\n        bm <message>\n    \n    Recommended trigger and trigger type: RegEx trigger with `\\A(?:-\\s?|<@!?204255221017214977>\\s*)b(?:ook)?m(?:ark)?(?:\\s+|\\z)`\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n    License: MIT\n    Copyright: (c) 2021\n*/}}\n\n{{/* Actual Code - Only change this when you know what you are doing */}}\n{{$args := parseArgs 1 "```Bookmark <Message:Text>```\\nNot enough arguments passed." (carg "string" "Message")}}\n{{$note := $args.Get 0}}\n{{$link := (printf "https://discord.com/channels/%d/%d/%d" .Guild.ID .Channel.ID .Message.ID)}}\n{{$embed := (cembed\n    "title" "Bookmark"\n    "description" "You asked me to bookmark this for you:"\n    "fields" (cslice\n        (sdict "name" "Note" "value" (print $note) "inline" true)\n        (sdict "name" "Info" "value" (printf "Channel: <#%d>\\nSource: [Jump!](%s)"  .Channel.ID $link) "inline" true)\n    )\n)}}\n{{sendDM $embed}}\n{{addReactions "\ud83d\udceb"}}\n')))}p.isMDXComponent=!0}}]);
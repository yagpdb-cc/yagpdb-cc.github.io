(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},587:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:20,title:"X Word Story"},c=void 0,l={unversionedId:"funccs/xwordstory",id:"funccs/xwordstory",isDocsHomePage:!1,title:"X Word Story",description:"Setup:",source:"@site/docs/funccs/xwordstory.md",sourceDirName:"funccs",slug:"/funccs/xwordstory",permalink:"/funccs/xwordstory",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/xwordstory.md",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"X Word Story"},sidebar:"tutorialSidebar",previous:{title:"Wheel of Fortune",permalink:"/funccs/wheeloffortune"},next:{title:"Giveaway Package (Basic Version)",permalink:"/giveaway/basic/basicREADME"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the cc restrictions to only run in your x-word-story channel")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n","Just type the right amount of words and write a story together :)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    SETUP:\n    - Set the cc restrictions to only run in your x-word-story channel\n    - Set the trigger type to Regex and the trigger to: `\\A`\n\n    USAGE:\n    - Just type the right amount of words and write a story together :)\n\n    CREDITS: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* VARIABLES - You can edit these values */}}\n  {{/* Replace 3 with amount of words you want to be used in the x-word-story channel */}}\n    {{ $words := 3 }}\n  {{/* Roles to ignore, these could be your staff roles or just other exceptions */}}\n    {{ $ignored_roles := cslice 763447831829938176 764103587223044116 778952687986802698 764054381535821825 775003755842109440 }}\n\n  {{/* Responses: */}}\n    {{/* Message when they try to write twice in a row */}}\n      {{ $twice := "you can\'t write a story on your own \ud83d\ude09" }}\n\n\n{{/* CODE - Don\'t edit this part */}}\n{{ $r := true }}{{ range .Member.Roles }}{{ if in $ignored_roles . }}{{ $r = false }}{{ end }}{{ end }}\n{{ if $r }}\n  {{ $s := sdict }}{{ with (dbGet 20 "story-channel").Value }}{{ $s = sdict . }}{{ end }}\n  {{ if not $s }}\n    {{ dbSet 20 "story-channel" (sdict "l" 0) }}\n    {{ addReactions "\u2611" }}\n    {{ print .User.Mention ", <#" .Channel.ID "> is all set up as your " $words "-word-channel!" }}\n  {{ else if eq $s.l .User.ID }}\n    {{ addReactions "\ud83d\udc4e" }}\n    {{ deleteTrigger 1 }}\n    {{ print .User.Mention ", " $twice }}\n    {{ deleteResponse 5 }}\n  {{ else if not (reFind (print `\\A\\s*(?:[[:alpha:]]+\\s+){` (sub $words 1) `}[[:alpha:]]+\\s*\\z`) .Message.Content) }}\n    {{ addReactions "\u274c" }}\n    {{ deleteTrigger 1 }}\n    {{ print .User.Mention ", please use exactly **" $words "** words in this channel \ud83d\ude09" }}\n    {{ deleteResponse 5 }}\n  {{ else }}\n    {{ $s.Set "l" .User.ID }}\n    {{ $s.Set (str .User.ID) (add ($s.Get (str .User.ID)) 1) }}\n    {{ dbSet 20 "story-channel" $s }}\n  {{ end }}\n{{ end }}\n')))}d.isMDXComponent=!0}}]);
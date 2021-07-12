(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[530],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,g=u["".concat(m,".").concat(p)]||u[p]||c[p]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},591:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7294),i=["Administrator","ManageServer","ReadMessages","SendMessages","SendTTSMessages","ManageMessages","EmbedLinks","AttachFiles","ReadMessageHistory","MentionEveryone","VoiceConnect","VoiceSpeak","VoiceMuteMembers","VoiceDeafenMembers","VoiceMoveMembers","VoiceUseVAD","ManageNicknames","ManageRoles","ManageWebhooks","ManageEmojis","CreateInstantInvite","KickMembers","BanMembers","ManageChannels","AddReactions","ViewAuditLogs"],a=function(){return r.createElement("details",null,r.createElement("summary",null,r.createElement("strong",null,"Available permissions:")),r.createElement("ul",null,i.map((function(e){return r.createElement("li",null,r.createElement("code",null,e))}))))}},2086:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=t(591),s=["components"],m={title:"Nickname Moderation"},d=void 0,l={unversionedId:"moderation/nickname-moderation",id:"moderation/nickname-moderation",isDocsHomePage:!1,title:"Nickname Moderation",description:"Helps moderate inappropriate or unpingable nicknames.",source:"@site/docs/moderation/nickname-moderation.mdx",sourceDirName:"moderation",slug:"/moderation/nickname-moderation",permalink:"/moderation/nickname-moderation",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/nickname-moderation.mdx",version:"current",frontMatter:{title:"Nickname Moderation"},sidebar:"sidebar",previous:{title:"Lockdown",permalink:"/moderation/lockdown"},next:{title:"Slowmode",permalink:"/moderation/slowmode"}},c=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Helps moderate inappropriate or unpingable nicknames.\nInstead of having to change members' nicknames manually, staff members can moderate nicknames with a single command."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Due to limitations for editing nicknames in YAGPDB template scripting, the offending member's nickname will be edited once they send another message, not when you run the command."))),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".*"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Errors as custom command output")," disabled"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-modnick <user>")," - Changes the nickname of the user provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-unmodnick <user>")," - Changes the nickname of a user previously moderated using this command to its original value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-nick-numerreset")," - Makes the next moderated nickname start at ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$name"),(0,a.kt)("br",null),"\nWhat should be in front of the auto-generated nicknames when a nickname is moderated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$padding"),(0,a.kt)("br",null),"\nHow many digits the number should have.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Recommended value:")," Between 3 and 7.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$modPerms"),(0,a.kt)("br",null),"\nPermissions required to moderate nicknames."),(0,a.kt)(o.Z,{mdxType:"AvailablePermissionsDisplay"}))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../src/moderation/nickname_moderation.go.tmpl",file:"../../../src/moderation/nickname_moderation.go.tmpl"},'{{/*\n    Moderates nicknames.\n    See <https://yagpdb-cc.github.io/moderation/nickname-moderation> for more information.\n\n    Author: 2x2Master1 <https://github.com/2x2master1>\n*/}}\n\n{{/* Configurable values */}}\n{{$name := "Moderated Nickname"}}\n{{$padding := "5"}}\n{{$modPerms := "ManageMessages"}}\n{{/* End of configurable values */}}\n\n{{$mod := in (split (index (split (exec "viewperms") "\\n") 2) ", ") $modPerms}}\n{{$prefix := index (reFindAllSubmatches `Prefix of \\x60\\d+\\x60: \\x60(.+)\\x60` (exec "prefix")) 0 1}}\n{{if .CmdArgs}}\n    {{if eq (lower (index .CmdArgs 0)) (print $prefix "modnick")}}\n        {{if ge (len .CmdArgs) 2}}\n            {{if $mod}}\n            {{((userArg (index .CmdArgs 1)).String)}}\'s nickname will be moderated when they next send a message.\n            {{dbSet ((userArg (index .CmdArgs 1)).ID) "nick" 1}}\n            {{else}}\n            {{sendMessage nil (print .User.Mention ", you can\'t use that.")}}\n            {{end}}\n        {{else}}\n        {{sendMessage nil (print .User.Mention ", please provide a user!")}}\n        {{end}}\n    {{else if (eq (lower (index .CmdArgs 0)) (print $prefix "unmodnick"))}}\n        {{if ge (len .CmdArgs) 2}}\n            {{if $mod}}\n            {{((userArg (index .CmdArgs 1)).String)}}\'s nickname will not be moderated anymore.\n            {{dbSet ((userArg (index .CmdArgs 1)).ID) "nick" 0}}\n            {{else}}\n            {{sendMessage nil (print .User.Mention ", you can\'t use that.")}}\n            {{end}}\n        {{else}}\n        {{sendMessage nil (print .User.Mention ", please provide a user!")}}\n        {{end}}\n    {{else if (eq (lower (index .CmdArgs 0)) (print $prefix "nick-numberreset"))}}\n        {{if $mod}}\n        {{dbSet 0 "mnick" 0}}\n        {{addReactions "\u2705"}}\n        {{else}}\n        {{sendMessage nil (print .User.Mention ", you can\'t use that.")}}\n        {{end}}\n    {{else if eq (toInt ((dbGet .User.ID "nick").Value)) 1}}\n        {{if or (ne (reFind $name .Member.Nick) $name) (not .Member.Nick)}}\n        {{$db := dbIncr 0 "mnick" 1}}\n        {{$db2 := toInt ($db)}}\n        {{$v := printf (print "%0" $padding "d") $db2}}\n        {{editNickname (print $name " " $v)}}\n        {{end}}\n    {{end}}\n{{end}}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/2x2master1"},"@2x2Master1"),"."))}p.isMDXComponent=!0}}]);
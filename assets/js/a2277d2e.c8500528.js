(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6115],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7985:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:13,title:"Question of the Day"},l=void 0,c={unversionedId:"funccs/qotd",id:"funccs/qotd",isDocsHomePage:!1,title:"Question of the Day",description:"Setup:",source:"@site/docs/funccs/qotd.md",sourceDirName:"funccs",slug:"/funccs/qotd",permalink:"/funccs/qotd",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/qotd.md",version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Question of the Day"},sidebar:"tutorialSidebar",previous:{title:"Mock",permalink:"/funccs/mock"},next:{title:"Repeat",permalink:"/funccs/repeat"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the restrictions to only run in your QOTD channel")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"@QOTD What is your favourite food?" or "What is @QOTD\'s fav movie?". As long as you mention your QOTD role, it will work.'),(0,i.kt)("li",{parentName:"ul"},"The bot will then remove that message and resend it. (So you don't get pinged when people reply to your message \ud83d\ude09)"),(0,i.kt)("li",{parentName:"ul"},"On the next Question Of The Day, the bot will send a report to a channel of your choice with some info on the previous QOTD.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    SETUP:\n    - Set the restrictions to only run in your QOTD channel\n    - Set the trigger type to Regex and the trigger to: `\\A`\n\n    USAGE:\n    - "@QOTD What is your favourite food?" or "What is @QOTD\'s fav movie?". As long as you mention your QOTD role, it will work.\n    - The bot will then remove that message and resend it. (So you don\'t get pinged when people reply to your message \ud83d\ude09)\n    - On the next Question Of The Day, the bot will send a report to a channel of your choice with some info on the previous QOTD.\n\n    CREDITS: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* VARIABLES - You can edit these values */}}\n  {{/* Message when they try to answer the QOTD twice */}}\n    {{ $twice := "you can only answer the question once \ud83d\ude09" }}\n\n  {{/* Your QOTD role */}}\n    {{ $qotd_role := 778990627534536745 }}\n  {{/* Role able to ask a QOTD. These are also an exception for answering a question twice */}}\n    {{ $staff_roles := cslice 763447831829938176 764103587223044116 778952687986802698 764054381535821825 775003755842109440 }}\n\n  {{/* Channel to send the QOTD report in after a new one is started */}}\n    {{ $report_channel := 797104575076368444 }}\n\n\n{{/* CODE - Don\'t edit this part */}}\n{{ $q := sdict }}{{ with (dbGet 20 "qotd").Value }}{{ $q = sdict . }}{{ end }}\n{{ $s := false }}{{ range .Member.Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n{{ if not $q }}\n  {{ dbSet 20 "qotd" (sdict "l" (sdict "m" 0 "t" 0 "u" 0)) }}\n  {{ addReactions "\u2611" }}\n  {{ print .User.Mention ", <#" .Channel.ID "> is all set up as your QOTD channel!" }}\n{{ else if and $s (in .Message.MentionRoles $qotd_role) }}\n  {{ $e := sdict "title" "No report available!" "description" "QOTD was deleted" "color" 16734296 }}\n  {{ with getMessage nil $q.l.m }}\n    {{ $u := getMember $q.l.u }}\n    {{ $e = sdict "title" "QOTD Report" "color" 49306\n      "description" (printf "[**Question:**](https://discord.com/channels/%d/%d/%d)\\n%s\\n\\n**Answers:**\\n%d" $.Guild.ID $.Channel.ID $q.l.m .Content $q.l.t)\n      "footer" (sdict "text" $u.User.String "icon_url" ($u.User.AvatarURL "128"))\n      "timestamp" .Timestamp }}\n  {{ end }}\n  {{ if $q.l.m }}\n    {{ sendMessage $report_channel (cembed $e) }}\n  {{ end }}\n  {{ deleteTrigger 1 }}\n  {{ $m := sendMessageNoEscapeRetID nil .Message.Content }}\n  {{ range $k, $v := $q }}\n    {{ if eq $k "l" }}{{ $q.Set $k (sdict "m" $m "t" 0 "u" $.User.ID) }}\n    {{ else }}{{ $q.Set $k (sdict "a" 0 "n" $v.n) }}{{ end }}\n  {{ end }}\n  {{ dbSet 20 "qotd" $q}}\n{{ else }}\n  {{ if not ($q.Get (str .User.ID)).a }}\n    {{ $q.Set (str .User.ID) (sdict "a" 1 "n" (add ($q.Get (str .User.ID)).n 1)) }}\n    {{ $q.Set "l" (sdict "m" $q.l.m "t" (add $q.l.t 1) "u" $q.l.u) }}\n    {{ dbSet 20 "qotd" $q }}\n  {{ else if not $s }}\n    {{ deleteTrigger 1 }}\n    {{ print .User.Mention ", " $twice }}\n    {{ deleteResponse 5 }}\n  {{ end }}\n{{ end }}\n')))}d.isMDXComponent=!0}}]);
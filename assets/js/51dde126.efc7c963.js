"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[226],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(m,s(s({ref:t},g),{},{components:n})):i.createElement(m,s({ref:t},g))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return c}});var i=n(3117),o=(n(7294),n(3905));const r={title:"Ghost-Ping Detector v2"},s=void 0,a={unversionedId:"utilities/ghost-ping-v2",id:"utilities/ghost-ping-v2",title:"Ghost-Ping Detector v2",description:"Version two of the ghost ping detector. Has all the features of the original in addition to the ability to send logs when a ghost ping is detected.",source:"@site/docs/utilities/ghost-ping-v2.md",sourceDirName:"utilities",slug:"/utilities/ghost-ping-v2",permalink:"/utilities/ghost-ping-v2",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/ghost-ping-v2.md",tags:[],version:"current",frontMatter:{title:"Ghost-Ping Detector v2"},sidebar:"sidebar",previous:{title:"Ghost-Ping Detector v1",permalink:"/utilities/ghost-ping-v1"},next:{title:"JSON Converter",permalink:"/utilities/json-converter"}},l={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],g={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Version two of the ghost ping detector. Has all the features of the original in addition to the ability to send logs when a ghost ping is detected."),(0,o.kt)("admonition",{title:"Ghost pings",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'A ghost ping is when you mention a user and then delete the message, leaving a ping that cannot be found: hence the term "ghost ping".')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This command only works if the ghost ping was deleted within 5 seconds of being sent (or 10 seconds if ",(0,o.kt)("a",{parentName:"p",href:"ghost-ping-v2/#configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"$CHECK")," is enabled"),").")),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"<@!?\\d{17,19}>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$CHECK"),(0,o.kt)("br",null),"\nWhether to schedule two ",(0,o.kt)("inlineCode",{parentName:"p"},"execCC")," checks. The way this command works is that it checks after 5 seconds whether the message was deleted. This does mean that if you delete the message more than 5 seconds after message creation, this CC won't catch it by default."),(0,o.kt)("p",{parentName:"li"},"By enabling this option, the command will check twice instead of once, meaning that messages deleted between 5 and 10 seconds of being sent will be caught as well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$LOG"),(0,o.kt)("br",null),"\nWhether message logs should be sent in the channel when ghost pings are detected."))),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/ghostping_v2.go.tmpl",file:"../../../src/utilities/ghostping_v2.go.tmpl"},'{{/*\n    Ghost-ping detector v2.\n    See <https://yagpdb-cc.github.io/utilities/ghost-ping-v2> for more information.\n\n    Author: Devonte <https://github.com/devnote-dev>\n*/}}\n\n{{/* Configurable values */}}\n{{ $CHECK := false }}\n{{ $LOG := false }}\n{{/* End of configurable values */}}\n\n{{ if .ExecData }}\n    {{ $mentions := "" }} {{ $ping := false }}\n    {{ if ($m := getMessage nil .ExecData.message) }}\n        {{ if not $m.Mentions }}\n            {{ $ping = true }}\n        {{ end }}\n    {{ else }}\n        {{ $ping = true }}\n    {{ end }}\n\n    {{ if $ping }}\n        {{ if gt (len .ExecData.mentions) 1 }}\n            {{ range .ExecData.mentions }}\n                {{- $mentions = joinStr ">, <@" $mentions . -}}\n            {{ end }}\n        {{ else }}\n            {{ $mentions = index .ExecData.mentions 0 }}\n        {{ end }}\n\n        {{ $col := 16777215 }} {{ $p := 0 }} {{ $r := .Member.Roles }}\n        {{ range .Guild.Roles }}\n            {{- if and (in $r .ID) (.Color) (lt $p .Position) -}}\n                {{- $p = .Position -}}\n                {{- $col = .Color -}}\n            {{- end -}}\n        {{ end }}\n\n        {{ $log := "" }}\n        {{ if $LOG }}\n            {{ $log = print "\\n**Logs:** [Message Logs](" (exec "logs") ")" }}\n        {{ end }}\n\n        {{/* Embed Construct */}}\n        {{ $embed := cembed\n            "description" (print "**Channel:** <#" .Channel.ID ">\\n**Message:**\\n" .ExecData.content "\\n\\n**Mentioned Users:** <@" $mentions ">" $log)\n            "color" $col\n            "footer" (sdict "text" "Detector triggered")\n            "timestamp" currentTime }}\n\n        {{/* Content Format */}}\n        {{ $msgContent := print "Ghost ping detected by <@" .ExecData.author ">!" }}\n\n        {{ sendMessage nil (complexMessage "content" $msgContent "embed" $embed) }}\n    {{ else }}\n        {{ if and $CHECK (not .ExecData.break) }}\n            {{ $ids := cslice }}\n\n            {{ range .Message.Mentions }}\n                {{- $ids = $ids.Append (str .ID) -}}\n            {{ end }}\n\n            {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" true) }}\n        {{ end }}\n    {{ end }}\n{{ else }}\n    {{ if .Message.Mentions }}\n        {{ $ids := cslice }}\n        {{ range .Message.Mentions }}\n            {{ $ids = $ids.Append (str .ID) }}\n        {{ end }}\n\n        {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" false) }}\n    {{ end }}\n{{ end }}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/devnote-dev"},"@devnote-dev"),"."))}d.isMDXComponent=!0}}]);
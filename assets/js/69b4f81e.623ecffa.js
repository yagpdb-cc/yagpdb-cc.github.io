(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2856],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2939:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),s=["components"],a={sidebar_position:9,title:"Ghost-Ping v2"},c=void 0,l={unversionedId:"utilities/ghostpingv2",id:"utilities/ghostpingv2",isDocsHomePage:!1,title:"Ghost-Ping v2",description:"Ghost-Ping Detector CC v2",source:"@site/docs/utilities/ghostpingv2.md",sourceDirName:"utilities",slug:"/utilities/ghostpingv2",permalink:"/utilities/ghostpingv2",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/ghostpingv2.md",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Ghost-Ping v2"},sidebar:"tutorialSidebar",previous:{title:"Ghost-Ping v1",permalink:"/utilities/ghostpingv1"},next:{title:"JSON Converter",permalink:"/utilities/jsonconverter"}},p=[],g={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ghost-Ping Detector CC v2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},".*"),(0,o.kt)("br",{parentName:"p"}),"\n","Optional Trigger: ",(0,o.kt)("inlineCode",{parentName:"p"},"<@!?\\d{17,19}>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Ghost-Ping Detector CC v2\n\n    Recommended Trigger Type: Regex\n    Recommended Trigger: `.*`\n    Optional Trigger: `<@!?\\d{17,19}>`\n\n    Credits:\n    Devonte <https://github.com/devnote-dev>\n*/}}\n\n{{/* THINGS TO CHANGE */}}\n\n{{ $CHECK := false }} {{/* Change to "true" for double exec-check */}}\n\n{{ $LOG := false }} {{/* Change to "true" to create message logs */}}\n\n{{/* ACTUAL CODE - DO NOT TOUCH */}}\n\n{{ if .ExecData }}\n    {{ $mentions := "" }} {{ $ping := false }}\n    {{ if ($m := getMessage nil .ExecData.message) }}\n        {{ if not $m.Mentions }}\n            {{ $ping = true }}\n        {{ end }}\n    {{ else }}\n        {{ $ping = true }}\n    {{ end }}\n\n    {{ if $ping }}\n        {{ if gt (len .ExecData.mentions) 1 }}\n            {{ range .ExecData.mentions }}\n                {{- $mentions = joinStr ">, <@" $mentions . -}}\n            {{ end }}\n        {{ else }}\n            {{ $mentions = index .ExecData.mentions 0 }}\n        {{ end }}\n\n        {{ $col := 16777215 }} {{ $p := 0 }} {{ $r := .Member.Roles }}\n        {{ range .Guild.Roles }}\n            {{- if and (in $r .ID) (.Color) (lt $p .Position) -}}\n                {{- $p = .Position -}}\n                {{- $col = .Color -}}\n            {{- end -}}\n        {{ end }}\n\n        {{ $log := "" }}\n        {{ if $LOG }}\n            {{ $log = print "\\n**Logs:** [Message Logs](" (exec "logs") ")" }}\n        {{ end }}\n\n        {{/* Embed Construct */}}\n        {{ $embed := cembed\n            "description" (print "**Channel:** <#" .Channel.ID ">\\n**Message:**\\n" .ExecData.content "\\n\\n**Mentioned Users:** <@" $mentions ">" $log)\n            "color" $col\n            "footer" (sdict "text" "Detector triggered")\n            "timestamp" currentTime }}\n\n        {{/* Content Format */}}\n        {{ $msgContent := print "Ghost ping detected by <@" .ExecData.author ">!" }}\n\n        {{ sendMessage nil (complexMessage "content" $msgContent "embed" $embed) }}\n    {{ else }}\n        {{ if and $CHECK (not .ExecData.break) }}\n            {{ $ids := cslice }}\n\n            {{ range .Message.Mentions }}\n                {{- $ids = $ids.Append (str .ID) -}}\n            {{ end }}\n\n            {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" true) }}\n        {{ end }}\n    {{ end }}\n{{ else }}\n    {{ if .Message.Mentions }}\n        {{ $ids := cslice }}\n        {{ range .Message.Mentions }}\n            {{ $ids = $ids.Append (str .ID) }}\n        {{ end }}\n\n        {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" false) }}\n    {{ end }}\n{{ end }}\n')))}u.isMDXComponent=!0}}]);
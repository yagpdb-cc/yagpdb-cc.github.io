"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3722],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7639:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const i={title:"Main CC"},o=void 0,s={unversionedId:"afk/main-cc",id:"afk/main-cc",title:"Main CC",description:"This command allows users to set an AFK message with optional duration.",source:"@site/docs/afk/main-cc.md",sourceDirName:"afk",slug:"/afk/main-cc",permalink:"/afk/main-cc",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/afk/main-cc.md",tags:[],version:"current",frontMatter:{title:"Main CC"},sidebar:"sidebar",previous:{title:"Leave Feed",permalink:"/afk/leave-feed"},next:{title:"Overview",permalink:"/birthday/overview"}},l={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:u},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command allows users to set an AFK message with optional duration."),(0,a.kt)("p",null,"For more information about the AFK system, please see ",(0,a.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-afk <message>")," - To set an AFK message with no expiration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-afk <message> -d <duration>")," - To set an AFK message that expires in ",(0,a.kt)("em",{parentName:"li"},"duration")," time.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"overview/#installation"},"AFK system overview")," for instructions regarding how to configure this command."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/afk/afk.go.tmpl",file:"../../../src/afk/afk.go.tmpl"},'{{/*\n    Allows users to set an AFK message with optional duration.\n    Can be configured to remove AFK status from users once they send a message.\n    See <https://yagpdb-cc.github.io/afk/main-cc> for more information.\n\n    Author: DaviiD1337 <https://github.com/DaviiD1337>\n*/}}\n\n{{/* Configurable values */}}\n{{ $removeAfkOnMessage := true}}\n{{/* End of configurable values */}}\n\n{{ $time := 0 }}{{ $afk := dbGet .User.ID "afk" }}{{ $desc := "" }}\n{{ if $args := .Args }}\n    {{ if eq (lower (index $args 0)) (print .ServerPrefix "afk") }}\n        {{ if and (ge (len $args) 1) (not $afk) }}\n            {{ $message := "" }}\n            {{ $duration := 0 }}\n            {{ $skip := false }}\n            {{ if ge (len .Args) 2 }}\n                {{ $args = (slice .Args 1) }}\n                {{ range $i, $v := $args }}\n                    {{- if and (gt (len $v) 1) (not $skip) }}\n                        {{- if and (eq $v "-d") (gt (len $args) (add $i 1)) }}\n                            {{- $duration = index $args (add $i 1) }}\n                            {{- $skip = true }}\n                        {{- else }}\n                            {{- $message = joinStr " " $message $v }}\n                            {{- $skip = false }}\n                        {{- end }}\n                    {{- else if not $skip }}\n                        {{- $skip = false }}\n                        {{- $message = joinStr " " $message $v }}\n                    {{- else if $skip }}\n                        {{- $skip = false }}\n                    {{- end -}}\n                {{ end }}\n            {{ end }}\n            {{ $parsedDur := 0 }}\n            {{ with and $duration (toDuration $duration) }} {{ $parsedDur = . }} {{ end }}\n                {{ if $parsedDur }}\n                    {{ dbSetExpire .User.ID "afk" (or $message "No reason") (toInt $parsedDur.Seconds) }}\n                {{ else }}\n                    {{ dbSet .User.ID "afk" (or $message "No reason") }}\n                {{ end }}\n            {{ .User.Mention }}, I set your AFK to `{{ or $message "No reason provided" }}`.\n        {{ else if $afk }}\n            Welcome back, {{ .User.Mention }}, I removed your AFK.\n            {{ dbDel .User.ID "afk" }}\n        {{ end }}\n    {{ else if and $afk $removeAfkOnMessage }}\n        Welcome back, {{ .User.Mention }}, I removed your AFK.\n        {{ dbDel .User.ID "afk" }}\n    {{ else if .Message.Mentions }}\n        {{ with (dbGet (index .Message.Mentions 0).ID "afk") }}\n            {{ $user := userArg .UserID }}\n            {{ $eta := "" }}\n            {{ if gt .ExpiresAt.Unix 0 }}\n                {{ $eta = humanizeDurationSeconds (.ExpiresAt.Sub currentTime) | printf "*%s will be back in around %s.*" $user.Username }}\n            {{ end }}\n            {{ if and (eq .Value "No reason") $eta }}\n                {{ $desc = printf "%s" $eta }}\n            {{ else if and (not $eta) (ne .Value "No reason") }}\n                {{ $desc = printf "%s" .Value }}\n            {{ else if and $eta (ne .Value "No reason") }}\n                {{ $desc = printf "%s\\n\\n%s" $eta .Value }}\n            {{ else }}\n                {{ $desc = "**No reason provided**"}}\n            {{ end }}\n            {{ sendMessage nil (cembed\n                "author" (sdict "name" (printf "%s is AFK" $user.String) "icon_url" ($user.AvatarURL "256"))\n                "description" $desc\n                "color" (randInt 0 16777216)\n                "footer" (sdict "text" "Away since")\n                "timestamp" .UpdatedAt\n            ) }}\n        {{ end }}\n    {{ end }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DaviiD1337"},"@DaviiD1337"),"."))}f.isMDXComponent=!0}}]);
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4778],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return r?t.createElement(d,a(a({ref:n},c),{},{components:r})):t.createElement(d,a({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7337:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:5,title:"User Info CC"},u=void 0,l={unversionedId:"info/user",id:"info/user",isDocsHomePage:!1,title:"User Info CC",description:"This command allows you to view information about a given user, defaulting to yourself.",source:"@site/docs/info/user.md",sourceDirName:"info",slug:"/info/user",permalink:"/info/user",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/info/user.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"User Info CC"},sidebar:"tutorialSidebar",previous:{title:"Server Info CC",permalink:"/info/server"},next:{title:"Leveling System Read Me",permalink:"/leveling/levelingREADME"}},c=[],m={toc:c};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command allows you to view information about a given user, defaulting to yourself."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(user|member)(-?info)?(\\s+|\\z)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-userinfo [user]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command allows you to view information about a given user defaulting to yourself.\n    Usage: `-userinfo [user]`.\n\n    Recommended trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(user|member)(-?info)?(\\s+|\\z)`\n*/}}\n\n{{ $member := .Member }}\n{{ $user := .User }}\n{{ $args := parseArgs 0 "**Syntax:** `-userinfo [user]`" (carg "member" "target") }}\n{{ if $args.IsSet 0 }}\n    {{ $member = $args.Get 0 }}\n    {{ $user = $member.User }}\n{{ end }}\n\n{{ $roles := "" }}\n{{ range $k, $v := $member.Roles }}\n    {{- if eq $k 0 }} {{- $roles = printf "<@&%d>" . }}\n    {{- else }} {{- $roles = printf "%s, <@&%d>" $roles . }} {{- end -}}\n{{ end }}\n{{ $bot := "No" }}\n{{ if $user.Bot }} {{ $bot = "Yes" }} {{ end }}\n{{ $createdAt := div $user.ID 4194304 | add 1420070400000 | mult 1000000 | toDuration | (newDate 1970 1 1 0 0 0).Add }}\n\n{{ sendMessage nil (cembed\n    "author" (sdict "name" (printf "%s (%d)" $user.String $user.ID) "icon_url" ($user.AvatarURL "256"))\n    "fields" (cslice\n        (sdict "name" "\u276f Nickname" "value" (or $member.Nick "*None set*"))\n        (sdict "name" "\u276f Joined At" "value" ($member.JoinedAt.Parse.Format "Jan 02, 2006 3:04 AM"))\n        (sdict "name" "\u276f Created At" "value" ($createdAt.Format "Monday, January 2, 2006 at 3:04 AM"))\n        (sdict "name" (printf "\u276f Roles (%d Total)" (len $member.Roles)) "value" (or $roles "n/a"))\n        (sdict "name" "\u276f Bot" "value" $bot)\n    )\n    "color" 14232643\n    "thumbnail" (sdict "url" ($user.AvatarURL "256"))\n) }}\n')))}p.isMDXComponent=!0}}]);
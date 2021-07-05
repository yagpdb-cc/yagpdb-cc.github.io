(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7534],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return t?r.createElement(p,a(a({ref:n},u),{},{components:t})):r.createElement(p,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2027:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:4,title:"Server Info CC"},l=void 0,c={unversionedId:"info/server",id:"info/server",isDocsHomePage:!1,title:"Server Info CC",description:"This command allows you to view information about the server.",source:"@site/docs/info/server.md",sourceDirName:"info",slug:"/info/server",permalink:"/info/server",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/info/server.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Server Info CC"},sidebar:"tutorialSidebar",previous:{title:"Channel Info CC",permalink:"/info/channel"},next:{title:"User Info CC",permalink:"/info/user"}},u=[],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command allows you to view information about the server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(server|guild)(-?info)?(\\s+|\\z)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-serverinfo"),(0,o.kt)("br",{parentName:"p"}),"\n","(Use ",(0,o.kt)("inlineCode",{parentName:"p"},"-server icon")," to view the server icon)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command allows you to view information about the server.\n    Usage: `-serverinfo`. (Use `-server icon` to view the server icon).\n\n    Recommended trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(server|guild)(-?info)?(\\s+|\\z)`\n*/}}\n\n{{ $icon := "" }}\n{{ $name := printf "%s (%d)" .Guild.Name .Guild.ID }}\n{{ if .Guild.Icon }}\n    {{ $ext := "webp" }}\n    {{ if eq (slice .Guild.Icon 0 2) "a_" }} {{ $ext = "gif" }} {{ end }}\n    {{ $icon = printf "https://cdn.discordapp.com/icons/%d/%s.%s" .Guild.ID .Guild.Icon $ext }}\n{{ end }}\n\n{{ $owner := userArg .Guild.OwnerID }}\n{{ $levels := cslice\n    "None: Unrestricted"\n    "Low: Must have a verified email on their Discord account."\n    "Medium: Must also be registered on Discord for longer than 5 minutes."\n    "(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b: Must also be a member of this server for longer than 10 minutes."\n    "\u253b\u2501\u253b \uff90\u30fd(\u0ca0\u76ca\u0ca0)\u30ce\u5f61\u253b\u2501\u253b: Must have a verified phone on their Discord account."\n}}\n{{ $afk := "n/a" }}\n{{ if .Guild.AfkChannelID }}\n    {{ $afk = printf "**Channel:** <#%d> (%d)\\n**Timeout:** %s"\n        .Guild.AfkChannelID\n        .Guild.AfkChannelID\n        (humanizeDurationSeconds (toDuration (mult .Guild.AfkTimeout .TimeSecond)))\n    }}\n{{ end }}\n{{ $embedsEnabled := "No" }}\n{{ if .Guild.EmbedEnabled }} {{ $embedsEnabled = "Yes" }} {{ end }}\n{{ $createdAt := div .Guild.ID 4194304 | add 1420070400000 | mult 1000000 | toDuration | (newDate 1970 1 1 0 0 0).Add }}\n\n{{ $infoEmbed := cembed\n    "author" (sdict "name" $name "icon_url" $icon)\n    "color" 14232643\n    "thumbnail" (sdict "url" $icon)\n    "fields" (cslice\n        (sdict "name" "\u276f Verification Level" "value" (index $levels .Guild.VerificationLevel))\n        (sdict "name" "\u276f Region" "value" .Guild.Region)\n        (sdict "name" "\u276f Members" "value" (printf "**\u2022 Total:** %d Members\\n**\u2022 Online:** %d Members" .Guild.MemberCount onlineCount))\n        (sdict "name" "\u276f Roles" "value" (printf "**\u2022 Total:** %d\\nUse `-listroles` to list all roles." (len .Guild.Roles)))\n        (sdict "name" "\u276f Owner" "value" (printf "%s (%d)" $owner.String $owner.ID))\n        (sdict "name" "\u276f AFK" "value" $afk)\n        (sdict "name" "\u276f Embeds Enabled" "value" $embedsEnabled)\n    )\n    "footer" (sdict "text" "Created at")\n    "timestamp" $createdAt\n}}\n\n{{ if .CmdArgs }}\n    {{ if eq (index .CmdArgs 0) "icon" }}\n        {{ sendMessage nil (cembed\n            "author" (sdict "name" $name "icon_url" $icon)\n            "title" "\u276f Server Icon"\n            "color" 14232643\n            "image" (sdict "url" $icon)\n        ) }}\n    {{ else }}\n        {{ sendMessage nil $infoEmbed }}\n    {{ end }}\n{{ else }}\n    {{ sendMessage nil $infoEmbed }}\n{{ end }}\n')))}m.isMDXComponent=!0}}]);
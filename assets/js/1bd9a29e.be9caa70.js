(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9774],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(b,c(c({ref:n},l),{},{components:t})):r.createElement(b,c({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var d=2;d<i;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4186:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:4,title:"Coin Flip"},s=void 0,d={unversionedId:"funccs/coinflip",id:"funccs/coinflip",isDocsHomePage:!1,title:"Coin Flip",description:"This command is a game of heads or tails where users can play.",source:"@site/docs/funccs/coinflip.md",sourceDirName:"funccs",slug:"/funccs/coinflip",permalink:"/funccs/coinflip",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/coinflip.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Coin Flip"},sidebar:"tutorialSidebar",previous:{title:"starboardListener",permalink:"/funccs/starboard/starboardListener"},next:{title:"Connect4 Read Me",permalink:"/funccs/connect4system/connect4ReadMe"}},l=[],p={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command is a game of heads or tails where users can play."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"coinflip")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-coinflip <heads/tails> <bet>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n\n    This command is a game of heads or tails where users can play.\n\n    Usage: coinflip <heads/tails> <bet>\n\n    Trigger type: Command\n    Recommended trigger: `coinflip`\n\n*/}}\n\n{{/* Configuration variables start */}}\n{{ $c := 782711001333235734 }} {{/* The channel ID where the game is played. */}}\n{{ $minbet := 100 }} {{/* Minimum amount people can bet */}}\n{{ $maxbet := 500 }} {{/* Maximum amount people can bet */}}\n{{ $db := "CREDITS" }}{{/* Name of the database where the credits are stored. */}}\n{{ $cooldown := 5 }}{{/* Cooldown in seconds for users to not spam the command */}}\n{{/* Configuration variables end */}}\n\n{{ $prefix := index (reFindAllSubmatches `Prefix of \\x60\\d+\\x60: \\x60(.+)\\x60` (exec "prefix")) 0 1 }}{{ $cp := "" }}{{ $m := 0 }}{{ $bet := "" }}{{ $err := false }}{{ $img := "https://cdn.discordapp.com/attachments/707661790443733022/782710794634264616/d74906d39a1964e7d07555e7601b06ad.gif" }}{{ $cap := "https://cdn.discordapp.com/attachments/707661790443733022/782713935341027358/cap.png" }}{{ $pajura := "https://cdn.discordapp.com/attachments/707661790443733022/782713937979637760/pajura.png" }}{{ $embed:= sdict }}{{ $fields := cslice }}{{ $embed.Set "author" (sdict "name" .User.Username "icon_url" (.User.AvatarURL "256"))}}\n{{ if not .ExecData }}\n    {{ if eq (len .CmdArgs) 2 }}\n        {{ with reFind `\\A(?i)(heads|tails)\\z` (index .CmdArgs 0) }}\n            {{ $cp = . | lower }}\n            {{ with reFindAll `\\d+` (index $.CmdArgs 1) }}\n                {{ $bet = index . 0 | toInt }}\n                {{ if ge $bet $minbet }}\n                    {{ if le $bet $maxbet }}\n                        {{ if not (dbGet $.User.ID "cd_coinflip") }}\n                            {{ if ge (toInt (dbGet $.User.ID $db).Value) $bet }}\n                                {{ if not (dbGet $.User.ID "isrolling_cf") }}\n                                    {{ dbSet $.User.ID "isrolling_cf" true }}\n                                    {{ $embed.Set "image" (sdict "url" $img) }}\n                                    {{ $embed.Set "color" 16765696 }}\n                                    {{ $embed.Set "description" "**The coin is rolling... Wait...**" }}\n                                    {{ $m = sendMessageRetID $c (cembed $embed) }}\n                                    {{ execCC $.CCID nil 3 (sdict "m" $m "b" $bet "c" $cp )}}\n                                {{ else }}\n                                    {{ $embed.Set "description" "You can use this command when the last coin stopped rolling!" }}\n                                    {{ $embed.Set "color" 16488706 }}\n                                    {{ $err = true }}\n                                {{ end }}\n                            {{ else }}\n                                {{ $embed.Set "description" (printf "You dont have **%d** credits.\\nYou only have **%d** credits." $bet (toInt (dbGet $.User.ID $db).Value)) }}\n                                {{ $embed.Set "color" 16488706 }}\n                                {{ $err = true }}\n                            {{ end }}\n                        {{ else }}\n                            {{ $embed.Set "description" (print "You need to wait **" (humanizeDurationSeconds ((dbGet $.User.ID "cd_coinflip").ExpiresAt.Sub currentTime)) "** to use this command again.") }}\n                            {{ $embed.Set "color" 16488706 }}\n                            {{ $err = true }}\n                        {{ end }}\n                    {{ else }}\n                        {{ $embed.Set "description" (printf "Maximum bet can only be **%d**!" $maxbet) }}\n                        {{ $embed.Set "color" 16488706 }}\n                        {{ $err = true }}\n                    {{ end }}\n                {{ else }}\n                    {{ $embed.Set "description" (printf "Minimum bet can only be **%d**!" $minbet) }}\n                    {{ $embed.Set "color" 16488706 }}\n                    {{ $err = true }}\n                {{ end }}\n            {{ else }}\n                {{ $embed.Set "description" (printf "`%s` is not a valid number." (index $.CmdArgs 1)) }}\n                {{ $embed.Set "color" 16488706 }}\n                {{ $err = true }}\n            {{ end }}\n        {{ else }}\n            {{ $embed.Set "description" "You can only choose from **heads** or **tails**." }}\n            {{ $embed.Set "color" 16488706 }}\n            {{ $err = true }}\n        {{ end }}\n    {{ else }}\n        {{ $embed.Set "description" (printf "Syntax: **%scoinflip <heads/tails> <money>**" $prefix) }}\n        {{ $embed.Set "color" 16488706 }}\n        {{ $err = true }}\n    {{ end }}\n    {{ if $err }}\n        {{ sendMessage nil (cembed $embed) }}\n    {{ end }}\n{{ else }}\n    {{ $m = .ExecData.m }}\n    {{ $bet = .ExecData.b }}\n    {{ $cp = .ExecData.c }}\n    {{ $chance := randInt 1 3 }}\n    {{ $choosen := "" }}\n    {{ if eq $chance 1 }}\n        {{ $choosen = "heads" }}\n        {{ $embed.Set "image" (sdict "url" $cap) }}\n    {{ else }}\n        {{ $choosen = "tails" }}\n        {{ $embed.Set "image" (sdict "url" $pajura)}}\n    {{ end }}\n    {{ if eq $cp $choosen }}\n        {{ $k := dbIncr $.User.ID $db $bet }}\n        {{ $embed.Set "description" (printf "**----------**\\nYou choose: **%s** | The coin rolled: **%s**.\\nYou won **%d** credits.\\nNow you have **%d** credits.\\n**----------**" $cp $choosen (mult $bet 2) (toInt $k)) }}\n        {{ $embed.Set "color" 40811 }}\n    {{ else }}\n        {{ $k := dbIncr $.User.ID $db (mult $bet -1) }}\n        {{ $embed.Set "description" (printf "**----------**\\nYou choose: **%s** | The coin rolled: **%s**.\\nYou lost **%d** credits.\\nNow you have **%d** credits.\\n**----------**" $cp $choosen $bet (toInt $k)) }}\n        {{ $embed.Set "color" 16488706 }}\n    {{ end }}\n    {{ dbSetExpire $.User.ID "cd_coinflip" true $cooldown }}\n    {{ dbDel $.User.ID "isrolling_cf" }}\n    {{ editMessage $c $m (cembed $embed) }}\n{{ end }}\n')))}m.isMDXComponent=!0}}]);
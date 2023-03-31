"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1666],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(b,a(a({ref:n},s),{},{components:t})):r.createElement(b,a({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8100:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=t(3117),i=(t(7294),t(3905));const o={title:"Coin Flip"},a=void 0,l={unversionedId:"fun/coinflip",id:"fun/coinflip",title:"Coin Flip",description:"This command is a game of heads or tails which users can play.",source:"@site/docs/fun/coinflip.md",sourceDirName:"fun",slug:"/fun/coinflip",permalink:"/fun/coinflip",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/coinflip.md",tags:[],version:"current",frontMatter:{title:"Coin Flip"},sidebar:"sidebar",previous:{title:"Choose Item",permalink:"/fun/choose"},next:{title:"Counting System",permalink:"/fun/counting"}},c={},d=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command is a game of heads or tails which users can play."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"coinflip")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-coinflip <heads/tails> <bet>")," - Flips the coin, betting ",(0,i.kt)("inlineCode",{parentName:"li"},"bet")," on the result being ",(0,i.kt)("inlineCode",{parentName:"li"},"heads"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"tails"),".")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$c"),(0,i.kt)("br",null),"\nChannel ID where the game is played.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$minbet"),(0,i.kt)("br",null),"\nMinimum amount people can bet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$maxbet"),(0,i.kt)("br",null),"\nMaximum amount people can bet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$db"),(0,i.kt)("br",null),"\nDatabase entry name where the credits are stored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$cooldown"),(0,i.kt)("br",null),"\nCooldown for the command in seconds."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/coinflip.go.tmpl",file:"../../../src/fun/coinflip.go.tmpl"},'{{/*\n    Coin-flip game that integrates with an existing currency system.\n    See <https://yagpdb-cc.github.io/fun/coinflip> for more information.\n\n    Author: DaviiD1337 <https://github.com/DaviiD1337>\n*/}}\n\n{{/* Configuration variables start */}}\n{{ $c := 782711001333235734 }}\n{{ $minbet := 100 }}\n{{ $maxbet := 500 }}\n{{ $db := "CREDITS" }}\n{{ $cooldown := 5 }}\n{{/* Configuration variables end */}}\n\n{{ $cp := "" }}{{ $m := 0 }}{{ $bet := "" }}{{ $err := false }}{{ $img := "https://cdn.discordapp.com/attachments/707661790443733022/782710794634264616/d74906d39a1964e7d07555e7601b06ad.gif" }}{{ $cap := "https://cdn.discordapp.com/attachments/707661790443733022/782713935341027358/cap.png" }}{{ $pajura := "https://cdn.discordapp.com/attachments/707661790443733022/782713937979637760/pajura.png" }}{{ $embed:= sdict }}{{ $fields := cslice }}{{ $embed.Set "author" (sdict "name" .User.Username "icon_url" (.User.AvatarURL "256"))}}\n{{ if not .ExecData }}\n    {{ if eq (len .CmdArgs) 2 }}\n        {{ with reFind `\\A(?i)(heads|tails)\\z` (index .CmdArgs 0) }}\n            {{ $cp = . | lower }}\n            {{ with reFindAll `\\d+` (index $.CmdArgs 1) }}\n                {{ $bet = index . 0 | toInt }}\n                {{ if ge $bet $minbet }}\n                    {{ if le $bet $maxbet }}\n                        {{ if not (dbGet $.User.ID "cd_coinflip") }}\n                            {{ if ge (toInt (dbGet $.User.ID $db).Value) $bet }}\n                                {{ if not (dbGet $.User.ID "isrolling_cf") }}\n                                    {{ dbSet $.User.ID "isrolling_cf" true }}\n                                    {{ $embed.Set "image" (sdict "url" $img) }}\n                                    {{ $embed.Set "color" 16765696 }}\n                                    {{ $embed.Set "description" "**The coin is rolling... Wait...**" }}\n                                    {{ $m = sendMessageRetID $c (cembed $embed) }}\n                                    {{ execCC $.CCID nil 3 (sdict "m" $m "b" $bet "c" $cp )}}\n                                {{ else }}\n                                    {{ $embed.Set "description" "You can use this command when the last coin stopped rolling!" }}\n                                    {{ $embed.Set "color" 16488706 }}\n                                    {{ $err = true }}\n                                {{ end }}\n                            {{ else }}\n                                {{ $embed.Set "description" (printf "You dont have **%d** credits.\\nYou only have **%d** credits." $bet (toInt (dbGet $.User.ID $db).Value)) }}\n                                {{ $embed.Set "color" 16488706 }}\n                                {{ $err = true }}\n                            {{ end }}\n                        {{ else }}\n                            {{ $embed.Set "description" (print "You need to wait **" (humanizeDurationSeconds ((dbGet $.User.ID "cd_coinflip").ExpiresAt.Sub currentTime)) "** to use this command again.") }}\n                            {{ $embed.Set "color" 16488706 }}\n                            {{ $err = true }}\n                        {{ end }}\n                    {{ else }}\n                        {{ $embed.Set "description" (printf "Maximum bet can only be **%d**!" $maxbet) }}\n                        {{ $embed.Set "color" 16488706 }}\n                        {{ $err = true }}\n                    {{ end }}\n                {{ else }}\n                    {{ $embed.Set "description" (printf "Minimum bet can only be **%d**!" $minbet) }}\n                    {{ $embed.Set "color" 16488706 }}\n                    {{ $err = true }}\n                {{ end }}\n            {{ else }}\n                {{ $embed.Set "description" (printf "`%s` is not a valid number." (index $.CmdArgs 1)) }}\n                {{ $embed.Set "color" 16488706 }}\n                {{ $err = true }}\n            {{ end }}\n        {{ else }}\n            {{ $embed.Set "description" "You can only choose from **heads** or **tails**." }}\n            {{ $embed.Set "color" 16488706 }}\n            {{ $err = true }}\n        {{ end }}\n    {{ else }}\n        {{ $embed.Set "description" (printf "Syntax: **%scoinflip <heads/tails> <money>**" .ServerPrefix) }}\n        {{ $embed.Set "color" 16488706 }}\n        {{ $err = true }}\n    {{ end }}\n    {{ if $err }}\n        {{ sendMessage nil (cembed $embed) }}\n    {{ end }}\n{{ else }}\n    {{ $m = .ExecData.m }}\n    {{ $bet = .ExecData.b }}\n    {{ $cp = .ExecData.c }}\n    {{ $chance := randInt 1 3 }}\n    {{ $choosen := "" }}\n    {{ if eq $chance 1 }}\n        {{ $choosen = "heads" }}\n        {{ $embed.Set "image" (sdict "url" $cap) }}\n    {{ else }}\n        {{ $choosen = "tails" }}\n        {{ $embed.Set "image" (sdict "url" $pajura)}}\n    {{ end }}\n    {{ if eq $cp $choosen }}\n        {{ $k := dbIncr $.User.ID $db $bet }}\n        {{ $embed.Set "description" (printf "**----------**\\nYou choose: **%s** | The coin rolled: **%s**.\\nYou won **%d** credits.\\nNow you have **%d** credits.\\n**----------**" $cp $choosen (mult $bet 2) (toInt $k)) }}\n        {{ $embed.Set "color" 40811 }}\n    {{ else }}\n        {{ $k := dbIncr $.User.ID $db (mult $bet -1) }}\n        {{ $embed.Set "description" (printf "**----------**\\nYou choose: **%s** | The coin rolled: **%s**.\\nYou lost **%d** credits.\\nNow you have **%d** credits.\\n**----------**" $cp $choosen $bet (toInt $k)) }}\n        {{ $embed.Set "color" 16488706 }}\n    {{ end }}\n    {{ dbSetExpire $.User.ID "cd_coinflip" true $cooldown }}\n    {{ dbDel $.User.ID "isrolling_cf" }}\n    {{ editMessage $c $m (cembed $embed) }}\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DaviiD1337"},"@DaviiD1337"),"."))}u.isMDXComponent=!0}}]);
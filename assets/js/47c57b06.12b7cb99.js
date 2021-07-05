(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[7996],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5720:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),s=["components"],a={sidebar_position:4,title:"Message Listener CC"},l=void 0,d={unversionedId:"leveling/messagelistender",id:"leveling/messagelistender",isDocsHomePage:!1,title:"Message Listener CC",description:"This command manages messages - setting cooldowns, giving role rewards when users level up, and giving XP.",source:"@site/docs/leveling/messagelistender.md",sourceDirName:"leveling",slug:"/leveling/messagelistender",permalink:"/leveling/messagelistender",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/leveling/messagelistender.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Message Listener CC"},sidebar:"tutorialSidebar",previous:{title:"Role Rewards CC",permalink:"/leveling/rolerewards"},next:{title:"Rank CC",permalink:"/leveling/rank"}},c=[],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command manages messages - setting cooldowns, giving role rewards when users level up, and giving XP."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},".*")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command manages messages - setting cooldowns, giving role rewards when users level up, and giving XP.\n    \n    Recommended trigger: Regex trigger with trigger `.*`.\n*/}}\n{{ $settings := 0 }} {{/* Instantiate settings at nil value */}}\n{{ $roleRewards := sdict "type" "stack" }} {{/* Default role reward settings */}}\n{{ with (dbGet 0 "xpSettings") }} {{ $settings = sdict .Value }} {{ end }} {{/* If in db, then we update value */}}\n{{ with (dbGet 0 "roleRewards") }} {{ $roleRewards = sdict .Value }} {{ end }} {{/* See above */}}\n\n{{ $cooldown := false }} {{/* We presume that user is not on cooldown */}}\n{{ if (dbGet .User.ID "xpCooldown") }} {{ $cooldown = true }} {{ end }} {{/* Make user on cooldown if there is cooldown DB entry */}}\n\n{{ if and (not $cooldown) $settings }} {{/* Make sure that both the user is not on cooldown and settings exist */}}\n    {{ $amtToGive := randInt $settings.min $settings.max }} {{/* Amount of XP to give */}}\n    {{ $currentXp := 0 }} {{/* User current XP */}}\n    {{ with (dbGet .User.ID "xp") }}\n        {{ $currentXp = .Value }}\n    {{ end }} {{/* Update XP amount if present */}}\n\n    {{ $currentLvl := roundFloor (mult 0.1 (sqrt $currentXp)) }} {{/* Calculate level */}}\n    {{ $newXp := dbIncr .User.ID "xp" $amtToGive }} {{/* Increment the xp */}}\n    {{ $newLvl := roundFloor (mult 0.1 (sqrt $newXp)) }} {{/* Calculate new level */}}\n    {{ $channel := or $settings.channel .Channel.ID }}\n    {{ if not (getChannel $channel) }} {{ $channel = .Channel.ID }} {{ end }}\n\n    {{ if ne $newLvl $currentLvl }} {{/* If the level changed / user ranked up */}}\n        {{ $type := $roleRewards.type }} {{/* Type of role giving (highest / stack) */}}\n        {{ $toAdd := or ($roleRewards.Get (json $newLvl)) 0 }} {{/* Try to get the role reward for this level */}}\n        {{ range $level, $reward := $roleRewards }} {{/* Loop over role rewards */}}\n            {{- if and (ge (toInt $newLvl) (toInt $level)) (not (hasRoleID $reward)) (eq $type "stack") (ne $level "type") }} {{- addRoleID $reward }}\n            {{- else if and (hasRoleID $reward) (eq $type "highest") $toAdd }} {{- removeRoleID $reward }} {{- end -}}\n        {{ end }}\n        {{ if $toAdd }} {{ addRoleID $toAdd }} {{ end }}\n        {{ $embed := cembed \n            "title" "\u276f Level up!"\n            "thumbnail" (sdict "url" "https://webstockreview.net/images/emoji-clipart-celebration-4.png")\n            "description" (printf "Congratulations **%s**! You\'ve leveled up to level %d - keep it up!" .User.String (toInt $newLvl))\n            "color" 14232643\n        }}\n            {{ if $settings.announcements }}\n            {{ sendMessage $channel (complexMessage "content" .User.Mention "embed" $embed) }} {{/* Send levelup notification */}}\n            {{ end }}\n    {{ end }}\n\n    {{ $cooldownSeconds := div $settings.cooldown 1000000000 }} {{/* Convert cooldown to seconds */}}\n    {{ dbSetExpire .User.ID "xpCooldown" true $cooldownSeconds }} {{/* Set cooldown entry */}}\n{{ end }}\n')))}p.isMDXComponent=!0}}]);
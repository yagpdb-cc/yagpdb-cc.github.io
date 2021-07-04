(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[7410],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,m=d["".concat(o,".").concat(p)]||d[p]||g[p]||l;return t?i.createElement(m,s(s({ref:n},c),{},{components:t})):i.createElement(m,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<l;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},871:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return o},default:function(){return c}});var i=t(2122),r=t(9756),l=(t(7294),t(3905)),s={sidebar_position:2,title:"Leveling CC"},a={unversionedId:"leveling/leveling",id:"leveling/leveling",isDocsHomePage:!1,title:"Leveling CC",description:"This command manages the general level settings of the guild.",source:"@site/docs/leveling/leveling.md",sourceDirName:"leveling",slug:"/leveling/leveling",permalink:"/yagpdb-cc/leveling/leveling",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/leveling/leveling.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Leveling CC"},sidebar:"tutorialSidebar",previous:{title:"Leveling System",permalink:"/yagpdb-cc/leveling/levelingREADME"},next:{title:"Role Rewards CC",permalink:"/yagpdb-cc/leveling/rolerewards"}},o=[],u={toc:o};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This command manages the general level settings of the guild."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(leveling|(level|lvl)-?conf|(level|lvl)-?settings)(\\s+|\\z)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"-leveling set <key> value")," - example: ",(0,l.kt)("inlineCode",{parentName:"p"},"-leveling set cooldown 1 minute 30 seconds"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"-leveling use-default")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"use default settings"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"-leveling view")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"view settings"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command manages the general level settings of the guild.\n    Possible usage:\n\n    -leveling set <key> value | example: -leveling set cooldown 1 minute 30 seconds \n    -leveling use-default | use default settings \n    -leveling view | view settings\n\n    Recommended trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(leveling|(level|lvl)-?conf|(level|lvl)-?settings)(\\s+|\\z)`.\n*/}}\n{{/* Help message for convenience in sending */}}\n{{ $helpMsg := cembed\n    "title" "\ud83c\udfc6 Leveling"\n    "description" (joinStr "\\n\\n"\n        "`leveling use-default`: Use the default settings"\n        "`leveling set <key> <value>`: Sets the given settings to the value provided. Valid keys are \\"min\\", \\"max\\", and \\"cooldown\\" (duration)."\n        "`leveling set-channel <channel|none>`: Sets the channel where level up messages will be sent (defaults to current channel). If you want to make it the current channel, use `leveling set-channel none`."\n            "`leveling set-announcements`: Sets if you want to display the level up messages."\n        "`leveling view`: Views the current settings."\n    )\n    "color" 14232643\n}}\n{{ if .CmdArgs }}\n    {{ $isSaved := false }} {{/* Whether the settings are saved */}}\n    {{ $currentSettings := sdict \n        "min" 15 \n        "max" 25 \n        "cooldown" .TimeMinute\n            "announcements" true\n    }} {{/* Defaults for level settings */}}\n    {{ with (dbGet 0 "xpSettings") }}\n        {{ $isSaved = true }} {{/* Settings are in DB */}}\n        {{ $currentSettings = sdict .Value }} {{/* Convert value to sdict */}}\n    {{ end }}\n\n    {{ if eq (index .CmdArgs 0) "use-default" }}\n        {{ $s := dbSet 0 "xpSettings" $currentSettings }} {{/* Set defaults */}}\n        Done! You are now using the default settings for the leveling system.\n    \n    {{ else if and (eq (index .CmdArgs 0) "set") (ge (len .CmdArgs) 3) }}\n        {{ $key := index .CmdArgs 1 }} {{/* The key of the setting being set */}}\n        {{ $value := slice .CmdArgs 2 | joinStr " " }} {{/* The value of the new setting */}}\n        {{ if in (cslice "min" "max" "cooldown") $key }} {{/* Check that key is valid */}}\n            {{ $parsed := or (and (eq $key "cooldown") (toDuration $value)) (toInt $value) }} {{/* Find the proper type of conversion needed */}}\n            {{ if not $parsed }} {{/* Check whether it was parsed correctly / whether it was valid value */}}\n                Please provide a valid value for the key `{{ $key }}`.\n            {{ else }}\n                {{ $currentSettings.Set $key $parsed }} {{/* Set key to value */}}\n                {{ if ge $currentSettings.min $currentSettings.max }} {{/* Preemptively prevent user from setting larger min value than max which would cause error later */}}\n                    The minimum xp cannot be larger than or equal to the max xp.\n                {{ else }}\n                    {{ $s := dbSet 0 "xpSettings" $currentSettings }} {{/* Save it */}}\n                    Successfully set the key `{{ $key }}` to `{{ $value }}`!\n                {{ end }}\n            {{ end }}\n        {{ else }}\n            That was not a valid key. The only valid settings are "min", "max", and "cooldown".\n        {{ end }}\n\n    {{ else if and (eq (index .CmdArgs 0) "set-channel") (ge (len .CmdArgs) 2) }}\n        {{ $input := index .CmdArgs 1 }}\n        {{ with reFindAllSubmatches `<#(\\d+)>` $input }} {{ $input = toInt64 (index . 0 1) }} {{ end }}\n        {{ $channel := getChannel $input }}\n        {{ if $channel }}\n            {{ $currentSettings.Set "channel" $channel.ID }}\n            {{ $s := dbSet 0 "xpSettings" $currentSettings }}\n            Successfully set channel to <#{{ $channel.ID }}>!\n        {{ else if eq $input "none" }}\n            {{ $currentSettings.Del "channel" }}\n            {{ $s := dbSet 0 "xpSettings" $currentSettings }}\n            Successfully set the channel for level up notifications to none.\n        {{ else }}\n            That was not a valid channel. Try again.\n        {{ end }}\n\n    {{ else if eq (index .CmdArgs 0) "set-announcements" }}\n        {{ $input := index .CmdArgs 1 | lower }}\n        {{ if eq $input "true" "y" }}\n            {{ $currentSettings.Set "announcements" true }}\n            Successfully set the value for announcements to `true` \n            {{ dbSet 0 "xpSettings" $currentSettings }}\n        {{ else if eq $input "false" "n" }}\n            {{ $currentSettings.Set "announcements" false }}\n            Successfully set the value for announcements to `false` \n            {{ dbSet 0 "xpSettings" $currentSettings }}\n        {{ else }}\n            That was not a valid option. The only valid options are "true" and "false".\n        {{ end }}\n\n    {{ else if eq (index .CmdArgs 0) "view" }}\n        {{ $channel := "*None set*" }}\n        {{ with $currentSettings.channel }} {{ $channel = printf "<#%d>" . }} {{ end }}\n        {{ $formatted := printf "**\u276f Minimum XP:** %d\\n**\u276f Maximum XP:** %d\\n**\u276f Cooldown:** %s\\n**\u276f Level-up Channel:** %s\\n**\u276f Announcements:** %v\\n"\n            $currentSettings.min\n            $currentSettings.max\n            (humanizeDurationSeconds ($currentSettings.cooldown | toDuration)) \n            $channel\n                $currentSettings.announcements\n        }} {{/* Construct the embed description */}}\n        {{ if $isSaved }} {{/* If the settings are in DB */}}\n            {{ sendMessage nil (cembed "title" "Level Settings" "description" $formatted "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png")) }}\n        {{ else }}\n            This server has not set up the leveling system. Run `-leveling use-default` to use the default settings or customize it using `-leveling set <key> <value>`.\n        {{ end }}\n    {{ else }} {{/* Send help messages */}}\n        {{ sendMessage nil $helpMsg }} \n    {{ end }}\n{{ else }}\n    {{ sendMessage nil $helpMsg }}\n{{ end }}\n')))}c.isMDXComponent=!0}}]);
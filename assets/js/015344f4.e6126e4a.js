(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[7656],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),v=l,g=c["".concat(i,".").concat(v)]||c[v]||u[v]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1667:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return i},default:function(){return p}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),s={sidebar_position:6,title:"Set XP/Level CC"},o={unversionedId:"leveling/setxp",id:"leveling/setxp",isDocsHomePage:!1,title:"Set XP/Level CC",description:"Sets XP or level of user.",source:"@site/docs/leveling/setxp.md",sourceDirName:"leveling",slug:"/leveling/setxp",permalink:"/yagpdb-cc/leveling/setxp",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/leveling/setxp.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Set XP/Level CC"},sidebar:"tutorialSidebar",previous:{title:"Rank CC",permalink:"/yagpdb-cc/leveling/rank"},next:{title:"Leaderboard CC",permalink:"/yagpdb-cc/leveling/leaderboard"}},i=[],d={toc:i};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets XP or level of user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(set-?(xp|level))(\\s+|\\z)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-setxp <user> <xp>"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-setlevel <user> <level>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Sets XP or level of user.\n\n    Usage:\n\n    -setxp <user> <xp>\n    -setlevel <user> <level>\n\n    Recommended trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(set-?(xp|level))(\\s+|\\z)`\n*/}}\n{{ $cmd := reFind `(?i)xp|level` .Cmd }} {{/* The type of command used */}}\n{{ $user := 0 }} {{/* Target user */}}\n{{ $newLvl := 0 }} {{/* Whether user leveled up with these changes */}}\n{{ with .CmdArgs }} {{ $user = index . 0 | userArg }} {{ end }} {{/* We try to resolve user from arguments given */}}\n{{ if and (eq $cmd "level") (eq (len .CmdArgs) 2) }}\n    {{ $level := $.nil }}\n    {{ $valid := false }}\n    {{ with reFind `\\A\\d+\\z` (index .CmdArgs 1) }} {{ $valid = true }} {{ $level = toInt . }} {{ end }}\n    {{ if and $valid $user }}\n        {{ $calculated := mult 100 (mult $level $level) }} {{/* Calculate XP for this level */}}\n        {{ $s := dbSet $user.ID "xp" $calculated }} {{/* Update db */}}\n        {{ $newLvl = $level }} {{/* As user leveled up, we change newLvl */}}\n        {{ printf "Successfully set **%s**\'s level to %d!" $user.String $level }}\n    {{ else }}\n        The syntax for this command is `-setlevel <user> <level>`. \n    {{ end }}\n{{ else if eq (len .CmdArgs) 2 }}\n    {{ $xp := $.nil }}\n    {{ $valid := false }}\n    {{ with reFind `\\A\\d+\\z` (index .CmdArgs 1) }} {{ $valid = true }} {{ $xp = toInt . }} {{ end }}\n    {{ if and $valid $user }}\n        {{ $oldXp := 0 }} {{/* Old XP */}}\n        {{ with (dbGet $user.ID "xp") }} {{ $oldXp = .Value }} {{ end }} {{/* Update old xp with db entry */}}\n        {{ $oldLvl := roundFloor (mult 0.1 (sqrt $oldXp)) }} {{/* Calculate old level */}}\n        {{ $s := dbSet $user.ID "xp" $xp }} {{/* Silence the dbSet */}}\n        {{ $updatedLvl := roundFloor (mult 0.1 (sqrt $xp)) }} {{/* Calculate updated level */}}\n        {{ if ne $oldLvl $updatedLvl }} {{ $newLvl = $updatedLvl }} {{ end }} {{/* If level was updated, update newLvl */}}\n        {{ printf "Successfully set **%s**\'s XP to %d!" $user.String $xp }}\n    {{ else }}\n        The syntax for this command is `-setxp <user> <xp>`.\n    {{ end }}\n{{ else }}\n    The syntax for this command is `-setxp/setlevel <user> <level|xp>`.\n{{ end }}\n{{/* Handle leveling up | Basically the same as whats in the message listener, so if you are curious look at that */}}\n{{ if $newLvl }}\n    {{ $roleRewards := sdict "type" "stack" }}\n    {{ with dbGet 0 "roleRewards" }} {{ $roleRewards = sdict .Value }} {{ end }}\n    {{ $type := $roleRewards.type }}\n    {{ $toAdd := 0 }}\n    {{ $dist := -1 }}\n    {{ range $level, $reward := $roleRewards }}\n        {{- if and (le (toInt $level) (toInt $newLvl)) (or (gt $dist (sub (toInt $newLvl) (toInt $level))) (eq $dist -1)) (eq $type "highest") }}\n            {{- $dist = sub (toInt $newLvl) (toInt $level) }} {{- $toAdd = $reward }}\n        {{- end }}\n        {{- if and (ge (toInt $newLvl) (toInt $level)) (not (targetHasRoleID $user $reward)) (eq $type "stack") (ne $level "type") }} {{- giveRoleID $user $reward }}\n        {{- else if and (targetHasRoleID $user $reward) (eq $type "highest") }} {{- takeRoleID $user $reward }} {{- end -}}\n    {{ end }}\n    {{/* TODO: Find a better solution than removing and adding this role */}}\n    {{ if $toAdd }} {{ giveRoleID $user $toAdd }} {{ end }}\n{{ end }}\n')))}p.isMDXComponent=!0}}]);
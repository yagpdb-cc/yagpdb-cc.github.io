(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[3682],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6128:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o={sidebar_position:8,title:"Reaction Listener CC"},s={unversionedId:"leveling/reactionlistender",id:"leveling/reactionlistender",isDocsHomePage:!1,title:"Reaction Listener CC",description:"This command manages the pagination of the leaderboard command.",source:"@site/docs/leveling/reactionlistender.md",sourceDirName:"leveling",slug:"/leveling/reactionlistender",permalink:"/yagpdb-cc/leveling/reactionlistender",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/leveling/reactionlistender.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Reaction Listener CC"},sidebar:"tutorialSidebar",previous:{title:"Leaderboard CC",permalink:"/yagpdb-cc/leveling/leaderboard"},next:{title:"Raid Guard System",permalink:"/yagpdb-cc/moderation/raidguard/raidguardREADME"}},d=[],c={toc:d};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command manages the pagination of the leaderboard command.\nWARNING: this command may be extremely buggy as I was unable to test it with limited users."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction Added only"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    WARNING: this command may be extremely buggy as I was unable to test it with limited users.\n    This command manages the pagination of the leaderboard command.\n\n    Recommended trigger: Reaction trigger on Reaction Added only.\n*/}}\n{{ $action := .Reaction.Emoji.Name }} {{/* The action being ran */}}\n{{ $validEmojis := cslice "\u25b6\ufe0f" "\u25c0\ufe0f" }} {{/* Valid emojis */}}\n{{ $isValid := false }} {{/* Whether this is actually a valid embed / leaderboard embed */}}\n{{ $page := 0 }} {{/* The current page */}}\n{{ with and (eq .ReactionMessage.Author.ID 204255221017214977) .ReactionMessage.Embeds }} {{/* Checks for validity */}}\n    {{ $embed := index . 0 }} {{/* The first embed */}}\n    {{ if and (eq $embed.Title "\u276f Leaderboard") $embed.Footer }} {{/* More checks */}}\n        {{ $page = reFind `\\d+` $embed.Footer.Text }} {{/* We presume that this is valid, and get the page num */}}\n        {{ $isValid = true }} {{/* Yay, it is valid */}}\n    {{ end }}\n{{ end }}\n{{ if and (in $validEmojis $action) $isValid $page }} {{/* Even more checks for validity... */}}\n    {{ deleteMessageReaction nil .ReactionMessage.ID .User.ID $action }}\n    {{ if eq $action "\u25b6\ufe0f" }} {{ $page = add $page 1 }} {{/* Update page according to emoji */}}\n    {{ else }} {{ $page = sub $page 1 }} {{ end }}\n    {{ if ge $page 1 }} {{/* Otherwise, dbTopEntries throws error due to negative skip */}}\n        {{ $skip := mult (sub $page 1) 10 }} {{/* Get skip */}}\n        {{ $users := dbTopEntries "xp" 10 $skip }} {{/* Fetch entries */}}\n        {{ if (len $users) }} {{/* If there are users on this page, proceed */}}\n            {{ $rank := $skip }}\n            {{ $display := "" }} {{/* Display for leaderboard embed */}}\n            {{ range $users }} {{- /* Loop over users and format */}}\n                {{- $xp := toInt .Value }} {{- /* The user XP */}}\n                {{- $rank = add $rank 1 }} {{- /* The user rank */}}\n                {{- $display = printf "%s\\n\u2022 **%d.** [%s](https://yagpdb.xyz) :: Level %d (%d XP)"\n                    $display $rank .User.String (toInt (roundFloor (mult 0.1 (sqrt $xp)))) $xp\n                }} {{- /* Format display */ -}}\n            {{ end }}\n            {{ editMessage nil .ReactionMessage.ID (cembed\n                "title" "\u276f Leaderboard"\n                "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png")\n                "color" 14232643\n                "description" $display\n                "footer" (sdict "text" (joinStr "" "Page " $page))\n            ) }} {{/* Edit embed */}}\n        {{ end }}\n    {{ end }}\n{{ end }}\n')))}l.isMDXComponent=!0}}]);
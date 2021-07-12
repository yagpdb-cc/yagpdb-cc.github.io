(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[967],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8007:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={title:"Reaction Handler"},s=void 0,c={unversionedId:"leveling/reaction-handler",id:"leveling/reaction-handler",isDocsHomePage:!1,title:"Reaction Handler",description:"This command handles reactions for the leveling system.",source:"@site/docs/leveling/reaction-handler.md",sourceDirName:"leveling",slug:"/leveling/reaction-handler",permalink:"/leveling/reaction-handler",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/leveling/reaction-handler.md",version:"current",frontMatter:{title:"Reaction Handler"},sidebar:"sidebar",previous:{title:"Message Handler",permalink:"/leveling/message-handler"},next:{title:"Set XP/Level",permalink:"/leveling/set-xp"}},d=[{value:"Trigger",id:"trigger",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command handles reactions for the leveling system."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Reaction"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Added reactions only")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../src/leveling/reaction_handler.go.tmpl",file:"../../../src/leveling/reaction_handler.go.tmpl"},'{{/*\n    Handles reactions for the leveling system.\n    See <https://yagpdb-cc.github.io/leveling/reaction-handler> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $action := .Reaction.Emoji.Name }} {{/* The action being ran */}}\n{{ $validEmojis := cslice "\u25b6\ufe0f" "\u25c0\ufe0f" }} {{/* Valid emojis */}}\n{{ $isValid := false }} {{/* Whether this is actually a valid embed / leaderboard embed */}}\n{{ $page := 0 }} {{/* The current page */}}\n{{ with and (eq .ReactionMessage.Author.ID 204255221017214977) .ReactionMessage.Embeds }} {{/* Checks for validity */}}\n    {{ $embed := index . 0 }} {{/* The first embed */}}\n    {{ if and (eq $embed.Title "\u276f Leaderboard") $embed.Footer }} {{/* More checks */}}\n        {{ $page = reFind `\\d+` $embed.Footer.Text }} {{/* We presume that this is valid, and get the page num */}}\n        {{ $isValid = true }} {{/* Yay, it is valid */}}\n    {{ end }}\n{{ end }}\n{{ if and (in $validEmojis $action) $isValid $page }} {{/* Even more checks for validity... */}}\n    {{ deleteMessageReaction nil .ReactionMessage.ID .User.ID $action }}\n    {{ if eq $action "\u25b6\ufe0f" }} {{ $page = add $page 1 }} {{/* Update page according to emoji */}}\n    {{ else }} {{ $page = sub $page 1 }} {{ end }}\n    {{ if ge $page 1 }} {{/* Otherwise, dbTopEntries throws error due to negative skip */}}\n        {{ $skip := mult (sub $page 1) 10 }} {{/* Get skip */}}\n        {{ $users := dbTopEntries "xp" 10 $skip }} {{/* Fetch entries */}}\n        {{ if (len $users) }} {{/* If there are users on this page, proceed */}}\n            {{ $rank := $skip }}\n            {{ $display := "" }} {{/* Display for leaderboard embed */}}\n            {{ range $users }} {{- /* Loop over users and format */}}\n                {{- $xp := toInt .Value }} {{- /* The user XP */}}\n                {{- $rank = add $rank 1 }} {{- /* The user rank */}}\n                {{- $display = printf "%s\\n\u2022 **%d.** [%s](https://yagpdb.xyz) :: Level %d (%d XP)"\n                    $display $rank .User.String (toInt (roundFloor (mult 0.1 (sqrt $xp)))) $xp\n                }} {{- /* Format display */ -}}\n            {{ end }}\n            {{ editMessage nil .ReactionMessage.ID (cembed\n                "title" "\u276f Leaderboard"\n                "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png")\n                "color" 14232643\n                "description" $display\n                "footer" (sdict "text" (joinStr "" "Page " $page))\n            ) }} {{/* Edit embed */}}\n        {{ end }}\n    {{ end }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}u.isMDXComponent=!0}}]);
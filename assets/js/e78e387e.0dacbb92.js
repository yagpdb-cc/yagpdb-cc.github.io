"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4380],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const i={title:"View Leaderboard"},o=void 0,l={unversionedId:"leveling/view-leaderboard",id:"leveling/view-leaderboard",title:"View Leaderboard",description:"This command displays a paginated leaderboard where users with higher experience come first.",source:"@site/docs/leveling/view-leaderboard.md",sourceDirName:"leveling",slug:"/leveling/view-leaderboard",permalink:"/leveling/view-leaderboard",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/leveling/view-leaderboard.md",tags:[],version:"current",frontMatter:{title:"View Leaderboard"},sidebar:"sidebar",previous:{title:"Set XP/Level",permalink:"/leveling/set-xp"},next:{title:"View Rank",permalink:"/leveling/view-rank"}},d={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command displays a paginated leaderboard where users with higher experience come first."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(leaderboard|lb|top)(\\s+|\\z)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-leaderboard")," - Views the first page of the leaderboard."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-leaderboard <page>")," - Views a specific page of the leaderboard.")),(0,a.kt)("admonition",{title:"Aliases",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"leaderboard"),", you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"lb")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"top"),".")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/leveling/leaderboard.go.tmpl",file:"../../../src/leveling/leaderboard.go.tmpl"},'{{/*\n    Views the leaderboard of the server for the leveling system.\n    See <https://yagpdb-cc.github.io/leveling/view-leaderboard> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $page := 1 }}\n{{ with reFind `\\d+` (joinStr " " .CmdArgs) }} {{ $page = . | toInt }} {{ end }}\n{{ $skip := mult (sub $page 1) 10 }}\n{{ $users := dbTopEntries "xp" 10 $skip }}\n{{ if not (len $users) }}\n    There were no users on that page!\n{{ else }}\n    {{ $rank := $skip }}\n    {{ $display := "" }}\n    {{ range $users }}\n        {{- $usr := .User.String }}\n        {{- if eq $usr "#" }}\n            {{- $usr = .UserID }}\n        {{- end }}\n        {{- $xp := toInt .Value }}\n        {{- $rank = add $rank 1 }}\n        {{- $display = printf "%s\\n\u2022 **%d.** [%s](https://yagpdb.xyz) :: Level %d (%d XP)"\n            $display $rank $usr (toInt (roundFloor (mult 0.1 (sqrt $xp)))) $xp -}}\n    {{ end }}\n    {{ $id := sendMessageRetID nil (cembed\n        "title" "\u276f Leaderboard"\n        "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png")\n        "color" 14232643\n        "description" $display\n        "footer" (sdict "text" (joinStr "" "Page " $page))\n    ) }}\n    {{ addMessageReactions nil $id "\u25c0\ufe0f" "\u25b6\ufe0f" }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}c.isMDXComponent=!0}}]);
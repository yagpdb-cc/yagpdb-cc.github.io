"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8130],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4627:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={title:"Reaction Bookmark"},a=void 0,c={unversionedId:"utilities/reactionbookmark",id:"utilities/reactionbookmark",title:"Reaction Bookmark",description:"This command functions just like the bookmark command, but instead it uses a",source:"@site/docs/utilities/reactionbookmark.md",sourceDirName:"utilities",slug:"/utilities/reactionbookmark",permalink:"/utilities/reactionbookmark",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/reactionbookmark.md",tags:[],version:"current",frontMatter:{title:"Reaction Bookmark"},sidebar:"sidebar",previous:{title:"Reaction Logs",permalink:"/utilities/reaction-logs"},next:{title:"Send Message",permalink:"/utilities/send-message"}},s={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Preview",id:"preview",level:2},{value:"Author",id:"author",level:2}],l={toc:u},m="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command functions just like the bookmark command, but instead it uses a\nreaction as trigger."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaction")," ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Added reactions only")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Just react with the specified emoji and see the magic happen."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$EMOJI")," ",(0,o.kt)("br",null),"\nThe emoji used to trigger a bookmark. If it's a custom emoji, only use the\nemoji's name.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/reactionbookmark.go.tmpl",file:"../../../src/utilities/reactionbookmark.go.tmpl"},'{{/*\n    Allows you to bookmark messages via a reaction.\n    See <https://yagpdb-cc.github.io/utilities/reactionbookmark> for more information.\n\n    Author: TheHolyWatermelon <https://github.com/TheHolyWaterme1on>\n    Co-Author: Luca Zeuch <https://github.com/l-zeuch>\n*/}}\n\n{{/* Configuration start */}}\n{{ $EMOJI := "\ud83d\udd16" }} {{/* The emoji used to trigger a bookmark. use the emoji name when using a custom emoji. */}}\n{{/* Configuration end */}}\n\n{{/* Actual Code */}}\n{{ if and (eq .Reaction.Emoji.Name $EMOJI) .ReactionAdded }}\n    {{ $channel := .Channel.ID }}\n    {{ $message := .Message.ID }}\n    {{ $guild := .Guild.ID }}\n\n    {{ $author := (print .ReactionMessage.Author.Mention) }}\n    {{ $link := (printf "https://discord.com/channels/%d/%d/%d" $guild $channel $message) }}\n\n    {{/* Nicely trim the message content if it\'s too big, it\'s just a teaser */}}\n    {{ $contents := .Message.Content }}\n    {{ if gt (len $contents) 500 }}\n        {{  $contents = printf "%s..." (slice $contents 0 500) }}\n    {{ end }}\n\n    {{ $embed := cembed\n            "title" "Bookmark"\n            "description" "You asked me to bookmark this for you:"\n            "fields" (cslice\n                (sdict "name" "Info:" "value" (print "Author " $author (printf "\\nChannel: <#%d>\\nSource: [Jump!](%s)" .Channel.ID $link)) "inline" true)\n                (sdict "name" "Contents:" "value" $contents)\n            )\n         }}\n    {{ sendDM $embed }}\n{{ end }}\n')),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reactionbookmark.png",src:n(6768).Z,width:"369",height:"301"})),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was authored by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TheHolyWaterme1on"},"@TheHolyWaterme1on")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/l-zeuch"},"@l-zeuch"),"."))}p.isMDXComponent=!0},6768:function(e,t,n){t.Z=n.p+"assets/images/reactionbookmark-a12824845d83bbb830460b7b7d8cac80.png"}}]);
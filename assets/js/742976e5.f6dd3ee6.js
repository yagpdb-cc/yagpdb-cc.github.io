"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4588],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1545:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={title:"Reaction Handler"},o=void 0,c={unversionedId:"giveaway/compressed/reaction-handler",id:"giveaway/compressed/reaction-handler",title:"Reaction Handler",description:"This command handles reactions for the compressed version of the giveaway package.",source:"@site/docs/giveaway/compressed/reaction-handler.md",sourceDirName:"giveaway/compressed",slug:"/giveaway/compressed/reaction-handler",permalink:"/giveaway/compressed/reaction-handler",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/giveaway/compressed/reaction-handler.md",tags:[],version:"current",frontMatter:{title:"Reaction Handler"},sidebar:"sidebar",previous:{title:"Main CC",permalink:"/giveaway/compressed/main-cc"},next:{title:"Overview",permalink:"/info/overview"}},l={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command handles reactions for the compressed version of the giveaway package."),(0,r.kt)("p",null,"For more information about this particular version of the giveaway package, see ",(0,r.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,r.kt)("h2",{id:"trigger"},"Trigger"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Reaction"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Added + Removed Reactions")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"overview/#configuration"},"giveaway package overview")," for more information about how to configure this command."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/giveaway/compressed/reaction_handler.go.tmpl",file:"../../../../src/giveaway/compressed/reaction_handler.go.tmpl"},'{{$gEmoji:=`<:yag:277569741932068864>`}}\n\n{{/*Code*/}}\n{{ $data:=sdict}}\n\n{{$compareEmoji:=.Reaction.Emoji.Name}}\n{{with reFindAllSubmatches `(\\d+)>\\z` $gEmoji}}{{$gEmoji =index . 0 1}}{{$compareEmoji =str $.Reaction.Emoji.ID}}{{end}}\n \n{{if and (eq $compareEmoji $gEmoji) (not .User.Bot)}}\n\n{{with (dbGet 7777 "giveaway_active").Value}}{{$data =sdict .}}{{end}}\n{{$giveawayData := $data.Get (joinStr "" .Reaction.ChannelID .Reaction.MessageID)}}\n\n{{if $giveawayData}}\n{{$giveawayData =sdict $giveawayData}}\n{{$IDregex:=print .User.ID ","}}\n\n{{if .ReactionAdded}}{{$amount:=1}}{{if reFind $IDregex $giveawayData.listID}}{{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}{{$amount =0}}{{end}}{{$giveawayData.Set "listID" (print $giveawayData.listID  $IDregex)}}{{$giveawayData.Set "count" (add $giveawayData.count $amount)}}\n{{else}}{{if reFind $IDregex $giveawayData.listID}}{{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}{{$giveawayData.Set "count" (add $giveawayData.count -1)}}{{end}}    \n{{end}}\n\n{{$data.Set (joinStr "" .Reaction.ChannelID .Reaction.MessageID) $giveawayData}}{{dbSet 7777 "giveaway_active" $data}}\n\n{{end}}\n{{end}}\n')),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"This custom command was written by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}u.isMDXComponent=!0}}]);
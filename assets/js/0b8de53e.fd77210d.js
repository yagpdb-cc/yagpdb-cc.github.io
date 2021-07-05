(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[6157],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),g=i,y=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return a?n.createElement(y,o(o({ref:t},l),{},{components:a})):n.createElement(y,o({ref:t},l))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8190:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=["components"],c={sidebar_position:3,title:"Reaction Listener"},s=void 0,u={unversionedId:"giveaway/basic/reactionlistener",id:"giveaway/basic/reactionlistener",isDocsHomePage:!1,title:"Reaction Listener",description:"Supporting Reaction CC for Giveaway Package.",source:"@site/docs/giveaway/basic/reactionlistener.md",sourceDirName:"giveaway/basic",slug:"/giveaway/basic/reactionlistener",permalink:"/giveaway/basic/reactionlistener",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/giveaway/basic/reactionlistener.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reaction Listener"},sidebar:"tutorialSidebar",previous:{title:"Basic Giveaway",permalink:"/giveaway/basic/basicgiveaway"},next:{title:"Giveaway Read Me",permalink:"/giveaway/giveawayREADME"}},l=[],p={toc:l};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supporting Reaction CC for Giveaway Package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Reaction")," with option ",(0,r.kt)("inlineCode",{parentName:"p"},"Added + Removed reactions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'{{/* \n        Supporting Reaction CC for Giveaway Package.\n\n        Recommended trigger: Reaction trigger with option `Added + Removed reactions` selected.\n*/}}\n\n{{/* CONFIGURATION VALUES START */}}\n{{ $giveawayEmoji := `\ud83c\udf89` }} {{/* set giveaway emoji to be used */}}\n{{/* CONFIGURATION VALUES END */}}\n\n{{ $data := sdict }}\n\n{{/* if reaction emoji matches giveaway emoji and user reacting is not a bot , proceed */}}\n{{ if and (eq .Reaction.Emoji.Name $giveawayEmoji) (not .User.Bot ) }}\n    {{/* fetching active giveaways data */}}\n    {{ with (dbGet 7777 "giveaway_active").Value }}{{ $data = sdict . }}{{ end }}\n    {{$giveawayData := $data.Get (joinStr "" .Reaction.ChannelID .Reaction.MessageID)}}\n\n    {{/* if current message is an active giveaway announcement message */}}\n    {{ if $giveawayData }}\n        {{ $giveawayData = sdict $giveawayData }}\n        {{/* Regex for the User ID */}}\n        {{$IDregex:=print .User.ID ","}}\n        \n        {{if .ReactionAdded}}\n            {{$amount := 1}}\n            {{/* If user is somwhow already present in list, dont increase count but update position in list */}}\n            {{if reFind $IDregex $giveawayData.listID}}\n                {{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}\n                {{$amount = 0}}\n            {{end}}\n            {{$giveawayData.Set "listID" (print $giveawayData.listID  $IDregex)}}\n            {{$giveawayData.Set "count" (add $giveawayData.count $amount)}}\n        {{else}}\n            {{/* if reaction was removed reduce count by 1 and remove user ID from ID list if user ID is present in list. Else do nothing. */}}\n            {{if reFind $IDregex $giveawayData.listID}}\n                {{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}\n                {{$giveawayData.Set "count" (add $giveawayData.count -1)}}    \n            {{end}}\n        {{end}}\n                    \n        {{/* update active giveaway database entry */}}\n        {{ $data.Set (joinStr ""  .Reaction.ChannelID .Reaction.MessageID) $giveawayData }}\n        {{ dbSet 7777 "giveaway_active" $data }}\n    {{ end }}\n{{ end }}\n')))}d.isMDXComponent=!0}}]);
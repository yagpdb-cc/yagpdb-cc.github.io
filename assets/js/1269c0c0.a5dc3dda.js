(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6831],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return $},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},$=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,$=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(d,".").concat(b)]||u[b]||c[b]||s;return n?a.createElement(m,o(o({ref:t},$),{},{components:n})):a.createElement(m,o({ref:t},$))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8011:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return $},default:function(){return u}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:3,title:"starboardListener"},d=void 0,l={unversionedId:"funccs/starboard/starboardListener",id:"funccs/starboard/starboardListener",isDocsHomePage:!1,title:"starboardListener",description:"This command allows users to react to messages within the starboard channel with stars/anti-stars.",source:"@site/docs/funccs/starboard/starboardListener.md",sourceDirName:"funccs/starboard",slug:"/funccs/starboard/starboardListener",permalink:"/funccs/starboard/starboardListener",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/starboard/starboardListener.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"starboardListener"},sidebar:"tutorialSidebar",previous:{title:"Starboard",permalink:"/funccs/starboard/starboard"},next:{title:"Coin Flip",permalink:"/funccs/coinflip"}},$=[],c={toc:$};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This command allows users to react to messages within the starboard channel with stars/anti-stars."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Reaction trigger")," with option ",(0,s.kt)("inlineCode",{parentName:"p"},"Added + Removed reactions")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Credits:")," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dvoraknt"},"dvoraknt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Starboard Listener\n\n    This command allows users to react to messages within the starboard channel with stars/anti-stars.\n\n    Trigger: Reaction trigger with option `Added + Removed reactions`.\n    Channel limitations: Run ONLY in your starboard channel.\n    Author: dvoraknt <https://github.com/dvoraknt>\n\n    Last Update: 4/26/2021 - If installed before this date please update to this new script.\n*/}}\n\n{{/* CONFIGURATION VALUES START */}}\n{{$starEmoji := "\u2b50"}} {{/* Star emoji name */}}\n{{$starEmFull := "\u2b50"}} {{/*full emoji name of star emoji, needed to add/remove reactions. Same as $starEmoji if unicode*/}}\n{{$starLimit := 4}} {{/* Minimum of stars required to show up on the starboard. */}}\n{{$starboard := 712681639410663516}} {{/* ID of starboard channel */}}\n{{$maxAge := "2w"}} {{/*maximum age of message for stars to be counted. structure (mo)nth, (w)eek, (d)ay, (h)our. ex: 3d = 3days, 1mo = 1 month.*/}}\n{{$selfStarEnable := false}} {{/*Whether self-starring a message will make it show up on the starboard.*/}}\n{{$warnMessages := false}} {{/*Whether to send warning messages such as "you can\'t star your own post". Will be posted in the chat.*/}}\n\n{{$antiStarEnable := false}} {{/*enable/disable anti-star counting. enable = true, disable = false*/}}\n{{$antiStarEmoji := "\u274c"}} {{/*anti-star emoji name*/}}\n{{$antiStarEmFull := "\u274c"}} {{/*full emoji name of anti-star emoji, needed to add/remove message reactions. same as $antiStarEmoji if unicode*/}}\n{{$antiStarExtra := 0}} {{/*number of additional anti-star reactions needed before removing post. At zero the post will remove when it has the same number of anti-stars as stars./}}\n{{/* CONFIGURATION VALUES END */}}\n\n{{$starboardMessage := 0}}{{$thisID := 0}}{{$chanID := 0}}{{$count := 0}}{{$antiCount := 0}}\n{{$starboardMessage = .ReactionMessage.ID}}\n{{with (dbGet 0 "starboardMessages").Value}}\n    {{$idRegex := printf `(\\d+):%d:(\\d+)` $starboardMessage}}\n    {{with reFindAllSubmatches $idRegex .}} {{$thisID = index . 0 1}} {{$chanID = index . 0 2}} {{end}}\n{{end}}\n\n{{$data := ""}}{{$sboardPost := print $thisID}}{{$skip := true}}{{$starboardData := ""}}\n{{if and (or (eq .Reaction.Emoji.Name $starEmoji) (eq .Reaction.Emoji.Name $antiStarEmoji)) (not .User.Bot)}}\n    {{if not (dbGet 0 "starboardReactions")}}{{dbSet 0 "starboardReactions" (sdict $sboardPost (sdict "ID" $sboardPost "listID" (print .User.ID ",")))}}{{end}}\n    {{with (dbGet 0 "starboardReactions").Value}}{{$data = sdict .}}{{end}}\n    {{$starboardData = $data.Get $sboardPost}}\n\n    {{if and .ReactionAdded (not $selfStarEnable) (eq .User.ID ((getMessage $chanID $thisID).Author).ID)}}\n        {{deleteMessageReaction $starboard $starboardMessage .User.ID $starEmFull $antiStarEmFull}}\n        {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t influence your own post!")}}\n        {{deleteMessage $starboard $ret 3}}{{end}}\n    {{else if $starboardData}}\n        {{$starboardData = sdict $starboardData}}\n\n        {{if gt (len (print $data)) 90000}}\n            {{$dataSlice := cslice}}\n            {{range $k, $v := $data}}{{- $dataSlice = $dataSlice.Append (cslice $k $v) -}}{{end}}\n            {{$lenCount := 0}}{{$toDel := cslice}}\n            {{range $dataSlice}}\n                {{if lt $lenCount 10000}}\n                    {{- $lenCount = add $lenCount (len (print .)) -}}\n                    {{- $toDel = $toDel.Append (index . 0)}}\n            {{end}}{{end}}\n            {{range $toDel}}\n                {{$data.Del . }}\n        {{end}}{{end}}\n\n        {{if and .ReactionAdded (eq .Reaction.Emoji.Name $starEmoji)}}\n            {{if reFind (print "PO" .User.ID ",") $starboardData.listID}}\n                {{deleteMessageReaction $starboard $starboardMessage .User.ID $starEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You already reacted on the post!")}}\n                {{deleteMessage $starboard $ret 3}}{{end}}\n            {{else if reFind (print .User.ID ",") $starboardData.listAnti}}\n                {{deleteMessageReaction $starboard $starboardMessage .User.ID $starEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t star and anti-star the same message!")}}\n                {{deleteMessage $starboard $ret 3}}{{end}}\n            {{else}}\n                {{$IDregex:= print "SB" .User.ID ","}}\n                {{$starboardData.Set "listID" (print $starboardData.listID  $IDregex)}}\n                {{$skip = false}}\n            {{end}}\n\n        {{else if eq .Reaction.Emoji.Name $starEmoji}}\n            {{$IDregex := print "SB" .User.ID ","}}\n            {{if reFind $IDregex $starboardData.listID}}\n                {{$starboardData.Set "listID" (reReplace $IDregex $starboardData.listID "")}}\n            {{end}}\n            {{$skip = false}}\n        {{end}}\n\n        {{if and $antiStarEnable .ReactionAdded (eq .Reaction.Emoji.Name $antiStarEmoji)}}\n            {{if reFind (print "PO" .User.ID ",") $starboardData.listAnti}}\n                {{deleteMessageReaction $starboard $starboardMessage .User.ID $antiStarEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You already reacted on the post!")}}\n                {{deleteMessage $starboard $ret 3}}{{end}}\n            {{else if reFind (print .User.ID ",") $starboardData.listID}}\n                {{deleteMessageReaction $starboard $starboardMessage .User.ID $antiStarEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t star and anti-star the same message!")}}\n                {{deleteMessage $starboard $ret 3}}{{end}}\n            {{else}}\n                {{$IDregex:= print "SB" .User.ID ","}}\n                {{$starboardData.Set "listAnti" (print $starboardData.listAnti  $IDregex)}}\n                {{$skip = false}}\n            {{end}}\n\n        {{else if and $antiStarEnable (eq .Reaction.Emoji.Name $antiStarEmoji)}}\n            {{$IDregex := print "SB" .User.ID ","}}\n            {{if reFind $IDregex $starboardData.listAnti}}\n                {{$starboardData.Set "listAnti" (reReplace $IDregex $starboardData.listAnti "")}}\n            {{end}}\n            {{$skip = false}}\n        {{end}}\n\n    {{$data.Set $sboardPost $starboardData}}\n    {{dbSet 0 "starboardReactions" $data}}\n\n    {{else}}\n        {{$data.Set $sboardPost (sdict "ID" $sboardPost "listID" (print .User.ID ","))}}\n        {{dbSet 0 "starboardReactions" $data}}\n        {{$skip = false}}\n    {{end}}\n{{end}}\n\n{{$countTwo := 0}}{{$antiCountTwo := 0}}\n{{range .ReactionMessage.Reactions}}\n    {{- if eq .Emoji.Name $starEmoji}}\n        {{- $countTwo = .Count}}\n    {{- end -}}\n    {{- if and $antiStarEnable (eq .Emoji.Name $antiStarEmoji)}}\n        {{- $antiCountTwo = .Count}}\n    {{- end -}}\n{{end}}\n\n{{range (getMessage $chanID $thisID).Reactions}}\n    {{- if eq .Emoji.Name $starEmoji}}\n        {{- $count = (sub (add $countTwo .Count) 1)}}\n    {{- end -}}\n    {{- if and $antiStarEnable (eq .Emoji.Name $antiStarEmoji)}}\n        {{- $antiCount = (sub (add $antiCountTwo .Count) 1)}}\n    {{else if $antiStarEnable}}\n        {{- $antiCount = sub $antiCountTwo 1}}\n    {{- end -}}\n{{end}}\n\n{{if not $antiStarEnable}} {{$antiStarExtra = 0}} {{end}} {{/*resetting count to zero to prevent user configured variable from interrupting desired functionality*/}}\n{{if and (not $skip) (or (lt $count $starLimit) (ge (add $antiCount $antiStarExtra) $count))}}\n{{with (dbGet 0 "starboardMessages").Value}}\n    {{$idRegex := printf `\\n%d:(\\d+)` $thisID}}\n    {{with reFindAllSubmatches $idRegex .}} {{$starboardMessage = index . 0 1}} {{end}}\n        {{deleteMessage $starboard $starboardMessage 0}}\n        {{dbSet 0 "starboardMessages" (reReplace $idRegex . "")}}\n    {{end}}\n\n     {{if $starboardData}}\n        {{$nil := $starboardData.Set "listID" (reReplace `SB\\d+,` $starboardData.listID "")}}\n        {{$nil := $starboardData.Set "listAnti" (reReplace `SB\\d+,` $starboardData.listAnti "")}}\n        {{$data.Set $sboardPost $starboardData}}\n        {{dbSet 0 "starboardReactions" $data}}\n    {{end}}\n\n{{else if and $count (not $skip) (or (eq .Reaction.Emoji.Name $starEmoji) (eq .Reaction.Emoji.Name $antiStarEmoji)) (le (currentTime.Sub .Message.Timestamp.Parse) (toDuration $maxAge))}}\n\n    {{$emoji := "\ud83c\udf20"}}\n    {{if lt $count 5}} {{$emoji = "\u2b50"}}\n    {{else if lt $count 10}} {{$emoji = "\ud83c\udf1f"}}\n    {{else if lt $count 15}} {{$emoji = "\u2728"}}\n    {{else if lt $count 20}} {{$emoji = "\ud83d\udcab"}}\n    {{else if lt $count 30}} {{$emoji = "\ud83c\udf87"}}\n    {{else if lt $count 40}} {{$emoji = "\ud83c\udf86"}}\n    {{else if lt $count 50}} {{$emoji = "\u2604\ufe0f"}}\n    {{end}}\n\n    {{$embed := structToSdict (index ((getMessage $starboard $starboardMessage).Embeds) 0)}}\n    {{range $k, $v := $embed}}\n        {{- if eq (kindOf $v true) "struct"}}\n        {{- $embed.Set $k (structToSdict $v)}}\n    {{- end -}}{{end}}\n    {{if $embed.Author}} {{$embed.Author.Set "Icon_URL" $embed.Author.IconURL}} {{end}}\n    {{if $embed.Footer}} {{$embed.Footer.Set "Icon_URL" $embed.Footer.IconURL}} {{end}}\n\n    {{$embed.Set "footer" (sdict "text" (printf "%s %d | %s" $emoji $count $thisID))}}\n    {{editMessage $starboard $starboardMessage (cembed $embed)}}\n{{end}}\n')))}u.isMDXComponent=!0}}]);
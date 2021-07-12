(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7631],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},$={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(d,".").concat(u)]||m[u]||$[u]||i;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],o={title:"Main CC"},d=void 0,l={unversionedId:"fun/starboard/main-cc",id:"fun/starboard/main-cc",isDocsHomePage:!1,title:"Main CC",description:"This command allows users to react to messages with stars. If the number of stars reaches a given amount, it will be sent in the starboard channel.",source:"@site/docs/fun/starboard/main-cc.md",sourceDirName:"fun/starboard",slug:"/fun/starboard/main-cc",permalink:"/fun/starboard/main-cc",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/starboard/main-cc.md",version:"current",frontMatter:{title:"Main CC"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/fun/starboard/overview"},next:{title:"Reaction Handler",permalink:"/fun/starboard/reaction-handler"}},c=[{value:"Trigger",id:"trigger",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],$={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},$,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command allows users to react to messages with stars. If the number of stars reaches a given amount, it will be sent in the starboard channel."),(0,i.kt)("p",null,"For more information about the starboard system, see ",(0,i.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Added + Removed Reactions")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This command should be set to ",(0,i.kt)("em",{parentName:"p"},"ignore")," your starboard channel in the channel restrictions."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"overview/#configuration"},"starboard system overview")," for more information regarding how to configure this command."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../../src/fun/starboard_v2/starboard.go.tmpl",file:"../../../../src/fun/starboard_v2/starboard.go.tmpl"},'{{/*\n    Allows users to react to messages with stars. If it reaches a given amount, it will be sent in the starboard channel.\n    See <https://yagpdb-cc.github.io/fun/starboard/main-cc> for more information.\n\n    Author: dvoraknt <https://github.com/dvoraknt>\n*/}}\n\n{{/* Configurable values */}}\n{{$starEmoji := "\u2b50"}}\n{{$starEmFull := "\u2b50"}}\n{{$starLimit := 4}}\n{{$starboard := 712681639410663516}}\n{{$maxAge := "2w"}}\n{{$selfStarEnable := false}}\n{{$warnMessages := false}}\n\n{{$antiStarEnable := false}}\n{{$antiStarEmoji := "\u274c"}}\n{{$antiStarEmFull := "\u274c"}}\n{{$antiStarExtra := 0}}\n{{/* End of configurable values */}}\n\n{{$linkRegex := `https?:\\/\\/(?:\\w+\\.)?[\\w-]+\\.[\\w]{2,3}(?:\\/[\\w-_.]+)+\\.(?:png|jpg|jpeg|gif|webp)`}}\n\n{{$thisID := .ReactionMessage.ID}}{{$skip := true}}\n{{$data := ""}}{{$starboardData := ""}}{{$sboardPost := print $thisID}}{{$cid := .Reaction.ChannelID}}{{$mid := .Reaction.MessageID}}\n{{if and (or (eq .Reaction.Emoji.Name $starEmoji) (eq .Reaction.Emoji.Name $antiStarEmoji)) (not .User.Bot)}}\n    {{if not (dbGet 0 "starboardReactions")}}{{dbSet 0 "starboardReactions" (sdict $sboardPost (sdict "ID" $sboardPost "listID" "" "listAnti" ""))}}{{end}}\n    {{with (dbGet 0 "starboardReactions").Value}}{{$data = sdict .}}{{end}}\n    {{$starboardData = $data.Get $sboardPost}}\n    \n    {{if and .ReactionAdded (not $selfStarEnable) (eq .User.ID (.Message.Author).ID)}}\n        {{deleteMessageReaction $cid $mid .User.ID $starEmFull $antiStarEmFull}}\n        {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t influence your own post!")}}\n        {{deleteMessage $cid $ret 3}}{{end}}\n    {{else if $starboardData}}\n        {{$starboardData = sdict $starboardData}}\n        \n        {{if and .ReactionAdded (eq .Reaction.Emoji.Name $starEmoji)}}\n            {{if reFind (print "SB" .User.ID ",") $starboardData.listID}}\n                {{deleteMessageReaction $cid $mid .User.ID $starEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You already reacted on starboard!")}}\n                {{deleteMessage $cid $ret 3}}{{end}}\n            {{else if reFind (print .User.ID ",") $starboardData.listAnti}}\n                {{deleteMessageReaction $cid $mid .User.ID $starEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t star and anti-star the same message!")}}\n                {{deleteMessage $cid $ret 3}}{{end}}\n            {{else}}\n                {{$IDregex:= print "PO" .User.ID ","}}\n                {{$starboardData.Set "listID" (print $starboardData.listID  $IDregex)}}\n                {{$skip = false}}\n            {{end}}\n        \n        {{else if eq .Reaction.Emoji.Name $starEmoji}}\n            {{$IDregex := print "PO" .User.ID ","}} \n            {{if reFind $IDregex $starboardData.listID}}\n                {{$starboardData.Set "listID" (reReplace $IDregex $starboardData.listID "")}}\n            {{end}}\n            {{$skip = false}}\n        {{end}}\n        \n        {{if and $antiStarEnable .ReactionAdded (eq .Reaction.Emoji.Name $antiStarEmoji)}}\n            {{if reFind (print "SB" .User.ID ",") $starboardData.listAnti}}\n                {{deleteMessageReaction $cid $mid .User.ID $antiStarEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You already reacted on starboard!")}}\n                {{deleteMessage $cid $ret 3}}{{end}}\n            {{else if reFind (print .User.ID ",") $starboardData.listID}}\n                {{deleteMessageReaction $cid $mid .User.ID $antiStarEmFull}}\n                {{if $warnMessages}}{{$ret := sendMessageRetID nil (print .User.Mention " You can\'t star and anti-star the same message!")}}\n                {{deleteMessage $cid $ret 3}}{{end}}\n            {{else}}\n                {{$IDregex:= print "PO" .User.ID ","}}\n                {{$starboardData.Set "listAnti" (print $starboardData.listAnti  $IDregex)}}\n                {{$skip = false}}\n            {{end}}\n        \n        {{else if and $antiStarEnable (eq .Reaction.Emoji.Name $antiStarEmoji)}}\n            {{$IDregex := print "PO" .User.ID ","}}\n            {{if reFind $IDregex $starboardData.listAnti}}\n                {{$starboardData.Set "listAnti" (reReplace $IDregex $starboardData.listAnti "")}}\n            {{end}}\n            {{$skip = false}}\n        {{end}}\n\n    {{$data.Set $sboardPost $starboardData}}\n    {{dbSet 0 "starboardReactions" $data}}\n    \n    {{else}}\n        {{$data.Set $sboardPost (sdict "ID" $sboardPost "listID" (print "PO" .User.ID ",") "listAnti" "")}}\n        {{dbSet 0 "starboardReactions" $data}}\n        {{$skip = false}}\n    {{end}}\n{{end}}\n\n{{$count := 0}} {{$antiCount := 0}}\n{{range .ReactionMessage.Reactions}}\n    {{- if and (eq .Emoji.Name $starEmoji) (ge .Count $starLimit)}}\n        {{- $count = .Count}}\n    {{- end -}}\n    {{- if and $antiStarEnable (eq .Emoji.Name $antiStarEmoji) (ge .Count $starLimit)}}\n        {{- $antiCount = .Count}}\n    {{- end -}}\n{{end}}\n\n{{$starboardMessage := 0}}{{$thisID := 0}}{{$chanID := 0}}\n{{$thisID = .ReactionMessage.ID}}\n{{with (dbGet 0 "starboardMessages").Value}}\n    {{$idRegex := printf `%d:(\\d+)` $thisID}}\n    {{with reFindAllSubmatches $idRegex .}} {{$starboardMessage = index . 0 1}} {{end}}\n    {{if not (getMessage $starboard $starboardMessage)}}\n        {{$starboardMessage = 0}}\n        {{dbSet 0 "starboardMessages" (reReplace $idRegex . "")}}\n    {{else}}\n        {{range (getMessage $starboard $starboardMessage).Reactions}}\n        {{- if eq .Emoji.Name $starEmoji}}\n            {{- $count = (sub (add $count .Count) 1)}}\n        {{- end -}}\n        {{- if and $antiStarEnable (eq .Emoji.Name $antiStarEmoji)}}\n            {{- $antiCount = (sub (add $antiCount .Count) 1)}}\n        {{- end -}}\n    {{end}}\n    {{end}}\n{{end}}\n    \n{{if not $antiStarEnable}} {{$antiStarExtra = 0}} {{end}} {{/*resetting count to zero to prevent user configured variable from interrupting desired functionality*/}}\n{{if and (not $skip) (or (lt $count $starLimit) (ge (add $antiCount $antiStarExtra) $count))}}\n{{with (dbGet 0 "starboardMessages").Value}}\n    {{$idRegex := printf `\\n%d:(\\d+):(\\d+)` $thisID}}\n    {{with reFindAllSubmatches $idRegex .}} {{$starboardMessage = index . 0 1}} {{end}}\n        {{deleteMessage $starboard $starboardMessage 0}}\n        {{dbSet 0 "starboardMessages" (reReplace $idRegex . "")}}\n    {{end}}\n    \n     {{if $starboardData}}\n        {{$nil := $starboardData.Set "listID" (reReplace `SB\\d+,` $starboardData.listID "")}}\n        {{$nil := $starboardData.Set "listAnti" (reReplace `SB\\d+,` $starboardData.listAnti "")}}\n        {{$data.Set $sboardPost $starboardData}}\n        {{dbSet 0 "starboardReactions" $data}}\n    {{end}}\n    \n{{else if and $count (not $skip) (or .ReactionMessage.Content .ReactionMessage.Attachments) (or (eq .Reaction.Emoji.Name $starEmoji) (eq .Reaction.Emoji.Name $antiStarEmoji)) (le (currentTime.Sub .Message.Timestamp.Parse) (toDuration $maxAge))}}\n    {{$emoji := "\ud83c\udf20"}}\n    {{if lt $count 5}} {{$emoji = "\u2b50"}}\n    {{else if lt $count 10}} {{$emoji = "\ud83c\udf1f"}}\n    {{else if lt $count 15}} {{$emoji = "\u2728"}}\n    {{else if lt $count 20}} {{$emoji = "\ud83d\udcab"}}\n    {{else if lt $count 30}} {{$emoji = "\ud83c\udf87"}}\n    {{else if lt $count 40}} {{$emoji = "\ud83c\udf86"}}\n    {{else if lt $count 50}} {{$emoji = "\u2604\ufe0f"}}\n    {{end}}\n    {{$embed := sdict\n        "color" 0xFFAC33\n        "fields" (cslice\n            (sdict "name" "Author" "value" .ReactionMessage.Author.Mention "inline" true)\n            (sdict "name" "Channel" "value" (printf "<#%d>" .Channel.ID) "inline" true)\n        )\n        "timestamp" .ReactionMessage.Timestamp\n        "thumbnail" (sdict "url" (.ReactionMessage.Author.AvatarURL "1024"))\n        "footer" (sdict "text" (printf "%s %d | %d" $emoji $count .ReactionMessage.ID))\n    }}\n    {{with .ReactionMessage.Content}}\n        {{with reFind $linkRegex .}} {{$embed.Set "image" (sdict "url" .)}} {{end}}\n        {{$content := .}}\n        {{if gt (len .) 1000}} {{$content = slice . 0 1000 | printf "%s..."}} {{end}}\n        {{$embed.Set "fields" ($embed.fields.Append (sdict "name" "Message" "value" $content))}}\n    {{end}}\n    {{with .ReactionMessage.Attachments}}\n        {{$attachment := (index . 0).URL}}\n        {{if reFind `\\.(png|jpg|jpeg|gif|webp)$` $attachment}}\n            {{$embed.Set "image" (sdict "url" $attachment)}}\n        {{end}}\n    {{end}}\n    {{$embed.Set "fields" ($embed.fields.Append (sdict\n        "name" "Message"\n        "value" (printf "[Jump To](https://discordapp.com/channels/%d/%d/%d)" .Guild.ID .Channel.ID .ReactionMessage.ID)))\n    }}\n    {{with $starboardMessage}}\n        {{editMessage $starboard . (cembed $embed)}}\n    {{else}}\n        {{$ret := sendMessageRetID $starboard (complexMessage "embed" $embed)}}\n        {{if $antiStarEnable}} {{addMessageReactions $starboard $ret $starEmFull $antiStarEmFull}}\n        {{else}} {{addMessageReactions $starboard $ret $starEmFull}} {{end}}\n        {{$dbData := (printf\n            "%s\\n%d:%d:%d"\n            (or (dbGet 0 "starboardMessages").Value "")\n            .ReactionMessage.ID $ret .Reaction.ChannelID\n            )}}\n        {{dbSet 0 "starboardMessages" $dbData}}\n    {{end}}\n{{end}}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dvoraknt"},"@dvoraknt"),"."))}m.isMDXComponent=!0}}]);
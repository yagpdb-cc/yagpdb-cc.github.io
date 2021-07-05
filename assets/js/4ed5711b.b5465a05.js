(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[2737],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||c;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3458:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),i=["components"],a={sidebar_position:2,title:"Connect4"},s=void 0,l={unversionedId:"funccs/connect4system/connect4Start",id:"funccs/connect4system/connect4Start",isDocsHomePage:!1,title:"Connect4",description:"This is the command to start the connect4 game",source:"@site/docs/funccs/connect4system/connect4Start.md",sourceDirName:"funccs/connect4system",slug:"/funccs/connect4system/connect4Start",permalink:"/funccs/connect4system/connect4Start",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/connect4system/connect4Start.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Connect4"},sidebar:"tutorialSidebar",previous:{title:"Connect4 Read Me",permalink:"/funccs/connect4system/connect4ReadMe"},next:{title:"Connect4 Reaction Listener",permalink:"/funccs/connect4system/reactionListener"}},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This is the command to start the connect4 game"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,c.kt)("inlineCode",{parentName:"p"},"Regex")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,c.kt)("inlineCode",{parentName:"p"},"\\A(?:\\-|<@!?204255221017214977>)\\s*(?:c(?:on(?:nect)?)?4)(?: +|\\z)")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Usage:"),(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("inlineCode",{parentName:"p"},"-connect4 <User:Mention>"),(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("inlineCode",{parentName:"p"},"-connect4 help")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'{{/*    \n    This is the command to start the connect4 game\n\n    Recommended Trigger: \\A(?:\\-|<@!?204255221017214977>)\\s*(?:c(?:on(?:nect)?)?4)(?: +|\\z)\n    Recommended Trigger Type: Regex\n    \n    Usage:\n        -connect4 <User:Mention>\n        -connect4 help\n        \n    Aliases: connect4,con4,c4\n\n    Credits:\n    zen | \u30bc\u30f3 (https://github.com/z3nn13)\n*/}}\n\n{{/* Grid Create */}}\n{{define "board_maker"}}\n        {{- $board := cslice }}{{- $out := "" -}}\n        {{- range seq 0 6 }} {{/* 6 rows */}}\n        {{- $columns := cslice }}\n        {{- $rows := "" }}\n        {{- range seq 0 7 }}{{/* 7 columns */}}\n            {{- $columns = $columns.Append 0}}\n            {{- $rows = print $rows "\u26ab "}}\n        {{- end}}\n        {{- $board = $board.Append $columns}}\n        {{- $out = print $rows "\\n" $out -}}\n        {{- end}}\n        {{- $out := print $out "1\ufe0f\u20e3 2\ufe0f\u20e3 3\ufe0f\u20e3 4\ufe0f\u20e3 5\ufe0f\u20e3 6\ufe0f\u20e3 7\ufe0f\u20e3"}}\n        {{- $embed := sdict "title" "Connect4" "description" $out "color" 0x0045e6 "footer" (sdict "text" "Powered by \u2022 Yagpdb.xyz")}}\n        {{- .Set "board" $board}}\n        {{- .Set "embed" $embed}}\n{{ end}}\n\n{{ $help := cembed "title" "Connect4/con4/c4 Help" "description" "> **How To Play**\\n> \u2022 Each player will be given separate color tokens (\ud83d\udd34  or \ud83d\udfe1)\\n> \u2022 The first person to make a four-in-a-row will __win__\\n> \u2022 If all slots are filled with no winner determined, the game will result in a __draw__\\n\\n\\n> **Commands**\\n> `-connect4 <User:Mention>`\\n> **\u21b3** sends a challenge to a person\\n> `-connnect4 <confirm/deny:Text>`\\n> **\u21b3** accepts or decline an incoming challenge\\n\\n> To Drop A Token\\n> **\u21b3** React to the number emojis\\n> To Quit\\n> **\u21b3** React to the <a:r_leave:844556617085485058> emoji." "color" 0xbdf2f0 "thumbnail" (sdict "url" "https://i.ibb.co/wr3Rxzh/7614604.png")}}\n{{ $errorMsg := ""}}{{ $data := sdict}}{{ $reply := false}}\n{{ $p1 := ""}}{{ $p2 := ""}}\n\n{{/* Setting limits */}}\n{{ if dbGet 2021 "connect4"}}\n    {{ $errorMsg = "Another game is still ongoing. Please wait for it to finish\\n> To quit, react to the <a:r_leave:844556617085485058>"}}\n{{ else if $db := dbGet 2021 "c4cooldown"}}\n        {{ $data = $db.Value}}\n        {{ $p1 = ($data.p1|getMember).User}}\n        {{ $p2 = ($data.p2|getMember).User}}\n        {{ if and (eq $p1.ID .User.ID) .Message.Mentions }} {{/* If the user sent a challenge to someone already*/}}\n                {{ $errorMsg = print "You already have an ongoing challenge. Try again in " ($db.ExpiresAt.Sub currentTime|humanizeDurationSeconds) "."}}\n        {{ else if eq $p2.ID .User.ID}}\n                {{ $reply = true }}\n        {{ end }}\n{{end}}\n\n{{/* Processing Input */}}\n{{ with .StrippedMsg }}\n        {{ if eq (.|lower) "help"}}\n                {{$errorMsg = ""}}\n                {{sendMessage nil $help}}\n        {{  else if $reply }}\n                {{ if not $errorMsg }}\n                        {{ dbDel 2021 "c4cooldown" }}\n                        {{ if reFind `(?i)(?:confirm|accept)` . }}\n                                {{ $temp := sdict}}\n                                {{ template "board_maker" $temp}}\n                                {{ $temp.embed.Set "author" (sdict "name" (print $p1.Username "\'s turn") "icon_url" ($p1.AvatarURL "256"))}}\n                                {{ $temp.embed.Set "fields" (cslice (sdict "name" "Player 1" "value" (print "> " $p1.Mention) "inline" true) \n                                (sdict "name" "Player 2" "value" $p2.Mention "inline" true))}}\n                                {{ $msgID := sendMessageRetID nil (complexMessage "content" (print "> A connect4 game has been started\\n\ud83d\udd34\u2503" $p1.Mention ", Please pick a slot") "embed" $temp.embed)}}\n                                {{ addMessageReactions nil $msgID "1\ufe0f\u20e3" "2\ufe0f\u20e3" "3\ufe0f\u20e3" "4\ufe0f\u20e3" "5\ufe0f\u20e3" "6\ufe0f\u20e3" "7\ufe0f\u20e3" "a:r_leave:844556617085485058"}}\n                                {{ dbSet 2021 "connect4" (sdict "players" (cslice "offset" $data.p1 $data.p2) "turn" 1 "board" $temp.board "msgID" $msgID "time" currentTime)}}\n                        {{ else if reFind `(?i)(?:deny|refuse|decline)` . }}\n                                {{ sendMessage nil (print $p1.Mention ", your challenge has been declined.")}}\n                        {{ else }}\n                                {{ sendMessage nil "Unknown Response. Challenge has been cancelled"}}\n                        {{ end }}\n                {{ end }}\n        {{ else }}\n                {{ with reFind `\\d{17,19}` .}}\n                        {{ if not $errorMsg }}\n                                {{ $p2 := .|toInt64|userArg}}\n                                {{ if $p2 }}\n                                        {{ dbSetExpire 2021 "c4cooldown" (sdict "p1" $.User.ID "p2" $p2.ID) 15}}\n                                        {{ sendMessage nil (printf "%s, %s has challenged you to a connect4 match! (15s)\\nReply with `-connect4 (accept/deny)`" $p2.Mention $.User.Mention)}} \n                                {{ else }}\n                                        {{ $errorMsg = "Error: Invalid User" }}\n                                {{ end }}\n                        {{ end }}\n                {{ else }}\n                        {{ $errorMsg = "Unknown Arguments\\nType `-connect4 help` for more info" }}\n                {{ end }}\n        {{ end }}\n{{ else }}\n        {{ $errorMsg = "" }}\n        {{ sendMessage nil $help }}\n{{ end }}\n\n{{ with $errorMsg}}{{ sendMessage nil . }}{{ end }}\n')))}m.isMDXComponent=!0}}]);
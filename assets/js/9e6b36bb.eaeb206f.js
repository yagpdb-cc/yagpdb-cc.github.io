(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[6278],{3905:function(e,n,i){"use strict";i.d(n,{Zo:function(){return d},kt:function(){return f}});var t=i(7294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=t.createContext({}),m=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},d=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(i),f=o,u=c["".concat(l,".").concat(f)]||c[f]||g[f]||s;return i?t.createElement(u,a(a({ref:n},d),{},{components:i})):t.createElement(u,a({ref:n},d))}));function f(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=i.length,a=new Array(s);a[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var m=2;m<s;m++)a[m]=i[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},3629:function(e,n,i){"use strict";i.r(n),i.d(n,{frontMatter:function(){return a},metadata:function(){return r},toc:function(){return l},default:function(){return d}});var t=i(2122),o=i(9756),s=(i(7294),i(3905)),a={sidebar_position:2,title:"Big Emoji V2"},r={unversionedId:"utilities/bigemojiv2",id:"utilities/bigemojiv2",isDocsHomePage:!1,title:"Big Emoji V2",description:"This command allows you to enlarge virtually any emojis used in your server. It carries the same base function as the original Big Emoji CC (allowing you to enlarge one single emoji with -bigemoji ) but extends functionality to use message ID or link to view enlarged versions of emojis used in other members messages or as reactions (with optional -re flag). When multiple emojis are used in a messageor as reactions this CC will generate a list of up to 25 with links to view the larger versions in your browser.",source:"@site/docs/utilities/bigemojiv2.md",sourceDirName:"utilities",slug:"/utilities/bigemojiv2",permalink:"/utilities/bigemojiv2",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/utilities/bigemojiv2.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Big Emoji V2"},sidebar:"tutorialSidebar",previous:{title:"General Utility CCs",permalink:"/utilities/utilitiesREADME"},next:{title:"Big Emoji",permalink:"/utilities/bigemoji"}},l=[],m={toc:l};function d(e){var n=e.components,i=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This command allows you to enlarge virtually any emojis used in your server. It carries the same base function as the original Big Emoji CC (allowing you to enlarge one single emoji with ",(0,s.kt)("inlineCode",{parentName:"p"},"-bigemoji <emoji>"),") but extends functionality to use message ID or link to view enlarged versions of emojis used in other members messages or as reactions (with optional ",(0,s.kt)("inlineCode",{parentName:"p"},"-re")," flag). When multiple emojis are used in a messageor as reactions this CC will generate a list of up to 25 with links to view the larger versions in your browser."),(0,s.kt)("p",null,"While it's fun to view emojis other members are using this is also a moderation tool. It can often be difficult to see detailed emojis in messages or when used as reactions, being able to safely pull them into a staff channel can allow you to moderate things such as NSFW emojis without drawing attention to them. This also allows you to better view reactions while on mobile since Discord has made it near impossible to view reaction names and images."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Regex")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(be|big-?emo(te|ji))(\\s+|\\z)")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Usage:"),(0,s.kt)("br",{parentName:"p"}),"\n","Use ",(0,s.kt)("inlineCode",{parentName:"p"},"-bigemoji help")," for information on how to use this CC."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(be|big-?emo(te|ji))(\\s+|\\z)`\n    \n    This command allows you to enlarge virtually any emojis used in your server. It carries the same base function as the original Big Emoji CC \n    (allowing you to enlarge one single emoji with `-bigemoji <emoji>`) but extends functionality to use message ID or link to view enlarged \n    versions of emojis used in other members messages or as reactions (with optional `-re` flag). When multiple emojis are used in a message\n    or as reactions this CC will generate a list of up to 25 with links to view the larger versions in your browser.\n    \n    While it\'s fun to view emojis other members are using this is also a moderation tool. It can often be difficult to see detailed emojis in \n    messages or when used as reactions, being able to safely pull them into a staff channel can allow you to moderate things such as NSFW \n    emojis without drawing attention to them. This also allows you to better view reactions while on mobile since Discord has made it near \n    impossible to view reaction names and images.\n    \n    Use `-bigemoji help` for information on how to use this CC.\n    \n    Author: https://github.com/dvoraknt\n    Last updated: 5/20/2021\n\n    Twemoji images are licences under CC-BY 4.0 and are provided by the official Twemoji project at https://github.com/twitter/twemoji\n*/}}\n\n{{deleteTrigger 0}}\n{{if .CmdArgs}}\n    {{$waitMsg := sendMessageRetID nil (print "<a:loading:844230891781226496> **Loading** <a:loading:844230891781226496>")}}\n    {{$embed := sdict}}{{$subArg := index .CmdArgs 0}}{{$emoji := ""}}{{$defEmoji := ""}}{{$fields := cslice}}{{$chan := 0}}{{$msg := 0}}{{$error := false}}{{$ogMsg := ""}}\n\n    {{if reFind `^(\\d{17,20})` $subArg}}\n        {{if getMessage nil $subArg}}\n            {{$msg = $subArg}}{{$chan = .nil}}\n            {{$ogMsg = (getMessage nil $subArg).Content}}\n            {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` $ogMsg}}\n            {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` $ogMsg}}\n        {{else}}\n            {{editMessage nil $waitMsg (print "**Message not found:** If the message isn\'t in <#" .Channel.ID "> you\'ll need to use the full message link. Make sure that the message has not been deleted.")}}\n            {{deleteMessage nil $waitMsg 10}}\n            {{$error = true}}\n        {{end}}\n\n    {{else if $linkArg := reFind `(?:[^<]|\\A)https?:\\/\\/(?:www\\.)?(?:ptb\\.|canary\\.)?discord(?:app)?\\.com\\/channels\\/(\\d{17,19})\\/(\\d{17,19})\\/(\\d{17,19})(?:[^\\d]|\\z)|<https?:\\/\\/(?:www\\.)?(?:ptb\\.|canary\\.)?discord(?:app)?\\.com\\/channels\\/(\\d{17,19})\\/(\\d{17,19})\\/(\\d{17,19})(?:[^>\\d]|\\z)` $subArg}}\n        {{$linkVar := (reFindAll `\\d+` $linkArg)}}\n        {{$chan = index $linkVar 1}}{{$msg = index $linkVar 2}}\n        {{if getMessage $chan $msg}}\n            {{$ogMsg = (getMessage $chan $msg).Content}}\n            {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` $ogMsg}}\n            {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` $ogMsg}}\n        {{else}}\n            {{editMessage nil $waitMsg (print "**Message not found:** Make sure YAGPDB has permission to read messages in <#" $chan "> and that the message has not been deleted.")}}\n            {{deleteMessage nil $waitMsg 10}}\n            {{$error = true}}\n        {{end}}\n        \n    {{else if eq $subArg "help"}}\n        {{$helpEmbed := sdict\n        \n        "title" (joinStr "" "Big Emoji Help") \n        "description" "This command will allow you to view a single emoji as a larger image or generate image/gif links for up to 25 individual emojis.\\n\\nYou can use it to view your own emojis, emojis in other messages, used as reactions, or even in a different channel. Use any message ID or message link to extract the emojis and enlarge them.\\n\\nTo capture reactions use the optional `-re` flag after the message ID or link." \n        "color" 4645612 \n        "fields" (cslice \n            (sdict "name" "Syntax" "value" "```elm\\n-bigemoji <Emoji> (minimum 1, maximum 25)\\n-bigemoji <MessageID> (use when original message exists within the same channel)\\n-bigemoji <MessageLink> (use to view reactions from anywhere that YAGPDB has read access)```" "inline" false)\n            (sdict "name" "Reaction Flag Usage" "value" "```elm\\n-bigemoji <MessageID> -re\\n-bigemoji <MessageLink> -re```" "inline" false)\n            (sdict "name" "Available Triggers" "value" "`-bigemoji` `-bigemote` `-big-emoji` `-big-emote` `-be`")\n            (sdict "name" "Information" "value" "Due to a few limitations some default emojis won\'t generate proper links or may be incorrect altogether. Most will work but some will not, sorry for any inconvenience.\\n\\nCustom emojis are displayed in their actual image size, default emojis are displayed in 72x72 as that is largest size the Twemoji CDN provides in PNG format." "inline" false)\n        )\n        "footer" (sdict "text" .Message.Author.String "icon_url" (.User.AvatarURL "256"))\n        "timestamp" currentTime\n        }}\n        {{editMessage nil $waitMsg (complexMessageEdit "content" "" "embed" (cembed $helpEmbed))}}\n        \n    {{else if eq $subArg "-re"}}\n        {{editMessage nil $waitMsg (print "**Invalid Syntax:** The `-re` flag must be placed after the message ID/link.")}}\n        {{deleteMessage nil $waitMsg 10}}\n        {{$error = true}}\n\n    {{else}}\n        {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` .Message.Content}}\n        {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` .Message.Content}}\n    {{end}}\n    \n    {{if and (reFind `(?i)-re` (print .CmdArgs)) $ogMsg}}\n    {{$emoji = cslice.AppendSlice $emoji}}{{$defEmoji = cslice.AppendSlice $defEmoji}}\n        {{range (getMessage $chan $msg).Reactions}}\n            {{if and (ne (toInt .Emoji.ID) 0) (not .Emoji.Animated)}}\n                {{- $emoji = $emoji.AppendSlice (cslice (cslice (printf "<:%s:%d>" .Emoji.Name .Emoji.ID) "" .Emoji.ID)) -}}\n            {{else if (ne (toInt .Emoji.ID) 0) .Emoji.Animated}}\n                {{- $emoji = $emoji.AppendSlice (cslice (cslice (printf "<:%s:%d>" .Emoji.Name .Emoji.ID) "a" .Emoji.ID)) -}}\n            {{else if eq (toInt .Emoji.ID) 0}}\n                {{- $defEmoji = $defEmoji.AppendSlice (cslice (cslice .Emoji.Name)) -}}\n            {{end}}\n        {{end}}\n    {{end}}\n    \n    {{if $emoji}}\n    {{if eq (add (len $emoji) (len $defEmoji)) 1}}\n        {{with $emoji}}\n            {{$animated := index . 0 1}}\n            {{$id := str (index . 0 2)}}\n            {{$ext := ".png"}}{{$typeExt := "Image"}}\n            {{if $animated}}{{$ext = ".gif"}} {{$typeExt = "Gif"}}{{end}}\n            {{$embed.Set "image" (sdict "url" (printf "https://cdn.discordapp.com/emojis/%s%s" $id $ext))}}\n            {{- $embed.Set "description" (print "`" (index (split (index $emoji 0 0) ":") 1) "`\\n[" $typeExt " Link](https://cdn.discordapp.com/emojis/" $id $ext ")") -}}\n        {{end}}\n    {{else}}\n        {{range $emoji}}\n            {{$animated := index . 1}}\n            {{$id := index . 2}}\n            {{$ext := ".png"}}{{$typeExt := "Image"}}\n            {{if $animated}}{{$ext = ".gif"}}{{$typeExt = "Gif"}}{{end}}\n            {{- $fields = $fields.Append (sdict "name" (print "`" (index (split (index . 0) ":") 1) "`") "value" (print "[" $typeExt " Link](https://cdn.discordapp.com/emojis/" $id $ext ")") "inline" true) -}}\n        {{end}}\n        {{$embed.Set "title" "This message contains more than one emoji."}}\n        {{$embed.Set "fields" $fields}}\n    {{end}}\n    {{end}}\n    \n    {{if $defEmoji}}\n        {{$emoji_U := ""}}{{$url := "https://twemoji.maxcdn.com/v/latest/72x72/"}}\n\n        {{if eq (add (len $emoji) (len $defEmoji)) 1}}\n            {{- range toRune (index $defEmoji 0 0)}}\n                {{- $emoji_U = joinStr "-" $emoji_U (printf "%04x" .)}}\n            {{- end -}}\n            {{$url = joinStr "" $url $emoji_U ".png"}}\n            {{$embed.Set "image"  (sdict "url" $url)}}\n            {{- $embed.Set "description" (print "`" (index $defEmoji 0 0) "`\\n[Image Link](" $url ")") -}}\n        {{else}}\n            {{range $defEmoji}}\n                {{- range toRune (index . 0)}}\n                    {{- $emoji_U = joinStr "-" $emoji_U (printf "%04x" . )}}\n                {{end}}\n                {{- $fields = $fields.Append (sdict "name" (print "`" (index . 0) "`") "value" (print "[Image Link](" (joinStr "" $url $emoji_U ".png") ")") "inline" true) -}}\n                {{$emoji_U = ""}}\n            {{end}}\n            {{$embed.Set "title" "This message contains more than one emoji."}}\n            {{$embed.Set "fields" $fields}}\n        {{end}}\n    {{end}}\n        \n    {{if and (not $emoji) (not $defEmoji) (not $error) (not (eq $subArg "help"))}}\n        {{editMessage nil $waitMsg (print "This message does not contain any emojis or you have given an incorrect message ID.")}}\n        {{deleteMessage nil $waitMsg 10}}\n    {{else if and (gt (len $fields) 25) (not $error) (not (eq $subArg "help"))}}\n        {{editMessage nil $waitMsg (print "There are more than 25 emojis in the message, please try again with fewer emojis or with a different source message.")}}\n        {{deleteMessage nil $waitMsg 10}}\n    {{else if $embed}}\n        {{$embed.Set "color" 0x39ff14}}\n        {{$embed.Set "title" (joinStr "" "Big Emoji")}}\n        {{if $defEmoji}}\n            {{$embed.Set "footer" (sdict "text" (print "Default emoji not correct? Check help.\\n" .Message.Author.String "  |  -bigemoji help") "icon_url" (.User.AvatarURL "256"))}}\n        {{else}}\n            {{$embed.Set "footer" (sdict "text" (print .Message.Author.String "  |  -bigemoji help") "icon_url" (.User.AvatarURL "256"))}}\n        {{end}}\n        {{editMessage nil $waitMsg (complexMessageEdit "content" "" "embed" (cembed $embed))}}\n    {{end}}\n\n{{else}}\n    {{$failMsg := sendMessageRetID nil (print "No arguments provided! Use `-bigemoji help` for information on how to use this command.")}}\n    {{deleteMessage nil $failMsg 10}}\n{{end}}\n')))}d.isMDXComponent=!0}}]);
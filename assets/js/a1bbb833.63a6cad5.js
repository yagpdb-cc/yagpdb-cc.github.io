(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[9679],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(t),g=i,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||s;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4824:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=t(2122),i=t(9756),s=(t(7294),t(3905)),a={sidebar_position:10,title:"JSON Converter"},o={unversionedId:"utilities/jsonconverter",id:"utilities/jsonconverter",isDocsHomePage:!1,title:"JSON Converter",description:"JSON Converter CC (JSONify)",source:"@site/docs/utilities/jsonconverter.md",sourceDirName:"utilities",slug:"/utilities/jsonconverter",permalink:"/utilities/jsonconverter",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/utilities/jsonconverter.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"JSON Converter"},sidebar:"tutorialSidebar",previous:{title:"Ghost-Ping v2",permalink:"/utilities/ghostpingv2"},next:{title:"Color Preview",permalink:"/utilities/colorpreview"}},c=[],l={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"JSON Converter CC (JSONify)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Command")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),"  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Usage:"),(0,s.kt)("br",{parentName:"p"}),"\n","Run the json command to find out :)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    JSON Converter CC (JSONify)\n\n    Usage: run the json command to find out :)\n\n    Recommended Trigger Type: Command\n    Recommended Trigger: `json`\n\n    Credits:\n    Devonte <https://github.com/devnote-dev>\n*/}}\n\n{{ $a := parseArgs 2 "```json <Channel:Mention> <Message:ID>\\njson <Channel:Name> <Message:ID>\\njson <Channel:ID> <Message:ID>\\njson 0 <Message:ID>\\n```**Optional Flags:**\\n```\\n[-j strict-format:flag]\\n[-file/f attachment:flag]```"\n(carg "string" "chan") (carg "int" "msgID") (carg "string" "flag: -j | -f") }}\n\n{{ $type := dict 0 "Default Message" 6 "Pinned Message" 7 "Join Message" 8 "Boost Message" 9 "Teir 1 Boost Message" 10 "Teir 2 Boost Message" 11 "Teir 3 Boost Message" 12 "Followed Channel Message" 19 "Reply Message" }}\n\n{{ $struct := "Unknown" }} {{ $ver := "JSONify v4.15" }} {{ $fa := false }} {{ $chan := .Channel }} {{ $ce := true }} {{ $ctx := "" }}\n\n{{ $link := joinStr "/" "https://discordapp.com/channels" .Guild.ID .Channel.ID ($a.Get 1) }}\n\n{{ $mainMessage := sendMessageRetID nil (cembed "description" "Converting Message... <a:loading:760219029620523008>") }}\n\n{{ if ne ($a.Get 0) "0" }}\n    {{ $chan = getChannel (or (reFind `\\d+` ($a.Get 0)) ($a.Get 0)) }}\n\n    {{ with $chan }} {{ $link = joinStr "/" "https://discordapp.com/channels" $.Guild.ID .ID ($a.Get 1) }}\n    {{ else }} {{ $ce = false }}\n    {{ end }}\n{{ end }}\n\n{{ if $ce }}\n    {{ if ($msg := getMessage $chan.ID ($a.Get 1)) }}\n        {{ with $msg.Embeds }} {{ $struct = print (title (index . 0).Type) " Embed" }}\n        {{ else }} {{ $struct = or (and $msg.Attachments "Attachment Message") ($type.Get (toInt $msg.Type)) $struct }}\n        {{ end }}\n\n        {{ $time := div $msg.ID 4194304|mult 1000000|toDuration }}\n        {{ $json := json $msg }}\n\n        {{ if ($a.IsSet 2) }}\n            {{ if (reFind `-j` ($a.Get 2)) }}{{ $json = reReplace `,` $json ",\\n" }}{{ end }}\n            {{ if (reFind `-f(?:ile)?` ($a.Get 2)) }}{{ $ctx = "The downloadable file attachment will be sent shortly. \ud83d\udc4c" }}{{ $fa = true }}{{ end }}\n        {{ end }}\n\n        {{ if or (ge (len $json) 2048) (reFind `\\[(?:{.*},?){4,}\\]` $json) }}\n            {{ $ctx = "The message you requested was either too big or contained something that would crash the CC. To prevent this, a downloadable attachment version will be sent instead." }}\n            {{ $fa = true }}\n        {{ end }}\n\n        {{ if $fa }}\n            {{ deleteMessage nil $mainMessage 0 }}\n            {{ sendMessage nil (complexMessage "content" $ctx "file" (printf "REQUESTED BY: %s (%d)\\nDATE/TIME: %s\\nGUILD: %s (%d)\\nCHANNEL: %s (%d)\\nSNOWFLAKE: %s\\nJSON:\\n\\n%s" .User.String .User.ID currentTime .Guild.Name .Guild.ID .Channel.Name .Channel.ID $time $json)) }}\n        {{ else }}\n            {{ $e := cembed\n                "author" (sdict "name" (print "Triggered by " .User.String) "icon_url" (.User.AvatarURL "256"))\n                "title" "JSON Output"\n                "description" (print "```json\\n" $json "\\n```")\n                "fields" (cslice\n                    (sdict "name" "Channel" "value" (print "<#" $chan.ID ">\\n(ID " $chan.ID ")") "inline" true)\n                    (sdict "name" "Message ID" "value" (print ($a.Get 1) "\\n[Click here](" $link ") to go to message.") "inline" true)\n                    (sdict "name" "Message Type" "value" $struct "inline" true)\n                    (sdict "name" "Snowflake (Age)" "value" (humanizeDurationSeconds (currentTime.Sub ($time|.DiscordEpoch.Add))) "inline" true)\n                    (sdict "name" "Size" "value" (print (fdiv (len $json) 1000) "kb") "inline" true))\n                "footer" (sdict "text" $ver) }}\n            {{ editMessage nil $mainMessage (complexMessageEdit "embed" $e) }}\n        {{ end }}\n    {{ else }}\n        {{ editMessage nil $mainMessage (complexMessageEdit "embed" (cembed "title" "Error" "description" "Unkown message. Please try again.")) }}\n    {{ end }}\n{{ else }}\n    {{ editMessage nil $mainMessage (complexMessageEdit "embed" (cembed "title" "Error" "description" "Unknown channel. Please try again.")) }}\n{{ end }}\n')))}d.isMDXComponent=!0}}]);
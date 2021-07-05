(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2864],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6208:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3,title:"Reaction Handler"},d=void 0,c={unversionedId:"moderation/reportsystem/reportreactionhandler",id:"moderation/reportsystem/reportreactionhandler",isDocsHomePage:!1,title:"Reaction Handler",description:"This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes",source:"@site/docs/moderation/reportsystem/reportreactionhandler.md",sourceDirName:"moderation/reportsystem",slug:"/moderation/reportsystem/reportreactionhandler",permalink:"/moderation/reportsystem/reportreactionhandler",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/reportsystem/reportreactionhandler.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reaction Handler"},sidebar:"tutorialSidebar",previous:{title:"Cancel Report",permalink:"/moderation/reportsystem/cancelreport"},next:{title:"Emote Filter",permalink:"/moderation/emotefilter"}},l=[],m={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes",(0,i.kt)("br",{parentName:"p"}),"\n","Reactions to make things easier for staff.",(0,i.kt)("br",{parentName:"p"}),"\n","This custom command manages the reaction menu.",(0,i.kt)("br",{parentName:"p"}),"\n","Make this in a seperate Reaction CC, due to its massive character count.",(0,i.kt)("br",{parentName:"p"}),"\n","Remove this leading comment once you added this command."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"Added Reactions only")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes\n    Reactions to make things easier for staff.\n    This custom command manages the reaction menu.\n    Make this in a seperate Reaction CC, due to its massive character count.\n    Remove this leading comment once you added this command.\n\n    Obligatory Trigger type and trigger: Reaction; added reactions only.\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n    License: MIT\n    Copyright: (c) 2021\n*/}}\n\n\n{{/* ACTUAL CODE */}}\n\n{{/* Functions; edit report embed */}}\n{{define "edit"}}\n    {{$rEmbed := .rembed}}\n    {{$rEmbed.Set "Fields" ((cslice).AppendSlice $rEmbed.Fields)}}\n    {{$emojis := .emojis}}\n    {{$moderator := .moderator}}\n    {{if ne .menu "none"}}\n        {{$rEmbed.Fields.Set 0 (sdict "name" "Current Status" "value" (printf "__%s__" .message))}}\n        {{$rEmbed.Fields.Set 5 (sdict "name" "Reaction Menu Options" "value" .menu)}}\n    {{else}}\n        {{$rEmbed.Set "Fields" (slice $rEmbed.Fields 0 5)}}\n        {{$rEmbed.Set "Footer" (sdict "text" (printf "Report closed! \u2022 Responsible Moderator: %s (ID: %d)" $moderator.String $moderator.ID) "icon_url" ($.User.AvatarURL "256"))}}\n    {{end}}\n    {{$rEmbed.Set "color" (toInt .color)}}\n    {{deleteAllMessageReactions .log .reportID}}\n    {{range $emojis}}\n        {{addReactions .}}\n    {{end}}\n    {{editMessage .log .reportID (complexMessageEdit "embed" $rEmbed)}}\n    {{if .notify}}\n        {{$message := complexMessage "content" (print .author.Mention ":") "embed" (cembed\n            "title" "Information"\n            "description" "News regarding your report!"\n            "fields" (cslice\n                (sdict "name" "Responsible Moderator:" "value" (print $moderator.Mention "\\nID: `" $moderator.ID "`") "inline" true)\n                (sdict "name" "Status:" "value" .message "inline" true)\n                (sdict "name" "\\u200B" "value" "\\u200B" "inline" true)\n                (sdict "name" "Reported User:" "value" (index $rEmbed.Fields 2).Value "inline" true)\n                (sdict "name" "Reason for Report:" "value" (index $rEmbed.Fields 1).Value "inline" true)\n            )\n            "footer" (sdict "text" (print $moderator.String " \u2022 " (currentTime.Format "Mon 02 Jan 15:04:05")) "icon_url" ($moderator.AvatarURL "256"))\n        )}}\n        {{sendMessage .discussion $message}}\n    {{end}}\n{{end}}\n\n{{/* Initialising stuff */}}\n{{$conf := sdict (dbGet .Guild.ID "reportSettings").Value}}\n{{$disc := $conf.reportDiscussion}}\n{{$logs := $conf.reportLog}}\n\n{{/* Validating that it is a report message, the user a mod, parsing the author from description */}}\n{{$isMod := in (split (index (split (exec "viewperms") "\\n") 2) ", ") "ManageMessages"}}\n{{if and ($embed := (index .ReactionMessage.Embeds 0)) (eq .Channel.ID $logs)}}\n    {{$report := (index .Message.Embeds 0|structToSdict)}}\n    {{range $k, $v := $report}}{{if eq (kindOf $v true) "struct"}}{{$report.Set $k (structToSdict $v)}}{{end}}{{end}}\n    {{if and $isMod (reFindAllSubmatches (toString $.User.ID) $embed.Footer.Text) $embed.Author $embed.Footer}}\n        {{with $report}}\n            {{$author := (index (reFindAllSubmatches `\\A<@!?(\\d{17,19})>` .Description) 0 1|toInt|getMember).User}}\n            {{.Set "Footer" .Footer}}\n            {{.Set "Author" .Author}}\n            {{$data := sdict "color" 0}}{{/* \'Empty\' sdict as data to prevent errors */}}\n            {{if eq $.Reaction.Emoji.Name "\u274c"}}\n                {{if (reFindAllSubmatches `(?i)deny request` (index $embed.Fields 5).Value)}}\n                    {{$data = sdict "color" 16711680 "message" "Request denied." "menu" "Dismiss report with \u274c, start investigation with \ud83d\udee1\ufe0f, or ask for more background information with \u26a0\ufe0f." "emojis" (cslice "\u274c" "\ud83d\udee1" "\u26a0")}}\n                {{else}}\n                    {{$data = sdict "color" 65280 "message" "Report dismissed." "menu" "Warn for `False report` with \u2757, or close without any further action with \ud83d\udc4c." "emojis" (cslice "\u2757" "\ud83d\udc4c")}}\n                {{end}}\n                {{$data.Set "notify" true}}\n            {{else if eq $.Reaction.Emoji.Name "\u26a0\ufe0f"}}\n                {{if (reFindAllSubmatches `(?i)deny request` (index $embed.Fields 5).Value)}}\n                    {{$data = sdict "menu" "Dismiss request with \u274c, or accept request (and nullify report) with \ud83d\udc4c." "emojis" (cslice "\u2757" "\ud83d\udc4c")}}\n                {{else}}\n                    {{$data = sdict "menu" "Dismiss report with \u274c or start investigation with \ud83d\udee1\ufe0f." "emojis" (cslice "\u274c" "\ud83d\udee1\ufe0f")}}\n                {{end}}\n                {{$data.Set "message" "More information requested."}}\n                {{$data.Set "notify" true}}\n                {{$data.Set "color" 255}}\n            {{else if eq $.Reaction.Emoji.Name "\ud83d\udc4c"}}\n                {{if (reFindAllSubmatches `(?i)deny request` (index $embed.Fields 5).Value)}}\n                    {{$data = sdict "message" "Request accepted, report nullified." "menu" "none" "notify" true}}\n                {{else if (reFindAllSubmatches `(?i)warn` (index $embed.Fields 5).Value)}}\n                    {{$data = sdict "message" "Report dismissed, no further action taken." "menu" "none" "notify" false}}\n                {{else}}\n                    {{$data = sdict "message" "Report resolved." "menu" "none" "notify" true}}\n                {{end}}\n                {{$data.Set "color" 65280}}\n                {{$data.Set "emojis" (cslice "\ud83c\udff3\ufe0f")}}\n            {{else if eq $.Reaction.Emoji.Name "\ud83d\udee1\ufe0f"}}\n                {{$data = sdict "color" 16776960 "message" "Under investigation." "menu" "Dismiss with \u274c or resolve with \ud83d\udc4c." "emojis" (cslice "\u274c" "\ud83d\udc4c") "notify" true}}\n            {{else if eq $.Reaction.Emoji.Name "\u2757"}}\n                {{$data = sdict "color" 16711680 "message" "Report dismissed, warned for false report." "menu" "none" "emojis" (cslice "\ud83c\udff3\ufe0f") "notify" false}}\n            {{end}}\n            {{if ne $.Reaction.Emoji.Name "\ud83c\udff3\ufe0f"}}\n            {{$data.Set "rembed" $report}}\n            {{$data.Set "log" $logs}}\n            {{$data.Set "reportID" $.Message.ID}}\n            {{$data.Set "author" $author}}\n            {{$data.Set "moderator" $.User}}\n            {{$data.Set "discussion" $disc}}\n            {{template "edit" $data}}\n            {{end}}\n        {{end}}\n    {{else if and $isMod (eq .Reaction.Emoji.Name "\ud83d\udd10") (reFindAllSubmatches "\u2022" $embed.Footer.Text)}}\n        {{$report.Set "Footer" (sdict "text" (printf "Responsible Moderator: %s (ID %d)" .User.String .User.ID))}}\n        {{$report.Set "Fields" ((cslice).AppendSlice $report.Fields)}}\n        {{.User.Mention}}: You opened this report now - take good care of it.\n        {{deleteResponse}}\n        {{deleteAllMessageReactions nil .Message.ID}}\n        {{editMessage nil .Message.ID (complexMessageEdit "embed" $report)}}\n        {{addReactions "\u274c" "\ud83d\udee1\ufe0f" "\u26a0\ufe0f"}}\n    {{else}}\n        {{deleteMessageReaction nil .Message.ID .User.ID "\ud83d\udd10" "\u274c" "\u2757" "\ud83d\udc4c" "\ud83d\udee1\ufe0f" "\u26a0\ufe0f"}}\n    {{end}}\n{{end}}\n')))}u.isMDXComponent=!0}}]);
(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[400],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||s;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=l;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},605:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),i={sidebar_position:2,title:"Custom Report"},a={unversionedId:"moderation/reportsystem/customreport",id:"moderation/reportsystem/customreport",isDocsHomePage:!1,title:"Custom Report",description:"This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes",source:"@site/docs/moderation/reportsystem/customreport.md",sourceDirName:"moderation/reportsystem",slug:"/moderation/reportsystem/customreport",permalink:"/yagpdb-cc/moderation/reportsystem/customreport",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/moderation/reportsystem/customreport.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Report"},sidebar:"tutorialSidebar",previous:{title:"Report System",permalink:"/yagpdb-cc/moderation/reportsystem/reportsystemREADME"},next:{title:"Cancel Report",permalink:"/yagpdb-cc/moderation/reportsystem/cancelreport"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes",(0,s.kt)("br",{parentName:"p"}),"\n","Reactions to make things easier for staff.",(0,s.kt)("br",{parentName:"p"}),"\n","This custom command is basically the native report-command, but adds some back-end functionalites in order for the rest to work :)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Regex")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"\\A-r(eport)?(?:u(ser)?)?(\\s+|\\z)")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Usage:"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"-ru <User:Mention/ID> <Reason:Text>")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This handy-dandy custom command-bundle allows a user to cancel their most recent report and utilizes\n    Reactions to make things easier for staff.\n    This custom command is basically the native report-command, but adds some back-end functionalites in order for the rest to work :)\n\n    Usage: `-ru <User:Mention/ID> <Reason:Text>`\n\n    Recommended Trigger type and trigger: Regex trigger with trigger `\\A-r(eport)?(?:u(ser)?)?(\\s+|\\z)`\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n    License: MIT\n    Copyright: (c) 2021\n*/}}\n\n{{/*CONFIG AREA START*/}}\n\n{{$REPORT_LOG := CHANNEL-ID}} {{/*The Channel-ID of your report logging channel.*/}}\n{{$REPORT_DISCUSSION := CHANNEL-ID}} {{/*The Channel-ID of the channel were users should talk to staff.*/}}\n\n{{/* CONFIG AREA END */}}\n\n\n{{/* ACTUAL CODE */}}\n{{$p := index (reFindAllSubmatches `.*?: \\x60(.*)\\x60\\z` (execAdmin "prefix")) 0 1}}\n{{$Escaped_Prefix := reReplace `[\\.\\[\\]\\-\\?\\!\\\\\\*\\{\\}\\(\\)\\|\\+]` $p `\\${0}`}}\n{{if not (reFind (print `\\A` $Escaped_Prefix `|<@!?204255221017214977>`) .Message.Content)}}\nDid not set regex to match Server Prefix!{{deleteTrigger}}\n{{else}}\n{{if and .CmdArgs (lt (len .CmdArgs) 2)}}\n    {{if eq (index .CmdArgs 0) "dbSetup"}}\n        {{if (in (split (index (split (exec "viewperms") "\\n") 2) ", ") "ManageServer")}}\n            {{dbSet .Guild.ID "reportSettings" (sdict "reportLog" $REPORT_LOG "reportDiscussion" $REPORT_DISCUSSION)}}\n            {{dbSet .Guild.ID "ReportNo" 0}}\n**Database primed, report count reset, system is ready to use!**\n        {{else}}\nYou do not have permission to use this command!\n        {{end}}\n    {{else}}\n    {{sendMessage nil (printf "```%s <User:Mention/ID> <Reason:Text>``` \\n Not enough arguments passed." .Cmd)}}\n    {{end}}\n{{else if not .CmdArgs}}\n    {{sendMessage nil (printf "```%s <User:Mention/ID> <Reason:Text>``` \\n Not enough arguments passed." .Cmd)}}\n{{else}}\n    {{$user := userArg (index .CmdArgs 0)}}\n    {{if eq $user.ID .User.ID}}\nYou can\'t report yourself, silly.{{deleteTrigger}}\n    {{else}}\n        {{$secret := adjective}}\n        {{$logs250 := execAdmin "log 250"}}\n        {{$reason := joinStr " " (slice .CmdArgs 1)}}\n        {{$history := ""}}\n        {{if (dbGet $user.ID "rhistory")}}\n            {{range (dbGetPattern $user.ID "rhistory%" 7 0)}}\n                {{$history = .Value}}\n            {{end}}\n            {{dbSet $user.ID "rhistory" (print (dbGet $user.ID "rhistory").Value "\\n" (currentTime.Format "02-01-2006-15:04:05") ": " $reason)}}\n        {{else}}\n            {{dbSet $user.ID "rhistory" (print (currentTime.Format "02-01-2006-15:04:05") ": " $reason)}}\n        {{end}}\n        {{$reportNo := dbIncr 2000 "ReportNo" 1}}\n        {{$reportEmbed := cembed "title" (print "Report No. " $reportNo)\n            "author" (sdict "name" (printf "%s (ID %d)" .User.String .User.ID) "icon_url" (.User.AvatarURL "256"))\n            "thumbnail" (sdict "url" ($user.AvatarURL "512"))\n            "description" (printf "<@%d> reported <@%d> in <#%d>." .User.ID $user.ID .Channel.ID)\n            "fields" (cslice\n                (sdict "name" "Current State" "value" "__Not reviewed yet.__")\n                (sdict "name" "Reason for Report" "value" $reason)\n                (sdict "name" "Reported user" "value" (printf "<@%d> (ID %d)" $user.ID $user.ID))\n                (sdict "name" "Message Logs" "value" (printf "[last 250 messages](%s) \\nTime - `%s`" $logs250 (currentTime.Format "Mon 02 Jan 15:04:05")))\n                (sdict "name" "History" "value" (print "```\\n" (or $history "None recorded") "\\n```"))\n                (sdict "name" "Reaction Menu Options" "value" (printf "\\nDismiss report with \u274c, start investigation with \ud83d\udee1\ufe0f, or ask for more background information with \u26a0\ufe0f."))\n            )\n            "footer" (sdict "text" "No moderator yet \u2022 Claim by reacting with \ud83d\udd10")\n        }}\n        {{$x := sendMessageRetID $REPORT_LOG $reportEmbed}}\n        {{addMessageReactions $REPORT_LOG $x "\ud83d\udd10"}}\nUser reported to the proper authorites!\n        {{dbSet .User.ID "key" $secret}}\n        {{if not .Message.Mentions}}\n        {{deleteTrigger}}\n        {{end}}\n        {{sendDM (printf "User reported to the proper authorities! If you wish to cancel your report, simply type \\n```-cancelr %d %s``` in any channel.\\n **A reason is required.**" $x $secret)}}\n{{end}}{{end}}{{end}}\n{{deleteResponse}}\n')))}d.isMDXComponent=!0}}]);
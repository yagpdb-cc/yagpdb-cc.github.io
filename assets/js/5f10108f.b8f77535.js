(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[4212],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return y}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},d=Object.keys(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),$=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=$(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,d=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=$(r),y=i,p=c["".concat(s,".").concat(y)]||c[y]||u[y]||d;return r?t.createElement(p,a(a({ref:n},l),{},{components:r})):t.createElement(p,a({ref:n},l))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var d=r.length,a=new Array(d);a[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var $=2;$<d;$++)a[$]=r[$];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7156:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s},default:function(){return l}});var t=r(2122),i=r(9756),d=(r(7294),r(3905)),a={sidebar_position:2,title:"Birthday CC"},o={unversionedId:"birthday/birthday",id:"birthday/birthday",isDocsHomePage:!1,title:"Birthday CC",description:"This custom command adds birthday functionality to your server, wishing members all the best on their respective date.",source:"@site/docs/birthday/birthday.md",sourceDirName:"birthday",slug:"/birthday/birthday",permalink:"/birthday/birthday",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/birthday/birthday.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Birthday CC"},sidebar:"tutorialSidebar",previous:{title:"Birthdays System",permalink:"/birthday/birthdayREADME"},next:{title:"Fun Commands",permalink:"/funccs/funccsREADME"}},s=[],$={toc:s};function l(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,d.kt)("wrapper",(0,t.Z)({},$,r,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"This custom command adds birthday functionality to your server, wishing members all the best on their respective date."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,d.kt)("inlineCode",{parentName:"p"},"Regex")),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,d.kt)("inlineCode",{parentName:"p"},"\\A\\-(my|start|stop|set|get|del)b(irth)?days?")),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Usage:"),"\nCommands and usage is outlined in the ",(0,d.kt)("a",{parentName:"p",href:"birthdayREADME/#commands"},"README"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-go"},'{{/* User Variables */}}\n{{$mods := cslice 748955521255473202}}\n{{$channelID := 741395967638634499}} {{/* Channel ID to send the bday msgs */}}\n{{$bdayMsg := "Congratulations for your birthday!"}}\n{{$invertedOrder := true}}\n{{$yearOptional := true}}\n{{$kickUnderAge := false}}\n{{$banUnderAge := false}}\n{{/* End */}}\n\n{{/* DONT TOUCH */}}\n{{/* Vars */}}\n{{$isMod := false}}{{$map := ""}}{{$error := ""}}{{$day := 0}}{{$month := 0}}{{$year := 0}}{{$isUnderAge := false}}{{$isValidDate := false}}{{$user := .User}}{{$checkDate := ""}}{{$insideMap := sdict}}{{$list := cslice}}{{$out := ""}}{{$send := false}}{{$userMonth := ""}}{{$today := sdict}}{{$delay := 86400}}{{$return := sdict}}\n{{$prefix := index (split .Cmd "") 0}}\n{{$commonError := "Correct date syntax is: `dd/mm/yyyy` - Example: `20/12/1998`"}}\n{{$commonErrorInverted := "Correct date syntax is: `mm/dd/yyyy` - Example: `12/20/1998`"}}\n{{if $yearOptional}}\n    {{$commonError = joinStr "\\n" $commonError "Year is optional."}}\n    {{$commonErrorInverted = joinStr "\\n" $commonErrorInverted "Year is optional."}}\n{{end}}\n{{$synt := print "Correct usage: `" $prefix "getbday @user`"}}\n\n{{/* Checks */}}\n{{range .Member.Roles}} {{- if in $mods .}} {{- $isMod = true}} {{- end -}} {{end}}\n{{if not .ExecData}}\n    {{if reFind `(?i)(my|set)` .Cmd}}\n        {{with .CmdArgs}}\n            {{$map = split (index . 0) "/"}}\n            {{if and (eq (len .) 2) $isMod}} {{with index . 1 | userArg}} {{$user = .}} {{else}} {{$error = "Invalid User."}} {{end}} {{end}}\n        {{end}}\n        {{with $map}}\n            {{if not $error}}\n                {{if ge (len .) 2}} {{$counter := 0}}\n                    {{if eq (len .) 3}} {{$year = index . 2 | toInt}} {{else}} {{if $yearOptional}} {{$year = 2000}} {{else}} {{$error = "error"}} {{end}} {{end}}\n                    {{if not $error}}\n                        {{if $invertedOrder}} {{$day = index . 1 | toInt}} {{$month = index . 0 | toInt}}\n                        {{else}} {{$day = index . 0 | toInt}} {{$month = index . 1 | toInt}}\n                        {{end}}\n                        {{with $day}} {{if or (gt . 31) (lt . 1)}} {{$error = print $error "\\nInvalid Day."}} {{else}} {{$counter = add $counter 1}} {{end}} {{end}}\n                        {{with $month}} {{if or (gt . 12) (lt . 1)}} {{$error = print $error "\\nInvalid Month."}} {{else}} {{$counter = add $counter 1}} {{end}} {{end}}\n                        {{if not $year}} {{$error = print $error "\\nInvalid Year."}} {{else}} {{$counter = add $counter 1}} {{end}}\n                        {{$checkDate = newDate $year $month $day 0 0 0}}\n                        {{if and (eq $counter 3) (eq (printf "%d" $checkDate.Month) (str $month)) (eq (printf "%d" $checkDate.Day) (str $day)) (eq (printf "%d" $checkDate.Year) (str $year))}} {{$counter = add $counter 1}}\n                        {{else if (or (not $error) (eq $error "Invalid User."))}} {{$error = print $error "\\nInvalid Date (usually day 31 on a 30 day month, or 29 of Feb in a non leap year)"}}\n                        {{end}}\n                        {{if eq $counter 4}} {{$isValidDate = true}}\n                            {{if lt ((currentTime.Sub $checkDate).Hours | toInt) 113880}} {{$isUnderAge = true}} {{end}}\n                        {{end}}\n                    {{else}}\n                        {{if $invertedOrder}} {{$error = $commonErrorInverted}}\n                        {{else}} {{$error = $commonError}}\n                        {{end}}\n                    {{end}}\n                {{else}}\n                    {{if $invertedOrder}} {{$error = $commonErrorInverted}}\n                    {{else}} {{$error = $commonError}}\n                    {{end}}\n                {{end}}\n            {{else}}\n                {{$error = print $error "\\n" "Correct syntax is: `" $prefix "setbday date @user`"}}\n            {{end}}\n        {{else}}\n            {{if $invertedOrder}} {{$error = $commonErrorInverted}}\n            {{else}} {{$error = $commonError}}\n            {{end}}\n        {{end}}\n    {{end}}\n{{end}}\n{{if $isValidDate}}\n    {{$userMonth = printf "%d" $checkDate.Month | toInt}}\n    {{with (dbGet $userMonth "bdays").Value}}\n        {{$insideMap = sdict .}}\n    {{end}}\n{{end}}\n\n{{/* Work */}}\n{{if and $isUnderAge $kickUnderAge (not $banUnderAge) (not $isMod)}} {{execAdmin "kick" $user "We do not allow users under 13 in this server."}} {{end}}\n{{if and $isUnderAge $banUnderAge (not $isMod)}} {{execAdmin "ban" $user "We do not allow users under 13 in this server."}} {{end}}\n{{with .ExecData}}\n    {{if eq (printf "%T" .) "int64"}} {{scheduleUniqueCC $.CCID $channelID . "bdays" true}} {{else}} {{scheduleUniqueCC $.CCID $channelID 86400 "bdays" true}} {{end}}\n    {{dbDel (currentTime.Add (mult -24 $.TimeHour | toDuration)).Day "bdayannounced"}}\n    {{with (dbGet (printf "%d" currentTime.Month | toInt) "bdays").Value}} {{$today = sdict .}} {{end}}\n    {{range (index $today (str currentTime.Day))}}\n        {{- if getMember .}}\n            {{- $bdayMsg = print $bdayMsg "\\n<@" . ">"}}\n            {{- $send = true}}\n        {{- end -}}\n    {{end}}\n    {{if and $send (not (dbGet currentTime.Day "bdayannounced"))}} {{dbSet currentTime.Day "bdayannounced" true}} {{sendMessageNoEscape nil $bdayMsg}} {{end}}\n{{else}}\n    {{if $isMod}}\n        {{if and (reFind `(?i)set` .Cmd) $isValidDate (not $error)}}\n            {{if eq (len .CmdArgs) 2}}\n                {{with $insideMap}}\n                    {{with index . (str $checkDate.Day)}} {{$list = $list.AppendSlice .}} {{end}}\n                    {{if not (in $list $user.ID)}}\n                        {{$list = $list.Append $user.ID}}\n                        {{.Set (str $checkDate.Day) $list}}\n                    {{end}}\n                {{else}}\n                    {{$list = $list.Append $user.ID}}\n                    {{$insideMap.Set (str $checkDate.Day) $list}}\n                {{end}}\n                {{with (dbGet $user.ID "bday").Value}}\n                    {{with .UTC}}\n                        {{if ne (print .) (print $checkDate.UTC)}}\n                            {{dbSet $userMonth "bdays" $insideMap}}\n                            {{$return.Set "Day" (str .Day)}} {{$return.Set "Month" (printf "%d" .Month | toInt)}} {{$return.Set "User" $user}}\n                            {{template "handleDeletes" $return}}\n                        {{else}}\n                            {{$error = print "This is already " $user.Mention "\'s birthday."}}\n                        {{end}}\n                    {{end}}\n                {{else}}\n                    {{dbSet $userMonth "bdays" $insideMap}}\n                {{end}}\n                {{if not $error}}\n                    {{dbSet $user.ID "bday" $checkDate.UTC}}\n                    {{if $invertedOrder}} {{$out = print "The bday of " $user.Mention " was set to be " ($checkDate.Format "01/02/2006")}}\n                    {{else}} {{$out = print "The bday of " $user.Mention " was set to be " ($checkDate.Format "02/01/2006")}}\n                    {{end}}\n                {{end}}\n            {{else}}\n                {{if $invertedOrder}} {{$error = "Not enough arguments passed.\\nCorrect usage is: `" $prefix "set 12/20/1998 @user`"}}\n                {{else}} {{$error = "Not enough arguments passed.\\nCorrect usage is: `" $prefix "set 20/12/1998 @user`"}}\n                {{end}}\n            {{end}}\n        {{else if reFind `(?i)stop` .Cmd}}\n            {{cancelScheduledUniqueCC .CCID "bdays"}}\n            {{$out = "I will no longer congratulate people on their birthday."}}\n        {{else if reFind `start` .Cmd}}\n            {{with .CmdArgs}} {{with index . 0 | toDuration}} {{$delay = add $delay .Seconds}} {{end}} {{end}}\n            {{if or (ne (currentTime.Add (mult 1000000000 $delay | toDuration)).Day ((currentTime.Add (mult 24 .TimeHour | toDuration)).Day)) (ge $delay 172800)}} {{$error = "Too long delay to start sending bday messages. You can only set delays up to tommorrow at 00:00 UTC"}}\n            {{else}}\n                {{execCC .CCID $channelID 1 $delay}}\n                {{$out = print "All set! Every day at **" ((currentTime.Add (mult 1000000000 $delay | toDuration)).Format "15:04 UTC") "** I will congratulate users if its their birthday."}}\n            {{end}}\n        {{else if reFind `(?i)get` .Cmd}}\n            {{with .CmdArgs}}\n                {{with index . 0 | userArg}}\n                    {{$user = .}}\n                    {{with (dbGet .ID "bday").Value}}\n                        {{if $invertedOrder}} {{$out = print "The bday of " $user.Mention " is " (.UTC.Format "01/02/2006")}}\n                        {{else}} {{$out = print "The bday of " $user.Mention " is " (.UTC.Format "02/01/2006")}}\n                        {{end}}\n                    {{else}}\n                        {{$error = "This user does not have a bday set."}}\n                    {{end}}\n                {{else}}\n                    {{$error = $synt}}\n                {{end}}\n            {{else}}\n                {{$error = $synt}}\n            {{end}}\n        {{end}}\n    {{end}}\n    {{if and (reFind `(?i)my` .Cmd) $isValidDate (not $out) (or (and (or $kickUnderAge $banUnderAge) (not $isUnderAge)) (and (not $kickUnderAge) (not $banUnderAge)))}}\n        {{if not (dbGet .User.ID "bday")}}\n            {{with $insideMap}}\n                {{with index . (str $checkDate.Day)}} {{$list = $list.AppendSlice .}}  {{end}}\n                {{if not (in $list $user.ID)}}\n                    {{$list = $list.Append $user.ID}}\n                    {{.Set (str $checkDate.Day) $list}}\n                    {{dbSet $userMonth "bdays" $insideMap}}\n                {{end}}\n            {{else}}\n                {{$list = $list.Append $user.ID}}\n                {{$insideMap.Set (str $checkDate.Day) $list}}\n                {{dbSet $userMonth "bdays" $insideMap}}\n            {{end}}\n            {{dbSet .User.ID "bday" $checkDate.UTC}}\n            {{if $invertedOrder}} {{$out = print "Your birthday was set to be " ($checkDate.Format "01/02/2006")}}\n            {{else}} {{$out = print "Your birthday was set to be " ($checkDate.Format "02/01/2006")}}\n            {{end}}\n        {{else}}\n            {{$error = "Your birthday has already been set."}}\n        {{end}}\n    {{end}}\n    {{if and (reFind `(?i)del` .Cmd)}}\n        {{$user := .User}} {{with .CmdArgs}} {{with index . 0 | userArg}} {{if $isMod}} {{$user = .}} {{end}} {{else}} {{$error = print $error "\\nInvalid user."}} {{end}} {{end}}\n        {{if not $error}}\n            {{with (dbGet $user.ID "bday").Value}}\n                {{with .UTC}}\n                    {{dbDel $user.ID "bday"}}\n                    {{$return.Set "Day" (str .Day)}} {{$return.Set "Month" (printf "%d" .Month | toInt)}} {{$return.Set "User" $user}}\n                    {{template "handleDeletes" $return}}\n                    {{$out = print "Successfully deleted the birthday from " $user.String}}\n                {{end}}\n            {{else}}\n                {{$error = print $user.String " doesn\'t have a birthday set."}}\n            {{end}}\n        {{end}}\n    {{end}}\n{{end}}\n\n{{/* Functions */}}\n{{define "handleDeletes"}}\n    {{$listIn := cslice}}\n    {{$map := sdict (dbGet .Month "bdays").Value}}\n    {{with $map}}\n        {{range index . $.Day}}\n            {{- if ne . $.User.ID}}\n                {{- $listIn = $listIn.Append .}}\n            {{- end -}}\n        {{end}}\n        {{$map.Set $.Day $listIn}}\n        {{dbSet $.Month "bdays" $map}}\n    {{end}}\n{{end}}\n\n{{/* Outs */}}\n{{with $error}} {{.}} {{end}}\n{{with $out}} {{.}} {{end}}\n')))}l.isMDXComponent=!0}}]);
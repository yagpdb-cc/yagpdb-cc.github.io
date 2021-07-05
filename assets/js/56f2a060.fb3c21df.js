(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[9830],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(h,l(l({ref:n},d),{},{components:t})):o.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8418:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),l=["components"],i={sidebar_position:6,title:"Lockdown"},c=void 0,s={unversionedId:"moderation/lockdown",id:"moderation/lockdown",isDocsHomePage:!1,title:"Lockdown",description:"This code is to simulate a lockdown command.",source:"@site/docs/moderation/lockdown.md",sourceDirName:"moderation",slug:"/moderation/lockdown",permalink:"/moderation/lockdown",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/moderation/lockdown.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Lockdown"},sidebar:"tutorialSidebar",previous:{title:"Slowmode",permalink:"/moderation/slowmode"},next:{title:"Staff On Duty",permalink:"/moderation/staffonduty"}},d=[],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This code is to simulate a lockdown command.\nWhat it does is delete every msg sent if the channel is locked, it doesnt actually change any permissions.\nNo role or channel restriction needed, unless you want it.\nYou only need to change the role IDs for you mods inside the CC, and NOTHING else."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},".*")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage 1:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-lock <channelID> <amount>"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"channelID")," can be any channel in your server, and can also be ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," is the amount of msgs that will get deleted when you use the command (the most recent ones). It can be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," or up to ",(0,a.kt)("inlineCode",{parentName:"p"},"50"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Notice: Msg from moderators (if their roles ID is correctly listed) and pinned msgs won't be deleted."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage 2:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-unlock <channelID>"),(0,a.kt)("br",{parentName:"p"}),"\n","Same principles as above, but it now unlocks the channel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n     Lockdown CC\n    This code is to simulate a lockdown command.\n    What it does is delete every msg sent if the channel is locked, it doesnt actually change any permissions.\n    No role or channel restriction needed, unless you want it.\n    You only need to change the role IDs for you mods inside the CC, and NOTHING else.\n\n    Trigger type: Regex\n    Trigger: `.*`\n\n    Usage 1: -lock <channelID> <amount>\n    ChannelID can be any channel in your server, and can also be nil\n    Amount is the amount of msgs that will get deleted when you use the command (the most recent ones). It can be 0 or up to 50.\n    Notice: Msg from moderators (if their roles ID is correctly listed) and pinned msgs wont be deleted.\n\n    Usage 2: -unlock <channelID>\n    Same principles as above, but it now unlocks the channel.\n*/}}\n\n\n{{/* USER VARIABLES */}}\n{{$ModsRoles := cslice 674429313097007106 673258482211749917}}\n{{/* END OF USER VARIABLES */}}\n\n\n\n{{/* ACTUAL CODE DONT TOUCH */}}\n{{$isMod := false}} {{range .Member.Roles}} {{if in $ModsRoles .}} {{$isMod = true}} {{end}} {{end}}\n{{$isCmd := false}} {{if (and (reFind `\\A-(un)?lock` (lower .Cmd)) ($isMod))}} {{$isCmd = true}} {{end}}\n{{if and (dbGet .Channel.ID "is_blocked") (not $isMod)}} {{deleteTrigger 1}}\n{{else}}\n    {{if not $isMod}}\n        {{with (dbGet .Channel.ID "msg_tracker").Value}}\n            {{$slice := cslice.AppendSlice .}}\n            {{if lt (len $slice) 50}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{else}}\n                {{$slice = slice $slice 1}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{end}}\n        {{else}}\n            {{$firstID := cslice .Message.ID}}\n            {{dbSet .Channel.ID "msg_tracker" $firstID}}\n        {{end}}\n    {{end}}\n{{end}}\n{{if $isCmd}}\n    {{$split := split .Cmd " "}}\n    {{if ge (len $split) 2}}\n        {{$channel := reReplace `<|>|#` (index $split 1) ""}}\n        {{if eq (lower $channel) "nil"}} {{$channel = .Channel.ID}}\n        {{else if reFind `\\d{17,19}` $channel}} {{$channel = toInt $channel}}\n        {{end}}\n        {{if getChannel $channel}}\n            {{if not (reFind `^-un` (lower .Cmd))}}\n                {{if eq (len $split) 3}}\n                    {{$amount := (toInt (index $split 2))}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is already blocked.\n                    {{else}}\n                        {{dbSet $channel "is_blocked" true}}\n                        {{with (dbGet $channel "msg_tracker").Value}}\n                            {{$slice := cslice.AppendSlice .}}\n                            {{if gt $amount (len $slice)}} {{$amount = sub (len $slice) 1}} {{end}}\n                            {{if gt $amount 0}}\n                                {{$counter := 1}}\n                                {{range seq 0 $amount}}\n                                    {{- with (getMessage $channel (index $slice (sub (len $slice) $counter))) -}}\n                                        {{- if not .Pinned -}}\n                                            {{- deleteMessage $channel .ID 1 -}}\n                                        {{- end -}}\n                                    {{- end -}}\n                                    {{- $counter = add $counter 1 -}}\n                {{end}}\n                                {{$slice = slice $slice 0 (sub (len $slice) $amount)}}\n                                {{dbSet $channel "msg_tracker" $slice}}\n                            {{end}}\n                        {{end}}\n                        The channel <#{{$channel}}> is now blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -lock <channelID> <amount of msgs to del>\\n``ChannelID`` can be nil and ``amount of msgs`` can be 0."}}\n                {{end}}\n            {{else}}\n                {{if eq (len $split) 2}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is no longer blocked.\n                        {{dbDel $channel "is_blocked"}}\n                    {{else}}\n                        The channel <#{{$channel}}> is not blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -unlock <channelID>\\n``ChannelID`` can be nil"}}\n                {{end}}\n            {{end}}\n        {{else}}\n            Thats not a valid channel.\n        {{end}}\n    {{else}}\n        {{print "**Correct usage is:**\\n`-unlock <channelID>`\\n`-lock <channelID> <amount of msgs to del>`"}}\n    {{end}}\n{{end}}\n')))}u.isMDXComponent=!0}}]);
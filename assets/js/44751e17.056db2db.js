(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1005],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},$=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),$=s(t),u=i,p=$["".concat(d,".").concat(u)]||$[u]||m[u]||o;return t?r.createElement(p,a(a({ref:n},c),{},{components:t})):r.createElement(p,a({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=$;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}$.displayName="MDXCreateElement"},478:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return $}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:6,title:"Edit"},d=void 0,s={unversionedId:"utilities/edit",id:"utilities/edit",isDocsHomePage:!1,title:"Edit",description:"This command is a tool for editing messages sent by YAGPDB.",source:"@site/docs/utilities/edit.md",sourceDirName:"utilities",slug:"/utilities/edit",permalink:"/utilities/edit",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/edit.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Edit"},sidebar:"tutorialSidebar",previous:{title:"CC to File",permalink:"/utilities/cc2file"},next:{title:"Flag Message",permalink:"/utilities/flagmessage"}},c=[],m={toc:c};function $(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command is a tool for editing messages sent by YAGPDB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flags:"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-content"),": To Change Content",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-desc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-image"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-thumbnail"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-authoricon"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-authorurl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-footer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-footericon"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-color"),": To Edit Embed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-force"),": Makes a new embed with provided fields and discards previous embed (default behavior is simply editing provided fields of embed while preserving other fields)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-clrembed"),": To remove the embed from a message previously containing embed (so that now it has only content. Note, You cant remove embed if content is also null)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-edit [channel] <msg> <flags...>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command is a tool for editing messages sent by YAGPDB.\n    Usage: `-edit [channel] <msg> <flags...>`.\n\n    Recommended trigger: Command trigger with trigger `edit`.\n    Flags:  -content : To Change Content\n        -title, -desc, -image, -thumbnail, -url, -author, -authoricon, -authorurl, -footer, -footericon, -color : To Edit Embed\n        -force : Makes a new embed with provided fields and discards previous embed (default behavior is simply editing provided fields of embed while preserving other fields)\n        -clrembed : To remove the embed from a message previously containing embed (so that now it has only content. Note, You cant remove embed if content is also null)\n*/}}\n\n{{$helpMsg := sdict\n    "title" "`-edit [channel] <msg> <new-content>`"\n    "color" 14232643\n    "description" "Please provide a valid message (which was sent by YAGPDB).\\n\\nIf the message is an embed, you can use the syntax from the `-se` command to edit it: `-edit [channel] <msg> -title \\"Hello world\\" -desc \\"Foobar\\"`."\n}}\n{{$error := ""}}\n\n{{$flags := sdict "-title" "Title" "-desc" "Description" "-url" "URL" "-image" "Image" "-thumbnail" "Thumbnail" "-author" "Author" "-authoricon" "Author" "-authorurl" "Author" "-footer" "Footer" "-footericon" "Footer" "-color" "Color" "-content" "Content" "-force" "Force" "-clrembed"  "Clear"}}\n{{$subField := sdict "-image" "URL" "-thumbnail" "URL" "-author" "Name" "-authoricon" "IconURL" "-authorurl" "URL" "-footer" "Text" "-footericon" "IconURL"}}\n{{$channel := .Channel}}\n{{$multipliers := cslice 1048576 65536 4096 256 16 1}}\n{{$hex2dec := sdict "A" 10 "B" 11 "C" 12 "D" 13 "E" 14 "F" 15}}\n{{$args := cslice}}\n{{$id := ""}}\n\n{{if .CmdArgs}}\n    {{$channelID := ""}}\n    {{with reFindAllSubmatches `<#(\\d+)>` (index .CmdArgs 0)}}{{$channelID = index . 0 1}}{{end}}\n    {{$temp := getChannel (or $channelID (index .CmdArgs 0))}}\n    {{if $temp}}\n        {{if lt (len .CmdArgs) 3}}\n            {{$error = "Insufficient number of Args"}}\n        {{else}}\n            {{$channel = $temp}}\n            {{$id = toInt64  (index .CmdArgs 1)}}\n            {{$args = slice .CmdArgs 2}}\n        {{end}}\n    {{else if (ge (len .CmdArgs) 2)}}\n        {{$id = toInt64 (index .CmdArgs 0)}}\n        {{$args = slice .CmdArgs 1}}\n    {{else}}\n        {{$error = "Insufficient number of Args"}}\n    {{end}}\n{{end}}\n\n{{$content := ""}}{{$embed := sdict}}{{$Oembed := sdict}}{{$embedPresent := false}}{{$clear := false}}\n{{if not $error}}\n    {{ $msg := getMessage $channel.ID $id}}\n    {{with $msg}}\n        {{if eq .Author.ID 204255221017214977}}\n            {{$content = .Content}}\n            {{if .Embeds}}{{$embed = structToSdict (index .Embeds 0)}}\n                {{range $k, $v := $embed}}{{if eq (kindOf $v true) "struct"}}{{$embed.Set $k (structToSdict $v)}}{{end}}{{end}}{{$embedPresent = true}}\n            {{end}}\n        {{else}}\n            {{$error = "<@204255221017214977> is not Author"}}\n        {{end}}\n    {{else}}\n        {{$error = "Unknown Message"}}\n    {{end}}\n{{end}}\n\n{{if not $error}}\n    {{$parseFlag := 2}}{{$currentFlag := ""}}{{$currentField := ""}}{{$skip := 0}}\n    {{range $args}}\n        {{- if and (not $error) (gt $parseFlag 1)}}\n            {{- if ($f := $flags.Get (lower .))}}\n                {{- if eq $f "Force"}}\n                    {{- $embed = sdict}}{{range $k,$v :=$Oembed}}{{$embed.Set $k $v}}{{end}}{{$Oembed = sdict}}{{$parseFlag = 1}}{{$currentFlag = ""}}{{$skip = 1}}\n                {{- else if eq $f "Clear"}}\n                    {{- $embed = $.nil}}{{$parseFlag = 1}}{{$clear = true}}{{$currentFlag = ""}}{{$skip = 1}}\n                {{- else if and $clear (ne $f "Content")}}\n                    {{- $error = print "Parsing Error: Invalid flag: " . ". Attempting to Both Clear and Edit Embed"}}\n                {{- else}}\n                    {{- $currentFlag = $f}}{{$parseFlag = 0}}{{$currentField = $subField.Get (lower .)}}\n                {{- end}}\n            {{- end}}\n        {{- end}}\n\n        {{- if and (not $error) $parseFlag (not $skip)}}\n            {{- if $currentFlag}}\n                {{- if in (cslice "Description" "Title" "URL") $currentFlag}}\n                    {{- if eq $parseFlag 1}}{{$embed.Set $currentFlag ""}}{{$Oembed.Set $currentFlag ""}}{{end}}\n                    {{- $embed.Set $currentFlag (joinStr " " ($embed.Get $currentFlag) .)}}{{$Oembed.Set $currentFlag (joinStr " " ($Oembed.Get $currentFlag) .)}}{{$embedPresent = true}}\n                {{- else if eq $currentFlag "Color"}}\n                    {{- if eq $parseFlag 1}}\n                        {{- $regex := `\\A(?:#?([a-fA-F\\d]{1,6}))\\z`}}\n                        {{- with reFindAllSubmatches $regex .}}\n                            {{- $hex := printf "%06s" (index . 0 1) | upper}}\n                            {{- $dec := 0}}\n                            {{- range $k, $v := split $hex ""}}\n                                {{- $multiplier := index $multipliers $k}}\n                                {{- $num := or ($hex2dec.Get $v) $v }}\n                                {{- $dec = add $dec (mult $num $multiplier)}}\n                            {{- end}}\n                            {{- $embed.Set $currentFlag $dec}}{{$Oembed.Set $currentFlag $dec}}\n                        {{- else}}\n                            {{- $error = "Parsing Error: color was not in correct format (use hex)" }}\n                        {{- end}}\n                    {{- else}}\n                        {{- $error = "Parse Error: too many arguments to Color"}}\n                    {{- end}}\n                    {{- $embedPresent = true}}\n                {{- else if eq $currentFlag "Content"}}{{if eq $parseFlag 1}}{{$content = ""}}{{end}}{{$content = joinStr " " $content .}}\n                {{- else}}\n                    {{- if eq $parseFlag 1}}\n                        {{- $tmp :=or ($embed.Get $currentFlag) sdict}}{{$tmpO :=or ($Oembed.Get $currentFlag) sdict}}\n                        {{- $tmp.Set $currentField ""}}{{$tmpO.Set $currentField ""}}\n                        {{- $embed.Set $currentFlag $tmp}}{{$Oembed.Set $currentFlag $tmpO}}{{$embedPresent = true}}\n                    {{- end}}\n                    {{- $cFlag := $embed.Get $currentFlag}}{{$cFlagO := $Oembed.Get $currentFlag}}\n                    {{- $cFlag.Set $currentField (joinStr " " ($cFlag.Get $currentField) .)}}{{$cFlagO.Set $currentField (joinStr " " ($cFlagO.Get $currentField) .)}}\n                {{- end}}\n            {{- else}}\n                {{- $error = (print "Parsing Error:  Invalid flag: " . )}}\n            {{- end}}\n        {{- end}}\n        {{- $parseFlag = add $parseFlag 1}}{{$skip = 0}}\n    {{- end}}\n\n    {{if $embed}}\n        {{if $embed.Author}}{{$embed.Author.Set "Icon_URL" $embed.Author.IconURL}}{{end}}\n        {{if $embed.Footer}}{{$embed.Footer.Set "Icon_URL" $embed.Footer.IconURL}}{{end}}\n    {{end}}\n    {{if (not $embedPresent)}}{{$embed = $.nil}}{{end}}\n\n    {{if not $error}}\n        {{if or $content (ne (print $embed) "<nil>")}}\n            {{editMessage $channel.ID $id (complexMessageEdit "content" $content "embed" $embed)}}\n            Done :+1:\n        {{else}}\n            {{$error = "Content and embed cannot be null at the same time."}}\n        {{end}}\n    {{end}}\n{{end}}\n\n{{if $error}}\n    {{$helpMsg.Set "description" (print "**Error** - `" $error  "`\\n" ($helpMsg.Get "description"))}}\n    {{sendMessage nil (cembed $helpMsg)}}\n{{end}}\n{{deleteResponse 5}}\n')))}$.isMDXComponent=!0}}]);
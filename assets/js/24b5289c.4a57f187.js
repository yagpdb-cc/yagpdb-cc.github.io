(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1346],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,p=u["".concat(s,".").concat(f)]||u[f]||m[f]||r;return n?i.createElement(p,o(o({ref:t},c),{},{components:n})):i.createElement(p,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},897:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:14,title:"Send"},s=void 0,d={unversionedId:"utilities/send",id:"utilities/send",isDocsHomePage:!1,title:"Send",description:"This is just like the simpleembed command. The difference being that is allows you to add fields to the embed.",source:"@site/docs/utilities/send.md",sourceDirName:"utilities",slug:"/utilities/send",permalink:"/utilities/send",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/send.md",version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Send"},sidebar:"tutorialSidebar",previous:{title:"Reaction Logs",permalink:"/utilities/reactionlogs"},next:{title:"Struct",permalink:"/utilities/struct"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is just like the simpleembed command. The difference being that is allows you to add fields to the embed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Command")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"embed")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of usage:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"-embed -color 1752220 -title i am the title -description i am the description -channel 693662119765344257 -fields /name field name /value 1540 /inline true -fields /name field name 2 /value valueeee /inline true -fields /name vou ficar em baixo /value 4861 -image https://cdn.discordapp.com/attachments/682204005723799553/694677663717261402/PokecordSpawn.jpg -thumb https://cdn.discordapp.com/attachments/693662119765344257/698088081718247504/PokecordSpawn.jpg -author /name hello there /icon https://cdn.discordapp.com/attachments/693662119765344257/698087514484768818/PokecordSpawn.jpg -footer /text hello /icon https://cdn.discordapp.com/attachments/693662119765344257/698078976727318558/PokecordSpawn.jpg -timestamp")),(0,r.kt)("p",null,"Every flag (title, color, description, etc) should start with an ",(0,r.kt)("inlineCode",{parentName:"p"},"-")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"-embed -color 1752220 -title i am the title -description i am the description"))),(0,r.kt)("p",null,"Every field argument (value, name, inline) should start with an ",(0,r.kt)("inlineCode",{parentName:"p"},"/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"-embed -fields /name field name /value 1540 /inline true -fields /name field name 2 /value valueeee /inline true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This is just like the simpleembed command. The difference being that is allows you to add fields to the embed.\n    Suggested trigger type: Command\n    Suggested trigger: `embed`\n\n    Example of usage: -embed -color 1752220 -title i am the title -description i am the description -channel 693662119765344257 -fields /name field name /value 1540 /inline true -fields /name field name 2 /value valueeee /inline true -fields /name vou ficar em baixo /value 4861 -image https://cdn.discordapp.com/attachments/682204005723799553/694677663717261402/PokecordSpawn.jpg -thumb https://cdn.discordapp.com/attachments/693662119765344257/698088081718247504/PokecordSpawn.jpg -author /name hello there /icon https://cdn.discordapp.com/attachments/693662119765344257/698087514484768818/PokecordSpawn.jpg -footer /text hello /icon https://cdn.discordapp.com/attachments/693662119765344257/698078976727318558/PokecordSpawn.jpg -timestamp\n\n    Every flag (title, color, description, etc) should start with an -\n        Example: -embed -color 1752220 -title i am the title -description i am the description\n    Every field argument (value, name, inline) should start with an /\n        Example: -embed -fields /name field name /value 1540 /inline true -fields /name field name 2 /value valueeee /inline true\n*/}}\n\n{{/* ACTUAL CODE DONT TOUCH */}}\n{{$capture := false}} {{$field := sdict}} {{$name := false}} {{$value := false}} {{$boolean := false}} {{$hasField := false}} {{$nameV := ""}} {{$valueV := ""}} {{$booleanV := false}} {{$color := false}} {{$colorV := 123456}} {{$fields := cslice}} {{$isEmbed := false}} {{$description := false}} {{$descriptionV := ""}} {{$channel := false}} {{$channelV := .Channel.ID}} {{$title := false}} {{$titleV := ""}} {{$image := false}} {{$imageV := sdict}} {{$thumbnail := false}} {{$thumbnailV := sdict}} {{$author := false}} {{$authorV := sdict}} {{$authorName := false}} {{$authorNameV := ""}} {{$authorIcon := false}} {{$footer := false}} {{$footerV := sdict}} {{$footerText := false}} {{$footerIcon := false}} {{$footerTextV := ""}} {{$timeStamp := false}} {{$embed := sdict}}\n{{$flags := cslice "-channel" "-fields" "-color" "-description" "-title" "-image" "-thumb" "-author" "-footer" "-timestamp"}}\n{{- range $k, $v := .CmdArgs -}}\n    {{- if eq . "-fields"}} {{$capture = true}} {{else if in $flags .}} {{$capture = false}} {{end -}}\n    {{- if $capture -}}\n        {{- $hasField = true -}}\n        {{- if eq . "/name"}} {{$name = true}} {{$value = false}} {{$boolean = false -}}\n        {{- else if eq . "/value"}} {{$name = false}} {{$value = true}} {{$boolean = false -}}\n        {{- else if eq . "/inline"}} {{$name = false}} {{$value = false}} {{$boolean = true -}}\n        {{- end -}}\n        {{- if and ($name) (not (eq . "/name"))}} {{$nameV = joinStr " " $nameV .}} {{$field.Set "name" $nameV -}}\n        {{- else if and ($value) (not (eq . "/value")) }} {{$valueV = joinStr " " $valueV .}} {{$field.Set "value" $valueV -}}\n        {{- else if $boolean}} {{if eq . "true"}} {{$booleanV = true}} {{end}} {{$field.Set "inline" $booleanV -}}\n        {{- else}} {{$field.Set "inline" $booleanV -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if and (ne $valueV "") (or (and ($hasField) (not $capture)) (and ($hasField) (eq $k (sub (len $.CmdArgs) 1))) (and (eq . "-fields") ($field.Get "name")))}} {{$hasField = false}} {{$isEmbed = true}} {{$fields = $fields.Append $field}} {{$field = sdict}} {{$nameV = ""}} {{$valueV = ""}} {{$booleanV = false}} {{end -}}\n    {{- if eq . "-color"}} {{$color = true}} {{else if in $flags .}} {{$color = false}} {{end -}}\n    {{- if and ($color) (not (eq . "-color"))}} {{with toInt .}} {{$isEmbed = true}} {{$colorV = .}} {{end}} {{end -}}\n    {{- if eq . "-description"}} {{$description = true}} {{else if in $flags .}} {{$description = false}} {{end -}}\n    {{- if and ($description) (not (eq . "-description"))}} {{$isEmbed = true}} {{$descriptionV = joinStr " " $descriptionV .}} {{end -}}\n    {{- if eq . "-channel"}} {{$channel = true}} {{else if in $flags .}} {{$channel = false}} {{end -}}\n    {{- if and ($channel) (not (eq . "-channel"))}} {{$checkChannel := reReplace `<|>|#` . ""}} {{with getChannel $checkChannel}} {{$channelV = .ID}} {{end}} {{end -}}\n    {{- if eq . "-title"}} {{$title = true}} {{else if in $flags .}} {{$title = false}} {{end -}}\n    {{- if and ($title) (not (eq . "-title"))}} {{$isEmbed = true}} {{$titleV = joinStr " " $titleV .}} {{end -}}\n    {{- if eq . "-image"}} {{$image = true}} {{else if in $flags .}} {{$image = false}} {{end -}}\n    {{- if and ($image) (not (eq . "-image"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$imageV.Set "url" .}} {{end}} {{end -}}\n    {{- if eq . "-thumb"}} {{$thumbnail = true}} {{else if in $flags .}} {{$thumbnail = false}} {{end -}}\n    {{- if and ($thumbnail) (not (eq . "-thumb"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$thumbnailV.Set "url" .}} {{end}} {{end -}}\n    {{- if eq . "-author"}} {{$author = true}} {{else if in $flags .}} {{$author = false}} {{end -}}\n    {{- if $author}}\n        {{- if eq . "/name"}} {{$authorName = true}} {{$authorIcon = false -}}\n        {{- else if eq . "/icon"}} {{$authorName = false}} {{$authorIcon = true -}}\n        {{- end -}}\n        {{- if and ($authorName) (not (eq . "/name"))}} {{$authorNameV = joinStr " " $authorNameV .}} {{$isEmbed = true}} {{$authorV.Set "name" $authorNameV -}}\n        {{- else if and ($authorIcon) (not (eq . "/icon"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$authorV.Set "icon_url" .}} {{end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if eq . "-footer"}} {{$footer = true}} {{else if in $flags .}} {{$footer = false}} {{end -}}\n    {{- if $footer}}\n        {{- if eq . "/text"}} {{$footerText = true}} {{$footerIcon = false -}}\n        {{- else if eq . "/icon"}} {{$footerText = false}} {{$footerIcon = true -}}\n        {{- end -}}\n        {{- if and ($footerText) (not (eq . "/text"))}} {{$footerTextV = joinStr " " $footerTextV .}} {{$isEmbed = true}} {{$footerV.Set "text" $footerTextV -}}\n        {{- else if and ($footerIcon) (not (eq . "/icon"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$footerV.Set "icon_url" .}} {{end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if eq . "-timestamp"}} {{$timeStamp = currentTime}} {{$isEmbed = true}} {{end -}}\n{{- end -}}\n\n{{if $isEmbed}}\n{{$embed.Set "fields" $fields}} {{$embed.Set "color" $colorV}} {{$embed.Set "description" $descriptionV}} {{$embed.Set "title" $titleV}} {{$embed.Set "image" $imageV}} {{$embed.Set "thumbnail" $thumbnailV}} {{$embed.Set "author" $authorV}} {{$embed.Set "footer" $footerV}} {{with $timeStamp}} {{$embed.Set "timestamp" .}} {{end}}\n{{sendMessage $channelV (cembed $embed)}}\n{{end}}\n')))}u.isMDXComponent=!0}}]);
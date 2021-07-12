(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3981],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6149:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],s={title:"Display Struct"},c=void 0,l={unversionedId:"utilities/display-struct",id:"utilities/display-struct",isDocsHomePage:!1,title:"Display Struct",description:"This command shows you all the available properties of a structure in addition to a link to the Discord docs on that structure.",source:"@site/docs/utilities/display-struct.md",sourceDirName:"utilities",slug:"/utilities/display-struct",permalink:"/utilities/display-struct",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/display-struct.md",version:"current",frontMatter:{title:"Display Struct"},sidebar:"sidebar",previous:{title:"Preview Color",permalink:"/utilities/color-preview"},next:{title:"Edit Message",permalink:"/utilities/edit"}},u=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command shows you all the available properties of a structure in addition to a link to the Discord docs on that structure."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(struct)(ure)?(\\s+|\\z)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-struct <name>")," - Displays the structure with the name provided. ",(0,a.kt)("inlineCode",{parentName:"li"},"<name>")," must be one of ",(0,a.kt)("inlineCode",{parentName:"li"},"channel"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"guild"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"user"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"member"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"message"),".")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Aliases")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),", you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"structure"),"."))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../src/utilities/struct.go.tmpl",file:"../../../src/utilities/struct.go.tmpl"},'{{/*\n    Shows all the available properties and methods of a structure with a link to the Discord docs on that structure.\n    See <https://yagpdb-cc.github.io/utilities/display-struct> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $targets := sdict "Channel" .Channel "Guild" .Guild "User" .User "Member" .Member "Message" .Message }}\n{{ $resources := sdict\n    "Channel" "https://discordapp.com/developers/docs/resources/channel#channel-object"\n    "Guild" "https://discordapp.com/developers/docs/resources/guild#guild-resource"\n    "User" "https://discordapp.com/developers/docs/resources/user#user-object"\n    "Member" "https://discordapp.com/developers/docs/resources/guild#guild-member-object"\n    "Message" "https://discordapp.com/developers/docs/resources/channel#message-object"\n}}\n{{ $target := 0 }}\n{{ $name := "" }}\n{{ $input := (parseArgs 1 "**Syntax:** -struct <struct>" (carg "string" "structure")).Get 0 | lower }}\n{{ range $struct, $v := $targets }}\n    {{- if eq (lower $struct) $input }}\n        {{- $target = $v }}\n        {{- $name = $struct }}\n    {{- end -}}\n{{ end }}\n{{ if $target}}\n    {{ $json := printf "```go\\n%+v```" $target }}\n    {{ sendMessage nil (cembed\n        "title" (printf "\u276f %s Object" $name)\n        "url" (index $resources $name)\n        "description" $json\n        "color" 14232643\n    ) }}\n{{ else }}\n    Please provide a valid target to view.\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}d.isMDXComponent=!0}}]);
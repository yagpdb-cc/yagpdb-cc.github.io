"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8583],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||o;return t?r.createElement(d,u(u({ref:n},p),{},{components:t})):r.createElement(d,u({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:i,u[1]=a;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9758:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return s}});var r=t(3117),i=(t(7294),t(3905));const o={title:"Uwuify CC"},u=void 0,a={unversionedId:"fun/uwuify",id:"fun/uwuify",title:"Uwuify CC",description:"This command uwufies text.",source:"@site/docs/fun/uwuify.md",sourceDirName:"fun",slug:"/fun/uwuify",permalink:"/fun/uwuify",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/uwuify.md",tags:[],version:"current",frontMatter:{title:"Uwuify CC"},sidebar:"sidebar",previous:{title:"Text to Emoji Convertor",permalink:"/fun/tte"},next:{title:"Wheel of Fortune",permalink:"/fun/wheel-of-fortune"}},l={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],p={toc:s},c="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command uwufies text."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Don\'t know what "uwuifying" text is? Add this CC to your server and find out...')),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"uwuify")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-uwuify <text>")," - Uwuifies ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/uwuify.go.tmpl",file:"../../../src/fun/uwuify.go.tmpl"},'{{/*\n    U-uwufies text~~\n    See <https://yagpdb-cc.github.io/fun/uwuify> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $replacements := sdict\n    "hello" "hewwo"\n    "hi" "hewwo"\n    "god" "gawd"\n    "father" "daddy"\n    "papa" "papi"\n    "mom" "mommy"\n    "mother" "mommy"\n    "r" "w"\n    "l" "w"\n    "R" "W"\n    "L" "W"\n}}\n\n{{ if .StrippedMsg }}\n    {{ $msg := .StrippedMsg }}\n    {{ range $old, $new := $replacements }}\n        {{- $msg = joinStr $new (split $msg $old) -}}\n    {{ end }}\n\n    {{ $msg = reReplace `n([aeiou])` $msg "ny$1" }}\n    {{ $msg = reReplace `N([aeiou])` $msg "Ny$1" }}\n    {{ $msg = reReplace `N([AEIOU])` $msg "NY$1" }}\n\n    {{ $runes := toRune $msg }}\n    {{ $first := index $runes 0 }}\n    {{ $last := index $runes (sub (len $runes) 1) }}\n    {{ if or (and (ge $first \'a\') (le $first \'z\')) (and (ge $first \'A\') (le $first \'Z\')) }}\n        {{ $msg = print (slice $msg 0 1) "-" $msg }}\n    {{ end }}\n\n    {{ if or (and (ge $last \'a\') (le $last \'z\')) (and (ge $last \'A\') (le $last \'Z\')) }}\n        {{ $msg = print $msg "~~" }}\n    {{ end }}\n\n    {{ $msg }}\n{{ else }}\n      Please provide a message to uwuify.\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}f.isMDXComponent=!0}}]);
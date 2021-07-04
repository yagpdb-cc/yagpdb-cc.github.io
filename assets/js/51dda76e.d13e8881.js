(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[4060],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2319:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c={sidebar_position:17,title:"Text to Emoji"},a={unversionedId:"funccs/tte",id:"funccs/tte",isDocsHomePage:!1,title:"Text to Emoji",description:"This command converts given text to emoji.",source:"@site/docs/funccs/tte.md",sourceDirName:"funccs",slug:"/funccs/tte",permalink:"/yagpdb-cc/funccs/tte",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/tte.md",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"Text to Emoji"},sidebar:"tutorialSidebar",previous:{title:"Starboard V1",permalink:"/yagpdb-cc/funccs/starboardv1"},next:{title:"uwuify",permalink:"/yagpdb-cc/funccs/uwuify"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command converts given text to emoji."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A(?:\\-|<@!?204255221017214977>)\\s*(?:tte|emojify|emotify)(?: +|\\z)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-tte <text>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command converts given text to emoji. Usage: `-tte <text>`.\n\n    Recommended trigger: Regex trigger with trigger `\\A(?:\\-|<@!?204255221017214977>)\\s*(?:tte|emojify|emotify)(?: +|\\z)`\n*/}}\n{{ $keycap := "\u20e3" }}\n{{ $emojis := sdict "#" "#\u20e3" "*" "*\u20e3" "!" "\u2757" "?" "\u2753" }}\n{{ if .StrippedMsg }}\n    {{ $msg := "" }}\n    {{ range (split .StrippedMsg "") }}\n        {{- $c := index . 0 }}\n        {{- if or (and (ge $c 65) (le $c 90)) (and (ge $c 97) (le $c 122)) }}\n            {{- $msg = joinStr "" $msg ":regional_indicator_" (lower .) ":" }}\n        {{- else if and (ge $c 48) (le $c 57) }}\n            {{- $msg = joinStr "" $msg . $keycap }}\n        {{- else }}\n            {{- $msg = joinStr "" $msg (or ($emojis.Get .) .) }}\n        {{- end -}}\n    {{ end }}\n    {{ sendMessage nil (cembed\n        "title" "\u276f Text to Emoji"\n        "description" $msg\n        "color" 14232643\n        "footer" (sdict "text" "Powered by YAGPDB.xyz")\n    ) }}\n{{ end }}\n')))}u.isMDXComponent=!0}}]);
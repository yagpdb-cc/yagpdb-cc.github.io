(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[8506],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9896:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),i={sidebar_position:12,title:"Mock"},a={unversionedId:"funccs/mock",id:"funccs/mock",isDocsHomePage:!1,title:"Mock",description:"This command mocks text which is given (capitalizes every second letter, small-cases all other letters).",source:"@site/docs/funccs/mock.md",sourceDirName:"funccs",slug:"/funccs/mock",permalink:"/funccs/mock",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/funccs/mock.md",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Mock"},sidebar:"tutorialSidebar",previous:{title:"Meme",permalink:"/funccs/meme"},next:{title:"Question of the Day",permalink:"/funccs/qotd"}},s=[],l={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This command mocks text which is given (capitalizes every second letter, small-cases all other letters)."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,c.kt)("inlineCode",{parentName:"p"},"Command")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,c.kt)("inlineCode",{parentName:"p"},"mock")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Usage:"),(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("inlineCode",{parentName:"p"},"-mock <text>")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command mocks text which is given (capitalizes every second letter, small-cases all other letters). Usage: `-mock <text>`. \n\n    Recommended trigger: Command trigger with trigger `mock`\n*/}}\n{{ with .StrippedMsg }}\n    {{ $out := "" }}\n    {{ range $k, $v := split (lower .) "" }}\n        {{- if mod $k 2 }} {{- $out = joinStr "" $out (upper $v) }}\n        {{- else }} {{- $out = joinStr "" $out $v }} {{- end -}}\n    {{ end }}\n    {{ sendMessage nil (cembed\n        "description" $out\n        "thumbnail" (sdict "url" "https://cdn.discordapp.com/emojis/316315555453730817.png?v=1")\n        "color" 16776960\n    ) }}\n{{ else }}\n    Please provide some text for me to mock.\n{{ end }}\n')))}p.isMDXComponent=!0}}]);
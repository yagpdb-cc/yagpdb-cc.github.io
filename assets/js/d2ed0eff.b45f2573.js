(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[5919],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,c(c({ref:r},s),{},{components:t})):n.createElement(f,c({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1555:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return s}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),c={sidebar_position:11,title:"Color Preview"},a={unversionedId:"utilities/colorpreview",id:"utilities/colorpreview",isDocsHomePage:!1,title:"Color Preview",description:"This command allows you to preview how colors look. Converts hex to dec, and vice versa.",source:"@site/docs/utilities/colorpreview.md",sourceDirName:"utilities",slug:"/utilities/colorpreview",permalink:"/utilities/colorpreview",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/yagpdb-cc-website/docs/utilities/colorpreview.md",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Color Preview"},sidebar:"tutorialSidebar",previous:{title:"JSON Converter",permalink:"/utilities/jsonconverter"},next:{title:"Random Color",permalink:"/utilities/randomcolor"}},l=[],p={toc:l};function s(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command allows you to preview how colors look. Converts hex to dec, and vice versa."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(preview|color)(\\s+|\\z)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-preview <hex>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-preview <dec> -dec")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This command allows you to preview how colors look. Converts hex to dec, vice versa.\n    Usage: `-preview <hex>` or `-preview <dec> -dec`.\n\n    Recommended trigger: Regex trigger with trigger `\\A(-|<@!?204255221017214977>\\s*)(preview|color)(\\s+|\\z)`\n*/}}\n\n{{ $multipliers := cslice 1048576 65536 4096 256 16 1 }}\n{{ $hex2dec := sdict "A" 10 "B" 11 "C" 12 "D" 13 "E" 14 "F" 15 }}\n{{ $stripped := .StrippedMsg }}\n{{ $force := or (reFind `-(d|dec)` $stripped) "" }}\n{{ $regex := `(?:#?([a-fA-F\\d]{1,6}))` }}\n{{ if $force }}\n    {{ $regex = `(\\d+)` }}\n{{ end }}\n{{ with reFindAllSubmatches $regex $stripped }}\n    {{ $hex := (printf "%06s" (index . 0 1)) | upper }}\n    {{ $dec := 0 }}\n    {{ with and $force (toInt (index . 0 1)) }}\n        {{ $hex = (printf "%06x" .) | upper }}\n        {{ $dec = . }}\n    {{ end }}\n    {{ if not $dec }}\n        {{ range $k, $v := split $hex "" }}\n            {{- $multiplier := index $multipliers $k }}\n            {{- $num := or ($hex2dec.Get $v) $v}}\n            {{- $dec = add $dec (mult $num $multiplier) -}}\n        {{ end }}\n    {{ end }}\n    {{ sendMessage nil (cembed\n        "title" "\u276f Color Preview"\n        "color" $dec\n        "description" (printf "\u276f **Decimal:** %d\\n\u276f **Hex:** #%s" $dec $hex)\n        "thumbnail" (sdict "url" (printf "https://dummyimage.com/400x400/%s/%s" $hex $hex))\n    ) }}\n{{ else }}\n    Correct usage is `-preview <hex>`.\n{{ end }}\n')))}s.isMDXComponent=!0}}]);
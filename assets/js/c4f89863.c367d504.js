(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5705],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2324:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],l={sidebar_position:17,title:"World Clock"},a=void 0,p={unversionedId:"utilities/worldclock",id:"utilities/worldclock",isDocsHomePage:!1,title:"World Clock",description:"Simple world clock.",source:"@site/docs/utilities/worldclock.md",sourceDirName:"utilities",slug:"/utilities/worldclock",permalink:"/utilities/worldclock",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/worldclock.md",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"World Clock"},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/utilities/time"},next:{title:"Snipe",permalink:"/utilities/snipe"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Simple world clock."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"worldclock")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-worldclock")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Simple world clock. Usage: `-worldclock`.\n    Recommended trigger: Command trigger with trigger `worldclock`.\n*/}}\n\n{{ $clocks := sdict\n    "Vancouver" "America/Vancouver"\n    "New York" "America/New_York"\n    "London" "Europe/London"\n    "Moscow" "Europe/Moscow"\n    "Tokyo" "Asia/Tokyo"\n}}\n{{ $hour := .TimeHour }}\n\n{{ $embed := sdict\n    "title" "\ud83d\udd70\ufe0f World Clock"\n    "fields" cslice\n    "color" 0x0070BB\n    "footer" (sdict "text" "Your time")\n    "timestamp" currentTime\n}}\n\n{{ range $name, $ := $clocks }}\n    {{- $time := currentTime.In (newDate 0 0 0 0 0 0 .).Location }}\n    {{- $formatted := printf "%s, %s"\n        $time.Weekday.String\n        ($time.Format "3:04:05 PM")\n    }}\n    {{- $embed.fields.Append (sdict\n        "name" $name\n        "value" $formatted\n    ) | $embed.Set "fields" -}}\n{{ end }}\n\n{{ sendMessage nil (cembed $embed) }}\n')))}d.isMDXComponent=!0}}]);
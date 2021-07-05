(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8460],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9174:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,title:"Starboard V2",sidebar_label:"Starboard Read Me"},l=void 0,u={unversionedId:"funccs/starboard/starboardReadMe",id:"funccs/starboard/starboardReadMe",isDocsHomePage:!1,title:"Starboard V2",description:"This is version 2 of the starboard custom command. This package now consists of two custom commands, and a more elaborate setup is required. All features of the first version are also found in here.",source:"@site/docs/funccs/starboard/starboardReadMe.md",sourceDirName:"funccs/starboard",slug:"/funccs/starboard/starboardReadMe",permalink:"/funccs/starboard/starboardReadMe",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/starboard/starboardReadMe.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Starboard V2",sidebar_label:"Starboard Read Me"},sidebar:"tutorialSidebar",previous:{title:"Choose",permalink:"/funccs/choose"},next:{title:"Starboard",permalink:"/funccs/starboard/starboard"}},d=[{value:"Features",id:"features",children:[]},{value:"Installing",id:"installing",children:[]},{value:"<strong>Troubleshooting</strong>",id:"troubleshooting",children:[]},{value:"Known Issues",id:"known-issues",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is version 2 of the starboard custom command. This package now consists of two custom commands, and a more elaborate setup is required. All features of the first version are also found in here."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"All the starboard v1 features, plus the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Posts automatically removed when they fall below set star threshold or when number of anti-stars has been reached."),(0,o.kt)("li",{parentName:"ul"},"Ability to ignore stars/anti-stars on old posts (server customizable)."),(0,o.kt)("li",{parentName:"ul"},"Anti-star feature similar to an upvote/downvote system with customizable threshold for 'downvotes' before autodeleting (server customizable)."),(0,o.kt)("li",{parentName:"ul"},"Ability to react directly on posts in your #starboard channel with either star or anti-star.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Accurate tracking between original post and starboard post."),(0,o.kt)("li",{parentName:"ul"},"Users are unable to duplicate stars/anti-stars between channels."))),(0,o.kt)("li",{parentName:"ul"},"Reactions from the original message poster can be ignored (server customizable)."),(0,o.kt)("li",{parentName:"ul"},"Message warnings for attempts to duplicate stars/anti-stars and self stars (server customizable).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,o.kt)("em",{parentName:"p"},"Not all of these features will work on starboard messages created with the original starboard CC")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add both custom commands to your server with trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"Reaction - Added + Removed reactions"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"starboard"},"Starboard")," ",(0,o.kt)("strong",{parentName:"li"},"MUST")," be set to ",(0,o.kt)("strong",{parentName:"li"},"IGNORE")," your starboard channel."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"starboardListener"},"starboardListener")," ",(0,o.kt)("strong",{parentName:"li"},"MUST")," be set to work ",(0,o.kt)("strong",{parentName:"li"},"ONLY")," in your starboard channel."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"User configured variables MUST be the same between both commands"),". If you change something on one be sure to change it on the other.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Don't forget to configure your starboard channel ID and desired emojis for basic functions to work."),(0,o.kt)("li",{parentName:"ul"},"The exception to this rule is ",(0,o.kt)("inlineCode",{parentName:"li"},"$warnMessages"),", you can manage these separately without issue.")))),(0,o.kt)("p",null,"You should not enable anti-stars if your community cannot be trusted to self moderate starboard posts. It should work great for some servers, but could be a total disaster for others. Use your own best judgement regarding your community members."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"troubleshooting"},(0,o.kt)("strong",{parentName:"h2"},"Troubleshooting")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Failed executing template... at <$thisID>: can't evaluate field Author in type discordgo.Message"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You have either not set the channel permissions properly or you still have the original starboard CC active in your server. Double check that you have disabled/removed the original starboard CC and followed the install instructions above."),(0,o.kt)("li",{parentName:"ul"},"This error will appear if you are trying to create starboard posts from within your starboard channel. The listener CC is not designed to create new starboard posts, it can only manage existing entries."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'Failed executing template... {"message": "Unknown Emoji", "code": 10014}'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'YAGPDB will accept unicode emojis (Discord default) in the format "\u2b50" (in both emoji variables)'),(0,o.kt)("li",{parentName:"ul"},"YAGPDB will accept custom emojis in the following format:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"pQuack"')," in ",(0,o.kt)("inlineCode",{parentName:"li"},"$starEmoji")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"$antiStarEmoji")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'":pQuack:828204295824080926"')," in ",(0,o.kt)("inlineCode",{parentName:"li"},"$starEmFull")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"$antiStarEmFull"))))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Due to necessary DB trimming and the ability to ignore reactions on older messages the CC will automatically trim off the oldest data when appropiate. If you have set the date limiter to a very long duration you may have old messages getting reposted in the starboard channel when reactions are modified.")),(0,o.kt)("p",null,"I've tested a wide range of situations but surely not all, if you have a problem I can be contacted on discord through the official YAG server at ",(0,o.kt)("inlineCode",{parentName:"p"},"DV0RAK#0001"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h4",{id:"why-did-i-make-this"},"Why did I make this?"),(0,o.kt)("p",null,"Starboards on Discord hold a special place in my heart and I wanted one with, what I perceive to be, the most important and valuable features. Every bot with a starboard seems to lack one feature or the other, never all of them. This is what I think is a complete starboard."),(0,o.kt)("h4",{id:"why-is-there-no-star-leaderboard"},"Why is there no star leaderboard?"),(0,o.kt)("p",null,"Personally, I don't like it. A starboard should be for funny or out of context comments, self-made memes, or similar. Having a leaderboard seems to encourage members to make low-effort, spammy, attention-seeking, or a combination of those for easy stars. To me, it should be organic, hence no leaderboard."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Thanks to Joe for creating the base code for this custom command which you can see in v1. Satty, as his giveaway command gave inspiration and assistance needed for some chunks in here. A general thank you for all the people in the custom command help channel for answering some questions as well as the years-long backlog of messages I leeched off of."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This custom command was authored by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dvoraknt"},"@dvoraknt"),"."))}m.isMDXComponent=!0}}]);
(self.webpackChunkyagpdb_cc_website=self.webpackChunkyagpdb_cc_website||[]).push([[3085],{7979:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),c=n(6010),r=n(6016),l=n(3905),o=n(3491),s=n(571),i=n(9306),u="mdxPageWrapper_3qD3";var d=function(e){var t=e.content,n=t.frontMatter,d=t.metadata,m=n.title,f=n.description,p=n.wrapperClassName,h=n.hide_table_of_contents,g=d.permalink;return a.createElement(r.Z,{title:m,description:f,permalink:g,wrapperClassName:null!=p?p:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,c.Z)("row",u)},a.createElement("div",{className:(0,c.Z)("col",!h&&"col--8")},a.createElement(l.Zo,{components:o.Z},a.createElement(t,null))),!h&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),c=n(6010);var r=function(e,t,n){var c=(0,a.useState)(void 0),r=c[0],l=c[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var c=0,o=!1,s=document.getElementsByClassName(e);c<s.length&&!o;){var i=s[c],u=i.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(r&&r.classList.remove(t),i.classList.add(t),l(i),o=!0),c+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return r(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,c.Z)(l,"thin-scrollbar")},a.createElement(s,{toc:t}))}},3148:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var a=n(2122),c=n(8173),r=n(7294),l=n(6010),o=n(4544),s=n(7985),i=n(7594),u=n.n(i),d=n(3583),m=n(4973),f="codeBlockContainer_2gih",p="codeBlockContent_3z4W",h="codeBlockTitle_1Kb7",g="codeBlock_6upA",v="codeBlockWithTitle_xy-i",k="copyButton_2e3i",b="codeBlockLines_xlV7",E=n(9306),y=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function C(e){var t=e.children,n=e.className,i=e.metastring,C=e.title,N=(0,E.LU)().prism,Z=(0,r.useState)(!1),j=Z[0],B=Z[1],x=(0,r.useState)(!1),L=x[0],w=x[1];(0,r.useEffect)((function(){w(!0)}),[]);var T=(0,E.bc)(i)||C,A=(0,r.useRef)(null),P=[],R=(0,d.Z)(),I=Array.isArray(t)?t.join(""):t;if(i&&y.test(i)){var S=i.match(y)[1];P=u()(S).filter((function(e){return e>0}))}var M=n&&n.replace(/language-/,"");!M&&N.defaultLanguage&&(M=N.defaultLanguage);var z=I.replace(/\n$/,"");if(0===P.length&&void 0!==M){for(var O,W="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(M),U=I.replace(/\n$/,"").split("\n"),q=0;q<U.length;){var D=q+1,G=U[q].match($);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":W+=D+",";break;case"highlight-start":O=D;break;case"highlight-end":W+=O+"-"+(D-1)+","}U.splice(q,1)}else q+=1}P=u()(W),z=U.join("\n")}var H=function(){(0,s.Z)(z),B(!0),setTimeout((function(){return B(!1)}),2e3)};return r.createElement(o.ZP,(0,a.Z)({},o.lG,{key:String(L),theme:R,code:z,language:M}),(function(e){var t,n=e.className,o=e.style,s=e.tokens,i=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:f},T&&r.createElement("div",{style:o,className:h},T),r.createElement("div",{className:(0,l.Z)(p,M)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,g,"thin-scrollbar",(t={},t[v]=T,t)),style:o},r.createElement("code",{className:b},s.map((function(e,t){for(var n,l=(0,c.Z)(e);!(n=l()).done;){var o=n.value;o.content=o.content.replace(/ {4}/g,"\t")}1===e.length&&""===e[0].content&&(e[0].content="\n");var s=i({line:e,key:t});return P.includes(t+1)&&(s.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,a.Z)({key:t},s),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},u({token:e,key:t})))})))})))),r.createElement("button",{ref:A,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(k,"clean-btn"),onClick:H},j?r.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);
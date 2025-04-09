"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["33883"],{50466:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/ispacked","title":"ispacked","description":"Checks if the given string is packed.","source":"@site/docs/scripting/functions/ispacked.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ispacked","permalink":"/hu/docs/scripting/functions/ispacked","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ispacked.md","tags":[{"inline":true,"label":"string","permalink":"/hu/docs/tags/string"}],"version":"current","frontMatter":{"title":"ispacked","sidebar_label":"ispacked","description":"Checks if the given string is packed.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"heapspace","permalink":"/hu/docs/scripting/functions/heapspace"},"next":{"title":"listenport","permalink":"/hu/docs/scripting/functions/listenport"}}'),s=t("85893"),r=t("50065");let c={title:"ispacked",sidebar_label:"ispacked",description:"Checks if the given string is packed.",tags:["string"]},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Checks if the given string is packed."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const string[]"}),(0,s.jsx)(n.td,{children:"The string to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1"})," if the string is packed, ",(0,s.jsx)(n.strong,{children:"0"})," if it's unpacked."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// Create a packed string\nnew string[24 char];\n\nif (ispacked(string))\n{\n   print("The string is packed.");\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"strpack",children:"strpack"}),": Pack a string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"strunpack",children:"strunpack"}),": This function can be used to unpack a string."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var i=t(67294);let s={},r=i.createContext(s);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
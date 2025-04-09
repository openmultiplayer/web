"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79705"],{22797:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/tolower","title":"tolower","description":"This function changes a single character to lowercase.","source":"@site/docs/scripting/functions/tolower.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/tolower","permalink":"/hu/docs/scripting/functions/tolower","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/tolower.md","tags":[{"inline":true,"label":"string","permalink":"/hu/docs/tags/string"}],"version":"current","frontMatter":{"title":"tolower","sidebar_label":"tolower","description":"This function changes a single character to lowercase.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"swapchars","permalink":"/hu/docs/scripting/functions/swapchars"},"next":{"title":"toupper","permalink":"/hu/docs/scripting/functions/toupper"}}'),s=n("85893"),i=n("50065");let o={title:"tolower",sidebar_label:"tolower",description:"This function changes a single character to lowercase.",tags:["string"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This function changes a single character to lowercase."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"c"}),(0,s.jsx)(t.td,{children:"The character to change to lowercase."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The ASCII value of the character provided as lowercase."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnPlayerText(playerid, text[])\n{\n    text[0] = tolower(text[0]);\n    //This sets the first character to lowercase.\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"toupper",children:"toupper"}),": This function changes a single character to uppercase."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["30630"],{98269:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/strpack","title":"strpack","description":"Pack a string.","source":"@site/docs/scripting/functions/strpack.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strpack","permalink":"/pt-BR/docs/scripting/functions/strpack","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strpack.md","tags":[{"inline":true,"label":"string","permalink":"/pt-BR/docs/tags/string"}],"version":"current","frontMatter":{"title":"strpack","sidebar_label":"strpack","description":"Pack a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strmid","permalink":"/pt-BR/docs/scripting/functions/strmid"},"next":{"title":"strunpack","permalink":"/pt-BR/docs/scripting/functions/strunpack"}}'),s=n("85893"),i=n("50065");let c={title:"strpack",sidebar_label:"strpack",description:"Pack a string.",tags:["string"]},a=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Pack a string. Packed strings use 75% less memory."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dest[]"}),(0,s.jsx)(t.td,{children:"The destination string to save the packed string in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const source[]"}),(0,s.jsx)(t.td,{children:"The source, original string."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"maxlength = sizeof (string)"}),(0,s.jsx)(t.td,{children:"The maximum size to insert."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The number of characters packed."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new string[32 char];\nstrpack(string, "Hi, how are you?");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var r=n(67294);let s={},i=r.createContext(s);function c(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
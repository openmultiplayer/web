"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89035"],{62770:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"scripting/functions/strfind","title":"strfind","description":"Search for a sub string in a string.","source":"@site/docs/scripting/functions/strfind.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strfind","permalink":"/it/docs/scripting/functions/strfind","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strfind.md","tags":[{"inline":true,"label":"string","permalink":"/it/docs/tags/string"}],"version":"current","frontMatter":{"title":"strfind","sidebar_label":"strfind","description":"Search for a sub string in a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strequal","permalink":"/it/docs/scripting/functions/strequal"},"next":{"title":"strfloat","permalink":"/it/docs/scripting/functions/strfloat"}}'),r=n("85893"),i=n("50065");let o={title:"strfind",sidebar_label:"strfind",description:"Search for a sub string in a string.",tags:["string"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Search for a sub string in a string."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"const string[]"}),(0,r.jsx)(e.td,{children:"The string you want to search in (haystack)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"const sub[]"}),(0,r.jsx)(e.td,{children:"The string you want to search for (needle)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["bool",":ignorecase"," ",(0,r.jsx)(e.em,{children:"(optional)"})]}),(0,r.jsx)(e.td,{children:"When set to true, the case doesn't matter - HeLLo is the same as Hello. When false, they're not the same."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Position ",(0,r.jsx)(e.em,{children:"(optional)"})]}),(0,r.jsx)(e.td,{children:"The offset to start searching from."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(e.p,{children:"The number of characters before the sub string (the sub string's start position) or -1 if it's not found."}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'if (strfind("Are you in here?", "you", true)\xa0!= -1) // Returns 4, because the start of \'you\' (y) is at index 4 in the string\n{\n    SendClientMessageToAll(0xFFFFFFFF, "I found you!");\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return c},a:function(){return o}});var s=n(67294);let r={},i=s.createContext(r);function o(t){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);
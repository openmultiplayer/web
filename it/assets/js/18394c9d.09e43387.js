"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75702"],{37088:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/strdel","title":"strdel","description":"Delete part of a string.","source":"@site/docs/scripting/functions/strdel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strdel","permalink":"/it/docs/scripting/functions/strdel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strdel.md","tags":[{"inline":true,"label":"string","permalink":"/it/docs/tags/string"}],"version":"current","frontMatter":{"title":"strdel","sidebar_label":"strdel","description":"Delete part of a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strcopy","permalink":"/it/docs/scripting/functions/strcopy"},"next":{"title":"strequal","permalink":"/it/docs/scripting/functions/strequal"}}'),s=n("85893"),i=n("50065");let l={title:"strdel",sidebar_label:"strdel",description:"Delete part of a string.",tags:["string"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Delete part of a string."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsx)(t.td,{children:"The string to delete part of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start"}),(0,s.jsx)(t.td,{children:"The position of the first character to delete."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end"}),(0,s.jsx)(t.td,{children:"The position of the last character to delete."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new string[42] = "We will delete everything apart from this";\nstrdel(string, 0, 37); // string is now "this"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
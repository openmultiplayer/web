"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19202"],{21642:function(t,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/strmid","title":"strmid","description":"Extract a range of characters from a string.","source":"@site/docs/scripting/functions/strmid.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strmid","permalink":"/es/docs/scripting/functions/strmid","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strmid.md","tags":[{"inline":true,"label":"string","permalink":"/es/docs/tags/string"}],"version":"current","frontMatter":{"title":"strmid","sidebar_label":"strmid","description":"Extract a range of characters from a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strlen","permalink":"/es/docs/scripting/functions/strlen"},"next":{"title":"strpack","permalink":"/es/docs/scripting/functions/strpack"}}'),s=r("85893"),i=r("50065");let c={title:"strmid",sidebar_label:"strmid",description:"Extract a range of characters from a string.",tags:["string"]},a=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{LowercaseNote:r}=e;return r||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Extract a range of characters from a string."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dest[]"}),(0,s.jsx)(e.td,{children:"The string to store the extracted characters in."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"const source[]"}),(0,s.jsx)(e.td,{children:"The string from which to extract characters."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"start"}),(0,s.jsx)(e.td,{children:"The position of the first character."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"end"}),(0,s.jsx)(e.td,{children:"The position of the last character."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maxlength = sizeof (dest)"}),(0,s.jsx)(e.td,{children:"The length of the destination. (Will be the size of dest by default)"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(e.p,{children:"The number of characters stored in dest[]"}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'new string[6];\nstrmid(string, "Extract \'HELLO\' without the\xa0!!!!: HELLO!!!!", 34, 39); // string contains "HELLO"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(o,{...t})}):o(t)}},50065:function(t,e,r){r.d(e,{Z:function(){return a},a:function(){return c}});var n=r(67294);let s={},i=n.createContext(s);function c(t){let e=n.useContext(i);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16477"],{32989:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/strcat","title":"strcat","description":"This function concatenates (joins together) two strings into the destination string.","source":"@site/docs/scripting/functions/strcat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strcat","permalink":"/zh-TW/docs/scripting/functions/strcat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strcat.md","tags":[{"inline":true,"label":"string","permalink":"/zh-TW/docs/tags/string"}],"version":"current","frontMatter":{"title":"strcat","sidebar_label":"strcat","description":"This function concatenates (joins together) two strings into the destination string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"setpubvar","permalink":"/zh-TW/docs/scripting/functions/setpubvar"},"next":{"title":"strcmp","permalink":"/zh-TW/docs/scripting/functions/strcmp"}}'),i=n("85893"),r=n("50065");let c={title:"strcat",sidebar_label:"strcat",description:"This function concatenates (joins together) two strings into the destination string.",tags:["string"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"This function concatenates (joins together) two strings into the destination string."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"dest[]"}),(0,i.jsx)(e.td,{children:"The string to store the two concatenated strings in."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"const source[]"}),(0,i.jsx)(e.td,{children:"The source string."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"maxlength = sizeof (dest)"}),(0,i.jsx)(e.td,{children:"The maximum length of the destination."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"The length of the new destination string."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'new string[40] = "Hello";\nstrcat(string, " World!");\n\n// The string is now \'Hello World!\'\n'})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return o},a:function(){return c}});var s=n(67294);let i={},r=s.createContext(i);function c(t){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95452"],{9296:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/strpack","title":"strpack","description":"Pack a string.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/strpack.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strpack","permalink":"/th/docs/scripting/functions/strpack","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strpack.md","tags":[],"version":"current","frontMatter":{"title":"strpack","sidebar_label":"strpack","description":"Pack a string.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"strmid","permalink":"/th/docs/scripting/functions/strmid"},"next":{"title":"strunpack","permalink":"/th/docs/scripting/functions/strunpack"}}'),s=n("85893"),i=n("50065");let c={title:"strpack",sidebar_label:"strpack",description:"Pack a string.",tags:[]},a=void 0,l={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(t){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"This function starts with lowercase letter."})}),"\n",(0,s.jsx)(e.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,s.jsx)(e.p,{children:"Pack a string. Packed strings use 75% less memory."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dest[]"}),(0,s.jsx)(e.td,{children:"The destination string to save the packed string in, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"const source[]"}),(0,s.jsx)(e.td,{children:"The source, original string."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maxlength=sizeof string"}),(0,s.jsx)(e.td,{children:"The maximum size to insert."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,s.jsx)(e.p,{children:"The number of characters packed."}),"\n",(0,s.jsx)(e.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'new string[32 char];\nstrpack(string, "Hi, how are you?");\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"strcmp: Compare two strings to see if they are the same."}),"\n",(0,s.jsx)(e.li,{children:"strfind: Search for a substring in a string."}),"\n",(0,s.jsx)(e.li,{children:"strtok: Search for a variable typed after a space."}),"\n",(0,s.jsx)(e.li,{children:"strdel: Delete part/all of a string."}),"\n",(0,s.jsx)(e.li,{children:"strins: Put a string into another string."}),"\n",(0,s.jsx)(e.li,{children:"strlen: Check the length of a string."}),"\n",(0,s.jsx)(e.li,{children:"strmid: Extract characters from a string."}),"\n",(0,s.jsx)(e.li,{children:"strval: Find the value of a string."}),"\n",(0,s.jsx)(e.li,{children:"strcat: Contact two strings into a destination reference."}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(o,{...t})}):o(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return a},a:function(){return c}});var r=n(67294);let s={},i=r.createContext(s);function c(t){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93505"],{32575:function(t,n,e){e.r(n),e.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/strlen","title":"strlen","description":"Get the length of a string.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/strlen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strlen","permalink":"/th/docs/scripting/functions/strlen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strlen.md","tags":[],"version":"current","frontMatter":{"title":"strlen","sidebar_label":"strlen","description":"Get the length of a string.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"strins","permalink":"/th/docs/scripting/functions/strins"},"next":{"title":"strmid","permalink":"/th/docs/scripting/functions/strmid"}}'),r=e("85893"),s=e("50065");let l={title:"strlen",sidebar_label:"strlen",description:"Get the length of a string.",tags:[]},o=void 0,c={},a=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(t){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"Get the length of a string."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const string[]"}),(0,r.jsx)(n.td,{children:"The string to get the length of."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"The length of the string as an integer."}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new stringLength = strlen("This is an example string."); // stringLength is now set to 26\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"strcmp: Compare two strings to check if they are the same."}),"\n",(0,r.jsx)(n.li,{children:"strfind: Search for a string in another string."}),"\n",(0,r.jsx)(n.li,{children:"strtok: Get the next 'token' (word/parameter) in a string."}),"\n",(0,r.jsx)(n.li,{children:"strdel: Delete part of a string."}),"\n",(0,r.jsx)(n.li,{children:"strins: Insert text into a string."}),"\n",(0,r.jsx)(n.li,{children:"strmid: Extract part of a string into another string."}),"\n",(0,r.jsx)(n.li,{children:"strpack: Pack a string into a destination string."}),"\n",(0,r.jsx)(n.li,{children:"strval: Convert a string into an integer."}),"\n",(0,r.jsx)(n.li,{children:"strcat: Concatenate two strings into a destination reference."}),"\n"]})]})}function h(t={}){let{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},50065:function(t,n,e){e.d(n,{Z:function(){return o},a:function(){return l}});var i=e(67294);let r={},s=i.createContext(r);function l(t){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);
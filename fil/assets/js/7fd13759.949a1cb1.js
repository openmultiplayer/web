"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41924"],{53582:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/GetMenuItem","title":"GetMenuItem","description":"Get the text in the specified cell - addressed by column and row.","source":"@site/docs/scripting/functions/GetMenuItem.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetMenuItem","permalink":"/fil/docs/scripting/functions/GetMenuItem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetMenuItem.md","tags":[{"inline":true,"label":"menu","permalink":"/fil/docs/tags/menu"}],"version":"current","frontMatter":{"title":"GetMenuItem","sidebar_label":"GetMenuItem","description":"Get the text in the specified cell - addressed by column and row.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"GetMenuColumns","permalink":"/fil/docs/scripting/functions/GetMenuColumns"},"next":{"title":"GetMenuItems","permalink":"/fil/docs/scripting/functions/GetMenuItems"}}'),s=n("85893"),r=n("50065");let l={title:"GetMenuItem",sidebar_label:"GetMenuItem",description:"Get the text in the specified cell - addressed by column and row.",tags:["menu"]},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the text in the specified cell - addressed by column and row."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Menu",":menuid"]}),(0,s.jsx)(t.td,{children:"The ID of the menu."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"column"}),(0,s.jsx)(t.td,{children:"The column."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"row"}),(0,s.jsx)(t.td,{children:"The row to get the text of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cell[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"len"}),(0,s.jsx)(t.td,{children:"The length of the string that should be stored."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function always returns true."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new text[32];\n\n// Get the menu item text in the column 1 and row 2\nGetMenuItem(menuid, 1, 2, text, sizeof(text));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetMenuItems",children:"GetMenuItems"}),": Get the menu items."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetMenuColumns",children:"GetMenuColumns"}),": Get the number of active columns."]}),"\n"]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
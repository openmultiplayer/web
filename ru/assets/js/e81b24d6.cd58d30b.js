"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76573"],{78899:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"scripting/functions/GetMenuColumnHeader","title":"GetMenuColumnHeader","description":"Get the text in the header of the specified column.","source":"@site/docs/scripting/functions/GetMenuColumnHeader.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetMenuColumnHeader","permalink":"/ru/docs/scripting/functions/GetMenuColumnHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetMenuColumnHeader.md","tags":[{"inline":true,"label":"menu","permalink":"/ru/docs/tags/menu"}],"version":"current","frontMatter":{"title":"GetMenuColumnHeader","sidebar_label":"GetMenuColumnHeader","description":"Get the text in the header of the specified column.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"GetMaxPlayers","permalink":"/ru/docs/scripting/functions/GetMaxPlayers"},"next":{"title":"GetMenuColumnWidth","permalink":"/ru/docs/scripting/functions/GetMenuColumnWidth"}}'),i=n("85893"),s=n("50065");let o={title:"GetMenuColumnHeader",sidebar_label:"GetMenuColumnHeader",description:"Get the text in the header of the specified column.",tags:["menu"]},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the text in the header of the specified column."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Menu",":menuid"]}),(0,i.jsx)(t.td,{children:"The ID of the menu."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"column"}),(0,i.jsx)(t.td,{children:"The column."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"len = sizeof (header)"}),(0,i.jsx)(t.td,{children:"The length of the text that should be stored."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:["This function always returns ",(0,i.jsx)(t.strong,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new text[32];\n\n// Get the menu header text in the column 1\nGetMenuColumnHeader(menuid, 1, text, sizeof(text));\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateMenu",children:"CreateMenu"}),": Creates a menu."]}),"\n"]})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
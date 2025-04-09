"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60487"],{5425:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/SetSVarFloat","title":"SetSVarFloat","description":"Set a float server variable.","source":"@site/docs/scripting/functions/SetSVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSVarFloat","permalink":"/ro/docs/scripting/functions/SetSVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetSVarFloat.md","tags":[{"inline":true,"label":"server variable","permalink":"/ro/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/ro/docs/tags/svar"}],"version":"current","frontMatter":{"title":"SetSVarFloat","sidebar_label":"SetSVarFloat","description":"Set a float server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerWorldBounds","permalink":"/ro/docs/scripting/functions/SetPlayerWorldBounds"},"next":{"title":"SetSVarInt","permalink":"/ro/docs/scripting/functions/SetSVarInt"}}'),s=t("85893"),i=t("50065");let a={title:"SetSVarFloat",sidebar_label:"SetSVarFloat",description:"Set a float server variable.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Set a float server variable."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const svar[]"}),(0,s.jsx)(r.td,{children:"The name of the server variable."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["Float",":value"]}),(0,s.jsx)(r.td,{children:"The float to be set."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"false"})," - The function failed to execute. The variable name is null or over 40 characters."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'// set "Version"\nSetSVarFloat("Version", 0.37);\n\n// will print version that server has\nprintf("Version: %.2f", GetSVarFloat("Version"));\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return a}});var n=t(67294);let s={},i=n.createContext(s);function a(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
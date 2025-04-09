"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["57341"],{52673:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/SetSVarInt","title":"SetSVarInt","description":"Set an integer server variable.","source":"@site/docs/scripting/functions/SetSVarInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSVarInt","permalink":"/sr/docs/scripting/functions/SetSVarInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetSVarInt.md","tags":[{"inline":true,"label":"server variable","permalink":"/sr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/sr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"SetSVarInt","sidebar_label":"SetSVarInt","description":"Set an integer server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"SetSVarFloat","permalink":"/sr/docs/scripting/functions/SetSVarFloat"},"next":{"title":"SetSVarString","permalink":"/sr/docs/scripting/functions/SetSVarString"}}'),i=t("85893"),s=t("50065");let a={title:"SetSVarInt",sidebar_label:"SetSVarInt",description:"Set an integer server variable.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Set an integer server variable."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"const svar[]"}),(0,i.jsx)(r.td,{children:"The name of the server variable."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"value"}),(0,i.jsx)(r.td,{children:"The integer to be set."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"false"})," - The function failed to execute. The variable name is null or over 40 characters."]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'// set "Version"\nSetSVarInt("Version", 37);\n\n// will print version that server has\nprintf("Version: %d", GetSVarInt("Version"));\n'})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return a}});var n=t(67294);let i={},s=n.createContext(i);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56778"],{16585:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetSVarFloat","title":"GetSVarFloat","description":"Gets a float server variable\'s value.","source":"@site/docs/scripting/functions/GetSVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarFloat","permalink":"/fil/docs/scripting/functions/GetSVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetSVarFloat.md","tags":[{"inline":true,"label":"server variable","permalink":"/fil/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/fil/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarFloat","sidebar_label":"GetSVarFloat","description":"Gets a float server variable\'s value.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetRunningTimers","permalink":"/fil/docs/scripting/functions/GetRunningTimers"},"next":{"title":"GetSVarInt","permalink":"/fil/docs/scripting/functions/GetSVarInt"}}'),i=r("85893"),a=r("50065");let s={title:"GetSVarFloat",sidebar_label:"GetSVarFloat",description:"Gets a float server variable's value.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"SA-MP 0.3.7 R2"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets a float server variable's value."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const svar[]"}),(0,i.jsxs)(t.td,{children:["The name of the server variable (case-insensitive).",(0,i.jsx)("br",{}),"Assigned in ",(0,i.jsx)(t.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),"."]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The float value of the specified server variable."}),"\n",(0,i.jsx)(t.p,{children:"It will still return 0.0 if the variable is not set."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'// set "Version"\nSetSVarFloat("Version", 0.37);\n\n// will print version that server has\nprintf("Version: %.2f", GetSVarFloat("Version"));\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(67294);let i={},a=n.createContext(i);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
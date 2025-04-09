"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["90882"],{66878:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/GetPVarFloat","title":"GetPVarFloat","description":"Gets a player variable as a float.","source":"@site/docs/scripting/functions/GetPVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarFloat","permalink":"/ro/docs/scripting/functions/GetPVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPVarFloat.md","tags":[{"inline":true,"label":"player variable","permalink":"/ro/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/ro/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarFloat","sidebar_label":"GetPVarFloat","description":"Gets a player variable as a float.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectType","permalink":"/ro/docs/scripting/functions/GetObjectType"},"next":{"title":"GetPVarInt","permalink":"/ro/docs/scripting/functions/GetPVarInt"}}'),n=r("85893"),l=r("50065");let i={title:"GetPVarFloat",sidebar_label:"GetPVarFloat",description:"Gets a player variable as a float.",tags:["player variable","pvar"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets a player variable as a float."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose player variable you want to get."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const pvar[]"}),(0,n.jsx)(t.td,{children:"The name of the player variable."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The float from the specified player variable"}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'LoadPlayerPos(playerid)\n{\n    new Float:x, Float:y, Float:z;\n\n    x = GetPVarFloat(playerid, "Xpos");\n    y = GetPVarFloat(playerid, "Ypos");\n    z = GetPVarFloat(playerid, "Zpos");\n\n    SetPlayerPos(playerid, x, y, z);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Variables aren't reset until after ",(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," is called, so the values are still accessible in OnPlayerDisconnect."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var a=r(67294);let n={},l=a.createContext(n);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
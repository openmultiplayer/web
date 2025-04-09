"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["31046"],{53002:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPVarFloat","title":"SetPVarFloat","description":"Set a float player variable\'s value.","source":"@site/docs/scripting/functions/SetPVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPVarFloat","permalink":"/es/docs/scripting/functions/SetPVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPVarFloat.md","tags":[{"inline":true,"label":"player variable","permalink":"/es/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/es/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"SetPVarFloat","sidebar_label":"SetPVarFloat","description":"Set a float player variable\'s value.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectsDefaultCameraCollision","permalink":"/es/docs/scripting/functions/SetObjectsDefaultCameraCollision"},"next":{"title":"SetPVarInt","permalink":"/es/docs/scripting/functions/SetPVarInt"}}'),n=a("85893"),l=a("50065");let i={title:"SetPVarFloat",sidebar_label:"SetPVarFloat",description:"Set a float player variable's value.",tags:["player variable","pvar"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set a float player variable's value."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose player variable will be set."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const pvar[]"}),(0,n.jsx)(t.td,{children:"The name of the player variable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":value"]}),(0,n.jsx)(t.td,{children:"The float you want to save in the player variable."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'SavePlayerPos(playerid)\n{\n    new Float:x, Float:y, Float:z;\n    GetPlayerPos(playerid, x, y, z); // Get the players position\n\n    SetPVarFloat(playerid, "Xpos", x); // Save the float into a player variable\n    SetPVarFloat(playerid, "Ypos", y); // Save the float into a player variable\n    SetPVarFloat(playerid, "Zpos", z); // Save the float into a player variable\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Variables aren't reset until after ",(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," is called, so the values are still accessible in OnPlayerDisconnect."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var r=a(67294);let n={},l=r.createContext(n);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
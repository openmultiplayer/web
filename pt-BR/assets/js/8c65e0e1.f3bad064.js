"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79130"],{57759:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"scripting/functions/ClearPlayerWorldBounds","title":"ClearPlayerWorldBounds","description":"Reset the player\'s world boundaries to default world boundaries.","source":"@site/docs/scripting/functions/ClearPlayerWorldBounds.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearPlayerWorldBounds","permalink":"/pt-BR/docs/scripting/functions/ClearPlayerWorldBounds","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ClearPlayerWorldBounds.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"ClearPlayerWorldBounds","sidebar_label":"ClearPlayerWorldBounds","description":"Reset the player\'s world boundaries to default world boundaries.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ClearBanList","permalink":"/pt-BR/docs/scripting/functions/ClearBanList"},"next":{"title":"ConnectNPC","permalink":"/pt-BR/docs/scripting/functions/ConnectNPC"}}'),l=n("85893"),s=n("50065");let o={title:"ClearPlayerWorldBounds",sidebar_label:"ClearPlayerWorldBounds",description:"Reset the player's world boundaries to default world boundaries.",tags:["player"]},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Reset the player's world boundaries to default world boundaries."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsx)(r.tbody,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player to reset/clear the world boundaries."})]})})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"true"})," - Function executed successfully."]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"false"})," - Function failed to execute."]}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    ClearPlayerWorldBounds(playerid);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsx)(r.p,{children:"A player's world boundaries can also be reset by setting them to 20000.0000, -20000.0000, 20000.0000, -20000.0000. These are the default values. However, we suggest using ClearPlayerWorldBounds to reset the player's world boundaries for clarity."})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerWorldBounds",children:"SetPlayerWorldBounds"}),": Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerWorldBounds",children:"GetPlayerWorldBounds"}),": Get a player's world boundaries."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var t=n(67294);let l={},s=t.createContext(l);function o(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
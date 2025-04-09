"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10083"],{53088:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"scripting/functions/IsPlayerTeleportAllowed","title":"IsPlayerTeleportAllowed","description":"Can this player teleport by right-clicking on the map?","source":"@site/docs/scripting/functions/IsPlayerTeleportAllowed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerTeleportAllowed","permalink":"/sl/docs/scripting/functions/IsPlayerTeleportAllowed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerTeleportAllowed.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerTeleportAllowed","sidebar_label":"IsPlayerTeleportAllowed","description":"Can this player teleport by right-clicking on the map?","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerStreamedIn","permalink":"/sl/docs/scripting/functions/IsPlayerStreamedIn"},"next":{"title":"IsPlayerTextDrawVisible","permalink":"/sl/docs/scripting/functions/IsPlayerTextDrawVisible"}}'),r=n("85893"),i=n("50065");let s={title:"IsPlayerTeleportAllowed",sidebar_label:"IsPlayerTeleportAllowed",description:"Can this player teleport by right-clicking on the map?",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Can this player teleport by right-clicking on the map?"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to allow teleport."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - Player is allowed."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - Player is not allowed."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    AllowPlayerTeleport(playerid, true);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsPlayerTeleportAllowed(playerid))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AllowPlayerTeleport",children:"AllowPlayerTeleport"}),": Sets the player as an RCON admin."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var l=n(67294);let r={},i=l.createContext(r);function s(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);
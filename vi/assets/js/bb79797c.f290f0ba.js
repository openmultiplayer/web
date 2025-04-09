"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84122"],{24254:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/IsPlayerRaceCheckpointActive","title":"IsPlayerRaceCheckpointActive","description":"Check if the player currently has a race checkpoint visible.","source":"@site/docs/scripting/functions/IsPlayerRaceCheckpointActive.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerRaceCheckpointActive","permalink":"/vi/docs/scripting/functions/IsPlayerRaceCheckpointActive","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerRaceCheckpointActive.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/vi/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/vi/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"IsPlayerRaceCheckpointActive","sidebar_label":"IsPlayerRaceCheckpointActive","description":"Check if the player currently has a race checkpoint visible.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerPickupStreamedIn","permalink":"/vi/docs/scripting/functions/IsPlayerPickupStreamedIn"},"next":{"title":"IsPlayerSpawned","permalink":"/vi/docs/scripting/functions/IsPlayerSpawned"}}'),c=n("85893"),r=n("50065");let s={title:"IsPlayerRaceCheckpointActive",sidebar_label:"IsPlayerRaceCheckpointActive",description:"Check if the player currently has a race checkpoint visible.",tags:["player","checkpoint","racecheckpoint"]},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Check if the player currently has a race checkpoint visible."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,c.jsxs)(t.p,{children:["Returns ",(0,c.jsx)(t.strong,{children:"false"})," if there is no race checkpoint currently shown, otherwise returns ",(0,c.jsx)(t.strong,{children:"true"})]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerRaceCheckpointActive(playerid))\n    {\n        // Do something\n    }\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerCheckpointActive",children:"IsPlayerCheckpointActive"}),": Check if the player currently has a checkpoint visible."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(67294);let c={},r=i.createContext(c);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
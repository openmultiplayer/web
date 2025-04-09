"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42209"],{23284:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/IsPlayerCheckpointActive","title":"IsPlayerCheckpointActive","description":"Check if the player currently has a checkpoint visible.","source":"@site/docs/scripting/functions/IsPlayerCheckpointActive.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerCheckpointActive","permalink":"/ar/docs/scripting/functions/IsPlayerCheckpointActive","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerCheckpointActive.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/ar/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"IsPlayerCheckpointActive","sidebar_label":"IsPlayerCheckpointActive","description":"Check if the player currently has a checkpoint visible.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerCameraTargetEnabled","permalink":"/ar/docs/scripting/functions/IsPlayerCameraTargetEnabled"},"next":{"title":"IsPlayerConnected","permalink":"/ar/docs/scripting/functions/IsPlayerConnected"}}'),r=n("85893"),c=n("50065");let s={title:"IsPlayerCheckpointActive",sidebar_label:"IsPlayerCheckpointActive",description:"Check if the player currently has a checkpoint visible.",tags:["player","checkpoint"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Check if the player currently has a checkpoint visible."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(t.p,{children:["Returns ",(0,r.jsx)(t.strong,{children:"false"})," if there is no checkpoint currently shown, otherwise returns ",(0,r.jsx)(t.strong,{children:"true"})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerCheckpointActive(playerid))\n    {\n        // Do something\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsPlayerRaceCheckpointActive",children:"IsPlayerRaceCheckpointActive"}),": Check if the player currently has a race checkpoint visible."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var i=n(67294);let r={},c=i.createContext(r);function s(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);
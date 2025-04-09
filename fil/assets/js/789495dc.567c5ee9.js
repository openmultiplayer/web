"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83194"],{98825:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/IsPlayerInCheckpoint","title":"IsPlayerInCheckpoint","description":"Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.","source":"@site/docs/scripting/functions/IsPlayerInCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInCheckpoint","permalink":"/fil/docs/scripting/functions/IsPlayerInCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerInCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fil/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"IsPlayerInCheckpoint","sidebar_label":"IsPlayerInCheckpoint","description":"Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInAnyVehicle","permalink":"/fil/docs/scripting/functions/IsPlayerInAnyVehicle"},"next":{"title":"IsPlayerInDriveByMode","permalink":"/fil/docs/scripting/functions/IsPlayerInDriveByMode"}}'),r=i("85893"),l=i("50065");let c={title:"IsPlayerInCheckpoint",sidebar_label:"IsPlayerInCheckpoint",description:"Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.",tags:["player","checkpoint"]},a=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The player you want to know the status of."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," if the player isn't inside the checkpoint, otherwise ",(0,r.jsx)(n.strong,{children:"true"})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"if (IsPlayerInCheckpoint(playerid))\n{\n    SetPlayerHealth(playerid, 100.0);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerCheckpointActive",children:"IsPlayerCheckpointActive"}),": Check if the player currently has a checkpoint visible."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Called when a player enters a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Called when a player leaves a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Called when a player enters a race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Called when a player leaves a race checkpoint."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return c}});var t=i(67294);let r={},l=t.createContext(r);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
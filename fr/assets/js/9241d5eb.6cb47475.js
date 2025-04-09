"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["38313"],{31068:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>c,assets:()=>l,toc:()=>o,contentTitle:()=>s});var c=JSON.parse('{"id":"scripting/functions/SetPlayerRaceCheckpoint","title":"SetPlayerRaceCheckpoint","description":"Creates a race checkpoint.","source":"@site/docs/scripting/functions/SetPlayerRaceCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerRaceCheckpoint","permalink":"/fr/docs/scripting/functions/SetPlayerRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fr/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/fr/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"SetPlayerRaceCheckpoint","sidebar_label":"SetPlayerRaceCheckpoint","description":"Creates a race checkpoint.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerPosFindZ","permalink":"/fr/docs/scripting/functions/SetPlayerPosFindZ"},"next":{"title":"SetPlayerScore","permalink":"/fr/docs/scripting/functions/SetPlayerScore"}}'),r=t("85893"),i=t("50065");let a={title:"SetPlayerRaceCheckpoint",sidebar_label:"SetPlayerRaceCheckpoint",description:"Creates a race checkpoint.",tags:["player","checkpoint","racecheckpoint"]},s=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Creates a race checkpoint. When the player enters it, the OnPlayerEnterRaceCheckpoint callback is called."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to set the checkpoint for"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["CP_TYPE",":type"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../resources/race-checkpoint-types",children:"Type of race checkpoint"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":centreX"]}),(0,r.jsx)(n.td,{children:"X-Coordinate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":centreY"]}),(0,r.jsx)(n.td,{children:"Y-Coordinate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":centreZ"]}),(0,r.jsx)(n.td,{children:"Z-Coordinate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":nextX"]}),(0,r.jsx)(n.td,{children:"X-Coordinate of the next point, for the arrow facing direction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":nextY"]}),(0,r.jsx)(n.td,{children:"Y-Coordinate of the next point, for the arrow facing direction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":nextZ"]}),(0,r.jsx)(n.td,{children:"Z-Coordinate of the next point, for the arrow facing direction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":radius"]}),(0,r.jsx)(n.td,{children:"Size (diameter) of the checkpoint"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 644.3091, 1767.0223, 4.9970, 650.6734, 1812.0367, 4.9970, 3.0);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Another example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"//from Yagu's race filterscript, (c) by Yagu\npublic SetRaceCheckpoint(playerid, Airrace, target, next)\n{\n    if (next == -1 && Airrace == 0)\n    {\n        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);\n    }\n    else if (next == -1 && Airrace == 1)\n    {\n        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);\n    }\n    else if (Airrace == 1)\n    {\n        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);\n    }\n    else\n    {\n        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Race checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' race checkpoints (only show them when players are close enough), use a race checkpoint streamer."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerRaceCheckpoint",children:"GetPlayerRaceCheckpoint"}),": Get the location of the current race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerRaceCheckpointActive",children:"IsPlayerRaceCheckpointActive"}),": Check if the player currently has a race checkpoint visible."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Called when a player enters a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Called when a player leaves a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Called when a player enters a race checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Called when a player leaves a race checkpoint."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/race-checkpoint-types",children:"Types of race checkpoints"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var c=t(67294);let r={},i=c.createContext(r);function a(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
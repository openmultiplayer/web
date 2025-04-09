"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21446"],{5537:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPlayerRaceCheckpoint","title":"GetPlayerRaceCheckpoint","description":"Get the location of the current race checkpoint.","source":"@site/docs/scripting/functions/GetPlayerRaceCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerRaceCheckpoint","permalink":"/fil/docs/scripting/functions/GetPlayerRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fil/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/fil/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"GetPlayerRaceCheckpoint","sidebar_label":"GetPlayerRaceCheckpoint","description":"Get the location of the current race checkpoint.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPos","permalink":"/fil/docs/scripting/functions/GetPlayerPos"},"next":{"title":"GetPlayerRawIp","permalink":"/fil/docs/scripting/functions/GetPlayerRawIp"}}'),c=t("85893"),i=t("50065");let a={title:"GetPlayerRaceCheckpoint",sidebar_label:"GetPlayerRaceCheckpoint",description:"Get the location of the current race checkpoint.",tags:["player","checkpoint","racecheckpoint"]},l=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Get the location of the current race checkpoint."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"The ID of the player to get the checkpoint position of."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":centreX"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the centreX coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":centreY"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the centreY coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":centreZ"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the centreZ coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":nextX"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the nextX coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":nextY"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the nextY coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":nextZ"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the nextZ coordinate in, passed by reference."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["&Float",":radius"]}),(0,c.jsx)(n.td,{children:"A float variable in which to store the radius in, passed by reference."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 373.1631, 2502.4644, 16.4774, 269.8644, 2503.4963, 16.4774, 2.0);\n\nnew Float:centreX,\n    Float:centreY,\n    Float:centreZ,\n    Float:nextX,\n    Float:nextY,\n    Float:nextZ,\n    Float:radius;\n\nGetPlayerRaceCheckpoint(playerid, centreX, centreY, centreZ, nextX, nextY, nextZ, radius);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerRaceCheckpointActive",children:"IsPlayerRaceCheckpointActive"}),": Check if the player currently has a race checkpoint visible."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Called when a player enters a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Called when a player leaves a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Called when a player enters a race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Called when a player leaves a race checkpoint."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);let c={},i=r.createContext(c);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36529"],{3803:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerCheckpoint","title":"GetPlayerCheckpoint","description":"Get the location of the current checkpoint.","source":"@site/docs/scripting/functions/GetPlayerCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCheckpoint","permalink":"/fa/docs/scripting/functions/GetPlayerCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fa/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"GetPlayerCheckpoint","sidebar_label":"GetPlayerCheckpoint","description":"Get the location of the current checkpoint.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraZoom","permalink":"/fa/docs/scripting/functions/GetPlayerCameraZoom"},"next":{"title":"GetPlayerClass","permalink":"/fa/docs/scripting/functions/GetPlayerClass"}}'),i=t("85893"),c=t("50065");let l={title:"GetPlayerCheckpoint",sidebar_label:"GetPlayerCheckpoint",description:"Get the location of the current checkpoint.",tags:["player","checkpoint"]},a=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get the location of the current checkpoint."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the checkpoint position of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["&Float",":centreX"]}),(0,i.jsx)(n.td,{children:"A float variable in which to store the centreX coordinate in, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["&Float",":centreY"]}),(0,i.jsx)(n.td,{children:"A float variable in which to store the centreY coordinate in, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["&Float",":centreZ"]}),(0,i.jsx)(n.td,{children:"A float variable in which to store the centreZ coordinate in, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["&Float",":radius"]}),(0,i.jsx)(n.td,{children:"A float variable in which to store the radius in, passed by reference."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"SetPlayerCheckpoint(playerid, 408.9874, 2537.8059, 16.5455, 1.5);\n\nnew Float:centreX,\n    Float:centreY,\n    Float:centreZ,\n    Float:radius;\n\nGetPlayerCheckpoint(playerid, centreX, centreY, centreZ, radius);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerCheckpointActive",children:"IsPlayerCheckpointActive"}),": Check if the player currently has a checkpoint visible."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Called when a player enters a checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Called when a player leaves a checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Called when a player enters a race checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Called when a player leaves a race checkpoint."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let i={},c=r.createContext(i);function l(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
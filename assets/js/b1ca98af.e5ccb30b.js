"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["72837"],{47901:function(e,r,i){i.r(r),i.d(r,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>p,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/IsPlayerPickupStreamedIn","title":"IsPlayerPickupStreamedIn","description":"Checks if a player-pickup is streamed in for the player.","source":"@site/docs/scripting/functions/IsPlayerPickupStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerPickupStreamedIn","permalink":"/docs/scripting/functions/IsPlayerPickupStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerPickupStreamedIn.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"IsPlayerPickupStreamedIn","sidebar_label":"IsPlayerPickupStreamedIn","description":"Checks if a player-pickup is streamed in for the player.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerObjectMoving","permalink":"/docs/scripting/functions/IsPlayerObjectMoving"},"next":{"title":"IsPlayerRaceCheckpointActive","permalink":"/docs/scripting/functions/IsPlayerRaceCheckpointActive"}}'),n=i("85893"),l=i("50065");let a={title:"IsPlayerPickupStreamedIn",sidebar_label:"IsPlayerPickupStreamedIn",description:"Checks if a player-pickup is streamed in for the player.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Checks if a player-pickup is streamed in for the player."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pickupid"}),(0,n.jsx)(r.td,{children:"The ID of the player-pickup."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:["This function returns ",(0,n.jsx)(r.strong,{children:"true"})," if the player-pickup is streamed in for the player, or ",(0,n.jsx)(r.strong,{children:"false"})," if it is not."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (IsPlayerPickupStreamedIn(playerid, PlayerPickup[playerid]))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return s},a:function(){return a}});var t=i(67294);let n={},l=t.createContext(n);function a(e){let r=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28739"],{70911:function(e,i,r){r.r(i),r.d(i,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>p,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/IsValidPlayerPickup","title":"IsValidPlayerPickup","description":"Checks if a player-pickup is valid.","source":"@site/docs/scripting/functions/IsValidPlayerPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPlayerPickup","permalink":"/sr/docs/scripting/functions/IsValidPlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidPlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/sr/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/sr/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"IsValidPlayerPickup","sidebar_label":"IsValidPlayerPickup","description":"Checks if a player-pickup is valid.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"IsValidPlayerObject","permalink":"/sr/docs/scripting/functions/IsValidPlayerObject"},"next":{"title":"IsValidPlayerTextDraw","permalink":"/sr/docs/scripting/functions/IsValidPlayerTextDraw"}}'),t=r("85893"),n=r("50065");let a={title:"IsValidPlayerPickup",sidebar_label:"IsValidPlayerPickup",description:"Checks if a player-pickup is valid.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Checks if a player-pickup is valid."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"The ID of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"pickupid"}),(0,t.jsx)(i.td,{children:"The ID of the player-pickup to check."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:["This function returns ",(0,t.jsx)(i.strong,{children:"true"})," if the player-pickup is valid, or ",(0,t.jsx)(i.strong,{children:"false"})," if it is not."]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'\n\n    if (IsValidPlayerPickup(playerid, PlayerPickup[playerid]))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"./CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return s},a:function(){return a}});var l=r(67294);let t={},n=l.createContext(t);function a(e){let i=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(n.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32442"],{45073:function(e,i,r){r.r(i),r.d(i,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>p,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/CreatePlayerPickup","title":"CreatePlayerPickup","description":"Creates a pickup which will be visible to only one player.","source":"@site/docs/scripting/functions/CreatePlayerPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePlayerPickup","permalink":"/pt-BR/docs/scripting/functions/CreatePlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreatePlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/pt-BR/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/pt-BR/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"CreatePlayerPickup","sidebar_label":"CreatePlayerPickup","description":"Creates a pickup which will be visible to only one player.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerObject","permalink":"/pt-BR/docs/scripting/functions/CreatePlayerObject"},"next":{"title":"CreatePlayerTextDraw","permalink":"/pt-BR/docs/scripting/functions/CreatePlayerTextDraw"}}'),t=r("85893"),n=r("50065");let a={title:"CreatePlayerPickup",sidebar_label:"CreatePlayerPickup",description:"Creates a pickup which will be visible to only one player.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Creates a pickup which will be visible to only one player."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"The ID of the player to create the pickup for."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/pickupids",children:"model"})}),(0,t.jsx)(i.td,{children:"The model of the pickup."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/pickuptypes",children:"type"})}),(0,t.jsx)(i.td,{children:"The pickup type. Determines how the pickup responds when picked up."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":x"]}),(0,t.jsx)(i.td,{children:"The X coordinate to create the pickup at."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":y"]}),(0,t.jsx)(i.td,{children:"The Y coordinate to create the pickup at."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":z"]}),(0,t.jsx)(i.td,{children:"The Z coordinate to create the pickup at."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"virtualWorld"}),(0,t.jsx)(i.td,{children:"The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:["The ID of the created player-pickup, ",(0,t.jsx)(i.strong,{children:"-1"})," on failure (pickup max limit)."]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"new PlayerPickupArmour[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    // Create an armour pickup and store the ID in 'PlayerPickupArmour[playerid]'\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes)."}),"\n",(0,t.jsx)(i.li,{children:"Pickups are shown to, and can be picked up by all players."}),"\n",(0,t.jsx)(i.li,{children:"It is possible that if DestroyPlayerPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables."}),"\n",(0,t.jsx)(i.li,{children:"Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo."}),"\n",(0,t.jsx)(i.li,{children:"For fully scripted pickups, type 1 should be used."}),"\n"]})}),"\n",(0,t.jsxs)(i.admonition,{type:"warning",children:[(0,t.jsx)(i.p,{children:"Known Bug(s):"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPlayerPickup either."}),"\n"]})]}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this function."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": Called when a player picks up a player-pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../callbacks/OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"}),": Called when a player-pickup enters the visual range of the player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../callbacks/OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": Called when a player-pickup leaves the visual range of the player."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../resources/pickupids",children:"Pickup IDs"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../resources/pickuptypes",children:"Pickup Types"})}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return s},a:function(){return a}});var l=r(67294);let t={},n=l.createContext(t);function a(e){let i=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(n.Provider,{value:i},e.children)}}}]);
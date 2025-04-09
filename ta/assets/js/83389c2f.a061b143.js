"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["14893"],{64552:function(e,i,r){r.r(i),r.d(i,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>p,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/GetPlayerPickupPos","title":"GetPlayerPickupPos","description":"Gets the coordinates of a player-pickup.","source":"@site/docs/scripting/functions/GetPlayerPickupPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPickupPos","permalink":"/ta/docs/scripting/functions/GetPlayerPickupPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPickupPos.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ta/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ta/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"GetPlayerPickupPos","sidebar_label":"GetPlayerPickupPos","description":"Gets the coordinates of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPickupModel","permalink":"/ta/docs/scripting/functions/GetPlayerPickupModel"},"next":{"title":"GetPlayerPickupType","permalink":"/ta/docs/scripting/functions/GetPlayerPickupType"}}'),l=r("85893"),n=r("50065");let s={title:"GetPlayerPickupPos",sidebar_label:"GetPlayerPickupPos",description:"Gets the coordinates of a player-pickup.",tags:["player","pickup","playerpickup"]},a=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Gets the coordinates of a player-pickup."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"The ID of the player."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"pickupid"}),(0,l.jsx)(i.td,{children:"The ID of the player-pickup to get the position of."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["&Float",":x"]}),(0,l.jsx)(i.td,{children:"A float variable in which to store the x coordinate, passed by reference."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["&Float",":y"]}),(0,l.jsx)(i.td,{children:"A float variable in which to store the y coordinate, passed by reference."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["&Float",":z"]}),(0,l.jsx)(i.td,{children:"A float variable in which to store the z coordinate, passed by reference."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(i.p,{children:"This function does not return a specific value."}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);\n\n    new\n        Float:x,\n        Float:y,\n        Float:z;\n\n    GetPickupPos(g_Pickup, x, y, z);\n    // x = 2010.0979\n    // y = 1222.0642\n    // z = 10.8206\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return a},a:function(){return s}});var t=r(67294);let l={},n=t.createContext(l);function s(e){let i=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);
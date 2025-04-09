"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74561"],{27609:function(e,i,r){r.r(i),r.d(i,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>p,toc:()=>s,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/GetPlayerPickupModel","title":"GetPlayerPickupModel","description":"Gets the model ID of a player-pickup.","source":"@site/docs/scripting/functions/GetPlayerPickupModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPickupModel","permalink":"/th/docs/scripting/functions/GetPlayerPickupModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPickupModel.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/th/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/th/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"GetPlayerPickupModel","sidebar_label":"GetPlayerPickupModel","description":"Gets the model ID of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectSyncRotation","permalink":"/th/docs/scripting/functions/GetPlayerObjectSyncRotation"},"next":{"title":"GetPlayerPickupPos","permalink":"/th/docs/scripting/functions/GetPlayerPickupPos"}}'),l=r("85893"),n=r("50065");let a={title:"GetPlayerPickupModel",sidebar_label:"GetPlayerPickupModel",description:"Gets the model ID of a player-pickup.",tags:["player","pickup","playerpickup"]},c=void 0,p={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Gets the model ID of a player-pickup."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"The ID of the player."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"pickupid"}),(0,l.jsx)(i.td,{children:"The ID of the player-pickup to get the model ID of."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(i.p,{children:"Returns the model ID of the player-pickup."}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);\n\n    new model = GetPlayerPickupModel(playerid, PlayerPickup[playerid]);\n    // model = 1239\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return c},a:function(){return a}});var t=r(67294);let l={},n=t.createContext(l);function a(e){let i=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87899"],{73473:function(e,r,i){i.r(r),i.d(r,{default:()=>d,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>p,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/SetPlayerPickupVirtualWorld","title":"SetPlayerPickupVirtualWorld","description":"Sets the virtual world ID of a player-pickup.","source":"@site/docs/scripting/functions/SetPlayerPickupVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerPickupVirtualWorld","permalink":"/zh-TW/docs/scripting/functions/SetPlayerPickupVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerPickupVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/zh-TW/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/zh-TW/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"SetPlayerPickupVirtualWorld","sidebar_label":"SetPlayerPickupVirtualWorld","description":"Sets the virtual world ID of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerPickupType","permalink":"/zh-TW/docs/scripting/functions/SetPlayerPickupType"},"next":{"title":"SetPlayerPos","permalink":"/zh-TW/docs/scripting/functions/SetPlayerPos"}}'),t=i("85893"),n=i("50065");let a={title:"SetPlayerPickupVirtualWorld",sidebar_label:"SetPlayerPickupVirtualWorld",description:"Sets the virtual world ID of a player-pickup.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Sets the virtual world ID of a player-pickup."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The ID of the player."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pickupid"}),(0,t.jsx)(r.td,{children:"The ID of the player-pickup."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"virtualWorld"}),(0,t.jsx)(r.td,{children:"The virtual world ID to set."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:["This function always returns ",(0,t.jsx)(r.strong,{children:"true"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 1, 2010.0979, 1222.0642, 10.8206, 20);\n    \n    SetPlayerPickupVirtualWorld(playerid, PlayerPickup[playerid], 10);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return s},a:function(){return a}});var l=i(67294);let t={},n=l.createContext(t);function a(e){let r=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(n.Provider,{value:r},e.children)}}}]);
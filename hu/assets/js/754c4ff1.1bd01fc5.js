"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7560"],{10857:function(e,r,i){i.r(r),i.d(r,{default:()=>o,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>p,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/SetPlayerPickupModel","title":"SetPlayerPickupModel","description":"Sets the model of a player-pickup.","source":"@site/docs/scripting/functions/SetPlayerPickupModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerPickupModel","permalink":"/hu/docs/scripting/functions/SetPlayerPickupModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerPickupModel.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/hu/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/hu/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"SetPlayerPickupModel","sidebar_label":"SetPlayerPickupModel","description":"Sets the model of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectRot","permalink":"/hu/docs/scripting/functions/SetPlayerObjectRot"},"next":{"title":"SetPlayerPickupPos","permalink":"/hu/docs/scripting/functions/SetPlayerPickupPos"}}'),l=i("85893"),n=i("50065");let s={title:"SetPlayerPickupModel",sidebar_label:"SetPlayerPickupModel",description:"Sets the model of a player-pickup.",tags:["player","pickup","playerpickup"]},c=void 0,a={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Sets the model of a player-pickup."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"pickupid"}),(0,l.jsx)(r.td,{children:"The ID of the player-pickup."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"model"}),(0,l.jsxs)(r.td,{children:["The ",(0,l.jsx)(r.a,{href:"../resources/pickupids",children:"model"})," to set."]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["bool",":update"," = true"]}),(0,l.jsx)(r.td,{children:"Update pickup for player. (true/false)"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(r.p,{children:["This function always returns ",(0,l.jsx)(r.strong,{children:"true"}),"."]}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    \n    SetPlayerPickupModel(playerid, PlayerPickup[playerid], 1210);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function o(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return s}});var t=i(67294);let l={},n=t.createContext(l);function s(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
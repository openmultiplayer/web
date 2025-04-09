"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18815"],{70293:function(e,l,r){r.r(l),r.d(l,{default:()=>d,frontMatter:()=>c,metadata:()=>a,assets:()=>p,toc:()=>s,contentTitle:()=>t});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickUpPlayerPickup","title":"OnPlayerPickUpPlayerPickup","description":"This callback is called when a player picks up a player-pickup created with CreatePlayerPickup.","source":"@site/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickUpPlayerPickup","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ro/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ro/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"OnPlayerPickUpPlayerPickup","sidebar_label":"OnPlayerPickUpPlayerPickup","description":"This callback is called when a player picks up a player-pickup created with CreatePlayerPickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickUpPickup","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickUpPickup"},"next":{"title":"OnPlayerPickupStreamIn","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickupStreamIn"}}'),i=r("85893"),n=r("50065");let c={title:"OnPlayerPickUpPlayerPickup",sidebar_label:"OnPlayerPickUpPlayerPickup",description:"This callback is called when a player picks up a player-pickup created with CreatePlayerPickup.",tags:["player","pickup","playerpickup"]},t=void 0,p={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:r}=l;return r||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(l.p,{children:["This callback is called when a player picks up a player-pickup created with ",(0,i.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),"."]}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"The ID of the player that picked up the player-pickup."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"pickupid"}),(0,i.jsxs)(l.td,{children:["The ID of the player-pickup, returned by ",(0,i.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"})]})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"It is always called first in gamemode."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:"new player_pickup_Cash[MAX_PLAYERS];\nnew player_pickup_Health[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);\n    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);\n    return 1;\n}\n\npublic OnPlayerPickUpPlayerPickup(playerid, pickupid)\n{\n    if (pickupid == player_pickup_Cash[playerid])\n    {\n        GivePlayerMoney(playerid, 1000);\n    }\n    else if (pickupid == player_pickup_Health[playerid])\n    {\n        SetPlayerHealth(playerid, 100.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"}),": Called when a player-pickup enters the visual range of the player."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": Called when a player-pickup leaves the visual range of the player."]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,l,r){r.d(l,{Z:function(){return t},a:function(){return c}});var a=r(67294);let i={},n=a.createContext(i);function c(e){let l=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(n.Provider,{value:l},e.children)}}}]);
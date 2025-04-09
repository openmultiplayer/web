"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68483"],{77585:function(e,l,a){a.r(l),a.d(l,{default:()=>d,frontMatter:()=>t,metadata:()=>r,assets:()=>s,toc:()=>p,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickupStreamOut","title":"OnPlayerPickupStreamOut","description":"This callback is called when a player-pickup leaves the visual range of the player.","source":"@site/docs/scripting/callbacks/OnPlayerPickupStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickupStreamOut","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickupStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerPickupStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ro/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ro/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"OnPlayerPickupStreamOut","sidebar_label":"OnPlayerPickupStreamOut","description":"This callback is called when a player-pickup leaves the visual range of the player.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickupStreamIn","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickupStreamIn"},"next":{"title":"OnPlayerRequestClass","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestClass"}}'),i=a("85893"),n=a("50065");let t={title:"OnPlayerPickupStreamOut",sidebar_label:"OnPlayerPickupStreamOut",description:"This callback is called when a player-pickup leaves the visual range of the player.",tags:["player","pickup","playerpickup"]},c=void 0,s={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:a}=l;return a||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"This callback is called when a player-pickup leaves the visual range of the player."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"pickupid"}),(0,i.jsxs)(l.td,{children:["The ID of the player-pickup, returned by ",(0,i.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"})]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"The ID of the player that player-pickup leaves the visual range."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"It is always called first in gamemode."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:'new g_PlayerPickupHealth[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPlayerPickupStreamOut(pickupid, playerid)\n{\n    if (pickupid == g_PlayerPickupHealth[playerid])\n    {\n        printf("g_PlayerPickupHealth is streamed out for player id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": Called when a player picks up a player-pickup."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"}),": Called when a player-pickup enters the visual range of the player."]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../functions/DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n"]})]})}function d(e={}){let{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,l,a){a.d(l,{Z:function(){return c},a:function(){return t}});var r=a(67294);let i={},n=r.createContext(i);function t(e){let l=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(n.Provider,{value:l},e.children)}}}]);
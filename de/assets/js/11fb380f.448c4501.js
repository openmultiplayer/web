"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74934"],{8469:function(e,l,r){r.r(l),r.d(l,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>s,toc:()=>p,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickupStreamIn","title":"OnPlayerPickupStreamIn","description":"This callback is called when a player-pickup enters the visual range of the player.","source":"@site/docs/scripting/callbacks/OnPlayerPickupStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickupStreamIn","permalink":"/de/docs/scripting/callbacks/OnPlayerPickupStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerPickupStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/de/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/de/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"OnPlayerPickupStreamIn","sidebar_label":"OnPlayerPickupStreamIn","description":"This callback is called when a player-pickup enters the visual range of the player.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickUpPlayerPickup","permalink":"/de/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup"},"next":{"title":"OnPlayerPickupStreamOut","permalink":"/de/docs/scripting/callbacks/OnPlayerPickupStreamOut"}}'),n=r("85893"),i=r("50065");let t={title:"OnPlayerPickupStreamIn",sidebar_label:"OnPlayerPickupStreamIn",description:"This callback is called when a player-pickup enters the visual range of the player.",tags:["player","pickup","playerpickup"]},c=void 0,s={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=l;return r||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(l.p,{children:"This callback is called when a player-pickup enters the visual range of the player."}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Name"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"pickupid"}),(0,n.jsxs)(l.td,{children:["The ID of the player-pickup, returned by ",(0,n.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"playerid"}),(0,n.jsx)(l.td,{children:"The ID of the player that player-pickup enters the visual range."})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(l.p,{children:"It is always called first in gamemode."}),"\n",(0,n.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-c",children:'new g_PlayerPickupHealth[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPlayerPickupStreamIn(pickupid, playerid)\n{\n    if (pickupid == g_PlayerPickupHealth[playerid])\n    {\n        printf("g_PlayerPickupHealth is streamed in for player id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": Called when a player picks up a player-pickup."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": Called when a player-pickup leaves the visual range of the player."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../functions/DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n"]})]})}function u(e={}){let{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,l,r){r.d(l,{Z:function(){return c},a:function(){return t}});var a=r(67294);let n={},i=a.createContext(n);function t(e){let l=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(i.Provider,{value:l},e.children)}}}]);
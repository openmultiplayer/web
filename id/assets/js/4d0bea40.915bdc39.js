"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74529"],{89279:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>p,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnPickupStreamOut","title":"OnPickupStreamOut","description":"This callback is called when a pickup leaves the visual range of a player.","source":"@site/docs/scripting/callbacks/OnPickupStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPickupStreamOut","permalink":"/id/docs/scripting/callbacks/OnPickupStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPickupStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPickupStreamOut","sidebar_label":"OnPickupStreamOut","description":"This callback is called when a pickup leaves the visual range of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamIn","permalink":"/id/docs/scripting/callbacks/OnPickupStreamIn"},"next":{"title":"OnPlayerClickGangZone","permalink":"/id/docs/scripting/callbacks/OnPlayerClickGangZone"}}'),a=i("85893"),l=i("50065");let r={title:"OnPickupStreamOut",sidebar_label:"OnPickupStreamOut",description:"This callback is called when a pickup leaves the visual range of a player.",tags:["player"]},c=void 0,s={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This callback is called when a pickup leaves the visual range of a player."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"pickupid"}),(0,a.jsxs)(n.td,{children:["The ID of the pickup, returned by ",(0,a.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player that pickup leaves the visual range."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new g_PickupHealth;\n\npublic OnGameModeInit()\n{\n    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPickupStreamOut(pickupid, playerid)\n{\n    if (pickupid == g_PickupHealth)\n    {\n        printf("g_PickupHealth is streamed out for player id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Called when a player picks up a pickup."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPickupStreamIn",children:"OnPickupStreamIn"}),": Called when a pickup enters the visual range of a player."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(67294);let a={},l=t.createContext(a);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
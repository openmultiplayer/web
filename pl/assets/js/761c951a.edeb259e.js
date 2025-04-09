"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13304"],{16539:function(e,i,r){r.r(i),r.d(i,{default:()=>o,frontMatter:()=>c,metadata:()=>n,assets:()=>p,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/IsPickupHiddenForPlayer","title":"IsPickupHiddenForPlayer","description":"Checks if a pickup is hidden for a specific player.","source":"@site/docs/scripting/functions/IsPickupHiddenForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPickupHiddenForPlayer","permalink":"/pl/docs/scripting/functions/IsPickupHiddenForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPickupHiddenForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/pl/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"IsPickupHiddenForPlayer","sidebar_label":"IsPickupHiddenForPlayer","description":"Checks if a pickup is hidden for a specific player.","tags":["player","pickup"]},"sidebar":"docsSidebar","previous":{"title":"IsObjectMoving","permalink":"/pl/docs/scripting/functions/IsObjectMoving"},"next":{"title":"IsPickupStreamedIn","permalink":"/pl/docs/scripting/functions/IsPickupStreamedIn"}}'),t=r("85893"),s=r("50065");let c={title:"IsPickupHiddenForPlayer",sidebar_label:"IsPickupHiddenForPlayer",description:"Checks if a pickup is hidden for a specific player.",tags:["player","pickup"]},l=void 0,p={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Checks if a pickup is hidden for a specific player."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"The ID of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"pickupid"}),(0,t.jsx)(i.td,{children:"The ID of the pickup."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:["This function returns ",(0,t.jsx)(i.strong,{children:"true"})," if the pickup is hidden for the player, or ",(0,t.jsx)(i.strong,{children:"false"})," if it is not."]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    HidePickupForPlayer(playerid, g_Pickup);\n\n    if (IsPickupHiddenForPlayer(playerid, g_Pickup))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return l},a:function(){return c}});var n=r(67294);let t={},s=n.createContext(t);function c(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
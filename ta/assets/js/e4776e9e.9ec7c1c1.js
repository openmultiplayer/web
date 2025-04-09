"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76717"],{57305:function(e,i,r){r.r(i),r.d(i,{default:()=>o,frontMatter:()=>s,metadata:()=>t,assets:()=>p,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/HidePickupForPlayer","title":"HidePickupForPlayer","description":"Hides a pickup for a specific player.","source":"@site/docs/scripting/functions/HidePickupForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HidePickupForPlayer","permalink":"/ta/docs/scripting/functions/HidePickupForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HidePickupForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ta/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"HidePickupForPlayer","sidebar_label":"HidePickupForPlayer","description":"Hides a pickup for a specific player.","tags":["player","pickup"]},"sidebar":"docsSidebar","previous":{"title":"HideObjectForPlayer","permalink":"/ta/docs/scripting/functions/HideObjectForPlayer"},"next":{"title":"HidePlayerDialog","permalink":"/ta/docs/scripting/functions/HidePlayerDialog"}}'),n=r("85893"),c=r("50065");let s={title:"HidePickupForPlayer",sidebar_label:"HidePickupForPlayer",description:"Hides a pickup for a specific player.",tags:["player","pickup"]},l=void 0,p={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Hides a pickup for a specific player."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"The ID of the player."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"pickupid"}),(0,n.jsx)(i.td,{children:"The ID of the pickup to hide for the player."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:["This function always returns ",(0,n.jsx)(i.strong,{children:"true"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    HidePickupForPlayer(playerid, g_Pickup);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return l},a:function(){return s}});var t=r(67294);let n={},c=t.createContext(n);function s(e){let i=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);
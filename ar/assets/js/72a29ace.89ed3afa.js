"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50988"],{51746:function(e,i,t){t.r(i),t.d(i,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>p,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPickupVirtualWorld","title":"GetPickupVirtualWorld","description":"Gets the virtual world ID of a pickup.","source":"@site/docs/scripting/functions/GetPickupVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPickupVirtualWorld","permalink":"/ar/docs/scripting/functions/GetPickupVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPickupVirtualWorld.md","tags":[{"inline":true,"label":"pickup","permalink":"/ar/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"GetPickupVirtualWorld","sidebar_label":"GetPickupVirtualWorld","description":"Gets the virtual world ID of a pickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPickupType","permalink":"/ar/docs/scripting/functions/GetPickupType"},"next":{"title":"GetPlayer3DTextLabelAttached","permalink":"/ar/docs/scripting/functions/GetPlayer3DTextLabelAttached"}}'),n=t("85893"),c=t("50065");let l={title:"GetPickupVirtualWorld",sidebar_label:"GetPickupVirtualWorld",description:"Gets the virtual world ID of a pickup.",tags:["pickup"]},s=void 0,p={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Gets the virtual world ID of a pickup."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"pickupid"}),(0,n.jsx)(i.td,{children:"The ID of the pickup to get the virtual world ID of."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"Returns the virtual world ID of the pickup."}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);\n\n    new worldid = GetPickupVirtualWorld(g_Pickup);\n    // worldid = 20\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return l}});var r=t(67294);let n={},c=r.createContext(n);function l(e){let i=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);
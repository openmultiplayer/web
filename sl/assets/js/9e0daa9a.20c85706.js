"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60003"],{66636:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>p});var n=JSON.parse('{"id":"scripting/functions/GetPickupType","title":"GetPickupType","description":"Gets the type of a pickup.","source":"@site/docs/scripting/functions/GetPickupType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPickupType","permalink":"/sl/docs/scripting/functions/GetPickupType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPickupType.md","tags":[{"inline":true,"label":"pickup","permalink":"/sl/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"GetPickupType","sidebar_label":"GetPickupType","description":"Gets the type of a pickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPickupPos","permalink":"/sl/docs/scripting/functions/GetPickupPos"},"next":{"title":"GetPickupVirtualWorld","permalink":"/sl/docs/scripting/functions/GetPickupVirtualWorld"}}'),c=t("85893"),r=t("50065");let s={title:"GetPickupType",sidebar_label:"GetPickupType",description:"Gets the type of a pickup.",tags:["pickup"]},p=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(i.p,{children:"Gets the type of a pickup."}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"Name"}),(0,c.jsx)(i.th,{children:"Description"})]})}),(0,c.jsx)(i.tbody,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:"pickupid"}),(0,c.jsx)(i.td,{children:"The ID of the pickup to get the type of."})]})})]}),"\n",(0,c.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(i.p,{children:"Returns the type of the pickup."}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"-1"})," if the pickup is not valid."]}),"\n",(0,c.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n\n    new type = GetPickupType(g_Pickup);\n    // type = 1\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return p},a:function(){return s}});var n=t(67294);let c={},r=n.createContext(c);function s(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function p(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
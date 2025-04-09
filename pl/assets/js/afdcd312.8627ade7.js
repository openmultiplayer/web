"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23592"],{42037:function(e,i,t){t.r(i),t.d(i,{default:()=>o,frontMatter:()=>r,metadata:()=>n,assets:()=>p,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/IsValidPickup","title":"IsValidPickup","description":"Checks if a pickup is valid.","source":"@site/docs/scripting/functions/IsValidPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPickup","permalink":"/pl/docs/scripting/functions/IsValidPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidPickup.md","tags":[{"inline":true,"label":"pickup","permalink":"/pl/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"IsValidPickup","sidebar_label":"IsValidPickup","description":"Checks if a pickup is valid.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"IsValidObject","permalink":"/pl/docs/scripting/functions/IsValidObject"},"next":{"title":"IsValidPlayer3DTextLabel","permalink":"/pl/docs/scripting/functions/IsValidPlayer3DTextLabel"}}'),s=t("85893"),c=t("50065");let r={title:"IsValidPickup",sidebar_label:"IsValidPickup",description:"Checks if a pickup is valid.",tags:["pickup"]},l=void 0,p={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Checks if a pickup is valid."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"pickupid"}),(0,s.jsx)(i.td,{children:"The ID of the pickup to check."})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:["This function returns ",(0,s.jsx)(i.strong,{children:"true"})," if the pickup is valid, or ",(0,s.jsx)(i.strong,{children:"false"})," if it is not."]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n\n    if (IsValidPickup(g_Pickup))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return r}});var n=t(67294);let s={},c=n.createContext(s);function r(e){let i=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["24229"],{66406:function(e,i,t){t.r(i),t.d(i,{default:()=>a,frontMatter:()=>r,metadata:()=>n,assets:()=>o,toc:()=>p,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetPickupPos","title":"GetPickupPos","description":"Gets the coordinates of a pickup.","source":"@site/docs/scripting/functions/GetPickupPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPickupPos","permalink":"/bs/docs/scripting/functions/GetPickupPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPickupPos.md","tags":[{"inline":true,"label":"pickup","permalink":"/bs/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"GetPickupPos","sidebar_label":"GetPickupPos","description":"Gets the coordinates of a pickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPickupModel","permalink":"/bs/docs/scripting/functions/GetPickupModel"},"next":{"title":"GetPickupType","permalink":"/bs/docs/scripting/functions/GetPickupType"}}'),s=t("85893"),c=t("50065");let r={title:"GetPickupPos",sidebar_label:"GetPickupPos",description:"Gets the coordinates of a pickup.",tags:["pickup"]},l=void 0,o={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Gets the coordinates of a pickup."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"pickupid"}),(0,s.jsx)(i.td,{children:"The ID of the pickup to get the position of."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["&Float",":x"]}),(0,s.jsx)(i.td,{children:"A float variable in which to store the x coordinate, passed by reference."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["&Float",":y"]}),(0,s.jsx)(i.td,{children:"A float variable in which to store the y coordinate, passed by reference."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["&Float",":z"]}),(0,s.jsx)(i.td,{children:"A float variable in which to store the z coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"false"})," - The function failed to execute. The pickup specified doesn't exist."]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n\n    new \n        Float:x,\n        Float:y,\n        Float:z;\n\n    GetPickupPos(g_Pickup, x, y, z);\n    // x = 1686.6160\n    // y = 1455.4277\n    // z = 10.7705\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function a(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return r}});var n=t(67294);let s={},c=n.createContext(s);function r(e){let i=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["43259"],{17290:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>n,metadata:()=>r,assets:()=>l,toc:()=>p,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/CreatePickup","title":"CreatePickup","description":"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.","source":"@site/docs/scripting/functions/CreatePickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePickup","permalink":"/fa/docs/scripting/functions/CreatePickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreatePickup.md","tags":[{"inline":true,"label":"pickup","permalink":"/fa/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"CreatePickup","sidebar_label":"CreatePickup","description":"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"CreateObject","permalink":"/fa/docs/scripting/functions/CreateObject"},"next":{"title":"CreatePlayer3DTextLabel","permalink":"/fa/docs/scripting/functions/CreatePlayer3DTextLabel"}}'),c=t("85893"),s=t("50065");let n={title:"CreatePickup",sidebar_label:"CreatePickup",description:"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.",tags:["pickup"]},a=void 0,l={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(i.p,{children:"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup."}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"Name"}),(0,c.jsx)(i.th,{children:"Description"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../resources/pickupids",children:"model"})}),(0,c.jsx)(i.td,{children:"The model of the pickup."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../resources/pickuptypes",children:"type"})}),(0,c.jsx)(i.td,{children:"The pickup type. Determines how the pickup responds when picked up."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":x"]}),(0,c.jsx)(i.td,{children:"The X coordinate to create the pickup at."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":y"]}),(0,c.jsx)(i.td,{children:"The Y coordinate to create the pickup at."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":z"]}),(0,c.jsx)(i.td,{children:"The Z coordinate to create the pickup at."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:"virtualWorld"}),(0,c.jsx)(i.td,{children:"The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds."})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(i.p,{children:"The ID of the created pickup, -1 on failure (pickup max limit)."}),"\n",(0,c.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"new pickup_Armour; // Create a variable to store the pickup ID in\n\npublic OnGameModeInit()\n{\n    pickup_Armour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n    // Create an armour pickup and store the ID in 'pickup'\n    return 1;\n}\n\n// Later..\nDestroyPickup(pickup_Armour); // Example of using the pickup ID\npickup_Armour = 0; // pickup variable needs to be reset to avoid future conflicts\n"})}),"\n",(0,c.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(i.admonition,{type:"tip",children:(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes)."}),"\n",(0,c.jsx)(i.li,{children:"Pickups are shown to, and can be picked up by all players."}),"\n",(0,c.jsx)(i.li,{children:"It is possible that if DestroyPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables."}),"\n",(0,c.jsx)(i.li,{children:"Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo."}),"\n",(0,c.jsx)(i.li,{children:"For fully scripted pickups, type 1 should be used."}),"\n"]})}),"\n",(0,c.jsxs)(i.admonition,{type:"warning",children:[(0,c.jsx)(i.p,{children:"Known Bug(s):"}),(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPickup either."}),"\n"]})]}),"\n",(0,c.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this function."}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Called when a player picks up a pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../callbacks/OnPickupStreamIn",children:"OnPickupStreamIn"}),": Called when a pickup enters the visual range of a player."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../callbacks/OnPickupStreamOut",children:"OnPickupStreamOut"}),": Called when a pickup leaves the visual range of a player."]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.a,{href:"../resources/pickupids",children:"Pickup IDs"})}),"\n",(0,c.jsx)(i.li,{children:(0,c.jsx)(i.a,{href:"../resources/pickuptypes",children:"Pickup Types"})}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return n}});var r=t(67294);let c={},s=r.createContext(c);function n(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);
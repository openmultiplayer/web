"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91241"],{68063:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>n,assets:()=>p,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/CreatePickup","title":"CreatePickup","description":"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/CreatePickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePickup","permalink":"/th/docs/scripting/functions/CreatePickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreatePickup.md","tags":[],"version":"current","frontMatter":{"title":"CreatePickup","sidebar_label":"CreatePickup","description":"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"CreateObject","permalink":"/th/docs/scripting/functions/CreateObject"},"next":{"title":"CreatePlayer3DTextLabel","permalink":"/th/docs/scripting/functions/CreatePlayer3DTextLabel"}}'),c=i("85893"),r=i("50065");let s={title:"CreatePickup",sidebar_label:"CreatePickup",description:"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.",tags:[]},a=void 0,p={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,c.jsx)(t.p,{children:"This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"model"}),(0,c.jsx)(t.td,{children:"The model of the pickup."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"type"}),(0,c.jsx)(t.td,{children:"The pickup spawn type."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":X"]}),(0,c.jsx)(t.td,{children:"The X coordinate to create the pickup at."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":Y"]}),(0,c.jsx)(t.td,{children:"The Y coordinate to create the pickup at."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":Z"]}),(0,c.jsx)(t.td,{children:"The Z coordinate to create the pickup at."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"virtualworld"}),(0,c.jsx)(t.td,{children:"The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,c.jsx)(t.p,{children:"The ID of the created pickup, -1 on failure (pickup max limit)."}),"\n",(0,c.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new pickup; // Create a variable to store the pickup ID in\n\npublic OnGameModeInit()\n{\n    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n    // Create an armour pickup and store the ID in 'pickup'\n    return 1;\n}\n\n// Later..\nDestroyPickup(pickup); // Example of using the pickup ID\npickup = 0; // pickup variable needs to be reset to avoid future conflicts\n"})}),"\n",(0,c.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes). Pickups are shown to, and can be picked up by all players. It is possible that if DestroyPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables. Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo. For fully scripted pickups, type 1 should be used."})}),"\n",(0,c.jsx)(t.admonition,{type:"warning",children:(0,c.jsx)(t.p,{children:"Known Bug(s): Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPickup either."})}),"\n",(0,c.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"/th/docs/scripting/functions/AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"/th/docs/scripting/callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Called when a player picks up a pickup."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return s}});var n=i(67294);let c={},r=n.createContext(c);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
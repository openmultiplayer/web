"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2205"],{85222:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>s,toc:()=>r,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/AddVehicleComponent","title":"AddVehicleComponent","description":"Adds a \'component\' (often referred to as a \'mod\' (modification)) to a vehicle.","source":"@site/docs/scripting/functions/AddVehicleComponent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddVehicleComponent","permalink":"/ru/docs/scripting/functions/AddVehicleComponent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddVehicleComponent.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddVehicleComponent","sidebar_label":"AddVehicleComponent","description":"Adds a \'component\' (often referred to as a \'mod\' (modification)) to a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticVehicleEx","permalink":"/ru/docs/scripting/functions/AddStaticVehicleEx"},"next":{"title":"AllowAdminTeleport","permalink":"/ru/docs/scripting/functions/AllowAdminTeleport"}}'),o=t("85893"),l=t("50065");let d={title:"AddVehicleComponent",sidebar_label:"AddVehicleComponent",description:"Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle.",tags:["vehicle"]},c=void 0,s={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle. Valid components can be found here."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vehicleid"}),(0,o.jsx)(n.td,{children:"The ID of the vehicle to add the component to. Not to be confused with modelid."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"component"})}),(0,o.jsx)(n.td,{children:"The ID of the component to add to the vehicle."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"true"})," - The component was successfully added to the vehicle."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"false"})," - The component was not added because the vehicle does not exist."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'new gTaxi;\n\npublic OnGameModeInit()\n{\n    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi\n    return 1;\n}\n\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)\n    {\n        if (GetPlayerVehicleID(playerid) == gTaxi)\n        {\n            AddVehicleComponent(gTaxi, 1010); // Nitro\n            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Using an invalid component ID crashes the player's game. (Fixed in open.mp)"})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"RemoveVehicleComponent",children:"RemoveVehicleComponent"}),": Remove a component from a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Check what components a vehicle has."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Check the type of component via the ID."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"VehicleCanHaveComponent",children:"VehicleCanHaveComponent"}),": Is the component legal on the vehicle?"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Called when a vehicle is modded."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"Car Component IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var i=t(67294);let o={},l=i.createContext(o);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
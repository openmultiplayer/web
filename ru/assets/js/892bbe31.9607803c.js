"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5760"],{61899:function(e,i,l){l.r(i),l.d(i,{default:()=>o,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/CreateVehicle","title":"CreateVehicle","description":"Creates a vehicle in the world.","source":"@site/docs/scripting/functions/CreateVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateVehicle","permalink":"/ru/docs/scripting/functions/CreateVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"CreateVehicle","sidebar_label":"CreateVehicle","description":"Creates a vehicle in the world.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerTextDraw","permalink":"/ru/docs/scripting/functions/CreatePlayerTextDraw"},"next":{"title":"DB_ExecuteQuery","permalink":"/ru/docs/scripting/functions/DB_ExecuteQuery"}}'),r=l("85893"),t=l("50065");let s={title:"CreateVehicle",sidebar_label:"CreateVehicle",description:"Creates a vehicle in the world.",tags:["vehicle"]},c=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Creates a vehicle in the world. Can be used in place of AddStaticVehicleEx at any time in the script."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../resources/vehicleid",children:"modelid"})}),(0,r.jsx)(i.td,{children:"The model for the vehicle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawnX"]}),(0,r.jsx)(i.td,{children:"The X coordinate for the vehicle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawnY"]}),(0,r.jsx)(i.td,{children:"The Y coordinate for the vehicle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawnZ"]}),(0,r.jsx)(i.td,{children:"The Z coordinate for the vehicle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":angle"]}),(0,r.jsx)(i.td,{children:"The facing angle for the vehicle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"colour1"})}),(0,r.jsx)(i.td,{children:"The primary color ID."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"colour2"})}),(0,r.jsx)(i.td,{children:"The secondary color ID."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"respawnDelay"}),(0,r.jsx)(i.td,{children:"The delay until the car is respawned without a driver in seconds. Using -1 will prevent the vehicle from respawning."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["bool",":addSiren"]}),(0,r.jsx)(i.td,{children:"Has a default value 'false'. Enables the vehicle to have a siren, providing the vehicle has a horn."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"The vehicle ID of the vehicle created (1 to MAX_VEHICLES)."}),"\n",(0,r.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed)."}),"\n",(0,r.jsx)(i.p,{children:"0 if vehicle was not created (IDs 538 or 537 passed, which is trains)."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Add a Hydra (520) to the game with a respawn time of 60 seconds\n    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsxs)(i.p,{children:["Trains can only be added with ",(0,r.jsx)(i.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"})," and ",(0,r.jsx)(i.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),"."]})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Destroy a vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"}),": Add a static vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Add a static vehicle with custom respawn time."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": Check whether a vehicle's siren is on or off."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehicleSpawnInfo",children:"SetVehicleSpawnInfo"}),": Adjusts vehicle model, spawn location, colours, respawn delay and interior."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleSpawnInfo",children:"GetVehicleSpawnInfo"}),": Gets the vehicle spawn location and colours."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ChangeVehicleColours",children:"ChangeVehicleColours"}),": Change a vehicle's primary and secondary colors."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": Gets the vehicle colours."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": Set the respawn delay of a vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleRespawnDelay",children:"GetVehicleRespawnDelay"}),": Get the respawn delay of a vehicle."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"}),": Called when a vehicle respawns."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"}),": Called when a vehicle's siren is toggled on/off."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../resources/vehicleid",children:"Vehicle Models"}),": Comprehensive list of all vehicle models available in game."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"Vehicle Colour IDs"}),": List of all vehicle colour IDs."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,l){l.d(i,{Z:function(){return c},a:function(){return s}});var n=l(67294);let r={},t=n.createContext(r);function s(e){let i=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);
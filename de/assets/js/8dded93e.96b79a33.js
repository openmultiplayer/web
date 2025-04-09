"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49311"],{38320:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/SetVehicleParamsEx","title":"SetVehicleParamsEx","description":"Sets a vehicle\'s parameters for all players.","source":"@site/docs/scripting/functions/SetVehicleParamsEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsEx","permalink":"/de/docs/scripting/functions/SetVehicleParamsEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleParamsEx.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleParamsEx","sidebar_label":"SetVehicleParamsEx","description":"Sets a vehicle\'s parameters for all players.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsCarWindows","permalink":"/de/docs/scripting/functions/SetVehicleParamsCarWindows"},"next":{"title":"SetVehicleParamsForPlayer","permalink":"/de/docs/scripting/functions/SetVehicleParamsForPlayer"}}'),l=n("85893"),s=n("50065");let r={title:"SetVehicleParamsEx",sidebar_label:"SetVehicleParamsEx",description:"Sets a vehicle's parameters for all players.",tags:["vehicle"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Sets a vehicle's parameters for all players."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"The ID of the vehicle to set the parameters of."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":engine"]}),(0,l.jsx)(i.td,{children:"Engine status. 0 - Off, 1 - On."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":lights"]}),(0,l.jsx)(i.td,{children:"Light status. 0 - Off, 1 - On."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":alarm"]}),(0,l.jsx)(i.td,{children:"Vehicle alarm status. If on, the alarm starts. 0 - Off, 1 - On."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":doors"]}),(0,l.jsx)(i.td,{children:"Door lock status. 0 - Unlocked, 1 - Locked."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":bonnet"]}),(0,l.jsx)(i.td,{children:"Bonnet (hood) status. 0 - Closed, 1 - Open."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":boot"]}),(0,l.jsx)(i.td,{children:"Boot/trunk status. 0 - Closed, 1 - Open."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":objective"]}),(0,l.jsx)(i.td,{children:"Toggle the objective arrow above the vehicle. 0 - Off, 1 - On."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"false"})," - The function failed to execute. This means the vehicle does not exist."]}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'// On top of our script, declaring a global variable\nnew\n    gVehicleAlarmTimer[MAX_VEHICLES] = {0, ...};\n\n// If setting a single parameter, you should obtain the current parameters so they aren\'t ALL changed\nnew\n    bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;\n\n// Somewhere where you create the vehicle..\nGetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\nSetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // ONLY the engine param was changed to VEHICLE_PARAMS_ON (1)\n\n// The function\nSetVehicleParamsEx_Fixed(vehicleid, &bool:engine, &bool:lights, &bool:alarm, &bool:doors, &bool:bonnet, &bool:boot, &bool:objective)\n{\n    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\n    if (alarm)\n    {\n        // Kill the timer, reset the timer identifier and then restart it if it was already running\n        KillTimer(gVehicleAlarmTimer[vehicleid]);\n        gVehicleAlarmTimer[vehicleid] = 0;\n        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);\n    }\n}\n\nforward DisableVehicleAlarm(vehicleid);\npublic DisableVehicleAlarm(vehicleid)\n{\n    new\n        bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;\n\n    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\n    if (alarm == VEHICLE_PARAMS_ON)\n    {\n        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);\n    }\n\n    // Reset the timer identifier\n    gVehicleAlarmTimer[vehicleid] = 0;\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"VEHICLE_PARAMS_UNSET"})," (-1)"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"VEHICLE_PARAMS_OFF"})," (0)"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"VEHICLE_PARAMS_ON"})," (1)"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"The alarm will not reset when finished, you'll need to reset it by yourself with this function."}),"\n",(0,l.jsxs)(i.li,{children:["Lights also operate during the day (Only when ",(0,l.jsx)(i.a,{href:"ManualVehicleEngineAndLights",children:"ManualVehicleEngineAndLights"})," is enabled)."]}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetVehicleParamsEx",children:"GetVehicleParamsEx"}),": Get a vehicle's parameters."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetVehicleParamsForPlayer",children:"SetVehicleParamsForPlayer"}),": Set the parameters of a vehicle for a player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),": Update the vehicle damage."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return r}});var t=n(67294);let l={},s=t.createContext(l);function r(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62098"],{4561:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetVehicleParamsEx","title":"SetVehicleParamsEx","description":"Sets a vehicle\'s parameters for all players.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleParamsEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsEx","permalink":"/th/docs/scripting/functions/SetVehicleParamsEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleParamsEx.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleParamsEx","sidebar_label":"SetVehicleParamsEx","description":"Sets a vehicle\'s parameters for all players.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsCarWindows","permalink":"/th/docs/scripting/functions/SetVehicleParamsCarWindows"},"next":{"title":"SetVehicleParamsForPlayer","permalink":"/th/docs/scripting/functions/SetVehicleParamsForPlayer"}}'),l=i("85893"),r=i("50065");let s={title:"SetVehicleParamsEx",sidebar_label:"SetVehicleParamsEx",description:"Sets a vehicle's parameters for all players.",tags:["vehicle"]},a=void 0,c={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(t.p,{children:"Sets a vehicle's parameters for all players."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to set the parameters of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"engine"}),(0,l.jsx)(t.td,{children:"Engine status. 0 - Off, 1 - On."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lights"}),(0,l.jsx)(t.td,{children:"Light status. 0 - Off, 1 - On."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"alarm"}),(0,l.jsx)(t.td,{children:"Vehicle alarm status. If on, the alarm starts. 0 - Off, 1 - On."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"doors"}),(0,l.jsx)(t.td,{children:"Door lock status. 0 - Unlocked, 1 - Locked."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"bonnet"}),(0,l.jsx)(t.td,{children:"Bonnet (hood) status. 0 - Closed, 1 - Open."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"boot"}),(0,l.jsx)(t.td,{children:"Boot/trunk status. 0 - Closed, 1 - Open."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objective"}),(0,l.jsx)(t.td,{children:"Toggle the objective arrow above the vehicle. 0 - Off, 1 - On."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,l.jsx)(t.p,{children:"0: The function failed to execute. This means the vehicle does not exist."}),"\n",(0,l.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'// If setting a single parameter, you should obtain the current parameters so they aren\'t ALL changed\nnew engine, lights, alarm, doors, bonnet, boot, objective;\nGetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\nSetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // ONLY the engine param was changed to VEHICLE_PARAMS_ON (1)\nnew Timer_VehAlarm[MAX_VEHICLES];\n\nSetVehicleParamsEx_Fixed(vehicleid, &engine, &lights, &alarm, &doors, &bonnet, &boot, &objective)\n{\n    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\n    if (alarm)\n    {\n        KillTimer(Timer_VehAlarm[vehicleid]);\n        Timer_VehAlarm[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);\n    }\n}\n\nforward DisableVehicleAlarm(vehicleid);\npublic DisableVehicleAlarm(vehicleid)\n{\n    new engine, lights, alarm, doors, bonnet, boot, objective;\n    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);\n    if (alarm == VEHICLE_PARAMS_ON)\n    {\n        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);\n    }\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"The alarm will not reset when finished, you'll need to reset it by yourself with this function. Lights also operate during the day (Only when ManualVehicleEngineAndLights is enabled)."})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"GetVehicleParamsEx: Get a vehicle's parameters."}),"\n",(0,l.jsx)(t.li,{children:"SetVehicleParamsForPlayer: Set the parameters of a vehicle for a player."}),"\n",(0,l.jsx)(t.li,{children:"UpdateVehicleDamageStatus: Update the vehicle damage."}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return s}});var n=i(67294);let l={},r=n.createContext(l);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
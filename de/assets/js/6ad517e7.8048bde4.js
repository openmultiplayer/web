"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76404"],{12245:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>h,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/GetVehicleHealth","title":"GetVehicleHealth","description":"Get the health of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleHealth","permalink":"/de/docs/scripting/functions/GetVehicleHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleHealth.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleHealth","sidebar_label":"GetVehicleHealth","description":"Get the health of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleDriver","permalink":"/de/docs/scripting/functions/GetVehicleDriver"},"next":{"title":"GetVehicleHydraReactorAngle","permalink":"/de/docs/scripting/functions/GetVehicleHydraReactorAngle"}}'),n=i("85893"),r=i("50065");let h={title:"GetVehicleHealth",sidebar_label:"GetVehicleHealth",description:"Get the health of a vehicle.",tags:["vehicle"]},s=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get the health of a vehicle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle to get the health of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":health"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the vehicle's health, passed by reference"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - success"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - failure (invalid vehicle ID)."]}),"\n",(0,n.jsx)(t.p,{children:"The vehicle's health is stored in the referenced variable, not in the return value."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/repair", true) == 0)\n    {\n        new\n            Float:vehicleHealth,\n            vehicleid = GetPlayerVehicleID(playerid);\n\n        GetVehicleHealth(vehicleid, vehicleHealth);\n\n        if (vehicleHealth > 500.0)\n        {\n            return SendClientMessage(playerid, COLOR_RED, "Vehicle doesn\'t need repairing!");\n        }\n\n        SetVehicleHealth(vehicleid, 1000.0);\n        SendClientMessage(playerid, COLOR_GREEN, "Vehicle repaired!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Full vehicle health is 1000, however higher values are possible and increase the health of the vehicle. For more information on health values, see ",(0,n.jsx)(t.a,{href:"../resources/vehiclehealth",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"A vehicle catches on fire when its health is below 250. It will explode a few seconds later."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetVehicleHealth",children:"SetVehicleHealth"}),": Set the health of a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Find out how much health a player has."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Find out how much armour a player has."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/vehiclehealth",children:"Vehicle Health Values"})}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return h}});var l=i(67294);let n={},r=l.createContext(n);function h(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);
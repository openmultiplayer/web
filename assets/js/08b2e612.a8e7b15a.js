"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99831"],{95047:function(e,t,l){l.r(t),l.d(t,{default:()=>o,frontMatter:()=>r,metadata:()=>i,assets:()=>h,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SetVehicleHealth","title":"SetVehicleHealth","description":"Set a vehicle\'s health.","source":"@site/docs/scripting/functions/SetVehicleHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleHealth","permalink":"/docs/scripting/functions/SetVehicleHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleHealth.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleHealth","sidebar_label":"SetVehicleHealth","description":"Set a vehicle\'s health.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleDead","permalink":"/docs/scripting/functions/SetVehicleDead"},"next":{"title":"SetVehicleNumberPlate","permalink":"/docs/scripting/functions/SetVehicleNumberPlate"}}'),n=l("85893"),s=l("50065");let r={title:"SetVehicleHealth",sidebar_label:"SetVehicleHealth",description:"Set a vehicle's health.",tags:["vehicle"]},c=void 0,h={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set a vehicle's health. When a vehicle's health decreases the engine will produce smoke, and finally fire when it decreases to less than 250 (25%)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle to set the health of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":health"]}),(0,n.jsx)(t.td,{children:"The health, given as a float value."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the vehicle does not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/fixengine", cmdtext, true) == 0)\n    {\n        new\n            vehicleid = GetPlayerVehicleID(playerid);\n\n        SetVehicleHealth(vehicleid, 1000.0);\n        SendClientMessage(playerid, -1, "The vehicles engine has been fully repaired.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Full vehicle health is 1000. Higher values are possible. For more information on health values, see ",(0,n.jsx)(t.a,{href:"../resources/vehiclehealth",children:"this"})," page."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Check the health of a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"RepairVehicle",children:"RepairVehicle"}),": Fully repair a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnVehicleDeath",children:"OnVehicleDeath"}),": Called when a vehicle is destroyed."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/vehiclehealth",children:"Vehicle Health Values"})}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return c},a:function(){return r}});var i=l(67294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
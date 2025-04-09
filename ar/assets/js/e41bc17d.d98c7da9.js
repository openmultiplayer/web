"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23194"],{21115:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/functions/GetVehicleVelocity","title":"GetVehicleVelocity","description":"Get the velocity of a vehicle on the X, Y and Z axes.","source":"@site/docs/scripting/functions/GetVehicleVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleVelocity","permalink":"/ar/docs/scripting/functions/GetVehicleVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleVelocity.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleVelocity","sidebar_label":"GetVehicleVelocity","description":"Get the velocity of a vehicle on the X, Y and Z axes.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleTrainSpeed","permalink":"/ar/docs/scripting/functions/GetVehicleTrainSpeed"},"next":{"title":"GetVehicleVirtualWorld","permalink":"/ar/docs/scripting/functions/GetVehicleVirtualWorld"}}'),l=i("85893"),c=i("50065");let s={title:"GetVehicleVelocity",sidebar_label:"GetVehicleVelocity",description:"Get the velocity of a vehicle on the X, Y and Z axes.",tags:["vehicle"]},r=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the velocity of a vehicle on the X, Y and Z axes."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to get the velocity of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":x"]}),(0,l.jsx)(t.td,{children:"A float variable in to which to store the vehicle's X velocity, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":y"]}),(0,l.jsx)(t.td,{children:"A float variable in to which to store the vehicle's Y velocity, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":z"]}),(0,l.jsx)(t.td,{children:"A float variable in to which to store the vehicle's Z velocity, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the vehicle specified does not exist."]}),"\n",(0,l.jsx)(t.p,{children:"The vehicle's velocity is stored in the specified variables."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/GetMyCarVelocity", cmdtext))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return 1;\n        }\n\n        new\n            Float: vehVelocity[3],\n            string[128];\n\n        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);\n        \n        format(string, sizeof(string), "You are going at a velocity of X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"This function can be used to retrieve a vehicle's speed (km/h, m/s or mph)."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleVelocity",children:"SetVehicleVelocity"}),": Set a vehicle's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerVelocity",children:"SetPlayerVelocity"}),": Set a player's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVelocity",children:"GetPlayerVelocity"}),": Get a player's velocity."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var n=i(67294);let l={},c=n.createContext(l);function s(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22116"],{75214:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/GetVehicleZAngle","title":"GetVehicleZAngle","description":"Get the rotation of a vehicle on the Z axis (yaw).","source":"@site/docs/scripting/functions/GetVehicleZAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleZAngle","permalink":"/fr/docs/scripting/functions/GetVehicleZAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleZAngle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleZAngle","sidebar_label":"GetVehicleZAngle","description":"Get the rotation of a vehicle on the Z axis (yaw).","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleVirtualWorld","permalink":"/fr/docs/scripting/functions/GetVehicleVirtualWorld"},"next":{"title":"GetVehicles","permalink":"/fr/docs/scripting/functions/GetVehicles"}}'),l=n("85893"),r=n("50065");let s={title:"GetVehicleZAngle",sidebar_label:"GetVehicleZAngle",description:"Get the rotation of a vehicle on the Z axis (yaw).",tags:["vehicle"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the rotation of a vehicle on the Z axis (yaw)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to get the Z angle of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":angle"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the Z rotation, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the vehicle does not exist."]}),"\n",(0,l.jsx)(t.p,{children:"The vehicle's rotation is stored in the specified variable."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/vehrot", true) == 0)\n     {\n          new\n               vehicleid,\n               Float:rotZ,\n               string[64];\n\n          vehicleid = GetPlayerVehicleID(playerid);\n          \n          GetVehicleZAngle(vehicleid, rotZ);\n          \n          format(string, sizeof(string), "The current vehicle rotation is: %.0f", rotZ);\n          SendClientMessage(playerid, 0xFFFFFFFF, string);\n          return 1;\n     }\n     return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleRotationQuat",children:"GetVehicleRotationQuat"}),": Get the quaternion rotation of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleZAngle",children:"SetVehicleZAngle"}),": Set the direction of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Get the position of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleMatrix",children:"GetVehicleMatrix"}),": Gets the actual rotation matrix of the vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),": Check where a player is facing."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
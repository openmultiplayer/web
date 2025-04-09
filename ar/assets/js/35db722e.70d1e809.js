"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10430"],{36717:function(e,t,i){i.r(t),i.d(t,{default:()=>a,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetVehicleModel","title":"GetVehicleModel","description":"Gets the model ID of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleModel","permalink":"/ar/docs/scripting/functions/GetVehicleModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleModel.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleModel","sidebar_label":"GetVehicleModel","description":"Gets the model ID of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleMatrix","permalink":"/ar/docs/scripting/functions/GetVehicleMatrix"},"next":{"title":"GetVehicleModelCount","permalink":"/ar/docs/scripting/functions/GetVehicleModelCount"}}'),l=i("85893"),s=i("50065");let r={title:"GetVehicleModel",sidebar_label:"GetVehicleModel",description:"Gets the model ID of a vehicle.",tags:["vehicle"]},c=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Gets the model ID of a vehicle."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to get the model of."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/vehicleid",children:"vehicle's model ID"}),", or ",(0,l.jsx)(t.strong,{children:"0"})," if the vehicle doesn't exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    if (GetVehicleModel(vehicleid) == 411) // 411 is the Infernus model\n    {\n        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Get the position of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/vehicleid",children:"Vehicle IDs"})}),"\n"]})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return r}});var n=i(67294);let l={},s=n.createContext(l);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
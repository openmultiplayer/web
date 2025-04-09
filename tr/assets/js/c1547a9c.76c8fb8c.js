"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63737"],{95315:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/GetVehicleSeats","title":"GetVehicleSeats","description":"Gets the number of seats in the vehicle.","source":"@site/docs/scripting/functions/GetVehicleSeats.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleSeats","permalink":"/tr/docs/scripting/functions/GetVehicleSeats","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleSeats.md","tags":[{"inline":true,"label":"vehicle","permalink":"/tr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleSeats","sidebar_label":"GetVehicleSeats","description":"Gets the number of seats in the vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleRotationQuat","permalink":"/tr/docs/scripting/functions/GetVehicleRotationQuat"},"next":{"title":"GetVehicleSirenState","permalink":"/tr/docs/scripting/functions/GetVehicleSirenState"}}'),s=n("85893"),r=n("50065");let l={title:"GetVehicleSeats",sidebar_label:"GetVehicleSeats",description:"Gets the number of seats in the vehicle.",tags:["vehicle"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the number of seats in the vehicle."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modelid"}),(0,s.jsx)(t.td,{children:"ID of the vehicle model."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsx)(t.p,{children:"Returns the number of seats."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"255"})," if the model is invalid."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new vehicleid = GetPlayerVehicleID(playerid);\nnew modelid = GetVehicleModel(vehicleid);\nnew seats = GetVehicleSeats(modelid);\n\nnew string[64];\nformat(string, sizeof(string), "Number of seats in this vehicle: %d", seats);\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Puts a player in a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
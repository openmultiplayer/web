"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36456"],{17526:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>c,metadata:()=>n,assets:()=>a,toc:()=>h,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerVehicleID","title":"GetPlayerVehicleID","description":"This function gets the ID of the vehicle the player is currently in.","source":"@site/docs/scripting/functions/GetPlayerVehicleID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVehicleID","permalink":"/docs/scripting/functions/GetPlayerVehicleID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVehicleID.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerVehicleID","sidebar_label":"GetPlayerVehicleID","description":"This function gets the ID of the vehicle the player is currently in.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTrainSpeed","permalink":"/docs/scripting/functions/GetPlayerTrainSpeed"},"next":{"title":"GetPlayerVehicleSeat","permalink":"/docs/scripting/functions/GetPlayerVehicleSeat"}}'),l=i("85893"),r=i("50065");let c={title:"GetPlayerVehicleID",sidebar_label:"GetPlayerVehicleID",description:"This function gets the ID of the vehicle the player is currently in.",tags:["player","vehicle"]},s=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This function gets the ID of the vehicle the player is currently in."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Note:"})," NOT the model id of the vehicle. See ",(0,l.jsx)(t.a,{href:"GetVehicleModel",children:"GetVehicleModel"})," for that."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player in the vehicle that you want to get the ID of"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["ID of the vehicle or ",(0,l.jsx)(t.strong,{children:"0"})," if not in a vehicle"]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"// Add 10x Nitro if the player is in a car. Might be called on a command.\nnew vehicleId = GetPlayerVehicleID(playerid);\nif (vehicleId != 0)\n{\n    AddVehicleComponent(vehicleId, 1010);\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsPlayerInVehicle",children:"IsPlayerInVehicle"}),": Check if a player is in a certain vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsPlayerInAnyVehicle",children:"IsPlayerInAnyVehicle"}),": Check if a player is in any vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": Get the model id of a vehicle."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return c}});var n=i(67294);let l={},r=n.createContext(l);function c(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
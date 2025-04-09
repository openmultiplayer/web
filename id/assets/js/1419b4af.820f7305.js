"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55317"],{40180:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/RepairVehicle","title":"RepairVehicle","description":"Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.","source":"@site/docs/scripting/functions/RepairVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RepairVehicle","permalink":"/id/docs/scripting/functions/RepairVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RepairVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/id/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RepairVehicle","sidebar_label":"RepairVehicle","description":"Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemoveVehicleComponent","permalink":"/id/docs/scripting/functions/RemoveVehicleComponent"},"next":{"title":"ResetPlayerMoney","permalink":"/id/docs/scripting/functions/ResetPlayerMoney"}}'),r=n("85893"),l=n("50065");let s={title:"RepairVehicle",sidebar_label:"RepairVehicle",description:"Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.",tags:["vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.)."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"The ID of the vehicle to repair."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"false"})," - The function failed to execute. This means the vehicle specified does not exist."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/repair", cmdtext))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return SendClientMessage(playerid, 0xFFFFFFFF, "You are not in a vehicle!");\n        }\n\n        RepairVehicle(GetPlayerVehicleID(playerid));\n\n        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been repaired!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehicleHealth",children:"SetVehicleHealth"}),": Set the health of a vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Check the health of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return s}});var t=n(67294);let r={},l=t.createContext(r);function s(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
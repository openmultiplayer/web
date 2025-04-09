"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77848"],{62391:function(e,i,t){t.r(i),t.d(i,{default:()=>a,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/GetVehicleDriver","title":"GetVehicleDriver","description":"Get the playerid of the person driving the vehicle.","source":"@site/docs/scripting/functions/GetVehicleDriver.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleDriver","permalink":"/sr/docs/scripting/functions/GetVehicleDriver","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleDriver.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleDriver","sidebar_label":"GetVehicleDriver","description":"Get the playerid of the person driving the vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleDistanceFromPoint","permalink":"/sr/docs/scripting/functions/GetVehicleDistanceFromPoint"},"next":{"title":"GetVehicleHealth","permalink":"/sr/docs/scripting/functions/GetVehicleHealth"}}'),n=t("85893"),l=t("50065");let s={title:"GetVehicleDriver",sidebar_label:"GetVehicleDriver",description:"Get the playerid of the person driving the vehicle.",tags:["vehicle"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Get the playerid of the person driving the vehicle."}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle to get the driver of."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"Returns the driver ID (player ID)."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"INVALID_PLAYER_ID"})," - The vehicle has no driver."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new driverid = GetVehicleDriver(vehicleid);\n    if (driverid != INVALID_PLAYER_ID)\n    {\n        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetVehicleLastDriver",children:"GetVehicleLastDriver"}),": Get the last driver of a vehicle."]}),"\n"]})]})}function a(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return c},a:function(){return s}});var r=t(67294);let n={},l=r.createContext(n);function s(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);
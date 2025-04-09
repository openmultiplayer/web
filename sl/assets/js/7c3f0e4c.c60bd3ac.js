"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["9991"],{84204:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>r,metadata:()=>c,assets:()=>d,toc:()=>o,contentTitle:()=>s});var c=JSON.parse('{"id":"scripting/functions/GetVehicleOccupiedTick","title":"GetVehicleOccupiedTick","description":"Get the occupied tick of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleOccupiedTick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleOccupiedTick","permalink":"/sl/docs/scripting/functions/GetVehicleOccupiedTick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleOccupiedTick.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleOccupiedTick","sidebar_label":"GetVehicleOccupiedTick","description":"Get the occupied tick of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleNumberPlate","permalink":"/sl/docs/scripting/functions/GetVehicleNumberPlate"},"next":{"title":"GetVehiclePaintjob","permalink":"/sl/docs/scripting/functions/GetVehiclePaintjob"}}'),n=t("85893"),l=t("50065");let r={title:"GetVehicleOccupiedTick",sidebar_label:"GetVehicleOccupiedTick",description:"Get the occupied tick of a vehicle.",tags:["vehicle"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Get the occupied tick of a vehicle."}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsx)(i.p,{children:"Returns occupied tick in milliseconds."}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    new occupiedTick = GetVehicleOccupiedTick(vehicleid);\n    printf("Vehicle ID %d occupied tick: %d ms", vehicleid, occupiedTick);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetVehicleOccupiedTick",children:"SetVehicleOccupiedTick"}),": Set the occupied tick of a vehicle."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return r}});var c=t(67294);let n={},l=c.createContext(n);function r(e){let i=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(l.Provider,{value:i},e.children)}}}]);
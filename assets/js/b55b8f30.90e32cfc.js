"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83737"],{4271:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetVehicleNumberPlate","title":"GetVehicleNumberPlate","description":"Get the number plate of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleNumberPlate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleNumberPlate","permalink":"/docs/scripting/functions/GetVehicleNumberPlate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleNumberPlate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleNumberPlate","sidebar_label":"GetVehicleNumberPlate","description":"Get the number plate of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModelsUsed","permalink":"/docs/scripting/functions/GetVehicleModelsUsed"},"next":{"title":"GetVehicleOccupiedTick","permalink":"/docs/scripting/functions/GetVehicleOccupiedTick"}}'),l=n("85893"),r=n("50065");let c={title:"GetVehicleNumberPlate",sidebar_label:"GetVehicleNumberPlate",description:"Get the number plate of a vehicle.",tags:["vehicle"]},s=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the number plate of a vehicle."}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"plate[]"}),(0,l.jsx)(t.td,{children:"An array into which to store the name, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"len = sizeof (plate)"}),(0,l.jsx)(t.td,{children:"The length of the plate that should be stored."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n    SetVehicleNumberPlate(vehicleid, "ABCD 123");\n\n    new numberPlate[16];\n    GetVehicleNumberPlate(vehicleid, numberPlate);\n    // numberPlate = "ABCD 123"\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleNumberPlate",children:"SetVehicleNumberPlate"}),": Set a vehicle numberplate."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var i=n(67294);let l={},r=i.createContext(l);function c(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
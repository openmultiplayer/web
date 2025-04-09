"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29929"],{43666:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>s,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/GetVehicleInterior","title":"GetVehicleInterior","description":"Get the interior id of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleInterior","permalink":"/it/docs/scripting/functions/GetVehicleInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleInterior.md","tags":[{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleInterior","sidebar_label":"GetVehicleInterior","description":"Get the interior id of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleHydraReactorAngle","permalink":"/it/docs/scripting/functions/GetVehicleHydraReactorAngle"},"next":{"title":"GetVehicleLandingGearState","permalink":"/it/docs/scripting/functions/GetVehicleLandingGearState"}}'),r=i("85893"),l=i("50065");let c={title:"GetVehicleInterior",sidebar_label:"GetVehicleInterior",description:"Get the interior id of a vehicle.",tags:["vehicle"]},o=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the interior id of a vehicle."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"Returns vehicle interior id."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n    LinkVehicleToInterior(vehicleid, 15);\n\n    new interiorid = GetVehicleInterior(vehicleid);\n    // interiorid = 15\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Links a vehicle to an interior."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return c}});var n=i(67294);let r={},l=n.createContext(r);function c(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
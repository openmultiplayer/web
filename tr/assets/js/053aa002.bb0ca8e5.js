"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94552"],{20997:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetVehicleLastDriver","title":"GetVehicleLastDriver","description":"Get the last driver of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleLastDriver.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleLastDriver","permalink":"/tr/docs/scripting/functions/GetVehicleLastDriver","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleLastDriver.md","tags":[{"inline":true,"label":"vehicle","permalink":"/tr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleLastDriver","sidebar_label":"GetVehicleLastDriver","description":"Get the last driver of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleLandingGearState","permalink":"/tr/docs/scripting/functions/GetVehicleLandingGearState"},"next":{"title":"GetVehicleMatrix","permalink":"/tr/docs/scripting/functions/GetVehicleMatrix"}}'),r=i("85893"),l=i("50065");let s={title:"GetVehicleLastDriver",sidebar_label:"GetVehicleLastDriver",description:"Get the last driver of a vehicle.",tags:["vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the last driver of a vehicle."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"Returns the last driver ID (player ID)."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"INVALID_PLAYER_ID"})," - The vehicle has no last driver."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new g_Vehicle;\n\npublic OnGameModeInit()\n{\n    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n}\n\npublic OnGameModeExit()\n{\n    new lastDriver = GetVehicleLastDriver(g_Vehicle);\n    if (lastDriver != INVALID_PLAYER_ID)\n    {\n        printf("Vehicle ID %d last driver: %d", g_Vehicle, lastDriver);\n    }\n    else\n    {\n        printf("Vehicle ID %d has no last driver.", g_Vehicle);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleDriver",children:"GetVehicleDriver"}),": Get the playerid of the person driving the vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
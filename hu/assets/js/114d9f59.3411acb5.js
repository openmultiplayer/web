"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62124"],{82918:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/GetVehicleRespawnDelay","title":"GetVehicleRespawnDelay","description":"Get the respawn delay of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleRespawnDelay.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRespawnDelay","permalink":"/hu/docs/scripting/functions/GetVehicleRespawnDelay","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleRespawnDelay.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRespawnDelay","sidebar_label":"GetVehicleRespawnDelay","description":"Get the respawn delay of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehiclePos","permalink":"/hu/docs/scripting/functions/GetVehiclePos"},"next":{"title":"GetVehicleRespawnTick","permalink":"/hu/docs/scripting/functions/GetVehicleRespawnTick"}}'),l=n("85893"),s=n("50065");let r={title:"GetVehicleRespawnDelay",sidebar_label:"GetVehicleRespawnDelay",description:"Get the respawn delay of a vehicle.",tags:["vehicle"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the respawn delay of a vehicle."}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    new respawnDelay = GetVehicleRespawnDelay(vehicleid);\n    // respawnDelay = 60\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": Set the respawn delay of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(67294);let l={},s=i.createContext(l);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
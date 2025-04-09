"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79124"],{64945:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SetVehicleRespawnDelay","title":"SetVehicleRespawnDelay","description":"Set the respawn delay of a vehicle.","source":"@site/docs/scripting/functions/SetVehicleRespawnDelay.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleRespawnDelay","permalink":"/sr/docs/scripting/functions/SetVehicleRespawnDelay","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleRespawnDelay.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleRespawnDelay","sidebar_label":"SetVehicleRespawnDelay","description":"Set the respawn delay of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehiclePos","permalink":"/sr/docs/scripting/functions/SetVehiclePos"},"next":{"title":"SetVehicleRespawnTick","permalink":"/sr/docs/scripting/functions/SetVehicleRespawnTick"}}'),s=n("85893"),l=n("50065");let r={title:"SetVehicleRespawnDelay",sidebar_label:"SetVehicleRespawnDelay",description:"Set the respawn delay of a vehicle.",tags:["vehicle"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set the respawn delay of a vehicle."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"respawnDelay"}),(0,s.jsx)(t.td,{children:"The respawn delay (in seconds) to set."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    SetVehicleRespawnDelay(vehicleid, 120);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleRespawnDelay",children:"GetVehicleRespawnDelay"}),": Get the respawn delay of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var i=n(67294);let s={},l=i.createContext(s);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
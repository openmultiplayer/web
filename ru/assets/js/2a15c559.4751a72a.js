"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["25009"],{74607:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/GetVehicleRespawnTick","title":"GetVehicleRespawnTick","description":"Get the respawn tick of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleRespawnTick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRespawnTick","permalink":"/ru/docs/scripting/functions/GetVehicleRespawnTick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleRespawnTick.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRespawnTick","sidebar_label":"GetVehicleRespawnTick","description":"Get the respawn tick of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleRespawnDelay","permalink":"/ru/docs/scripting/functions/GetVehicleRespawnDelay"},"next":{"title":"GetVehicleRotationQuat","permalink":"/ru/docs/scripting/functions/GetVehicleRotationQuat"}}'),c=n("85893"),s=n("50065");let r={title:"GetVehicleRespawnTick",sidebar_label:"GetVehicleRespawnTick",description:"Get the respawn tick of a vehicle.",tags:["vehicle"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Get the respawn tick of a vehicle."}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vehicleid"}),(0,c.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,c.jsx)(t.p,{children:"Returns respawn tick in milliseconds."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    new respawnTick = GetVehicleRespawnTick(vehicleid);\n    printf("Vehicle ID %d respawn tick: %d ms", vehicleid, respawnTick);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetVehicleRespawnTick",children:"SetVehicleRespawnTick"}),": Set the respawn tick of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var i=n(67294);let c={},s=i.createContext(c);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99733"],{93854:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerSirenState","title":"GetPlayerSirenState","description":"Gets the siren state of the player\'s vehicle.","source":"@site/docs/scripting/functions/GetPlayerSirenState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSirenState","permalink":"/fa/docs/scripting/functions/GetPlayerSirenState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSirenState.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/fa/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerSirenState","sidebar_label":"GetPlayerSirenState","description":"Gets the siren state of the player\'s vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerScore","permalink":"/fa/docs/scripting/functions/GetPlayerScore"},"next":{"title":"GetPlayerSkillLevel","permalink":"/fa/docs/scripting/functions/GetPlayerSkillLevel"}}'),i=n("85893"),l=n("50065");let s={title:"GetPlayerSirenState",sidebar_label:"GetPlayerSirenState",description:"Gets the siren state of the player's vehicle.",tags:["player","vehicle"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the siren state of the player's vehicle."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(t.p,{children:"Returns the vehicle siren state."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/siren", true))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return 1;\n        }\n\n        new bool:sirenState = GetPlayerSirenState(playerid);\n\n        SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetVehicleParamsSirenState",children:"SetVehicleParamsSirenState"}),": Turn the siren for a vehicle on or off."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ToggleVehicleSirenEnabled",children:"ToggleVehicleSirenEnabled"}),": Turn the siren for a vehicle on or off."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsVehicleSirenEnabled",children:"IsVehicleSirenEnabled"}),": Checks if a vehicle siren is on or off."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleSirenState",children:"GetVehicleSirenState"}),": Gets the siren state of the vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let i={},l=r.createContext(i);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
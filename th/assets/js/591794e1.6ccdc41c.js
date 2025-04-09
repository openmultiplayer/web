"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5796"],{60606:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerVelocity","title":"GetPlayerVelocity","description":"Get the velocity (speed) of a player on the X, Y and Z axes.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVelocity","permalink":"/th/docs/scripting/functions/GetPlayerVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVelocity.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerVelocity","sidebar_label":"GetPlayerVelocity","description":"Get the velocity (speed) of a player on the X, Y and Z axes.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVehicleSeat","permalink":"/th/docs/scripting/functions/GetPlayerVehicleSeat"},"next":{"title":"GetPlayerVersion","permalink":"/th/docs/scripting/functions/GetPlayerVersion"}}'),l=i("85893"),r=i("50065");let s={title:"GetPlayerVelocity",sidebar_label:"GetPlayerVelocity",description:"Get the velocity (speed) of a player on the X, Y and Z axes.",tags:["player"]},c=void 0,o={},a=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(t.p,{children:"Get the velocity (speed) of a player on the X, Y and Z axes."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The player to get the speed from."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":x"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the X axis, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":y"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the Y axis, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":z"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the Z axis, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(t.p,{children:"The function itself doesn't return a specific value. The X, Y and Z velocities are stored in the specified variables."}),"\n",(0,l.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/velocity", cmdtext))\n    {\n        new Float:Velocity[3], string[80];\n    GetPlayerVelocity(playerid, Velocity[0], Velocity[1], Velocity[2]);\n        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", Velocity[0], Velocity[1], Velocity[2]);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n    }\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"SetPlayerVelocity: Set a player's velocity."}),"\n",(0,l.jsx)(t.li,{children:"SetVehicleVelocity: Set a vehicle's velocity."}),"\n",(0,l.jsx)(t.li,{children:"GetVehicleVelocity: Get a vehicle's velocity."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let l={},r=n.createContext(l);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
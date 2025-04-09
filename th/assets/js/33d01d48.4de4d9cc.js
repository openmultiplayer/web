"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8812"],{38297:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/th/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/th/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/th/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}'),c=i("85893"),l=i("50065");let s={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving.",tags:["vehicle"]},r=void 0,a={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(e){let t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,c.jsx)(t.p,{children:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vehicleid"}),(0,c.jsx)(t.td,{children:"The ID of the vehicle that's position was updated."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player that sent a vehicle position sync update."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"passenger_seat"}),(0,c.jsx)(t.td,{children:"The ID of the seat if the player is a passenger. 0=not in vehicle, 1=front passenger, 2=backleft 3=backright 4+ is for coach/bus etc. with many passenger seats."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"new_x"}),(0,c.jsx)(t.td,{children:"The new X coordinate of the vehicle."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"new_y"}),(0,c.jsx)(t.td,{children:"The new Y coordinate of the vehicle."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"new_z"}),(0,c.jsx)(t.td,{children:"The new Z coordinate of the vehicle."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vel_x"}),(0,c.jsx)(t.td,{children:"The new X velocity of the vehicle."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vel_y"}),(0,c.jsx)(t.td,{children:"The new Y velocity of the vehicle."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vel_z"}),(0,c.jsx)(t.td,{children:"The new Z velocity of the vehicle."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,c.jsx)(t.p,{children:"It is always called first in filterscripts so returning 0 there also blocks other scripts from seeing it."}),"\n",(0,c.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // Check if it moved far\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // Reject the update\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,c.jsx)(t.admonition,{type:"warning",children:(0,c.jsx)(t.p,{children:"This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. GetVehiclePos will return the old coordinates of the vehicle before this update."})}),"\n",(0,c.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var n=i(67294);let c={},l=n.createContext(c);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
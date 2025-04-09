"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56913"],{15814:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>r,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","source":"@site/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/ar/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/ar/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/ar/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}'),l=i("85893"),s=i("50065");let c={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving.",tags:["vehicle"]},a=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle that's position was updated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that sent a vehicle position sync update."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"passenger_seat"}),(0,l.jsx)(t.td,{children:"The ID of the seat if the player is a passenger. 0=not in vehicle, 1=front passenger, 2=backleft 3=backright 4+ is for coach/bus etc. with many passenger seats."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":new_x"]}),(0,l.jsx)(t.td,{children:"The new X coordinate of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":new_y"]}),(0,l.jsx)(t.td,{children:"The new Y coordinate of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":new_z"]}),(0,l.jsx)(t.td,{children:"The new Z coordinate of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":vel_x"]}),(0,l.jsx)(t.td,{children:"The new X velocity of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":vel_y"]}),(0,l.jsx)(t.td,{children:"The new Y velocity of the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":vel_z"]}),(0,l.jsx)(t.td,{children:"The new Z velocity of the vehicle."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // Check if it moved far\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // Reject the update\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback."}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/GetVehiclePos",children:"GetVehiclePos"})," will return the old coordinates of the vehicle before this update."]}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"OnTrailerUpdate",children:"OnTrailerUpdate"}),": Called when a trailer's position is synced by a client."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return c}});var n=i(67294);let l={},s=n.createContext(l);function c(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
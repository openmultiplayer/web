"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["27493"],{68104:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingVehicleID","title":"GetPlayerSurfingVehicleID","description":"Get the ID of the vehicle that the player is surfing (stuck to the roof of).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerSurfingVehicleID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingVehicleID","permalink":"/th/docs/scripting/functions/GetPlayerSurfingVehicleID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSurfingVehicleID.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingVehicleID","sidebar_label":"GetPlayerSurfingVehicleID","description":"Get the ID of the vehicle that the player is surfing (stuck to the roof of).","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingPlayerObjectID","permalink":"/th/docs/scripting/functions/GetPlayerSurfingPlayerObjectID"},"next":{"title":"GetPlayerTargetActor","permalink":"/th/docs/scripting/functions/GetPlayerTargetActor"}}'),r=i("85893"),l=i("50065");let s={title:"GetPlayerSurfingVehicleID",sidebar_label:"GetPlayerSurfingVehicleID",description:"Get the ID of the vehicle that the player is surfing (stuck to the roof of).",tags:["player","vehicle"]},c=void 0,a={},h=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(t.p,{children:"Get the ID of the vehicle that the player is surfing (stuck to the roof of)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player you want to know the surfing vehicle ID of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(t.p,{children:"The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, INVALID_VEHICLE_ID. If the player specified is not connected, INVALID_VEHICLE_ID also."}),"\n",(0,r.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new surf = GetPlayerSurfingVehicleID(playerid);\nif (surf == INVALID_VEHICLE_ID)\n{\n	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"GetPlayerVehicleID: Get the ID of the vehicle the player is in."}),"\n",(0,r.jsx)(t.li,{children:"GetPlayerVehicleSeat: Check what seat a player is in."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
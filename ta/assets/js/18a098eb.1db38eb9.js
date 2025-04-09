"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85542"],{22025:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingVehicleID","title":"GetPlayerSurfingVehicleID","description":"Get the ID of the vehicle that the player is surfing (stuck to the roof of).","source":"@site/docs/scripting/functions/GetPlayerSurfingVehicleID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingVehicleID","permalink":"/ta/docs/scripting/functions/GetPlayerSurfingVehicleID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSurfingVehicleID.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingVehicleID","sidebar_label":"GetPlayerSurfingVehicleID","description":"Get the ID of the vehicle that the player is surfing (stuck to the roof of).","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingPlayerObjectID","permalink":"/ta/docs/scripting/functions/GetPlayerSurfingPlayerObjectID"},"next":{"title":"GetPlayerTargetActor","permalink":"/ta/docs/scripting/functions/GetPlayerTargetActor"}}'),r=i("85893"),l=i("50065");let s={title:"GetPlayerSurfingVehicleID",sidebar_label:"GetPlayerSurfingVehicleID",description:"Get the ID of the vehicle that the player is surfing (stuck to the roof of).",tags:["player","vehicle"]},c=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the ID of the vehicle that the player is surfing (stuck to the roof of)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player you want to know the surfing vehicle ID of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, ",(0,r.jsx)(t.code,{children:"INVALID_VEHICLE_ID"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If the player specified is not connected, ",(0,r.jsx)(t.code,{children:"INVALID_VEHICLE_ID"})," also."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);\nif (surfingVehicleId == INVALID_VEHICLE_ID)\n{\n	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerSurfingObjectID",children:"GetPlayerSurfingObjectID"}),": Gets the ID of the object the player is surfing on."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerSurfingOffsets",children:"GetPlayerSurfingOffsets"}),": Gets a player's surfing offsets."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
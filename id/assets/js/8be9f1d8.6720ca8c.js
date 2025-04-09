"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75794"],{91433:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>f,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingOffsets","title":"GetPlayerSurfingOffsets","description":"Gets a player\'s surfing offsets.","source":"@site/docs/scripting/functions/GetPlayerSurfingOffsets.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingOffsets","permalink":"/id/docs/scripting/functions/GetPlayerSurfingOffsets","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSurfingOffsets.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingOffsets","sidebar_label":"GetPlayerSurfingOffsets","description":"Gets a player\'s surfing offsets.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingObjectID","permalink":"/id/docs/scripting/functions/GetPlayerSurfingObjectID"},"next":{"title":"GetPlayerSurfingPlayerObjectID","permalink":"/id/docs/scripting/functions/GetPlayerSurfingPlayerObjectID"}}'),s=n("85893"),i=n("50065");let l={title:"GetPlayerSurfingOffsets",sidebar_label:"GetPlayerSurfingOffsets",description:"Gets a player's surfing offsets.",tags:["player"]},o=void 0,f={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets a player's surfing offsets."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":offsetX"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the offset X coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":offsetY"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the offset Y coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":offsetZ"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the offset Z coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return any specific value."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);\nif (surfingVehicleId != INVALID_VEHICLE_ID)\n{\n    new \n        Float:offsetX,\n        Float:offsetY,\n        Float:offsetZ;\n\n    GetPlayerSurfingOffsets(playerid, offsetX, offsetY, offsetZ);\n    \n    SendClientMessage(playerid, -1, "offsetX = %.2f offsetY = %.2f offsetZ = %.2f", offsetX, offsetY, offsetZ);\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSurfingObjectID",children:"GetPlayerSurfingObjectID"}),": Gets the ID of the object the player is surfing on."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSurfingVehicleID",children:"GetPlayerSurfingVehicleID"}),": Get the ID of the vehicle that the player is surfing (stuck to the roof of)."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
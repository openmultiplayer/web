"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78741"],{83396:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>p,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerSpectateID","title":"GetPlayerSpectateID","description":"Gets the ID of the player or vehicle the player is spectating (watching).","source":"@site/docs/scripting/functions/GetPlayerSpectateID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSpectateID","permalink":"/ta/docs/scripting/functions/GetPlayerSpectateID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSpectateID.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSpectateID","sidebar_label":"GetPlayerSpectateID","description":"Gets the ID of the player or vehicle the player is spectating (watching).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpecialAction","permalink":"/ta/docs/scripting/functions/GetPlayerSpecialAction"},"next":{"title":"GetPlayerSpectateType","permalink":"/ta/docs/scripting/functions/GetPlayerSpectateType"}}'),i=n("85893"),a=n("50065");let l={title:"GetPlayerSpectateID",sidebar_label:"GetPlayerSpectateID",description:"Gets the ID of the player or vehicle the player is spectating (watching).",tags:["player"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the ID of the player or vehicle the player is spectating (watching)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the ID of the player or vehicle."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new spectateType = GetPlayerSpectateType(playerid);\n\nif (spectateType == 1)\n{\n    new spectateVehicleId = GetPlayerSpectateID(playerid);\n}\nelse if (spectateType == 2)\n{\n    new spectatePlayerId = GetPlayerSpectateID(playerid);\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"../resources/spectatetypes",children:"spectate types"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerSpectatePlayer",children:"PlayerSpectatePlayer"}),": Spectate a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerSpectateVehicle",children:"PlayerSpectateVehicle"}),": Spectate a vehicle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": Start or stop spectating."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerSpectateType",children:"GetPlayerSpectateType"}),": Gets the player's spectate type."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../resources/spectatetypes",children:"Spectate Types"}),"."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(67294);let i={},a=r.createContext(i);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42189"],{12870:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/PlayerSpectatePlayer","title":"PlayerSpectatePlayer","description":"Makes a player spectate (watch) another player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/PlayerSpectatePlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerSpectatePlayer","permalink":"/th/docs/scripting/functions/PlayerSpectatePlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerSpectatePlayer.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayerSpectatePlayer","sidebar_label":"PlayerSpectatePlayer","description":"Makes a player spectate (watch) another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayerPlaySound","permalink":"/th/docs/scripting/functions/PlayerPlaySound"},"next":{"title":"PlayerSpectateVehicle","permalink":"/th/docs/scripting/functions/PlayerSpectateVehicle"}}'),a=r("85893"),l=r("50065");let i={title:"PlayerSpectatePlayer",sidebar_label:"PlayerSpectatePlayer",description:"Makes a player spectate (watch) another player.",tags:["player"]},s=void 0,c={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,a.jsx)(t.p,{children:"Makes a player spectate (watch) another player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player that will spectate."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"targetplayerid"}),(0,a.jsx)(t.td,{children:"The ID of the player that should be spectated."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"mode"}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.a,{href:"/th/docs/scripting/resources/spectatemodes",children:"mode"})," to spectate with (optional; defaults to 'normal')."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,a.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,a.jsx)(t.p,{children:"0: The function failed to execute. One of the players specified does not exist."}),"\n",(0,a.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    TogglePlayerSpectating(playerid, 1);\n    PlayerSpectatePlayer(playerid, killerid);\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer. playerid and targetplayerid's virtual world and interior must be the same for this function to work properly."})}),"\n",(0,a.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"PlayerSpectateVehicle: Spectate a vehicle."}),"\n",(0,a.jsx)(t.li,{children:"TogglePlayerSpectating: Start or stop spectating."}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var n=r(67294);let a={},l=n.createContext(a);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
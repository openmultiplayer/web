"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59482"],{31440:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/PlayerSpectatePlayer","title":"PlayerSpectatePlayer","description":"Makes a player spectate (watch) another player.","source":"@site/docs/scripting/functions/PlayerSpectatePlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerSpectatePlayer","permalink":"/fr/docs/scripting/functions/PlayerSpectatePlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerSpectatePlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayerSpectatePlayer","sidebar_label":"PlayerSpectatePlayer","description":"Makes a player spectate (watch) another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayerPlaySound","permalink":"/fr/docs/scripting/functions/PlayerPlaySound"},"next":{"title":"PlayerSpectateVehicle","permalink":"/fr/docs/scripting/functions/PlayerSpectateVehicle"}}'),l=r("85893"),a=r("50065");let s={title:"PlayerSpectatePlayer",sidebar_label:"PlayerSpectatePlayer",description:"Makes a player spectate (watch) another player.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Makes a player spectate (watch) another player."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that will spectate."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"targetplayerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that should be spectated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["SPECTATE_MODE",":mode"]}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/spectatemodes",children:"mode"})," to spectate with (optional; defaults to 'normal')."]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. One of the players specified does not exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    TogglePlayerSpectating(playerid, 1);\n    PlayerSpectatePlayer(playerid, killerid);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer."}),"\n",(0,l.jsx)(t.li,{children:"playerid and targetplayerid's virtual world and interior must be the same for this function to work properly."}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerSpectateVehicle",children:"PlayerSpectateVehicle"}),": Spectate a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": Start or stop spectating."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerSpectateID",children:"GetPlayerSpectateID"}),": Gets the ID of the player or vehicle the player is spectating (watching)."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerSpectateType",children:"GetPlayerSpectateType"}),": Gets the player's spectate type."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/spectatemodes",children:"Spectate Modes"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return s}});var n=r(67294);let l={},a=n.createContext(l);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
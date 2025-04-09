"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22622"],{54024:function(e,n,t){t.r(n),t.d(n,{default:()=>y,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/GivePlayerMoney","title":"GivePlayerMoney","description":"Give money to or take money from a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GivePlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GivePlayerMoney","permalink":"/th/docs/scripting/functions/GivePlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GivePlayerMoney.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GivePlayerMoney","sidebar_label":"GivePlayerMoney","description":"Give money to or take money from a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetWorldTime","permalink":"/th/docs/scripting/functions/GetWorldTime"},"next":{"title":"GivePlayerWeapon","permalink":"/th/docs/scripting/functions/GivePlayerWeapon"}}'),r=t("85893"),l=t("50065");let o={title:"GivePlayerMoney",sidebar_label:"GivePlayerMoney",description:"Give money to or take money from a player.",tags:["player"]},a=void 0,s={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"Give money to or take money from a player."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to give money to or take money from."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"money"}),(0,r.jsx)(n.td,{children:"The amount of money to give the player. Use a minus value to take money."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"1: The function was executed successfully."}),"\n",(0,r.jsx)(n.p,{children:"0: The function failed to execute. This means the player is not connected."}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (killerid != INVALID_PLAYER_ID)\n    {\n       // Award $1000 to the killer\n       GivePlayerMoney(killerid, 1000);\n       SendClientMessage(killerid, -1, "You have been awarded $1000 for the kill.");\n    }\n\n    // Take $500 from the player who died.\n    GivePlayerMoney(playerid, -500);\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ResetPlayerMoney: Set the money of a player to $0."}),"\n",(0,r.jsx)(n.li,{children:"GetPlayerMoney: Check how much money a player has."}),"\n"]})]})}function y(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(67294);let r={},l=i.createContext(r);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
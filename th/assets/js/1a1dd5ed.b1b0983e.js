"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70842"],{33587:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerDeath","title":"OnPlayerDeath","description":"This callback is called when a player dies, either by suicide or by being killed by another player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerDeath.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerDeath","permalink":"/th/docs/scripting/callbacks/OnPlayerDeath","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerDeath.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerDeath","sidebar_label":"OnPlayerDeath","description":"This callback is called when a player dies, either by suicide or by being killed by another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerConnect","permalink":"/th/docs/scripting/callbacks/OnPlayerConnect"},"next":{"title":"OnPlayerDisconnect","permalink":"/th/docs/scripting/callbacks/OnPlayerDisconnect"}}'),l=t("85893"),a=t("50065");let r={title:"OnPlayerDeath",sidebar_label:"OnPlayerDeath",description:"This callback is called when a player dies, either by suicide or by being killed by another player.",tags:["player"]},s=void 0,c={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player dies, either by suicide or by being killed by another player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that died."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"killerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that killed the player who died, or INVALID_PLAYER_ID if there was none."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["WEAPON",":reason"]}),(0,l.jsx)(n.td,{children:"The ID of the reason for the player's death."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(n.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,l.jsx)(n.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,l.jsx)(n.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E1F\u0E34\u0E25\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,l.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new PlayerDeaths[MAX_PLAYERS];\nnew PlayerKills[MAX_PLAYERS];\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    SendDeathMessage(killerid, playerid, reason); // Shows the kill in the killfeed\n\n    // Check that the killerid is valid before doing anything with it\n    if (killerid\xa0!= INVALID_PLAYER_ID)\n    {\n        PlayerKills[killerid] ++;\n    }\n\n    // Outside the check, handle stuff for playerid (it's always valid)\n    PlayerDeaths[playerid] ++;\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18) The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade) You do not need to check whether killerid is valid before using it in SendDeathMessage. INVALID_PLAYER_ID is a valid killerid ID parameter in that function. playerid is the only one who can call the callback. (good to know for anti fake death)"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"You MUST check whether 'killerid' is valid (not INVALID_PLAYER_ID) before using it in an array (or really anywhere), as it will cause the OnPlayerDeath script to crash (not the entire script). This is because INVALID_PLAYER_ID is defined as 65535, and if an array only has 'MAX_PLAYERS' elements, e.g. 500, you're trying to access an index that is above 499, which is out of bounds."})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SendDeathMessage",children:"SendDeathMessage"}),": Add a kill to the death list."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(67294);let l={},a=i.createContext(l);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
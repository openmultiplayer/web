"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54812"],{98831:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerName","title":"GetPlayerName","description":"Get a player\'s name.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerName","permalink":"/th/docs/scripting/functions/GetPlayerName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerName.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerName","sidebar_label":"GetPlayerName","description":"Get a player\'s name.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMoney","permalink":"/th/docs/scripting/functions/GetPlayerMoney"},"next":{"title":"GetPlayerNetworkStats","permalink":"/th/docs/scripting/functions/GetPlayerNetworkStats"}}'),a=t("85893"),i=t("50065");let l={title:"GetPlayerName",sidebar_label:"GetPlayerName",description:"Get a player's name.",tags:["player"]},s=void 0,o={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,a.jsx)(n.p,{children:"Get a player's name."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player to get the name of."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"name[]"}),(0,a.jsx)(n.td,{children:"An array into which to store the name, passed by reference."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"len"}),(0,a.jsx)(n.td,{children:"The length of the string that should be stored. Recommended to be MAX_PLAYER_NAME + 1. The + 1 is necessary to account for the null terminator."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,a.jsx)(n.p,{children:"The player's name is stored in the specified array."}),"\n",(0,a.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    // Get the name of the player that connected and display a join message to other players\n\n    new name[MAX_PLAYER_NAME + 1];\n    GetPlayerName(playerid, name, sizeof(name));\n\n    new string[MAX_PLAYER_NAME + 23 + 1];\n    format(string, sizeof(string), "%s has joined the server.", name);\n    SendClientMessageToAll(0xC4C4C4FF, string);\n\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"A player's name can be up to 24 characters long (as of 0.3d R2) by using SetPlayerName. This is defined in a_samp.inc as MAX_PLAYER_NAME. However, the client can only join with a nickname between 3 and 20 characters, otherwise the connection will be rejected and the player has to quit to choose a valid name."})}),"\n",(0,a.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"SetPlayerName: Set a player's name."}),"\n",(0,a.jsx)(n.li,{children:"GetPlayerIp: Get a player's IP."}),"\n",(0,a.jsx)(n.li,{children:"GetPlayerPing: Get the ping of a player."}),"\n",(0,a.jsx)(n.li,{children:"GetPlayerScore: Get the score of a player."}),"\n",(0,a.jsx)(n.li,{children:"GetPlayerVersion: Get a player's client-version."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(67294);let a={},i=r.createContext(a);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
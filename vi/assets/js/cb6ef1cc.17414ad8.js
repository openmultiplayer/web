"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99129"],{81565:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPlayerName","title":"GetPlayerName","description":"Get a player\'s name.","source":"@site/docs/scripting/functions/GetPlayerName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerName","permalink":"/vi/docs/scripting/functions/GetPlayerName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerName.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerName","sidebar_label":"GetPlayerName","description":"Get a player\'s name.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMoney","permalink":"/vi/docs/scripting/functions/GetPlayerMoney"},"next":{"title":"GetPlayerNetworkStats","permalink":"/vi/docs/scripting/functions/GetPlayerNetworkStats"}}'),i=t("85893"),a=t("50065");let s={title:"GetPlayerName",sidebar_label:"GetPlayerName",description:"Get a player's name.",tags:["player"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get a player's name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the name of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name[]"}),(0,i.jsx)(n.td,{children:"An array into which to store the name, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"len"}),(0,i.jsx)(n.td,{children:"The length of the string that should be stored. Recommended to be MAX_PLAYER_NAME + 1. The + 1 is necessary to account for the null terminator."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(n.p,{children:"Returns the length of the player's name."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0"})," if player specified doesn't exist."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    // Get the name of the player that connected and display a join message to other players\n\n    new name[MAX_PLAYER_NAME + 1];\n    GetPlayerName(playerid, name, sizeof(name));\n\n    new string[128];\n    format(string, sizeof(string), "%s has joined the server.", name);\n    SendClientMessageToAll(0xC4C4C4FF, string);\n\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["A player's name can be up to 24 characters long by using ",(0,i.jsx)(n.a,{href:"SetPlayerName",children:"SetPlayerName"}),"."]}),(0,i.jsxs)(n.p,{children:["This is defined as ",(0,i.jsx)(n.code,{children:"MAX_PLAYER_NAME"}),"."]}),(0,i.jsx)(n.p,{children:"However, the client can only join with a nickname between 3 and 20 characters, otherwise the connection will be rejected and the player has to quit to choose a valid name."})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Set a player's name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerIp",children:"GetPlayerIp"}),": Get a player's IP."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerScore",children:"GetPlayerScore"}),": Get the score of a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerVersion",children:"GetPlayerVersion"}),": Get a player's client-version."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
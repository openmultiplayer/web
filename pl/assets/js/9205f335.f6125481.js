"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18047"],{15636:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerDisconnect","title":"OnPlayerDisconnect","description":"This callback is called when a player disconnects from the server.","source":"@site/docs/scripting/callbacks/OnPlayerDisconnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerDisconnect","permalink":"/pl/docs/scripting/callbacks/OnPlayerDisconnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerDisconnect.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerDisconnect","sidebar_label":"OnPlayerDisconnect","description":"This callback is called when a player disconnects from the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerDeath","permalink":"/pl/docs/scripting/callbacks/OnPlayerDeath"},"next":{"title":"OnPlayerEditAttachedObject","permalink":"/pl/docs/scripting/callbacks/OnPlayerEditAttachedObject"}}'),l=s("85893"),i=s("50065");let r={title:"OnPlayerDisconnect",sidebar_label:"OnPlayerDisconnect",description:"This callback is called when a player disconnects from the server.",tags:["player"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Reasons",id:"reasons",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player disconnects from the server."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that disconnected."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"reason"}),(0,l.jsx)(n.td,{children:"The reason for the disconnection. See table below."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,l.jsx)(n.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"reasons",children:"Reasons"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"ID"}),(0,l.jsx)(n.th,{children:"Reason"}),(0,l.jsx)(n.th,{children:"Details"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"Timeout/Crash"}),(0,l.jsx)(n.td,{children:"The player's connection was lost. Either their game crashed or their network had a fault."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"Quit"}),(0,l.jsx)(n.td,{children:"The player purposefully quit, either using the /quit (/q) command or via the pause menu."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"Kick/Ban"}),(0,l.jsx)(n.td,{children:"The player was kicked or banned by the server."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"Custom"}),(0,l.jsx)(n.td,{children:"Used by some libraries. Reserved for modes' private uses."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"Mode End"}),(0,l.jsx)(n.td,{children:"The current mode is ending so disconnecting all players from it (they are still on the server)."})]})]})]}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsxs)(n.p,{children:["Reason 3 was originally added in SA",":MP"," by ",(0,l.jsx)(n.a,{href:"https://github.com/pawn-lang/sa-mp-fixes",children:"fixes.inc"})]}),(0,l.jsx)(n.p,{children:"Reasons 3 and 4 were added by the Open Multiplayer server."})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerDisconnect(playerid, reason)\n{\n    new\n        szString[64],\n        playerName[MAX_PLAYER_NAME];\n\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n\n    new szDisconnectReason[5][] =\n    {\n        "Timeout/Crash",\n        "Quit",\n        "Kick/Ban",\n        "Custom",\n        "Mode End"\n    };\n\n    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);\n\n    SendClientMessageToAll(0xC4C4C4FF, szString);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can't get unambiguous information from functions like ",(0,l.jsx)(n.a,{href:"GetPlayerIp",children:"GetPlayerIp"})," and ",(0,l.jsx)(n.a,{href:"GetPlayerPos",children:"GetPlayerPos"}),"."]}),(0,l.jsx)(n.p,{children:"This issue is solved in open.mp server."})]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnIncomingConnection",children:"OnIncomingConnection"}),": This callback is called when a player is attempting to connect to the server."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": This callback is called when a player finishes downloading custom models."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(67294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
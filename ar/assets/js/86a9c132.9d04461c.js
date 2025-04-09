"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64420"],{86155:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerConnect","title":"OnPlayerConnect","description":"This callback is called when a player connects to the server.","source":"@site/docs/scripting/callbacks/OnPlayerConnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerConnect","permalink":"/ar/docs/scripting/callbacks/OnPlayerConnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerConnect.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerConnect","sidebar_label":"OnPlayerConnect","description":"This callback is called when a player connects to the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerCommandText","permalink":"/ar/docs/scripting/callbacks/OnPlayerCommandText"},"next":{"title":"OnPlayerDeath","permalink":"/ar/docs/scripting/callbacks/OnPlayerDeath"}}'),a=l("85893"),r=l("50065");let s={title:"OnPlayerConnect",sidebar_label:"OnPlayerConnect",description:"This callback is called when a player connects to the server.",tags:["player"]},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This callback is called when a player connects to the server."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player that connected."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,a.jsx)(n.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,a.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new\n        string[64],\n        playerName[MAX_PLAYER_NAME];\n\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);\n    SendClientMessageToAll(0xFFFFFFAA, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(l,{}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player leaves the server."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnIncomingConnection",children:"OnIncomingConnection"}),": This callback is called when a player is attempting to connect to the server."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": This callback is called when a player finishes downloading custom models."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return s}});var t=l(67294);let a={},r=t.createContext(a);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
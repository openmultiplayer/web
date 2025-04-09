"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99361"],{11016:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/GetPlayerState","title":"GetPlayerState","description":"Get a player\'s current state.","source":"@site/docs/scripting/functions/GetPlayerState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerState","permalink":"/pt-BR/docs/scripting/functions/GetPlayerState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerState.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerState","sidebar_label":"GetPlayerState","description":"Get a player\'s current state.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpectateType","permalink":"/pt-BR/docs/scripting/functions/GetPlayerSpectateType"},"next":{"title":"GetPlayerSurfingObjectID","permalink":"/pt-BR/docs/scripting/functions/GetPlayerSurfingObjectID"}}'),l=r("85893"),a=r("50065");let s={title:"GetPlayerState",sidebar_label:"GetPlayerState",description:"Get a player's current state.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get a player's current state."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to get the current state of."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["The player's current state as an integer (see: ",(0,l.jsx)(t.a,{href:"../resources/playerstates",children:"Player States"}),")."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new PLAYER_STATE:state = GetPlayerState(killerid); // Get the killer's state\n\n    if (state == PLAYER_STATE_DRIVER) // If the killer was in a vehicle\n    {\n        //It's a driver drive-by, take some money\n        GivePlayerMoney(killerid, -10000);\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Get a player's current special action."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Set a player's special action."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),": Called when a player changes state."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/playerstates",children:"Player States"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return s}});var n=r(67294);let l={},a=n.createContext(l);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
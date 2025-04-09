"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82071"],{91551:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"scripting/functions/SendDeathMessageToPlayer","title":"SendDeathMessageToPlayer","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for a single player.","source":"@site/docs/scripting/functions/SendDeathMessageToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendDeathMessageToPlayer","permalink":"/pt-BR/docs/scripting/functions/SendDeathMessageToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendDeathMessageToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"SendDeathMessageToPlayer","sidebar_label":"SendDeathMessageToPlayer","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for a single player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SendDeathMessage","permalink":"/pt-BR/docs/scripting/functions/SendDeathMessage"},"next":{"title":"SendPlayerMessageToAll","permalink":"/pt-BR/docs/scripting/functions/SendPlayerMessageToAll"}}'),l=n("85893"),a=n("50065");let r={title:"SendDeathMessageToPlayer",sidebar_label:"SendDeathMessageToPlayer",description:"Adds a death to the 'killfeed' on the right-hand side of the screen for a single player.",tags:["player"]},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Adds a death to the 'killfeed' on the right-hand side of the screen for a single player."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to send the death message to."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"killer"}),(0,l.jsx)(t.td,{children:"The ID of the killer (can be INVALID_PLAYER_ID)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"killee"}),(0,l.jsx)(t.td,{children:"The ID of the player that died."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"weapon"}),(0,l.jsx)(t.td,{children:"The reason (not always a weapon) for the victim's death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT)."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Sends a death message to "playerid" shows that "killerid" killed "playerid" for "reason"\n    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);\n\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SendDeathMessage",children:"SendDeathMessage"}),": Add a kill to the death list."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerDeath",children:"OnPlayerDeath"}),": Called when a player dies."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var s=n(67294);let l={},a=s.createContext(l);function r(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
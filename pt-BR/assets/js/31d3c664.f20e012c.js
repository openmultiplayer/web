"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86158"],{28649:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/SetPlayerScore","title":"SetPlayerScore","description":"Set a player\'s score.","source":"@site/docs/scripting/functions/SetPlayerScore.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerScore","permalink":"/pt-BR/docs/scripting/functions/SetPlayerScore","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerScore.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerScore","sidebar_label":"SetPlayerScore","description":"Set a player\'s score.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerRaceCheckpoint","permalink":"/pt-BR/docs/scripting/functions/SetPlayerRaceCheckpoint"},"next":{"title":"SetPlayerShopName","permalink":"/pt-BR/docs/scripting/functions/SetPlayerShopName"}}'),s=r("85893"),i=r("50065");let l={title:"SetPlayerScore",sidebar_label:"SetPlayerScore",description:"Set a player's score.",tags:["player"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set a player's score. Players' scores are shown in the scoreboard (shown by holding the TAB key)."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player to set the score of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"score"}),(0,s.jsx)(t.td,{children:"The value to set the player's score to."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Add 1 to this killer's score. We must check it is valid first.\n    if (killerid\xa0!= INVALID_PLAYER_ID)\n    {\n        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);\n    }\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerScore",children:"GetPlayerScore"}),": Get the score of a player."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return l}});var n=r(67294);let s={},i=n.createContext(s);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
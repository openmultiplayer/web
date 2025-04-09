"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22170"],{2086:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerScore","title":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","source":"@site/docs/scripting/functions/GetPlayerScore.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerScore","permalink":"/de/docs/scripting/functions/GetPlayerScore","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerScore.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerScore","sidebar_label":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerRotationQuat","permalink":"/de/docs/scripting/functions/GetPlayerRotationQuat"},"next":{"title":"GetPlayerSirenState","permalink":"/de/docs/scripting/functions/GetPlayerSirenState"}}'),s=r("85893"),i=r("50065");let l={title:"GetPlayerScore",sidebar_label:"GetPlayerScore",description:"This function returns a player's score as it was set using SetPlayerScore.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This function returns a player's score as it was set using SetPlayerScore"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The player to get the score of."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The player's score."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (!strcmp(cmdtext, "/score", true))\n    {\n        new string[32];\n        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));\n        SendClientMessage(playerid, COLOR_ORANGE, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerScore",children:"SetPlayerScore"}),": Set the score of a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(67294);let s={},i=n.createContext(s);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
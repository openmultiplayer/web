"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22170"],{2086:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerScore","title":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","source":"@site/docs/scripting/functions/GetPlayerScore.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerScore","permalink":"/it/docs/scripting/functions/GetPlayerScore","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerScore.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerScore","sidebar_label":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerRotationQuat","permalink":"/it/docs/scripting/functions/GetPlayerRotationQuat"},"next":{"title":"GetPlayerSirenState","permalink":"/it/docs/scripting/functions/GetPlayerSirenState"}}'),i=r("85893"),s=r("50065");let l={title:"GetPlayerScore",sidebar_label:"GetPlayerScore",description:"This function returns a player's score as it was set using SetPlayerScore.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This function returns a player's score as it was set using SetPlayerScore"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The player to get the score of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The player's score."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (!strcmp(cmdtext, "/score", true))\n    {\n        new string[32];\n        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));\n        SendClientMessage(playerid, COLOR_ORANGE, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerScore",children:"SetPlayerScore"}),": Set the score of a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(67294);let i={},s=n.createContext(i);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
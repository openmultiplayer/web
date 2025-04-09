"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3813"],{45698:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerTeam","title":"GetPlayerTeam","description":"Get the ID of the team the player is on.","source":"@site/docs/scripting/functions/GetPlayerTeam.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTeam","permalink":"/fr/docs/scripting/functions/GetPlayerTeam","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerTeam.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerTeam","sidebar_label":"GetPlayerTeam","description":"Get the ID of the team the player is on.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTargetPlayer","permalink":"/fr/docs/scripting/functions/GetPlayerTargetPlayer"},"next":{"title":"GetPlayerTime","permalink":"/fr/docs/scripting/functions/GetPlayerTime"}}'),a=n("85893"),i=n("50065");let l={title:"GetPlayerTeam",sidebar_label:"GetPlayerTeam",description:"Get the ID of the team the player is on.",tags:["player"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the ID of the team the player is on."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to get the team of."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"0-254:"})," The player's team. (0 is a valid team)"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"255:"})," Defined as NO_TEAM. The player is not on any team."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"-1:"})," The function failed to execute. Player is not connected."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"enum\n{\n    TEAM_ONE = 1,\n    TEAM_TWO\n};\n\npublic OnPlayerSpawn(playerid)\n{\n    // Players who are in team 1 should spawn at Las Venturas airport.\n\n    if (GetPlayerTeam(playerid) == TEAM_ONE)\n    {\n        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),": Set a player's team."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetTeamCount",children:"SetTeamCount"}),": Set the number of teams available."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(67294);let a={},i=r.createContext(a);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
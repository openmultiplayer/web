"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88361"],{94975:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerTime","title":"GetPlayerTime","description":"Get the player\'s current game time.","source":"@site/docs/scripting/functions/GetPlayerTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTime","permalink":"/docs/scripting/functions/GetPlayerTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerTime.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerTime","sidebar_label":"GetPlayerTime","description":"Get the player\'s current game time.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTeam","permalink":"/docs/scripting/functions/GetPlayerTeam"},"next":{"title":"GetPlayerTrainSpeed","permalink":"/docs/scripting/functions/GetPlayerTrainSpeed"}}'),i=r("85893"),s=r("50065");let l={title:"GetPlayerTime",sidebar_label:"GetPlayerTime",description:"Get the player's current game time.",tags:["player"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Get the player's current game time. Set by ",(0,i.jsx)(t.a,{href:"SetWorldTime",children:"SetWorldTime"}),", or by the game automatically if ",(0,i.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"})," is used."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the game time of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&hour"}),(0,i.jsx)(t.td,{children:"A variable in which to store the hour, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&minute"}),(0,i.jsx)(t.td,{children:"A variable in which to store the minutes, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,i.jsx)(t.p,{children:"The current game time is stored in the specified variables."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new hour, minutes;\nGetPlayerTime(playerid, hour, minutes);\nif (hour == 13 && minutes == 37)\n{\n    SendClientMessage(playerid, COLOR_WHITE, "The time is 13:37!");\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Set a player's time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Set the global server time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": Toggle the clock in the top-right corner."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(67294);let i={},s=n.createContext(i);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
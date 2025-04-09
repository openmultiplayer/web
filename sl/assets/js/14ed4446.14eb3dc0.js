"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74833"],{57266:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SetPlayerTime","title":"SetPlayerTime","description":"Sets the game time for a player.","source":"@site/docs/scripting/functions/SetPlayerTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerTime","permalink":"/sl/docs/scripting/functions/SetPlayerTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerTime.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerTime","sidebar_label":"SetPlayerTime","description":"Sets the game time for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTeam","permalink":"/sl/docs/scripting/functions/SetPlayerTeam"},"next":{"title":"SetPlayerVelocity","permalink":"/sl/docs/scripting/functions/SetPlayerVelocity"}}'),r=n("85893"),l=n("50065");let s={title:"SetPlayerTime",sidebar_label:"SetPlayerTime",description:"Sets the game time for a player.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Sets the game time for a player. If a player's clock is enabled (",(0,r.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),") the time displayed by it will update automatically."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to set the game time of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hour"}),(0,r.jsx)(t.td,{children:"Hour to set (0-23)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minute"}),(0,r.jsx)(t.td,{children:"Minutes to set (0-59)."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/noon", true))\n    {\n        SetPlayerTime(playerid, 12, 0); // Noon\n        return 1;\n    }\n    if (!strcmp(cmdtext, "/midnight", true))\n    {\n        SetPlayerTime(playerid, 0, 0); // Midnight\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Using this function under ",(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"})," doesn't work."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Set the global server time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerTime",children:"GetPlayerTime"}),": Get the time of a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": Toggle the clock in the top-right corner."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(67294);let r={},l=i.createContext(r);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
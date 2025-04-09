"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94254"],{41535:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/TogglePlayerClock","title":"TogglePlayerClock","description":"Toggle the in-game clock (top-right corner) for a specific player.","source":"@site/docs/scripting/functions/TogglePlayerClock.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TogglePlayerClock","permalink":"/pl/docs/scripting/functions/TogglePlayerClock","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TogglePlayerClock.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"TogglePlayerClock","sidebar_label":"TogglePlayerClock","description":"Toggle the in-game clock (top-right corner) for a specific player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ToggleChatTextReplacement","permalink":"/pl/docs/scripting/functions/ToggleChatTextReplacement"},"next":{"title":"TogglePlayerControllable","permalink":"/pl/docs/scripting/functions/TogglePlayerControllable"}}'),r=l("85893"),i=l("50065");let s={title:"TogglePlayerClock",sidebar_label:"TogglePlayerClock",description:"Toggle the in-game clock (top-right corner) for a specific player.",tags:["player"]},o=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Toggle the in-game clock (top-right corner) for a specific player. When this is enabled, time will progress at 1 minute per second. Weather will also interpolate (slowly change over time) when set using ",(0,r.jsx)(t.a,{href:"SetWeather",children:"SetWeather"}),"/",(0,r.jsx)(t.a,{href:"SetPlayerWeather",children:"SetPlayerWeather"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The player whose clock you want to enable/disable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":toggle"]}),(0,r.jsx)(t.td,{children:"'true' to show and 'false' to hide. Hidden by default."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The specified player does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    TogglePlayerClock(playerid, true); // Show the clock\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Time is not synced with other players! Time can be synced using ",(0,r.jsx)(t.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Time will automatically advance 6 hours when the player dies."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerTime",children:"GetPlayerTime"}),": Get the time of a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Set a player's time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Set the global server time."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return o},a:function(){return s}});var n=l(67294);let r={},i=n.createContext(r);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
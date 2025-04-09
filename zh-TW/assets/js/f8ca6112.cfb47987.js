"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75108"],{8652:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/PlayerHasClockEnabled","title":"PlayerHasClockEnabled","description":"Checks whether the player has their in-game clock enabled.","source":"@site/docs/scripting/functions/PlayerHasClockEnabled.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerHasClockEnabled","permalink":"/zh-TW/docs/scripting/functions/PlayerHasClockEnabled","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerHasClockEnabled.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayerHasClockEnabled","sidebar_label":"PlayerHasClockEnabled","description":"Checks whether the player has their in-game clock enabled.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneStopFlash","permalink":"/zh-TW/docs/scripting/functions/PlayerGangZoneStopFlash"},"next":{"title":"PlayerPlaySound","permalink":"/zh-TW/docs/scripting/functions/PlayerPlaySound"}}'),r=l("85893"),i=l("50065");let s={title:"PlayerHasClockEnabled",sidebar_label:"PlayerHasClockEnabled",description:"Checks whether the player has their in-game clock enabled.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Checks whether the player has their in-game clock enabled. (",(0,r.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),")"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The player whose clock you want to check."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The clock is enabled."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The clock isn't enabled, or the specified player does not exist."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    TogglePlayerClock(playerid, true); // Show the clock\n\n    if (PlayerHasClockEnabled(playerid))\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "The clock is enabled.");\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Time is not synced with other players! Time can be synced using ",(0,r.jsx)(n.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Set a player's time."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Set the global server time."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": Toggle the clock in the top-right corner."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return s}});var t=l(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
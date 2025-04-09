"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10117"],{55706:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetPlayerTime","title":"SetPlayerTime","description":"Sets the game time for a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerTime","permalink":"/th/docs/scripting/functions/SetPlayerTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerTime.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerTime","sidebar_label":"SetPlayerTime","description":"Sets the game time for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTeam","permalink":"/th/docs/scripting/functions/SetPlayerTeam"},"next":{"title":"SetPlayerVelocity","permalink":"/th/docs/scripting/functions/SetPlayerVelocity"}}'),r=i("85893"),l=i("50065");let s={title:"SetPlayerTime",sidebar_label:"SetPlayerTime",description:"Sets the game time for a player.",tags:["player"]},a=void 0,c={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(t.p,{children:"Sets the game time for a player. If a player's clock is enabled (TogglePlayerClock) the time displayed by it will update automatically."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to set the game time of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hour"}),(0,r.jsx)(t.td,{children:"Hour to set (0-23)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minute"}),(0,r.jsx)(t.td,{children:"Minutes to set (0-59)."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,r.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"SetPlayerTime(playerid, 12, 0); // Noon\nSetPlayerTime(playerid, 0, 0); // Midnight\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Using this function under OnPlayerConnect doesn't work."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"SetWorldTime: Set the global server time."}),"\n",(0,r.jsx)(t.li,{children:"GetPlayerTime: Get the time of a player."}),"\n",(0,r.jsx)(t.li,{children:"TogglePlayerClock: Toggle the clock in the top-right corner."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
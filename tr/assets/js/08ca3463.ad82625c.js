"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76050"],{74781:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetPlayerWeather","title":"SetPlayerWeather","description":"Set a player\'s weather.","source":"@site/docs/scripting/functions/SetPlayerWeather.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerWeather","permalink":"/tr/docs/scripting/functions/SetPlayerWeather","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerWeather.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerWeather","sidebar_label":"SetPlayerWeather","description":"Set a player\'s weather.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerWantedLevel","permalink":"/tr/docs/scripting/functions/SetPlayerWantedLevel"},"next":{"title":"SetPlayerWorldBounds","permalink":"/tr/docs/scripting/functions/SetPlayerWorldBounds"}}'),l=r("85893"),i=r("50065");let s={title:"SetPlayerWeather",sidebar_label:"SetPlayerWeather",description:"Set a player's weather.",tags:["player"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Set a player's weather."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player whose weather to set."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"weather"}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/weatherid",children:"weather"})," to set."]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/storm", true))\n    {\n        SetPlayerWeather(playerid, 8);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["If ",(0,l.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"})," is enabled, weather will slowly change over time, instead of changing instantly."]}),"\n",(0,l.jsx)(t.li,{children:"There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check."}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerWeather",children:"GetPlayerWeather"}),": Get a player's weather."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetWeather",children:"SetWeather"}),": Set the global weather."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": Set the global gravity."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/weatherid",children:"Weather IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return s}});var n=r(67294);let l={},i=n.createContext(l);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
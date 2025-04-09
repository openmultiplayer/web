"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["26662"],{80046:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/SetWorldTime","title":"SetWorldTime","description":"Sets the world time (for all players) to a specific hour.","source":"@site/docs/scripting/functions/SetWorldTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetWorldTime","permalink":"/sl/docs/scripting/functions/SetWorldTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetWorldTime.md","tags":[{"inline":true,"label":"worldtime","permalink":"/sl/docs/tags/worldtime"}],"version":"current","frontMatter":{"title":"SetWorldTime","sidebar_label":"SetWorldTime","description":"Sets the world time (for all players) to a specific hour.","tags":["worldtime"]},"sidebar":"docsSidebar","previous":{"title":"SetWeather","permalink":"/sl/docs/scripting/functions/SetWeather"},"next":{"title":"ShowMenuForPlayer","permalink":"/sl/docs/scripting/functions/ShowMenuForPlayer"}}'),r=i("85893"),l=i("50065");let s={title:"SetWorldTime",sidebar_label:"SetWorldTime",description:"Sets the world time (for all players) to a specific hour.",tags:["worldtime"]},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Sets the world time (for all players) to a specific hour."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hour"}),(0,r.jsx)(t.td,{children:"The hour to set (0-23)"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"// Set the time to 12 o'clock (noon)\nSetWorldTime(12);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This function is only relevant for players that do not use a passing clock - see ",(0,r.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To set the minutes and/or to set the time for individual players, see ",(0,r.jsx)(t.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetWorldTime",children:"GetWorldTime"}),": Get the current world time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Set a player's time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetWeather",children:"SetWeather"}),": Set the global weather."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": Set the global gravity."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(67294);let r={},l=n.createContext(r);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
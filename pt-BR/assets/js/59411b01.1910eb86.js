"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["40277"],{95049:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/GetPlayerWeather","title":"GetPlayerWeather","description":"Get a player\'s weather.","source":"@site/docs/scripting/functions/GetPlayerWeather.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeather","permalink":"/pt-BR/docs/scripting/functions/GetPlayerWeather","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerWeather.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeather","sidebar_label":"GetPlayerWeather","description":"Get a player\'s weather.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeaponState","permalink":"/pt-BR/docs/scripting/functions/GetPlayerWeaponState"},"next":{"title":"GetPlayerWorldBounds","permalink":"/pt-BR/docs/scripting/functions/GetPlayerWorldBounds"}}'),a=r("85893"),l=r("50065");let s={title:"GetPlayerWeather",sidebar_label:"GetPlayerWeather",description:"Get a player's weather.",tags:["player"]},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get a player's weather."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to get the weather of."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Returns the player's weather."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"SetPlayerWeather(playerid, 8);\n\nprintf(\"Player weather: %d\", GetPlayerWeather(playerid));\n// The output will be 'Player weather: 8'\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerWeather",children:"SetPlayerWeather"}),": Set a player's weather."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetWeather",children:"SetWeather"}),": Set the world weather for all players."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../resources/weatherid",children:"Weather IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return s}});var n=r(67294);let a={},l=n.createContext(a);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
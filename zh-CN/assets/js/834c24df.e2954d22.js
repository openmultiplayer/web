"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82983"],{7494:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetWeather","title":"SetWeather","description":"\u4E3A\u6240\u6709\u73A9\u5BB6\u8BBE\u7F6E\u4E16\u754C\u5929\u6C14\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetWeather.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetWeather","permalink":"/zh-CN/docs/scripting/functions/SetWeather","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetWeather.md","tags":[],"version":"current","frontMatter":{"title":"SetWeather","sidebar_label":"SetWeather","description":"\u4E3A\u6240\u6709\u73A9\u5BB6\u8BBE\u7F6E\u4E16\u754C\u5929\u6C14\u3002","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleZAngle","permalink":"/zh-CN/docs/scripting/functions/SetVehicleZAngle"},"next":{"title":"SetWorldTime","permalink":"/zh-CN/docs/scripting/functions/SetWorldTime"}}'),i=n("85893"),l=n("50065");let s={title:"SetWeather",sidebar_label:"SetWeather",description:"\u4E3A\u6240\u6709\u73A9\u5BB6\u8BBE\u7F6E\u4E16\u754C\u5929\u6C14\u3002",tags:[]},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u4E3A\u6240\u6709\u73A9\u5BB6\u8BBE\u7F6E\u5168\u5C40\u5929\u6C14\u6548\u679C\u3002"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"weatherid"}),(0,i.jsxs)(t.td,{children:["\u8981\u8BBE\u7F6E\u7684",(0,i.jsx)(t.a,{href:"../resources/weatherid",children:"\u5929\u6C14 ID"})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u672C\u51FD\u6570\u6CA1\u6709\u7279\u5B9A\u8FD4\u56DE\u503C\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/sandstorm", true)) // \u68C0\u6D4B\u6C99\u5C18\u66B4\u6307\u4EE4\n    {\n        SetWeather(19); // \u8BBE\u7F6E19\u53F7\u6C99\u5C18\u66B4\u5929\u6C14\n        return 1;\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u542F\u7528",(0,i.jsx)(t.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),"\u540E\u5929\u6C14\u4F1A\u6E10\u53D8\u5207\u6362\uFF0C\u800C\u975E\u7ACB\u5373\u751F\u6548"]}),"\n",(0,i.jsx)(t.li,{children:"\u6E38\u620F\u4EC5\u652F\u6301 0-20 \u5171 21 \u79CD\u5929\u6C14 ID\uFF0C\u4F46\u672A\u505A\u8303\u56F4\u6821\u9A8C"}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetWeather",children:"GetWeather"}),": \u83B7\u53D6\u5F53\u524D\u5168\u5C40\u5929\u6C14"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerWeather",children:"SetPlayerWeather"}),": \u8BBE\u7F6E\u73A9\u5BB6\u72EC\u7ACB\u5929\u6C14"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": \u8BBE\u7F6E\u5168\u5C40\u91CD\u529B\u53C2\u6570"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/weatherid",children:"\u5929\u6C14 ID \u5BF9\u7167\u8868"})}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(67294);let i={},l=r.createContext(i);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
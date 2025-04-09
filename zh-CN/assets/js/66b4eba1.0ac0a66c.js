"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86534"],{83407:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/PlayerHasClockEnabled","title":"PlayerHasClockEnabled","description":"\u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u542F\u7528\u6E38\u620F\u5185\u65F6\u949F","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerHasClockEnabled.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerHasClockEnabled","permalink":"/zh-CN/docs/scripting/functions/PlayerHasClockEnabled","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerHasClockEnabled.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"PlayerHasClockEnabled","sidebar_label":"PlayerHasClockEnabled","description":"\u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u542F\u7528\u6E38\u620F\u5185\u65F6\u949F","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneStopFlash","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneStopFlash"},"next":{"title":"PlayerPlaySound","permalink":"/zh-CN/docs/scripting/functions/PlayerPlaySound"}}'),t=l("85893"),i=l("50065");let s={title:"PlayerHasClockEnabled",sidebar_label:"PlayerHasClockEnabled",description:"\u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u542F\u7528\u6E38\u620F\u5185\u65F6\u949F",tags:["\u73A9\u5BB6"]},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4E8E\u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u542F\u7528\u4E86\u6E38\u620F\u5185\u65F6\u949F\u663E\u793A\uFF08\u53C2\u89C1",(0,t.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),"\uFF09"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"\u8981\u68C0\u6D4B\u7684\u73A9\u5BB6 ID"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"true"})," - \u65F6\u949F\u663E\u793A\u5DF2\u542F\u7528"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"false"})," - \u672A\u542F\u7528\u6216\u6307\u5B9A\u73A9\u5BB6\u4E0D\u5B58\u5728"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    TogglePlayerClock(playerid, true); // \u663E\u793A\u65F6\u949F\n\n    if (PlayerHasClockEnabled(playerid))\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "\u5DF2\u542F\u7528\u6E38\u620F\u65F6\u949F\u663E\u793A");\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u73A9\u5BB6\u65F6\u95F4\u4E0D\u4F1A\u4E0E\u5176\u4ED6\u73A9\u5BB6\u540C\u6B65\uFF01\u5982\u9700\u540C\u6B65\u65F6\u95F4\u8BF7\u4F7F\u7528",(0,t.jsx)(n.a,{href:"SetPlayerTime",children:"SetPlayerTime"})]})}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": \u8BBE\u7F6E\u73A9\u5BB6\u4E2A\u4EBA\u65F6\u95F4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetWorldTime",children:"SetWorldTime"}),": \u8BBE\u7F6E\u5168\u5C40\u670D\u52A1\u5668\u65F6\u95F4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": \u5207\u6362\u53F3\u4E0A\u89D2\u65F6\u949F\u663E\u793A"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return s}});var r=l(67294);let t={},i=r.createContext(t);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
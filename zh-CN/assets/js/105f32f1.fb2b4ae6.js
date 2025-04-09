"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86196"],{50301:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetPlayerTime","title":"SetPlayerTime","description":"\u8BBE\u7F6E\u73A9\u5BB6\u7684\u6E38\u620F\u65F6\u95F4\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerTime","permalink":"/zh-CN/docs/scripting/functions/SetPlayerTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerTime.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SetPlayerTime","sidebar_label":"SetPlayerTime","description":"\u8BBE\u7F6E\u73A9\u5BB6\u7684\u6E38\u620F\u65F6\u95F4\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTeam","permalink":"/zh-CN/docs/scripting/functions/SetPlayerTeam"},"next":{"title":"SetPlayerVelocity","permalink":"/zh-CN/docs/scripting/functions/SetPlayerVelocity"}}'),i=t("85893"),l=t("50065");let s={title:"SetPlayerTime",sidebar_label:"SetPlayerTime",description:"\u8BBE\u7F6E\u73A9\u5BB6\u7684\u6E38\u620F\u65F6\u95F4\u3002",tags:["\u73A9\u5BB6"]},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u73A9\u5BB6\u7684\u6E38\u620F\u65F6\u95F4\u3002\u82E5\u73A9\u5BB6\u65F6\u949F\u5DF2\u542F\u7528(",(0,i.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),")\uFF0C\u5176\u663E\u793A\u7684\u65F6\u95F4\u5C06\u81EA\u52A8\u66F4\u65B0\u3002"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"\u8981\u8BBE\u7F6E\u6E38\u620F\u65F6\u95F4\u7684\u73A9\u5BB6 ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hour"}),(0,i.jsx)(n.td,{children:"\u5C0F\u65F6\u503C (0-23)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minute"}),(0,i.jsx)(n.td,{children:"\u5206\u949F\u503C (0-59)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002\u6307\u5B9A\u7684\u73A9\u5BB6\u4E0D\u5B58\u5728\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/noon", true))\n    {\n        SetPlayerTime(playerid, 12, 0); // \u6B63\u5348\n        return 1;\n    }\n    if (!strcmp(cmdtext, "/midnight", true))\n    {\n        SetPlayerTime(playerid, 0, 0); // \u5348\u591C\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),"\u56DE\u8C03\u4E2D\u4F7F\u7528\u6B64\u51FD\u6570\u65E0\u6548\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetWorldTime",children:"SetWorldTime"}),": \u8BBE\u7F6E\u5168\u5C40\u670D\u52A1\u5668\u65F6\u95F4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerTime",children:"GetPlayerTime"}),": \u83B7\u53D6\u73A9\u5BB6\u65F6\u95F4"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": \u5207\u6362\u73A9\u5BB6\u65F6\u949F\u663E\u793A"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(67294);let i={},l=r.createContext(i);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
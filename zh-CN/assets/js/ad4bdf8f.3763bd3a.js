"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87963"],{66781:function(n,e,t){t.r(e),t.d(e,{default:()=>m,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SendRconCommand","title":"SendRconCommand","description":"\u53D1\u9001RCON\uFF08\u8FDC\u7A0B\u63A7\u5236\u53F0\uFF09\u547D\u4EE4","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SendRconCommand.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendRconCommand","permalink":"/zh-CN/docs/scripting/functions/SendRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendRconCommand.md","tags":[{"inline":true,"label":"\u7BA1\u7406","permalink":"/zh-CN/docs/tags/\u7BA1\u7406"}],"version":"current","frontMatter":{"title":"SendRconCommand","sidebar_label":"SendRconCommand","description":"\u53D1\u9001RCON\uFF08\u8FDC\u7A0B\u63A7\u5236\u53F0\uFF09\u547D\u4EE4","tags":["\u7BA1\u7406"]},"sidebar":"docsSidebar","previous":{"title":"SendPlayerMessageToPlayer","permalink":"/zh-CN/docs/scripting/functions/SendPlayerMessageToPlayer"},"next":{"title":"Set3DTextLabelDrawDistance","permalink":"/zh-CN/docs/scripting/functions/Set3DTextLabelDrawDistance"}}'),s=t("85893"),d=t("50065");let r={title:"SendRconCommand",sidebar_label:"SendRconCommand",description:"\u53D1\u9001RCON\uFF08\u8FDC\u7A0B\u63A7\u5236\u53F0\uFF09\u547D\u4EE4",tags:["\u7BA1\u7406"]},c=void 0,o={},l=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function a(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u53D1\u9001 RCON\uFF08\u8FDC\u7A0B\u63A7\u5236\u53F0\uFF09\u547D\u4EE4"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"const format[]"}),(0,s.jsx)(e.td,{children:"\u9700\u8981\u6267\u884C\u7684 RCON \u547D\u4EE4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(e.td,{children:"\u4E0D\u5B9A\u6570\u91CF\u7684\u4EFB\u610F\u6807\u7B7E\u7C7B\u578B\u53C2\u6570"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(e.p,{children:"\u8BE5\u51FD\u6570\u59CB\u7EC8\u8FD4\u56DE 1"}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'SendRconCommand("gmx");\n// \u7B49\u6548\u4E8E\u5728\u6E38\u620F\u5185\u8F93\u5165"/rcon gmx"\n// GMX\u547D\u4EE4\u5C06\u91CD\u542F\u6E38\u620F\u6A21\u5F0F\n\n// \u4F7F\u7528format()\u7684\u793A\u4F8B\nnew szMapName[] = "Los Santos";\nnew szCmd[64];\nformat(szCmd, sizeof(szCmd), "mapname %s", szMapName);\nSendRconCommand(szCmd);\n\n// \u4E13\u4E1A\u63D0\u793A\uFF1Aopen.mp\u4E2D\u65E0\u9700\u4F7F\u7528format\nSendRconCommand("game.map %s", szMapName);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u56E0\u7F3A\u5C11 playerid \u53C2\u6570\uFF0C\u4E0D\u652F\u6301\u767B\u5F55\u64CD\u4F5C"}),"\n",(0,s.jsx)(e.li,{children:"'password 0'\u547D\u4EE4\u5C06\u6E05\u9664\u670D\u52A1\u5668\u5DF2\u8BBE\u7F6E\u7684\u5BC6\u7801"}),"\n",(0,s.jsxs)(e.li,{children:["\u8BE5\u547D\u4EE4\u4F1A\u89E6\u53D1",(0,s.jsx)(e.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"}),"\u56DE\u8C03"]}),"\n"]})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u53C2\u89C1",(0,s.jsx)(e.a,{href:"../../server/config.json",children:"config.json"}),"\u914D\u7F6E\u6587\u4EF6"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": \u68C0\u67E5\u73A9\u5BB6\u662F\u5426\u5177\u6709 RCON \u6743\u9650"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"}),": RCON \u547D\u4EE4\u6267\u884C\u65F6\u89E6\u53D1"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": RCON \u767B\u5F55\u5C1D\u8BD5\u65F6\u89E6\u53D1"]}),"\n"]})]})}function m(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var i=t(67294);let s={},d=i.createContext(s);function r(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);
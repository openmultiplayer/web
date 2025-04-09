"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95361"],{77762:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/EnableStuntBonusForPlayer","title":"EnableStuntBonusForPlayer","description":"\u5207\u6362\u73A9\u5BB6\u7684\u7279\u6280\u5956\u52B1\u529F\u80FD\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/EnableStuntBonusForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableStuntBonusForPlayer","permalink":"/zh-CN/docs/scripting/functions/EnableStuntBonusForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnableStuntBonusForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"EnableStuntBonusForPlayer","sidebar_label":"EnableStuntBonusForPlayer","description":"\u5207\u6362\u73A9\u5BB6\u7684\u7279\u6280\u5956\u52B1\u529F\u80FD\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"EnableStuntBonusForAll","permalink":"/zh-CN/docs/scripting/functions/EnableStuntBonusForAll"},"next":{"title":"EnableTirePopping","permalink":"/zh-CN/docs/scripting/functions/EnableTirePopping"}}'),l=t("85893"),s=t("50065");let i={title:"EnableStuntBonusForPlayer",sidebar_label:"EnableStuntBonusForPlayer",description:"\u5207\u6362\u73A9\u5BB6\u7684\u7279\u6280\u5956\u52B1\u529F\u80FD\u3002",tags:["\u73A9\u5BB6"]},o=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function u(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u5207\u6362\u6307\u5B9A\u73A9\u5BB6\u7684\u8F66\u8F86\u7279\u6280\u5956\u52B1\uFF08\u9ED8\u8BA4\u542F\u7528\uFF09\u3002"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u540D\u79F0"}),(0,l.jsx)(e.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"playerid"}),(0,l.jsx)(e.td,{children:"\u8981\u8BBE\u7F6E\u7279\u6280\u5956\u52B1\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsxs)(e.td,{children:["bool",":enable"]}),(0,l.jsx)(e.td,{children:"true \u542F\u7528 / false \u7981\u7528"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,l.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    EnableStuntBonusForPlayer(playerid, false); // \u73A9\u5BB6\u8FDE\u63A5\u65F6\u7981\u7528\u5176\u7279\u6280\u5956\u52B1\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"EnableStuntBonusForAll",children:"EnableStuntBonusForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u5207\u6362\u7279\u6280\u5956\u52B1\u529F\u80FD"]}),"\n"]})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var r=t(67294);let l={},s=r.createContext(l);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
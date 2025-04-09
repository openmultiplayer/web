"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16849"],{93922:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SetPlayerVelocity","title":"SetPlayerVelocity","description":"\u5728X\u3001Y\u3001Z\u8F74\u4E0A\u8BBE\u7F6E\u73A9\u5BB6\u7684\u901F\u5EA6\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVelocity","permalink":"/zh-CN/docs/scripting/functions/SetPlayerVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerVelocity.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SetPlayerVelocity","sidebar_label":"SetPlayerVelocity","description":"\u5728X\u3001Y\u3001Z\u8F74\u4E0A\u8BBE\u7F6E\u73A9\u5BB6\u7684\u901F\u5EA6\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTime","permalink":"/zh-CN/docs/scripting/functions/SetPlayerTime"},"next":{"title":"SetPlayerVirtualWorld","permalink":"/zh-CN/docs/scripting/functions/SetPlayerVirtualWorld"}}'),r=n("85893"),l=n("50065");let s={title:"SetPlayerVelocity",sidebar_label:"SetPlayerVelocity",description:"\u5728X\u3001Y\u3001Z\u8F74\u4E0A\u8BBE\u7F6E\u73A9\u5BB6\u7684\u901F\u5EA6\u3002",tags:["\u73A9\u5BB6"]},c=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u5728 X\u3001Y\u3001Z \u8F74\u4E0A\u8BBE\u7F6E\u73A9\u5BB6\u7684\u901F\u5EA6\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u540D\u79F0"}),(0,r.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"\u8981\u8BBE\u7F6E\u901F\u5EA6\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"X \u8F74\u65B9\u5411\u7684\u901F\u5EA6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"Y \u8F74\u65B9\u5411\u7684\u901F\u5EA6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":z"]}),(0,r.jsx)(t.td,{children:"Z \u8F74\u65B9\u5411\u7684\u901F\u5EA6"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002\u73A9\u5BB6\u672A\u8FDE\u63A5\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/jump", cmdtext))\n    {\n        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // \u5F3A\u5236\u73A9\u5BB6\u8DF3\u8DC3\uFF08Z\u8F74\u901F\u5EA6+0.2\uFF09\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerVelocity",children:"GetPlayerVelocity"}),": \u83B7\u53D6\u73A9\u5BB6\u901F\u5EA6"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleVelocity",children:"SetVehicleVelocity"}),": \u8BBE\u7F6E\u8F66\u8F86\u901F\u5EA6"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleVelocity",children:"GetVehicleVelocity"}),": \u83B7\u53D6\u8F66\u8F86\u901F\u5EA6"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var i=n(67294);let r={},l=i.createContext(r);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
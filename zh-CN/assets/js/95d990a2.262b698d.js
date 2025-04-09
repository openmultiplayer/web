"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49617"],{984:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetPlayerVirtualWorld","title":"SetPlayerVirtualWorld","description":"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVirtualWorld","permalink":"/zh-CN/docs/scripting/functions/SetPlayerVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerVirtualWorld.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SetPlayerVirtualWorld","sidebar_label":"SetPlayerVirtualWorld","description":"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerVelocity","permalink":"/zh-CN/docs/scripting/functions/SetPlayerVelocity"},"next":{"title":"SetPlayerWantedLevel","permalink":"/zh-CN/docs/scripting/functions/SetPlayerWantedLevel"}}'),l=r("85893"),i=r("50065");let d={title:"SetPlayerVirtualWorld",sidebar_label:"SetPlayerVirtualWorld",description:"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u3002",tags:["\u73A9\u5BB6"]},s=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u3002\u73A9\u5BB6\u53EA\u80FD\u770B\u5230\u540C\u5C5E\u8BE5\u865A\u62DF\u4E16\u754C\u7684\u5176\u4ED6\u73A9\u5BB6\u548C\u8F66\u8F86\u3002"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"\u9700\u8981\u8BBE\u7F6E\u865A\u62DF\u4E16\u754C\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"virtualWorld"}),(0,l.jsx)(t.td,{children:"\u76EE\u6807\u865A\u62DF\u4E16\u754C ID"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u901A\u5E38\u8868\u793A\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/world3", true) == 0)\n    {\n        // \u5C06\u73A9\u5BB6\u5207\u6362\u52303\u53F7\u865A\u62DF\u4E16\u754C\n        SetPlayerVirtualWorld(playerid, 3);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"\u9ED8\u8BA4\u865A\u62DF\u4E16\u754C ID \u4E3A 0\u3002"})}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": \u8BBE\u7F6E\u8F66\u8F86\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return d}});var n=r(67294);let l={},i=n.createContext(l);function d(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
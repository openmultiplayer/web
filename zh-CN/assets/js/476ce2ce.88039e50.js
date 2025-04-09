"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37144"],{59668:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/SelectTextDraw","title":"SelectTextDraw","description":"\u663E\u793A\u5149\u6807\u5E76\u5141\u8BB8\u73A9\u5BB6\u9009\u62E9\u6587\u672C\u7ED8\u56FE","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SelectTextDraw.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SelectTextDraw","permalink":"/zh-CN/docs/scripting/functions/SelectTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SelectTextDraw.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"SelectTextDraw","sidebar_label":"SelectTextDraw","description":"\u663E\u793A\u5149\u6807\u5E76\u5141\u8BB8\u73A9\u5BB6\u9009\u62E9\u6587\u672C\u7ED8\u56FE","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"SelectObject","permalink":"/zh-CN/docs/scripting/functions/SelectObject"},"next":{"title":"SendChat","permalink":"/zh-CN/docs/scripting/functions/SendChat"}}'),r=n("85893"),i=n("50065");let c={title:"SelectTextDraw",sidebar_label:"SelectTextDraw",description:"\u663E\u793A\u5149\u6807\u5E76\u5141\u8BB8\u73A9\u5BB6\u9009\u62E9\u6587\u672C\u7ED8\u56FE",tags:["\u6587\u672C\u7ED8\u56FE"]},s=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u663E\u793A\u5149\u6807\u5E76\u5141\u8BB8\u73A9\u5BB6\u9009\u62E9\u6587\u672C\u7ED8\u56FE"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"\u53EF\u8FDB\u884C\u6587\u672C\u7ED8\u56FE\u9009\u62E9\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hoverColour"}),(0,r.jsx)(t.td,{children:"\u9F20\u6807\u60AC\u505C\u65F6\u6587\u672C\u7ED8\u56FE\u7684\u9AD8\u4EAE\u989C\u8272\uFF08RGBA \u683C\u5F0F\uFF09"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(t.p,{children:"\u8BE5\u51FD\u6570\u6CA1\u6709\u7279\u5B9A\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/tdselect", true))\n    {\n        SelectTextDraw(playerid, 0x00FF00FF); // \u60AC\u505C\u65F6\u663E\u793A\u7EFF\u8272\u9AD8\u4EAE\n        SendClientMessage(playerid, 0xFFFFFFFF, "\u670D\u52A1\u5668\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u7ED8\u56FE\uFF01");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"\u60AC\u505C\u65F6\u9AD8\u4EAE\u663E\u793A\u7684\u662F\u6587\u672C\u5185\u5BB9\u800C\u975E\u80CC\u666F\u6846\uFF08\u5982\u679C\u5B58\u5728\u80CC\u666F\u6846\uFF09"})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CancelSelectTextDraw",children:"CancelSelectTextDraw"}),": \u53D6\u6D88\u9F20\u6807\u6587\u672C\u7ED8\u56FE\u9009\u62E9\u6A21\u5F0F"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u662F\u5426\u53EF\u901A\u8FC7 SelectTextDraw \u9009\u62E9"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),": \u8BBE\u7F6E\u73A9\u5BB6\u4E13\u5C5E\u6587\u672C\u7ED8\u56FE\u662F\u5426\u53EF\u901A\u8FC7 SelectTextDraw \u9009\u62E9"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": \u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": \u73A9\u5BB6\u70B9\u51FB\u4E13\u5C5E\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var l=n(67294);let r={},i=l.createContext(r);function c(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);
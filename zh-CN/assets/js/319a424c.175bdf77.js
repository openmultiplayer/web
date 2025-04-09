"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16858"],{30069:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/GetConsoleVarAsBool","title":"GetConsoleVarAsBool","description":"\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF\u7684\u5E03\u5C14\u7C7B\u578B\u503C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetConsoleVarAsBool.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetConsoleVarAsBool","permalink":"/zh-CN/docs/scripting/functions/GetConsoleVarAsBool","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetConsoleVarAsBool.md","tags":[],"version":"current","frontMatter":{"title":"GetConsoleVarAsBool","sidebar_label":"GetConsoleVarAsBool","description":"\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF\u7684\u5E03\u5C14\u7C7B\u578B\u503C\u3002","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetAvailableClasses","permalink":"/zh-CN/docs/scripting/functions/GetAvailableClasses"},"next":{"title":"GetConsoleVarAsFloat","permalink":"/zh-CN/docs/scripting/functions/GetConsoleVarAsFloat"}}'),o=t("85893"),i=t("50065");let r={title:"GetConsoleVarAsBool",sidebar_label:"GetConsoleVarAsBool",description:"\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF\u7684\u5E03\u5C14\u7C7B\u578B\u503C\u3002",tags:[]},l=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsx)(n.p,{children:"\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF\u7684\u5E03\u5C14\u7C7B\u578B\u503C\u3002"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,o.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const cvar[]"}),(0,o.jsx)(n.td,{children:"\u8981\u83B7\u53D6\u7684\u5E03\u5C14\u7C7B\u578B\u63A7\u5236\u53F0\u53D8\u91CF\u540D\u79F0"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,o.jsx)(n.p,{children:"\u8FD4\u56DE\u6307\u5B9A\u63A7\u5236\u53F0\u53D8\u91CF\u7684\u5E03\u5C14\u503C\u3002\u82E5\u53D8\u91CF\u4E0D\u5B58\u5728\u6216\u7C7B\u578B\u4E0D\u7B26\u8FD4\u56DE 0\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new queryEnabled = GetConsoleVarAsBool("enable_query");\n    if (!queryEnabled)\n    {\n        print("\u8B66\u544A\uFF1A\u67E5\u8BE2\u529F\u80FD\u5DF2\u7981\u7528\uFF0C\u670D\u52A1\u5668\u5C06\u4E0D\u4F1A\u663E\u793A\u5728\u670D\u52A1\u5668\u5217\u8868\u4E2D\u3002");\n    }\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u5728\u670D\u52A1\u5668\u63A7\u5236\u53F0\u8F93\u5165 ",(0,o.jsx)(n.code,{children:"varlist"})," \u53EF\u67E5\u770B\u6240\u6709\u53EF\u7528\u63A7\u5236\u53F0\u53D8\u91CF\u53CA\u5176\u7C7B\u578B\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/zh-CN/docs/scripting/functions/GetConsoleVarAsString",children:"GetConsoleVarAsString"}),": \u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/zh-CN/docs/scripting/functions/GetConsoleVarAsInt",children:"GetConsoleVarAsInt"}),": \u4EE5\u6574\u578B\u5F62\u5F0F\u83B7\u53D6\u63A7\u5236\u53F0\u53D8\u91CF"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(67294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
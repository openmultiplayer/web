"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60997"],{22381:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"scripting/functions/SetServerRuleFlags","title":"SetServerRuleFlags","description":"\u8BBE\u7F6E\u670D\u52A1\u5668\u89C4\u5219\u7684\u6807\u5FD7\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetServerRuleFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetServerRuleFlags","permalink":"/zh-CN/docs/scripting/functions/SetServerRuleFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetServerRuleFlags.md","tags":[{"inline":true,"label":"\u89C4\u5219","permalink":"/zh-CN/docs/tags/\u89C4\u5219"}],"version":"current","frontMatter":{"title":"SetServerRuleFlags","sidebar_label":"SetServerRuleFlags","description":"\u8BBE\u7F6E\u670D\u52A1\u5668\u89C4\u5219\u7684\u6807\u5FD7\u3002","tags":["\u89C4\u5219"]},"sidebar":"docsSidebar","previous":{"title":"SetServerRule","permalink":"/zh-CN/docs/scripting/functions/SetServerRule"},"next":{"title":"SetSpawnInfo","permalink":"/zh-CN/docs/scripting/functions/SetSpawnInfo"}}'),i=r("85893"),s=r("50065");let l={title:"SetServerRuleFlags",sidebar_label:"SetServerRuleFlags",description:"\u8BBE\u7F6E\u670D\u52A1\u5668\u89C4\u5219\u7684\u6807\u5FD7\u3002",tags:["\u89C4\u5219"]},d=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarnZH_CN:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u6682\u672A\u5B9E\u73B0\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BBE\u7F6E\u670D\u52A1\u5668\u89C4\u5219\u7684\u6807\u5FD7\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const rule[]"}),(0,i.jsx)(n.td,{children:"\u670D\u52A1\u5668\u89C4\u5219\u540D\u79F0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["E_SERVER_RULE_FLAGS",":flags"]}),(0,i.jsx)(n.td,{children:"\u8981\u8BBE\u7F6E\u7684\u6807\u5FD7\u4F4D"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:["\u51FD\u6570\u6267\u884C\u6210\u529F\u8FD4\u56DE ",(0,i.jsx)(n.strong,{children:"true"}),"\uFF0C\u5426\u5219\u8FD4\u56DE ",(0,i.jsx)(n.strong,{children:"false"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    SetServerRuleFlags("discord", 1);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AddServerRule",children:"AddServerRule"}),": \u6DFB\u52A0\u670D\u52A1\u5668\u89C4\u5219"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": \u79FB\u9664\u670D\u52A1\u5668\u89C4\u5219"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": \u9A8C\u8BC1\u670D\u52A1\u5668\u89C4\u5219\u6709\u6548\u6027"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetServerRuleFlags",children:"GetServerRuleFlags"}),": \u83B7\u53D6\u670D\u52A1\u5668\u89C4\u5219\u6807\u5FD7\u4F4D"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var t=r(67294);let i={},s=t.createContext(i);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
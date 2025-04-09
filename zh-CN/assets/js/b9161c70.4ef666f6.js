"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78587"],{59573:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/GetActorPos","title":"GetActorPos","description":"\u83B7\u53D6\u89D2\u8272\u7684\u5750\u6807\u4F4D\u7F6E\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetActorPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorPos","permalink":"/zh-CN/docs/scripting/functions/GetActorPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActorPos.md","tags":[{"inline":true,"label":"\u89D2\u8272","permalink":"/zh-CN/docs/tags/\u89D2\u8272"}],"version":"current","frontMatter":{"title":"GetActorPos","sidebar_label":"GetActorPos","description":"\u83B7\u53D6\u89D2\u8272\u7684\u5750\u6807\u4F4D\u7F6E\u3002","tags":["\u89D2\u8272"]},"sidebar":"docsSidebar","previous":{"title":"GetActorPoolSize","permalink":"/zh-CN/docs/scripting/functions/GetActorPoolSize"},"next":{"title":"GetActorSkin","permalink":"/zh-CN/docs/scripting/functions/GetActorSkin"}}'),s=n("85893"),i=n("50065");let o={title:"GetActorPos",sidebar_label:"GetActorPos",description:"\u83B7\u53D6\u89D2\u8272\u7684\u5750\u6807\u4F4D\u7F6E\u3002",tags:["\u89D2\u8272"]},c=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{VersionWarnZH_CN:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u83B7\u53D6\u89D2\u8272\u7684\u5750\u6807\u4F4D\u7F6E\u3002"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"actorid"}),(0,s.jsxs)(e.td,{children:["\u8981\u83B7\u53D6\u5750\u6807\u7684\u89D2\u8272 ID\uFF08\u7531",(0,s.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),"\u521B\u5EFA\u8FD4\u56DE\uFF09"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":x"]}),(0,s.jsx)(e.td,{children:"\u6D6E\u70B9\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u89D2\u8272\u7684 X \u8F74\u5750\u6807"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":y"]}),(0,s.jsx)(e.td,{children:"\u6D6E\u70B9\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u89D2\u8272\u7684 Y \u8F74\u5750\u6807"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":z"]}),(0,s.jsx)(e.td,{children:"\u6D6E\u70B9\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u89D2\u8272\u7684 Z \u8F74\u5750\u6807"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u6307\u5B9A\u89D2\u8272\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,s.jsx)(e.p,{children:"\u89D2\u8272\u7684\u5750\u6807\u5C06\u88AB\u5B58\u50A8\u5230\u6307\u5B9A\u53D8\u91CF\u4E2D\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"new Float:x, Float:y, Float:z;\nGetActorPos(actorid, x, y, z);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/zh-CN/docs/scripting/functions/SetActorPos",children:"SetActorPos"}),": \u8BBE\u7F6E\u89D2\u8272\u7684\u5750\u6807\u4F4D\u7F6E"]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return c},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(t){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);
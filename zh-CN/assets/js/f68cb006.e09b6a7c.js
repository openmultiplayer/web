"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36046"],{29302:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/argstr","title":"argstr","description":"\u901A\u8FC7\u53C2\u6570\u540D\u79F0\u83B7\u53D6\u5B57\u7B26\u4E32\u503C","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/argstr.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/argstr","permalink":"/zh-CN/docs/scripting/functions/argstr","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/argstr.md","tags":[{"inline":true,"label":"\u53C2\u6570","permalink":"/zh-CN/docs/tags/\u53C2\u6570"},{"inline":true,"label":"\u547D\u4EE4\u884C\u53C2\u6570","permalink":"/zh-CN/docs/tags/\u547D\u4EE4\u884C\u53C2\u6570"}],"version":"current","frontMatter":{"title":"argstr","sidebar_label":"argstr","description":"\u901A\u8FC7\u53C2\u6570\u540D\u79F0\u83B7\u53D6\u5B57\u7B26\u4E32\u503C","tags":["\u53C2\u6570","\u547D\u4EE4\u884C\u53C2\u6570"]},"sidebar":"docsSidebar","previous":{"title":"argindex","permalink":"/zh-CN/docs/scripting/functions/argindex"},"next":{"title":"argvalue","permalink":"/zh-CN/docs/scripting/functions/argvalue"}}'),s=t("85893"),i=t("50065");let l={title:"argstr",sidebar_label:"argstr",description:"\u901A\u8FC7\u53C2\u6570\u540D\u79F0\u83B7\u53D6\u5B57\u7B26\u4E32\u503C",tags:["\u53C2\u6570","\u547D\u4EE4\u884C\u53C2\u6570"]},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636E\u53C2\u6570\u540D\u79F0\u83B7\u53D6\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u503C\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"skip = 0"}),(0,s.jsx)(n.td,{children:"\u9700\u8981\u8DF3\u8FC7\u7684\u540C\u540D\u53C2\u6570\u6570\u91CF\uFF08\u9ED8\u8BA4 0\uFF09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'const argument[] = ""'}),(0,s.jsxs)(n.td,{children:["\u53C2\u6570\u540D\u79F0\uFF08\u5305\u542B",(0,s.jsx)(n.code,{children:"-"}),"\u6216",(0,s.jsx)(n.code,{children:"/"}),"\u524D\u7F00\uFF09"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'value[] = ""'}),(0,s.jsx)(n.td,{children:"\u5B58\u50A8\u53C2\u6570\u503C\u7684\u5B57\u7B26\u4E32\u7F13\u51B2\u533A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size = sizeof (value)"}),(0,s.jsx)(n.td,{children:"\u76EE\u6807\u7F13\u51B2\u533A\u5BB9\u91CF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["bool",":pack"," = false"]}),(0,s.jsx)(n.td,{children:"\u662F\u5426\u5BF9\u8FD4\u56DE\u503C\u8FDB\u884C\u6253\u5305"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - \u53C2\u6570\u5B58\u5728"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - \u53C2\u6570\u4E0D\u5B58\u5728"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"%E5%8F%82%E6%95%B0%E6%95%B0%E9%87%8F",children:"argcount"}),": \u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u603B\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"%E5%8F%82%E6%95%B0%E7%B4%A2%E5%BC%95",children:"argindex"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u53C2\u6570\u540D\u79F0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"%E5%8F%82%E6%95%B0%E6%95%B0%E5%80%BC",children:"argvalue"}),": \u83B7\u53D6\u53C2\u6570\u7684\u6570\u503C\u7C7B\u578B\u503C"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3440"],{73673:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/IsBanned","title":"IsBanned","description":"\u68C0\u67E5\u6307\u5B9AIP\u5730\u5740\u662F\u5426\u88AB\u5C01\u7981","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/IsBanned.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsBanned","permalink":"/zh-CN/docs/scripting/functions/IsBanned","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsBanned.md","tags":[{"inline":true,"label":"IP\u5730\u5740","permalink":"/zh-CN/docs/tags/ip\u5730\u5740"}],"version":"current","frontMatter":{"title":"IsBanned","sidebar_label":"IsBanned","description":"\u68C0\u67E5\u6307\u5B9AIP\u5730\u5740\u662F\u5426\u88AB\u5C01\u7981","tags":["IP\u5730\u5740"]},"sidebar":"docsSidebar","previous":{"title":"IsAdminTeleportAllowed","permalink":"/zh-CN/docs/scripting/functions/IsAdminTeleportAllowed"},"next":{"title":"IsGangZoneFlashingForPlayer","permalink":"/zh-CN/docs/scripting/functions/IsGangZoneFlashingForPlayer"}}'),t=s("85893"),r=s("50065");let l={title:"IsBanned",sidebar_label:"IsBanned",description:"\u68C0\u67E5\u6307\u5B9AIP\u5730\u5740\u662F\u5426\u88AB\u5C01\u7981",tags:["IP\u5730\u5740"]},d=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(n){let e={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components},{VersionWarnZH_CN:s}=e;return s||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u68C0\u67E5\u6307\u5B9A IP \u5730\u5740\u662F\u5426\u5B58\u5728\u4E8E\u5C01\u7981\u5217\u8868\u4E2D\u3002"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53C2\u6570"}),(0,t.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"const ipAddress[]"}),(0,t.jsx)(e.td,{children:"\u9700\u8981\u68C0\u67E5\u7684 IP \u5730\u5740"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"true"})," - IP \u5730\u5740\u5DF2\u88AB\u5C01\u7981",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"false"})," - IP \u5730\u5740\u672A\u88AB\u5C01\u7981"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'if (IsBanned("255.255.255.255"))\n{\n    // \u6267\u884C\u76F8\u5173\u64CD\u4F5C\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["\u5C01\u7981\u5217\u8868\u53EF\u901A\u8FC7\u67E5\u770B ",(0,t.jsx)(e.strong,{children:"bans.json"})," \u6587\u4EF6\u83B7\u53D6"]})}),"\n",(0,t.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),": \u7981\u6B62\u6307\u5B9A IP \u5730\u5740\u5728\u8BBE\u5B9A\u65F6\u95F4\u5185\u8FDE\u63A5\u670D\u52A1\u5668"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"UnBlockIpAddress",children:"UnBlockIpAddress"}),": \u89E3\u9664\u5DF2\u5C01\u7981\u7684 IP \u5730\u5740"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"Ban",children:"Ban"}),": \u5C01\u7981\u6307\u5B9A\u73A9\u5BB6"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"BanEx",children:"BanEx"}),": \u4F7F\u7528\u81EA\u5B9A\u4E49\u539F\u56E0\u5C01\u7981\u73A9\u5BB6"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"Kick",children:"Kick"}),": \u8E22\u51FA\u6307\u5B9A\u73A9\u5BB6"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"ClearBanList",children:"ClearBanList"}),": \u6E05\u7A7A\u5C01\u7981\u5217\u8868"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var i=s(67294);let t={},r=i.createContext(t);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
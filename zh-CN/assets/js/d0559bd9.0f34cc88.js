"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56656"],{38498:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/EnablePlayerCameraTarget","title":"EnablePlayerCameraTarget","description":"\u5207\u6362\u73A9\u5BB6\u7684\u89C6\u89D2\u76EE\u6807\u529F\u80FD\uFF08\u9ED8\u8BA4\u7981\u7528\u4EE5\u8282\u7701\u5E26\u5BBD\uFF09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/EnablePlayerCameraTarget.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnablePlayerCameraTarget","permalink":"/zh-CN/docs/scripting/functions/EnablePlayerCameraTarget","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnablePlayerCameraTarget.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"EnablePlayerCameraTarget","sidebar_label":"EnablePlayerCameraTarget","description":"\u5207\u6362\u73A9\u5BB6\u7684\u89C6\u89D2\u76EE\u6807\u529F\u80FD\uFF08\u9ED8\u8BA4\u7981\u7528\u4EE5\u8282\u7701\u5E26\u5BBD\uFF09\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"EnableAllAnimations","permalink":"/zh-CN/docs/scripting/functions/EnableAllAnimations"},"next":{"title":"EnableStuntBonusForAll","permalink":"/zh-CN/docs/scripting/functions/EnableStuntBonusForAll"}}'),a=n("85893"),l=n("50065");let i={title:"EnablePlayerCameraTarget",sidebar_label:"EnablePlayerCameraTarget",description:"\u5207\u6362\u73A9\u5BB6\u7684\u89C6\u89D2\u76EE\u6807\u529F\u80FD\uFF08\u9ED8\u8BA4\u7981\u7528\u4EE5\u8282\u7701\u5E26\u5BBD\uFF09\u3002",tags:["\u73A9\u5BB6"]},s=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(r.p,{children:"\u5207\u6362\u73A9\u5BB6\u7684\u89C6\u89D2\u76EE\u6807\u68C0\u6D4B\u529F\u80FD\u3002\u8BE5\u529F\u80FD\u9ED8\u8BA4\u7981\u7528\u4EE5\u8282\u7701\u7F51\u7EDC\u5E26\u5BBD\u3002"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"\u540D\u79F0"}),(0,a.jsx)(r.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"\u8981\u8BBE\u7F6E\u89C6\u89D2\u76EE\u6807\u529F\u80FD\u7684\u73A9\u5BB6 ID"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["bool",":enable"]}),(0,a.jsx)(r.td,{children:"true \u542F\u7528 / false \u7981\u7528"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,a.jsx)(r.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n     EnablePlayerCameraTarget(playerid, true); // \u73A9\u5BB6\u8FDE\u63A5\u65F6\u542F\u7528\u89C6\u89D2\u76EE\u6807\u529F\u80FD\n     return 1;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"IsPlayerCameraTargetEnabled",children:"IsPlayerCameraTargetEnabled"}),": \u68C0\u67E5\u73A9\u5BB6\u89C6\u89D2\u76EE\u6807\u662F\u5426\u542F\u7528"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": \u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u89C2\u5BDF\u7684\u8F66\u8F86 ID"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraTargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": \u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u89C2\u5BDF\u7684\u5176\u4ED6\u73A9\u5BB6 ID"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u524D\u5411\u5411\u91CF"]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var t=n(67294);let a={},l=t.createContext(a);function i(e){let r=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);
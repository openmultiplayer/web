"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61528"],{29077:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/IsGangZoneFlashingForPlayer","title":"IsGangZoneFlashingForPlayer","description":"\u68C0\u67E5\u5E2E\u6D3E\u533A\u57DF\u662F\u5426\u5BF9\u73A9\u5BB6\u95EA\u70C1","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/IsGangZoneFlashingForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsGangZoneFlashingForPlayer","permalink":"/zh-CN/docs/scripting/functions/IsGangZoneFlashingForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsGangZoneFlashingForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u5E2E\u6D3E\u533A\u57DF"}],"version":"current","frontMatter":{"title":"IsGangZoneFlashingForPlayer","sidebar_label":"IsGangZoneFlashingForPlayer","description":"\u68C0\u67E5\u5E2E\u6D3E\u533A\u57DF\u662F\u5426\u5BF9\u73A9\u5BB6\u95EA\u70C1","tags":["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF"]},"sidebar":"docsSidebar","previous":{"title":"IsBanned","permalink":"/zh-CN/docs/scripting/functions/IsBanned"},"next":{"title":"IsGangZoneVisibleForPlayer","permalink":"/zh-CN/docs/scripting/functions/IsGangZoneVisibleForPlayer"}}'),l=r("85893"),i=r("50065");let o={title:"IsGangZoneFlashingForPlayer",sidebar_label:"IsGangZoneFlashingForPlayer",description:"\u68C0\u67E5\u5E2E\u6D3E\u533A\u57DF\u662F\u5426\u5BF9\u73A9\u5BB6\u95EA\u70C1",tags:["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF"]},a=void 0,t={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function c(n){let e={a:"a",br:"br",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components},{VersionWarnZH_CN:r}=e;return r||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u68C0\u67E5\u6307\u5B9A\u5E2E\u6D3E\u533A\u57DF\u662F\u5426\u6B63\u5728\u5BF9\u73A9\u5BB6\u95EA\u70C1\u3002"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u53C2\u6570"}),(0,l.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"playerid"}),(0,l.jsx)(e.td,{children:"\u9700\u8981\u68C0\u67E5\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"zoneid"}),(0,l.jsx)(e.td,{children:"\u5E2E\u6D3E\u533A\u57DF ID"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"true"})," - \u5E2E\u6D3E\u533A\u57DF\u6B63\u5728\u5BF9\u73A9\u5BB6\u95EA\u70C1",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.strong,{children:"false"})," - \u5E2E\u6D3E\u533A\u57DF\u672A\u5BF9\u73A9\u5BB6\u95EA\u70C1"]}),"\n",(0,l.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": \u9500\u6BC1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u663E\u793A\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": \u5BF9\u73A9\u5BB6\u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": \u5BF9\u6240\u6709\u73A9\u5BB6\u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": \u4F7F\u5E2E\u6D3E\u533A\u57DF\u5BF9\u73A9\u5BB6\u95EA\u70C1"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": \u4F7F\u5E2E\u6D3E\u533A\u57DF\u5BF9\u6240\u6709\u73A9\u5BB6\u95EA\u70C1"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": \u505C\u6B62\u5E2E\u6D3E\u533A\u57DF\u5BF9\u73A9\u5BB6\u95EA\u70C1"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": \u505C\u6B62\u5E2E\u6D3E\u533A\u57DF\u5BF9\u6240\u6709\u73A9\u5BB6\u95EA\u70C1"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": \u9A8C\u8BC1\u5E2E\u6D3E\u533A\u57DF\u6709\u6548\u6027"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": \u68C0\u67E5\u73A9\u5BB6\u662F\u5426\u5728\u5E2E\u6D3E\u533A\u57DF\u5185"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": \u68C0\u67E5\u5E2E\u6D3E\u533A\u57DF\u662F\u5426\u5BF9\u73A9\u5BB6\u53EF\u89C1"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},50065:function(n,e,r){r.d(e,{Z:function(){return a},a:function(){return o}});var s=r(67294);let l={},i=s.createContext(l);function o(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);
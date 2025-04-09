"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68473"],{73436:function(n,e,l){l.r(e),l.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/functions/GangZoneFlashForAll","title":"GangZoneFlashForAll","description":"\u4E3A\u6240\u6709\u73A9\u5BB6\u95EA\u70C1\u663E\u793A\u5E2E\u6D3E\u533A\u57DF\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GangZoneFlashForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneFlashForAll","permalink":"/zh-CN/docs/scripting/functions/GangZoneFlashForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneFlashForAll.md","tags":[{"inline":true,"label":"\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u5E2E\u6D3E\u533A\u57DF"}],"version":"current","frontMatter":{"title":"GangZoneFlashForAll","sidebar_label":"GangZoneFlashForAll","description":"\u4E3A\u6240\u6709\u73A9\u5BB6\u95EA\u70C1\u663E\u793A\u5E2E\u6D3E\u533A\u57DF\u3002","tags":["\u5E2E\u6D3E\u533A\u57DF"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneDestroy","permalink":"/zh-CN/docs/scripting/functions/GangZoneDestroy"},"next":{"title":"GangZoneFlashForPlayer","permalink":"/zh-CN/docs/scripting/functions/GangZoneFlashForPlayer"}}'),o=l("85893"),s=l("50065");let t={title:"GangZoneFlashForAll",sidebar_label:"GangZoneFlashForAll",description:"\u4E3A\u6240\u6709\u73A9\u5BB6\u95EA\u70C1\u663E\u793A\u5E2E\u6D3E\u533A\u57DF\u3002",tags:["\u5E2E\u6D3E\u533A\u57DF"]},i=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,o.jsx)(e.p,{children:"\u4E3A\u6240\u6709\u73A9\u5BB6\u95EA\u70C1\u663E\u793A\u5E2E\u6D3E\u533A\u57DF\u3002"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"\u53C2\u6570\u540D"}),(0,o.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"zoneid"}),(0,o.jsx)(e.td,{children:"\u8981\u95EA\u70C1\u7684\u533A\u57DF ID"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"flashColour"}),(0,o.jsx)(e.td,{children:"\u95EA\u70C1\u989C\u8272\uFF08RGBA \u683C\u5F0F\u7684\u6574\u578B\u6216\u5341\u516D\u8FDB\u5236\u503C\uFF0C\u652F\u6301\u900F\u660E\u5EA6\u901A\u9053\uFF09"})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,o.jsx)(e.p,{children:"\u8BE5\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GangZoneFlashForAll(gGangZoneId, 0xFF0000FF); // \u7EA2\u8272\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": \u521B\u5EFA\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": \u9500\u6BC1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u663E\u793A\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": \u4E3A\u73A9\u5BB6\u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": \u4E3A\u5355\u4E2A\u73A9\u5BB6\u95EA\u70C1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": \u505C\u6B62\u4E3A\u73A9\u5BB6\u95EA\u70C1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": \u505C\u6B62\u4E3A\u6240\u6709\u73A9\u5BB6\u95EA\u70C1\u5E2E\u6D3E\u533A\u57DF"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},50065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return t}});var r=l(67294);let o={},s=r.createContext(o);function t(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
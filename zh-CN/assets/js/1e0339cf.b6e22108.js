"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84047"],{21456:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterGangZone","title":"OnPlayerEnterGangZone","description":"\u5F53\u73A9\u5BB6\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u51FD\u6570","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterGangZone","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerEnterGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterGangZone.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u5E2E\u6D3E\u533A\u57DF"}],"version":"current","frontMatter":{"title":"OnPlayerEnterGangZone","sidebar_label":"OnPlayerEnterGangZone","description":"\u5F53\u73A9\u5BB6\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u51FD\u6570","tags":["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterCheckpoint","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerEnterCheckpoint"},"next":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"}}'),l=r("85893"),i=r("50065");let a={title:"OnPlayerEnterGangZone",sidebar_label:"OnPlayerEnterGangZone",description:"\u5F53\u73A9\u5BB6\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u51FD\u6570",tags:["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF"]},s=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnZH_CN:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{name:"\u56DE\u8C03",version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u5F53\u73A9\u5BB6\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u51FD\u6570"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF\u7684\u73A9\u5BB6ID"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"\u73A9\u5BB6\u8FDB\u5165\u7684\u5E2E\u6D3E\u533A\u57DFID"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u56DE\u8C03\u59CB\u7EC8\u5728\u6E38\u620F\u6A21\u5F0F\u4E2D\u4F18\u5148\u89E6\u53D1"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "\u4F60\u6B63\u5728\u8FDB\u5165\u5E2E\u6D3E\u533A\u57DF %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u56DE\u8C03\u51FD\u6570\u53EF\u80FD\u4E0E\u672C\u56DE\u8C03\u76F8\u5173\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeaveGangZone",children:"OnPlayerLeaveGangZone"}),": \u5F53\u73A9\u5BB6\u79BB\u5F00\u5E2E\u6D3E\u533A\u57DF\u65F6\u89E6\u53D1"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u51FD\u6570\u53EF\u80FD\u4E0E\u672C\u56DE\u8C03\u51FD\u6570\u76F8\u5173\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": \u521B\u5EFA\u5E2E\u6D3E\u533A\u57DF\uFF08\u5F69\u8272\u96F7\u8FBE\u533A\u57DF\uFF09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": \u9500\u6BC1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/UseGangZoneCheck",children:"UseGangZoneCheck"}),": \u542F\u7528\u73A9\u5BB6\u8FDB\u5165\u8BE5\u533A\u57DF\u65F6\u7684\u56DE\u8C03\u68C0\u6D4B"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var t=r(67294);let l={},i=t.createContext(l);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
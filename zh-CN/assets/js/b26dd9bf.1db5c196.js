"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6805"],{13462:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SetPlayerTeam","title":"SetPlayerTeam","description":"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5C5E\u7684\u961F\u4F0D\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerTeam.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerTeam","permalink":"/zh-CN/docs/scripting/functions/SetPlayerTeam","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerTeam.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SetPlayerTeam","sidebar_label":"SetPlayerTeam","description":"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5C5E\u7684\u961F\u4F0D\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerSpecialAction","permalink":"/zh-CN/docs/scripting/functions/SetPlayerSpecialAction"},"next":{"title":"SetPlayerTime","permalink":"/zh-CN/docs/scripting/functions/SetPlayerTime"}}'),r=t("85893"),l=t("50065");let s={title:"SetPlayerTeam",sidebar_label:"SetPlayerTeam",description:"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5C5E\u7684\u961F\u4F0D\u3002",tags:["\u73A9\u5BB6"]},a=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u8BBE\u7F6E\u73A9\u5BB6\u6240\u5C5E\u7684\u961F\u4F0D\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u8BBE\u7F6E\u961F\u4F0D\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"teamid"}),(0,r.jsx)(n.td,{children:"\u76EE\u6807\u961F\u4F0D\u7F16\u53F7\u3002\u4F7F\u7528 NO_TEAM \u53EF\u79FB\u9664\u73A9\u5BB6\u5F53\u524D\u961F\u4F0D\u5F52\u5C5E"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u51FD\u6570\u6CA1\u6709\u7279\u5B9A\u8FD4\u56DE\u503C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // \u73A9\u5BB6\u751F\u6210\u65F6\u5C06\u5176\u961F\u4F0D\u8BBE\u4E3A4\n    SetPlayerTeam(playerid, 4);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u540C\u961F\u4F0D\u73A9\u5BB6\u4E4B\u95F4\u65E0\u6CD5\u9020\u6210\u4F24\u5BB3\uFF08\u4F7F\u7528\u5272\u5589\u5200\u9664\u5916\uFF09"}),"\n",(0,r.jsxs)(n.li,{children:["\u540C\u961F\u4F0D\u73A9\u5BB6\u9A7E\u9A76\u7684\u8F66\u8F86\u9ED8\u8BA4\u514D\u75AB\u53CB\u65B9\u4F24\u5BB3\uFF0C\u53EF\u901A\u8FC7",(0,r.jsx)(n.a,{href:"EnableVehicleFriendlyFire",children:"EnableVehicleFriendlyFire"}),"\u542F\u7528"]}),"\n",(0,r.jsx)(n.li,{children:"\u9ED8\u8BA4\u65E0\u961F\u4F0D\u72B6\u6001\u4F7F\u7528 255\uFF08\u6216 NO_TEAM\uFF09\uFF0C\u800C\u975E 0 \u53F7\u961F\u4F0D"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerTeam",children:"GetPlayerTeam"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5C5E\u961F\u4F0D"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetTeamCount",children:"SetTeamCount"}),": \u8BBE\u7F6E\u670D\u52A1\u5668\u961F\u4F0D\u603B\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EnableVehicleFriendlyFire",children:"EnableVehicleFriendlyFire"}),": \u542F\u7528\u8F66\u8F86\u53CB\u519B\u4F24\u5BB3\u529F\u80FD"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},l=i.createContext(r);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
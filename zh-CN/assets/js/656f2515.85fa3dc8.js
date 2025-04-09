"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21716"],{74782:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/HideMenuForPlayer","title":"HideMenuForPlayer","description":"\u9690\u85CF\u73A9\u5BB6\u7684\u83DC\u5355","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/HideMenuForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideMenuForPlayer","permalink":"/zh-CN/docs/scripting/functions/HideMenuForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideMenuForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u83DC\u5355","permalink":"/zh-CN/docs/tags/\u83DC\u5355"}],"version":"current","frontMatter":{"title":"HideMenuForPlayer","sidebar_label":"HideMenuForPlayer","description":"\u9690\u85CF\u73A9\u5BB6\u7684\u83DC\u5355","tags":["\u73A9\u5BB6","\u83DC\u5355"]},"sidebar":"docsSidebar","previous":{"title":"HideGameTextForPlayer","permalink":"/zh-CN/docs/scripting/functions/HideGameTextForPlayer"},"next":{"title":"HideObjectForPlayer","permalink":"/zh-CN/docs/scripting/functions/HideObjectForPlayer"}}'),t=r("85893"),l=r("50065");let d={title:"HideMenuForPlayer",sidebar_label:"HideMenuForPlayer",description:"\u9690\u85CF\u73A9\u5BB6\u7684\u83DC\u5355",tags:["\u73A9\u5BB6","\u83DC\u5355"]},s=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u9690\u85CF\u6307\u5B9A\u73A9\u5BB6\u7684\u83DC\u5355\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,t.jsxs)(n.td,{children:["\u8981\u9690\u85CF\u7684\u83DC\u5355 ID\u3002\u7531 CreateMenu \u751F\u6210\u5E76\u4F20\u9012\u7ED9",(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),"\u56DE\u8C03\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u9690\u85CF\u83DC\u5355\u7684\u73A9\u5BB6 ID"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/menuhide", true) == 0)\n    {\n        new Menu:myMenu = GetPlayerMenu(playerid);\n        HideMenuForPlayer(myMenu, playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"\u5982\u679C\u4F20\u5165\u65E0\u6548\u7684\u83DC\u5355 ID\uFF0C\u4F1A\u5BFC\u81F4\u670D\u52A1\u7AEF\u548C\u73A9\u5BB6\u5BA2\u6237\u7AEF\u5D29\u6E83\uFF08\u6B64\u95EE\u9898\u5DF2\u5728 open.mp \u4E2D\u4FEE\u590D\uFF09"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u8BE5\u51FD\u6570\u59CB\u7EC8\u9700\u8981\u83DC\u5355 ID \u53C2\u6570\uFF0C\u4F46\u5728 SA",":MP"," \u4E2D\u8BE5\u53C2\u6570\u672A\u88AB\u5B9E\u9645\u4F7F\u7528\u3002\u65E0\u8BBA\u4F20\u5165\u4EFB\u4F55\u503C\uFF0C\u90FD\u4F1A\u5173\u95ED\u73A9\u5BB6\u5F53\u524D\u6B63\u5728\u67E5\u770B\u7684\u83DC\u5355\u3002"]}),(0,t.jsx)(n.p,{children:"\u65E7\u4EE3\u7801\u53EF\u80FD\u5982\u4E0B\u6240\u793A\uFF1A"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(gShopMenu, playerid);\n'})}),(0,t.jsx)(n.p,{children:"\u8FD9\u79CD\u5199\u6CD5\u4F1A\u59CB\u7EC8\u5173\u95ED\u73A9\u5BB6\u5F53\u524D\u67E5\u770B\u7684\u83DC\u5355\uFF0C\u65E0\u8BBA\u5B9E\u9645\u663E\u793A\u7684\u662F\u54EA\u4E2A\u83DC\u5355\u3002\u73B0\u5728\u60A8\u9700\u8981\u8BB0\u5F55\u73A9\u5BB6\u5F53\u524D\u67E5\u770B\u7684\u83DC\u5355\uFF0C\u6216\u76F4\u63A5\u83B7\u53D6\uFF1A"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(GetPlayerMenu(playerid), playerid);\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": \u521B\u5EFA\u83DC\u5355"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": \u4E3A\u6307\u5B9A\u83DC\u5355\u6DFB\u52A0\u9009\u9879"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": \u8BBE\u7F6E\u83DC\u5355\u5217\u6807\u9898"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A\u83DC\u5355"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var i=r(67294);let t={},l=i.createContext(t);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
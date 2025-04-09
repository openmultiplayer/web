"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63887"],{35804:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"scripting/functions/GameTextForPlayer","title":"GameTextForPlayer","description":"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6301\u7EED\u7279\u5B9A\u65F6\u95F4\u7684\'\u6E38\u620F\u6587\u672C\'\uFF08\u5C4F\u5E55\u6587\u672C\uFF09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GameTextForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GameTextForPlayer","permalink":"/zh-CN/docs/scripting/functions/GameTextForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GameTextForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u6E38\u620F\u6587\u672C","permalink":"/zh-CN/docs/tags/\u6E38\u620F\u6587\u672C"}],"version":"current","frontMatter":{"title":"GameTextForPlayer","sidebar_label":"GameTextForPlayer","description":"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6301\u7EED\u7279\u5B9A\u65F6\u95F4\u7684\'\u6E38\u620F\u6587\u672C\'\uFF08\u5C4F\u5E55\u6587\u672C\uFF09\u3002","tags":["\u73A9\u5BB6","\u6E38\u620F\u6587\u672C"]},"sidebar":"docsSidebar","previous":{"title":"GameTextForAll","permalink":"/zh-CN/docs/scripting/functions/GameTextForAll"},"next":{"title":"GangZoneCreate","permalink":"/zh-CN/docs/scripting/functions/GangZoneCreate"}}'),l=r("85893"),i=r("50065");let s={title:"GameTextForPlayer",sidebar_label:"GameTextForPlayer",description:"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6301\u7EED\u7279\u5B9A\u65F6\u95F4\u7684'\u6E38\u620F\u6587\u672C'\uFF08\u5C4F\u5E55\u6587\u672C\uFF09\u3002",tags:["\u73A9\u5BB6","\u6E38\u620F\u6587\u672C"]},d=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6301\u7EED\u7279\u5B9A\u65F6\u95F4\u7684'\u6E38\u620F\u6587\u672C'\uFF08\u5C4F\u5E55\u6587\u672C\uFF09\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u76EE\u6807\u73A9\u5BB6\u7684 ID"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"const format[]"}),(0,l.jsx)(n.td,{children:"\u8981\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"\u6587\u672C\u663E\u793A\u6301\u7EED\u65F6\u95F4\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"style"}),(0,l.jsxs)(n.td,{children:["\u6587\u672C\u663E\u793A\u7684",(0,l.jsx)(n.a,{href:"../resources/gametextstyles",children:"\u6837\u5F0F"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,l.jsx)(n.td,{children:"\u4EFB\u610F\u6570\u91CF\u7684\u4E0D\u9650\u7C7B\u578B\u7684\u53C2\u6570"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\uFF08\u5373\u4F7F\u6837\u5F0F/\u65F6\u95F4\u53C2\u6570\u65E0\u6548\u4E5F\u4F1A\u8FD4\u56DE\u6210\u529F\uFF0C\u4F46\u4E0D\u4F1A\u663E\u793A\u6587\u672C\uFF0C\u53EF\u80FD\u5F15\u53D1\u5D29\u6E83\uFF09"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u5B57\u7B26\u4E32\u4E3A\u7A7A\u6216\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GameTextForPlayer(playerid, "Wasted", 5000, 2);\n\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        new name[MAX_PLAYER_NAME];\n        GetPlayerName(playerid, name, sizeof(name));\n\n        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1A\u6E38\u620F\u6587\u672C\u4E2D\u6CE2\u6D6A\u53F7(",(0,l.jsx)(n.code,{children:"~"}),")\u7684\u6570\u91CF\u4E3A\u5947\u6570\u53EF\u80FD\u5BFC\u81F4\u5BA2\u6237\u7AEF\u5D29\u6E83\u3002\u989C\u8272\u4EE3\u7801\uFF08\u5982",(0,l.jsx)(n.del,{children:"r"}),"\uFF09\u5728\u8D85\u8FC7 255 \u5B57\u7B26\u540E\u4F7F\u7528\u4F1A\u5F15\u53D1\u5D29\u6E83\u3002"]}),(0,l.jsxs)(n.p,{children:["\u5B57\u7B26\u4E32\u672B\u5C3E\u7684\u7A7A\u683C\u4F1A\u5BFC\u81F4\u5931\u6548\u3002\u4F8B\u5982\uFF1A",(0,l.jsx)(n.code,{children:'"\u7206\u5934 "'})," \u4F1A\u5931\u8D25\uFF0C\u5E94\u6539\u4E3A ",(0,l.jsx)(n.code,{children:'"\u7206\u5934"'})," \u6216 ",(0,l.jsx)(n.code,{children:'"\u7206\u5934_"'}),"\uFF08\u4F7F\u7528\u4E0B\u5212\u7EBF\u66FF\u4EE3\u7A7A\u683C\uFF09\u3002"]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": \u505C\u6B62\u4E3A\u73A9\u5BB6\u663E\u793A\u6E38\u620F\u6587\u672C\u6837\u5F0F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GameTextForAll",children:"GameTextForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u663E\u793A\u6E38\u620F\u6587\u672C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": \u505C\u6B62\u4E3A\u6240\u6709\u73A9\u5BB6\u663E\u793A\u6E38\u620F\u6587\u672C\u6837\u5F0F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetGameText",children:"GetGameText"}),": \u83B7\u53D6\u6307\u5B9A\u6E38\u620F\u6587\u672C\u6837\u5F0F\u7684\u4FE1\u606F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"HasGameText",children:"HasGameText"}),": \u68C0\u67E5\u73A9\u5BB6\u5F53\u524D\u662F\u5426\u663E\u793A\u6307\u5B9A\u6837\u5F0F\u7684\u6E38\u620F\u6587\u672C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": \u4E3A\u6240\u6709\u73A9\u5BB6\u663E\u793A\u6587\u672C\u7ED8\u56FE"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/gametextstyles",children:"\u6E38\u620F\u6587\u672C\u6837\u5F0F"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
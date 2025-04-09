"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56261"],{40053:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickTextDraw","title":"OnPlayerClickTextDraw","description":"\u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u6216\u6309ESC\u952E\u53D6\u6D88\u9009\u62E9\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerClickTextDraw.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickTextDraw","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerClickTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickTextDraw.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"OnPlayerClickTextDraw","sidebar_label":"OnPlayerClickTextDraw","description":"\u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u6216\u6309ESC\u952E\u53D6\u6D88\u9009\u62E9\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03","tags":["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickPlayerTextDraw","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw"},"next":{"title":"OnPlayerCommandText","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerCommandText"}}'),l=r("85893"),a=r("50065");let i={title:"OnPlayerClickTextDraw",sidebar_label:"OnPlayerClickTextDraw",description:"\u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u6216\u6309ESC\u952E\u53D6\u6D88\u9009\u62E9\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03",tags:["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE"]},c=void 0,s={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function x(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u6216\u6309ESC\u952E\u53D6\u6D88\u9009\u62E9\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u89E6\u53D1\u70B9\u51FB\u64CD\u4F5C\u7684\u73A9\u5BB6ID"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Text",":clickedid"]}),(0,l.jsx)(n.td,{children:"\u88AB\u70B9\u51FB\u7684\u6587\u672C\u7ED8\u56FEID\uFF08\u53D6\u6D88\u9009\u62E9\u65F6\u8FD4\u56DEINVALID_TEXT_DRAW\uFF09"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u56DE\u8C03\u5728\u6EE4\u955C\u811A\u672C\u4E2D\u603B\u662F\u4F18\u5148\u89E6\u53D1\uFF0C\u8FD4\u56DE1\u5C06\u963B\u6B62\u5176\u4ED6\u811A\u672C\u5904\u7406\u6B64\u4E8B\u4EF6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new Text:gTextDraw;\n\npublic OnGameModeInit()\n{\n    gTextDraw = TextDrawCreate(10.000000, 141.000000, "\u6211\u7684\u6587\u672C");\n    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);\n    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);\n    TextDrawBackgroundColor(gTextDraw, 0x000000FF);\n    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);\n    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);\n    TextDrawColor(gTextDraw, -1);\n    TextDrawSetProportional(gTextDraw, true);\n    TextDrawSetShadow(gTextDraw, 1);\n    TextDrawSetSelectable(gTextDraw, true);\n    return 1;\n}\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (newkeys == KEY_SUBMISSION)\n    {\n        TextDrawShowForPlayer(playerid, gTextDraw);\n        SelectTextDraw(playerid, 0xFF4040AA);\n    }\n    return 1;\n}\n\npublic OnPlayerClickTextDraw(playerid, Text:clickedid)\n{\n    if (clickedid == gTextDraw)\n    {\n        SendClientMessage(playerid, 0xFFFFFFAA, "\u60A8\u70B9\u51FB\u4E86\u6587\u672C\u7ED8\u56FE");\n        CancelSelectTextDraw(playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u70B9\u51FB\u533A\u57DF\u7531",(0,l.jsx)(n.a,{href:"../functions/TextDrawTextSize",children:"TextDrawTextSize"}),"\u5B9A\u4E49"]}),"\n",(0,l.jsx)(n.li,{children:"\u8BE5\u51FD\u6570\u7684x/y\u53C2\u6570\u503C\u4E0D\u53EF\u4E3A\u96F6\u6216\u8D1F\u6570"}),"\n",(0,l.jsxs)(n.li,{children:["\u7981\u6B62\u65E0\u6761\u4EF6\u8C03\u7528",(0,l.jsx)(n.a,{href:"../functions/CancelSelectTextDraw",children:"CancelSelectTextDraw"}),"\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u65E0\u9650\u5FAA\u73AF"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u56DE\u8C03\u53EF\u80FD\u4E0E\u5F53\u524D\u56DE\u8C03\u5B58\u5728\u5173\u8054\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),"\uFF1A\u5F53\u73A9\u5BB6\u70B9\u51FB\u4E2A\u4EBA\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerClickPlayer",children:"OnPlayerClickPlayer"}),"\uFF1A\u5F53\u73A9\u5BB6\u70B9\u51FB\u5176\u4ED6\u73A9\u5BB6\u65F6\u89E6\u53D1"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u51FD\u6570\u53EF\u80FD\u4E0E\u5F53\u524D\u56DE\u8C03\u76F8\u5173\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SelectTextDraw",children:"SelectTextDraw"}),"\uFF1A\u542F\u7528\u9F20\u6807\u9009\u62E9\u6587\u672C\u7ED8\u56FE\u6A21\u5F0F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CancelSelectTextDraw",children:"CancelSelectTextDraw"}),"\uFF1A\u53D6\u6D88\u6587\u672C\u7ED8\u56FE\u9009\u62E9\u6A21\u5F0F"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(67294);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
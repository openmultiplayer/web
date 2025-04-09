"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74754"],{93624:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetFont","title":"PlayerTextDrawGetFont","description":"\u83B7\u53D6\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawGetFont.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetFont","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetFont","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetFont.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"},{"inline":true,"label":"\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetFont","sidebar_label":"PlayerTextDrawGetFont","description":"\u83B7\u53D6\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53","tags":["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetColour","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetColour"},"next":{"title":"PlayerTextDrawGetLetterSize","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetLetterSize"}}'),l=t("85893"),a=t("50065");let i={title:"PlayerTextDrawGetFont",sidebar_label:"PlayerTextDrawGetFont",description:"\u83B7\u53D6\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53",tags:["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},s=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarnZH_CN:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(r.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"\u73A9\u5BB6\u7684 ID"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"\u8981\u83B7\u53D6\u5B57\u4F53\u7684\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684 ID"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(r.p,{children:"\u8FD4\u56DE\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");\n    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n\n    new TEXT_DRAW_FONT:font = PlayerTextDrawGetFont(playerid, welcomeText[playerid]);\n    printf("Font: %d", font); // Font: 2\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawCreate",children:"PlayerTextDrawCreate"}),": \u521B\u5EFA\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": \u9500\u6BC1\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u6587\u672C\u989C\u8272"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u65B9\u6846\u989C\u8272"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u80CC\u666F\u989C\u8272"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u5BF9\u9F50\u65B9\u5F0F"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u5B57\u7B26\u5C3A\u5BF8"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u6587\u672C\u5C3A\u5BF8\uFF08\u6216 PlayerTextDrawSetSelectable \u7684\u53EF\u70B9\u51FB\u533A\u57DF\uFF09"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": \u5207\u6362\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u8F6E\u5ED3\u663E\u793A"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u9634\u5F71"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": \u6309\u6BD4\u4F8B\u7F29\u653E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u7B26\u95F4\u8DDD"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": \u5207\u6362\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65B9\u6846\u663E\u793A"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u6587\u672C\u5185\u5BB9"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": \u663E\u793A\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": \u9690\u85CF\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": \u68C0\u67E5\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u662F\u5426\u5BF9\u73A9\u5BB6\u53EF\u89C1"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": \u68C0\u67E5\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u662F\u5426\u6709\u6548"]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return i}});var n=t(67294);let l={},a=n.createContext(l);function i(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);
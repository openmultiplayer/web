"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21402"],{38111:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>x,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/TextDrawSetProportional","title":"TextDrawSetProportional","description":"\u8BE5\u51FD\u6570\u7528\u4E8E\u5C06\u6587\u672C\u95F4\u8DDD\u6309\u6BD4\u4F8B\u7F29\u653E\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawSetProportional.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetProportional","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetProportional","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawSetProportional.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawSetProportional","sidebar_label":"TextDrawSetProportional","description":"\u8BE5\u51FD\u6570\u7528\u4E8E\u5C06\u6587\u672C\u95F4\u8DDD\u6309\u6BD4\u4F8B\u7F29\u653E\u3002","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPreviewVehicleColours","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetPreviewVehicleColours"},"next":{"title":"TextDrawSetSelectable","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetSelectable"}}'),i=t("85893"),l=t("50065");let s={title:"TextDrawSetProportional",sidebar_label:"TextDrawSetProportional",description:"\u8BE5\u51FD\u6570\u7528\u4E8E\u5C06\u6587\u672C\u95F4\u8DDD\u6309\u6BD4\u4F8B\u7F29\u653E\u3002",tags:["\u6587\u672C\u7ED8\u56FE"]},a=void 0,o={},x=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(r.p,{children:"\u8BE5\u51FD\u6570\u7528\u4E8E\u5C06\u6587\u672C\u95F4\u8DDD\u6309\u6BD4\u4F8B\u7F29\u653E\u3002\u5F53\u4F7F\u7528 TextDrawLetterSize \u65F6\u7279\u522B\u6709\u7528\uFF0C\u53EF\u786E\u4FDD\u5B57\u7B26\u95F4\u8DDD\u5747\u5300\u5206\u5E03\u3002"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"\u9700\u8981\u8BBE\u7F6E\u6BD4\u4F8B\u7F29\u653E\u7684\u6587\u672C\u7ED8\u56FE ID"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["bool",":proportional"]}),(0,i.jsx)(r.td,{children:"\u8BBE\u4E3A'true'\u542F\u7528\u6BD4\u4F8B\u7F29\u653E\uFF0C'false'\u7981\u7528"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(r.p,{children:"\u672C\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "\u793A\u4F8B\u6587\u672C\u7ED8\u56FE");\n    TextDrawSetProportional(gMyTextdraw, true);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u6BD4\u4F8B\u7F29\u653E\u9ED8\u8BA4\u542F\u7528\uFF08\u8BBE\u4E3A",(0,i.jsx)(r.strong,{children:"true"}),"\uFF09\uFF0C\u82E5\u4E0D\u9700\u8981\u7981\u7528\u53EF\u8DF3\u8FC7\u672C\u51FD\u6570"]}),"\n",(0,i.jsxs)(r.li,{children:["\u4FEE\u6539\u5DF2\u663E\u793A\u7684\u6587\u672C\u7ED8\u56FE\u6BD4\u4F8B\u65F6\u65E0\u9700\u91CD\u5EFA\uFF0C\u53EA\u9700\u901A\u8FC7",(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),"\u5237\u65B0\u5373\u53EF\u751F\u6548"]}),"\n"]})}),"\n",(0,i.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": \u521B\u5EFA\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": \u9500\u6BC1\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawIsProportional",children:"TextDrawIsProportional"}),": \u68C0\u6D4B\u6587\u672C\u7ED8\u56FE\u662F\u5426\u542F\u7528\u6BD4\u4F8B\u7F29\u653E"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawColor",children:"TextDrawColor"}),": \u8BBE\u7F6E\u6587\u672C\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": \u8BBE\u7F6E\u6587\u672C\u6846\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": \u8BBE\u7F6E\u6587\u672C\u80CC\u666F\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": \u8BBE\u7F6E\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u6587\u672C\u5B57\u4F53\u6837\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": \u8BBE\u7F6E\u6587\u672C\u5B57\u7B26\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": \u8BBE\u7F6E\u6587\u672C\u6846\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": \u8BBE\u7F6E\u6587\u672C\u63CF\u8FB9\u6548\u679C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": \u8BBE\u7F6E\u6587\u672C\u9634\u5F71\u6548\u679C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": \u5207\u6362\u6587\u672C\u6846\u663E\u793A\u72B6\u6001"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": \u66F4\u65B0\u6587\u672C\u5185\u5BB9"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": \u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": \u5BF9\u6307\u5B9A\u73A9\u5BB6\u9690\u85CF\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": \u5168\u5C40\u663E\u793A\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": \u5168\u5C40\u9690\u85CF\u6587\u672C"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return a},a:function(){return s}});var n=t(67294);let i={},l=n.createContext(i);function s(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);
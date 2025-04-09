"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70408"],{82439:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/TextDrawSetShadow","title":"TextDrawSetShadow","description":"\u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u4E2D\u6587\u672C\u9634\u5F71\u7684\u5927\u5C0F\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawSetShadow.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetShadow","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetShadow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawSetShadow.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawSetShadow","sidebar_label":"TextDrawSetShadow","description":"\u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u4E2D\u6587\u672C\u9634\u5F71\u7684\u5927\u5C0F\u3002","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetSelectable","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetSelectable"},"next":{"title":"TextDrawSetString","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetString"}}'),i=t("85893"),l=t("50065");let a={title:"TextDrawSetShadow",sidebar_label:"TextDrawSetShadow",description:"\u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u4E2D\u6587\u672C\u9634\u5F71\u7684\u5927\u5C0F\u3002",tags:["\u6587\u672C\u7ED8\u56FE"]},s=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function x(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(r.p,{children:"\u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u4E2D\u6587\u672C\u9634\u5F71\u7684\u5927\u5C0F\u3002"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u540D\u79F0"}),(0,i.jsx)(r.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"\u8981\u8BBE\u7F6E\u9634\u5F71\u5927\u5C0F\u7684\u6587\u672C\u7ED8\u56FE ID"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"shadowSize"}),(0,i.jsx)(r.td,{children:"\u9634\u5F71\u7684\u5927\u5C0F\u3002\u901A\u5E38 1 \u8868\u793A\u6807\u51C6\u9634\u5F71\u5C3A\u5BF8\uFF0C0 \u8868\u793A\u5B8C\u5168\u7981\u7528\u9634\u5F71"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002\u6587\u672C\u7ED8\u56FE\u4E0D\u5B58\u5728\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "\u793A\u4F8B\u6587\u672C\u7ED8\u56FE");\n    TextDrawSetShadow(gMyTextdraw, 1);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"\u5982\u679C\u9634\u5F71\u5C3A\u5BF8\u8BBE\u7F6E\u8FC7\u5927\u8D85\u51FA\u533A\u57DF\u8303\u56F4\uFF0C\u53EF\u80FD\u4F1A\u88AB\u6587\u672C\u6846\u533A\u57DF\u622A\u65AD\u3002"})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["\u82E5\u8981\u4FEE\u6539\u5DF2\u663E\u793A\u6587\u672C\u7ED8\u56FE\u7684\u9634\u5F71\u53C2\u6570\uFF0C\u65E0\u9700\u91CD\u65B0\u521B\u5EFA\u3002\u53EA\u9700\u5728\u4FEE\u6539\u540E\u4F7F\u7528",(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),"\u5373\u53EF\u5B9E\u65F6\u66F4\u65B0\u663E\u793A\u6548\u679C\u3002"]})}),"\n",(0,i.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": \u521B\u5EFA\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": \u9500\u6BC1\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawGetShadow",children:"TextDrawGetShadow"}),": \u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u7684\u9634\u5F71\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawColor",children:"TextDrawColor"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u8FB9\u6846\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u80CC\u666F\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u5BF9\u9F50\u65B9\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53\u6837\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u7B26\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u6587\u672C\u6846\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": \u63A7\u5236\u6587\u672C\u7ED8\u56FE\u7684\u8F6E\u5ED3\u663E\u793A"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": \u542F\u7528\u6587\u672C\u7ED8\u56FE\u7684\u7B49\u6BD4\u95F4\u8DDD"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": \u5207\u6362\u6587\u672C\u7ED8\u56FE\u7684\u8FB9\u6846\u663E\u793A\u72B6\u6001"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": \u66F4\u65B0\u6587\u672C\u7ED8\u56FE\u7684\u663E\u793A\u5185\u5BB9"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": \u4E3A\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": \u5BF9\u6307\u5B9A\u73A9\u5BB6\u9690\u85CF\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": \u5411\u5168\u4F53\u73A9\u5BB6\u663E\u793A\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": \u9690\u85CF\u5168\u4F53\u73A9\u5BB6\u7684\u6587\u672C\u7ED8\u56FE"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return a}});var n=t(67294);let i={},l=n.createContext(i);function a(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29764"],{5081:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>x,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/TextDrawGetBoxColour","title":"TextDrawGetBoxColour","description":"\u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u65B9\u6846\u989C\u8272","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawGetBoxColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetBoxColour","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetBoxColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawGetBoxColour.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawGetBoxColour","sidebar_label":"TextDrawGetBoxColour","description":"\u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u65B9\u6846\u989C\u8272","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetBoxColor","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetBoxColor"},"next":{"title":"TextDrawGetColor","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetColor"}}'),i=t("85893"),o=t("50065");let l={title:"TextDrawGetBoxColour",sidebar_label:"TextDrawGetBoxColour",description:"\u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u65B9\u6846\u989C\u8272",tags:["\u6587\u672C\u7ED8\u56FE"]},s=void 0,a={},x=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarnZH_CN:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(r.p,{children:"\u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u65B9\u6846\u7684\u989C\u8272\u503C"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"\u9700\u8981\u83B7\u53D6\u65B9\u6846\u989C\u8272\u7684\u6587\u672C\u7ED8\u56FE ID"})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(r.p,{children:"\u8FD4\u56DE\u6587\u672C\u7ED8\u56FE\u7684\u65B9\u6846\u989C\u8272\u503C\uFF08RGBA \u683C\u5F0F\uFF09"}),"\n",(0,i.jsx)(r.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(123.0, 123.0, "\u793A\u4F8B\u6587\u672C");\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColour(gMyTextdraw, 0xAA0000FF);\n\n    new boxColour = TextDrawGetBoxColour(gMyTextdraw);\n    // boxColour = 0xAA0000FF\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": \u521B\u5EFA\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": \u9500\u6BC1\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBoxColour",children:"TextDrawBoxColour"}),": \u8BBE\u7F6E\u65B9\u6846\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBackgroundColour",children:"TextDrawBackgroundColour"}),": \u8BBE\u7F6E\u80CC\u666F\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u5B57\u4F53\u7C7B\u578B"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": \u8BBE\u7F6E\u5B57\u7B26\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": \u8BBE\u7F6E\u6587\u672C\u533A\u57DF\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": \u8BBE\u7F6E\u6587\u5B57\u63CF\u8FB9"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": \u8BBE\u7F6E\u9634\u5F71\u6548\u679C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": \u542F\u7528\u6BD4\u4F8B\u95F4\u8DDD"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": \u5207\u6362\u65B9\u6846\u663E\u793A"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": \u66F4\u65B0\u6587\u672C\u5185\u5BB9"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": \u4E3A\u73A9\u5BB6\u9690\u85CF"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": \u5168\u5C40\u663E\u793A"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": \u5168\u5C40\u9690\u85CF"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var n=t(67294);let i={},o=n.createContext(i);function l(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
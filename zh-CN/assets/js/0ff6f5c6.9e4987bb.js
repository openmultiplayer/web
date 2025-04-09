"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96001"],{40666:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>x,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/TextDrawTextSize","title":"TextDrawTextSize","description":"\u8C03\u6574\u6587\u672C\u7ED8\u56FE\u7684\u5C3A\u5BF8\uFF08\u5F53\u542F\u7528TextDrawUseBox\u65F6\u63A7\u5236\u6587\u672C\u6846\u5927\u5C0F\uFF0C\u6216\u914D\u5408TextDrawSetSelectable\u5B9A\u4E49\u53EF\u70B9\u51FB\u533A\u57DF\uFF09","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawTextSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawTextSize","permalink":"/zh-CN/docs/scripting/functions/TextDrawTextSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawTextSize.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawTextSize","sidebar_label":"TextDrawTextSize","description":"\u8C03\u6574\u6587\u672C\u7ED8\u56FE\u7684\u5C3A\u5BF8\uFF08\u5F53\u542F\u7528TextDrawUseBox\u65F6\u63A7\u5236\u6587\u672C\u6846\u5927\u5C0F\uFF0C\u6216\u914D\u5408TextDrawSetSelectable\u5B9A\u4E49\u53EF\u70B9\u51FB\u533A\u57DF\uFF09","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawShowForPlayer","permalink":"/zh-CN/docs/scripting/functions/TextDrawShowForPlayer"},"next":{"title":"TextDrawUseBox","permalink":"/zh-CN/docs/scripting/functions/TextDrawUseBox"}}'),i=t("85893"),l=t("50065");let s={title:"TextDrawTextSize",sidebar_label:"TextDrawTextSize",description:"\u8C03\u6574\u6587\u672C\u7ED8\u56FE\u7684\u5C3A\u5BF8\uFF08\u5F53\u542F\u7528TextDrawUseBox\u65F6\u63A7\u5236\u6587\u672C\u6846\u5927\u5C0F\uFF0C\u6216\u914D\u5408TextDrawSetSelectable\u5B9A\u4E49\u53EF\u70B9\u51FB\u533A\u57DF\uFF09",tags:["\u6587\u672C\u7ED8\u56FE"]},a=void 0,x={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsxs)(r.p,{children:["\u8C03\u6574\u6587\u672C\u7ED8\u56FE\u7684\u5C3A\u5BF8\uFF08\u5F53\u542F\u7528",(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),"\u65F6\u63A7\u5236\u6587\u672C\u6846\u5927\u5C0F\uFF0C\u6216\u914D\u5408",(0,i.jsx)(r.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),"\u5B9A\u4E49\u53EF\u70B9\u51FB\u533A\u57DF\uFF09\u3002"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Text",":textid"]}),(0,i.jsx)(r.td,{children:"\u9700\u8981\u8C03\u6574\u5C3A\u5BF8\u7684\u6587\u672C\u7ED8\u56FE ID"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Float",":width"]}),(0,i.jsx)(r.td,{children:"X \u8F74\u5C3A\u5BF8\uFF08\u5DE6\u53F3\u65B9\u5411\uFF09\uFF0C\u4F7F\u7528\u4E0E TextDrawCreate \u76F8\u540C\u7684 640x480 \u7F51\u683C\u5750\u6807\u7CFB"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Float",":height"]}),(0,i.jsx)(r.td,{children:"Y \u8F74\u5C3A\u5BF8\uFF08\u4E0A\u4E0B\u65B9\u5411\uFF09\uFF0C\u4F7F\u7528\u4E0E TextDrawCreate \u76F8\u540C\u7684 640x480 \u7F51\u683C\u5750\u6807\u7CFB"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(r.p,{children:"\u672C\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "\u793A\u4F8B\u6587\u672C\u7ED8\u56FE");\n    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u4E0D\u540C TextDrawAlignment \u503C\u5BF9\u5750\u6807\u7CFB\u7684\u89E3\u91CA\u5DEE\u5F02\uFF1A\n1\uFF08\u5DE6\u5BF9\u9F50\uFF09\uFF1A\u53C2\u6570\u503C\u4E3A\u6587\u672C\u6846\u53F3\u4FA7\u8FB9\u754C\u7684\u7EDD\u5BF9\u5750\u6807\n2\uFF08\u5C45\u4E2D\u5BF9\u9F50\uFF09\uFF1A\u9700\u4EA4\u6362 X/Y \u53C2\u6570\u987A\u5E8F\uFF0CX \u503C\u4EE3\u8868\u6574\u4F53\u5BBD\u5EA6\n3\uFF08\u53F3\u5BF9\u9F50\uFF09\uFF1A\u53C2\u6570\u503C\u4E3A\u6587\u672C\u6846\u5DE6\u4FA7\u8FB9\u754C\u7684\u7EDD\u5BF9\u5750\u6807"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u4F7F\u7528 4 \u53F7\u5B57\u4F53\uFF08\u7CBE\u7075\uFF09\u548C 5 \u53F7\u5B57\u4F53\uFF08\u6A21\u578B\u9884\u89C8\uFF09\u65F6\uFF0C\u672C\u51FD\u6570\u53C2\u6570\u5C06\u8F6C\u6362\u4E3A\u5BBD\u9AD8\u504F\u79FB\u91CF"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u6587\u672C\u6846\u5750\u6807\u7CFB\u539F\u70B9\uFF08TextDrawCreate \u8BBE\u5B9A\u5750\u6807\uFF09\u5411\u5DE6\u504F\u79FB 5.0 \u5355\u4F4D\uFF0C\u5411\u4E0A\u504F\u79FB 10.0 \u5355\u4F4D"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u672C\u51FD\u6570\u5B9A\u4E49\u7684\u53EF\u70B9\u51FB\u533A\u57DF\u5728\u542F\u7528 TextDrawSetSelectable \u65F6\u751F\u6548\uFF0C\u65E0\u8BBA\u662F\u5426\u663E\u793A\u6587\u672C\u6846"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u4FEE\u6539\u5DF2\u663E\u793A\u7684\u6587\u672C\u7ED8\u56FE\u5C3A\u5BF8\u65F6\u65E0\u9700\u91CD\u5EFA\uFF0C\u901A\u8FC7",(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),"\u5237\u65B0\u5373\u53EF\u7ACB\u5373\u751F\u6548"]}),"\n"]})}),"\n",(0,i.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": \u521B\u5EFA\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": \u9500\u6BC1\u6587\u672C\u7ED8\u56FE"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawGetTextSize",children:"TextDrawGetTextSize"}),": \u83B7\u53D6\u6587\u672C\u7ED8\u56FE\u5C3A\u5BF8\u6570\u636E"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawColor",children:"TextDrawColor"}),": \u8BBE\u7F6E\u6587\u672C\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": \u8BBE\u7F6E\u6587\u672C\u6846\u989C\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": \u8BBE\u7F6E\u6587\u672C\u80CC\u666F\u8272"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": \u8BBE\u7F6E\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u6587\u672C\u5B57\u4F53\u6837\u5F0F"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": \u8BBE\u7F6E\u6587\u672C\u5B57\u7B26\u5C3A\u5BF8"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": \u8BBE\u7F6E\u6587\u672C\u63CF\u8FB9\u6548\u679C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": \u8BBE\u7F6E\u6587\u672C\u9634\u5F71\u6548\u679C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": \u542F\u7528\u6BD4\u4F8B\u7F29\u653E"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": \u5207\u6362\u6587\u672C\u6846\u663E\u793A\u72B6\u6001"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": \u66F4\u65B0\u6587\u672C\u5185\u5BB9"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": \u5BF9\u73A9\u5BB6\u9690\u85CF\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": \u5168\u5C40\u663E\u793A\u6587\u672C"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": \u5168\u5C40\u9690\u85CF\u6587\u672C"]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return a},a:function(){return s}});var n=t(67294);let i={},l=n.createContext(i);function s(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);
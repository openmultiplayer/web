"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49589"],{38446:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewRot","title":"TextDrawSetPreviewRot","description":"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u6BD4\u4F8B\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawSetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewRot","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawSetPreviewRot.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewRot","sidebar_label":"TextDrawSetPreviewRot","description":"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u6BD4\u4F8B\u3002","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPreviewModel","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetPreviewModel"},"next":{"title":"TextDrawSetPreviewVehCol","permalink":"/zh-CN/docs/scripting/functions/TextDrawSetPreviewVehCol"}}'),i=r("85893"),l=r("50065");let s={title:"TextDrawSetPreviewRot",sidebar_label:"TextDrawSetPreviewRot",description:"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u6BD4\u4F8B\u3002",tags:["\u6587\u672C\u7ED8\u56FE"]},d=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u8BBE\u7F6E 3D \u6A21\u578B\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u6BD4\u4F8B\u3002"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u540D\u79F0"}),(0,i.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"\u8981\u66F4\u6539\u7684\u6587\u672C\u7ED8\u56FE ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,i.jsx)(t.td,{children:"X \u8F74\u65CB\u8F6C\u89D2\u5EA6\u503C"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,i.jsx)(t.td,{children:"Y \u8F74\u65CB\u8F6C\u89D2\u5EA6\u503C"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,i.jsx)(t.td,{children:"Z \u8F74\u65CB\u8F6C\u89D2\u5EA6\u503C"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":zoom"]}),(0,i.jsx)(t.td,{children:"\u7F29\u653E\u503C\uFF08\u9ED8\u8BA4 1.0\uFF09\uFF0C\u5C0F\u4E8E 1.0 \u7684\u503C\u4F1A\u4F7F\u89C6\u89D2\u66F4\u9760\u8FD1\u6A21\u578B\uFF0C\u5927\u4E8E 1.0 \u7684\u503C\u4F1A\u4F7F\u89C6\u89D2\u8FDC\u79BB\u6A21\u578B"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u8BE5\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411);\n    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);\n\n    // \u4ECD\u9700\u4F7F\u7528TextDrawShowForAll/TextDrawShowForPlayer\u4F7F\u6587\u672C\u7ED8\u56FE\u53EF\u89C1\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["\u6587\u672C\u7ED8\u56FE\u5FC5\u987B\u4F7F\u7528",(0,i.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"}),"\u5B57\u4F53\u7C7B\u578B\u4E14\u5DF2\u8BBE\u7F6E\u9884\u89C8\u6A21\u578B\uFF0C\u8BE5\u51FD\u6570\u624D\u80FD\u751F\u6548\u3002"]})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawGetPreviewRot",children:"TextDrawGetPreviewRot"}),": \u83B7\u53D6 3D \u6A21\u578B\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u53C2\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": \u8BBE\u7F6E\u73A9\u5BB6 3D \u6587\u672C\u7ED8\u56FE\u9884\u89C8\u7684\u65CB\u8F6C\u53C2\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684 3D \u9884\u89C8\u6A21\u578B"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewVehCol",children:"TextDrawSetPreviewVehCol"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u9884\u89C8\u4E2D\u8F66\u8F86\u7684\u914D\u8272\u65B9\u6848"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53\u6837\u5F0F"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": \u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return s}});var n=r(67294);let i={},l=n.createContext(i);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
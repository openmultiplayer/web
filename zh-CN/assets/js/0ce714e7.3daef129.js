"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78563"],{96541:function(e,r,t){t.r(r),t.d(r,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetPreviewRot","title":"PlayerTextDrawSetPreviewRot","description":"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawSetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetPreviewRot","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawSetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawSetPreviewRot.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"},{"inline":true,"label":"\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetPreviewRot","sidebar_label":"PlayerTextDrawSetPreviewRot","description":"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570","tags":["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetPreviewModel","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawSetPreviewModel"},"next":{"title":"PlayerTextDrawSetPreviewVehCol","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawSetPreviewVehCol"}}'),l=t("85893"),i=t("50065");let a={title:"PlayerTextDrawSetPreviewRot",sidebar_label:"PlayerTextDrawSetPreviewRot",description:"\u8BBE\u7F6E3D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570",tags:["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},d=void 0,s={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function o(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(r.p,{children:"\u8BBE\u7F6E 3D \u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u503C"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"\u8981\u4FEE\u6539\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"\u8981\u4FEE\u6539\u7684\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684 ID"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":rotX"]}),(0,l.jsx)(r.td,{children:"X \u8F74\u65CB\u8F6C\u89D2\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5EA6\uFF09"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":rotY"]}),(0,l.jsx)(r.td,{children:"Y \u8F74\u65CB\u8F6C\u89D2\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5EA6\uFF09"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":rotZ"]}),(0,l.jsx)(r.td,{children:"Z \u8F74\u65CB\u8F6C\u89D2\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5EA6\uFF09"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":zoom"]}),(0,l.jsx)(r.td,{children:"\u7F29\u653E\u503C\uFF08\u9ED8\u8BA4 1.0\uFF09\uFF0C\u503C\u8D8A\u5C0F\u89C6\u89D2\u8D8A\u8FD1\uFF0C\u503C\u8D8A\u5927\u89C6\u89D2\u8D8A\u8FDC"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(r.p,{children:"\u8BE5\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:gMyTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);\n    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);\n    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);\n\n    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(r.admonition,{type:"warning",children:[(0,l.jsx)(r.p,{children:"\u5FC5\u987B\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u624D\u80FD\u751F\u6548\uFF1A"}),(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\u4F7F\u7528",(0,l.jsx)(r.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"}),"\u5B57\u4F53\u7C7B\u578B"]}),"\n",(0,l.jsx)(r.li,{children:"\u5DF2\u901A\u8FC7 PlayerTextDrawSetPreviewModel \u8BBE\u7F6E\u6709\u6548\u6A21\u578B"}),"\n"]})]}),"\n",(0,l.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": \u8BBE\u7F6E\u5168\u5C40\u6587\u672C\u7ED8\u56FE\u7684 3D \u9884\u89C8\u65CB\u8F6C"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684 3D \u9884\u89C8\u6A21\u578B"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetPreviewVehCol",children:"PlayerTextDrawSetPreviewVehCol"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE 3D \u9884\u89C8\u7684\u8F66\u8F86\u914D\u8272"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": \u8BBE\u7F6E\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u5B57\u4F53\u7C7B\u578B"]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": \u5F53\u73A9\u5BB6\u70B9\u51FB\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n"]})]})}function x(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return a}});var n=t(67294);let l={},i=n.createContext(l);function a(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
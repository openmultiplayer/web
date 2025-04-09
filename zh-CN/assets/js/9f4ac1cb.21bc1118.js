"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61076"],{19467:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>s,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetPreviewRot","title":"PlayerTextDrawGetPreviewRot","description":"\u83B7\u53D63D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawGetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetPreviewRot","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawGetPreviewRot.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"},{"inline":true,"label":"\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetPreviewRot","sidebar_label":"PlayerTextDrawGetPreviewRot","description":"\u83B7\u53D63D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570","tags":["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetPreviewModel","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetPreviewModel"},"next":{"title":"PlayerTextDrawGetPreviewVehCol","permalink":"/zh-CN/docs/scripting/functions/PlayerTextDrawGetPreviewVehCol"}}'),i=r("85893"),l=r("50065");let a={title:"PlayerTextDrawGetPreviewRot",sidebar_label:"PlayerTextDrawGetPreviewRot",description:"\u83B7\u53D63D\u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570",tags:["\u73A9\u5BB6","\u6587\u672C\u7ED8\u56FE","\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE"]},o=void 0,d={},s=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u83B7\u53D6 3D \u6A21\u578B\u9884\u89C8\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u65CB\u8F6C\u89D2\u5EA6\u548C\u7F29\u653E\u503C"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"\u73A9\u5BB6\u7684 ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,i.jsx)(t.td,{children:"\u8981\u83B7\u53D6\u65CB\u8F6C\u548C\u7F29\u653E\u53C2\u6570\u7684\u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684 ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8 X \u8F74\u65CB\u8F6C\u89D2\u5EA6\u7684\u6D6E\u70B9\u53D8\u91CF\uFF0C\u901A\u8FC7\u5F15\u7528\u4F20\u9012"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8 Y \u8F74\u65CB\u8F6C\u89D2\u5EA6\u7684\u6D6E\u70B9\u53D8\u91CF\uFF0C\u901A\u8FC7\u5F15\u7528\u4F20\u9012"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8 Z \u8F74\u65CB\u8F6C\u89D2\u5EA6\u7684\u6D6E\u70B9\u53D8\u91CF\uFF0C\u901A\u8FC7\u5F15\u7528\u4F20\u9012"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":zoom"]}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8\u7F29\u653E\u503C\u7684\u6D6E\u70B9\u53D8\u91CF\uFF0C\u901A\u8FC7\u5F15\u7528\u4F20\u9012"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new PlayerText:gMyTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);\n    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);\n    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);\n    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);\n\n    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;\n    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);\n    // rotationX = -10.0\n    // rotationY = 0.0\n    // rotationZ = -20.0\n    // zoom = 1.0\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": \u8BBE\u7F6E 3D \u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u9884\u89C8\u65CB\u8F6C"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": \u8BBE\u7F6E 3D \u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u7684\u9884\u89C8\u6A21\u578B"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerTextDrawSetPreviewVehCol",children:"PlayerTextDrawSetPreviewVehCol"}),": \u8BBE\u7F6E 3D \u73A9\u5BB6\u6587\u672C\u7ED8\u56FE\u9884\u89C8\u4E2D\u8F66\u8F86\u7684\u989C\u8272"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": \u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22371"],{95869:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/TextDrawGetPreviewVehicleColours","title":"TextDrawGetPreviewVehicleColours","description":"\u83B7\u53D63D\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u8F66\u8F86\u914D\u8272\u65B9\u6848","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawGetPreviewVehicleColours.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetPreviewVehicleColours","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetPreviewVehicleColours","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawGetPreviewVehicleColours.md","tags":[{"inline":true,"label":"\u6587\u672C\u7ED8\u56FE","permalink":"/zh-CN/docs/tags/\u6587\u672C\u7ED8\u56FE"}],"version":"current","frontMatter":{"title":"TextDrawGetPreviewVehicleColours","sidebar_label":"TextDrawGetPreviewVehicleColours","description":"\u83B7\u53D63D\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u8F66\u8F86\u914D\u8272\u65B9\u6848","tags":["\u6587\u672C\u7ED8\u56FE"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetPreviewVehCol","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetPreviewVehCol"},"next":{"title":"TextDrawGetShadow","permalink":"/zh-CN/docs/scripting/functions/TextDrawGetShadow"}}'),i=r("85893"),l=r("50065");let o={title:"TextDrawGetPreviewVehicleColours",sidebar_label:"TextDrawGetPreviewVehicleColours",description:"\u83B7\u53D63D\u9884\u89C8\u6587\u672C\u7ED8\u56FE\u7684\u8F66\u8F86\u914D\u8272\u65B9\u6848",tags:["\u6587\u672C\u7ED8\u56FE"]},s=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u83B7\u53D6 3D \u9884\u89C8\u6587\u672C\u7ED8\u56FE\u6240\u4F7F\u7528\u7684\u8F66\u8F86\u989C\u8272\u53C2\u6570"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"\u9700\u8981\u83B7\u53D6\u914D\u8272\u7684 3D \u9884\u89C8\u6587\u672C\u7ED8\u56FE ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&colour1"}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8\u8F66\u8F86\u4E3B\u8272\u7684\u53D8\u91CF\uFF08\u6309\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&colour2"}),(0,i.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8\u8F66\u8F86\u6B21\u8272\u7684\u53D8\u91CF\uFF08\u6309\u5F15\u7528\u4F20\u9012\uFF09"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColour(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411);\n    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 8);\n\n    new colour1, colour2;\n    TextDrawGetPreviewVehicleColours(gMyTextdraw, colour1, colour2);\n    // colour1 = 6\uFF08\u8F66\u8F86\u4E3B\u8272\uFF09\n    // colour2 = 8\uFF08\u8F66\u8F86\u6B21\u8272\uFF09\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": \u8BBE\u7F6E 3D \u9884\u89C8\u6A21\u578B"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": \u8BBE\u7F6E 3D \u6A21\u578B\u65CB\u8F6C\u53C2\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": \u8BBE\u7F6E\u5B57\u4F53\u7C7B\u578B"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": \u5F53\u73A9\u5BB6\u70B9\u51FB\u6587\u672C\u7ED8\u56FE\u65F6\u89E6\u53D1"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return o}});var n=r(67294);let i={},l=n.createContext(i);function o(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
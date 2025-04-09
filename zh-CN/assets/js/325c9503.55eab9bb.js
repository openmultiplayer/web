"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8820"],{31658:function(e,t,r){r.r(t),r.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMaterialText","title":"SetPlayerObjectMaterialText","description":"\u5C06\u73A9\u5BB6\u7269\u4F53\u7684\u6750\u8D28\u66FF\u6362\u4E3A\u6587\u672C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerObjectMaterialText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMaterialText","permalink":"/zh-CN/docs/scripting/functions/SetPlayerObjectMaterialText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectMaterialText.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"},{"inline":true,"label":"\u73A9\u5BB6\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u7269\u4F53"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMaterialText","sidebar_label":"SetPlayerObjectMaterialText","description":"\u5C06\u73A9\u5BB6\u7269\u4F53\u7684\u6750\u8D28\u66FF\u6362\u4E3A\u6587\u672C\u3002","tags":["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMaterial","permalink":"/zh-CN/docs/scripting/functions/SetPlayerObjectMaterial"},"next":{"title":"SetPlayerObjectMoveSpeed","permalink":"/zh-CN/docs/scripting/functions/SetPlayerObjectMoveSpeed"}}'),i=r("85893"),l=r("50065");let s={title:"SetPlayerObjectMaterialText",sidebar_label:"SetPlayerObjectMaterialText",description:"\u5C06\u73A9\u5BB6\u7269\u4F53\u7684\u6750\u8D28\u66FF\u6362\u4E3A\u6587\u672C\u3002",tags:["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u9AD8\u7EA7\u5730\u56FE\u7F16\u8F91\u5668",id:"\u9AD8\u7EA7\u5730\u56FE\u7F16\u8F91\u5668",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u73A9\u5BB6\u7269\u4F53\u7684\u6750\u8D28\u66FF\u6362\u4E3A\u6587\u672C\u3002"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"\u8981\u8BBE\u7F6E\u6587\u672C\u7684\u7269\u4F53 ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text[]"}),(0,i.jsx)(t.td,{children:"\u8981\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"\u6750\u8D28\u7D22\u5F15\uFF08\u9ED8\u8BA4\uFF1A0\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_SIZE",":materialSize"]}),(0,i.jsxs)(t.td,{children:["\u6750\u8D28",(0,i.jsx)(t.a,{href:"../resources/materialtextsizes",children:"\u5C3A\u5BF8"}),"\uFF08\u9ED8\u8BA4\uFF1A256x128\uFF09"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const fontFace[]"}),(0,i.jsx)(t.td,{children:"\u5B57\u4F53\u540D\u79F0\uFF08\u9ED8\u8BA4\uFF1AArial\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontSize"}),(0,i.jsx)(t.td,{children:"\u5B57\u4F53\u5927\u5C0F\uFF08\u9ED8\u8BA4\uFF1A24\uFF09\uFF08\u6700\u5927\u503C 255\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":bold"]}),(0,i.jsx)(t.td,{children:"\u7C97\u4F53\u663E\u793A\uFF081 \u542F\u7528/0 \u7981\u7528\uFF0C\u9ED8\u8BA4\uFF1A1\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontColour"}),(0,i.jsx)(t.td,{children:"\u5B57\u4F53\u989C\u8272\uFF08\u9ED8\u8BA4\uFF1A\u767D\u8272\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"backgroundColour"}),(0,i.jsx)(t.td,{children:"\u80CC\u666F\u989C\u8272\uFF08\u9ED8\u8BA4\uFF1A\u900F\u660E\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_TEXT_ALIGN",":textAlignment"]}),(0,i.jsxs)(t.td,{children:["\u6587\u672C",(0,i.jsx)(t.a,{href:"../resources/materialtextsizes",children:"\u5BF9\u9F50\u65B9\u5F0F"}),"\uFF08\u9ED8\u8BA4\uFF1A\u5DE6\u5BF9\u9F50\uFF09"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(t.td,{children:"\u4E0D\u5B9A\u6570\u91CF\u7684\u4EFB\u610F\u6807\u7B7E\u53C2\u6570"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u672C\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/text", cmdtext, true) == 0)\n    {\n        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); // \u521B\u5EFA\u7269\u4F53\n        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);\n        // \u5728\u7269\u4F53\u4E0A\u663E\u793A"SA-MP 0.3.DL"\uFF0C\u6A59\u8272\u5B57\u4F53\u914D\u9ED1\u8272\u80CC\u666F\n        return 1;\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"\u53EF\u4F7F\u7528\u989C\u8272\u5D4C\u5165\u8BED\u6CD5\u5B9E\u73B0\u591A\u8272\u6587\u672C\u6548\u679C"})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": \u66FF\u6362\u5168\u5C40\u7269\u4F53\u7684\u6750\u8D28\u6587\u672C"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": \u66FF\u6362\u73A9\u5BB6\u7269\u4F53\u7684\u6E38\u620F\u5185\u6750\u8D28"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u9AD8\u7EA7\u5730\u56FE\u7F16\u8F91\u5668",children:"\u9AD8\u7EA7\u5730\u56FE\u7F16\u8F91\u5668"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Pottus/Texture-Studio",children:"Texture Studio"})," \u4F5C\u8005\uFF1APottus"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NexiusTailer/Ultimate-Creator",children:"Ultimate Creator"})," \u4F5C\u8005\uFF1ANexius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fusez/Map-Editor-V3",children:"Fusez's Map Editor"})," \u4F5C\u8005\uFF1ARedFusion"]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return s}});var n=r(67294);let i={},l=n.createContext(i);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
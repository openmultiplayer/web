"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46810"],{81838:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/InterpolateCameraPos","title":"InterpolateCameraPos","description":"\u5728\u8BBE\u5B9A\u65F6\u95F4\u5185\u5C06\u73A9\u5BB6\u7684\u89C6\u89D2\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u5E73\u6ED1\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/InterpolateCameraPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/InterpolateCameraPos","permalink":"/zh-CN/docs/scripting/functions/InterpolateCameraPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/InterpolateCameraPos.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u63D2\u503C\u8FC7\u6E21","permalink":"/zh-CN/docs/tags/\u63D2\u503C\u8FC7\u6E21"}],"version":"current","frontMatter":{"title":"InterpolateCameraPos","sidebar_label":"InterpolateCameraPos","description":"\u5728\u8BBE\u5B9A\u65F6\u95F4\u5185\u5C06\u73A9\u5BB6\u7684\u89C6\u89D2\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u5E73\u6ED1\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E","tags":["\u73A9\u5BB6","\u63D2\u503C\u8FC7\u6E21"]},"sidebar":"docsSidebar","previous":{"title":"InterpolateCameraLookAt","permalink":"/zh-CN/docs/scripting/functions/InterpolateCameraLookAt"},"next":{"title":"Is3DTextLabelStreamedIn","permalink":"/zh-CN/docs/scripting/functions/Is3DTextLabelStreamedIn"}}'),s=n("85893"),l=n("50065");let i={title:"InterpolateCameraPos",sidebar_label:"InterpolateCameraPos",description:"\u5728\u8BBE\u5B9A\u65F6\u95F4\u5185\u5C06\u73A9\u5BB6\u7684\u89C6\u89D2\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u5E73\u6ED1\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E",tags:["\u73A9\u5BB6","\u63D2\u503C\u8FC7\u6E21"]},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u5E73\u6ED1\u79FB\u52A8\u73A9\u5BB6\u89C6\u89D2\u7684\u4F4D\u7F6E\u3002\u5E38\u7528\u4E8E\u811A\u672C\u63A7\u5236\u7684\u8FC7\u573A\u52A8\u753B\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53C2\u6570"}),(0,s.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"\u9700\u8981\u79FB\u52A8\u89C6\u89D2\u7684\u73A9\u5BB6 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromX"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u8D77\u59CB\u4F4D\u7F6E\u7684 X \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromY"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u8D77\u59CB\u4F4D\u7F6E\u7684 Y \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":fromZ"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u8D77\u59CB\u4F4D\u7F6E\u7684 Z \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toX"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u76EE\u6807\u4F4D\u7F6E\u7684 X \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toY"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u76EE\u6807\u4F4D\u7F6E\u7684 Y \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":toZ"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u76EE\u6807\u4F4D\u7F6E\u7684 Z \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"\u79FB\u52A8\u6301\u7EED\u6BEB\u79D2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["CAM_MOVE",":cut"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"\u89C6\u89D2\u5207\u6362\u6837\u5F0F"}),"\u3002\u9ED8\u8BA4 CAMERA_CUT\uFF08\u77AC\u95F4\u5207\u6362\uFF09\u3002\u5E94\u8BBE\u4E3A CAMERA_MOVE \u5B9E\u73B0\u5E73\u6ED1\u79FB\u52A8"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(t.p,{children:"\u672C\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/moveme", true))\n    {\n        TogglePlayerSpectating(playerid, true);\n        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);\n        // \u572810000\u6BEB\u79D2(10\u79D2)\u5185\u5C06\u73A9\u5BB6\u89C6\u89D2\u4ECEA\u70B9(0,0,10)\u5E73\u6ED1\u79FB\u52A8\u5230B\u70B9(1000,1000,30)\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4F7F\u7528",(0,s.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),"\u53EF\u5728\u89C6\u89D2\u79FB\u52A8\u671F\u95F4\u4FDD\u6301\u7269\u4F53\u6B63\u5E38\u52A0\u8F7D\u5E76\u9690\u85CF HUD \u754C\u9762"]}),"\n",(0,s.jsxs)(t.li,{children:["\u4F7F\u7528",(0,s.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),"\u53EF\u91CD\u7F6E\u89C6\u89D2\u81F3\u73A9\u5BB6\u80CC\u540E\u89C6\u89D2"]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"InterpolateCameraLookAt",children:"InterpolateCameraLookAt"}),": \u5E73\u6ED1\u8C03\u6574\u89C6\u89D2\u6CE8\u89C6\u70B9"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": \u76F4\u63A5\u8BBE\u7F6E\u89C6\u89D2\u4F4D\u7F6E"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": \u76F4\u63A5\u8BBE\u7F6E\u89C6\u89D2\u6CE8\u89C6\u65B9\u5411"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"\u89C6\u89D2\u5207\u6362\u6837\u5F0F"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(67294);let s={},l=r.createContext(s);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
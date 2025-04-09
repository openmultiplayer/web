"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21675"],{23626:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/SetPlayerCameraLookAt","title":"SetPlayerCameraLookAt","description":"\u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u7684\u89C2\u5BDF\u65B9\u5411\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerCameraLookAt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerCameraLookAt","permalink":"/zh-CN/docs/scripting/functions/SetPlayerCameraLookAt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerCameraLookAt.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u89C6\u89D2","permalink":"/zh-CN/docs/tags/\u89C6\u89D2"}],"version":"current","frontMatter":{"title":"SetPlayerCameraLookAt","sidebar_label":"SetPlayerCameraLookAt","description":"\u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u7684\u89C2\u5BDF\u65B9\u5411\u3002","tags":["\u73A9\u5BB6","\u89C6\u89D2"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerAttachedObject","permalink":"/zh-CN/docs/scripting/functions/SetPlayerAttachedObject"},"next":{"title":"SetPlayerCameraPos","permalink":"/zh-CN/docs/scripting/functions/SetPlayerCameraPos"}}'),s=r("85893"),l=r("50065");let a={title:"SetPlayerCameraLookAt",sidebar_label:"SetPlayerCameraLookAt",description:"\u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u7684\u89C2\u5BDF\u65B9\u5411\u3002",tags:["\u73A9\u5BB6","\u89C6\u89D2"]},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u7684\u89C2\u5BDF\u65B9\u5411\u3002\u901A\u5E38\u9700\u4E0E SetPlayerCameraPos \u914D\u5408\u4F7F\u7528\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":x"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u89C2\u5BDF\u70B9\u7684 X \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":y"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u89C2\u5BDF\u70B9\u7684 Y \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":z"]}),(0,s.jsx)(t.td,{children:"\u89C6\u89D2\u89C2\u5BDF\u70B9\u7684 Z \u5750\u6807"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["CAM_MOVE",":cut"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"\u89C6\u89D2\u5207\u6362\u98CE\u683C"}),"\u3002\u53EF\u4F7F\u7528 CAMERA_MOVE \u5B9E\u73B0\u89C6\u89D2\u6E10\u53D8\u6548\u679C"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u6307\u5B9A\u73A9\u5BB6\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,s.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);\nSetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u5728\u542F\u7528\u89C2\u5BDF\u8005\u6A21\u5F0F\u540E\u7ACB\u5373\u4F7F\u7528\u672C\u51FD\u6570\u5C06\u65E0\u6CD5\u751F\u6548"})}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": \u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u4F4D\u7F6E"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),": \u91CD\u7F6E\u73A9\u5BB6\u81F3\u9ED8\u8BA4\u8DDF\u968F\u89C6\u89D2"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u5750\u6807"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": \u83B7\u53D6\u89C6\u89D2\u524D\u5411\u5411\u91CF"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/cameracutstyles",children:"\u89C6\u89D2\u5207\u6362\u98CE\u683C\u5217\u8868"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return a}});var n=r(67294);let s={},l=n.createContext(s);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
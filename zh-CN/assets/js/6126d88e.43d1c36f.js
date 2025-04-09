"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34856"],{19391:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerCameraPos","title":"GetPlayerCameraPos","description":"\u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u7684\u4E09\u7EF4\u5750\u6807\u4F4D\u7F6E","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerCameraPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraPos","permalink":"/zh-CN/docs/scripting/functions/GetPlayerCameraPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraPos.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u89C6\u89D2","permalink":"/zh-CN/docs/tags/\u89C6\u89D2"}],"version":"current","frontMatter":{"title":"GetPlayerCameraPos","sidebar_label":"GetPlayerCameraPos","description":"\u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u7684\u4E09\u7EF4\u5750\u6807\u4F4D\u7F6E","tags":["\u73A9\u5BB6","\u89C6\u89D2"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraMode","permalink":"/zh-CN/docs/scripting/functions/GetPlayerCameraMode"},"next":{"title":"GetPlayerCameraTargetActor","permalink":"/zh-CN/docs/scripting/functions/GetPlayerCameraTargetActor"}}'),a=t("85893"),i=t("50065");let l={title:"GetPlayerCameraPos",sidebar_label:"GetPlayerCameraPos",description:"\u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u7684\u4E09\u7EF4\u5750\u6807\u4F4D\u7F6E",tags:["\u73A9\u5BB6","\u89C6\u89D2"]},s=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(r.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u89C6\u89D2\u7684\u4E09\u7EF4\u7A7A\u95F4\u5750\u6807\u4F4D\u7F6E"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,a.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"\u9700\u8981\u83B7\u53D6\u89C6\u89D2\u5750\u6807\u7684\u73A9\u5BB6 ID"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["&Float",":x"]}),(0,a.jsx)(r.td,{children:"\u7528\u4E8E\u5B58\u50A8 X \u5750\u6807\u7684\u6D6E\u70B9\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["&Float",":y"]}),(0,a.jsx)(r.td,{children:"\u7528\u4E8E\u5B58\u50A8 Y \u5750\u6807\u7684\u6D6E\u70B9\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["&Float",":z"]}),(0,a.jsx)(r.td,{children:"\u7528\u4E8E\u5B58\u50A8 Z \u5750\u6807\u7684\u6D6E\u70B9\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(r.p,{children:"\u5750\u6807\u6570\u636E\u5C06\u5B58\u50A8\u5728\u6307\u5B9A\u7684\u53D8\u91CF\u4E2D\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'public OnPlayerDisconnect(playerid)\n{\n    new Float:x, Float:y, Float:z;\n    GetPlayerCameraPos(playerid, x, y, z);\n\n    printf("\u73A9\u5BB6\u65AD\u5F00\u8FDE\u63A5\u65F6\u89C6\u89D2\u5750\u6807\u4E3A %f, %f, %f", x, y, z);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsx)(r.admonition,{type:"warning",children:(0,a.jsx)(r.p,{children:"\u73A9\u5BB6\u89C6\u89D2\u5750\u6807\u6BCF\u79D2\u4EC5\u66F4\u65B0\u4E00\u6B21\uFF08\u7784\u51C6\u72B6\u6001\u9664\u5916\uFF09\u3002\u5982\u9700\u4F9D\u8D56\u89C6\u89D2\u5750\u6807\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E 1 \u79D2\u95F4\u9694\u7684\u5B9A\u65F6\u5668"})}),"\n",(0,a.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": \u8BBE\u7F6E\u73A9\u5BB6\u89C6\u89D2\u4F4D\u7F6E"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraZoom",children:"GetPlayerCameraZoom"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u7F29\u653E\u7EA7\u522B"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraAspectRatio",children:"GetPlayerCameraAspectRatio"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u5BBD\u9AD8\u6BD4"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetplayerCameraMode",children:"GetPlayerCameraMode"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u6A21\u5F0F"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": \u83B7\u53D6\u73A9\u5BB6\u89C6\u89D2\u524D\u5411\u5411\u91CF"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerZAim",children:"GetPlayerZAim"}),": \u83B7\u53D6\u73A9\u5BB6\u5782\u76F4\u7784\u51C6\u89D2\u5EA6"]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var n=t(67294);let a={},i=n.createContext(a);function l(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
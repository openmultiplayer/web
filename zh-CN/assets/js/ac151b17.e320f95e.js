"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79571"],{74791:function(e,r,i){i.r(r),i.d(r,{default:()=>u,frontMatter:()=>c,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/GetPlayerPickupVirtualWorld","title":"GetPlayerPickupVirtualWorld","description":"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u865A\u62DF\u4E16\u754CID","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerPickupVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPickupVirtualWorld","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPickupVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPickupVirtualWorld.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u62FE\u53D6\u7269"},{"inline":true,"label":"\u73A9\u5BB6\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u62FE\u53D6\u7269"}],"version":"current","frontMatter":{"title":"GetPlayerPickupVirtualWorld","sidebar_label":"GetPlayerPickupVirtualWorld","description":"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u865A\u62DF\u4E16\u754CID","tags":["\u73A9\u5BB6","\u62FE\u53D6\u7269","\u73A9\u5BB6\u62FE\u53D6\u7269"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPickupType","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPickupType"},"next":{"title":"GetPlayerPing","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPing"}}'),n=i("85893"),t=i("50065");let c={title:"GetPlayerPickupVirtualWorld",sidebar_label:"GetPlayerPickupVirtualWorld",description:"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u865A\u62DF\u4E16\u754CID",tags:["\u73A9\u5BB6","\u62FE\u53D6\u7269","\u73A9\u5BB6\u62FE\u53D6\u7269"]},s=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarnZH_CN:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,n.jsx)(r.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u865A\u62DF\u4E16\u754C ID"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,n.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"\u73A9\u5BB6 ID"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pickupid"}),(0,n.jsx)(r.td,{children:"\u9700\u8981\u83B7\u53D6\u865A\u62DF\u4E16\u754C ID \u7684\u73A9\u5BB6\u62FE\u53D6\u7269 ID"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,n.jsx)(r.p,{children:"\u8FD4\u56DE\u73A9\u5BB6\u62FE\u53D6\u7269\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C ID"}),"\n",(0,n.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, 20);\n\n    new worldid = GetPlayerPickupVirtualWorld(playerid, PlayerPickup[playerid]);\n    // worldid = 20\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": \u521B\u5EFA\u4EC5\u5BF9\u5355\u4E2A\u73A9\u5BB6\u53EF\u89C1\u7684\u62FE\u53D6\u7269"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": \u9500\u6BC1\u73A9\u5BB6\u62FE\u53D6\u7269"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": \u9A8C\u8BC1\u73A9\u5BB6\u62FE\u53D6\u7269\u662F\u5426\u6709\u6548"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": \u68C0\u67E5\u73A9\u5BB6\u62FE\u53D6\u7269\u662F\u5426\u5DF2\u6D41\u52A0\u8F7D\u7ED9\u73A9\u5BB6"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u6A21\u578B"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u6A21\u578B ID"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C ID"]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return s},a:function(){return c}});var l=i(67294);let n={},t=l.createContext(n);function c(e){let r=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),l.createElement(t.Provider,{value:r},e.children)}}}]);
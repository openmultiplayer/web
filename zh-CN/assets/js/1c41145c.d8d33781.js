"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22865"],{11350:function(e,r,i){i.r(r),i.d(r,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerPickupPos","title":"GetPlayerPickupPos","description":"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u5750\u6807","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerPickupPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPickupPos","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPickupPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPickupPos.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u62FE\u53D6\u7269"},{"inline":true,"label":"\u73A9\u5BB6\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u62FE\u53D6\u7269"}],"version":"current","frontMatter":{"title":"GetPlayerPickupPos","sidebar_label":"GetPlayerPickupPos","description":"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u5750\u6807","tags":["\u73A9\u5BB6","\u62FE\u53D6\u7269","\u73A9\u5BB6\u62FE\u53D6\u7269"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPickupModel","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPickupModel"},"next":{"title":"GetPlayerPickupType","permalink":"/zh-CN/docs/scripting/functions/GetPlayerPickupType"}}'),l=i("85893"),t=i("50065");let s={title:"GetPlayerPickupPos",sidebar_label:"GetPlayerPickupPos",description:"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u5750\u6807",tags:["\u73A9\u5BB6","\u62FE\u53D6\u7269","\u73A9\u5BB6\u62FE\u53D6\u7269"]},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarnZH_CN:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(r.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7684\u5750\u6807"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(r.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"pickupid"}),(0,l.jsx)(r.td,{children:"\u9700\u8981\u83B7\u53D6\u5750\u6807\u7684\u73A9\u5BB6\u62FE\u53D6\u7269 ID"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":x"]}),(0,l.jsx)(r.td,{children:"\u5B58\u50A8 X \u5750\u6807\u7684\u6D6E\u70B9\u578B\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":y"]}),(0,l.jsx)(r.td,{children:"\u5B58\u50A8 Y \u5750\u6807\u7684\u6D6E\u70B9\u578B\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":z"]}),(0,l.jsx)(r.td,{children:"\u5B58\u50A8 Z \u5750\u6807\u7684\u6D6E\u70B9\u578B\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(r.p,{children:"\u672C\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\uFF0C\u5750\u6807\u6570\u636E\u901A\u8FC7\u53C2\u6570\u4F20\u9012"}),"\n",(0,l.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);\n\n    new\n        Float:x,\n        Float:y,\n        Float:z;\n\n    GetPlayerPickupPos(playerid, PlayerPickup[playerid], x, y, z);\n    // x = 2010.0979\n    // y = 1222.0642\n    // z = 10.8206\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": \u521B\u5EFA\u4EC5\u5BF9\u5355\u4E2A\u73A9\u5BB6\u53EF\u89C1\u7684\u62FE\u53D6\u7269"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": \u9500\u6BC1\u73A9\u5BB6\u62FE\u53D6\u7269"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": \u9A8C\u8BC1\u73A9\u5BB6\u62FE\u53D6\u7269\u662F\u5426\u6709\u6548"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": \u68C0\u67E5\u73A9\u5BB6\u62FE\u53D6\u7269\u662F\u5426\u5DF2\u6D41\u52A0\u8F7D\u7ED9\u73A9\u5BB6"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u6A21\u578B"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u6A21\u578B ID"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": \u8BBE\u7F6E\u73A9\u5BB6\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C ID"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": \u83B7\u53D6\u73A9\u5BB6\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C ID"]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return c},a:function(){return s}});var n=i(67294);let l={},t=n.createContext(l);function s(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);
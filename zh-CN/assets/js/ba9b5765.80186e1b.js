"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20665"],{76293:function(e,i,r){r.r(i),r.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/SetPickupForPlayer","title":"SetPickupForPlayer","description":"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u8C03\u6574\u62FE\u53D6\u7269\u7684\u6A21\u578B\u3001\u7C7B\u578B\u548C\u4F4D\u7F6E\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPickupForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPickupForPlayer","permalink":"/zh-CN/docs/scripting/functions/SetPickupForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPickupForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u62FE\u53D6\u7269"}],"version":"current","frontMatter":{"title":"SetPickupForPlayer","sidebar_label":"SetPickupForPlayer","description":"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u8C03\u6574\u62FE\u53D6\u7269\u7684\u6A21\u578B\u3001\u7C7B\u578B\u548C\u4F4D\u7F6E\u3002","tags":["\u73A9\u5BB6","\u62FE\u53D6\u7269"]},"sidebar":"docsSidebar","previous":{"title":"SetPVarString","permalink":"/zh-CN/docs/scripting/functions/SetPVarString"},"next":{"title":"SetPickupModel","permalink":"/zh-CN/docs/scripting/functions/SetPickupModel"}}'),t=r("85893"),l=r("50065");let s={title:"SetPickupForPlayer",sidebar_label:"SetPickupForPlayer",description:"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u8C03\u6574\u62FE\u53D6\u7269\u7684\u6A21\u578B\u3001\u7C7B\u578B\u548C\u4F4D\u7F6E\u3002",tags:["\u73A9\u5BB6","\u62FE\u53D6\u7269"]},c=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:r}=i;return r||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"\u8BE5\u51FD\u6570\u5C1A\u672A\u5B9E\u73B0"})}),"\n",(0,t.jsx)(i.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(i.p,{children:"\u4E3A\u6307\u5B9A\u73A9\u5BB6\u8C03\u6574\u62FE\u53D6\u7269\u7684\u6A21\u578B\u3001\u7C7B\u578B\u548C\u4F4D\u7F6E\u3002"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(i.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"pickupid"}),(0,t.jsx)(i.td,{children:"\u8981\u8C03\u6574\u7684\u62FE\u53D6\u7269 ID"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"model"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/pickupids",children:"\u6A21\u578B ID"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/pickuptypes",children:"\u62FE\u53D6\u7C7B\u578B"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":x"]}),(0,t.jsx)(i.td,{children:"\u65B0\u7684 X \u5750\u6807"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":y"]}),(0,t.jsx)(i.td,{children:"\u65B0\u7684 Y \u5750\u6807"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":z"]}),(0,t.jsx)(i.td,{children:"\u65B0\u7684 Z \u5750\u6807"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(i.p,{children:["\u8BE5\u51FD\u6570\u59CB\u7EC8\u8FD4\u56DE ",(0,t.jsx)(i.strong,{children:"true"})]}),"\n",(0,t.jsx)(i.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    new Float:x, Float:y, Float:z;\n    GetPlayerPos(playerid, x, y, z);\n    SetPickupForPlayer(playerid, g_Pickup, 1210, 2, x + 2.0, y + 2.0, z);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": \u521B\u5EFA\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": \u6DFB\u52A0\u9759\u6001\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": \u9500\u6BC1\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": \u9A8C\u8BC1\u62FE\u53D6\u7269\u6709\u6548\u6027"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": \u68C0\u67E5\u62FE\u53D6\u7269\u662F\u5426\u5DF2\u6D41\u52A0\u8F7D\u7ED9\u73A9\u5BB6"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": \u68C0\u67E5\u62FE\u53D6\u7269\u662F\u5426\u5BF9\u73A9\u5BB6\u9690\u85CF"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u6A21\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u6A21\u578B ID"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C ID"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": \u5BF9\u73A9\u5BB6\u663E\u793A\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": \u5BF9\u73A9\u5BB6\u9690\u85CF\u62FE\u53D6\u7269"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return c},a:function(){return s}});var n=r(67294);let t={},l=n.createContext(t);function s(e){let i=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);
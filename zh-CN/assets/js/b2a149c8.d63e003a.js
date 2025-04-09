"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91768"],{43335:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/IsPlayerObjectMoving","title":"IsPlayerObjectMoving","description":"\u68C0\u6D4B\u6307\u5B9A\u73A9\u5BB6\u7269\u4F53\u662F\u5426\u5904\u4E8E\u79FB\u52A8\u4E2D","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerObjectMoving.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerObjectMoving","permalink":"/zh-CN/docs/scripting/functions/IsPlayerObjectMoving","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerObjectMoving.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"},{"inline":true,"label":"\u73A9\u5BB6\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u7269\u4F53"}],"version":"current","frontMatter":{"title":"IsPlayerObjectMoving","sidebar_label":"IsPlayerObjectMoving","description":"\u68C0\u6D4B\u6307\u5B9A\u73A9\u5BB6\u7269\u4F53\u662F\u5426\u5904\u4E8E\u79FB\u52A8\u4E2D","tags":["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerObjectMaterialSlotUsed","permalink":"/zh-CN/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed"},"next":{"title":"IsPlayerPickupStreamedIn","permalink":"/zh-CN/docs/scripting/functions/IsPlayerPickupStreamedIn"}}'),l=n("85893"),i=n("50065");let s={title:"IsPlayerObjectMoving",sidebar_label:"IsPlayerObjectMoving",description:"\u68C0\u6D4B\u6307\u5B9A\u73A9\u5BB6\u7269\u4F53\u662F\u5426\u5904\u4E8E\u79FB\u52A8\u4E2D",tags:["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},c=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u68C0\u6D4B\u6307\u5B9A\u73A9\u5BB6\u7269\u4F53\u662F\u5426\u5904\u4E8E\u79FB\u52A8\u72B6\u6001"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"\u9700\u68C0\u6D4B\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objectid"}),(0,l.jsx)(t.td,{children:"\u5F85\u68C0\u6D4B\u7684\u73A9\u5BB6\u7269\u4F53 ID"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"1"})," - \u73A9\u5BB6\u7269\u4F53\u6B63\u5728\u79FB\u52A8"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"0"})," - \u73A9\u5BB6\u7269\u4F53\u5904\u4E8E\u9759\u6B62"]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.2834, 0.0, 0.0, 96.0);\n\n    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.0, 2.0);\n\n	if (IsPlayerObjectMoving(playerid, gPlayerObject[playerid]))\n	{\n		StopPlayerObject(playerid, gPlayerObject[playerid]);\n	}\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": \u521B\u5EFA\u73A9\u5BB6\u4E13\u5C5E\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": \u9500\u6BC1\u73A9\u5BB6\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": \u9A8C\u8BC1\u73A9\u5BB6\u7269\u4F53\u6709\u6548\u6027"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": \u79FB\u52A8\u73A9\u5BB6\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": \u505C\u6B62\u73A9\u5BB6\u7269\u4F53\u79FB\u52A8"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": \u8BBE\u7F6E\u73A9\u5BB6\u7269\u4F53\u5750\u6807"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": \u8BBE\u7F6E\u73A9\u5BB6\u7269\u4F53\u65CB\u8F6C\u89D2\u5EA6"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": \u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u5750\u6807"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": \u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u65CB\u8F6C\u89D2\u5EA6"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": \u5C06\u73A9\u5BB6\u7269\u4F53\u9644\u52A0\u81F3\u73A9\u5BB6"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": \u521B\u5EFA\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": \u9500\u6BC1\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": \u9A8C\u8BC1\u7269\u4F53\u6709\u6548\u6027"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": \u79FB\u52A8\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsObjectMoving",children:"IsObjectMoving"}),": \u68C0\u6D4B\u7269\u4F53\u79FB\u52A8\u72B6\u6001"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": \u505C\u6B62\u7269\u4F53\u79FB\u52A8"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": \u8BBE\u7F6E\u7269\u4F53\u5750\u6807"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": \u8BBE\u7F6E\u7269\u4F53\u65CB\u8F6C\u89D2\u5EA6"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": \u83B7\u53D6\u7269\u4F53\u5750\u6807"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": \u83B7\u53D6\u7269\u4F53\u65CB\u8F6C\u89D2\u5EA6"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": \u5C06\u7269\u4F53\u9644\u52A0\u81F3\u73A9\u5BB6"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": \u5F53\u73A9\u5BB6\u7269\u4F53\u505C\u6B62\u79FB\u52A8\u65F6\u89E6\u53D1"]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(67294);let l={},i=r.createContext(l);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
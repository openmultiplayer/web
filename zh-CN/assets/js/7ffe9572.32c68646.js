"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["9011"],{85399:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingVehicleID","title":"GetPlayerSurfingVehicleID","description":"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u201C\u51B2\u6D6A\u201D\uFF08\u505C\u7559\u5728\u8F66\u9876\uFF09\u7684\u8F66\u8F86ID\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerSurfingVehicleID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingVehicleID","permalink":"/zh-CN/docs/scripting/functions/GetPlayerSurfingVehicleID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSurfingVehicleID.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingVehicleID","sidebar_label":"GetPlayerSurfingVehicleID","description":"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u201C\u51B2\u6D6A\u201D\uFF08\u505C\u7559\u5728\u8F66\u9876\uFF09\u7684\u8F66\u8F86ID\u3002","tags":["\u73A9\u5BB6","\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingPlayerObjectID","permalink":"/zh-CN/docs/scripting/functions/GetPlayerSurfingPlayerObjectID"},"next":{"title":"GetPlayerTargetActor","permalink":"/zh-CN/docs/scripting/functions/GetPlayerTargetActor"}}'),r=t("85893"),l=t("50065");let c={title:"GetPlayerSurfingVehicleID",sidebar_label:"GetPlayerSurfingVehicleID",description:"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u201C\u51B2\u6D6A\u201D\uFF08\u505C\u7559\u5728\u8F66\u9876\uFF09\u7684\u8F66\u8F86ID\u3002",tags:["\u73A9\u5BB6","\u8F66\u8F86"]},s=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6B63\u5728\u201C\u51B2\u6D6A\u201D\uFF08\u505C\u7559\u5728\u8F66\u9876\uFF09\u7684\u8F66\u8F86 ID\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u67E5\u8BE2\u201C\u51B2\u6D6A\u201D\u8F66\u8F86 ID \u7684\u76EE\u6807\u73A9\u5BB6\u6807\u8BC6\u7B26"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.p,{children:["\u6210\u529F\u8FD4\u56DE\u88AB\u201C\u51B2\u6D6A\u201D\u7684\u8F66\u8F86 ID\u3002\u82E5\u73A9\u5BB6\u672A\u201C\u51B2\u6D6A\u201D\u4EFB\u4F55\u8F66\u8F86\u6216\u76EE\u6807\u8F66\u8F86\u65E0\u9A7E\u9A76\u5458\uFF0C\u8FD4\u56DE",(0,r.jsx)(n.code,{children:"INVALID_VEHICLE_ID"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u82E5\u6307\u5B9A\u73A9\u5BB6\u672A\u8FDE\u63A5\u670D\u52A1\u5668\uFF0C\u540C\u6837\u8FD4\u56DE",(0,r.jsx)(n.code,{children:"INVALID_VEHICLE_ID"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);\nif (surfingVehicleId == INVALID_VEHICLE_ID)\n{\n	SendClientMessage(playerid, COLOR_RED, "\u4F60\u5F53\u524D\u6CA1\u6709\u201C\u51B2\u6D6A\u201D\u4EFB\u4F55\u8F66\u8F86\u3002");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u4E58\u5750\u7684\u8F66\u8F86 ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": \u68C0\u6D4B\u73A9\u5BB6\u5728\u8F66\u8F86\u5185\u7684\u5EA7\u4F4D\u4F4D\u7F6E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerSurfingObjectID",children:"GetPlayerSurfingObjectID"}),": \u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u201C\u51B2\u6D6A\u201D\u7684\u7269\u4F53 ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerSurfingOffsets",children:"GetPlayerSurfingOffsets"}),": \u83B7\u53D6\u73A9\u5BB6\u201C\u51B2\u6D6A\u201D\u65F6\u7684\u5750\u6807\u504F\u79FB\u91CF"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let r={},l=i.createContext(r);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
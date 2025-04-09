"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95066"],{89872:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerVehicleID","title":"GetPlayerVehicleID","description":"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5728\u7684\u8F66\u8F86ID","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerVehicleID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVehicleID","permalink":"/zh-CN/docs/scripting/functions/GetPlayerVehicleID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVehicleID.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetPlayerVehicleID","sidebar_label":"GetPlayerVehicleID","description":"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5728\u7684\u8F66\u8F86ID","tags":["\u73A9\u5BB6","\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTrainSpeed","permalink":"/zh-CN/docs/scripting/functions/GetPlayerTrainSpeed"},"next":{"title":"GetPlayerVehicleSeat","permalink":"/zh-CN/docs/scripting/functions/GetPlayerVehicleSeat"}}'),l=t("85893"),r=t("50065");let c={title:"GetPlayerVehicleID",sidebar_label:"GetPlayerVehicleID",description:"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5728\u7684\u8F66\u8F86ID",tags:["\u73A9\u5BB6","\u8F66\u8F86"]},s=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u4E58\u5750\u7684\u8F66\u8F86 ID"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A"})," \u5E76\u975E\u8F66\u8F86\u7684\u6A21\u578B ID\uFF0C\u83B7\u53D6\u6A21\u578B ID \u8BF7\u53C2\u8003",(0,l.jsx)(n.a,{href:"GetVehicleModel",children:"GetVehicleModel"})]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540D\u79F0"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u83B7\u53D6\u8F66\u8F86\u4FE1\u606F\u7684\u73A9\u5BB6 ID"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:["\u8F66\u8F86 ID\uFF0C\u82E5\u4E0D\u5728\u8F66\u8F86\u4E2D\u5219\u8FD4\u56DE",(0,l.jsx)(n.strong,{children:"0"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"// \u5F53\u73A9\u5BB6\u5728\u8F66\u8F86\u4E2D\u65F6\u6DFB\u52A010\u500D\u6C2E\u6C14\u52A0\u901F\uFF08\u53EF\u901A\u8FC7\u6307\u4EE4\u89E6\u53D1\uFF09\nnew vehicleId = GetPlayerVehicleID(playerid);\nif (vehicleId != 0)\n{\n    AddVehicleComponent(vehicleId, 1010);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInVehicle",children:"IsPlayerInVehicle"}),": \u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u5904\u4E8E\u7279\u5B9A\u8F66\u8F86"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInAnyVehicle",children:"IsPlayerInAnyVehicle"}),": \u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u5904\u4E8E\u4EFB\u4F55\u8F66\u8F86"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": \u83B7\u53D6\u73A9\u5BB6\u6240\u5728\u8F66\u8F86\u5EA7\u4F4D\u53F7"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": \u83B7\u53D6\u8F66\u8F86\u7684\u6A21\u578B ID"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let l={},r=i.createContext(l);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
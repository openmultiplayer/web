"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["31705"],{27163:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>h,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/GetVehicleModel","title":"GetVehicleModel","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u6A21\u578BID\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleModel","permalink":"/zh-CN/docs/scripting/functions/GetVehicleModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleModel.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetVehicleModel","sidebar_label":"GetVehicleModel","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u6A21\u578BID\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleMatrix","permalink":"/zh-CN/docs/scripting/functions/GetVehicleMatrix"},"next":{"title":"GetVehicleModelCount","permalink":"/zh-CN/docs/scripting/functions/GetVehicleModelCount"}}'),l=i("85893"),r=i("50065");let c={title:"GetVehicleModel",sidebar_label:"GetVehicleModel",description:"\u83B7\u53D6\u8F66\u8F86\u7684\u6A21\u578BID\u3002",tags:["\u8F66\u8F86"]},s=void 0,d={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u7684\u6A21\u578B ID\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u67E5\u8BE2\u7684\u76EE\u6807\u8F66\u8F86 ID"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD4\u56DE\u8F66\u8F86\u7684",(0,l.jsx)(n.a,{href:"../resources/vehicleid",children:"\u6A21\u578B ID"}),"\uFF0C\u82E5\u8F66\u8F86\u4E0D\u5B58\u5728\u5219\u8FD4\u56DE ",(0,l.jsx)(n.strong,{children:"0"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    if (GetVehicleModel(vehicleid) == 411) // 411\u662FInfernus\u8F66\u578B\n    {\n        SendClientMessage(playerid, 0xFFFFFFFF, "\u9177\u70AB\u7684Infernus!");\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": \u83B7\u53D6\u73A9\u5BB6\u6240\u5728\u8F66\u8F86\u7684 ID"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": \u83B7\u53D6\u8F66\u8F86\u7684\u5750\u6807\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": \u83B7\u53D6\u8F66\u8F86\u5F53\u524D\u7684\u6C34\u5E73\u65CB\u8F6C\u89D2\u5EA6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": \u68C0\u6D4B\u73A9\u5BB6\u6240\u5728\u7684\u8F66\u8F86\u5EA7\u4F4D"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/vehicleid",children:"\u8F66\u8F86\u6A21\u578B ID \u5BF9\u7167\u8868"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return c}});var t=i(67294);let l={},r=t.createContext(l);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
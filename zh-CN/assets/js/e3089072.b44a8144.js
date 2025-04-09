"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["27036"],{43555:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetVehicleParamsCarWindows","title":"SetVehicleParamsCarWindows","description":"\u5141\u8BB8\u5F00\u5173\u8F66\u8F86\u7684\u8F66\u7A97\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleParamsCarWindows.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsCarWindows","permalink":"/zh-CN/docs/scripting/functions/SetVehicleParamsCarWindows","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleParamsCarWindows.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"SetVehicleParamsCarWindows","sidebar_label":"SetVehicleParamsCarWindows","description":"\u5141\u8BB8\u5F00\u5173\u8F66\u8F86\u7684\u8F66\u7A97\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsCarDoors","permalink":"/zh-CN/docs/scripting/functions/SetVehicleParamsCarDoors"},"next":{"title":"SetVehicleParamsEx","permalink":"/zh-CN/docs/scripting/functions/SetVehicleParamsEx"}}'),s=r("85893"),i=r("50065");let l={title:"SetVehicleParamsCarWindows",sidebar_label:"SetVehicleParamsCarWindows",description:"\u5141\u8BB8\u5F00\u5173\u8F66\u8F86\u7684\u8F66\u7A97\u3002",tags:["\u8F66\u8F86"]},a=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnZH_CN:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(t.p,{children:"\u63A7\u5236\u8F66\u8F86\u8F66\u7A97\u7684\u5F00\u5173\u72B6\u6001\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540D\u79F0"}),(0,s.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"\u8981\u8BBE\u7F6E\u8F66\u7A97\u7684\u8F66\u8F86 ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":frontLeft"]}),(0,s.jsx)(t.td,{children:"\u9A7E\u9A76\u5EA7\u8F66\u7A97\u72B6\u6001\uFF080=\u5F00\u542F\uFF0C1=\u5173\u95ED\uFF09"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":frontRight"]}),(0,s.jsx)(t.td,{children:"\u526F\u9A7E\u9A76\u5EA7\u8F66\u7A97\u72B6\u6001\uFF080=\u5F00\u542F\uFF0C1=\u5173\u95ED\uFF09"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":rearLeft"]}),(0,s.jsx)(t.td,{children:"\u5DE6\u540E\u8F66\u7A97\u72B6\u6001\uFF08\u82E5\u5B58\u5728\uFF0C0=\u5F00\u542F\uFF0C1=\u5173\u95ED\uFF09"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":rearRight"]}),(0,s.jsx)(t.td,{children:"\u53F3\u540E\u8F66\u7A97\u72B6\u6001\uFF08\u82E5\u5B58\u5728\uFF0C0=\u5F00\u542F\uFF0C1=\u5173\u95ED\uFF09"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002\u8F66\u8F86\u4E0D\u5B58\u5728\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetVehicleParamsCarDoors",children:"SetVehicleParamsCarDoors"}),": \u63A7\u5236\u8F66\u8F86\u8F66\u95E8\u5F00\u5173"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleParamsCarDoors",children:"GetVehicleParamsCarDoors"}),": \u83B7\u53D6\u8F66\u8F86\u8F66\u95E8\u72B6\u6001"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleParamsCarWindows",children:"GetVehicleParamsCarWindows"}),": \u83B7\u53D6\u8F66\u8F86\u8F66\u7A97\u72B6\u6001"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(67294);let s={},i=n.createContext(s);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
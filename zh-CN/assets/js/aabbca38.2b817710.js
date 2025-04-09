"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93182"],{38472:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetVehicleNumberPlate","title":"GetVehicleNumberPlate","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u724C\u7167\u53F7\u7801\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleNumberPlate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleNumberPlate","permalink":"/zh-CN/docs/scripting/functions/GetVehicleNumberPlate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleNumberPlate.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetVehicleNumberPlate","sidebar_label":"GetVehicleNumberPlate","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u724C\u7167\u53F7\u7801\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModelsUsed","permalink":"/zh-CN/docs/scripting/functions/GetVehicleModelsUsed"},"next":{"title":"GetVehicleOccupiedTick","permalink":"/zh-CN/docs/scripting/functions/GetVehicleOccupiedTick"}}'),l=n("85893"),r=n("50065");let c={title:"GetVehicleNumberPlate",sidebar_label:"GetVehicleNumberPlate",description:"\u83B7\u53D6\u8F66\u8F86\u7684\u724C\u7167\u53F7\u7801\u3002",tags:["\u8F66\u8F86"]},s=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarnZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u83B7\u53D6\u8F66\u8F86\u7684\u724C\u7167\u53F7\u7801\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"\u8F66\u8F86 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"plate[]"}),(0,l.jsx)(t.td,{children:"\u7528\u4E8E\u5B58\u50A8\u8F66\u724C\u53F7\u7684\u6570\u7EC4\uFF0C\u901A\u8FC7\u5F15\u7528\u4F20\u9012\u3002"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"len = sizeof (plate)"}),(0,l.jsx)(t.td,{children:"\u5E94\u5F53\u5B58\u50A8\u7684\u8F66\u724C\u5B57\u7B26\u957F\u5EA6\u3002"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n    SetVehicleNumberPlate(vehicleid, "ABCD 123");\n\n    new numberPlate[16];\n    GetVehicleNumberPlate(vehicleid, numberPlate);\n    // numberPlate = "ABCD 123"\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleNumberPlate",children:"SetVehicleNumberPlate"}),": \u8BBE\u7F6E\u8F66\u8F86\u724C\u7167"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var i=n(67294);let l={},r=i.createContext(l);function c(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
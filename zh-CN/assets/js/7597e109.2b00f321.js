"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16548"],{91189:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>l,assets:()=>d,toc:()=>o,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/GetVehicleVirtualWorld","title":"GetVehicleVirtualWorld","description":"\u83B7\u53D6\u8F66\u8F86\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleVirtualWorld","permalink":"/zh-CN/docs/scripting/functions/GetVehicleVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleVirtualWorld.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetVehicleVirtualWorld","sidebar_label":"GetVehicleVirtualWorld","description":"\u83B7\u53D6\u8F66\u8F86\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleVelocity","permalink":"/zh-CN/docs/scripting/functions/GetVehicleVelocity"},"next":{"title":"GetVehicleZAngle","permalink":"/zh-CN/docs/scripting/functions/GetVehicleZAngle"}}'),n=i("85893"),r=i("50065");let c={title:"GetVehicleVirtualWorld",sidebar_label:"GetVehicleVirtualWorld",description:"\u83B7\u53D6\u8F66\u8F86\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7\u3002",tags:["\u8F66\u8F86"]},s=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,n.jsx)(t.p,{children:"\u83B7\u53D6\u8F66\u8F86\u5F53\u524D\u6240\u5904\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7\u3002"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,n.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"\u76EE\u6807\u8F66\u8F86\u7684 ID \u7F16\u53F7"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,n.jsx)(t.p,{children:"\u8FD4\u56DE\u6574\u578B\u6570\u503C\u8868\u793A\u8F66\u8F86\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7"}),"\n",(0,n.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new\n	vehicleWorld = GetVehicleVirtualWorld(vehicleid);\nSetPlayerVirtualWorld(playerid, vehicleWorld);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": \u8BBE\u7F6E\u8F66\u8F86\u6240\u5904\u7684\u865A\u62DF\u4E16\u754C"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6240\u5728\u7684\u865A\u62DF\u4E16\u754C\u7F16\u53F7"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return c}});var l=i(67294);let n={},r=l.createContext(n);function c(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);
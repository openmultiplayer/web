"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80522"],{19830:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>c,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerSpectateID","title":"GetPlayerSpectateID","description":"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u89C2\u6218\u7684\u76EE\u6807ID\uFF08\u73A9\u5BB6\u6216\u8F66\u8F86\uFF09","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerSpectateID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSpectateID","permalink":"/zh-CN/docs/scripting/functions/GetPlayerSpectateID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSpectateID.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"GetPlayerSpectateID","sidebar_label":"GetPlayerSpectateID","description":"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u89C2\u6218\u7684\u76EE\u6807ID\uFF08\u73A9\u5BB6\u6216\u8F66\u8F86\uFF09","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpecialAction","permalink":"/zh-CN/docs/scripting/functions/GetPlayerSpecialAction"},"next":{"title":"GetPlayerSpectateType","permalink":"/zh-CN/docs/scripting/functions/GetPlayerSpectateType"}}'),i=n("85893"),l=n("50065");let c={title:"GetPlayerSpectateID",sidebar_label:"GetPlayerSpectateID",description:"\u83B7\u53D6\u73A9\u5BB6\u6B63\u5728\u89C2\u6218\u7684\u76EE\u6807ID\uFF08\u73A9\u5BB6\u6216\u8F66\u8F86\uFF09",tags:["\u73A9\u5BB6"]},a=void 0,s={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u6269\u5C55\u8D44\u6E90",id:"\u6269\u5C55\u8D44\u6E90",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6B63\u5728\u89C2\u6218\u7684\u73A9\u5BB6\u6216\u8F66\u8F86\u7684 ID"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"\u73A9\u5BB6 ID"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u8FD4\u56DE\u88AB\u89C2\u6218\u76EE\u6807\u7684 ID\uFF08\u73A9\u5BB6 ID \u6216\u8F66\u8F86 ID\uFF09"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new spectateType = GetPlayerSpectateType(playerid);\n\nif (spectateType == 1)\n{\n    new spectateVehicleId = GetPlayerSpectateID(playerid);\n}\nelse if (spectateType == 2)\n{\n    new spectatePlayerId = GetPlayerSpectateID(playerid);\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["\u9700\u8981\u914D\u5408",(0,i.jsx)(t.a,{href:"GetPlayerSpectateType",children:"GetPlayerSpectateType"}),"\u5224\u65AD\u89C2\u6218\u7C7B\u578B\uFF0C\u8BE6\u89C1",(0,i.jsx)(t.a,{href:"../resources/spectatetypes",children:"\u89C2\u6218\u7C7B\u578B\u8BF4\u660E"})]})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerSpectatePlayer",children:"PlayerSpectatePlayer"}),": \u89C2\u6218\u6307\u5B9A\u73A9\u5BB6"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerSpectateVehicle",children:"PlayerSpectateVehicle"}),": \u89C2\u6218\u6307\u5B9A\u8F66\u8F86"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": \u5207\u6362\u73A9\u5BB6\u89C2\u6218\u72B6\u6001"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerSpectateType",children:"GetPlayerSpectateType"}),": \u83B7\u53D6\u73A9\u5BB6\u89C2\u6218\u7C7B\u578B"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u6269\u5C55\u8D44\u6E90",children:"\u6269\u5C55\u8D44\u6E90"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/spectatetypes",children:"\u89C2\u6218\u7C7B\u578B\u8BF4\u660E"})}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var r=n(67294);let i={},l=r.createContext(i);function c(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
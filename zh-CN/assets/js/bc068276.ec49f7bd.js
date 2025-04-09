"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51342"],{52091:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetVehicleLastDriver","title":"GetVehicleLastDriver","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u6700\u540E\u9A7E\u9A76\u5458\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleLastDriver.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleLastDriver","permalink":"/zh-CN/docs/scripting/functions/GetVehicleLastDriver","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleLastDriver.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetVehicleLastDriver","sidebar_label":"GetVehicleLastDriver","description":"\u83B7\u53D6\u8F66\u8F86\u7684\u6700\u540E\u9A7E\u9A76\u5458\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleLandingGearState","permalink":"/zh-CN/docs/scripting/functions/GetVehicleLandingGearState"},"next":{"title":"GetVehicleMatrix","permalink":"/zh-CN/docs/scripting/functions/GetVehicleMatrix"}}'),r=n("85893"),l=n("50065");let c={title:"GetVehicleLastDriver",sidebar_label:"GetVehicleLastDriver",description:"\u83B7\u53D6\u8F66\u8F86\u7684\u6700\u540E\u9A7E\u9A76\u5458\u3002",tags:["\u8F66\u8F86"]},s=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u7684\u6700\u540E\u9A7E\u9A76\u5458\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"\u76EE\u6807\u8F66\u8F86\u7684 ID\u3002"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(t.p,{children:"\u8FD4\u56DE\u6700\u540E\u9A7E\u9A76\u5458\u7684\u73A9\u5BB6 ID\u3002"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"INVALID_PLAYER_ID"})," - \u8868\u793A\u8BE5\u8F66\u8F86\u6CA1\u6709\u6700\u540E\u9A7E\u9A76\u5458\u8BB0\u5F55"]}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new g_Vehicle;\n\npublic OnGameModeInit()\n{\n    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n}\n\npublic OnGameModeExit()\n{\n    new lastDriver = GetVehicleLastDriver(g_Vehicle);\n    if (lastDriver != INVALID_PLAYER_ID)\n    {\n        printf("\u8F66\u8F86ID %d \u7684\u6700\u540E\u9A7E\u9A76\u5458: %d", g_Vehicle, lastDriver);\n    }\n    else\n    {\n        printf("\u8F66\u8F86ID %d \u6CA1\u6709\u6700\u540E\u9A7E\u9A76\u5458\u8BB0\u5F55", g_Vehicle);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleDriver",children:"GetVehicleDriver"}),": \u83B7\u53D6\u5F53\u524D\u9A7E\u9A76\u8F66\u8F86\u7684\u73A9\u5BB6 ID"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var i=n(67294);let r={},l=i.createContext(r);function c(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
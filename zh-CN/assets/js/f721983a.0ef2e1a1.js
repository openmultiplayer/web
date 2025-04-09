"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54040"],{79139:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>t});var l=JSON.parse('{"id":"scripting/functions/PlayerGangZoneShow","title":"PlayerGangZoneShow","description":"\u4EE5\u6307\u5B9A\u989C\u8272\u663E\u793A\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerGangZoneShow.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerGangZoneShow","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneShow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerGangZoneShow.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u5E2E\u6D3E\u533A\u57DF"},{"inline":true,"label":"\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"}],"version":"current","frontMatter":{"title":"PlayerGangZoneShow","sidebar_label":"PlayerGangZoneShow","description":"\u4EE5\u6307\u5B9A\u989C\u8272\u663E\u793A\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF","tags":["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF","\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneGetPos","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneHide"},"next":{"title":"PlayerGangZoneStopFlash","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneStopFlash"}}'),a=r("85893"),i=r("50065");let s={title:"PlayerGangZoneShow",sidebar_label:"PlayerGangZoneShow",description:"\u4EE5\u6307\u5B9A\u989C\u8272\u663E\u793A\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF",tags:["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF","\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]},t=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnZH_CN:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u5411\u6307\u5B9A\u73A9\u5BB6\u663E\u793A\u7279\u5B9A\u989C\u8272\u7684\u5E2E\u6D3E\u533A\u57DF"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570"}),(0,a.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zoneid"}),(0,a.jsx)(n.td,{children:"\u8981\u663E\u793A\u7684\u5E2E\u6D3E\u533A\u57DF ID"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"colour"}),(0,a.jsx)(n.td,{children:"\u663E\u793A\u4F7F\u7528\u7684 RGBA \u989C\u8272\u503C"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1:"})," \u64CD\u4F5C\u6210\u529F\u6267\u884C\uFF08\u5305\u62EC\u533A\u57DF\u5DF2\u663E\u793A\u7684\u60C5\u51B5\uFF09"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"0:"})," \u6267\u884C\u5931\u8D25\uFF08\u6307\u5B9A\u5E2E\u6D3E\u533A\u57DF\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// \u5168\u5C40\u53D8\u91CF\u5B58\u50A8\u5E2E\u6D3E\u533A\u57DFID\nnew gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};\n\npublic OnPlayerConnect(playerid)\n{\n    // \u521B\u5EFA\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\uFF08\u5750\u6807\uFF1A2236.1475,2424.7266 \u81F3 2319.1636,2502.4348\uFF09\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    // \u4EE5\u7EAF\u767D\u4E0D\u900F\u660E\u989C\u8272\u663E\u793A\u533A\u57DF\uFF08RGBA: 0xFFFFFFFF\uFF09\n    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFFFFFFFF);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": \u521B\u5EFA\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": \u9500\u6BC1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": \u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": \u542F\u52A8\u95EA\u70C1\u6548\u679C"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": \u505C\u6B62\u95EA\u70C1"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": \u83B7\u53D6\u57FA\u7840\u989C\u8272\u503C"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": \u83B7\u53D6\u95EA\u70C1\u989C\u8272\u503C"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": \u83B7\u53D6\u533A\u57DF\u5750\u6807\u8303\u56F4\uFF08\u6700\u5C0F X/Y\uFF0C\u6700\u5927 X/Y\uFF09"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": \u9A8C\u8BC1\u533A\u57DF\u6709\u6548\u6027"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": \u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u5728\u533A\u57DF\u5185"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": \u68C0\u6D4B\u533A\u57DF\u53EF\u89C1\u6027"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": \u68C0\u6D4B\u533A\u57DF\u95EA\u70C1\u72B6\u6001"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": \u542F\u7528\u533A\u57DF\u8FDB\u51FA\u56DE\u8C03\u68C0\u6D4B"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return s}});var l=r(67294);let a={},i=l.createContext(a);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);
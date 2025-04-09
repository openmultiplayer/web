"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2788"],{87202:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>l,assets:()=>t,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"scripting/functions/PlayerGangZoneGetFlashColour","title":"PlayerGangZoneGetFlashColour","description":"\u83B7\u53D6\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\u7684\u95EA\u70C1\u989C\u8272\u503C","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/PlayerGangZoneGetFlashColour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerGangZoneGetFlashColour","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneGetFlashColour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerGangZoneGetFlashColour.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u5E2E\u6D3E\u533A\u57DF"},{"inline":true,"label":"\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"}],"version":"current","frontMatter":{"title":"PlayerGangZoneGetFlashColour","sidebar_label":"PlayerGangZoneGetFlashColour","description":"\u83B7\u53D6\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\u7684\u95EA\u70C1\u989C\u8272\u503C","tags":["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF","\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneGetColour","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneGetColour"},"next":{"title":"PlayerGangZoneGetPos","permalink":"/zh-CN/docs/scripting/functions/PlayerGangZoneGetPos"}}'),a=r("85893"),s=r("50065");let o={title:"PlayerGangZoneGetFlashColour",sidebar_label:"PlayerGangZoneGetFlashColour",description:"\u83B7\u53D6\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\u7684\u95EA\u70C1\u989C\u8272\u503C",tags:["\u73A9\u5BB6","\u5E2E\u6D3E\u533A\u57DF","\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]},i=void 0,t={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarnZH_CN:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\u7684\u5F53\u524D\u95EA\u70C1\u989C\u8272"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570"}),(0,a.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"zoneid"}),(0,a.jsx)(n.td,{children:"\u8981\u67E5\u8BE2\u7684\u5E2E\u6D3E\u533A\u57DF ID"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(n.p,{children:"\u5E2E\u6D3E\u533A\u57DF\u7684\u95EA\u70C1 RGBA \u989C\u8272\u503C"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"0:"})," \u6267\u884C\u5931\u8D25\uFF08\u533A\u57DF\u672A\u663E\u793A\u6216\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new gGangZoneID[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // \u521B\u5EFA\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    // \u4EE5\u7EA2\u8272\u534A\u900F\u660E\u663E\u793A\u533A\u57DF\uFF08RGBA: 0xFF0000FF\uFF09\n    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);\n\n    // \u542F\u52A8\u84DD\u7EFF\u8272\u95EA\u70C1\u6548\u679C\uFF08RGBA: 0x45D1ABFF\uFF09\n    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0x45D1ABFF);\n\n    // \u83B7\u53D6\u5F53\u524D\u95EA\u70C1\u989C\u8272\n    new flashColour = PlayerGangZoneGetFlashColour(playerid, gGangZoneID[playerid]);\n    // flashColour = 0x45D1ABFF\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": \u521B\u5EFA\u73A9\u5BB6\u4E13\u5C5E\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": \u9500\u6BC1\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": \u663E\u793A\u6307\u5B9A\u989C\u8272\u7684\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": \u9690\u85CF\u5E2E\u6D3E\u533A\u57DF"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": \u542F\u52A8\u95EA\u70C1\u6548\u679C"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": \u505C\u6B62\u95EA\u70C1"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": \u83B7\u53D6\u57FA\u7840\u989C\u8272\u503C"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": \u83B7\u53D6\u533A\u57DF\u5750\u6807\u8303\u56F4\uFF08\u6700\u5C0F X/Y\uFF0C\u6700\u5927 X/Y\uFF09"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": \u9A8C\u8BC1\u533A\u57DF\u6709\u6548\u6027"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": \u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u5728\u533A\u57DF\u5185"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": \u68C0\u6D4B\u533A\u57DF\u53EF\u89C1\u6027"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": \u68C0\u6D4B\u533A\u57DF\u95EA\u70C1\u72B6\u6001"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": \u542F\u7528\u533A\u57DF\u8FDB\u51FA\u56DE\u8C03\u68C0\u6D4B"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var l=r(67294);let a={},s=l.createContext(a);function o(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
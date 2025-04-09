"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95557"],{45579:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/GetPlayerKeys","title":"GetPlayerKeys","description":"\u68C0\u6D4B\u73A9\u5BB6\u5F53\u524D\u6309\u4E0B\u7684\u6309\u952E\u72B6\u6001","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerKeys.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerKeys","permalink":"/zh-CN/docs/scripting/functions/GetPlayerKeys","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerKeys.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"GetPlayerKeys","sidebar_label":"GetPlayerKeys","description":"\u68C0\u6D4B\u73A9\u5BB6\u5F53\u524D\u6309\u4E0B\u7684\u6309\u952E\u72B6\u6001","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerIp","permalink":"/zh-CN/docs/scripting/functions/GetPlayerIp"},"next":{"title":"GetPlayerLandingGearState","permalink":"/zh-CN/docs/scripting/functions/GetPlayerLandingGearState"}}'),r=t("85893"),s=t("50065");let l={title:"GetPlayerKeys",sidebar_label:"GetPlayerKeys",description:"\u68C0\u6D4B\u73A9\u5BB6\u5F53\u524D\u6309\u4E0B\u7684\u6309\u952E\u72B6\u6001",tags:["\u73A9\u5BB6"]},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u68C0\u6D4B\u73A9\u5BB6\u5F53\u524D\u64CD\u4F5C\u7684\u6309\u952E\u72B6\u6001\uFF08\u884C\u8D70/\u9A7E\u9A76\u63A7\u5236\uFF09"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u68C0\u6D4B\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["&KEY",":keys"]}),(0,r.jsxs)(n.td,{children:["\u5B58\u50A8\u6309\u952E\u4F4D\u63A9\u7801\u7684\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u68C0\u6D4B\u7279\u5B9A\u529F\u80FD\u952E\u72B6\u6001\uFF0C\u8BE6\u89C1",(0,r.jsx)(n.a,{href:"../resources/keys",children:"\u6309\u952E\u4F4D\u63A9\u7801\u8BF4\u660E"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"&updown"}),(0,r.jsx)(n.td,{children:"\u5B58\u50A8\u4E0A\u4E0B\u65B9\u5411\u952E\u72B6\u6001\uFF08KEY_UP/KEY_DOWN\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"&leftright"}),(0,r.jsx)(n.td,{children:"\u5B58\u50A8\u5DE6\u53F3\u65B9\u5411\u952E\u72B6\u6001\uFF08KEY_LEFT/KEY_RIGHT\uFF09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u6309\u952E\u72B6\u6001\u6570\u636E\u5C06\u5B58\u50A8\u5728\u6307\u5B9A\u7684\u53D8\u91CF\u4E2D"}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new\n        KEY:keys, updown, leftright;\n\n    GetPlayerKeys(playerid, keys, updown, leftright);\n\n    if (updown == KEY_UP)\n    {\n        SendClientMessage(playerid, -1, "\u4E0A\u65B9\u5411\u952E\u6309\u4E0B");\n    }\n    else if (updown == KEY_DOWN)\n    {\n        SendClientMessage(playerid, -1, "\u4E0B\u65B9\u5411\u952E\u6309\u4E0B");\n    }\n\n    if (leftright == KEY_LEFT)\n    {\n        SendClientMessage(playerid, -1, "\u5DE6\u65B9\u5411\u952E\u6309\u4E0B");\n    }\n    else if (leftright == KEY_RIGHT)\n    {\n        SendClientMessage(playerid, -1, "\u53F3\u65B9\u5411\u952E\u6309\u4E0B");\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4EC5\u80FD\u68C0\u6D4B\u529F\u80FD\u6620\u5C04\uFF0C\u800C\u975E\u7269\u7406\u6309\u952E\u3002\u4F8B\u5982\u65E0\u6CD5\u76F4\u63A5\u68C0\u6D4B\u7A7A\u683C\u952E\uFF0C\u4F46\u53EF\u68C0\u6D4B SPRINT \u529F\u80FD\uFF08\u9ED8\u8BA4\u6620\u5C04\u4E3A\u7A7A\u683C\uFF09"}),"\n",(0,r.jsx)(n.li,{children:"\u81EA 0.3.7 \u7248\u672C\u8D77\uFF0C\u8F66\u8F86\u4E2D\u7684 A/D \u952E\u65E0\u6CD5\u68C0\u6D4B\uFF0C\u4F46\u53EF\u901A\u8FC7 keys \u53C2\u6570\u68C0\u6D4B W/S \u952E"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/keys",children:"\u6309\u952E\u4F4D\u63A9\u7801\u5BF9\u7167\u8868"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
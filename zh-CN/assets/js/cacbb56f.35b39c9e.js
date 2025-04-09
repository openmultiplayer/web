"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94399"],{34906:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/NetStats_MessagesSent","title":"NetStats_MessagesSent","description":"\u83B7\u53D6\u670D\u52A1\u5668\u5411\u73A9\u5BB6\u53D1\u9001\u7684\u6D88\u606F\u6570\u91CF","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/NetStats_MessagesSent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_MessagesSent","permalink":"/zh-CN/docs/scripting/functions/NetStats_MessagesSent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/NetStats_MessagesSent.md","tags":[{"inline":true,"label":"\u7F51\u7EDC\u76D1\u63A7","permalink":"/zh-CN/docs/tags/\u7F51\u7EDC\u76D1\u63A7"}],"version":"current","frontMatter":{"title":"NetStats_MessagesSent","sidebar_label":"NetStats_MessagesSent","description":"\u83B7\u53D6\u670D\u52A1\u5668\u5411\u73A9\u5BB6\u53D1\u9001\u7684\u6D88\u606F\u6570\u91CF","tags":["\u7F51\u7EDC\u76D1\u63A7"]},"sidebar":"docsSidebar","previous":{"title":"NetStats_MessagesRecvPerSecond","permalink":"/zh-CN/docs/scripting/functions/NetStats_MessagesRecvPerSecond"},"next":{"title":"NetStats_PacketLossPercent","permalink":"/zh-CN/docs/scripting/functions/NetStats_PacketLossPercent"}}'),i=s("85893"),r=s("50065");let a={title:"NetStats_MessagesSent",sidebar_label:"NetStats_MessagesSent",description:"\u83B7\u53D6\u670D\u52A1\u5668\u5411\u73A9\u5BB6\u53D1\u9001\u7684\u6D88\u606F\u6570\u91CF",tags:["\u7F51\u7EDC\u76D1\u63A7"]},c=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u7528\u4E8E\u83B7\u53D6\u670D\u52A1\u5668\u5411\u6307\u5B9A\u73A9\u5BB6\u53D1\u9001\u7684\u7F51\u7EDC\u6D88\u606F\u603B\u6570"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"\u8981\u83B7\u53D6\u6570\u636E\u7684\u73A9\u5BB6 ID"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u670D\u52A1\u5668\u5411\u8BE5\u73A9\u5BB6\u53D1\u9001\u7684\u7F51\u7EDC\u6D88\u606F\u603B\u6570"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/msgsent"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "\u670D\u52A1\u5668\u5DF2\u5411\u60A8\u53D1\u9001\u4E86 %i \u6761\u7F51\u7EDC\u6D88\u606F", NetStats_MessagesSent(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": \u83B7\u53D6\u73A9\u5BB6\u7F51\u7EDC\u7EDF\u8BA1\u6570\u636E\u5E76\u5B58\u5165\u5B57\u7B26\u4E32"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": \u83B7\u53D6\u670D\u52A1\u5668\u7F51\u7EDC\u7EDF\u8BA1\u6570\u636E\u5E76\u5B58\u5165\u5B57\u7B26\u4E32"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": \u83B7\u53D6\u73A9\u5BB6\u6301\u7EED\u8FDE\u63A5\u65F6\u95F4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": \u83B7\u53D6\u670D\u52A1\u5668\u63A5\u6536\u7684\u6D88\u606F\u603B\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": \u83B7\u53D6\u670D\u52A1\u5668\u63A5\u6536\u7684\u5B57\u8282\u603B\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": \u83B7\u53D6\u670D\u52A1\u5668\u53D1\u9001\u7684\u5B57\u8282\u603B\u6570"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": \u83B7\u53D6\u6BCF\u79D2\u63A5\u6536\u7684\u6D88\u606F\u6570\u91CF"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": \u83B7\u53D6\u73A9\u5BB6\u4E22\u5305\u7387\u767E\u5206\u6BD4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": \u83B7\u53D6\u73A9\u5BB6\u8FDE\u63A5\u72B6\u6001"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": \u83B7\u53D6\u73A9\u5BB6 IP \u5730\u5740\u4E0E\u7AEF\u53E3\u53F7"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return a}});var n=s(67294);let i={},r=n.createContext(i);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
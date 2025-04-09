"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94944"],{28903:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetPVarString","title":"SetPVarString","description":"\u5C06\u5B57\u7B26\u4E32\u4FDD\u5B58\u5230\u73A9\u5BB6\u53D8\u91CF\u4E2D\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPVarString","permalink":"/zh-CN/docs/scripting/functions/SetPVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPVarString.md","tags":[{"inline":true,"label":"\u73A9\u5BB6\u53D8\u91CF","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u53D8\u91CF"},{"inline":true,"label":"pvar","permalink":"/zh-CN/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"SetPVarString","sidebar_label":"SetPVarString","description":"\u5C06\u5B57\u7B26\u4E32\u4FDD\u5B58\u5230\u73A9\u5BB6\u53D8\u91CF\u4E2D\u3002","tags":["\u73A9\u5BB6\u53D8\u91CF","pvar"]},"sidebar":"docsSidebar","previous":{"title":"SetPVarInt","permalink":"/zh-CN/docs/scripting/functions/SetPVarInt"},"next":{"title":"SetPickupForPlayer","permalink":"/zh-CN/docs/scripting/functions/SetPickupForPlayer"}}'),i=t("85893"),s=t("50065");let l={title:"SetPVarString",sidebar_label:"SetPVarString",description:"\u5C06\u5B57\u7B26\u4E32\u4FDD\u5B58\u5230\u73A9\u5BB6\u53D8\u91CF\u4E2D\u3002",tags:["\u73A9\u5BB6\u53D8\u91CF","pvar"]},c=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u91CD\u8981\u8BF4\u660E",id:"\u91CD\u8981\u8BF4\u660E",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u5B57\u7B26\u4E32\u4FDD\u5B58\u5230\u73A9\u5BB6\u53D8\u91CF\u4E2D\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"\u8981\u8BBE\u7F6E\u53D8\u91CF\u7684\u73A9\u5BB6 ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const pvar[]"}),(0,i.jsx)(n.td,{children:"\u73A9\u5BB6\u53D8\u91CF\u540D\u79F0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const value[]"}),(0,i.jsx)(n.td,{children:"\u8981\u4FDD\u5B58\u7684\u5B57\u7B26\u4E32\u503C"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(n.td,{children:"\u4E0D\u5B9A\u6570\u91CF\u7684\u4EFB\u610F\u6807\u7B7E\u53C2\u6570"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new\n        hours,\n        minutes,\n        seconds,\n        string[46];\n\n    gettime(hours, minutes, seconds); // \u83B7\u53D6\u5F53\u524D\u65F6\u95F4\n    format(string, sizeof(string), "\u8FDE\u63A5\u65F6\u95F4 %02d:%02d:%02d", hours, minutes, seconds); // \u521B\u5EFA\u5305\u542B\u8FDE\u63A5\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\n    SetPVarString(playerid, "timeconnected", string); // \u5C06\u5B57\u7B26\u4E32\u5B58\u5165\u73A9\u5BB6\u53D8\u91CF\n\n    // \u4E13\u4E1A\u5EFA\u8BAE\uFF1Aopen.mp\u4E2D\u65E0\u9700\u4F7F\u7528format\n    SetPVarString(playerid, "timeconnected", "\u8FDE\u63A5\u65F6\u95F4 %02d:%02d:%02d", hours, minutes, seconds);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u91CD\u8981\u8BF4\u660E",children:"\u91CD\u8981\u8BF4\u660E"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u73A9\u5BB6\u53D8\u91CF\u5728",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),"\u56DE\u8C03\u5B8C\u6210\u540E\u624D\u4F1A\u91CD\u7F6E\uFF0C\u56E0\u6B64\u65AD\u5F00\u8FDE\u63A5\u65F6\u4ECD\u53EF\u8BBF\u95EE\u53D8\u91CF\u503C\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPVarInt",children:"SetPVarInt"}),": \u8BBE\u7F6E\u6574\u578B\u73A9\u5BB6\u53D8\u91CF"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPVarInt",children:"GetPVarInt"}),": \u83B7\u53D6\u6574\u578B\u73A9\u5BB6\u53D8\u91CF\u503C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPVarString",children:"GetPVarString"}),": \u83B7\u53D6\u5B57\u7B26\u4E32\u73A9\u5BB6\u53D8\u91CF\u503C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": \u8BBE\u7F6E\u6D6E\u70B9\u578B\u73A9\u5BB6\u53D8\u91CF"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": \u83B7\u53D6\u6D6E\u70B9\u578B\u73A9\u5BB6\u53D8\u91CF\u503C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DeletePVar",children:"DeletePVar"}),": \u5220\u9664\u73A9\u5BB6\u53D8\u91CF"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
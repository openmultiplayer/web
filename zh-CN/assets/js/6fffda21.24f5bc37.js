"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68181"],{15893:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/EditObject","title":"EditObject","description":"\u5141\u8BB8\u73A9\u5BB6\u901A\u8FC7\u56FE\u5F62\u754C\u9762\uFF08GUI\uFF09\u7F16\u8F91\u7269\u4F53\u7684\u4F4D\u7F6E\u548C\u65CB\u8F6C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/EditObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditObject","permalink":"/zh-CN/docs/scripting/functions/EditObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EditObject.md","tags":[],"version":"current","frontMatter":{"title":"EditObject","sidebar_label":"EditObject","description":"\u5141\u8BB8\u73A9\u5BB6\u901A\u8FC7\u56FE\u5F62\u754C\u9762\uFF08GUI\uFF09\u7F16\u8F91\u7269\u4F53\u7684\u4F4D\u7F6E\u548C\u65CB\u8F6C\u3002","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EditAttachedObject","permalink":"/zh-CN/docs/scripting/functions/EditAttachedObject"},"next":{"title":"EditPlayerClass","permalink":"/zh-CN/docs/scripting/functions/EditPlayerClass"}}'),r=n("85893"),c=n("50065");let d={title:"EditObject",sidebar_label:"EditObject",description:"\u5141\u8BB8\u73A9\u5BB6\u901A\u8FC7\u56FE\u5F62\u754C\u9762\uFF08GUI\uFF09\u7F16\u8F91\u7269\u4F53\u7684\u4F4D\u7F6E\u548C\u65CB\u8F6C\u3002",tags:[]},s=void 0,l={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u5141\u8BB8\u73A9\u5BB6\u901A\u8FC7\u56FE\u5F62\u7528\u6237\u754C\u9762\uFF08GUI\uFF09\u4F7F\u7528\u9F20\u6807\u7F16\u8F91\u7269\u4F53\u7684\u4F4D\u7F6E\u548C\u65CB\u8F6C\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u540D\u79F0"}),(0,r.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"\u6267\u884C\u7F16\u8F91\u64CD\u4F5C\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"\u5F85\u7F16\u8F91\u7684\u7269\u4F53 ID"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"1"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\uFF08\u5373\u4F7F\u6307\u5B9A\u4E86\u4E0D\u5B58\u5728\u7684\u7269\u4F53\u4E5F\u4F1A\u8FD4\u56DE\u6210\u529F\uFF0C\u4F46\u65E0\u5B9E\u9645\u6548\u679C\uFF09"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"0"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new object;\npublic OnGameModeInit()\n{\n    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/oedit", true))\n    {\n        EditObject(playerid, object);\n        SendClientMessage(playerid, 0xFFFFFFFF, "\u670D\u52A1\u5668\uFF1A\u60A8\u73B0\u5728\u53EF\u4EE5\u7F16\u8F91\u8BE5\u7269\u4F53\uFF01");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"\u7F16\u8F91\u8FC7\u7A0B\u4E2D\u6309\u4F4F\u7A7A\u683C\u952E\uFF08\u8F66\u5185\u6309 W \u952E\uFF09\u5E76\u79FB\u52A8\u9F20\u6807\u53EF\u8C03\u6574\u89C6\u89D2"})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": \u521B\u5EFA\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": \u9500\u6BC1\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": \u79FB\u52A8\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": \u7F16\u8F91\u73A9\u5BB6\u4E13\u5C5E\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": \u7F16\u8F91\u9644\u52A0\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SelectObject",children:"SelectObject"}),": \u9009\u62E9\u7269\u4F53"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": \u53D6\u6D88\u7F16\u8F91\u64CD\u4F5C"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return d}});var i=n(67294);let r={},c=i.createContext(r);function d(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);
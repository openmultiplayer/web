"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61962"],{53267:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/CreateExplosion","title":"CreateExplosion","description":"\u5728\u6307\u5B9A\u5750\u6807\u4F4D\u7F6E\u521B\u5EFA\u7206\u70B8\u6548\u679C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/CreateExplosion.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosion","permalink":"/zh-CN/docs/scripting/functions/CreateExplosion","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateExplosion.md","tags":[],"version":"current","frontMatter":{"title":"CreateExplosion","sidebar_label":"CreateExplosion","description":"\u5728\u6307\u5B9A\u5750\u6807\u4F4D\u7F6E\u521B\u5EFA\u7206\u70B8\u6548\u679C\u3002","tags":[]},"sidebar":"docsSidebar","previous":{"title":"CreateActor","permalink":"/zh-CN/docs/scripting/functions/CreateActor"},"next":{"title":"CreateExplosionForPlayer","permalink":"/zh-CN/docs/scripting/functions/CreateExplosionForPlayer"}}'),r=t("85893"),s=t("50065");let l={title:"CreateExplosion",sidebar_label:"CreateExplosion",description:"\u5728\u6307\u5B9A\u5750\u6807\u4F4D\u7F6E\u521B\u5EFA\u7206\u70B8\u6548\u679C\u3002",tags:[]},o=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u5E94\u7528\u793A\u4F8B",id:"\u5E94\u7528\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u5173\u8054\u51FD\u6570",id:"\u5173\u8054\u51FD\u6570",level:2},{value:"\u6269\u5C55\u9605\u8BFB",id:"\u6269\u5C55\u9605\u8BFB",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E09\u7EF4\u7A7A\u95F4\u6307\u5B9A\u5750\u6807\u751F\u6210\u7206\u70B8\u7279\u6548\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":x"]}),(0,r.jsx)(n.td,{children:"\u7206\u70B8\u6548\u679C\u7684 X \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":y"]}),(0,r.jsx)(n.td,{children:"\u7206\u70B8\u6548\u679C\u7684 Y \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":z"]}),(0,r.jsx)(n.td,{children:"\u7206\u70B8\u6548\u679C\u7684 Z \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsxs)(n.td,{children:["\u7206\u70B8",(0,r.jsx)(n.a,{href:"../resources/explosionlist",children:"\u7C7B\u578B\u7F16\u53F7"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":radius"]}),(0,r.jsx)(n.td,{children:"\u7206\u70B8\u5F71\u54CD\u534A\u5F84\uFF08\u5355\u4F4D\uFF1A\u6E38\u620F\u5355\u4F4D\uFF09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u51FD\u6570\u59CB\u7EC8\u8FD4\u56DE 1\uFF0C\u5373\u4F7F\u7206\u70B8\u7C7B\u578B\u6216\u534A\u5F84\u53C2\u6570\u503C\u65E0\u6548\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5E94\u7528\u793A\u4F8B",children:"\u5E94\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerEnterCheckpoint(playerid)\n{\n    // \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u4F4D\u7F6E\u5750\u6807\n    new Float:x, Float:y, Float:z;\n    GetPlayerPos(playerid, x, y, z);\n\n    // \u5728\u73A9\u5BB6\u4F4D\u7F6E\u521B\u5EFA\u4E2D\u578B\u7206\u70B8\n    CreateExplosion(x, y, z, 12, 10.0);\n\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u5355\u4E2A\u73A9\u5BB6\u540C\u65F6\u53EF\u89C1\u7684\u7206\u70B8\u6548\u679C\u5B58\u5728\u6570\u91CF\u9650\u5236\uFF08\u7EA6 10 \u4E2A\uFF09"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5173\u8054\u51FD\u6570",children:"\u5173\u8054\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"CreateExplosionForPlayer",children:"CreateExplosionForPlayer"}),": \u4E3A\u6307\u5B9A\u73A9\u5BB6\u5355\u72EC\u521B\u5EFA\u7206\u70B8\u6548\u679C"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6269\u5C55\u9605\u8BFB",children:"\u6269\u5C55\u9605\u8BFB"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/explosionlist",children:"\u7206\u70B8\u7C7B\u578B\u5217\u8868"}),": \u6240\u6709\u53EF\u7528\u7206\u70B8\u6548\u679C\u7C7B\u578B\u5BF9\u7167\u8868"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
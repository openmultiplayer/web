"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79261"],{77732:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/HideObjectForPlayer","title":"HideObjectForPlayer","description":"\u5BF9\u73A9\u5BB6\u9690\u85CF\u7269\u4F53","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/HideObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideObjectForPlayer","permalink":"/zh-CN/docs/scripting/functions/HideObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideObjectForPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"}],"version":"current","frontMatter":{"title":"HideObjectForPlayer","sidebar_label":"HideObjectForPlayer","description":"\u5BF9\u73A9\u5BB6\u9690\u85CF\u7269\u4F53","tags":["\u73A9\u5BB6","\u7269\u4F53"]},"sidebar":"docsSidebar","previous":{"title":"HideMenuForPlayer","permalink":"/zh-CN/docs/scripting/functions/HideMenuForPlayer"},"next":{"title":"HidePickupForPlayer","permalink":"/zh-CN/docs/scripting/functions/HidePickupForPlayer"}}'),i=t("85893"),l=t("50065");let c={title:"HideObjectForPlayer",sidebar_label:"HideObjectForPlayer",description:"\u5BF9\u73A9\u5BB6\u9690\u85CF\u7269\u4F53",tags:["\u73A9\u5BB6","\u7269\u4F53"]},s=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u6307\u5B9A\u73A9\u5BB6\u9690\u85CF\u7269\u4F53\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"\u73A9\u5BB6 ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"\u9700\u8981\u9690\u85CF\u7684\u7269\u4F53 ID"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u6307\u5B9A\u7684\u73A9\u5BB6\u6216\u7269\u4F53\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ShowObjectForPlayer",children:"ShowObjectForPlayer"}),": \u5BF9\u73A9\u5BB6\u663E\u793A\u7269\u4F53"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": \u68C0\u67E5\u7269\u4F53\u662F\u5426\u5BF9\u73A9\u5BB6\u9690\u85CF"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateObject",children:"CreateObject"}),": \u521B\u5EFA\u7269\u4F53"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var r=t(67294);let i={},l=r.createContext(i);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
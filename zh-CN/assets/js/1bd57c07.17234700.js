"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37744"],{12321:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/RemovePlayerFromVehicle","title":"RemovePlayerFromVehicle","description":"\u5C06\u73A9\u5BB6\u79FB\u51FA\u6240\u5728\u8F66\u8F86\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/RemovePlayerFromVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerFromVehicle","permalink":"/zh-CN/docs/scripting/functions/RemovePlayerFromVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RemovePlayerFromVehicle.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"RemovePlayerFromVehicle","sidebar_label":"RemovePlayerFromVehicle","description":"\u5C06\u73A9\u5BB6\u79FB\u51FA\u6240\u5728\u8F66\u8F86\u3002","tags":["\u73A9\u5BB6","\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerAttachedObject","permalink":"/zh-CN/docs/scripting/functions/RemovePlayerAttachedObject"},"next":{"title":"RemovePlayerMapIcon","permalink":"/zh-CN/docs/scripting/functions/RemovePlayerMapIcon"}}'),i=r("85893"),l=r("50065");let s={title:"RemovePlayerFromVehicle",sidebar_label:"RemovePlayerFromVehicle",description:"\u5C06\u73A9\u5BB6\u79FB\u51FA\u6240\u5728\u8F66\u8F86\u3002",tags:["\u73A9\u5BB6","\u8F66\u8F86"]},c=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u8981\u70B9",id:"\u6CE8\u610F\u8981\u70B9",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u73A9\u5BB6\u5F3A\u5236\u79FB\u51FA\u5F53\u524D\u6240\u5728\u7684\u8F66\u8F86\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"\u9700\u8981\u79FB\u51FA\u8F66\u8F86\u7684\u73A9\u5BB6 ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":force"]}),(0,i.jsxs)(n.td,{children:["\u662F\u5426\u5F3A\u5236\u7ACB\u5373\u79FB\u51FA\u8F66\u8F86\uFF08\u9ED8\u8BA4\uFF1A",(0,i.jsx)(n.code,{children:"false"}),"\uFF09"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002\u901A\u5E38\u8868\u793A\u73A9\u5BB6\u672A\u8FDE\u63A5\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"// \u793A\u4F8B - \u73A9\u5BB6\u5FC5\u987B\u62E5\u670910\u5206\u624D\u80FD\u9A7E\u9A76\u8F66\u8F86\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PLAYER_STATE_DRIVER = 2\n    {\n        RemovePlayerFromVehicle(playerid);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6CE8\u610F\u8981\u70B9",children:"\u6CE8\u610F\u8981\u70B9"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9000\u51FA\u8F66\u8F86\u7684\u52A8\u753B\u6548\u679C\u4E0D\u4F1A\u540C\u6B65\u7ED9\u5176\u4ED6\u73A9\u5BB6"}),"\n",(0,i.jsxs)(n.li,{children:["\u8BE5\u51FD\u6570\u5728",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),"\u56DE\u8C03\u4E2D\u65E0\u6548\uFF0C\u56E0\u4E3A\u6B64\u65F6\u73A9\u5BB6\u5C1A\u672A\u8FDB\u5165\u8F66\u8F86\u3002\u8BF7\u6539\u7528",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),"\u56DE\u8C03\uFF08\u53C2\u89C1\u4E0A\u65B9\u793A\u4F8B\uFF09"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u73A9\u5BB6\u6B63\u5728\u9065\u63A7\u8F66\uFF08RC\uFF09\u4E2D\uFF0C\u8BE5\u51FD\u6570\u4E0D\u4F1A\u751F\u6548\uFF08\u9700\u4F7F\u7528",(0,i.jsx)(n.code,{children:".force = true"}),"\u53C2\u6570\u6216",(0,i.jsx)(n.a,{href:"ClearAnimations",children:"ClearAnimations"}),"\u51FD\u6570\uFF09"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": \u5C06\u73A9\u5BB6\u653E\u5165\u6307\u5B9A\u8F66\u8F86"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var t=r(67294);let i={},l=t.createContext(i);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
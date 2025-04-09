"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18322"],{99022:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/EnableZoneNames","title":"EnableZoneNames","description":"\u542F\u7528\u6216\u7981\u7528\u8FDB\u5165\u533A\u57DF\u65F6\u5C4F\u5E55\u53F3\u4E0B\u89D2\u663E\u793A\u7684\u533A\u57DF\u540D\u79F0\uFF08\u4F8B\u5982\\"Vinewood\\"\u6216\\"Doherty\\"\uFF09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/EnableZoneNames.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableZoneNames","permalink":"/zh-CN/docs/scripting/functions/EnableZoneNames","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnableZoneNames.md","tags":[{"inline":true,"label":"\u6E38\u620F\u754C\u9762","permalink":"/zh-CN/docs/tags/\u6E38\u620F\u754C\u9762"}],"version":"current","frontMatter":{"title":"EnableZoneNames","sidebar_label":"EnableZoneNames","description":"\u542F\u7528\u6216\u7981\u7528\u8FDB\u5165\u533A\u57DF\u65F6\u5C4F\u5E55\u53F3\u4E0B\u89D2\u663E\u793A\u7684\u533A\u57DF\u540D\u79F0\uFF08\u4F8B\u5982\\"Vinewood\\"\u6216\\"Doherty\\"\uFF09\u3002","tags":["\u6E38\u620F\u754C\u9762"]},"sidebar":"docsSidebar","previous":{"title":"EnableVehicleFriendlyFire","permalink":"/zh-CN/docs/scripting/functions/EnableVehicleFriendlyFire"},"next":{"title":"EndObjectEditing","permalink":"/zh-CN/docs/scripting/functions/EndObjectEditing"}}'),s=t("85893"),r=t("50065");let o={title:"EnableZoneNames",sidebar_label:"EnableZoneNames",description:'\u542F\u7528\u6216\u7981\u7528\u8FDB\u5165\u533A\u57DF\u65F6\u5C4F\u5E55\u53F3\u4E0B\u89D2\u663E\u793A\u7684\u533A\u57DF\u540D\u79F0\uFF08\u4F8B\u5982"Vinewood"\u6216"Doherty"\uFF09\u3002',tags:["\u6E38\u620F\u754C\u9762"]},l=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:['\u6B64\u51FD\u6570\u7528\u4E8E\u63A7\u5236\u73A9\u5BB6\u8FDB\u5165\u65B0\u533A\u57DF\u65F6\u662F\u5426\u5728\u5C4F\u5E55\u53F3\u4E0B\u89D2\u663E\u793A\u533A\u57DF\u540D\u79F0\uFF08\u4F8B\u5982"Vinewood"\u6216"Doherty"\uFF09\u3002\u6B64\u8BBE\u7F6E\u5C5E\u4E8E\u6E38\u620F\u6A21\u5F0F\u9009\u9879\uFF0C\u5E94\u5728 ',(0,s.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"})," \u56DE\u8C03\u4E2D\u8BBE\u7F6E\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540D\u79F0"}),(0,s.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["bool",":enable"]}),(0,s.jsx)(n.td,{children:"true \u542F\u7528\u533A\u57DF\u540D\u79F0\u663E\u793A / false \u7981\u7528\u663E\u793A"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    EnableZoneNames(true); // \u542F\u7528\u533A\u57DF\u540D\u79F0\u663E\u793A\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u5DF2\u5728 SA-MP 0.3 \u7248\u672C\u79FB\u9664\uFF08\u56E0\u5176\u5BFC\u81F4\u7684\u5D29\u6E83\u95EE\u9898\uFF09"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u53EF\u901A\u8FC7 ",(0,s.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})," \u914D\u7F6E\u6587\u4EF6\u5168\u5C40\u63A7\u5236\u533A\u57DF\u540D\u79F0\u663E\u793A\uFF1A"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"use_zone_names": true,\n'})})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
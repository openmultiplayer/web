"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2584"],{94385:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetPlayerObjectAttachedData","title":"GetPlayerObjectAttachedData","description":"\u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u7684\u9644\u52A0\u6570\u636E","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerObjectAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectAttachedData","permalink":"/zh-CN/docs/scripting/functions/GetPlayerObjectAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectAttachedData.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"},{"inline":true,"label":"\u73A9\u5BB6\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6\u7269\u4F53"}],"version":"current","frontMatter":{"title":"GetPlayerObjectAttachedData","sidebar_label":"GetPlayerObjectAttachedData","description":"\u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u7684\u9644\u52A0\u6570\u636E","tags":["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerNetworkStats","permalink":"/zh-CN/docs/scripting/functions/GetPlayerNetworkStats"},"next":{"title":"GetPlayerObjectAttachedOffset","permalink":"/zh-CN/docs/scripting/functions/GetPlayerObjectAttachedOffset"}}'),c=n("85893"),a=n("50065");let i={title:"GetPlayerObjectAttachedData",sidebar_label:"GetPlayerObjectAttachedData",description:"\u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u7684\u9644\u52A0\u6570\u636E",tags:["\u73A9\u5BB6","\u7269\u4F53","\u73A9\u5BB6\u7269\u4F53"]},l=void 0,s={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarnZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(t.p,{children:"\u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u7684\u9644\u52A0\u6570\u636E"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,c.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"\u73A9\u5BB6 ID"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"\u9700\u8981\u83B7\u53D6\u9644\u52A0\u6570\u636E\u7684\u73A9\u5BB6\u7269\u4F53 ID"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&parentVehicle"}),(0,c.jsx)(t.td,{children:"\u5B58\u50A8\u7236\u7EA7\u8F66\u8F86 ID \u7684\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&parentObject"}),(0,c.jsx)(t.td,{children:"\u5B58\u50A8\u7236\u7EA7\u7269\u4F53 ID \u7684\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&parentPlayer"}),(0,c.jsx)(t.td,{children:"\u5B58\u50A8\u7236\u7EA7\u73A9\u5BB6 ID \u7684\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u6307\u5B9A\u7269\u4F53\u4E0D\u5B58\u5728\uFF09"]}),"\n",(0,c.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new\n    parentVehicle,\n    parentObject,\n    parentPlayer;\n\n// \u5B58\u50A8\u7236\u7EA7ID\nGetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);\n"})}),"\n",(0,c.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectAttachedOffset",children:"GetPlayerObjectAttachedOffset"}),": \u83B7\u53D6\u73A9\u5BB6\u7269\u4F53\u7684\u9644\u52A0\u504F\u79FB\u548C\u65CB\u8F6C"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectAttachedData",children:"GetObjectAttachedData"}),": \u83B7\u53D6\u5168\u5C40\u7269\u4F53\u7684\u9644\u52A0\u6570\u636E"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(67294);let c={},a=r.createContext(c);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
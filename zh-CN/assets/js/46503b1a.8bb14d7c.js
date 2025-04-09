"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["90039"],{67367:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/floatsin","title":"floatsin","description":"\u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u6B63\u5F26\u503C","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/floatsin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatsin","permalink":"/zh-CN/docs/scripting/functions/floatsin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floatsin.md","tags":[{"inline":true,"label":"\u6570\u5B66","permalink":"/zh-CN/docs/tags/\u6570\u5B66"},{"inline":true,"label":"\u6D6E\u70B9\u6570","permalink":"/zh-CN/docs/tags/\u6D6E\u70B9\u6570"}],"version":"current","frontMatter":{"title":"floatsin","sidebar_label":"floatsin","description":"\u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u6B63\u5F26\u503C","tags":["\u6570\u5B66","\u6D6E\u70B9\u6570"]},"sidebar":"docsSidebar","previous":{"title":"floatround","permalink":"/zh-CN/docs/scripting/functions/floatround"},"next":{"title":"floatsqroot","permalink":"/zh-CN/docs/scripting/functions/floatsqroot"}}'),l=t("85893"),s=t("50065");let r={title:"floatsin",sidebar_label:"floatsin",description:"\u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u6B63\u5F26\u503C",tags:["\u6570\u5B66","\u6D6E\u70B9\u6570"]},o=void 0,a={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNoteZH_CN:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u6B63\u5F26\u503C\u3002\u8F93\u5165\u89D2\u5EA6\u53EF\u4F7F\u7528\u5F27\u5EA6\u3001\u89D2\u5EA6\u6216\u68AF\u5EA6\u5355\u4F4D\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":value"]}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u8BA1\u7B97\u6B63\u5F26\u503C\u7684\u89D2\u5EA6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["anglemode",":mode"]}),(0,l.jsxs)(n.td,{children:["\u4F7F\u7528\u7684",(0,l.jsx)(n.a,{href:"../resources/anglemodes",children:"\u89D2\u5EA6\u6A21\u5F0F"}),"\uFF0C\u6839\u636E\u8F93\u5165\u503C\u7684\u5355\u4F4D\u800C\u5B9A\uFF08\u9ED8\u8BA4\uFF1A\u5F27\u5EA6\uFF09"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8F93\u5165\u503C\u7684\u6B63\u5F26\u503C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)\n{\n    if (GetPlayerPos(playerid, x, y, z)) // \u5982\u679C\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF0C\u6B64\u51FD\u6570\u8FD4\u56DE0\n    {\n        new Float:z_angle;\n        GetPlayerFacingAngle(playerid, z_angle);\n\n        x += distance * floatsin(-z_angle, degrees); // GTA\u4E2D\u7684\u89D2\u5EA6\u91C7\u7528\u9006\u65F6\u9488\u65B9\u5411\uFF0C\u56E0\u6B64\u9700\u8981\u53CD\u8F6C\u83B7\u53D6\u7684\u89D2\u5EA6\u503C\n        y += distance * floatcos(-z_angle, degrees);\n\n        return 1; // \u6210\u529F\u65F6\u8FD4\u56DE1\uFF0C\u5B9E\u9645\u5750\u6807\u901A\u8FC7\u5F15\u7528\u8FD4\u56DE\n    }\n    return 0; // \u73A9\u5BB6\u672A\u8FDE\u63A5\u65F6\u8FD4\u56DE0\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0CGTA/SA-MP \u4F7F\u7528\u89D2\u5EA6\u5236\u8868\u793A\u65B9\u5411\uFF0C\u4F8B\u5982",(0,l.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),"\u3002\u56E0\u6B64\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528'degrees'\u89D2\u5EA6\u6A21\u5F0F\u800C\u975E\u5F27\u5EA6\u5236\u3002\u540C\u65F6\u6CE8\u610F GTA \u7684\u89D2\u5EA6\u7CFB\u7EDF\u91C7\u7528\u9006\u65F6\u9488\u65B9\u5411\uFF1A270\xb0 \u4E3A\u4E1C\u65B9\uFF0C90\xb0 \u4E3A\u897F\u65B9\uFF0C\u5357\u65B9\u4ECD\u4E3A 180\xb0\uFF0C\u5317\u65B9\u4ECD\u4E3A 0\xb0/360\xb0\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"floattan",children:"floattan"}),": \u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u6B63\u5207\u503C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"floatcos",children:"floatcos"}),": \u83B7\u53D6\u6307\u5B9A\u89D2\u5EA6\u7684\u4F59\u5F26\u503C"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../resources/anglemodes",children:"\u89D2\u5EA6\u6A21\u5F0F"}),": \u6D4B\u91CF\u89D2\u5EA6\u7684\u56FD\u9645\u5355\u4F4D\u5E38\u91CF"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(67294);let l={},s=i.createContext(l);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
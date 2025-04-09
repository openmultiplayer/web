"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["57435"],{29717:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerDialog","title":"GetPlayerDialog","description":"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846ID","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialog","permalink":"/zh-CN/docs/scripting/functions/GetPlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerDialog.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5BF9\u8BDD\u6846","permalink":"/zh-CN/docs/tags/\u5BF9\u8BDD\u6846"}],"version":"current","frontMatter":{"title":"GetPlayerDialog","sidebar_label":"GetPlayerDialog","description":"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846ID","tags":["\u73A9\u5BB6","\u5BF9\u8BDD\u6846"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCustomSkin","permalink":"/zh-CN/docs/scripting/functions/GetPlayerCustomSkin"},"next":{"title":"GetPlayerDialogData","permalink":"/zh-CN/docs/scripting/functions/GetPlayerDialogData"}}'),l=t("85893"),r=t("50065");let a={title:"GetPlayerDialog",sidebar_label:"GetPlayerDialog",description:"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846ID",tags:["\u73A9\u5BB6","\u5BF9\u8BDD\u6846"]},s=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u672C\u51FD\u6570\u5DF2\u5F03\u7528\uFF0C\u8BF7\u4F7F\u7528",(0,l.jsx)(n.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"})]})}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846 ID"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u524D\u663E\u793A\u7684\u5BF9\u8BDD\u6846 ID\u3002\u82E5\u73A9\u5BB6\u672A\u8FDE\u63A5\u6216\u672A\u6253\u5F00\u5BF9\u8BDD\u6846\u5219\u8FD4\u56DE",(0,l.jsx)(n.strong,{children:"INVALID_DIALOG_ID"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new dialogID = GetPlayerDialog(playerid);\nif (dialogID != INVALID_DIALOG_ID)\n{\n    // \u73A9\u5BB6\u5F53\u524D\u5B58\u5728\u6FC0\u6D3B\u7684\u5BF9\u8BDD\u6846\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": \u83B7\u53D6\u5F53\u524D\u5BF9\u8BDD\u6846\u5173\u8054\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": \u5411\u73A9\u5BB6\u663E\u793A\u540C\u6B65\u5BF9\u8BDD\u6846\uFF08\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\uFF09"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": \u5F53\u73A9\u5BB6\u54CD\u5E94\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let l={},r=i.createContext(l);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
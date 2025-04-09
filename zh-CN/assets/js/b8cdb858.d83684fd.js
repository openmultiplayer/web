"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63926"],{24882:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/GetPlayerDialogData","title":"GetPlayerDialogData","description":"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846\u6570\u636E","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerDialogData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialogData","permalink":"/zh-CN/docs/scripting/functions/GetPlayerDialogData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerDialogData.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u5BF9\u8BDD\u6846","permalink":"/zh-CN/docs/tags/\u5BF9\u8BDD\u6846"}],"version":"current","frontMatter":{"title":"GetPlayerDialogData","sidebar_label":"GetPlayerDialogData","description":"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846\u6570\u636E","tags":["\u73A9\u5BB6","\u5BF9\u8BDD\u6846"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDialog","permalink":"/zh-CN/docs/scripting/functions/GetPlayerDialog"},"next":{"title":"GetPlayerDialogID","permalink":"/zh-CN/docs/scripting/functions/GetPlayerDialogID"}}'),l=n("85893"),r=n("50065");let s={title:"GetPlayerDialogData",sidebar_label:"GetPlayerDialogData",description:"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846\u6570\u636E",tags:["\u73A9\u5BB6","\u5BF9\u8BDD\u6846"]},d=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarnZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u83B7\u53D6\u5F53\u524D\u663E\u793A\u7ED9\u73A9\u5BB6\u7684\u5BF9\u8BDD\u6846\u5B8C\u6574\u914D\u7F6E\u6570\u636E"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"\u9700\u8981\u83B7\u53D6\u6570\u636E\u7684\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&DIALOG_STYLE",":style"]}),(0,l.jsx)(t.td,{children:"\u5B58\u50A8\u5BF9\u8BDD\u6846\u6837\u5F0F\u7684\u679A\u4E3E\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"title[]"}),(0,l.jsx)(t.td,{children:"\u5B58\u50A8\u6807\u9898\u6587\u672C\u7684\u6570\u7EC4\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"titleSize"}),(0,l.jsx)(t.td,{children:"\u6807\u9898\u6570\u7EC4\u7684\u957F\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"body[]"}),(0,l.jsx)(t.td,{children:"\u5B58\u50A8\u5185\u5BB9\u6587\u672C\u7684\u6570\u7EC4\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"bodySize"}),(0,l.jsx)(t.td,{children:"\u5185\u5BB9\u6570\u7EC4\u7684\u957F\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button1[]"}),(0,l.jsx)(t.td,{children:"\u5B58\u50A8\u7B2C\u4E00\u4E2A\u6309\u94AE\u6587\u672C\u7684\u6570\u7EC4\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button1Size"}),(0,l.jsx)(t.td,{children:"\u6309\u94AE 1 \u6570\u7EC4\u7684\u957F\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button2[]"}),(0,l.jsx)(t.td,{children:"\u5B58\u50A8\u7B2C\u4E8C\u4E2A\u6309\u94AE\u6587\u672C\u7684\u6570\u7EC4\u53D8\u91CF\uFF08\u901A\u8FC7\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"button2Size"}),(0,l.jsx)(t.td,{children:"\u6309\u94AE 2 \u6570\u7EC4\u7684\u957F\u5EA6"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u73A9\u5BB6\u672A\u8FDE\u63A5\u6216\u672A\u6253\u5F00\u5BF9\u8BDD\u6846\uFF09"]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'enum\n{\n    DIALOG_LOGIN\n}\n\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "\u767B\u5F55\u7CFB\u7EDF", "\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801:", "\u767B\u5F55", "\u53D6\u6D88");\n\nnew\n    DIALOG_STYLE:style,\n    title[32],\n    body[64],\n    button1[16],\n    button2[16];\n\nGetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": \u5411\u73A9\u5BB6\u663E\u793A\u540C\u6B65\u5BF9\u8BDD\u6846\uFF08\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\uFF09"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"HidePlayerDialog",children:"HidePlayerDialog"}),": \u9690\u85CF\u5F53\u524D\u663E\u793A\u7684\u5BF9\u8BDD\u6846"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"}),": \u83B7\u53D6\u5F53\u524D\u5BF9\u8BDD\u6846\u7684 ID"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": \u5F53\u73A9\u5BB6\u54CD\u5E94\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
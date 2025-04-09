"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54243"],{93886:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/UpdatePlayer3DTextLabelText","title":"UpdatePlayer3DTextLabelText","description":"\u66F4\u65B0\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9\u53CA\u989C\u8272\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/UpdatePlayer3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UpdatePlayer3DTextLabelText","permalink":"/zh-CN/docs/scripting/functions/UpdatePlayer3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/UpdatePlayer3DTextLabelText.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"3D\u6587\u672C\u6807\u7B7E","permalink":"/zh-CN/docs/tags/3-d\u6587\u672C\u6807\u7B7E"}],"version":"current","frontMatter":{"title":"UpdatePlayer3DTextLabelText","sidebar_label":"UpdatePlayer3DTextLabelText","description":"\u66F4\u65B0\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9\u53CA\u989C\u8272\u3002","tags":["\u73A9\u5BB6","3D\u6587\u672C\u6807\u7B7E"]},"sidebar":"docsSidebar","previous":{"title":"Update3DTextLabelText","permalink":"/zh-CN/docs/scripting/functions/Update3DTextLabelText"},"next":{"title":"UpdateVehicleDamageStatus","permalink":"/zh-CN/docs/scripting/functions/UpdateVehicleDamageStatus"}}'),r=n("85893"),i=n("50065");let a={title:"UpdatePlayer3DTextLabelText",sidebar_label:"UpdatePlayer3DTextLabelText",description:"\u66F4\u65B0\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9\u53CA\u989C\u8272\u3002",tags:["\u73A9\u5BB6","3D\u6587\u672C\u6807\u7B7E"]},s=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function x(e){let t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u66F4\u65B0\u6307\u5B9A\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9\u53CA\u989C\u8272\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u540D\u79F0"}),(0,r.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"\u521B\u5EFA\u8BE5 3D \u6587\u672C\u6807\u7B7E\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,r.jsx)(t.td,{children:"\u9700\u8981\u66F4\u65B0\u7684 3D \u6587\u672C\u6807\u7B7E ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"colour"}),(0,r.jsx)(t.td,{children:"3D \u6587\u672C\u6807\u7B7E\u7684\u65B0\u989C\u8272\u503C\uFF08\u5341\u516D\u8FDB\u5236\u683C\u5F0F\uFF09"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const text[]"}),(0,r.jsx)(t.td,{children:"3D \u6587\u672C\u6807\u7B7E\u7684\u65B0\u6587\u672C\u5185\u5BB9"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,r.jsx)(t.td,{children:"\u7528\u4E8E\u683C\u5F0F\u5316\u6587\u672C\u7684\u53EF\u53D8\u53C2\u6570\uFF08\u7C7B\u4F3C printf \u8BED\u6CD5\uFF09"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(t.p,{children:"\u8BE5\u51FD\u6570\u4E0D\u8FD4\u56DE\u7279\u5B9A\u503C\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u82E5 text[]\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u539F\u7248 SA-MP \u4E2D\u9644\u8FD1\u5BA2\u6237\u7AEF/\u670D\u52A1\u7AEF\u53EF\u80FD\u5D29\u6E83\uFF01\uFF08\u8BE5\u95EE\u9898\u5728 open.mp \u4E2D\u5DF2\u4FEE\u590D\uFF09"})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": \u4E3A\u6307\u5B9A\u73A9\u5BB6\u521B\u5EFA 3D \u6587\u672C\u6807\u7B7E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": \u5220\u9664\u73A9\u5BB6\u7684 3D \u6587\u672C\u6807\u7B7E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayer3DTextLabelText",children:"GetPlayer3DTextLabelText"}),": \u83B7\u53D6\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayer3DTextLabelColour",children:"GetPlayer3DTextLabelColour"}),": \u83B7\u53D6\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u989C\u8272\u503C"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": \u66F4\u65B0\u5168\u5C40 3D \u6587\u672C\u6807\u7B7E\u7684\u663E\u793A\u5185\u5BB9"]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var l=n(67294);let r={},i=l.createContext(r);function a(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41824"],{17484:function(e,t,n){n.r(t),n.d(t,{default:()=>D,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelDrawDist","title":"GetPlayer3DTextLabelDrawDist","description":"\u83B7\u53D6\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayer3DTextLabelDrawDist.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelDrawDist","permalink":"/zh-CN/docs/scripting/functions/GetPlayer3DTextLabelDrawDist","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelDrawDist.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"3D\u6587\u672C\u6807\u7B7E","permalink":"/zh-CN/docs/tags/3-d\u6587\u672C\u6807\u7B7E"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelDrawDist","sidebar_label":"GetPlayer3DTextLabelDrawDist","description":"\u83B7\u53D6\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB","tags":["\u73A9\u5BB6","3D\u6587\u672C\u6807\u7B7E"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelColour","permalink":"/zh-CN/docs/scripting/functions/GetPlayer3DTextLabelColour"},"next":{"title":"GetPlayer3DTextLabelDrawDistance","permalink":"/zh-CN/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance"}}'),a=n("85893"),l=n("50065");let i={title:"GetPlayer3DTextLabelDrawDist",sidebar_label:"GetPlayer3DTextLabelDrawDist",description:"\u83B7\u53D6\u73A9\u5BB63D\u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB",tags:["\u73A9\u5BB6","3D\u6587\u672C\u6807\u7B7E"]},s=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["\u8BE5\u51FD\u6570\u5DF2\u5F03\u7528\uFF0C\u8BF7\u4F7F\u7528 ",(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"}),"\u3002"]})}),"\n",(0,a.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(t.p,{children:"\u83B7\u53D6\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB\u3002"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"\u540D\u79F0"}),(0,a.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"\u73A9\u5BB6\u7684 ID"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,a.jsx)(t.td,{children:"\u9700\u8981\u83B7\u53D6\u7ED8\u5236\u8DDD\u79BB\u7684\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E ID"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,a.jsx)(t.p,{children:"\u4EE5\u6D6E\u70B9\u6570\u5F62\u5F0F\u8FD4\u56DE\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew Float:drawDistance;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\ndrawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);\n// drawDistance = 40.0\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["\u6B64\u51FD\u6570\u662F ",(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"})," \u7684\u7B80\u5199\u5F62\u5F0F"]})}),"\n",(0,a.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": \u8BBE\u7F6E\u73A9\u5BB6 3D \u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": \u83B7\u53D6 3D \u6587\u672C\u6807\u7B7E\u7684\u7ED8\u5236\u8DDD\u79BB"]}),"\n"]})]})}function D(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);let a={},l=r.createContext(a);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
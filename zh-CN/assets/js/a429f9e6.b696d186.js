"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77962"],{76412:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/Delete3DTextLabel","title":"Delete3DTextLabel","description":"\u5220\u9664\u901A\u8FC7Create3DTextLabel\u521B\u5EFA\u76843D\u6587\u672C\u6807\u7B7E\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/Delete3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Delete3DTextLabel","permalink":"/zh-CN/docs/scripting/functions/Delete3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Delete3DTextLabel.md","tags":[{"inline":true,"label":"3d\u6587\u672C\u6807\u7B7E","permalink":"/zh-CN/docs/tags/3-d\u6587\u672C\u6807\u7B7E"}],"version":"current","frontMatter":{"title":"Delete3DTextLabel","sidebar_label":"Delete3DTextLabel","description":"\u5220\u9664\u901A\u8FC7Create3DTextLabel\u521B\u5EFA\u76843D\u6587\u672C\u6807\u7B7E\u3002","tags":["3d\u6587\u672C\u6807\u7B7E"]},"sidebar":"docsSidebar","previous":{"title":"DB_SelectNextRow","permalink":"/zh-CN/docs/scripting/functions/DB_SelectNextRow"},"next":{"title":"DeletePVar","permalink":"/zh-CN/docs/scripting/functions/DeletePVar"}}'),r=n("85893"),i=n("50065");let a={title:"Delete3DTextLabel",sidebar_label:"Delete3DTextLabel",description:"\u5220\u9664\u901A\u8FC7Create3DTextLabel\u521B\u5EFA\u76843D\u6587\u672C\u6807\u7B7E\u3002",tags:["3d\u6587\u672C\u6807\u7B7E"]},s=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(t.p,{children:["\u8BE5\u51FD\u6570\u7528\u4E8E\u5220\u9664\u901A\u8FC7",(0,r.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),"\u521B\u5EFA\u7684 3D \u6587\u672C\u6807\u7B7E\u3002"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,r.jsx)(t.td,{children:"\u8981\u5220\u9664\u7684 3D \u6587\u672C\u6807\u7B7E ID"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u200B",(0,r.jsx)(t.strong,{children:"true"}),"\u200B - 3D \u6587\u672C\u6807\u7B7E\u5220\u9664\u6210\u529F"]}),"\n",(0,r.jsxs)(t.li,{children:["\u200B",(0,r.jsx)(t.strong,{children:"false"}),"\u200B - 3D \u6587\u672C\u6807\u7B7E\u5220\u9664\u5931\u8D25"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    // \u521B\u5EFA3D\u6587\u672C\u6807\u7B7E\n    gMyLabel = Create3DTextLabel("\u5F53\u524D\u5750\u6807:\\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n    return 1;\n}\n\n// \u7A0D\u540E\u4F7F\u7528\u65F6\u5220\u9664\u6807\u7B7E\nDelete3DTextLabel(gMyLabel);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": \u521B\u5EFA 3D \u6587\u672C\u6807\u7B7E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValid3DTextLabel",children:"IsValid3DTextLabel"}),": \u9A8C\u8BC1 3D \u6587\u672C\u6807\u7B7E\u662F\u5426\u6709\u6548"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Is3DTextLabelStreamedIn",children:"Is3DTextLabelStreamedIn"}),": \u68C0\u67E5 3D \u6587\u672C\u6807\u7B7E\u662F\u5426\u5BF9\u73A9\u5BB6\u53EF\u89C1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": \u5C06\u6807\u7B7E\u9644\u52A0\u5230\u73A9\u5BB6\u8EAB\u4E0A"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": \u5C06\u6807\u7B7E\u9644\u52A0\u5230\u8F66\u8F86\u4E0A"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": \u66F4\u65B0\u6807\u7B7E\u6587\u672C\u5185\u5BB9"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": \u4E3A\u5355\u4E2A\u73A9\u5BB6\u521B\u5EFA\u6807\u7B7E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": \u5220\u9664\u73A9\u5BB6\u7684\u79C1\u6709\u6807\u7B7E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": \u66F4\u65B0\u73A9\u5BB6\u79C1\u6709\u6807\u7B7E\u6587\u672C"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var l=n(67294);let r={},i=l.createContext(r);function a(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);
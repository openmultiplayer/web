"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6672"],{4422:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/getdate","title":"getdate","description":"\u83B7\u53D6\u5F53\u524D\u670D\u52A1\u5668\u65E5\u671F\u5E76\u5B58\u50A8\u5230\u5E74\u3001\u6708\u3001\u65E5\u53D8\u91CF\u4E2D\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/getdate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getdate","permalink":"/zh-CN/docs/scripting/functions/getdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/getdate.md","tags":[{"inline":true,"label":"\u65F6\u95F4","permalink":"/zh-CN/docs/tags/\u65F6\u95F4"},{"inline":true,"label":"\u65E5\u671F","permalink":"/zh-CN/docs/tags/\u65E5\u671F"}],"version":"current","frontMatter":{"title":"getdate","sidebar_label":"getdate","description":"\u83B7\u53D6\u5F53\u524D\u670D\u52A1\u5668\u65E5\u671F\u5E76\u5B58\u50A8\u5230\u5E74\u3001\u6708\u3001\u65E5\u53D8\u91CF\u4E2D\u3002","tags":["\u65F6\u95F4","\u65E5\u671F"]},"sidebar":"docsSidebar","previous":{"title":"getarg","permalink":"/zh-CN/docs/scripting/functions/getarg"},"next":{"title":"getproperty","permalink":"/zh-CN/docs/scripting/functions/getproperty"}}'),r=n("85893"),s=n("50065");let d={title:"getdate",sidebar_label:"getdate",description:"\u83B7\u53D6\u5F53\u524D\u670D\u52A1\u5668\u65E5\u671F\u5E76\u5B58\u50A8\u5230\u5E74\u3001\u6708\u3001\u65E5\u53D8\u91CF\u4E2D\u3002",tags:["\u65F6\u95F4","\u65E5\u671F"]},c=void 0,l={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNoteZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(t.p,{children:"\u83B7\u53D6\u5F53\u524D\u670D\u52A1\u5668\u65E5\u671F\uFF0C\u5E76\u5C06\u7ED3\u679C\u5B58\u50A8\u5230\u6307\u5B9A\u7684\u5E74\u3001\u6708\u3001\u65E5\u53D8\u91CF\u4E2D\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&year=0"}),(0,r.jsx)(t.td,{children:"\u6574\u578B\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u5E74\u4EFD"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&month=0"}),(0,r.jsx)(t.td,{children:"\u6574\u578B\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u6708\u4EFD\uFF081-12\uFF09"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&day=0"}),(0,r.jsx)(t.td,{children:"\u6574\u578B\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09\uFF0C\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\uFF081-31\uFF09"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(t.p,{children:"\u8FD4\u56DE\u81EA\u5E74\u521D\u4EE5\u6765\u7684\u5929\u6570\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new Year, Month, Day, Days;\nDays = getdate(Year, Month, Day);\nprintf("\u5F53\u524D\u65E5\u671F: %02d/%02d/%d", Day, Month, Year);  // \u8F93\u51FA\u683C\u5F0F\uFF1A\u65E5/\u6708/\u5E74\nprintf("\u672C\u5E74\u5DF2\u8FC7\u5929\u6570: %d", Days);                    // \u8F93\u51FA\u81EA\u5E74\u521D\u4EE5\u6765\u7684\u5929\u6570\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/zh-CN/docs/scripting/functions/gettime",children:"gettime"}),": \u83B7\u53D6\u670D\u52A1\u5668\u65F6\u95F4\u7684 UNIX \u65F6\u95F4\u6233"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var i=n(67294);let r={},s=i.createContext(r);function d(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
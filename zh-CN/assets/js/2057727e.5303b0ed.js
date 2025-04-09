"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6242"],{39332:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/toupper","title":"toupper","description":"\u5C06\u5355\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199\u5F62\u5F0F\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/toupper.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/toupper","permalink":"/zh-CN/docs/scripting/functions/toupper","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/toupper.md","tags":[{"inline":true,"label":"\u5B57\u7B26\u4E32\u5904\u7406","permalink":"/zh-CN/docs/tags/\u5B57\u7B26\u4E32\u5904\u7406"}],"version":"current","frontMatter":{"title":"toupper","sidebar_label":"toupper","description":"\u5C06\u5355\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199\u5F62\u5F0F\u3002","tags":["\u5B57\u7B26\u4E32\u5904\u7406"]},"sidebar":"docsSidebar","previous":{"title":"tolower","permalink":"/zh-CN/docs/scripting/functions/tolower"},"next":{"title":"uudecode","permalink":"/zh-CN/docs/scripting/functions/uudecode"}}'),i=n("85893"),o=n("50065");let s={title:"toupper",sidebar_label:"toupper",description:"\u5C06\u5355\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199\u5F62\u5F0F\u3002",tags:["\u5B57\u7B26\u4E32\u5904\u7406"]},c=void 0,l={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{LowercaseNoteZH_CN:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u8BE5\u51FD\u6570\u7528\u4E8E\u5C06\u5355\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199\u5F62\u5F0F\u3002"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u540D\u79F0"}),(0,i.jsx)(t.th,{children:"\u63CF\u8FF0"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"c"}),(0,i.jsx)(t.td,{children:"\u9700\u8981\u8F6C\u6362\u4E3A\u5927\u5199\u7684\u5B57\u7B26"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(t.p,{children:"\u8FD4\u56DE\u8F93\u5165\u5B57\u7B26\u5BF9\u5E94\u7684\u5927\u5199 ASCII \u7801\u503C\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerText(playerid, text[])\n{\n    text[0] = toupper(text[0]);\n    // \u5C06\u73A9\u5BB6\u8F93\u5165\u7684\u9996\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"tolower",children:"tolower"}),": \u5C06\u5355\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5C0F\u5199\u5F62\u5F0F"]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
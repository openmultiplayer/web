"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["72421"],{84669:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/strcmp","title":"strcmp","description":"\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/strcmp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strcmp","permalink":"/zh-CN/docs/scripting/functions/strcmp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strcmp.md","tags":[{"inline":true,"label":"\u5B57\u7B26\u4E32","permalink":"/zh-CN/docs/tags/\u5B57\u7B26\u4E32"}],"version":"current","frontMatter":{"title":"strcmp","sidebar_label":"strcmp","description":"\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\u3002","tags":["\u5B57\u7B26\u4E32"]},"sidebar":"docsSidebar","previous":{"title":"strcat","permalink":"/zh-CN/docs/scripting/functions/strcat"},"next":{"title":"strcopy","permalink":"/zh-CN/docs/scripting/functions/strcopy"}}'),i=s("85893"),t=s("50065");let l={title:"strcmp",sidebar_label:"strcmp",description:"\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\u3002",tags:["\u5B57\u7B26\u4E32"]},c=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u6559\u7A0B\u6307\u5357",id:"\u6559\u7A0B\u6307\u5357",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components},{LowercaseNoteZH_CN:s}=e;return s||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u540D\u79F0"}),(0,i.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"const string1[]"}),(0,i.jsx)(e.td,{children:"\u8981\u6BD4\u8F83\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"const string2[]"}),(0,i.jsx)(e.td,{children:"\u8981\u6BD4\u8F83\u7684\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u4E32"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["bool",":ignorecase"," ",(0,i.jsx)(e.em,{children:"(\u53EF\u9009)"})]}),(0,i.jsxs)(e.td,{children:["\u8BBE\u4E3A ",(0,i.jsx)(e.strong,{children:"true"})," \u65F6\u5FFD\u7565\u5927\u5C0F\u5199\uFF08HeLLo \u4E0E Hello \u89C6\u4E3A\u76F8\u540C\uFF09\uFF0C\u8BBE\u4E3A ",(0,i.jsx)(e.strong,{children:"false"})," \u65F6\u533A\u5206\u5927\u5C0F\u5199"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["length ",(0,i.jsx)(e.em,{children:"(\u53EF\u9009)"})]}),(0,i.jsx)(e.td,{children:'\u8BBE\u7F6E\u6BD4\u8F83\u957F\u5EA6\uFF0C\u4EC5\u6BD4\u8F83\u524D X \u4E2A\u5B57\u7B26\uFF08\u5982\u7528\u957F\u5EA6 4 \u6BD4\u8F83 "Hello" \u548C "Hell No" \u5C06\u5224\u5B9A\u4E3A\u76F8\u540C\uFF09'})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"0"}),"\uFF1A\u5728\u6307\u5B9A\u957F\u5EA6\u5185\u5B57\u7B26\u4E32\u5B8C\u5168\u5339\u914D"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"1"})," \u6216 ",(0,i.jsx)(e.strong,{children:"-1"}),"\uFF1A\u5B58\u5728\u4E0D\u5339\u914D\u5B57\u7B26\uFF08\u8BA1\u7B97\u65B9\u5F0F\u4E3A ",(0,i.jsx)(e.code,{children:"string1[i] - string2[i]"}),"\uFF0Ci \u8868\u793A\u4ECE 0 \u5F00\u59CB\u7684\u5B57\u7B26\u7D22\u5F15\uFF09"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5B57\u7B26\u6570\u5DEE\u5F02"}),"\uFF1A\u5F53\u67D0\u4E00\u5B57\u7B26\u4E32\u4EC5\u90E8\u5206\u5339\u914D\u53E6\u4E00\u5B57\u7B26\u4E32\u65F6\u8FD4\u56DE\u5B57\u7B26\u6570\u91CF\u5DEE"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'new string1[] = "Hello World";\nnew string2[] = "Hello World";\n\n// \u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\nif (!strcmp(string1, string2))\n\nnew string3[] = "Hell";\n\n// \u68C0\u67E5\u524D4\u4E2A\u5B57\u7B26\u662F\u5426\u5339\u914D\nif (!strcmp(string2, string3, false, 4))\n\n// \u4F7F\u7528 isnull() \u68C0\u67E5\u7A7A\u5B57\u7B26\u4E32\nif (!strcmp(string1, string2) &&\xa0!isnull(string1) &&\xa0!isnull(string2))\n\n// isnull() \u5B8F\u5B9A\u4E49\uFF1A\n#if\xa0!defined isnull\n    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == \'\\1\') && (!(%1[1]))))\n#endif\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5F53\u4EFB\u4E00\u5B57\u7B26\u4E32\u4E3A\u7A7A\u65F6\u672C\u51FD\u6570\u4F1A\u8FD4\u56DE ",(0,i.jsx)(e.strong,{children:"0"}),"\uFF0C\u8BF7\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"isnull()"})," \u8FDB\u884C\u7A7A\u503C\u68C0\u6D4B"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6BD4\u8F83\u6765\u81EA\u6587\u672C\u6587\u4EF6\u7684\u5B57\u7B26\u4E32\u65F6\u9700\u6CE8\u610F\u56DE\u8F66\u7B26 (",(0,i.jsx)(e.code,{children:"\\r"}),") \u548C\u6362\u884C\u7B26 (",(0,i.jsx)(e.code,{children:"\\n"}),")\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.a,{href:"fread",children:"fread"})," \u8BFB\u53D6\u65F6\u4F1A\u5305\u542B\u8FD9\u4E9B\u7279\u6B8A\u5B57\u7B26"]}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strfind",children:"strfind"}),": \u5728\u5B57\u7B26\u4E32\u4E2D\u641C\u7D22\u5B50\u4E32"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strequal",children:"strequal"}),": \u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strdel",children:"strdel"}),": \u5220\u9664\u5B57\u7B26\u4E32\u7247\u6BB5"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strins",children:"strins"}),": \u63D2\u5165\u5B57\u7B26\u4E32\u5185\u5BB9"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strlen",children:"strlen"}),": \u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strmid",children:"strmid"}),": \u622A\u53D6\u5B50\u5B57\u7B26\u4E32"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strpack",children:"strpack"}),": \u6253\u5305\u5B57\u7B26\u4E32"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strval",children:"strval"}),": \u5B57\u7B26\u4E32\u8F6C\u6574\u578B"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"strcat",children:"strcat"}),": \u5B57\u7B26\u4E32\u62FC\u63A5"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6559\u7A0B\u6307\u5357",children:"\u6559\u7A0B\u6307\u5357"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"../../tutorials/stringmanipulation",children:"\u5B57\u7B26\u4E32\u64CD\u4F5C\u6280\u5DE7"})}),"\n"]})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var r=s(67294);let i={},t=r.createContext(i);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);
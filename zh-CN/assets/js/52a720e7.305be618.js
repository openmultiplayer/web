"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13532"],{75431:function(e,n,i){i.r(n),i.d(n,{default:()=>f,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/fopen","title":"fopen","description":"\u6253\u5F00\u6587\u4EF6\uFF08\u7528\u4E8E\u8BFB\u53D6\u6216\u5199\u5165\uFF09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/fopen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fopen","permalink":"/zh-CN/docs/scripting/functions/fopen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fopen.md","tags":[{"inline":true,"label":"\u6587\u4EF6\u7BA1\u7406","permalink":"/zh-CN/docs/tags/\u6587\u4EF6\u7BA1\u7406"}],"version":"current","frontMatter":{"title":"fopen","sidebar_label":"fopen","description":"\u6253\u5F00\u6587\u4EF6\uFF08\u7528\u4E8E\u8BFB\u53D6\u6216\u5199\u5165\uFF09\u3002","tags":["\u6587\u4EF6\u7BA1\u7406"]},"sidebar":"docsSidebar","previous":{"title":"fmatch","permalink":"/zh-CN/docs/scripting/functions/fmatch"},"next":{"title":"format","permalink":"/zh-CN/docs/scripting/functions/format"}}'),l=i("85893"),s=i("50065");let t={title:"fopen",sidebar_label:"fopen",description:"\u6253\u5F00\u6587\u4EF6\uFF08\u7528\u4E8E\u8BFB\u53D6\u6216\u5199\u5165\uFF09\u3002",tags:["\u6587\u4EF6\u7BA1\u7406"]},c=void 0,d={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNoteZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u6253\u5F00\u6587\u4EF6\u4EE5\u4FBF\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540D\u79F0"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"const filename[]"}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6\u8DEF\u5F84\uFF08\u82E5\u4EC5\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u5219\u9ED8\u8BA4\u5728'scriptfiles'\u6587\u4EF6\u5939\u4E2D\u67E5\u627E\uFF09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsxs)(n.a,{href:"../resources/file-modes",children:["filemode",":mode"]})}),(0,l.jsx)(n.td,{children:"\u6587\u4EF6\u6253\u5F00\u6A21\u5F0F\uFF08\u9ED8\u8BA4\u503C\uFF1Aio_readwrite\uFF09"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6210\u529F\u65F6\u8FD4\u56DE\u6709\u6548\u7684\u6587\u4EF6\u53E5\u67C4\uFF08File",":handle"," \u7C7B\u578B\uFF09"]}),"\n",(0,l.jsx)(n.li,{children:"\u5931\u8D25\u65F6\u8FD4\u56DE 0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"io_read \u6A21\u5F0F\uFF08\u53EA\u8BFB\uFF09\uFF1A"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4EE5"\u53EA\u8BFB"\u6A21\u5F0F\u6253\u5F00"file.txt"\nnew File:handle = fopen("file.txt", io_read);\n\n// \u58F0\u660E\u7F13\u51B2\u533A\nnew buf[128];\n\n// \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u6210\u529F\u6253\u5F00\nif (handle)\n{\n    // \u6210\u529F\n\n    // \u9010\u884C\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\n    while(fread(handle, buf))\n    {\n        print(buf); // \u8F93\u51FA\u6BCF\u884C\u5185\u5BB9\n    }\n\n    // \u5173\u95ED\u6587\u4EF6\n    fclose(handle);\n}\nelse\n{\n    // \u9519\u8BEF\u63D0\u793A\n    print("\u6587\u4EF6 \\"file.txt\\" \u4E0D\u5B58\u5728\u6216\u65E0\u6CD5\u6253\u5F00\u3002");\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"io_write \u6A21\u5F0F\uFF08\u53EA\u5199\uFF09\uFF1A"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4EE5"\u53EA\u5199"\u6A21\u5F0F\u6253\u5F00"file.txt"\nnew File:handle = fopen("file.txt", io_write);\n\nif (handle)\n{\n    // \u5199\u5165\u5185\u5BB9\n    fwrite(handle, "\u8FD9\u662F\u65B0\u5199\u5165\u7684\u5185\u5BB9\uFF01");\n\n    fclose(handle); // \u5173\u95ED\u6587\u4EF6\n}\nelse\n{\n    print("\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6 \\"file.txt\\"");\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"io_readwrite \u6A21\u5F0F\uFF08\u8BFB\u5199\uFF09\uFF1A"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4EE5"\u8BFB\u5199"\u6A21\u5F0F\u6253\u5F00"file.txt"\nnew File:handle = fopen("file.txt", io_readwrite);\nnew buf[128];\n\nif (handle)\n{\n    // \u8BFB\u53D6\u73B0\u6709\u5185\u5BB9\n    while(fread(handle, buf))\n    {\n        print(buf);\n    }\n\n    // \u91CD\u7F6E\u6587\u4EF6\u6307\u9488\u5230\u8D77\u59CB\u4F4D\u7F6E\n    fseek(handle, _, seek_begin);\n\n    // \u8986\u76D6\u5199\u5165\u65B0\u5185\u5BB9\n    fwrite(handle, "\u8986\u76D6\u539F\u59CB\u5185\u5BB9");\n\n    fclose(handle);\n}\nelse\n{\n    print("\u6587\u4EF6\u64CD\u4F5C\u5931\u8D25");\n}\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"io_append \u6A21\u5F0F\uFF08\u8FFD\u52A0\uFF09\uFF1A"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4EE5"\u8FFD\u52A0"\u6A21\u5F0F\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6\nnew File:handle = fopen("server.log", io_append);\n\nif (handle)\n{\n    // \u8FFD\u52A0\u65E5\u5FD7\u6761\u76EE\n    fwrite(handle, "[LOG] \u670D\u52A1\u5668\u542F\u52A8\u6210\u529F\\r\\n");\n\n    fclose(handle);\n}\nelse\n{\n    print("\u65E5\u5FD7\u6587\u4EF6\u5199\u5165\u5931\u8D25");\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"io_read"})," \u6A21\u5F0F\u4E0B\u6253\u5F00\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\u5C06\u8FD4\u56DE\u7A7A\u53E5\u67C4"]}),"\n",(0,l.jsx)(n.li,{children:"\u4F7F\u7528\u65E0\u6548\u53E5\u67C4\u6267\u884C\u6587\u4EF6\u64CD\u4F5C\u4F1A\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83"}),"\n",(0,l.jsxs)(n.li,{children:["\u6587\u4EF6\u64CD\u4F5C\u5B8C\u6210\u540E\u52A1\u5FC5\u4F7F\u7528 ",(0,l.jsx)(n.a,{href:"fclose",children:"fclose"})," \u5173\u95ED\u6587\u4EF6"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fclose",children:"fclose"}),": \u5173\u95ED\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": \u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6D41"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fremove",children:"fremove"}),": \u5220\u9664\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": \u5199\u5165\u6587\u4EF6\u5185\u5BB9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fread",children:"fread"}),": \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": \u5199\u5165\u5355\u4E2A\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": \u8BFB\u53D6\u5355\u4E2A\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": \u6279\u91CF\u5199\u5165\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": \u6279\u91CF\u8BFB\u53D6\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fseek",children:"fseek"}),": \u8C03\u6574\u6587\u4EF6\u6307\u9488\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"flength",children:"flength"}),": \u83B7\u53D6\u6587\u4EF6\u5927\u5C0F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fexist",children:"fexist"}),": \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": \u6587\u4EF6\u540D\u6A21\u5F0F\u5339\u914D"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftell",children:"ftell"}),": \u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u6307\u9488\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fflush",children:"fflush"}),": \u5F3A\u5236\u5199\u5165\u78C1\u76D8\u7F13\u5B58"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fstat",children:"fstat"}),": \u83B7\u53D6\u6587\u4EF6\u5143\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"frename",children:"frename"}),": \u6587\u4EF6\u91CD\u547D\u540D"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": \u6587\u4EF6\u590D\u5236"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": \u8BA1\u7B97\u6587\u4EF6 CRC \u6821\u9A8C\u7801"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": \u67E5\u8BE2\u78C1\u76D8\u5269\u4F59\u7A7A\u95F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": \u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": \u521B\u5EFA\u76EE\u5F55"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/file-modes",children:"\u6587\u4EF6\u6A21\u5F0F\u8BE6\u89E3"})}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var r=i(67294);let l={},s=r.createContext(l);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
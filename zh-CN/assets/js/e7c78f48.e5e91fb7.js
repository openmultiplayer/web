"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13771"],{80296:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>f,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/ftemp","title":"ftemp","description":"\u5728\\"tmp\\"\u3001\\"temp\\"\u76EE\u5F55\u6216\u6839\u76EE\u5F55\u521B\u5EFA\u968F\u673A\u547D\u540D\u7684\u4E34\u65F6\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/ftemp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ftemp","permalink":"/zh-CN/docs/scripting/functions/ftemp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ftemp.md","tags":[{"inline":true,"label":"\u6587\u4EF6\u7BA1\u7406","permalink":"/zh-CN/docs/tags/\u6587\u4EF6\u7BA1\u7406"}],"version":"current","frontMatter":{"title":"ftemp","sidebar_label":"ftemp","description":"\u5728\\"tmp\\"\u3001\\"temp\\"\u76EE\u5F55\u6216\u6839\u76EE\u5F55\u521B\u5EFA\u968F\u673A\u547D\u540D\u7684\u4E34\u65F6\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002","tags":["\u6587\u4EF6\u7BA1\u7406"]},"sidebar":"docsSidebar","previous":{"title":"ftell","permalink":"/zh-CN/docs/scripting/functions/ftell"},"next":{"title":"funcidx","permalink":"/zh-CN/docs/scripting/functions/funcidx"}}'),l=i("85893"),r=i("50065");let s={title:"ftemp",sidebar_label:"ftemp",description:'\u5728"tmp"\u3001"temp"\u76EE\u5F55\u6216\u6839\u76EE\u5F55\u521B\u5EFA\u968F\u673A\u547D\u540D\u7684\u4E34\u65F6\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002',tags:["\u6587\u4EF6\u7BA1\u7406"]},c=void 0,f={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNoteZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:'\u5728"tmp"\u3001"temp"\u76EE\u5F55\u6216\u6839\u76EE\u5F55\u521B\u5EFA\u968F\u673A\u547D\u540D\u7684\u4E34\u65F6\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002\u8BE5\u6587\u4EF6\u5728\u4F7F\u7528 fclose()\u5173\u95ED\u540E\u4F1A\u81EA\u52A8\u5220\u9664\u3002'}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6D41\nnew File:t_handle = ftemp();\n\n// \u58F0\u660E\u53E5\u67C4\u53D8\u91CF\nnew File:handle;\n\n// \u58F0\u660E\u5B57\u7B26\u53D8\u91CF\nnew g_char;\n\n// \u68C0\u67E5\u4E34\u65F6\u6587\u4EF6\u662F\u5426\u6210\u529F\u521B\u5EFA\nif (t_handle)\n{\n    // \u64CD\u4F5C\u6210\u529F\n\n    // \u4EE5"\u53EA\u8BFB"\u6A21\u5F0F\u6253\u5F00"file.txt"\u5E76\u68C0\u67E5\n    if (handle = fopen("file.txt", io_read))\n    {\n        // \u8BFB\u53D6\u6E90\u6587\u4EF6\u6240\u6709\u5B57\u7B26\n        while((g_char = fgetchar(handle, 0, false))\xa0!= EOF)\n        {\n            // \u5C06\u5C0F\u5199\u5B57\u7B26\u5199\u5165\u4E34\u65F6\u6587\u4EF6\n            fputchar(t_handle, tolower(g_char), false);\n        }\n\n        // \u5173\u95ED\u6E90\u6587\u4EF6\n        fclose(handle);\n\n        // \u91CD\u7F6E\u4E34\u65F6\u6587\u4EF6\u6307\u9488\u5230\u8D77\u59CB\u4F4D\u7F6E\n        fseek(t_handle, _, seek_begin);\n\n        // \u4EE5"\u53EA\u5199"\u6A21\u5F0F\u6253\u5F00"file1.txt"\u5E76\u68C0\u67E5\n        if (handle = fopen("file1.txt", io_write))\n        {\n            // \u8BFB\u53D6\u4E34\u65F6\u6587\u4EF6\u6240\u6709\u5B57\u7B26\n            while((g_char = fgetchar(t_handle, 0, false))\xa0!= EOF)\n            {\n                // \u5199\u5165\u76EE\u6807\u6587\u4EF61\n                fputchar(handle, g_char, false);\n            }\n\n            // \u5173\u95ED\u76EE\u6807\u6587\u4EF61\n            fclose(handle);\n\n            // \u518D\u6B21\u91CD\u7F6E\u4E34\u65F6\u6587\u4EF6\u6307\u9488\n            fseek(t_handle, _, seek_begin);\n        }\n        else\n        {\n            print("\u65E0\u6CD5\u6253\u5F00\\"file1.txt\\"\u6587\u4EF6\u3002");\n        }\n\n        // \u4EE5"\u53EA\u5199"\u6A21\u5F0F\u6253\u5F00"file2.txt"\u5E76\u68C0\u67E5\n        if (handle = fopen("file2.txt", io_write))\n        {\n            // \u8BFB\u53D6\u4E34\u65F6\u6587\u4EF6\u6240\u6709\u5B57\u7B26\n            while((g_char = fgetchar(t_handle, 0, false))\xa0!= EOF)\n            {\n                // \u5199\u5165\u76EE\u6807\u6587\u4EF62\n                fputchar(handle, g_char, false);\n            }\n\n            // \u5173\u95ED\u76EE\u6807\u6587\u4EF62\n            fclose(handle);\n        }\n        else\n        {\n            print("\u65E0\u6CD5\u6253\u5F00\\"file2.txt\\"\u6587\u4EF6\u3002");\n        }\n    }\n    else\n    {\n        print("\u65E0\u6CD5\u6253\u5F00\\"file.txt\\"\u6587\u4EF6\u3002");\n    }\n\n    // \u5173\u95ED\u4E34\u65F6\u6587\u4EF6\u6D41\uFF08\u81EA\u52A8\u5220\u9664\uFF09\n    fclose(t_handle);\n}\nelse\n{\n    print("\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6D41\u5931\u8D25\u3002");\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"\u82E5\u76EE\u6807\u76EE\u5F55\u672A\u6B63\u786E\u521B\u5EFA\uFF0C\u6B64\u51FD\u6570\u53EF\u80FD\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fopen",children:"fopen"}),": \u6253\u5F00\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fclose",children:"fclose"}),": \u5173\u95ED\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fremove",children:"fremove"}),": \u5220\u9664\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": \u5199\u5165\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fread",children:"fread"}),": \u8BFB\u53D6\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": \u5199\u5165\u5355\u4E2A\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": \u8BFB\u53D6\u5355\u4E2A\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": \u5199\u5165\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": \u8BFB\u53D6\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fseek",children:"fseek"}),": \u5B9A\u4F4D\u6587\u4EF6\u6307\u9488"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"flength",children:"flength"}),": \u83B7\u53D6\u6587\u4EF6\u957F\u5EA6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fexist",children:"fexist"}),": \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": \u5339\u914D\u6587\u4EF6\u540D\u6A21\u5F0F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftell",children:"ftell"}),": \u83B7\u53D6\u5F53\u524D\u6307\u9488\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fflush",children:"fflush"}),": \u5237\u65B0\u6587\u4EF6\u7F13\u51B2\u533A"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fstat",children:"fstat"}),": \u83B7\u53D6\u6587\u4EF6\u72B6\u6001\u4FE1\u606F"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"frename",children:"frename"}),": \u91CD\u547D\u540D\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": \u590D\u5236\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": \u8BA1\u7B97 CRC32 \u6821\u9A8C\u503C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": \u83B7\u53D6\u78C1\u76D8\u5269\u4F59\u7A7A\u95F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": \u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": \u521B\u5EFA\u76EE\u5F55"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(67294);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55249"],{63646:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/fblockread","title":"fblockread","description":"\u4ECE\u6587\u4EF6\u8BFB\u53D6\u539F\u59CB\u6570\u636E\u5757\uFF08\u4E0D\u5904\u7406\u7F16\u7801\u548C\u884C\u7EC8\u6B62\u7B26\uFF09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/fblockread.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fblockread","permalink":"/zh-CN/docs/scripting/functions/fblockread","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fblockread.md","tags":[{"inline":true,"label":"\u6587\u4EF6\u7BA1\u7406","permalink":"/zh-CN/docs/tags/\u6587\u4EF6\u7BA1\u7406"}],"version":"current","frontMatter":{"title":"fblockread","sidebar_label":"fblockread","description":"\u4ECE\u6587\u4EF6\u8BFB\u53D6\u539F\u59CB\u6570\u636E\u5757\uFF08\u4E0D\u5904\u7406\u7F16\u7801\u548C\u884C\u7EC8\u6B62\u7B26\uFF09\u3002","tags":["\u6587\u4EF6\u7BA1\u7406"]},"sidebar":"docsSidebar","previous":{"title":"fattrib","permalink":"/zh-CN/docs/scripting/functions/fattrib"},"next":{"title":"fblockwrite","permalink":"/zh-CN/docs/scripting/functions/fblockwrite"}}'),l=i("85893"),s=i("50065");let t={title:"fblockread",sidebar_label:"fblockread",description:"\u4ECE\u6587\u4EF6\u8BFB\u53D6\u539F\u59CB\u6570\u636E\u5757\uFF08\u4E0D\u5904\u7406\u7F16\u7801\u548C\u884C\u7EC8\u6B62\u7B26\uFF09\u3002",tags:["\u6587\u4EF6\u7BA1\u7406"]},c=void 0,d={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function f(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNoteZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u5141\u8BB8\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u539F\u59CB\u6570\u636E\u5757\uFF08\u4E0D\u5904\u7406\u7F16\u7801\u548C\u884C\u7EC8\u6B62\u7B26\uFF09\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540D\u79F0"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["File",":handle"]}),(0,l.jsx)(n.td,{children:"\u901A\u8FC7 fopen()\u6253\u5F00\u7684\u6587\u4EF6\u53E5\u67C4"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"buffer"}),(0,l.jsx)(n.td,{children:"\u5B58\u50A8\u8BFB\u53D6\u6570\u636E\u7684\u7F13\u51B2\u533A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"size = sizeof (buffer)"}),(0,l.jsx)(n.td,{children:"\u8981\u8BFB\u53D6\u7684\u6570\u636E\u5355\u5143\u6570\u91CF\uFF08\u9ED8\u8BA4\u7F13\u51B2\u533A\u5927\u5C0F\uFF09"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u8BFB\u53D6\u7684\u6570\u636E\u5355\u5143\u6570\u91CF\uFF0C\u6587\u4EF6\u672B\u5C3E\u65F6\u8FD4\u56DE 0"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u5B9A\u4E49\u679A\u4E3E\u7ED3\u6784\nenum _:some_enum\n{\n    some_data1,\n    some_data2[20],\n    Float:some_data3\n}\n\n// \u58F0\u660E\u6570\u636E\u5BB9\u5668\nnew some_data[some_enum];\n\n// ...\n\n// \u4EE5\u53EA\u8BFB\u6A21\u5F0F\u6253\u5F00\u4E8C\u8FDB\u5236\u6587\u4EF6\nnew File:handle = fopen("file.bin", io_read);\n\n// \u58F0\u660E\u6587\u4EF6\u957F\u5EA6\u53D8\u91CF\nnew file_len;\n\n// \u9A8C\u8BC1\u6587\u4EF6\u662F\u5426\u6210\u529F\u6253\u5F00\nif (handle)\n{\n    // \u83B7\u53D6\u6587\u4EF6\u603B\u957F\u5EA6\n    file_len = flength(handle);\n\n    // \u6821\u9A8C\u6587\u4EF6\u5C3A\u5BF8\u4E0E\u6570\u636E\u7ED3\u6784\u5339\u914D\n    if (file_len == (some_enum*4))\n    {\n        // \u6267\u884C\u5757\u8BFB\u53D6\u64CD\u4F5C\n        fblockread(handle, some_data);\n    }\n    else\n    {\n        print("\u6587\u4EF6\\"file.bin\\"\u4E0E\u6570\u636E\u7ED3\u6784\u4E0D\u517C\u5BB9");\n    }\n\n    // \u5173\u95ED\u6587\u4EF6\u53E5\u67C4\n    fclose(handle);\n}\nelse\n{\n    print("\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\\"file.bin\\"");\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u65E0\u6548\u53E5\u67C4\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\uFF01\u8BF7\u901A\u8FC7",(0,l.jsx)(n.a,{href:"fopen",children:"fopen"}),"\u6216",(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"}),"\u83B7\u53D6\u6709\u6548\u53E5\u67C4"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fopen",children:"fopen"}),": \u6253\u5F00\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fclose",children:"fclose"}),": \u5173\u95ED\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": \u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6D41"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fremove",children:"fremove"}),": \u5220\u9664\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": \u5199\u5165\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fread",children:"fread"}),": \u8BFB\u53D6\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": \u5199\u5165\u5355\u4E2A\u5B57\u7B26\u5230\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": \u4ECE\u6587\u4EF6\u8BFB\u53D6\u5355\u4E2A\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": \u5199\u5165\u6570\u636E\u5757\u5230\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fseek",children:"fseek"}),": \u5B9A\u4F4D\u6587\u4EF6\u6307\u9488\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"flength",children:"flength"}),": \u83B7\u53D6\u6587\u4EF6\u957F\u5EA6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fexist",children:"fexist"}),": \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": \u68C0\u67E5\u6587\u4EF6\u540D\u6A21\u5F0F\u5339\u914D"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftell",children:"ftell"}),": \u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u6307\u9488\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fflush",children:"fflush"}),": \u5237\u65B0\u6587\u4EF6\u7F13\u51B2\u533A\u5230\u78C1\u76D8"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fstat",children:"fstat"}),": \u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\u548C\u65F6\u95F4\u6233"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"frename",children:"frename"}),": \u91CD\u547D\u540D\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": \u590D\u5236\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": \u8BA1\u7B97\u6587\u4EF6 32 \u4F4D CRC \u6821\u9A8C\u503C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": \u83B7\u53D6\u78C1\u76D8\u5269\u4F59\u7A7A\u95F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": \u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": \u521B\u5EFA\u76EE\u5F55"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var r=i(67294);let l={},s=r.createContext(l);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
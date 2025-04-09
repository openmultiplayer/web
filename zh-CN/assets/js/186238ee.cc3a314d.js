"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["16381"],{77998:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/flength","title":"flength","description":"\u8FD4\u56DE\u6587\u4EF6\u7684\u957F\u5EA6\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/flength.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/flength","permalink":"/zh-CN/docs/scripting/functions/flength","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/flength.md","tags":[{"inline":true,"label":"\u6587\u4EF6\u7BA1\u7406","permalink":"/zh-CN/docs/tags/\u6587\u4EF6\u7BA1\u7406"}],"version":"current","frontMatter":{"title":"flength","sidebar_label":"flength","description":"\u8FD4\u56DE\u6587\u4EF6\u7684\u957F\u5EA6\u3002","tags":["\u6587\u4EF6\u7BA1\u7406"]},"sidebar":"docsSidebar","previous":{"title":"filecrc","permalink":"/zh-CN/docs/scripting/functions/filecrc"},"next":{"title":"float","permalink":"/zh-CN/docs/scripting/functions/float"}}'),l=i("85893"),t=i("50065");let s={title:"flength",sidebar_label:"flength",description:"\u8FD4\u56DE\u6587\u4EF6\u7684\u957F\u5EA6\u3002",tags:["\u6587\u4EF6\u7BA1\u7406"]},c=void 0,d={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function f(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{LowercaseNoteZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u6587\u4EF6\u7684\u957F\u5EA6\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540D\u79F0"}),(0,l.jsx)(n.th,{children:"\u63CF\u8FF0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["File",":handle"]}),(0,l.jsxs)(n.td,{children:["\u7531 ",(0,l.jsx)(n.a,{href:"fopen",children:"fopen"})," \u6216 ",(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"})," \u8FD4\u56DE\u7684\u6587\u4EF6\u53E5\u67C4"]})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u6587\u4EF6\u957F\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5B57\u8282\uFF09"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4EE5"\u53EA\u8BFB"\u6A21\u5F0F\u6253\u5F00"file.txt"\nnew File:handle = fopen("file.txt", io_read);\n\n// \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u6210\u529F\u6253\u5F00\nif (handle)\n{\n    // \u6210\u529F\n\n    // \u8F93\u51FA"file.txt"\u7684\u5B57\u8282\u5927\u5C0F\n    printf("\u6587\u4EF6\u5927\u5C0F: %d \u5B57\u8282", flength(handle));\n\n    // \u5173\u95ED"file.txt"\n    fclose(handle);\n}\nelse\n{\n    // \u9519\u8BEF\n    print("\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6 \\"file.txt\\"\u3002");\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u65E0\u6548\u53E5\u67C4\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\uFF01\u8BF7\u901A\u8FC7 ",(0,l.jsx)(n.a,{href:"fopen",children:"fopen"})," \u6216 ",(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"})," \u83B7\u53D6\u6709\u6548\u53E5\u67C4\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fopen",children:"fopen"}),": \u6253\u5F00\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fclose",children:"fclose"}),": \u5173\u95ED\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": \u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6D41"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fremove",children:"fremove"}),": \u5220\u9664\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": \u5199\u5165\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fread",children:"fread"}),": \u8BFB\u53D6\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": \u5411\u6587\u4EF6\u5199\u5165\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": \u4ECE\u6587\u4EF6\u8BFB\u53D6\u5B57\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": \u5411\u6587\u4EF6\u5199\u5165\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": \u4ECE\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u5757"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fseek",children:"fseek"}),": \u8DF3\u8F6C\u81F3\u6587\u4EF6\u6307\u5B9A\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fexist",children:"fexist"}),": \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": \u68C0\u67E5\u6587\u4EF6\u540D\u6A21\u5F0F\u5339\u914D"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ftell",children:"ftell"}),": \u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u4F4D\u7F6E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fflush",children:"fflush"}),": \u5C06\u6587\u4EF6\u5237\u5165\u78C1\u76D8\uFF08\u786E\u4FDD\u6240\u6709\u5199\u5165\u5B8C\u6210\uFF09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fstat",children:"fstat"}),": \u8FD4\u56DE\u6587\u4EF6\u5927\u5C0F\u548C\u65F6\u95F4\u6233"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"frename",children:"frename"}),": \u91CD\u547D\u540D\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": \u590D\u5236\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": \u8FD4\u56DE\u6587\u4EF6\u7684 32 \u4F4D CRC \u503C"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": \u8FD4\u56DE\u78C1\u76D8\u5269\u4F59\u7A7A\u95F4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": \u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": \u521B\u5EFA\u76EE\u5F55"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var r=i(67294);let l={},t=r.createContext(l);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
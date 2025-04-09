"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74627"],{27876:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/clamp","title":"clamp","description":"\u5C06\u6570\u503C\u5F3A\u5236\u9650\u5236\u5728\u6307\u5B9A\u8303\u56F4\u5185","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/clamp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/clamp","permalink":"/zh-CN/docs/scripting/functions/clamp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/clamp.md","tags":[{"inline":true,"label":"\u6838\u5FC3\u529F\u80FD","permalink":"/zh-CN/docs/tags/\u6838\u5FC3\u529F\u80FD"}],"version":"current","frontMatter":{"title":"clamp","sidebar_label":"clamp","description":"\u5C06\u6570\u503C\u5F3A\u5236\u9650\u5236\u5728\u6307\u5B9A\u8303\u56F4\u5185","tags":["\u6838\u5FC3\u529F\u80FD"]},"sidebar":"docsSidebar","previous":{"title":"atan2","permalink":"/zh-CN/docs/scripting/functions/atan2"},"next":{"title":"db_close","permalink":"/zh-CN/docs/scripting/functions/db_close"}}'),l=t("85893"),r=t("50065");let c={title:"clamp",sidebar_label:"clamp",description:"\u5C06\u6570\u503C\u5F3A\u5236\u9650\u5236\u5728\u6307\u5B9A\u8303\u56F4\u5185",tags:["\u6838\u5FC3\u529F\u80FD"]},s=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNoteZH_CN:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u5C06\u8F93\u5165\u7684\u6570\u503C\u5F3A\u5236\u9650\u5236\u5728\u6307\u5B9A\u7684\u533A\u95F4\u8303\u56F4\u5185"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u9650\u5236\u8303\u56F4\u7684\u6570\u503C"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"min"}),(0,l.jsx)(n.td,{children:"\u533A\u95F4\u4E0B\u9650\u503C\uFF08\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\uFF1Acellmin\uFF09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"max"}),(0,l.jsx)(n.td,{children:"\u533A\u95F4\u4E0A\u9650\u503C\uFF08\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\uFF1Acellmax\uFF09"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5F53\u6570\u503C\u5728 min~max \u533A\u95F4\u65F6\uFF0C\u8FD4\u56DE\u539F\u503C"}),"\n",(0,l.jsx)(n.li,{children:"\u5F53\u6570\u503C\u5C0F\u4E8E min \u65F6\uFF0C\u8FD4\u56DE min"}),"\n",(0,l.jsx)(n.li,{children:"\u5F53\u6570\u503C\u5927\u4E8E max \u65F6\uFF0C\u8FD4\u56DE max"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new\n    valueA = 3,\n    valueB = 7,\n    valueC = 100\n;\nprintf("\u8BA1\u7B97\u7ED3\u679C\uFF1A%d", clamp(valueA, 5, 10)); // \u8F93\u51FA\uFF1A"\u8BA1\u7B97\u7ED3\u679C\uFF1A5"\uFF083\u5C0F\u4E8E\u4E0B\u96505\uFF09\nprintf("\u8BA1\u7B97\u7ED3\u679C\uFF1A%d", clamp(valueB, 5, 10)); // \u8F93\u51FA\uFF1A"\u8BA1\u7B97\u7ED3\u679C\uFF1A7"\uFF087\u57285~10\u533A\u95F4\uFF09\nprintf("\u8BA1\u7B97\u7ED3\u679C\uFF1A%d", clamp(valueC, 5, 10)); // \u8F93\u51FA\uFF1A"\u8BA1\u7B97\u7ED3\u679C\uFF1A10"\uFF08100\u8D85\u8FC7\u4E0A\u965010\uFF09\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let l={},r=i.createContext(l);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
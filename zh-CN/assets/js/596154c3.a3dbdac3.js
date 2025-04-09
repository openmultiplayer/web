"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39185"],{94727:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>s});var d=JSON.parse('{"id":"scripting/functions/AddSimpleModelTimed","title":"AddSimpleModelTimed","description":"\u6DFB\u52A0\u5177\u6709\u65F6\u95F4\u9650\u5236\u7684\u81EA\u5B9A\u4E49\u7B80\u5355\u7269\u4F53\u6A21\u578B","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/AddSimpleModelTimed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModelTimed","permalink":"/zh-CN/docs/scripting/functions/AddSimpleModelTimed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddSimpleModelTimed.md","tags":[{"inline":true,"label":"\u81EA\u5B9A\u4E49\u6A21\u578B","permalink":"/zh-CN/docs/tags/\u81EA\u5B9A\u4E49\u6A21\u578B"},{"inline":true,"label":"\u7B80\u5355\u6A21\u578B","permalink":"/zh-CN/docs/tags/\u7B80\u5355\u6A21\u578B"}],"version":"current","frontMatter":{"title":"AddSimpleModelTimed","sidebar_label":"AddSimpleModelTimed","description":"\u6DFB\u52A0\u5177\u6709\u65F6\u95F4\u9650\u5236\u7684\u81EA\u5B9A\u4E49\u7B80\u5355\u7269\u4F53\u6A21\u578B","tags":["\u81EA\u5B9A\u4E49\u6A21\u578B","\u7B80\u5355\u6A21\u578B"]},"sidebar":"docsSidebar","previous":{"title":"AddSimpleModel","permalink":"/zh-CN/docs/scripting/functions/AddSimpleModel"},"next":{"title":"AddStaticPickup","permalink":"/zh-CN/docs/scripting/functions/AddStaticPickup"}}'),t=i("85893"),l=i("50065");let r={title:"AddSimpleModelTimed",sidebar_label:"AddSimpleModelTimed",description:"\u6DFB\u52A0\u5177\u6709\u65F6\u95F4\u9650\u5236\u7684\u81EA\u5B9A\u4E49\u7B80\u5355\u7269\u4F53\u6A21\u578B",tags:["\u81EA\u5B9A\u4E49\u6A21\u578B","\u7B80\u5355\u6A21\u578B"]},s=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{version:"SA-MP 0.3.DL R1"}),"\n",(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u6DFB\u52A0\u5177\u6709\u65F6\u95F4\u9650\u5236\u7684\u81EA\u5B9A\u4E49\u7B80\u5355\u7269\u4F53\u6A21\u578B\u3002\u6A21\u578B\u6587\u4EF6\u5C06\u5B58\u50A8\u5728\u73A9\u5BB6\u7684\u300C\u6587\u6863\\GTA San Andreas User Files\\SAMP\\cache\u300D\u76EE\u5F55\u4E0B\uFF0C\u6309\u670D\u52A1\u5668 IP \u548C\u7AEF\u53E3\u5206\u7C7B\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u5E76\u4EE5 CRC \u683C\u5F0F\u6587\u4EF6\u540D\u4FDD\u5B58\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"virtualWorld"}),(0,t.jsx)(n.td,{children:"\u6A21\u578B\u751F\u6548\u7684\u865A\u62DF\u4E16\u754C ID\uFF0C\u4F7F\u7528-1 \u8868\u793A\u5168\u865A\u62DF\u4E16\u754C"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"baseid"}),(0,t.jsx)(n.td,{children:"\u57FA\u7840\u7269\u4F53\u6A21\u578B ID\uFF08\u5F53\u4E0B\u8F7D\u5931\u8D25\u65F6\u5C06\u4F7F\u7528\u8BE5\u539F\u59CB\u7269\u4F53\u6A21\u578B\uFF09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newid"}),(0,t.jsx)(n.td,{children:"\u65B0\u7269\u4F53\u6A21\u578B ID\uFF08\u8303\u56F4-1000 \u81F3-30000\uFF0C\u5171 29000 \u4E2A\u69FD\u4F4D\uFF09\uFF0C\u540E\u7EED\u53EF\u901A\u8FC7 CreateObject \u6216 CreatePlayerObject \u4F7F\u7528"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const dff[]"}),(0,t.jsx)(n.td,{children:".dff \u6A21\u578B\u78B0\u649E\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u4F4D\u4E8E\u670D\u52A1\u5668\u7684 models \u6587\u4EF6\u5939\uFF08\u53EF\u901A\u8FC7 artpath \u914D\u7F6E\u4FEE\u6539\u8DEF\u5F84\uFF09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const textureLibrary[]"}),(0,t.jsx)(n.td,{children:".txd \u6A21\u578B\u8D34\u56FE\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u4F4D\u4E8E\u670D\u52A1\u5668\u7684 models \u6587\u4EF6\u5939\uFF08\u53EF\u901A\u8FC7 artpath \u914D\u7F6E\u4FEE\u6539\u8DEF\u5F84\uFF09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeOn"}),(0,t.jsx)(n.td,{children:"\u6A21\u578B\u5F00\u59CB\u6E32\u67D3\u7684\u4E16\u754C\u6E38\u620F\u65F6\u95F4\uFF08\u5C0F\u65F6\uFF09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeOff"}),(0,t.jsx)(n.td,{children:"\u6A21\u578B\u505C\u6B62\u6E32\u67D3\u7684\u4E16\u754C\u6E38\u620F\u65F6\u95F4\uFF08\u5C0F\u65F6\uFF09"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1:"})," \u51FD\u6570\u6267\u884C\u6210\u529F\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"0:"})," \u51FD\u6570\u6267\u884C\u5931\u8D25\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    // \u8FD9\u9762\u5899\u4EC5\u5728\u4E0A\u53489\u70B9\u81F3\u4E0B\u53486\u70B9\u95F4\u53EF\u89C1\n    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u9700\u5148\u5728\u670D\u52A1\u5668\u914D\u7F6E\u4E2D\u542F\u7528",(0,t.jsx)(n.strong,{children:"useartwork"}),"\u6216",(0,t.jsx)(n.strong,{children:"artwork.enable"}),"\u9009\u9879\u624D\u80FD\u4F7F\u672C\u529F\u80FD\u751F\u6548\u3002"]}),(0,t.jsx)(n.p,{children:"\u5F53 virtualworld \u53C2\u6570\u8BBE\u7F6E\u65F6\uFF0C\u6A21\u578B\u5C06\u5728\u73A9\u5BB6\u8FDB\u5165\u6307\u5B9A\u865A\u62DF\u4E16\u754C\u65F6\u81EA\u52A8\u4E0B\u8F7D\u3002"})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u5F53\u524D\u5BF9\u8C03\u7528\u65F6\u673A\u6CA1\u6709\u9650\u5236\uFF0C\u4F46\u8BF7\u6CE8\u610F\uFF1A\u82E5\u672A\u5728",(0,t.jsx)(n.a,{href:"../callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"}),"/",(0,t.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),"\u56DE\u8C03\u4E2D\u8C03\u7528\uFF0C\u5DF2\u8FDE\u63A5\u7684\u73A9\u5BB6\u53EF\u80FD\u65E0\u6CD5\u4E0B\u8F7D\u8FD9\u4E9B\u6A21\u578B\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsValidCustomModel",children:"IsValidCustomModel"}),": \u9A8C\u8BC1\u81EA\u5B9A\u4E49\u6A21\u578B ID \u6709\u6548\u6027"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetCustomModelPath",children:"GetCustomModelPath"}),": \u83B7\u53D6\u81EA\u5B9A\u4E49\u6A21\u578B\u8DEF\u5F84"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": \u5F53\u73A9\u5BB6\u5B8C\u6210\u81EA\u5B9A\u4E49\u6A21\u578B\u4E0B\u8F7D\u65F6\u89E6\u53D1"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var d=i(67294);let t={},l=d.createContext(t);function r(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94634"],{89141:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/GetRandomVehicleColourPair","title":"GetRandomVehicleColourPair","description":"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u6A21\u578B\u7684\u6709\u6548\u968F\u673A\u989C\u8272\u7D22\u5F15\u7EC4\u5408","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetRandomVehicleColourPair.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetRandomVehicleColourPair","permalink":"/zh-CN/docs/scripting/functions/GetRandomVehicleColourPair","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetRandomVehicleColourPair.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"GetRandomVehicleColourPair","sidebar_label":"GetRandomVehicleColourPair","description":"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u6A21\u578B\u7684\u6709\u6548\u968F\u673A\u989C\u8272\u7D22\u5F15\u7EC4\u5408","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayers","permalink":"/zh-CN/docs/scripting/functions/GetPlayers"},"next":{"title":"GetRunningTimers","permalink":"/zh-CN/docs/scripting/functions/GetRunningTimers"}}'),i=r("85893"),o=r("50065");let l={title:"GetRandomVehicleColourPair",sidebar_label:"GetRandomVehicleColourPair",description:"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u6A21\u578B\u7684\u6709\u6548\u968F\u673A\u989C\u8272\u7D22\u5F15\u7EC4\u5408",tags:["\u8F66\u8F86"]},c=void 0,s={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarnZH_CN:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8F66\u8F86\u6A21\u578B\u7684\u6709\u6548\u968F\u673A\u989C\u8272\u7D22\u5F15\u7EC4\u5408"}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modelid"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../resources/vehicleid",children:"\u8F66\u8F86\u6A21\u578B ID"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"&colour1"}),(0,i.jsx)(n.td,{children:"\u5B58\u50A8\u4E3B\u989C\u8272\u7D22\u5F15\u7684\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"&colour2"}),(0,i.jsx)(n.td,{children:"\u5B58\u50A8\u526F\u989C\u8272\u7D22\u5F15\u7684\u53D8\u91CF\uFF08\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"&colour3 = 0"}),(0,i.jsx)(n.td,{children:"\u5B58\u50A8\u7B2C\u4E09\u989C\u8272\u7D22\u5F15\u7684\u53D8\u91CF\uFF08\u53EF\u9009\u53C2\u6570\uFF0C\u5F15\u7528\u4F20\u9012\uFF09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"&colour4 = 0"}),(0,i.jsx)(n.td,{children:"\u5B58\u50A8\u7B2C\u56DB\u989C\u8272\u7D22\u5F15\u7684\u53D8\u91CF\uFF08\u53EF\u9009\u53C2\u6570\uFF0C\u5F15\u7528\u4F20\u9012\uFF09"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n	colour1,\n	colour2;\n\n// \u83B7\u53D6Sultan\u8F66\u578B\u7684\u968F\u673A\u989C\u8272\u7EC4\u5408\uFF08\u6A21\u578BID 560\uFF09\nGetRandomVehicleColourPair(560, colour1, colour2);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"VehicleColourIndexToColour",children:"VehicleColourIndexToColour"}),": \u5C06\u989C\u8272\u7D22\u5F15\u8F6C\u6362\u4E3A HEX \u989C\u8272\u503C\uFF08RGBA \u683C\u5F0F\uFF09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": \u83B7\u53D6\u8F66\u8F86\u5F53\u524D\u989C\u8272\u914D\u7F6E"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(67294);let i={},o=t.createContext(i);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
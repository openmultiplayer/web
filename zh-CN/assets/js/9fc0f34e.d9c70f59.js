"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3725"],{70986:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"scripting/functions/SetTimerEx","title":"SetTimerEx","description":"\u8BBE\u7F6E\u5B9A\u65F6\u5668\u4EE5\u5728\u6307\u5B9A\u95F4\u9694\u540E\u8C03\u7528\u51FD\u6570\uFF0C\u5E76\u53EF\u4F20\u9012\u53C2\u6570\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetTimerEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimerEx","permalink":"/zh-CN/docs/scripting/functions/SetTimerEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetTimerEx.md","tags":[{"inline":true,"label":"\u5B9A\u65F6\u5668","permalink":"/zh-CN/docs/tags/\u5B9A\u65F6\u5668"}],"version":"current","frontMatter":{"title":"SetTimerEx","sidebar_label":"SetTimerEx","description":"\u8BBE\u7F6E\u5B9A\u65F6\u5668\u4EE5\u5728\u6307\u5B9A\u95F4\u9694\u540E\u8C03\u7528\u51FD\u6570\uFF0C\u5E76\u53EF\u4F20\u9012\u53C2\u6570\u3002","tags":["\u5B9A\u65F6\u5668"]},"sidebar":"docsSidebar","previous":{"title":"SetTimer","permalink":"/zh-CN/docs/scripting/functions/SetTimer"},"next":{"title":"SetVehicleAngularVelocity","permalink":"/zh-CN/docs/scripting/functions/SetVehicleAngularVelocity"}}'),t=i("85893"),l=i("50065");let s={title:"SetTimerEx",sidebar_label:"SetTimerEx",description:"\u8BBE\u7F6E\u5B9A\u65F6\u5668\u4EE5\u5728\u6307\u5B9A\u95F4\u9694\u540E\u8C03\u7528\u51FD\u6570\uFF0C\u5E76\u53EF\u4F20\u9012\u53C2\u6570\u3002",tags:["\u5B9A\u65F6\u5668"]},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:2},{value:"\u5B9A\u4E49\u503C",id:"\u5B9A\u4E49\u503C",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5B9A\u65F6\u5668\u4EE5\u5728\u6307\u5B9A\u95F4\u9694\u540E\u8C03\u7528\u51FD\u6570\u3002\u6B64\u53D8\u4F53 ('Ex') \u53EF\u5411\u76EE\u6807\u51FD\u6570\u4F20\u9012\u53C2\u6570\uFF08\u5982\u73A9\u5BB6 ID\uFF09\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540D\u79F0"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const functionName[]"}),(0,t.jsx)(n.td,{children:"\u5B9A\u65F6\u5668\u5230\u671F\u65F6\u8C03\u7528\u7684\u516C\u5171\u51FD\u6570\u540D\u79F0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"interval"}),(0,t.jsx)(n.td,{children:"\u65F6\u95F4\u95F4\u9694\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF0C1 \u79D2=1000 \u6BEB\u79D2\uFF09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["bool",":repeating"]}),(0,t.jsx)(n.td,{children:"\u5E03\u5C14\u503C\uFF08true/false \u6216 1/0\uFF09\uFF0C\u51B3\u5B9A\u5B9A\u65F6\u5668\u662F\u5426\u91CD\u590D\u6267\u884C\uFF08\u4EC5\u80FD\u901A\u8FC7 KillTimer \u505C\u6B62\uFF09\u6216\u5355\u6B21\u6267\u884C"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const specifiers[]"}),(0,t.jsx)(n.td,{children:"\u7279\u6B8A\u683C\u5F0F\u8BF4\u660E\u7B26\uFF0C\u7528\u4E8E\u6307\u793A\u4F20\u9012\u53C2\u6570\u7684\u7C7B\u578B"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,t.jsx)(n.td,{children:"\u4E0D\u5B9A\u6570\u91CF\u53C2\u6570\uFF08\u9700\u7B26\u5408\u524D\u53C2\u6570\u6307\u5B9A\u7684\u683C\u5F0F\uFF09"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u5DF2\u542F\u52A8\u5B9A\u65F6\u5668\u7684 ID\u3002\u5B9A\u65F6\u5668 ID \u4ECE 1 \u5F00\u59CB\u4E14\u6C38\u4E0D\u91CD\u590D\u3002\u7CFB\u7EDF\u4E0D\u4F1A\u6821\u9A8C\u53C2\u6570\u5408\u6CD5\u6027\uFF08\u5982\u8D1F\u503C\u95F4\u9694\uFF09\uFF0C\u63A8\u8350\u4F7F\u7528 Y_Less \u7684'fixes2'\u63D2\u4EF6\u589E\u5F3A\u6821\u9A8C\u7CBE\u5EA6\u53CA\u6570\u7EC4/\u5B57\u7B26\u4E32\u4F20\u9012\u529F\u80FD\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n// EndAntiSpawnKill - \u5C06\u8981\u8C03\u7528\u7684\u51FD\u6570\n// 5000 - 5000\u6BEB\u79D2\uFF085\u79D2\uFF09\u65F6\u95F4\u95F4\u9694\n// false - \u975E\u91CD\u590D\u6267\u884C\uFF0C\u4EC5\u89E6\u53D1\u4E00\u6B21\n// "i" - i\u4EE3\u8868\u6574\u578B\uFF0C\u6B64\u5904\u4F20\u9012\u73A9\u5BB6ID\n// playerid - \u8981\u4F20\u9012\u7684\u6574\u578B\u503C\uFF08\u73A9\u5BB6ID\uFF09\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// \u5728\u73A9\u5BB6\u751F\u6210\u4E8B\u4EF6\u4E2D\u542F\u52A8\u5B9A\u65F6\u5668\npublic OnPlayerSpawn(playerid)\n{\n    // \u53CD\u91CD\u751F\u70B9\u51FB\u6740\u4FDD\u62A4\uFF085\u79D2\uFF09\n    SetPlayerHealth(playerid, 999999.0);\n    SendClientMessage(playerid, -1, "\u4F60\u5DF2\u83B7\u5F975\u79D2\u91CD\u751F\u4FDD\u62A4");\n\n    // \u542F\u52A85\u79D2\u5B9A\u65F6\u5668\n    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n}\n\n// \u58F0\u660E\u516C\u5171\u51FD\u6570\nforward EndAntiSpawnKill(playerid);\npublic EndAntiSpawnKill(playerid)\n{\n    // 5\u79D2\u540E\u6062\u590D\u751F\u547D\u503C\n    SetPlayerHealth(playerid, 100.0);\n    SendClientMessage(playerid, -1, "\u91CD\u751F\u4FDD\u62A4\u5DF2\u5931\u6548");\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["SA-MP \u4E2D\u5B9A\u65F6\u5668\u7CBE\u5EA6\u5B58\u5728\u7EA6 25%\u504F\u5DEE\uFF0C\u53EF\u901A\u8FC7",(0,t.jsx)(n.a,{href:"https://sampforum.blast.hk/showthread.php?tid=289675",children:"\u6B64\u4FEE\u590D"}),"\u6216",(0,t.jsx)(n.a,{href:"https://sampforum.blast.hk/showthread.php?tid=650736",children:"\u6B64\u65B9\u6848"}),"\u4F18\u5316\u3002open.mp \u5DF2\u4FEE\u590D\u6B64\u95EE\u9898\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5B9A\u65F6\u5668 ID \u53D8\u91CF\u5EFA\u8BAE\u7528\u5B8C\u540E\u91CD\u7F6E\u4E3A 0\uFF0C\u907F\u514D\u8BEF\u64CD\u4F5C\u7EC8\u6B62\u65B0\u5B9A\u65F6\u5668"}),"\n",(0,t.jsx)(n.li,{children:"\u76EE\u6807\u51FD\u6570\u5FC5\u987B\u58F0\u660E\u4E3A public \u5E76\u901A\u8FC7 forward \u9884\u58F0\u660E"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-1"}),"\u5E76\u975E\u65E0\u6548 ID\uFF0C\u5B9E\u9645\u65E0\u6548 ID \u4E3A 0"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5B9A\u4E49\u503C",children:"\u5B9A\u4E49\u503C"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5B9A\u4E49\u503C"}),(0,t.jsx)(n.th,{children:"\u503C"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"INVALID_TIMER"}),(0,t.jsx)(n.td,{children:"0"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetTimer",children:"SetTimer"}),": \u521B\u5EFA\u57FA\u7840\u5B9A\u65F6\u5668"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"KillTimer",children:"KillTimer"}),": \u7EC8\u6B62\u5B9A\u65F6\u5668"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsValidTimer",children:"IsValidTimer"}),": \u6821\u9A8C\u5B9A\u65F6\u5668\u6709\u6548\u6027"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": \u68C0\u6D4B\u5B9A\u65F6\u5668\u662F\u5426\u5FAA\u73AF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": \u83B7\u53D6\u5B9A\u65F6\u5668\u95F4\u9694"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetTimerRemaining",children:"GetTimerRemaining"}),": \u83B7\u53D6\u5B9A\u65F6\u5668\u5269\u4F59\u65F6\u95F4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": \u7EDF\u8BA1\u8FD0\u884C\u4E2D\u5B9A\u65F6\u5668"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CallLocalFunction",children:"CallLocalFunction"}),": \u8C03\u7528\u811A\u672C\u5185\u51FD\u6570"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CallRemoteFunction",children:"CallRemoteFunction"}),": \u8DE8\u811A\u672C\u8C03\u7528\u51FD\u6570"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var r=i(67294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
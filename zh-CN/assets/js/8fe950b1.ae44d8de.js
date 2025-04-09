"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["57287"],{41314:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/GivePlayerMoney","title":"GivePlayerMoney","description":"\u7ED9\u4E88\u6216\u6263\u9664\u73A9\u5BB6\u7684\u8D44\u91D1\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GivePlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GivePlayerMoney","permalink":"/zh-CN/docs/scripting/functions/GivePlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GivePlayerMoney.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"GivePlayerMoney","sidebar_label":"GivePlayerMoney","description":"\u7ED9\u4E88\u6216\u6263\u9664\u73A9\u5BB6\u7684\u8D44\u91D1\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"GetWorldTime","permalink":"/zh-CN/docs/scripting/functions/GetWorldTime"},"next":{"title":"GivePlayerWeapon","permalink":"/zh-CN/docs/scripting/functions/GivePlayerWeapon"}}'),r=i("85893"),l=i("50065");let s={title:"GivePlayerMoney",sidebar_label:"GivePlayerMoney",description:"\u7ED9\u4E88\u6216\u6263\u9664\u73A9\u5BB6\u7684\u8D44\u91D1\u3002",tags:["\u73A9\u5BB6"]},o=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u6307\u5B9A\u73A9\u5BB6\u8FDB\u884C\u8D44\u91D1\u589E\u51CF\u64CD\u4F5C\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u76EE\u6807\u73A9\u5BB6\u7684 ID \u7F16\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"money"}),(0,r.jsx)(n.td,{children:"\u8D44\u91D1\u6570\u989D\uFF08\u6B63\u6570\u8868\u793A\u7ED9\u4E88\uFF0C\u8D1F\u6570\u8868\u793A\u6263\u9664\uFF09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1"})," - \u64CD\u4F5C\u6210\u529F\u6267\u884C"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"0"})," - \u64CD\u4F5C\u6267\u884C\u5931\u8D25\uFF08\u73A9\u5BB6\u672A\u8FDE\u63A5\uFF09"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (killerid != INVALID_PLAYER_ID)\n    {\n       // \u7ED9\u4E88\u51FB\u6740\u80051000\u7F8E\u5143\u5956\u52B1\n       GivePlayerMoney(killerid, 1000);\n       SendClientMessage(killerid, -1, "\u60A8\u56E0\u51FB\u6740\u83B7\u5F971000\u7F8E\u5143\u5956\u52B1");\n    }\n\n    // \u6263\u9664\u6B7B\u4EA1\u73A9\u5BB6500\u7F8E\u5143\n    GivePlayerMoney(playerid, -500);\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ResetPlayerMoney",children:"ResetPlayerMoney"}),": \u91CD\u7F6E\u73A9\u5BB6\u8D44\u91D1\u81F3$0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerMoney",children:"GetPlayerMoney"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u8D44\u91D1\u603B\u989D"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(67294);let r={},l=t.createContext(r);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
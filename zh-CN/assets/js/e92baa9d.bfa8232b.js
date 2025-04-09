"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91443"],{34214:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/SendDeathMessageToPlayer","title":"SendDeathMessageToPlayer","description":"\u5411\u6307\u5B9A\u73A9\u5BB6\u5C4F\u5E55\u53F3\u4FA7\u7684\u51FB\u6740\u4FE1\u606F\u680F\u6DFB\u52A0\u6B7B\u4EA1\u8BB0\u5F55","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SendDeathMessageToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendDeathMessageToPlayer","permalink":"/zh-CN/docs/scripting/functions/SendDeathMessageToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendDeathMessageToPlayer.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SendDeathMessageToPlayer","sidebar_label":"SendDeathMessageToPlayer","description":"\u5411\u6307\u5B9A\u73A9\u5BB6\u5C4F\u5E55\u53F3\u4FA7\u7684\u51FB\u6740\u4FE1\u606F\u680F\u6DFB\u52A0\u6B7B\u4EA1\u8BB0\u5F55","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SendDeathMessage","permalink":"/zh-CN/docs/scripting/functions/SendDeathMessage"},"next":{"title":"SendPlayerMessageToAll","permalink":"/zh-CN/docs/scripting/functions/SendPlayerMessageToAll"}}'),r=t("85893"),l=t("50065");let i={title:"SendDeathMessageToPlayer",sidebar_label:"SendDeathMessageToPlayer",description:"\u5411\u6307\u5B9A\u73A9\u5BB6\u5C4F\u5E55\u53F3\u4FA7\u7684\u51FB\u6740\u4FE1\u606F\u680F\u6DFB\u52A0\u6B7B\u4EA1\u8BB0\u5F55",tags:["\u73A9\u5BB6"]},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u5411\u6307\u5B9A\u73A9\u5BB6\u5C4F\u5E55\u53F3\u4FA7\u7684\u51FB\u6740\u4FE1\u606F\u680F\u6DFB\u52A0\u6B7B\u4EA1\u8BB0\u5F55"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u63A5\u6536\u6B7B\u4EA1\u4FE1\u606F\u7684\u73A9\u5BB6 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"killer"}),(0,r.jsx)(n.td,{children:"\u51F6\u624B\u73A9\u5BB6 ID\uFF08\u53EF\u4F7F\u7528 INVALID_PLAYER_ID \u8868\u793A\u65E0\u51F6\u624B\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"killee"}),(0,r.jsx)(n.td,{children:"\u6B7B\u4EA1\u73A9\u5BB6\u7684 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon"}),(0,r.jsx)(n.td,{children:"\u6B7B\u4EA1\u539F\u56E0\uFF08\u4E0D\u4E00\u5B9A\u662F\u6B66\u5668 ID\uFF09\uFF0C\u53EF\u4F7F\u7528\u7279\u6B8A\u56FE\u6807\uFF08ICON_CONNECT \u8FDE\u63A5\u56FE\u6807\u548C ICON_DISCONNECT \u65AD\u5F00\u56FE\u6807\uFF09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - \u51FD\u6570\u6267\u884C\u6210\u529F"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - \u51FD\u6570\u6267\u884C\u5931\u8D25\uFF08\u901A\u5E38\u7531\u65E0\u6548\u73A9\u5BB6 ID \u5BFC\u81F4\uFF09"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // \u5411"playerid"\u53D1\u9001\u6B7B\u4EA1\u4FE1\u606F\uFF0C\u663E\u793A"killerid"\u56E0"reason"\u51FB\u6740\u4E86"playerid"\n    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);\n\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SendDeathMessage",children:"SendDeathMessage"}),": \u5411\u5168\u4F53\u73A9\u5BB6\u5E7F\u64AD\u6B7B\u4EA1\u4FE1\u606F"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerDeath",children:"OnPlayerDeath"}),": \u5F53\u73A9\u5BB6\u6B7B\u4EA1\u65F6\u89E6\u53D1"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(67294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
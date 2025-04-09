"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13863"],{9368:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0433\u043E\u0434 NPC \u0432\u0438\u0434\u0438 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043F\u043E\u0440\u0443\u043A\u0443 (ClientMessage).","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/sr/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0433\u043E\u0434 NPC \u0432\u0438\u0434\u0438 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043F\u043E\u0440\u0443\u043A\u0443 (ClientMessage).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/sr/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/sr/docs/scripting/callbacks/OnDialogResponse"}}'),l=s("85893"),i=s("50065");let r={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0433\u043E\u0434 NPC \u0432\u0438\u0434\u0438 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043F\u043E\u0440\u0443\u043A\u0443 (ClientMessage).",tags:[]},a=void 0,c={},d=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0423\u0437\u0432\u0440\u0430\u045B\u0430\u045A\u0430",id:"\u0443\u0437\u0432\u0440\u0430\u045B\u0430\u045A\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,l.jsxs)(n.p,{children:["\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u0433\u043E\u0434 NPC \u0432\u0438\u0434\u0438 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043F\u043E\u0440\u0443\u043A\u0443 (ClientMessage). \u041E\u0432\u043E \u045B\u0435 \u0443\u0432\u0435\u043A \u0431\u0438\u0442\u0438 \u043A\u0430\u0434\u0430 \u0458\u0435 ",(0,l.jsx)(n.a,{href:"../functions/SendClientMessageToAll",children:"SendClientMessageToAll"})," \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u043F\u043E\u0437\u0432\u0430\u043D\u0430 \u0438 \u0441\u0432\u0430\u043A\u0438 \u043F\u0443\u0442 \u043A\u0430\u0434\u0430 \u0458\u0435 ",(0,l.jsx)(n.a,{href:"../functions/SendClientMessage",children:"SendClientMessage"})," \u043F\u043E\u0437\u0432\u0430\u043D\u0430 NPC-\u0443. \u041E\u0432\u0430\u0458 callback \u043D\u0435\u045B\u0435 \u0431\u0438\u0442\u0438 \u043F\u043E\u0437\u0438\u0432\u0430\u043D \u043A\u0430\u0434\u0430 \u043D\u0435\u043A\u043E \u043A\u0430\u0436\u0435 \u043D\u0435\u0448\u0442\u043E. \u0417\u0430 \u0432\u0435\u0440\u0437\u0438\u0458\u0443 \u043E\u0432\u043E\u0433\u0430 \u043F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435: ",(0,l.jsxs)(n.a,{href:"OnPlayerText",children:["NPC",":OnPlayerText"]}),"."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,l.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"color"}),(0,l.jsx)(n.td,{children:"\u0411\u043E\u0458\u0430 ClientMessage."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"text[]"}),(0,l.jsx)(n.td,{children:"\u041F\u043E\u0440\u0443\u043A\u0430."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0443\u0437\u0432\u0440\u0430\u045B\u0430\u045A\u0430",children:"\u0423\u0437\u0432\u0440\u0430\u045B\u0430\u045A\u0430"}),"\n",(0,l.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u043D\u0435 \u0432\u0440\u0430\u045B\u0430 \u0431\u0438\u043B\u043E \u0448\u0442\u0430."}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Bank Balance: $0")\xa0!= -1)\n    {\n        SendClientMessage(playerid, -1, "I am poor\xa0:(");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0430\u043D, \u0458\u0435\u0440 \u0458\u0435 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D \u0441\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C \u0434\u0430\u0442\u043E\u043C \u0433\u043E\u0440\u0435."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerText",children:"OnPlayerText"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u0441\u0432\u0430\u043A\u0438 \u043F\u0443\u0442 \u043A\u0430\u0434\u0430 \u0431\u0438\u043B\u043E \u043A\u043E \u043D\u0435\u0448\u0442\u043E \u043A\u0430\u0436\u0435 \u0443 \u0447\u0435\u0442\u0443. \u0422\u043E \u0443\u043A\u0459\u0443\u0447\u0443\u0458\u0435 \u0431\u0438\u043B\u043E \u043A\u043E\u0433 \u0438\u0433\u0440\u0430\u0447\u0430, \u0431\u0438\u043B\u043E \u043A\u043E\u0458\u0438 \u0434\u0440\u0443\u0433\u0438 NPC, \u0438\u043B\u0438 \u0441\u0430\u043C\u043E\u0433 \u0442\u043E\u0433 NPC-\u0430."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(67294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
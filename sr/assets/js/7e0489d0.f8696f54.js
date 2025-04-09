"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85216"],{8821:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>c,metadata:()=>i,assets:()=>s,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeaveCheckpoint","title":"OnPlayerLeaveCheckpoint","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043E SetPlayerCheckpoint.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerLeaveCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeaveCheckpoint","permalink":"/sr/docs/scripting/callbacks/OnPlayerLeaveCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerLeaveCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/sr/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"OnPlayerLeaveCheckpoint","sidebar_label":"OnPlayerLeaveCheckpoint","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043E SetPlayerCheckpoint.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerKeyStateChange","permalink":"/sr/docs/scripting/callbacks/OnPlayerKeyStateChange"},"next":{"title":"OnPlayerLeaveGangZone","permalink":"/sr/docs/scripting/callbacks/OnPlayerLeaveGangZone"}}'),r=t("85893"),l=t("50065");let c={title:"OnPlayerLeaveCheckpoint",sidebar_label:"OnPlayerLeaveCheckpoint",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043E SetPlayerCheckpoint.",tags:["player","checkpoint"]},a=void 0,s={},o=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435",id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{TipNPCCallbacksSR:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksSR",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,r.jsxs)(n.p,{children:["\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043E ",(0,r.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),". \u0423 \u0442\u0440\u0435\u043D\u0443\u0442\u043A\u0443 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u0441\u0430\u043C\u043E \u0458\u0435\u0434\u0430\u043D \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,r.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043D\u0430\u043F\u0443\u0441\u0442\u0438\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u043E \u0443 \u0444\u0438\u043B\u0442\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430."}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerLeaveCheckpoint(playerid)\n{\n    printf("Player %i left a checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",children:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": \u041E\u0432\u0430\u0458 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0438 \u043F\u043E\u0437\u0438\u0432 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": \u041E\u0432\u0430\u0458 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0438 \u043F\u043E\u0437\u0438\u0432 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0443 \u0442\u0440\u043A\u0430\u0447\u043A\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": \u041E\u0432\u0430\u0458 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0438 \u043F\u043E\u0437\u0438\u0432 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u0442\u0440\u043A\u0430\u0447\u043A\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": \u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u0437\u0430 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": \u041E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u043E\u0458 \u0442\u0430\u0447\u043A\u0438."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": \u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0442\u0440\u043A\u0430\u0447\u043A\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u0437\u0430 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": \u041E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u0442\u0440\u043A\u0430\u0447\u043A\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u0443 \u0442\u0430\u0447\u043A\u0443 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443 \u0442\u0440\u043A\u0430\u0447\u043A\u043E\u0458 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043D\u043E\u0458 \u0442\u0430\u0447\u043A\u0438."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var i=t(67294);let r={},l=i.createContext(r);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
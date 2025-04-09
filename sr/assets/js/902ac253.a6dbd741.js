"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["81682"],{64124:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>p,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPickupStreamIn","title":"OnPickupStreamIn","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 pickup \u0443\u0452\u0435 \u0443 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433 \u0438\u0433\u0440\u0430\u0447\u0430.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPickupStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPickupStreamIn","permalink":"/sr/docs/scripting/callbacks/OnPickupStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPickupStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPickupStreamIn","sidebar_label":"OnPickupStreamIn","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 pickup \u0443\u0452\u0435 \u0443 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433 \u0438\u0433\u0440\u0430\u0447\u0430.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnObjectMoved","permalink":"/sr/docs/scripting/callbacks/OnObjectMoved"},"next":{"title":"OnPickupStreamOut","permalink":"/sr/docs/scripting/callbacks/OnPickupStreamOut"}}'),r=i("85893"),c=i("50065");let l={title:"OnPickupStreamIn",sidebar_label:"OnPickupStreamIn",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 pickup \u0443\u0452\u0435 \u0443 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433 \u0438\u0433\u0440\u0430\u0447\u0430.",tags:["player"]},s=void 0,a={},p=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarnSR:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnSR",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{name:"\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430",version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,r.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 pickup \u0443\u0452\u0435 \u0443 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433 \u0438\u0433\u0440\u0430\u0447\u0430."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,r.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pickupid"}),(0,r.jsxs)(n.td,{children:["ID pickup-\u0430, \u043A\u043E\u0458\u0438 \u0432\u0440\u0430\u045B\u0430 ",(0,r.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 pickup \u0443\u0448\u0430\u043E \u0443 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u0430 \u0443 \u0433\u0430\u043C\u0435\u043C\u043E\u0434\u0435-\u0443."}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new g_PickupHealth;\n\npublic OnGameModeInit()\n{\n    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPickupStreamIn(pickupid, playerid)\n{\n    if (pickupid == g_PickupHealth)\n    {\n        printf("g_PickupHealth is streamed in for player id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u043E\u043C \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": \u041F\u043E\u0437\u0432\u0430\u043D\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043F\u043E\u043A\u0443\u043F\u0438 pickup."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPickupStreamOut",children:"OnPickupStreamOut"}),": \u041F\u043E\u0437\u0432\u0430\u043D\u0430 \u043A\u0430\u0434\u0430 pickup \u043D\u0430\u043F\u0443\u0441\u0442\u0438 \u0432\u0438\u0437\u0443\u0435\u043B\u043D\u0438 \u043E\u043F\u0441\u0435\u0433 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u043E\u043C \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": \u041A\u0440\u0435\u0438\u0440\u0430\u0458 pickup."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": \u0423\u043D\u0438\u0448\u0442\u0438 pickup."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var t=i(67294);let r={},c=t.createContext(r);function l(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
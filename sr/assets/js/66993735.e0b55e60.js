"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93078"],{67989:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/callbacks/OnVehiclePaintjob","title":"OnVehiclePaintjob","description":"\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430 \u0431\u043E\u0458\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443 \u0443 \u0440\u0430\u0434\u045A\u0438 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehiclePaintjob.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehiclePaintjob","permalink":"/sr/docs/scripting/callbacks/OnVehiclePaintjob","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehiclePaintjob.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehiclePaintjob","sidebar_label":"OnVehiclePaintjob","description":"\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430 \u0431\u043E\u0458\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443 \u0443 \u0440\u0430\u0434\u045A\u0438 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleMod","permalink":"/sr/docs/scripting/callbacks/OnVehicleMod"},"next":{"title":"OnVehicleRespray","permalink":"/sr/docs/scripting/callbacks/OnVehicleRespray"}}'),t=i("85893"),c=i("50065");let r={title:"OnVehiclePaintjob",sidebar_label:"OnVehiclePaintjob",description:"\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430 \u0431\u043E\u0458\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443 \u0443 \u0440\u0430\u0434\u045A\u0438 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443.",tags:["vehicle"]},s=void 0,a={},d=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435",id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,t.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430 \u0431\u043E\u0458\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443 \u0443 \u0440\u0430\u0434\u045A\u0438 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u0430\u0436\u045A\u0443, \u043E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u0443\u043F\u0438 \u0431\u043E\u0458\u0443."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,t.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u043E \u0431\u043E\u0458\u0443 \u043D\u0430 \u0441\u0432\u043E\u043C \u0432\u043E\u0437\u0438\u043B\u0443."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID \u0432\u043E\u0437\u0438\u043B\u0430 \u043D\u0430 \u043A\u043E\u0458\u0435\u043C \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0430 \u0444\u0430\u0440\u0431\u0430."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paintjobid"}),(0,t.jsx)(n.td,{children:"ID \u043D\u043E\u0432\u043E\u0435 \u0444\u0430\u0440\u0431\u0435."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,t.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0443\u0432\u0435\u043A \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u0430 \u0443 \u0433\u0430\u043C\u0435\u043C\u043E\u0434-\u0443, \u043F\u0430 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 0 \u0443 \u045A\u043E\u0458 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u043E\u0441\u0442\u0430\u043B\u0435 \u0444\u0438\u043B\u0442\u0435\u0440 \u0441\u043A\u0440\u0438\u043F\u0442\u0435 \u0434\u0430 \u0458\u0435 \u0432\u0438\u0434\u0435."}),"\n",(0,t.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnVehiclePaintjob(playerid, vehicleid, paintjobid)\n{\n    new string[128];\n    format(string, sizeof(string), "You have changed your vehicle\'s paintjob to %d!", paintjobid);\n    SendClientMessage(playerid, 0x33AA33AA, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",children:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u0435 ",(0,t.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),". \u041C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 OnVehicleChangePaintjob \u0438\u0437 vSync \u043A\u0430\u043A\u043E \u0431\u0438\u0441\u0442\u0435 \u0437\u043D\u0430\u043B\u0438 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u0443\u043F\u0438 \u0431\u043E\u0458\u0443."]})}),"\n",(0,t.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0458\u0435 \u0432\u043E\u0437\u0438\u043B\u043E \u043F\u0440\u0435\u0431\u043E\u0458\u0435\u043D\u043E."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0458\u0435 \u0432\u043E\u0437\u0438\u043B\u043E \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u043E\u0432\u0430\u043D\u043E."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": \u041F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 \u0444\u0430\u0440\u0431\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0431\u043E\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var l=i(67294);let t={},c=l.createContext(t);function r(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
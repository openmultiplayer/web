"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84648"],{5609:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>t,metadata:()=>l,assets:()=>d,toc:()=>a,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443, \u0447\u0430\u043A \u0438 \u0430\u043A\u043E \u0431\u043E\u0458\u0435 \u043D\u0438\u0441\u0443 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0435.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/sr/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443, \u0447\u0430\u043A \u0438 \u0430\u043A\u043E \u0431\u043E\u0458\u0435 \u043D\u0438\u0441\u0443 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0435.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/sr/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/sr/docs/scripting/callbacks/OnVehicleSirenStateChange"}}'),r=i("85893"),s=i("50065");let t={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443, \u0447\u0430\u043A \u0438 \u0430\u043A\u043E \u0431\u043E\u0458\u0435 \u043D\u0438\u0441\u0443 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0435.",tags:["vehicle"]},c=void 0,d={},a=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435",id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,r.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443, \u0447\u0430\u043A \u0438 \u0430\u043A\u043E \u0431\u043E\u0458\u0435 \u043D\u0438\u0441\u0443 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0435. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u0430\u0436\u045A\u0443, \u043D\u0430\u0437\u0438\u0432 \u0458\u0435 \u043D\u0435\u043E\u0434\u0440\u0435\u0452\u0435\u043D, Pay 'n' Spray \u0440\u0430\u0434\u045A\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430\u0458\u0443 \u043E\u0432\u0443 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0443."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,r.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0443\u043F\u0440\u0430\u0432\u0459\u0430 \u0432\u043E\u0437\u0438\u043B\u043E\u043C."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vehicleid"}),(0,r.jsx)(n.td,{children:"ID \u0432\u043E\u0437\u0438\u043B\u0430 \u043A\u043E\u0458\u0435 \u0458\u0435 \u043F\u0440\u0435\u0431\u043E\u0458\u0435\u043D\u043E."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color1"}),(0,r.jsx)(n.td,{children:"\u0411\u043E\u0458\u0430 \u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0430 \u043F\u0440\u0438\u043C\u0430\u0440\u043D\u0430 \u0431\u043E\u0458\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color2"}),(0,r.jsx)(n.td,{children:"\u0411\u043E\u0458\u0430 \u0443 \u043A\u043E\u0458\u0443 \u0458\u0435 \u043F\u0440\u043E\u043C\u0435\u045A\u0435\u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0440\u043D\u0430 \u0431\u043E\u0458\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0443\u0432\u0435\u043A \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u0430 \u0443 \u0433\u0430\u043C\u0435 \u043C\u043E\u0434\u0435\u0443, \u043F\u0430 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 0 \u0443 \u045A\u043E\u0458 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u043E\u0441\u0442\u0430\u043B\u0435 \u0444\u0438\u043B\u0442\u0435\u0440 \u0441\u043A\u0440\u0438\u043F\u0442\u0435 \u0434\u0430 \u0458\u0435 \u0432\u0438\u0434\u0435."}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",children:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u0435 ChangeVehicleColor. \u041D\u0430\u0437\u0438\u0432 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u043E\u0431\u043C\u0430\u043D\u0443\u0442\u043E, \u043E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u0437\u0430 pay 'n' spray (\u0441\u0430\u043C\u043E \u0437\u0430 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443)."}),(0,r.jsxs)(n.p,{children:["\u041F\u043E\u0433\u043B\u0435\u0434\u0430\u0458 \u043E\u0432\u043E: ",(0,r.jsx)(n.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"\u041F\u043E\u0437\u043D\u0430\u0442\u0438 bug-\u043E\u0432\u0438:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041F\u0440\u0435\u0433\u043B\u0435\u0434 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0438 \u0443\u043D\u0443\u0442\u0430\u0440 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443 \u043C\u043E\u0436\u0435 \u043F\u043E\u0437\u0432\u0430\u0442\u0438 \u043E\u0432\u0443 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0443."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0431\u043E\u0458\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 \u0432\u043E\u0437\u0438\u043B\u043E \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0443\u0458\u0435."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0432\u043E\u0437\u0438\u043B\u043E \u0443\u0452\u0435 \u0438\u043B\u0438 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u0440\u0430\u0434\u045A\u0435 \u0437\u0430 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0431\u043E\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": \u041F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 \u0444\u0430\u0440\u0431\u0443 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0443."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var l=i(67294);let r={},s=l.createContext(r);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
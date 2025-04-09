"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75174"],{28498:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u0438\u0433\u0440\u0430\u0447\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430/\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0443\u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430 \u043A\u043E\u0458\u0435 \u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u0459\u0430.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/sr/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u0438\u0433\u0440\u0430\u0447\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430/\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0443\u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430 \u043A\u043E\u0458\u0435 \u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u0459\u0430.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/sr/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/sr/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}'),l=t("85893"),c=t("50065");let r={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u0438\u0433\u0440\u0430\u0447\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430/\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0443\u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430 \u043A\u043E\u0458\u0435 \u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u0459\u0430.",tags:["vehicle"]},s=void 0,d={},a=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435",id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,l.jsx)(n.p,{children:"\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u0438\u0433\u0440\u0430\u0447\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430/\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0443\u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0432\u043E\u0437\u0438\u043B\u0430 \u043A\u043E\u0458\u0435 \u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u0459\u0430. \u0422\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0434\u0435\u0441\u0438 \u0432\u0430\u043D \u0432\u043E\u0437\u0438\u043B\u0430 \u0438\u043B\u0438 \u043A\u0430\u0434\u0430 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043F\u0443\u0442\u043D\u0438\u043A \u0443 \u0432\u043E\u0437\u0438\u043B\u0443 \u043A\u043E\u0458\u0435 \u043D\u0435\u043C\u0430 \u0432\u043E\u0437\u0430\u0447\u0430."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,l.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"ID \u0432\u043E\u0437\u0438\u043B\u0430 \u0447\u0438\u0458\u0430 \u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0430 \u0430\u0436\u0443\u0440\u0438\u0440\u0430\u043D\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u043E\u0441\u043B\u0430\u043E \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0435 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"passenger_seat"}),(0,l.jsx)(n.td,{children:"ID \u0441\u0435\u0434\u0438\u0448\u0442\u0430 \u0430\u043A\u043E \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043F\u0443\u0442\u043D\u0438\u043A. 0=\u043D\u0438\u0458\u0435 \u0443 \u0432\u043E\u0437\u0438\u043B\u0443, 1=\u043F\u0440\u0435\u0434\u045A\u0438 \u043F\u0443\u0442\u043D\u0438\u043A, 2=\u043B\u0435\u0432\u043E \u0437\u0430\u0434\u045A\u0435, 3=\u0434\u0435\u0441\u043D\u043E \u0437\u0430\u0434\u045A\u0435, 4+ \u0437\u0430 \u0430\u0443\u0442\u043E\u0431\u0443\u0441\u0435/\u0431\u0443\u0441\u0435\u0432\u0435 \u0438\u0442\u0434. \u0441\u0430 \u043C\u043D\u043E\u0433\u0438\u043C \u0441\u0435\u0434\u0438\u0448\u0442\u0438\u043C\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":new_x"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 X \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":new_y"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 Y \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":new_z"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 Z \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":vel_x"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 X \u0431\u0440\u0437\u0438\u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":vel_y"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 Y \u0431\u0440\u0437\u0438\u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":vel_z"]}),(0,l.jsx)(n.td,{children:"\u041D\u043E\u0432\u0430 Z \u0431\u0440\u0437\u0438\u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0430."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,l.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u0440\u0432\u043E \u043F\u043E\u0437\u0438\u0432\u0430 \u0443 \u0444\u0438\u043B\u0442\u0435\u0440 \u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430, \u043F\u0430 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 0 \u0442\u0430\u043A\u043E\u0452\u0435 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u0434\u0440\u0443\u0433\u0435 \u0441\u043A\u0440\u0438\u043F\u0442\u0435 \u0434\u0430 \u0458\u0435 \u0432\u0438\u0434\u0435."}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // \u041F\u0440\u043E\u0432\u0435\u0440\u0430\u0432\u0430\u043C\u043E \u0434\u0430 \u043B\u0438 \u0441\u0435 \u043C\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u0459\u0438\u043E\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // \u041D\u0435 \u0430\u0436\u0443\u0440\u0438\u0440\u0430\u043C\u043E\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",children:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u0432\u0435\u043E\u043C\u0430 \u0447\u0435\u0441\u0442\u043E \u043F\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u043F\u043E \u043D\u0435\u043E\u0431\u0458\u0435\u043A\u0442\u043E\u0432\u0430\u043D\u043E\u043C \u0432\u043E\u0437\u0438\u043B\u0443. \u0422\u0440\u0435\u0431\u0430 \u0438\u0437\u0431\u0435\u0433\u0430\u0432\u0430\u0442\u0438 \u0438\u043C\u043F\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0458\u0443 \u0438\u043D\u0442\u0435\u043D\u0437\u0438\u0432\u043D\u0438\u0445 \u0438\u0437\u0440\u0430\u0447\u0443\u043D\u0430\u0432\u0430\u045A\u0430 \u0438\u043B\u0438 \u0438\u043D\u0442\u0435\u043D\u0437\u0438\u0432\u043D\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0458\u0430 \u0447\u0438\u0442\u0430\u045A\u0430/\u043F\u0438\u0441\u0430\u045A\u0430 \u0443 \u0444\u0430\u0458\u043B\u043E\u0432\u0435 \u0443 \u043E\u0432\u043E\u0458 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0438."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GetVehiclePos",children:"GetVehiclePos"})," \u045B\u0435 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 \u0441\u0442\u0430\u0440\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0435 \u0432\u043E\u0437\u0438\u043B\u0430 \u043F\u0440\u0435 \u043E\u0432\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435."]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnTrailerUpdate",children:"OnTrailerUpdate"}),": \u041F\u043E\u0437\u0438\u0432\u0430 \u0441\u0435 \u043A\u0430\u0434\u0430 \u0458\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0430 \u043F\u0440\u0438\u043A\u043E\u043B\u0438\u0446\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u0430 \u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u0435 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0430."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(67294);let l={},c=i.createContext(l);function r(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
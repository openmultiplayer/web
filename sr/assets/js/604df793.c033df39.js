"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51957"],{44579:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickGangZone","title":"OnPlayerClickGangZone","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u043F\u0438 \u0443 \u043F\u0430\u0443\u0437\u043D\u043E\u043C \u043C\u0435\u043D\u0438\u0458\u0443 (\u0434\u0435\u0441\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C).","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerClickGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickGangZone","permalink":"/sr/docs/scripting/callbacks/OnPlayerClickGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/sr/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerClickGangZone","sidebar_label":"OnPlayerClickGangZone","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u043F\u0438 \u0443 \u043F\u0430\u0443\u0437\u043D\u043E\u043C \u043C\u0435\u043D\u0438\u0458\u0443 (\u0434\u0435\u0441\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C).","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamOut","permalink":"/sr/docs/scripting/callbacks/OnPickupStreamOut"},"next":{"title":"OnPlayerClickMap","permalink":"/sr/docs/scripting/callbacks/OnPlayerClickMap"}}'),i=r("85893"),l=r("50065");let a={title:"OnPlayerClickGangZone",sidebar_label:"OnPlayerClickGangZone",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u043F\u0438 \u0443 \u043F\u0430\u0443\u0437\u043D\u043E\u043C \u043C\u0435\u043D\u0438\u0458\u0443 (\u0434\u0435\u0441\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C).",tags:["player","gangzone"]},s=void 0,c={},o=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarnSR:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnSR",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,i.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443 \u043D\u0430 \u043C\u0430\u043F\u0438 \u0443 \u043F\u0430\u0443\u0437\u043D\u043E\u043C \u043C\u0435\u043D\u0438\u0458\u0443 (\u0434\u0435\u0441\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,i.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043A\u043B\u0438\u043A\u043D\u0443\u043E \u043D\u0430 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zoneid"}),(0,i.jsx)(n.td,{children:"ID \u0433\u0430\u043D\u0433 \u0437\u043E\u043D\u0435 \u043D\u0430 \u043A\u043E\u0458\u0443 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043A\u043B\u0438\u043A\u043D\u0443\u043E."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u043D\u0435 \u0432\u0440\u0430\u045B\u0430 \u043D\u0438\u0448\u0442\u0430."}),"\n",(0,i.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u0430 \u0443 \u0433\u0430\u043C\u0435\u043C\u043E\u0434-\u0443."}),"\n",(0,i.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerClickGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are click gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u043E\u043C \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": \u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443 (\u043E\u0431\u043E\u0458\u0435\u043D\u0443 \u043E\u0431\u043B\u0430\u0441\u0442 \u043D\u0430 \u0440\u0430\u0434\u0430\u0440\u0443)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": \u0423\u043D\u0438\u0448\u0442\u0438\u0442\u0435 \u0433\u0430\u043D\u0433\u0437\u043E\u043D\u0443."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var t=r(67294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
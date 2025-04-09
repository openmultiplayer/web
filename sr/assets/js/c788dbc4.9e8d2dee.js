"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62665"],{64370:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamageActor","title":"OnPlayerGiveDamageActor","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043D\u0435\u0441\u0435 \u0448\u0442\u0435\u0442\u0443 \u0430\u043A\u043E\u0442\u0440\u0443.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerGiveDamageActor.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamageActor","permalink":"/sr/docs/scripting/callbacks/OnPlayerGiveDamageActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamageActor.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"actor","permalink":"/sr/docs/tags/actor"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamageActor","sidebar_label":"OnPlayerGiveDamageActor","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043D\u0435\u0441\u0435 \u0448\u0442\u0435\u0442\u0443 \u0430\u043A\u043E\u0442\u0440\u0443.","tags":["player","actor"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamage","permalink":"/sr/docs/scripting/callbacks/OnPlayerGiveDamage"},"next":{"title":"OnPlayerInteriorChange","permalink":"/sr/docs/scripting/callbacks/OnPlayerInteriorChange"}}'),a=r("85893"),i=r("50065");let l={title:"OnPlayerGiveDamageActor",sidebar_label:"OnPlayerGiveDamageActor",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043D\u0435\u0441\u0435 \u0448\u0442\u0435\u0442\u0443 \u0430\u043A\u043E\u0442\u0440\u0443.",tags:["player","actor"]},s=void 0,c={},d=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435",id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0438-\u0440\u0435\u0441\u0443\u0440\u0441\u0438",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnSR:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnSR",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{name:"\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430",version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,a.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043D\u0430\u043D\u0435\u0441\u0435 \u0448\u0442\u0435\u0442\u0443 \u0430\u043A\u043E\u0442\u0440\u0443."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,a.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043D\u0430\u043D\u0435\u043E \u0448\u0442\u0435\u0442\u0443."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"damaged_actorid"}),(0,a.jsx)(n.td,{children:"ID \u0430\u043A\u0442\u043E\u0440\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u0438\u043C\u0438\u043E \u0448\u0442\u0435\u0442\u0443."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["Float",":amount"]}),(0,a.jsx)(n.td,{children:"\u041A\u043E\u043B\u0438\u0447\u0438\u043D\u0430 \u0437\u0434\u0440\u0430\u0432\u0459\u0430/\u0430\u0440\u043C\u043E\u0440\u0430 \u043A\u043E\u0458\u0443 \u0458\u0435 damaged_actorid \u0438\u0437\u0433\u0443\u0431\u0438\u043E."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,a.jsx)(n.td,{children:"\u0420\u0430\u0437\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u043E\u0443\u0437\u0440\u043E\u043A\u043E\u0432\u0430\u043E \u0448\u0442\u0435\u0442\u0443."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bodypart"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"../resources/bodyparts",children:"\u0414\u0435\u043E \u0442\u0435\u043B\u0430"})," \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u043E\u0433\u043E\u0452\u0435\u043D."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1"})," - \u0424\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u043D\u0435\u045B\u0435 \u0431\u0438\u0442\u0438 \u043F\u043E\u0437\u0432\u0430\u043D\u0430 \u0443 \u0434\u0440\u0443\u0433\u0438\u043C \u0444\u0438\u043B\u0442\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"0"})," - \u041E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u0434\u0430 \u043E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0431\u0443\u0434\u0435 \u043F\u043E\u0437\u0432\u0430\u043D\u0430 \u0443 \u0434\u0440\u0443\u0433\u0438\u043C \u0444\u0438\u043B\u0442\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430."]}),"\n",(0,a.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u0440\u0432\u043E \u043F\u043E\u0437\u0438\u0432\u0430 \u0443 \u0444\u0438\u043B\u0442\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430, \u0442\u0430\u043A\u043E \u0434\u0430 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 1 \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u043E\u0441\u0442\u0430\u043B\u0435 \u0444\u0438\u043B\u0442\u0435\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0435 \u043E\u0434 \u045A\u0435\u043D\u043E\u0433 \u0438\u0437\u0432\u0440\u0448\u0430\u0432\u0430\u045A\u0430."}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128];\n    new attackerName[MAX_PLAYER_NAME];\n    new weaponName[24];\n\n    GetPlayerName(playerid, attackerName, sizeof (attackerName));\n    GetWeaponName(weaponid, weaponName, sizeof (weaponName));\n\n    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u0431\u0435\u043B\u0435\u0448\u043A\u0435",children:"\u0411\u0435\u043B\u0435\u0448\u043A\u0435"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["\u041E\u0432\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043D\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u0430\u043A\u043E \u0458\u0435 \u0430\u043A\u0442\u0435\u0440 \u043F\u043E\u0434\u0435\u0448\u0435\u043D \u043A\u0430\u043E \u043D\u0435\u0432\u0438\u0434\u0459\u0438\u0432 (",(0,a.jsx)(n.strong,{children:"\u0428\u0422\u041E \u0408\u0415 \u041F\u041E\u0414\u0420\u0410\u0417\u0423\u041C\u0415\u0412\u0410\u041D\u041E"}),")**. \u041F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 ",(0,a.jsx)(n.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,a.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnActorStreamOut",children:"OnActorStreamOut"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 \u0430\u043A\u0442\u0435\u0440 \u0438\u0437\u0431\u0430\u0446\u0438 \u0438\u0437 \u0441\u0442\u0440\u0438\u043C\u043E\u0432\u0430\u045A\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0430 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnActorStreamOut",children:"OnActorStreamIn"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 \u0430\u043A\u0442\u0435\u0440 \u0443\u0447\u0438\u0442\u0430 \u0443 \u0441\u0442\u0440\u0438\u043C\u043E\u0432\u0430\u045A\u0435 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0430 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,a.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u0458\u0435\u0434\u0430\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u0438\u043C \u043F\u043E\u0437\u0438\u0432\u043E\u043C."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/CreateActor",children:"CreateActor"}),": \u041A\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u0430\u043A\u0442\u043E\u0440\u0430 (\u0441\u0442\u0430\u0442\u0438\u0447\u043A\u0438 NPC)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"}),": \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0430\u043A\u0442\u043E\u0440\u0430 \u043A\u0430\u043E \u043D\u0435\u0432\u0438\u0434\u0459\u0438\u0432\u043E\u0433."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SetActorHealth",children:"SetActorHealth"}),": \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0437\u0434\u0440\u0430\u0432\u0459\u0435 \u0430\u043A\u0442\u043E\u0440\u0430."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/GetActorHealth",children:"GetActorHealth"}),": \u0414\u043E\u0431\u0438\u0458\u0442\u0435 \u0437\u0434\u0440\u0430\u0432\u0459\u0435 \u0430\u043A\u0442\u043E\u0440\u0430."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/IsActorInvulnerable",children:"IsActorInvulnerable"}),": \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0430\u043A\u0442\u043E\u0440 \u043D\u0435\u0432\u0438\u0434\u0459\u0438\u0432."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/IsValidActor",children:"IsValidActor"}),": \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043B\u0438 \u0458\u0435 ID \u0430\u043A\u0442\u043E\u0440\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u043D."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0438-\u0440\u0435\u0441\u0443\u0440\u0441\u0438",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../resources/bodyparts",children:"\u0414\u0435\u043B\u043E\u0432\u0438 \u0442\u0435\u043B\u0430"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
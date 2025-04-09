"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3788"],{30955:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/IsPlayerInAnyVehicle","title":"IsPlayerInAnyVehicle","description":"Verifica se um jogador est\xe1 dentro de qualquer ve\xedculo (como motorista ou passageiro).","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerInAnyVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInAnyVehicle","permalink":"/pt-BR/docs/scripting/functions/IsPlayerInAnyVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerInAnyVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsPlayerInAnyVehicle","sidebar_label":"IsPlayerInAnyVehicle","description":"Verifica se um jogador est\xe1 dentro de qualquer ve\xedculo (como motorista ou passageiro).","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerGangZoneVisible","permalink":"/pt-BR/docs/scripting/functions/IsPlayerGangZoneVisible"},"next":{"title":"IsPlayerInCheckpoint","permalink":"/pt-BR/docs/scripting/functions/IsPlayerInCheckpoint"}}'),s=r("85893"),i=r("50065");let l={title:"IsPlayerInAnyVehicle",sidebar_label:"IsPlayerInAnyVehicle",description:"Verifica se um jogador est\xe1 dentro de qualquer ve\xedculo (como motorista ou passageiro).",tags:["player","vehicle"]},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"Verifica se um jogador est\xe1 dentro de qualquer ve\xedculo (como motorista ou passageiro)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"O ID do jogador a ser verificado."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - O jogador est\xe1 em um ve\xedculo."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - O jogador n\xe3o est\xe1 em um ve\xedculo."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/invehicle", true) == 0)\n    {\n        if (IsPlayerInAnyVehicle(playerid))\n        {\n            SendClientMessage(playerid, 0x00FF00FF, "Voc\xea est\xe1 em um ve\xedculo.");\n        }\n        else\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "Voc\xea n\xe3o est\xe1 em nenhum ve\xedculo.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsPlayerInVehicle",children:"IsPlayerInVehicle"}),": Verifica se um jogador est\xe1 em um determinado ve\xedculo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Verifica em qual assento o jogador est\xe1."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var t=r(67294);let s={},i=t.createContext(s);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["43091"],{67329:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>s,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterVehicle","title":"OnPlayerEnterVehicle","description":"Esta callback \xe9 chamada quando um jogador come\xe7a a entrar em um ve\xedculo, isso significa que o jogador n\xe3o est\xe1 no ve\xedculo ainda quando esta callback \xe9 chamada.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerEnterVehicle","sidebar_label":"OnPlayerEnterVehicle","description":"Esta callback \xe9 chamada quando um jogador come\xe7a a entrar em um ve\xedculo, isso significa que o jogador n\xe3o est\xe1 no ve\xedculo ainda quando esta callback \xe9 chamada.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"},"next":{"title":"OnPlayerExitVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerExitVehicle"}}'),r=n("85893"),l=n("50065");let i={title:"OnPlayerEnterVehicle",sidebar_label:"OnPlayerEnterVehicle",description:"Esta callback \xe9 chamada quando um jogador come\xe7a a entrar em um ve\xedculo, isso significa que o jogador n\xe3o est\xe1 no ve\xedculo ainda quando esta callback \xe9 chamada.",tags:["player","vehicle"]},c=void 0,o={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(a.p,{children:"Esta callback \xe9 chamada quando um jogador come\xe7a a entrar em um ve\xedculo, isso significa que o jogador n\xe3o est\xe1 no ve\xedculo ainda quando esta callback \xe9 chamada."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Nome"}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"playerid"}),(0,r.jsx)(a.td,{children:"O ID do jogador que est\xe1 tentando entra no ve\xedculo."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"vehicleid"}),(0,r.jsx)(a.td,{children:"O ID do ve\xedculo que o jogador est\xe1 tentando entrar."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"ispassenger"}),(0,r.jsx)(a.td,{children:"0 se entrar como piloto. 1 se entrar como passageiro."})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(a.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,r.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    new string[128];\n    format(string, sizeof(string), "Voc\xea est\xe1 entrando no ve\xedculo de id %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:"Esta callback \xe9 chamada quando um jogador come\xe7a a entrar em um ve\xedculo, n\xe3o quando ele entram nele. Veja OnPlayerStateChange. Esta callback ainda \xe9 chamada se o jogador for impedido de entrar no ve\xedculo."})}),"\n",(0,r.jsx)(a.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"/pt-BR/docs/scripting/functions/PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Coloca um jogador em um ve\xedculo."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"/pt-BR/docs/scripting/functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Verifica qual assento o jogador est\xe1."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return c},a:function(){return i}});var t=n(67294);let r={},l=t.createContext(r);function i(e){let a=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53614"],{59962:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/SpawnPlayer","title":"SpawnPlayer","description":"(Re)Spawna um jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/SpawnPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SpawnPlayer","permalink":"/pt-BR/docs/scripting/functions/SpawnPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SpawnPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"SpawnPlayer","sidebar_label":"SpawnPlayer","description":"(Re)Spawna um jogador.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowVehicle","permalink":"/pt-BR/docs/scripting/functions/ShowVehicle"},"next":{"title":"StartRecordingPlayback","permalink":"/pt-BR/docs/scripting/functions/StartRecordingPlayback"}}'),r=a("85893"),i=a("50065");let s={title:"SpawnPlayer",sidebar_label:"SpawnPlayer",description:"(Re)Spawna um jogador.",tags:["player"]},o=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"(Re)Spawna um jogador."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nome"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"O ID do jogador a spawnar."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(n.p,{children:"1: A fun\xe7\xe3o foi executada com sucesso."}),"\n",(0,r.jsx)(n.p,{children:"0: A fun\xe7\xe3o falhou ao ser executada. Isso significa que o jogador n\xe3o est\xe1 conectado."}),"\n",(0,r.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'if (strcmp(cmdtext, "/spawn", true) == 0)\n{\n    SpawnPlayer(playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Mata o jogador se ele tiver no ve\xedculo e depois ele spawna com uma garrafa na m\xe3o."})}),"\n",(0,r.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pt-BR/docs/scripting/functions/SetSpawnInfo",children:"SetSpawnInfo"}),": Define a configura\xe7\xe3o de spawn de um jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pt-BR/docs/scripting/functions/AddPlayerClass",children:"AddPlayerClass"}),": Adiciona uma classe."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pt-BR/docs/scripting/callbacks/OnPlayerSpawn",children:"OnPlayerSpawn"}),": \xc9 chamado quando um jogador spawna."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var t=a(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
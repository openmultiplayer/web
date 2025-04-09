"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70826"],{12216:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"scripting/functions/SetSpawnInfo","title":"SetSpawnInfo","description":"Esta fun\xe7\xe3o pode ser usada para mudar as informa\xe7\xf5es de spawn de um jogador espec\xedfico.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/SetSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSpawnInfo","permalink":"/pt-BR/docs/scripting/functions/SetSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetSpawnInfo.md","tags":[],"version":"current","frontMatter":{"title":"SetSpawnInfo","sidebar_label":"SetSpawnInfo","description":"Esta fun\xe7\xe3o pode ser usada para mudar as informa\xe7\xf5es de spawn de um jogador espec\xedfico.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetServerRuleFlags","permalink":"/pt-BR/docs/scripting/functions/SetServerRuleFlags"},"next":{"title":"SetTeamCount","permalink":"/pt-BR/docs/scripting/functions/SetTeamCount"}}'),r=a("85893"),o=a("50065");let d={title:"SetSpawnInfo",sidebar_label:"SetSpawnInfo",description:"Esta fun\xe7\xe3o pode ser usada para mudar as informa\xe7\xf5es de spawn de um jogador espec\xedfico.",tags:[]},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Esta fun\xe7\xe3o pode ser usada para mudar as informa\xe7\xf5es de spawn de um jogador espec\xedfico. Permite definir automaticamente no spawn, as armas, time, skin, e posi\xe7\xe3o de um jogador, \xe9 normalmente usado em minijogos ou sistemas autom\xe1ticos de spawn. Esta fun\xe7\xe3o \xe9 mais segura contra crashes do que usar SetPlayerSkin em OnPlayerSpawn e/ou OnPlayerRequestClass, embora isso tenha sido corrigido na vers\xe3o 0.2."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nome"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"O ID do jogador de quem voc\xea quer definir as informa\xe7\xf5es de spawn."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"team"}),(0,r.jsx)(n.td,{children:"O ID do time do jogador escolhido."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"skin"}),(0,r.jsx)(n.td,{children:"A skin com o qual o jogador ir\xe1 spawnar."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":X"]}),(0,r.jsx)(n.td,{children:"A coordenada-X da posi\xe7\xe3o de spawn do jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":Y"]}),(0,r.jsx)(n.td,{children:"A coordenada-Y da posi\xe7\xe3o de spawn do jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":Z"]}),(0,r.jsx)(n.td,{children:"A coordenada-Z da posi\xe7\xe3o de spawn do jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":rotation"]}),(0,r.jsx)(n.td,{children:"A dire\xe7\xe3o na qual o jogador precisa estar olhando depois do spawn."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon1"}),(0,r.jsx)(n.td,{children:"A primeira arma de spawn para o jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon1_ammo"}),(0,r.jsx)(n.td,{children:"A quantidade de muni\xe7\xe3o para a primeira arma de spawn."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon2"}),(0,r.jsx)(n.td,{children:"A segunda arma de spawn para o jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon2_ammo"}),(0,r.jsx)(n.td,{children:"A quantidade de muni\xe7\xe3o para a segunda arma de spawn."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon3"}),(0,r.jsx)(n.td,{children:"A terceira arma de spawn para o jogador."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon3_ammo"}),(0,r.jsx)(n.td,{children:"A quantidade de muni\xe7\xe3o para a terceira arma de spawn."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(n.p,{children:"Esta fun\xe7\xe3o n\xe3o retorna nenhum valor espec\xedfico."}),"\n",(0,r.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerRequestClass(playerid, classid)\n{\n    // Este exemplo simples demonstra como spawnar cada jogador automaticamente com\n    // a skin do CJ, que \xe9 o n\xfamero 0. O jogador ir\xe1 spawnar em Las Venturas, com\n    // 36 muni\xe7\xf5es de Sawnoff-Shotgun e 150 muni\xe7\xf5es de Tec9.\n    SetSpawnInfo( playerid, 0, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0 );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerSkin.md",children:"SetPlayerSkin"}),": Define a skin de um jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerTeam.md",children:"SetPlayerTeam"}),": Define o time de um jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pt-BR/docs/scripting/functions/SpawnPlayer",children:"SpawnPlayer"}),": For\xe7a o spawn a um jogador."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return d}});var s=a(67294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
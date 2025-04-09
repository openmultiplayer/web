"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76133"],{84878:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerInterior","title":"GetPlayerInterior","description":"Obt\xe9m o interior atual de um jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerInterior","permalink":"/pt-BR/docs/scripting/functions/GetPlayerInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerInterior.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerInterior","sidebar_label":"GetPlayerInterior","description":"Obt\xe9m o interior atual de um jogador.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerHydraReactorAngle","permalink":"/pt-BR/docs/scripting/functions/GetPlayerHydraReactorAngle"},"next":{"title":"GetPlayerIp","permalink":"/pt-BR/docs/scripting/functions/GetPlayerIp"}}'),i=r("85893"),o=r("50065");let a={title:"GetPlayerInterior",sidebar_label:"GetPlayerInterior",description:"Obt\xe9m o interior atual de um jogador.",tags:["player"]},s=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Examples",id:"examples",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsx)(t.p,{children:"Obt\xe9m o interior atual de um jogador. Uma lista com os interiores atualmente conhecidos, com as suas posi\xe7\xf5es, podem ser encontrados nesta p\xe1gina."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Nome"}),(0,i.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"O ID do jogador do qual deseja obter o interior."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"retorno",children:"Retorno"}),"\n",(0,i.jsx)(t.p,{children:"O ID do interior onde o jogador est\xe1 atualmente."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (strcmp(cmdtext,"/int",true) == 0)\n    {\n        new string[128];\n        format(string, sizeof(string), "Voc\xea est\xe1 no interior: %i",GetPlayerInterior(playerid));\n        SendClientMessage(playerid, 0xFF8000FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Sempre retorna 0 para NPCs."})}),"\n",(0,i.jsx)(t.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Define o interior de um jogador."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": Verifica qual mundo virtual o jogador est\xe1."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},o=n.createContext(i);function a(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
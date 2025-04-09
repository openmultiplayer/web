"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59077"],{50943:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/GetPlayerKeys","title":"GetPlayerKeys","description":"Verifica quais teclas um jogador est\xe1 pressionando.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerKeys.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerKeys","permalink":"/pt-BR/docs/scripting/functions/GetPlayerKeys","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerKeys.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerKeys","sidebar_label":"GetPlayerKeys","description":"Verifica quais teclas um jogador est\xe1 pressionando.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerIp","permalink":"/pt-BR/docs/scripting/functions/GetPlayerIp"},"next":{"title":"GetPlayerLandingGearState","permalink":"/pt-BR/docs/scripting/functions/GetPlayerLandingGearState"}}'),a=n("85893"),r=n("50065");let i={title:"GetPlayerKeys",sidebar_label:"GetPlayerKeys",description:"Verifica quais teclas um jogador est\xe1 pressionando.",tags:["player"]},o=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){let t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(t.p,{children:"Verifica quais teclas um jogador est\xe1 pressionando."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Nome"}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"O ID do jogador do qual deseja obter as teclas."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"keys"}),(0,a.jsx)(t.td,{children:"Um conjunto de bits contendo o estado das teclas do jogador. Este valor \xe9 chamado de m\xe1scara de bits (bit mask). Clique aqui para ver a lista de teclas."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"updown"}),(0,a.jsx)(t.td,{children:"Up/down state."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"leftright"}),(0,a.jsx)(t.td,{children:"Left/right state."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"retorno",children:"Retorno"}),"\n",(0,a.jsx)(t.p,{children:"AS teclas s\xe3o armazenadas nas vari\xe1veis especificadas."}),"\n",(0,a.jsx)(t.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new\n        KEY:keys, updown, leftright;\n\n    GetPlayerKeys(playerid, keys, updown, leftright);\n\n    if (updown == KEY_UP)\n    {\n        SendClientMessage(playerid, -1, "UP");\n    }\n    else if (updown == KEY_DOWN)\n    {\n        SendClientMessage(playerid, -1, "DOWN");\n    }\n\n    if (leftright == KEY_LEFT)\n    {\n        SendClientMessage(playerid, -1, "LEFT");\n    }\n    else if (leftright == KEY_RIGHT)\n    {\n        SendClientMessage(playerid, -1, "RIGHT");\n    }\n\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notas",children:"Notas"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:'Apenas a FUN\xc7\xc3O das teclas pode ser detectada; n\xe3o as teclas reais. Por exemplo, n\xe3o \xe9 possivel detectar se um jogador pressiona ESPA\xc7O, mas voc\xea pode detectar se ele pressiona SPRINT (que pode ser mapeado(atribu\xeddo/vinculado) a QUALQUER tecla (mas \xe9 espa\xe7o por padr\xe3o)). A partir da atualiza\xe7\xe3o 0.3.7, as teclas "A" e "D" n\xe3o s\xe3o reconhecidas quando est\xe1 em um ve\xedculo. No entanto, as teclas "W" e "S" podem ser detectadas com o par\xe2metro "keys".'})}),"\n",(0,a.jsx)(t.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(67294);let a={},r=s.createContext(a);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
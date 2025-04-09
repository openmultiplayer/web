"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19027"],{34382:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnPickupStreamOut","title":"OnPickupStreamOut","description":"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPickupStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPickupStreamOut","permalink":"/pt-BR/docs/scripting/callbacks/OnPickupStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPickupStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPickupStreamOut","sidebar_label":"OnPickupStreamOut","description":"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamIn","permalink":"/pt-BR/docs/scripting/callbacks/OnPickupStreamIn"},"next":{"title":"OnPlayerClickGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerClickGangZone"}}'),c=n("85893"),r=n("50065");let t={title:"OnPickupStreamOut",sidebar_label:"OnPickupStreamOut",description:"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.",tags:["player"]},s=void 0,l={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarnPT:n}=a;return n||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnPT",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsx)(a.p,{children:"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador."}),"\n",(0,c.jsxs)(a.table,{children:[(0,c.jsx)(a.thead,{children:(0,c.jsxs)(a.tr,{children:[(0,c.jsx)(a.th,{children:"Nome"}),(0,c.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,c.jsxs)(a.tbody,{children:[(0,c.jsxs)(a.tr,{children:[(0,c.jsx)(a.td,{children:"pickupid"}),(0,c.jsxs)(a.td,{children:["O ID do pickup, retornado por ",(0,c.jsx)(a.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),"."]})]}),(0,c.jsxs)(a.tr,{children:[(0,c.jsx)(a.td,{children:"playerid"}),(0,c.jsx)(a.td,{children:"O ID do jogador cujo pickup saiu do campo visual."})]})]})]}),"\n",(0,c.jsx)(a.h2,{id:"retornos",children:"Retornos"}),"\n",(0,c.jsx)(a.p,{children:"Este callback \xe9 sempre chamado primeiro no modo de jogo."}),"\n",(0,c.jsx)(a.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-c",children:'new g_PickupHealth;\n\npublic OnGameModeInit()\n{\n    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPickupStreamOut(pickupid, playerid)\n{\n    if (pickupid == g_PickupHealth)\n    {\n        printf("g_PickupHealth saiu do campo visual do jogador id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(a.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,c.jsx)(a.p,{children:"Os seguintes callbacks podem ser \xfateis, pois est\xe3o relacionados a este callback de alguma forma."}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Chamado quando um jogador pega um pickup."]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"OnPickupStreamIn",children:"OnPickupStreamIn"}),": Chamado quando um pickup entra no campo visual de um jogador."]}),"\n"]}),"\n",(0,c.jsx)(a.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,c.jsx)(a.p,{children:"As seguintes fun\xe7\xf5es podem ser \xfateis, pois est\xe3o relacionadas a este callback de alguma forma."}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": Criar um pickup."]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": Destruir um pickup."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return t}});var i=n(67294);let c={},r=i.createContext(c);function t(e){let a=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);
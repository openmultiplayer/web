"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60355"],{36792:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerInteriorChange","title":"OnPlayerInteriorChange","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerInteriorChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerInteriorChange","permalink":"/es/docs/scripting/callbacks/OnPlayerInteriorChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerInteriorChange.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerInteriorChange","descripci\xf3n":"Se llama cuando un jugador cambia de interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamageActor","permalink":"/es/docs/scripting/callbacks/OnPlayerGiveDamageActor"},"next":{"title":"OnPlayerKeyStateChange","permalink":"/es/docs/scripting/callbacks/OnPlayerKeyStateChange"}}'),a=r("85893"),t=r("50065");let l={"t\xedtulo":"OnPlayerInteriorChange","descripci\xf3n":"Se llama cuando un jugador cambia de interior.",tags:["player"]},s=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Se llama cuando un jugador cambia de interior. Puede ser desencadenada por SetPlayerInterior o cuando un jugador entra o sale de un edificio."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nombre"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"El ID del jugador que cambi\xf3 de interior."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"newinteriorid"}),(0,a.jsx)(n.td,{children:"El interior en el que el jugador est\xe1 ahora."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"oldinteriorid"}),(0,a.jsx)(n.td,{children:"El interior en el que el jugador estaba antes."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,a.jsx)(n.p,{children:"Siempre se llama primero en el gamemode."}),"\n",(0,a.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)\n{\n    new string[42];\n    format(string, sizeof(string), "Cambiaste del interior %d al interior %d!", oldinteriorid, newinteriorid);\n    SendClientMessage(playerid, COLOR_ORANGE, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SetPlayerInterior",children:"SetPlayerInterior"}),": Establecer el interior a un jugador."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/GetPlayerInterior",children:"GetPlayerInterior"}),": Obtener el interior actual de un jugador."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Cambiar el interior en el que un veh\xedculo es visible."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": Se llama cuando el estado de un jugador cambia."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var i=r(67294);let a={},t=i.createContext(a);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
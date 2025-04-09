"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32075"],{70082:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamage","title":"OnPlayerGiveDamage","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerGiveDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamage","permalink":"/es/docs/scripting/callbacks/OnPlayerGiveDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamage.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerGiveDamage","descripci\xf3n":"Este callback se llama cuando un jugador le hace da\xf1o a otro jugador.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerFinishedDownloading","permalink":"/es/docs/scripting/callbacks/OnPlayerFinishedDownloading"},"next":{"title":"OnPlayerGiveDamageActor","permalink":"/es/docs/scripting/callbacks/OnPlayerGiveDamageActor"}}'),i=n("85893"),t=n("50065");let s={"t\xedtulo":"OnPlayerGiveDamage","descripci\xf3n":"Este callback se llama cuando un jugador le hace da\xf1o a otro jugador.",tags:["player"]},l=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2}];function c(e){let a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(a.p,{children:"Este callback se llama cuando un jugador le hace da\xf1o a otro jugador."}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Nombre"}),(0,i.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"playerid"}),(0,i.jsx)(a.td,{children:"El ID del jugador que hizo da\xf1o."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"damagedid"}),(0,i.jsx)(a.td,{children:"El ID del jugador que recibi\xf3 da\xf1o."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsxs)(a.td,{children:["Float",":amount"]}),(0,i.jsx)(a.td,{children:"La cantidad de chaleco/vida que el jugador da\xf1ado perdi\xf3 (combinados)."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,i.jsx)(a.td,{children:"La raz\xf3n (arma/causa) que caus\xf3 el da\xf1o."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"bodypart"}),(0,i.jsx)(a.td,{children:"La parte del cuerpo que fue golpeada."})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,i.jsx)(a.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,i.jsx)(a.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,i.jsx)(a.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,i.jsx)(a.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-c",children:'public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];\n    new weaponname[24];\n    GetPlayerName(playerid, attacker, sizeof (attacker));\n    GetPlayerName(damagedid, victim, sizeof (victim));\n\n    GetWeaponName(weaponid, weaponname, sizeof (weaponname));\n    format(string, sizeof(string), "%s le hizo %.0f de da\xf1o a %s, arma: %s, parte del cuerpo: %d", attacker, amount, victim, weaponname,bodypart);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"Tener en cuenta que esta funcion puede ser imprecisa en algunos casos. Si lo que busc\xe1s es prevenir a ciertos jugadores de da\xf1arse entre s\xed, us\xe1 SetPlayerTeam. 'weaponid' va a retornar 37 (lanzallamas) de cualquier origen de fuego (ej. molotov, 18), 'weaponid' retornar\xe1 51 ante cualquier arma que cree una explosi\xf3n (ej. lanzamisiles, granada). playerid es el \xfanico que puede llamar este callback. La cantidad de da\xf1o es siempre el da\xf1o m\xe1ximo que el weaponid puede hacer, incluso cuando la vida restante es menor que el da\xf1o m\xe1ximo de esta. Entonces cuando un jugador tiene 100.0 de salud y recibe un tiro con una Desert Eagle que tiene un valor de da\xf1o de 46.2, tomar\xe1 3 disparos para matar a ese jugador. Los 3 disparos mostrar\xe1n una cantidad de da\xf1o de 46.2 sin importar que cuando el \xfaltimo disparo impacta, el jugador tiene s\xf3lo 7.6 de salud restante."})})]})}function u(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return l},a:function(){return s}});var r=n(67294);let i={},t=r.createContext(i);function s(e){let a=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);
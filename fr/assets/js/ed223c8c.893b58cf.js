"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28450"],{55399:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamage","title":"OnPlayerGiveDamage","description":"Cette callback est appel\xe9e quand un joueur inflige des d\xe9g\xe2ts \xe0 un autre joueur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerGiveDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamage","permalink":"/fr/docs/scripting/callbacks/OnPlayerGiveDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamage.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamage","sidebar_label":"OnPlayerGiveDamage","description":"Cette callback est appel\xe9e quand un joueur inflige des d\xe9g\xe2ts \xe0 un autre joueur.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerFinishedDownloading","permalink":"/fr/docs/scripting/callbacks/OnPlayerFinishedDownloading"},"next":{"title":"OnPlayerGiveDamageActor","permalink":"/fr/docs/scripting/callbacks/OnPlayerGiveDamageActor"}}'),t=r("85893"),i=r("50065");let l={title:"OnPlayerGiveDamage",sidebar_label:"OnPlayerGiveDamage",description:"Cette callback est appel\xe9e quand un joueur inflige des d\xe9g\xe2ts \xe0 un autre joueur.",tags:["player"]},s=void 0,d={},c=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuce",id:"astuce",level:2}];function o(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:"Cette callback est appel\xe9e quand un joueur inflige des d\xe9g\xe2ts \xe0 un autre joueur."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," playerid"]}),(0,t.jsx)(n.td,{children:"ID du joueur qui inflige le d\xe9g\xe2t"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," damagedid"]}),(0,t.jsx)(n.td,{children:"ID du joueur qui re\xe7oit le d\xe9g\xe2t"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"float"})," Float",":amount"]}),(0,t.jsx)(n.td,{children:"Montant de la perte en armure/vie (combin\xe9s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," WEAPON",":weaponid"]}),(0,t.jsx)(n.td,{children:"Cause du dommage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," bodypart"]}),(0,t.jsx)(n.td,{children:"Partie du corps qui a \xe9t\xe9 touch\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1"})," - Autorise la callback \xe0 \xeatre appel\xe9e par un autre script."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"0"})," - Refuser que la callback soit appel\xe9e ailleurs."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new \n      string[128], \n      victim[MAX_PLAYER_NAME], \n      attacker[MAX_PLAYER_NAME],\n      weaponname[24];\n    \n    GetPlayerName(playerid, attacker, sizeof (attacker));\n    GetPlayerName(damagedid, victim, sizeof (victim));\n    GetWeaponName(weaponid, weaponname, sizeof (weaponname));\n    \n    format(string, sizeof(string), "%s a inflig\xe9 %.0f de d\xe9g\xe2ts \xe0 %s, arme: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);\n    \n    SendClientMessageToAll(0xFFFFFFFF, string);\n    \n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"astuce",children:"Astuce"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Gardez \xe0 l'esprit que cette fonction peut \xeatre inexacte dans certains cas."}),(0,t.jsx)(n.p,{children:"Si vous voulez emp\xeacher certains joueurs de s'endommager, utilisez SetPlayerTeam."}),(0,t.jsxs)(n.p,{children:["Le weaponid retournera la raison 37 ",(0,t.jsx)(n.em,{children:"(lance-flammes)"})," de n'importe quelle source de feu ",(0,t.jsx)(n.em,{children:"(par exemple molotov, 18)"}),"."]}),(0,t.jsxs)(n.p,{children:["Le weaponid retournera la raison 51 de n'importe quelle arme qui cr\xe9e une explosion ",(0,t.jsx)(n.em,{children:"(par exemple RPG, grenade)"}),"."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"playerid"})," est le seul \xe0 pouvoir appeler le callback."]}),(0,t.jsx)(n.p,{children:"Le montant est toujours le maximum de d\xe9g\xe2ts que l'arme peut faire, m\xeame si la sant\xe9 restante est inf\xe9rieure \xe0 ce maximum de d\xe9g\xe2ts. Ainsi, lorsqu'un joueur a 100,0 points de vie et se fait tirer dessus avec un Desert Eagle qui a une valeur de d\xe9g\xe2ts de 46,2, il faut 3 coups pour tuer ce joueur. Les 3 tirs montreront au final un montant de 46,2, m\xeame si lorsque le dernier coup frappe, le joueur n'a plus que 7,6 points de vie."})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var a=r(67294);let t={},i=a.createContext(t);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
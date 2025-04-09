"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56704"],{88425:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamIn","title":"OnPlayerStreamIn","description":"Cette fonction est appel\xe9e quand un joueur est charg\xe9 (devient visible) pour un joueur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamIn","permalink":"/fr/docs/scripting/callbacks/OnPlayerStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamIn","sidebar_label":"OnPlayerStreamIn","description":"Cette fonction est appel\xe9e quand un joueur est charg\xe9 (devient visible) pour un joueur.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStateChange","permalink":"/fr/docs/scripting/callbacks/OnPlayerStateChange"},"next":{"title":"OnPlayerStreamOut","permalink":"/fr/docs/scripting/callbacks/OnPlayerStreamOut"}}'),a=r("85893"),l=r("50065");let i={title:"OnPlayerStreamIn",sidebar_label:"OnPlayerStreamIn",description:"Cette fonction est appel\xe9e quand un joueur est charg\xe9 (devient visible) pour un joueur.",tags:["player"]},s=void 0,c={},o=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemmple",id:"exemmple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components},{TipNPCCallbacks:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,a.jsx)(n.p,{children:"Cette fonction est appel\xe9e quand un joueur est charg\xe9 (devient visible) pour un joueur."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nom"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"int"})," playerid"]}),(0,a.jsx)(n.td,{children:"L'ID du joueur charg\xe9 par le joueur."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"int"})," forplayerid"]}),(0,a.jsx)(n.td,{children:"L'ID du joueur qui a charg\xe9 le joueur."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,a.jsxs)(n.p,{children:["Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, ",(0,a.jsx)(n.code,{children:"return callback();"})," ne fonctionnera pas car la callback ne retourne rien, mais un return ",(0,a.jsxs)(n.em,{children:["(",(0,a.jsx)(n.code,{children:"return 1;"})," ou ",(0,a.jsx)(n.code,{children:"return 0;"}),")"]})," doit \xeatre effectu\xe9 dans la callback."]}),"\n",(0,a.jsx)(n.h2,{id:"exemmple",children:"Exemmple"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerStreamIn(playerid, forplayerid)\n{\n    new\n        string[40];\n \n    format(string, sizeof(string), "Le joueur ID %d vient de charger dans votre client.", playerid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n \n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(67294);let a={},l=t.createContext(a);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
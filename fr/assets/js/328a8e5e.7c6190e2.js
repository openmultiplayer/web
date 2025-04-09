"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13790"],{88991:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"Cette callback est appel\xe9e chaque fois qu\'un NPC voit un ClientMessage.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/fr/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[{"inline":true,"label":"NPC","permalink":"/fr/docs/tags/npc"},{"inline":true,"label":"ClientMessage","permalink":"/fr/docs/tags/client-message"},{"inline":true,"label":"SendClientMessageToAll","permalink":"/fr/docs/tags/send-client-message-to-all"}],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"Cette callback est appel\xe9e chaque fois qu\'un NPC voit un ClientMessage.","tags":["NPC","ClientMessage","SendClientMessageToAll"]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/fr/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/fr/docs/scripting/callbacks/OnDialogResponse"}}'),l=s("85893"),i=s("50065");let a={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"Cette callback est appel\xe9e chaque fois qu'un NPC voit un ClientMessage.",tags:["NPC","ClientMessage","SendClientMessageToAll"]},r=void 0,c={},o=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,l.jsxs)(n.p,{children:["Cette callback est appel\xe9e chaque fois qu'un NPC voit un ClientMessage. Ce sera le cas \xe0 chaque fois qu\u2019une fonction SendClientMessageToAll est utilis\xe9e et \xe0 chaque fois qu\u2019une fonction SendClientMessage est envoy\xe9e vers le NPC. Cette callback ne sera pas appel\xe9e quand un joueur dit quelque chose (voir NPC",":OnPlayerText"," pour une version avec les joueurs)."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Nom"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"int"})," color"]}),(0,l.jsx)(n.td,{children:"Couleur du ClientMessage."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," text[]"]}),(0,l.jsx)(n.td,{children:"Le message."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,l.jsx)(n.p,{children:"Aucun return."}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Solde bancaire : $0")\xa0!= -1)\n    {\n        SendClientMessage(playerid, -1, "Je suis pauvre\xa0:(");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(67294);let l={},i=t.createContext(l);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
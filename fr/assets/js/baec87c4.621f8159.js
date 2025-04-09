"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15206"],{63598:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"Cette callback est appel\xe9e quand un le client d\'un joueur update/synchronise la position d\'un v\xe9hicule qui n\'est pas conduit.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/fr/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"Cette callback est appel\xe9e quand un le client d\'un joueur update/synchronise la position d\'un v\xe9hicule qui n\'est pas conduit.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/fr/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/fr/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}'),c=t("85893"),l=t("50065");let s={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"Cette callback est appel\xe9e quand un le client d'un joueur update/synchronise la position d'un v\xe9hicule qui n'est pas conduit.",tags:["vehicle"]},r=void 0,d={},a=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,c.jsx)(n.p,{children:"Cette callback est appel\xe9e quand un le client d'un joueur update/synchronise la position d'un v\xe9hicule qui n'est pas conduit."}),"\n",(0,c.jsx)(n.p,{children:"Cela arrive en dehors du v\xe9hicule ou quand le joueur est en passager et qu'il n'y a pas de conducteur."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nom"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," vehicleid"]}),(0,c.jsx)(n.td,{children:"ID du v\xe9hicule dont la position est mise \xe0 jour"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," playerid"]}),(0,c.jsx)(n.td,{children:"ID du joueur"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," passenger_seat"]}),(0,c.jsx)(n.td,{children:"ID du si\xe8ge si le joueur est passager. 0=pas dans le v\xe9hicule, 1=passager avant, 2=arri\xe8re-gauche 3=arri\xe8re-droit, 4+= pour les bus, etc."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," new_x"]}),(0,c.jsx)(n.td,{children:"Nouvelle coordonn\xe9e X du v\xe9hicule"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," new_y"]}),(0,c.jsx)(n.td,{children:"Nouvelle coordonn\xe9e Y du v\xe9hicule"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," new_z"]}),(0,c.jsx)(n.td,{children:"Nouvelle coordonn\xe9e Z du v\xe9hicule"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," vel_x"]}),(0,c.jsx)(n.td,{children:"Nouvelle v\xe9locit\xe9 X du v\xe9hicule"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," vel_y"]}),(0,c.jsx)(n.td,{children:"Nouvelle v\xe9locit\xe9 Y du v\xe9hicule"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," vel_z"]}),(0,c.jsx)(n.td,{children:"Nouvelle v\xe9locit\xe9 Z du v\xe9hicule"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,c.jsxs)(n.p,{children:["Retourner ",(0,c.jsx)(n.strong,{children:"0"})," peut emp\xeacher l'update."]}),"\n",(0,c.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // V\xe9rifie si le veh est loin\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // Rejette l'update\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:"Cette callback est appel\xe9e tr\xe8s fr\xe9quemment par seconde et par v\xe9hicule. Vous devez vous abstenir d'impl\xe9menter des calculs intensifs ou des op\xe9rations d'\xe9criture / lecture de fichiers intensives dans cette callback."})}),"\n",(0,c.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(67294);let c={},l=i.createContext(c);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
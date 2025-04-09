"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19586"],{55806:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerWeaponData","title":"GetPlayerWeaponData","description":"Dobij oru\u017Eje i streljivo u odre\u0111enom igra\u010Devom slotu oru\u017Eja (npr. oru\u017Eje u \'SMG\' slotu).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerWeaponData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeaponData","permalink":"/bs/docs/scripting/functions/GetPlayerWeaponData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerWeaponData.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeaponData","sidebar_label":"GetPlayerWeaponData","description":"Dobij oru\u017Eje i streljivo u odre\u0111enom igra\u010Devom slotu oru\u017Eja (npr. oru\u017Eje u \'SMG\' slotu).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeapon","permalink":"/bs/docs/scripting/functions/GetPlayerWeapon"},"next":{"title":"GetPlayerWeaponState","permalink":"/bs/docs/scripting/functions/GetPlayerWeaponState"}}'),t=r("85893"),a=r("50065");let o={title:"GetPlayerWeaponData",sidebar_label:"GetPlayerWeaponData",description:"Dobij oru\u017Eje i streljivo u odre\u0111enom igra\u010Devom slotu oru\u017Eja (npr. oru\u017Eje u 'SMG' slotu).",tags:["player"]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Dobij oru\u017Eje i streljivo u odre\u0111enom igra\u010Devom slotu oru\u017Eja (npr. oru\u017Eje u 'SMG' slotu)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID igra\u010Da \u010Dije podatke o oru\u017Eju treba dobiti."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"slot"}),(0,t.jsx)(n.td,{children:"Slot oru\u017Eja za dobiti podatke (0-12)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"&weapons"}),(0,t.jsx)(n.td,{children:"Varijabla za pohraniti ID oru\u017Eja, proslije\u0111eno referencom."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"&ammo"}),(0,t.jsx)(n.td,{children:"Varijabla za pohraniti streljivo, proslije\u0111eno referencom."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena.."}),"\n",(0,t.jsx)(n.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Igra\u010D nije povezan i/ili je navedeni slot za oru\u017Eje neva\u017Ee\u0107i (va\u017Ee\u0107e 0-12)."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// Uobi\u010Dajena upotreba: nabavite sve oru\u017Eje i pohranite podatke u niz koji sadr\u017Ei 13 slotova\n// Prva vrijednost je ID oru\u017Eja, a druga streljivo\n\nnew weapons[13][2];\n\nfor (new i = 0; i <= 12; i++)\n{\n    GetPlayerWeaponData(playerid, i, weapons[i][0], weapons[i][1]);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Staro oru\u017Eje bez preostalog streljiva i dalje se vra\u0107a."})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Provjeri koje oru\u017Eje igra\u010D trenutno dr\u017Ei."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Daj igra\u010Du oru\u017Eje."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var i=r(67294);let t={},a=i.createContext(t);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
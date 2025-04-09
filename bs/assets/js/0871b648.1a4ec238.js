"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63416"],{41067:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayerMapIcon","title":"SetPlayerMapIcon","description":"Postavi ikonu/marker na mapu igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerMapIcon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerMapIcon","permalink":"/bs/docs/scripting/functions/SetPlayerMapIcon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerMapIcon.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerMapIcon","sidebar_label":"SetPlayerMapIcon","description":"Postavi ikonu/marker na mapu igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerInterior","permalink":"/bs/docs/scripting/functions/SetPlayerInterior"},"next":{"title":"SetPlayerMarkerForPlayer","permalink":"/bs/docs/scripting/functions/SetPlayerMarkerForPlayer"}}'),a=n("85893"),t=n("50065");let o={title:"SetPlayerMapIcon",sidebar_label:"SetPlayerMapIcon",description:"Postavi ikonu/marker na mapu igra\u010Da.",tags:["player"]},s=void 0,c={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(i.p,{children:"Postavi ikonu/marker na mapu igra\u010Da. Mo\u017Ee se koristiti da ozna\u010Dite lokacije kao npr. banke i bolnice igra\u010Dima."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Ime"}),(0,a.jsx)(i.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"ID igra\u010Da za postaviti ikonicu na mapu."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"iconid"}),(0,a.jsxs)(i.td,{children:["ID ikonice, od 0 do 99. Ovo zna\u010Di da postoji maksimalno 100 map ikonica. ID se mo\u017Ee koristiti u ",(0,a.jsx)(i.a,{href:"/docs/scripting/functions/RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),"."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["Float",":x"]}),(0,a.jsx)(i.td,{children:"X kordinata za postaviti map ikonicu."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["Float",":y"]}),(0,a.jsx)(i.td,{children:"Y kordinata za postaviti map ikonicu."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["Float",":z"]}),(0,a.jsx)(i.td,{children:"Z kordinata za postaviti map ikonicu."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"markertype"}),(0,a.jsxs)(i.td,{children:[(0,a.jsx)(i.a,{href:"/docs/scripting/resources/mapicons",children:"Ikonica"})," za postaviti."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"color"}),(0,a.jsx)(i.td,{children:"Boja ikonice, kao cijeli broj ili hex u RGBA formatu. Ovo bi se trebalo koristiti samo sa ikonicom kocke (ID: 0)."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"style"}),(0,a.jsxs)(i.td,{children:[(0,a.jsx)(i.a,{href:"/docs/scripting/resources/mapiconstyles",children:"Stil"})," ikonice."]})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,a.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Igra\u010D nije konektovan."}),"\n",(0,a.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:"public OnPlayerConnect( playerid )\n{\n    // Ovaj primjer demonstrira kako kreirati dollar-ikonicu na vrh locirane 24/7 trgovine\n    // u Las Venturasu. Na ovaj na\u010Din novi igra\u010Di znaju gdje da odu sa svojim novcem!\n    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"Ako koristite neva\u017Ee\u0107i tip markera, stvorit \u0107e se ID 1 (Bijeli kvadrat). Ako koristite ID ikone koji se ve\u0107 koristi, on \u0107e zamijeniti trenutnu ikonu karte pomo\u0107u tog ID-a."})}),"\n",(0,a.jsx)(i.admonition,{type:"warning",children:(0,a.jsx)(i.p,{children:"Mo\u017Eete imati samo 100 ikona mapa! Oznake tipa 1 (), 2 (), 4 () i 56 () uzrokovat \u0107e pad va\u0161e igre ako ste tijekom pregledavanja karte omogu\u0107ili legende karte."})}),"\n",(0,a.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/docs/scripting/functions/RemovePlayerMapIcon",children:"RemovePlayerMapIcon"}),": Ukloni ikonicu na mapi za igra\u010Da."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/docs/scripting/functions/SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Postavite marker/oznaku igra\u010Da."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return o}});var r=n(67294);let a={},t=r.createContext(a);function o(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);
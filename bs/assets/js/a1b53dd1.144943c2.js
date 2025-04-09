"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37231"],{41597:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>c,metadata:()=>a,assets:()=>o,toc:()=>s,contentTitle:()=>n});var a=JSON.parse('{"id":"scripting/functions/AttachObjectToObject","title":"AttachObjectToObject","description":"Mo\u017Eete koristiti ovu funkciju da prikva\u010Dite objekat za drugi objekat.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToObject","permalink":"/bs/docs/scripting/functions/AttachObjectToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToObject.md","tags":[],"version":"current","frontMatter":{"title":"AttachObjectToObject","sidebar_label":"AttachObjectToObject","description":"Mo\u017Eete koristiti ovu funkciju da prikva\u010Dite objekat za drugi objekat.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AttachCameraToPlayerObject","permalink":"/bs/docs/scripting/functions/AttachCameraToPlayerObject"},"next":{"title":"AttachObjectToPlayer","permalink":"/bs/docs/scripting/functions/AttachObjectToPlayer"}}'),r=i("85893"),j=i("50065");let c={title:"AttachObjectToObject",sidebar_label:"AttachObjectToObject",description:"Mo\u017Eete koristiti ovu funkciju da prikva\u010Dite objekat za drugi objekat.",tags:[]},n=void 0,o={},s=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,j.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(t.p,{children:"Mo\u017Eete koristiti ovu funkciju da prikva\u010Dite objekat za drugi objekat. Objekti \u0107e pratiti glavni objekat."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Ime"}),(0,r.jsx)(t.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"Objekat kojeg \u017Eelite prikva\u010Diti za neki drugi."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attachtoid"}),(0,r.jsx)(t.td,{children:"Objekat za kojeg \u017Eelite zaka\u010Diti prvi objekat."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,r.jsx)(t.td,{children:"Razdaljina izme\u0111u glavnog objekta i objekta za prikva\u010Diti u X smjeru."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,r.jsx)(t.td,{children:"Razdaljina izme\u0111u glavnog objekta i objekta za prikva\u010Diti u Y smjeru."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,r.jsx)(t.td,{children:"Razdaljina izme\u0111u glavnog objekta i objekta za prikva\u010Diti u Z smjeru."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotX"]}),(0,r.jsx)(t.td,{children:"X rotacija izme\u0111u glavnog objekta i objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotY"]}),(0,r.jsx)(t.td,{children:"Y rotacija izme\u0111u glavnog objekta i objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,r.jsx)(t.td,{children:"Z rotacija izme\u0111u glavnog objekta i objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SyncRotation"}),(0,r.jsx)(t.td,{children:"Ako je stavljeno na 0, rotacija objectid-a se ne\u0107e mijenjati sa attachtoid-em."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(t.p,{children:"0: Funkcija nije uspjela da se izvr\u0161i. Ovo znali da prvi objekat (objectid) ne postoji. Ne postoje interne provjere da se potvrdi da li drugi objekat (attachtoid) postoji."}),"\n",(0,r.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new gObjectId = CreateObject(...);\nnew gAttachToId = CreateObject(...);\n\nAttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Oba objekta treba stvoriti prije poku\u0161aja da ih prika\u010Dite. Ne postoji verzija ove funkcije player-objekta (AttachPlayerObjectToObject), \u0161to zna\u010Di da je streameri ne\u0107e podr\u017Eati."})}),"\n",(0,r.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Prikva\u010Di objekat za igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Prikva\u010Di objekat za vozilo."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Prikva\u010Di player-objekat za igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Kreiraj objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Uni\u0161ti objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Provjerava da li je odre\u0111eni objekat validan."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Pomjeri objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Zaustavi objekat od kretanja."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Postavi poziciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Postavi rotaciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Lociraj objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Provjeri rotaciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Kreiraj objekat samo za jednog igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Uni\u0161ti player-objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Provjerava da li je odre\u0111eni player-objekat validan."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Pomjeri player objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Zaustavi player-objekat od kretanja."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Postavi poziciju player-objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Postavi rotaciju player-objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Lociraj player objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Provjeri rotaciju player-objekta."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,j.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return n},a:function(){return c}});var a=i(67294);let r={},j=a.createContext(r);function c(e){let t=a.useContext(j);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(j.Provider,{value:t},e.children)}}}]);
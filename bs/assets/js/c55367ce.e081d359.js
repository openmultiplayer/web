"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36006"],{54156:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>c,metadata:()=>a,assets:()=>o,toc:()=>s,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/AttachObjectToVehicle","title":"AttachObjectToVehicle","description":"Prikva\u010Di objekat za vozilo.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToVehicle","permalink":"/bs/docs/scripting/functions/AttachObjectToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AttachObjectToVehicle","sidebar_label":"AttachObjectToVehicle","description":"Prikva\u010Di objekat za vozilo.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AttachObjectToPlayer","permalink":"/bs/docs/scripting/functions/AttachObjectToPlayer"},"next":{"title":"AttachPlayerObjectToObject","permalink":"/bs/docs/scripting/functions/AttachPlayerObjectToObject"}}'),r=i("85893"),n=i("50065");let c={title:"AttachObjectToVehicle",sidebar_label:"AttachObjectToVehicle",description:"Prikva\u010Di objekat za vozilo.",tags:["vehicle"]},l=void 0,o={},s=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Related Functions",id:"related-functions",level:2}];function j(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(t.p,{children:"Prikva\u010Di objekat za vozilo."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Ime"}),(0,r.jsx)(t.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"ID objekta kojeg \u017Eelite prikva\u010Diti za vozilo. Zapamtite da je ovo ID objekta, ne modela. Objekat prvo mora biti kreiran preko CreateObject."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"ID vozila za koje \u017Eelite prikva\u010Diti objekat."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,r.jsx)(t.td,{children:"Osa X pomaknuta od vozila do objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,r.jsx)(t.td,{children:"Osa Y pomaknuta od vozila do objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,r.jsx)(t.td,{children:"Osa Z pomaknuta od vozila do objekta za prikva\u010Diti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotX"]}),(0,r.jsx)(t.td,{children:"Pomak X rotacije za objekt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotY"]}),(0,r.jsx)(t.td,{children:"Pomak Y rotacije za objekt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,r.jsx)(t.td,{children:"Pomak Z rotacije za objekt."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Ova funkcija ne returna(vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,r.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(...);\nnew vehicleid = GetPlayerVehicleID(playerid);\nAttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Objekat prvobitno mora biti kreiran."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Kada se vozilo uni\u0161ti ili respawnuje, prikva\u010Deni predmeti se ne\u0107e uni\u0161titi s njim; ostat \u0107e stacionarni na mjestu na kojem je vozilo nestalo i biti ponovno \u0107e se prikva\u010Diti na sljede\u0107e vozilo kako bi zatra\u017Eili ID vozila na koje su predmeti prikva\u010Deni."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Prikva\u010Di objekat za igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToObject",children:"AttachObjectToObject"}),": Prikva\u010Di objekat za objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Prikva\u010Di player-objekat za igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Kreiraj objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Uni\u0161ti objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Provjerava da li je odre\u0111eni objekat validan."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Pomjeri objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Zaustavi objekat od kretanja."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Postavi poziciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Postavi rotaciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Lociraj objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Provjeri rotaciju objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Kreiraj objekat samo za jednog igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Uni\u0161ti player-objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Provjerava da li je odre\u0111eni player-objekat validan."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Pomjeri player objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Zaustavi player-objekat od kretanja."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Postavi poziciju player-objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Postavi rotaciju player-objekta."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Lociraj player objekat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Provjeri rotaciju player-objekta."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return c}});var a=i(67294);let r={},n=a.createContext(r);function c(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
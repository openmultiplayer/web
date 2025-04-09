"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53769"],{65595:function(e,t,n){n.r(t),n.d(t,{default:()=>j,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/AttachObjectToPlayer","title":"AttachObjectToPlayer","description":"Objeyi oyuncuya ba\u011Flama.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToPlayer","permalink":"/tr/docs/scripting/functions/AttachObjectToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AttachObjectToPlayer","sidebar_label":"AttachObjectToPlayer","description":"Objeyi oyuncuya ba\u011Flama.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AttachObjectToObject","permalink":"/tr/docs/scripting/functions/AttachObjectToObject"},"next":{"title":"AttachObjectToVehicle","permalink":"/tr/docs/scripting/functions/AttachObjectToVehicle"}}'),i=n("85893"),l=n("50065");let a={title:"AttachObjectToPlayer",sidebar_label:"AttachObjectToPlayer",description:"Objeyi oyuncuya ba\u011Flama.",tags:["player"]},c=void 0,s={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(t.p,{children:"Bir objeyi oyuncuya ba\u011Flar."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parametre"}),(0,i.jsx)(t.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"Ba\u011Flan\u0131lacak objenin ID'si."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"Ba\u011Flanacak oyuncunun ID'si."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki X de\u011Feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Y de\u011Feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Z de\u011Feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotX"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki X a\xe7\u0131s\u0131n\u0131n de\u011Feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotY"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Y a\xe7\u0131s\u0131n\u0131n de\u011Feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Z a\xe7\u0131s\u0131n\u0131n de\u011Feri."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(t.p,{children:"Bu fonksiyon her zaman 0 d\xf6nd\xfcr\xfcr."}),"\n",(0,i.jsx)(t.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyObject;\ngMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); // Objeyi olu\u015Fturduk\nAttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2); // Objeyi oyuncuya ba\u011Flad\u0131k.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Bir objeyi araca ba\u011Flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachObjectToObject",children:"AttachObjectToObject"}),": Bir objeyi bir di\u011Fer objeye ba\u011Flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Bir oyuncu objesini bir objeye ba\u011Flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Obje olu\u015Fturma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Obje silme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Objenin olu\u015Fturulup olu\u015Fturulmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Objeyi hareket ettirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Hareket eden bir objeyi durdurma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Objenin pozisyonunu de\u011Fi\u015Ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Objenin rotasyonunu de\u011Fi\u015Ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Objenin pozisyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Objenin rotasyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Oyuncu objesi olu\u015Fturma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Oyuncu objesini kald\u0131rma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Oyuncu objesinin olu\u015Fturulup olu\u015Fturulmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Oyuncu objesini hareket ettirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Hareket eden oyuncu objesini durdurma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Oyuncu objesinin pozisyonunu de\u011Fi\u015Ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Oyuncu objesinin rotasyonunu de\u011Fi\u015Ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Oyuncu objesinin pozisyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Oyuncu objesinin rotasyonunu kontrol etme."]}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(67294);let i={},l=r.createContext(i);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
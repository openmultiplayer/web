"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39432"],{6496:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>s,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/functions/AttachObjectToObject","title":"AttachObjectToObject","description":"Objeyi objeye ba\u011Flar.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToObject","permalink":"/tr/docs/scripting/functions/AttachObjectToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToObject.md","tags":[],"version":"current","frontMatter":{"title":"AttachObjectToObject","sidebar_label":"AttachObjectToObject","description":"Objeyi objeye ba\u011Flar.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AttachCameraToPlayerObject","permalink":"/tr/docs/scripting/functions/AttachCameraToPlayerObject"},"next":{"title":"AttachObjectToPlayer","permalink":"/tr/docs/scripting/functions/AttachObjectToPlayer"}}'),l=t("85893"),r=t("50065");let i={title:"AttachObjectToObject",sidebar_label:"AttachObjectToObject",description:"Objeyi objeye ba\u011Flar.",tags:[]},c=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function j(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bu fonksiyon, objeleri di\u011Fer objelere ba\u011Flar."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objectid"}),(0,l.jsx)(n.td,{children:"Ba\u011Flanacak obje ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"attachtoid"}),(0,l.jsx)(n.td,{children:"Ba\u011Flan\u0131lacak (ana obje) obje ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":OffsetX"]}),(0,l.jsx)(n.td,{children:"X y\xf6n\xfcndeki ana obje ile obje aras\u0131ndaki mesafe."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":OffsetY"]}),(0,l.jsx)(n.td,{children:"Y y\xf6n\xfcndeki ana obje ile obje aras\u0131ndaki mesafe."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":OffsetZ"]}),(0,l.jsx)(n.td,{children:"Z y\xf6n\xfcndeki ana obje ile obje aras\u0131ndaki y\xfcksekli\u011Fi."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":RotX"]}),(0,l.jsx)(n.td,{children:"Obje ve ana obje aras\u0131ndaki X rotasyonu."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":RotY"]}),(0,l.jsx)(n.td,{children:"Obje ve ana obje aras\u0131ndaki Y rotasyonu."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":RotZ"]}),(0,l.jsx)(n.td,{children:"Obje ve ana obje aras\u0131ndaki Z rotasyonu."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"SyncRotation"}),(0,l.jsx)(n.td,{children:"E\u011Fer s\u0131f\u0131rsa, objenin rotasyonu ana objenin rotasyonuyla birlikte de\u011Fi\u015Fmez."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"1: Fonksiyon ba\u015Far\u0131yla \xe7al\u0131\u015Ft\u0131."}),"\n",(0,l.jsx)(n.p,{children:"0: Fonksiyon \xe7al\u0131\u015Fmad\u0131. Bu, ilk (ba\u011Flanacak - objectid) objenin mevcut olmad\u0131\u011F\u0131 anlam\u0131na gelir.\nBa\u011Flan\u0131lacak ana objenin (ba\u011Flan\u0131lacak - attachtoid) olu\u015Fturulup olu\u015Fturulmad\u0131\u011F\u0131n\u0131n herhangi bir kontrol\xfc yoktur."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new gObjectId = CreateObject(...);\nnew gAttachToId = CreateObject(...);\n\nAttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Fonksiyon kullan\u0131lmadan \xf6nce iki objede olu\u015Fturulmal\u0131d\u0131r.\nBu fonksiyon oyuncu i\xe7in \xf6zel olu\u015Fturulmu\u015F objelerde \xe7al\u0131\u015Fmaz."})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Oyuncuya obje ba\u011Flama."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Araca obje ba\u011Flama."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Oyuncuya oyuncu objesi ba\u011Flama."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreateObject",children:"CreateObject"}),": Obje olu\u015Fturma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DestroyObject",children:"DestroyObject"}),": Obje silme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidObject",children:"IsValidObject"}),": Objenin olup olmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"MoveObject",children:"MoveObject"}),": Objeyi ta\u015F\u0131ma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"StopObject",children:"StopObject"}),": Objenin haraket etmesini durdurma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Objenin pozisyonunu d\xfczenleme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Objenin rotasyonunu d\xfczenleme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Objenin pozisyonunu kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Objenin rotasyonunu kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Oyuncuya \xf6zel obje olu\u015Fturma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Oyuncuya \xf6zel objeyi silme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Oyuncuya \xf6zel objenin olup olmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Oyuncuya \xf6zel objeyi ta\u015F\u0131ma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Oyuncuya \xf6zel objenin haraket etmesini durdurma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Oyuncuya \xf6zel objenin pozisyonunu d\xfczenleme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Oyuncuya \xf6zel objenin rotasyonunu pozisyonunu d\xfczenleme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Oyuncuya \xf6zel objenin pozisyonunu kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Oyuncuya \xf6zel objenin rotasyonunu pozisyonunu kontrol etme."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var a=t(67294);let l={},r=a.createContext(l);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
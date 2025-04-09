"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41507"],{2849:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>s,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerObjectMoved","title":"OnPlayerObjectMoved","description":"Fonksiyon, bir oyuncu objesi MovePlayerObject\'den sonra hareket ettirildi\u011Finde (hareket etmeyi durdurdu\u011Funda) \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerObjectMoved","permalink":"/tr/docs/scripting/callbacks/OnPlayerObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerObjectMoved.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerObjectMoved","sidebar_label":"OnPlayerObjectMoved","description":"Fonksiyon, bir oyuncu objesi MovePlayerObject\'den sonra hareket ettirildi\u011Finde (hareket etmeyi durdurdu\u011Funda) \xe7a\u011Fr\u0131l\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveRaceCheckpoint","permalink":"/tr/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint"},"next":{"title":"OnPlayerPickUpPickup","permalink":"/tr/docs/scripting/callbacks/OnPlayerPickUpPickup"}}'),i=r("85893"),a=r("50065");let l={title:"OnPlayerObjectMoved",sidebar_label:"OnPlayerObjectMoved",description:"Fonksiyon, bir oyuncu objesi MovePlayerObject'den sonra hareket ettirildi\u011Finde (hareket etmeyi durdurdu\u011Funda) \xe7a\u011Fr\u0131l\u0131r.",tags:["player"]},c=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"Fonksiyon, bir oyuncu objesi MovePlayerObject'den sonra hareket ettirildi\u011Finde (hareket etmeyi durdurdu\u011Funda) \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parametre"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Objenin atand\u0131\u011F\u0131 oyuncunun ID'si."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"Hareket ettirilen oyuncu objesinin ID'si."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"Filterscript komutlar\u0131nda her zaman ilk olarak \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerObjectMoved(playerid, objectid)\n{\n    printf("Oyuncu objesi haraket ettirildi: object id: %d oyuncu id: %d", objectid, playerid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Bu fonksiyon, NPC i\xe7in de \xe7a\u011Fr\u0131labilir."})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": Oyuncu objesi hareket ettirme."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Oyuncu objesinin hareket edip etmedi\u011Fini kontrol etme."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/StopPlayerObject",children:"StopPlayerObject"}),": Hareket eden oyuncu objesini durdurma."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Oyuncu objesi olu\u015Fturma."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Oyuncu objesi silme."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(67294);let i={},a=t.createContext(i);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76026"],{7356:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitVehicle","title":"OnPlayerExitVehicle","description":"Bu geri \xe7a\u011F\u0131rma, ara\xe7ta bulunan bir oyuncu bir ara\xe7tan inmeye ba\u015Flad\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitVehicle","permalink":"/tr/docs/scripting/callbacks/OnPlayerExitVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerExitVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/tr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerExitVehicle","sidebar_label":"OnPlayerExitVehicle","description":"Bu geri \xe7a\u011F\u0131rma, ara\xe7ta bulunan bir oyuncu bir ara\xe7tan inmeye ba\u015Flad\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131l\u0131r.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterVehicle","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterVehicle"},"next":{"title":"OnPlayerExitedMenu","permalink":"/tr/docs/scripting/callbacks/OnPlayerExitedMenu"}}'),l=a("85893"),i=a("50065");let t={title:"OnPlayerExitVehicle",sidebar_label:"OnPlayerExitVehicle",description:"Bu geri \xe7a\u011F\u0131rma, ara\xe7ta bulunan bir oyuncu bir ara\xe7tan inmeye ba\u015Flad\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131l\u0131r.",tags:["player","vehicle"]},c=void 0,s={},d=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma, ara\xe7ta bulunan bir oyuncu bir ara\xe7tan inmeye ba\u015Flad\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131l\u0131r."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Ara\xe7tan inmekte olan oyuncunun ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"Oyuncunun inmekte oldu\u011Fu arac\u0131n ID'si."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"Her zaman ilk olarak filterscriptlerde \xe7a\u011F\u0131r\u0131l\u0131r."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new string[35];\n    format(string, sizeof(string), "B\u0130LG\u0130: %i ID\'li ara\xe7tan iniyorsun.", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma, oyuncu motordan d\xfc\u015Ft\xfc\u011F\xfcnde veya SetPlayerPos gibi fonksiyonlar kullan\u0131larak ara\xe7tan ba\u015Fka bir \u015Fekilde \xe7\u0131kart\u0131ld\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131lmaz. Bunu sa\u011Flamak i\xe7in OnPlayerStateChange'de eski durumlar\u0131n\u0131n PLAYER_STATE_DRIVER veya PLAYER_STATE_PASSENGER ve yeni durumlar\u0131n\u0131n PLAYER_STATE_ONFOOT olup olmad\u0131\u011F\u0131na bakmal\u0131s\u0131n\u0131z."})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Throw a player out of their vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return t}});var r=a(67294);let l={},i=r.createContext(l);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
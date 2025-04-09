"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11394"],{76185:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>s,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerDisconnect","title":"OnPlayerDisconnect","description":"Bu geri \xe7a\u011F\u0131rma oyuncu sunucudan ayr\u0131ld\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerDisconnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerDisconnect","permalink":"/tr/docs/scripting/callbacks/OnPlayerDisconnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerDisconnect.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerDisconnect","sidebar_label":"OnPlayerDisconnect","description":"Bu geri \xe7a\u011F\u0131rma oyuncu sunucudan ayr\u0131ld\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerDeath","permalink":"/tr/docs/scripting/callbacks/OnPlayerDeath"},"next":{"title":"OnPlayerEditAttachedObject","permalink":"/tr/docs/scripting/callbacks/OnPlayerEditAttachedObject"}}'),l=r("85893"),t=r("50065");let i={title:"OnPlayerDisconnect",sidebar_label:"OnPlayerDisconnect",description:"Bu geri \xe7a\u011F\u0131rma oyuncu sunucudan ayr\u0131ld\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r.",tags:["player"]},c=void 0,s={},d=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Fl\u0131 Fonksiyonlar",id:"ba\u011Fl\u0131-fonksiyonlar",level:2}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma oyuncu sunucudan ayr\u0131ld\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Sunucudan ayr\u0131lan oyuncunun id'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"reason"}),(0,l.jsx)(n.td,{children:"Sunucudan ayr\u0131lma sebebi."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"0 - Di\u011Fer filterscriptlerde \xe7a\u011Fr\u0131lmas\u0131n\u0131 engeller."}),"\n",(0,l.jsx)(n.p,{children:"1 - Di\u011Fer filterscriptlerde aranmas\u0131 i\xe7in pas ge\xe7irilir."}),"\n",(0,l.jsx)(n.p,{children:"Her zaman \xf6ncelikle filterscriptlerde \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerDisconnect(playerid, reason)\n{\n    new\n        szString[64],\n        playerName[MAX_PLAYER_NAME];\n\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n\n    new szDisconnectReason[3][] =\n    {\n        "Zaman A\u015F\u0131m\u0131",\n        "Kendi \u0130ste\u011Fiyle",\n        "Kick/Ban"\n    };\n\n    format(szString, sizeof szString, "%s sunucudan ayr\u0131ld\u0131. (%s).", playerName, szDisconnectReason[reason]);\n\n    SendClientMessageToAll(0xC4C4C4FF, szString);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma i\xe7erisinde baz\u0131 fonksiyonlar do\u011Fru bilgiler vermez (GetPlayerIp ve GetPlayerPos gibi)"})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Fl\u0131-fonksiyonlar",children:"Ba\u011Fl\u0131 Fonksiyonlar"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var a=r(67294);let l={},t=a.createContext(l);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);
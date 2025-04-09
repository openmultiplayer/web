"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["30720"],{84947:function(n,e,a){a.r(e),a.d(e,{default:()=>s,frontMatter:()=>l,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"Bu fonksiyon, RCON oturumu a\xe7m\u0131\u015F oyuncu RCON komutu kulland\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r. (/rcon -komut-)","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/tr/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[],"version":"current","frontMatter":{"title":"OnRconCommand","sidebar_label":"OnRconCommand","description":"Bu fonksiyon, RCON oturumu a\xe7m\u0131\u015F oyuncu RCON komutu kulland\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r. (/rcon -komut-)","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/tr/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/tr/docs/scripting/callbacks/OnRconLoginAttempt"}}'),t=a("85893"),o=a("50065");let l={title:"OnRconCommand",sidebar_label:"OnRconCommand",description:"Bu fonksiyon, RCON oturumu a\xe7m\u0131\u015F oyuncu RCON komutu kulland\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r. (/rcon -komut-)",tags:[]},i=void 0,u={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verilen Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verilen-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,t.jsx)(e.p,{children:"Bu fonksiyon, RCON oturumu a\xe7m\u0131\u015F oyuncu RCON komutu kulland\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r. (/rcon -komut-)"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parametre"}),(0,t.jsx)(e.th,{children:"A\xe7\u0131klama"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cmd[]"}),(0,t.jsx)(e.td,{children:"Yaz\u0131lan komutu ve aktar\u0131lan parametreleri i\xe7eren bir dize."})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\xe7al\u0131\u015F\u0131nca-verilen-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verilen Sonu\xe7lar"}),"\n",(0,t.jsx)(e.p,{children:"Filterscript komut dosyalar\u0131nda her zaman ilk olarak \xe7a\u011Fr\u0131l\u0131r, bu nedenle 1 d\xf6nd\xfcrmek oyun modunun g\xf6rmesini engeller."}),"\n",(0,t.jsx)(e.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    printf("[RCON]: \'/rcon %s\' komutu girildi!", cmd);\n    return 0;\n}\n\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "merhaba", true))\n    {\n        SendClientMessageToAll(0xFFFFFFAA, "Merhaba D\xfcnya!");\n        print("D\xfcnyaya merhaba dedin."); // Bu, sohbette rcon komutunu yazan oyuncuya beyaz olarak g\xf6r\xfcnecektir.\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"notlar",children:"Notlar"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:'Bir oyuncu bir komut yazd\u0131\u011F\u0131nda "/rcon" "cmd" ye dahil edilmez. Burada "print" i\u015Flevini kullan\u0131rsan\u0131z, hem oyun i\xe7inde komutu yazan oyuncuya hem de g\xfcnl\xfc\u011Fe bir mesaj g\xf6nderir. Bu fonksiyon, oyuncu RCON y\xf6neticisi olarak oturum a\xe7mad\u0131\u011F\u0131nda \xe7a\u011Fr\u0131lmaz.Oyuncu RCON y\xf6neticisi olarak oturum a\xe7mad\u0131\u011F\u0131nda ve /rcon login kulland\u0131\u011F\u0131nda, bu fonksiyon \xe7a\u011Fr\u0131lmaz ve onun yerine OnRconLoginAttempt \xe7a\u011Fr\u0131l\u0131r. Ancak, oyuncu RCON y\xf6neticisi olarak oturum a\xe7t\u0131\u011F\u0131nda, bu komutun kullan\u0131lmas\u0131 bu fonksiyonu \xe7a\u011F\u0131racakt\u0131r.'})}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"Oyun modunda \xe7al\u0131\u015Fmas\u0131 i\xe7in bu fonksiyonu \xe7al\u0131\u015Fan bir oyun modunun komut dosyas\u0131na eklemeniz gerekir!"})}),"\n",(0,t.jsx)(e.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Oyuncunun RCON oturumu a\xe7\u0131p a\xe7mad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Bu fonksiyon, oyuncu RCON oturumu a\xe7may\u0131 denedi\u011Finde \xe7a\u011Fr\u0131l\u0131r."]}),"\n"]})]})}function s(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return i},a:function(){return l}});var r=a(67294);let t={},o=r.createContext(t);function l(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);
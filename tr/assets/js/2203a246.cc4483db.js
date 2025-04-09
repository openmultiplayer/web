"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99037"],{18286:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"Bu fonksiyon, bir istemci veya oyuncu sunucuyu durumlar\u0131yla her g\xfcncelledi\u011Finde \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/tr/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"Bu fonksiyon, bir istemci veya oyuncu sunucuyu durumlar\u0131yla her g\xfcncelledi\u011Finde \xe7a\u011Fr\u0131l\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/tr/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/tr/docs/scripting/callbacks/OnPlayerWeaponShot"}}'),i=a("85893"),r=a("50065");let t={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"Bu fonksiyon, bir istemci veya oyuncu sunucuyu durumlar\u0131yla her g\xfcncelledi\u011Finde \xe7a\u011Fr\u0131l\u0131r.",tags:["player"]},o=void 0,d={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function s(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{TipNPCCallbacks:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"Bu fonksiyon, bir istemci veya oyuncu sunucu durumlar\u0131yla ilgili her g\xfcncellendi\u011Finde \xe7a\u011Fr\u0131l\u0131r. Genellikle, sa\u011Fl\u0131k veya z\u0131rh g\xfcncellemeleri veya silah de\u011Fi\u015Ftiren oyuncular gibi sunucu taraf\u0131ndan aktif olarak izlenmeyen istemci g\xfcncellemeleri i\xe7in \xf6zel \xe7a\u011Fr\u0131lar\u0131 olu\u015Fturmak i\xe7in kullan\u0131l\u0131r."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parametre"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"G\xfcncelleme paketi g\xf6nderen oyuncunun ID'si."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"0 - Bu oyuncunun g\xfcncellemesi di\u011Fer oyunculara/istemcilere senkronize edilmeyecektir."}),"\n",(0,i.jsx)(n.p,{children:"1 - Bu g\xfcncellemenin normal \u015Fekilde i\u015Flenebilece\u011Fini ve di\u011Fer oyunculara g\xf6nderilebilece\u011Fini g\xf6sterir."}),"\n",(0,i.jsx)(n.p,{children:"Filterscript komutlar\u0131nda her zaman ilk olarak \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new iCurWeap = GetPlayerWeapon(playerid); // Oyuncunun eline ald\u0131\u011F\u0131 silah\u0131 kontrol etmek i\xe7in de\u011Fi\u015Fken olu\u015Fturuyoruz.\n    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Son g\xfcncellemeden bu yana silah de\u011Fi\u015Ftirdiyse...\n    {\n        // OnPlayerChangeWeapon adl\u0131 fonksiyonu \xe7a\u011F\u0131ral\u0131m.\n        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);\n        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);// Silah de\u011Fi\u015Fkenini g\xfcncelleyelim.\n    }\n    return 1; // Bu g\xfcncellemeyi di\u011Fer oyunculara g\xf6nderin. \n}\n\nstock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)\n{\n    new     s[128],\n        oWeapon[24],\n        nWeapon[24];\n\n    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));\n    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));\n\n    format(s, sizeof(s), "Eski silah\u0131n olan %s numaral\u0131 silah\u0131 yeni silah\u0131n %s ile de\u011Fi\u015Ftirdin!", oWeapon, nWeapon);\n\n    SendClientMessage(playerid, 0xFFFFFFFF, s);\n}\n\npublic OnPlayerUpdate(playerid)\n{\n    new Float:fHealth;\n\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // Can kazan\u0131p kazanmad\u0131\u011F\u0131n\u0131 kontrol edelim, anti-sa\u011Fl\u0131k hilesi? ;) \n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            // Oyuncu can kazanm\u0131\u015F! D-d-dostum bu adam bir Hile mi?\n            // Bu manyak herife kendi senaryolar\u0131n\u0131 yaz\u0131p, istedi\u011Fin \u015Feyleri yapabilirsin.\n        }\n        else\n        {\n            // Oyuncu can kazanmam\u0131\u015F.\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Bu fonksiyon, oyuncu ba\u015F\u0131na ortalama olarak saniyede 30 kez \xe7a\u011Fr\u0131l\u0131r; yaln\u0131zca ne anlama geldi\u011Fini (veya daha da \xf6nemlisi ne anlama gelmedi\u011Fini) bildi\u011Finiz zaman kullan\u0131n. Her oyuncu i\xe7in bu \xe7a\u011Fr\u0131lma s\u0131kl\u0131\u011F\u0131, oyuncunun ne yapt\u0131\u011F\u0131na ba\u011Fl\u0131 olarak de\u011Fi\u015Fir. Araba kullanmak veya ate\u015F etmek, r\xf6lantiden \xe7ok daha fazla g\xfcncellemeyi tetikleyecektir."})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return t}});var l=a(67294);let i={},r=l.createContext(i);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
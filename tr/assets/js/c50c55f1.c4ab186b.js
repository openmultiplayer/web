"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77640"],{26542:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>s,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/functions/AllowNickNameCharacter","title":"AllowNickNameCharacter","description":"Bir karakterin takma adlarda kullan\u0131lmas\u0131na izin verir.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AllowNickNameCharacter.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowNickNameCharacter","permalink":"/tr/docs/scripting/functions/AllowNickNameCharacter","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowNickNameCharacter.md","tags":[],"version":"current","frontMatter":{"title":"AllowNickNameCharacter","sidebar_label":"AllowNickNameCharacter","description":"Bir karakterin takma adlarda kullan\u0131lmas\u0131na izin verir.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowInteriorWeapons","permalink":"/tr/docs/scripting/functions/AllowInteriorWeapons"},"next":{"title":"AllowPlayerTeleport","permalink":"/tr/docs/scripting/functions/AllowPlayerTeleport"}}'),l=n("85893"),i=n("50065");let t={title:"AllowNickNameCharacter",sidebar_label:"AllowNickNameCharacter",description:"Bir karakterin takma adlarda kullan\u0131lmas\u0131na izin verir.",tags:[]},c=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarnTR:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnTR",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(r.p,{children:"Bir karakterin takma adlarda kullan\u0131lmas\u0131na izin verir."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"\u0130sim"}),(0,l.jsx)(r.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"character"}),(0,l.jsx)(r.td,{children:"\u0130zin verilecek veya izin verilmeyecek karakter."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["bool",":allow"]}),(0,l.jsx)(r.td,{children:"true - \u0130zin ver, false - \u0130zin verme"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(r.p,{children:"Bu fonksiyon belirli bir de\u011Fer d\xf6nd\xfcrmez."}),"\n",(0,l.jsx)(r.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // * karakterine izin ver\n    AllowNickNameCharacter('[', false); // [ karakterine izin verme\n    AllowNickNameCharacter(']', false); // ] karakterine izin verme\n\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Bir takma ad\u0131n ge\xe7erli olup olmad\u0131\u011F\u0131n\u0131 kontrol eder."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Bir oyuncunun ad\u0131n\u0131 ayarlar."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Bir oyuncunun ad\u0131n\u0131 al\u0131r."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return t}});var a=n(67294);let l={},i=a.createContext(l);function t(e){let r=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);
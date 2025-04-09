"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19036"],{37610:function(n,e,a){a.r(e),a.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerSpawn","title":"OnPlayerSpawn","description":"Bu fonksiyon, oyuncu do\u011Fdu\u011Funda \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSpawn","permalink":"/tr/docs/scripting/callbacks/OnPlayerSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerSpawn","sidebar_label":"OnPlayerSpawn","description":"Bu fonksiyon, oyuncu do\u011Fdu\u011Funda \xe7a\u011Fr\u0131l\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSelectedMenuRow","permalink":"/tr/docs/scripting/callbacks/OnPlayerSelectedMenuRow"},"next":{"title":"OnPlayerStateChange","permalink":"/tr/docs/scripting/callbacks/OnPlayerStateChange"}}'),l=a("85893"),t=a("50065");let i={title:"OnPlayerSpawn",sidebar_label:"OnPlayerSpawn",description:"Bu fonksiyon, oyuncu do\u011Fdu\u011Funda \xe7a\u011Fr\u0131l\u0131r.",tags:["player"]},s=void 0,c={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(e.p,{children:"Bu fonksiyon, oyuncu do\u011Fdu\u011Funda \xe7a\u011Fr\u0131l\u0131r.(\xf6r. SpawnPlayer'i \xe7al\u0131\u015Ft\u0131rd\u0131ktan sonra)"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Parametre"}),(0,l.jsx)(e.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"playerid"}),(0,l.jsx)(e.td,{children:"Do\u011Fan oyuncunun ID'si."})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(e.p,{children:"0 - Di\u011Fer filterscript komutlar\u0131n\u0131n bu \xe7a\u011Fr\u0131y\u0131 almas\u0131n\u0131 \xf6nleyecektir."}),"\n",(0,l.jsx)(e.p,{children:"1 - Bu geri \xe7a\u011Fr\u0131n\u0131n sonraki filterscript komutuna aktar\u0131laca\u011F\u0131n\u0131 belirtir."}),"\n",(0,l.jsx)(e.p,{children:"Filterscript komutlar\u0131nda her zaman ilk olarak \xe7a\u011F\u0131r\u0131l\u0131r."}),"\n",(0,l.jsx)(e.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    new PlayerName[MAX_PLAYER_NAME],\n    string[40];\n    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));\n    format(string, sizeof(string), "%s adl\u0131 ki\u015Fi ba\u015Far\u0131yla do\u011Fdu.", PlayerName);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(e.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"Oyuncu spawn olduktan sonra bazen $100 oyuncunun \xfczerinden alabilir."})}),"\n",(0,l.jsx)(e.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/SpawnPlayer",children:"SpawnPlayer"}),": Oyuncuyu do\u011Fmaya zorlama."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),": Bir s\u0131n\u0131f ekleme."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/SetSpawnInfo",children:"SetSpawnInfo"}),": Oyuncunun do\u011Fma bilgilerini d\xfczenleyin."]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return s},a:function(){return i}});var r=a(67294);let l={},t=r.createContext(l);function i(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);
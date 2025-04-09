"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60830"],{65339:function(n,e,l){l.r(e),l.d(e,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>t});var i=JSON.parse('{"id":"scripting/functions/AddPlayerClassEx","title":"AddPlayerClassEx","description":"Bu i\u015Flev, bir tak\u0131m parametresi eklenmesiyle birlikte AddPlayerClass i\u015Fleviyle tamamen ayn\u0131d\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AddPlayerClassEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddPlayerClassEx","permalink":"/tr/docs/scripting/functions/AddPlayerClassEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddPlayerClassEx.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AddPlayerClassEx","sidebar_label":"AddPlayerClassEx","description":"Bu i\u015Flev, bir tak\u0131m parametresi eklenmesiyle birlikte AddPlayerClass i\u015Fleviyle tamamen ayn\u0131d\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AddPlayerClass","permalink":"/tr/docs/scripting/functions/AddPlayerClass"},"next":{"title":"AddServerRule","permalink":"/tr/docs/scripting/functions/AddServerRule"}}'),r=l("85893"),a=l("50065");let s={title:"AddPlayerClassEx",sidebar_label:"AddPlayerClassEx",description:"Bu i\u015Flev, bir tak\u0131m parametresi eklenmesiyle birlikte AddPlayerClass i\u015Fleviyle tamamen ayn\u0131d\u0131r.",tags:["player"]},t=void 0,d={},c=[{value:"A\xe7\u0131klamalar",id:"a\xe7\u0131klamalar",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function o(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"a\xe7\u0131klamalar",children:"A\xe7\u0131klamalar"}),"\n",(0,r.jsx)(e.p,{children:"Bu i\u015Flev, bir tak\u0131m parametresi eklenmesiyle birlikte AddPlayerClass i\u015Fleviyle tamamen ayn\u0131d\u0131r."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u0130sim"}),(0,r.jsx)(e.th,{children:"A\xe7\u0131klama"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"teamid"}),(0,r.jsx)(e.td,{children:"Oyuncunun do\u011Fmas\u0131n\u0131 istedi\u011Finiz tak\u0131m."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"modelid"}),(0,r.jsx)(e.td,{children:"Oyuncunun kaplad\u0131\u011F\u0131 deri."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":spawn_x"]}),(0,r.jsx)(e.td,{children:"S\u0131n\u0131f\u0131n do\u011Fma konumunun X koordinat\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":spawn_y"]}),(0,r.jsx)(e.td,{children:"S\u0131n\u0131f\u0131n do\u011Fma konumunun Y koordinat\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":spawn_z"]}),(0,r.jsx)(e.td,{children:"S\u0131n\u0131f\u0131n do\u011Fma konumunun Z koordinat\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":z_angle"]}),(0,r.jsx)(e.td,{children:"Oyuncunun do\u011Fduktan sonra bakaca\u011F\u0131 y\xf6n."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon1"}),(0,r.jsx)(e.td,{children:"Oyuncunun ilk silah\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon1_ammo"}),(0,r.jsx)(e.td,{children:"\u0130lk m\xfchimmat."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon2"}),(0,r.jsx)(e.td,{children:"Oyuncunun ikinci silah\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon2_ammo"}),(0,r.jsx)(e.td,{children:"\u0130kinci silah m\xfchimmat miktar\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon3"}),(0,r.jsx)(e.td,{children:"Oyuncunun \xfc\xe7\xfcnc\xfc silah\u0131."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"weapon3_ammo"}),(0,r.jsx)(e.td,{children:"\xdc\xe7\xfcnc\xfc silah m\xfchimmat miktar\u0131."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,r.jsx)(e.p,{children:"Yeni eklenen s\u0131n\u0131f\u0131n kimli\u011Fi."}),"\n",(0,r.jsx)(e.p,{children:"319 s\u0131n\u0131f s\u0131n\u0131r\u0131na (320) ula\u015F\u0131ld\u0131ysa. M\xfcmk\xfcn olan en y\xfcksek s\u0131n\u0131f kimli\u011Fi 319'dir."}),"\n",(0,r.jsx)(e.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Oyuncular iki farkl\u0131 \u015Fekilde do\u011Fabilir:\n    // CJ Skin (ID 0) in team 1.\n    // The Truth skin (ID 1) in team 2.\n    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ\n    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"notlar",children:"Notlar"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"Maksimum s\u0131n\u0131f kimli\u011Fi 319'dir (0'dan ba\u015Flayarak toplam 320 s\u0131n\u0131f). Bu s\u0131n\u0131ra ula\u015F\u0131ld\u0131\u011F\u0131nda, eklenen daha fazla s\u0131n\u0131f ID 319'nin yerini al\u0131r."})}),"\n",(0,r.jsx)(e.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/tr/docs/scripting/functions/AddPlayerClass",children:"AddPlayerClass"}),": S\u0131n\u0131f ekleyin."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"SetSpawnInfo.md",children:"SetSpawnInfo"}),": Bir oyuncunun do\u011Fma ayar\u0131n\u0131 yap\u0131n."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"SetPlayerTeam.md",children:"SetPlayerTeam"}),": Bir oyuncunun tak\u0131m\u0131n\u0131 belirleyin."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"SetPlayerSkin.md",children:"SetPlayerSkin"}),": Bir oyuncunun cildini ayarlay\u0131n."]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},50065:function(n,e,l){l.d(e,{Z:function(){return t},a:function(){return s}});var i=l(67294);let r={},a=i.createContext(r);function s(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);
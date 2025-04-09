"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36843"],{31751:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/CreateExplosionForPlayer","title":"CreateExplosionForPlayer","description":"Tek bir oyuncunun g\xf6rd\xfc\u011F\xfc patlama olu\u015Fturma.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/CreateExplosionForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosionForPlayer","permalink":"/tr/docs/scripting/functions/CreateExplosionForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateExplosionForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"CreateExplosionForPlayer","sidebar_label":"CreateExplosionForPlayer","description":"Tek bir oyuncunun g\xf6rd\xfc\u011F\xfc patlama olu\u015Fturma.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosion","permalink":"/tr/docs/scripting/functions/CreateExplosion"},"next":{"title":"CreateMenu","permalink":"/tr/docs/scripting/functions/CreateMenu"}}'),l=a("85893"),t=a("50065");let i={title:"CreateExplosionForPlayer",sidebar_label:"CreateExplosionForPlayer",description:"Tek bir oyuncunun g\xf6rd\xfc\u011F\xfc patlama olu\u015Fturma.",tags:["player"]},o=void 0,s={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Tek bir oyuncunun g\xf6rd\xfc\u011F\xfc patlama olu\u015Fturma. Bu, patlamalar\u0131 di\u011Fer oyunculardan izole etmek veya yaln\u0131zca belirli sanal d\xfcnyalarda g\xf6r\xfcnmelerini sa\u011Flamak i\xe7in kullan\u0131labilir."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Patlamay\u0131 g\xf6recek oyuncu ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":X"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015Faca\u011F\u0131 X koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Y"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015Faca\u011F\u0131 Y koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Z"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015Faca\u011F\u0131 Z koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"Olu\u015Facak patlaman\u0131n t\xfcr\xfc."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Radius"]}),(0,l.jsx)(n.td,{children:"Olu\u015Facak patlaman\u0131n yar\u0131\xe7ap\u0131."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"Fonksiyon, oyuncu ID'si, patlama t\xfcr\xfc veya patlaman\u0131n yar\u0131\xe7ap\u0131 ge\xe7ersiz olsa bile her zaman 1 olarak d\xf6nd\xfcr\xfcl\xfcr."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'if (strcmp(cmdtext, "/burnme", true) == 0)\n{\n    new Float: playerPos[3];\n    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);\n    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Bir oyuncu maksimum 10 tane patlama g\xf6rebilir."})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreateExplosion",children:"CreateExplosion"}),": Patlama olu\u015Fturma."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var r=a(67294);let l={},t=r.createContext(l);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
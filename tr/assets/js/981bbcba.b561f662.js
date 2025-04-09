"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70465"],{34592:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Bir SendClientCheck iste\u011Fi tamamland\u0131\u011F\u0131nda bu geri \xe7a\u011F\u0131rma \xe7a\u011Fr\u0131l\u0131r","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/tr/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"Bir SendClientCheck iste\u011Fi tamamland\u0131\u011F\u0131nda bu geri \xe7a\u011F\u0131rma \xe7a\u011Fr\u0131l\u0131r","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/tr/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/tr/docs/scripting/callbacks/OnClientMessage"}}'),l=r("85893"),t=r("50065");let a={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"Bir SendClientCheck iste\u011Fi tamamland\u0131\u011F\u0131nda bu geri \xe7a\u011F\u0131rma \xe7a\u011Fr\u0131l\u0131r",tags:[]},s=void 0,c={},d=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bir SendClientCheck iste\u011Fi tamamland\u0131\u011F\u0131nda bu geri \xe7a\u011F\u0131rma \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Paramtre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Kontrol edilen oyuncunun ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"actionid"}),(0,l.jsx)(n.td,{children:"Ger\xe7ekle\u015Ftirilen kontrol t\xfcr\xfc."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"memaddr"}),(0,l.jsx)(n.td,{children:"\u0130stenen adres."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"retndata"}),(0,l.jsx)(n.td,{children:"Kontrol\xfcn sonucu."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"Her zaman ilk olarak filterscriptlerde \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if (actionid == 0x48) // veya 72\n    {\n        print("UYARI: Oyuncu normal bir bilgisayar kullanm\u0131yor gibi g\xf6r\xfcn\xfcyor!");\n        Kick(playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.strong,{children:["SA",":MP"," Sunucusu"]}),": Bu geri \xe7a\u011F\u0131rma yaln\u0131zca bir filterscript i\xe7indeyken \xe7a\u011Fr\u0131l\u0131r."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Open Multiplayer Sunucusu"}),": Bu geri \xe7a\u011F\u0131rma bir oyun modu / filterscript i\xe7inde normal \u015Fekilde \xe7al\u0131\u015F\u0131r."]})]}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsx)(n.p,{children:"A\u015Fa\u011F\u0131daki fonksiyon bu geri \xe7a\u011F\u0131rma ile bir \u015Fekilde ili\u015Fkili oldu\u011Fu i\xe7in yararl\u0131 olabilir."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": \u0130stemcide bir bellek kontrol\xfc ger\xe7ekle\u015Ftirin."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var i=r(67294);let l={},t=i.createContext(l);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
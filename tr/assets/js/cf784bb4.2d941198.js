"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["90339"],{11195:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>l,assets:()=>o,toc:()=>s,contentTitle:()=>t});var l=JSON.parse('{"id":"scripting/functions/AddCharModel","title":"AddCharModel","description":"\u0130ndirmek i\xe7in yeni bir \xf6zel karakter modeli ekler.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AddCharModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddCharModel","permalink":"/tr/docs/scripting/functions/AddCharModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddCharModel.md","tags":[],"version":"current","frontMatter":{"title":"AddCharModel","sidebar_label":"AddCharModel","description":"\u0130ndirmek i\xe7in yeni bir \xf6zel karakter modeli ekler.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleStreamOut","permalink":"/tr/docs/scripting/callbacks/OnVehicleStreamOut"},"next":{"title":"AddMenuItem","permalink":"/tr/docs/scripting/functions/AddMenuItem"}}'),i=a("85893"),r=a("50065");let d={title:"AddCharModel",sidebar_label:"AddCharModel",description:"\u0130ndirmek i\xe7in yeni bir \xf6zel karakter modeli ekler.",tags:[]},t=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Bu i\u015Flev SA-MP 0.3.DL R1'e eklenmi\u015Ftir ve \xf6nceki s\xfcr\xfcmlerde \xe7al\u0131\u015Fmayacakt\u0131r!"})}),"\n",(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"\u0130ndirmek i\xe7in yeni bir \xf6zel karakter modeli ekler. Model dosyalar\u0131 oynat\u0131c\u0131n\u0131n belgelerinde saklan\u0131r. Belgelerim\\Gta San Andreas User Files\\SAMP\\cache | \u0130sim | A\xe7\u0131klama | | ------- | -------------------------------------------------------------------------------------------------------------- | | baseid | Kullan\u0131lacak temel cilt modeli kimli\u011Fi. (karakterin ve orijinal karakterin ne zaman kullan\u0131laca\u011F\u0131) | | newid | \"\xd6ncesinde, yeni model ID'leri 20000 ve 30000 arasinda (10000 slot) de\u011Fi\u015Fiklik g\xf6stermekteydi. | | dffname | Varsay\u0131lan olarak modeller sunucu klas\xf6r\xfcnde bulunan .dff modeli \xe7arp\u0131\u015Fma dosyas\u0131n\u0131n ad\u0131 (\xe7al\u0131\u015Fma yolu ayar\u0131). | | txdname | Modeller sunucu klas\xf6r\xfcnde varsay\u0131lan olarak bulunan .txd model kaplama dosyas\u0131n\u0131n ad\u0131 (\xe7al\u0131\u015Fma yolu ayar\u0131). |"}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"1: \u0130\u015Flev ba\u015Far\u0131yla y\xfcr\xfct\xfcld\xfc."}),"\n",(0,i.jsx)(n.p,{children:"0: \u0130\u015Flev y\xfcr\xfct\xfclemedi."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\n    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\nAddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Bunun i\u015Fe yaramas\u0131 i\xe7in kullan\u0131labilir resmin \xf6ncelikle sunucu ayarlar\u0131nda etkinle\u015Ftirilmesi gerekir."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u015Eu anda bu fonksiyonu ne zaman arayabilece\u011Finiz konusunda herhangi bir k\u0131s\u0131tlama yoktur, ancak OnFilterScriptInit/OnGameModeInit i\xe7inde aramaman\u0131z durumunda, halihaz\u0131rda sunucuda bulunan baz\u0131 oyuncular\u0131n modelleri indirmemi\u015F olma riskini \xe7al\u0131\u015Ft\u0131rd\u0131\u011F\u0131n\u0131z\u0131 unutmay\u0131n."})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerSkin.md",children:"SetPlayerSkin"}),": Bir oyuncunun cildini ayarlay\u0131n."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return d}});var l=a(67294);let i={},r=l.createContext(i);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
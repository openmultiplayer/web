"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85333"],{94969:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>l,assets:()=>s,toc:()=>o,contentTitle:()=>t});var l=JSON.parse('{"id":"scripting/functions/AddSimpleModelTimed","title":"AddSimpleModelTimed","description":"\u0130ndirmek i\xe7in yeni bir basit nesne modeli ekler.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AddSimpleModelTimed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModelTimed","permalink":"/tr/docs/scripting/functions/AddSimpleModelTimed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddSimpleModelTimed.md","tags":[],"version":"current","frontMatter":{"title":"AddSimpleModelTimed","sidebar_label":"AddSimpleModelTimed","description":"\u0130ndirmek i\xe7in yeni bir basit nesne modeli ekler.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddSimpleModel","permalink":"/tr/docs/scripting/functions/AddSimpleModel"},"next":{"title":"AddStaticPickup","permalink":"/tr/docs/scripting/functions/AddStaticPickup"}}'),a=i("85893"),r=i("50065");let d={title:"AddSimpleModelTimed",sidebar_label:"AddSimpleModelTimed",description:"\u0130ndirmek i\xe7in yeni bir basit nesne modeli ekler.",tags:[]},t=void 0,s={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Bu i\u015Flev SA-MP 0.3.DL R1'e eklenmi\u015Ftir ve \xf6nceki s\xfcr\xfcmlerde \xe7al\u0131\u015Fmayacakt\u0131r!"})}),"\n",(0,a.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,a.jsx)(n.p,{children:"\u0130ndirmek i\xe7in yeni bir basit nesne modeli ekler. Model dosyalar\u0131 oynat\u0131c\u0131n\u0131n belgelerinde saklan\u0131r. Belgelerim\\Gta San Andreas User Files\\SAMP\\cache'te, CRC bi\xe7iminde dosya ad\u0131nda Sunucu IP'si ve Ba\u011Flant\u0131 Noktas\u0131 klas\xf6r\xfc alt\u0131nda saklan\u0131r."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u0130sim"}),(0,a.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"virtualworld"}),(0,a.jsx)(n.td,{children:"Modeli adresinde kullan\u0131labilir hale getirmek i\xe7in sanal d\xfcnya kimli\u011Fi. T\xfcm d\xfcnyalar i\xe7in -1 kullan\u0131n."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"baseid"}),(0,a.jsx)(n.td,{children:"Kullan\u0131lacak temel nesne model kimli\u011Fi (indirme ba\u015Far\u0131s\u0131z oldu\u011Funda kullan\u0131lacak orijinal nesne)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"newid"}),(0,a.jsx)(n.td,{children:"Yeni obje model kimli\u011Fi daha sonra CreateObject veya CreatePlayerObject ile -1000 ile -30000 aras\u0131nda (29000 yuva) s\u0131raland\u0131."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"dffname"}),(0,a.jsx)(n.td,{children:"Modellerde bulunan .dff modeli \xe7arp\u0131\u015Fma dosyas\u0131n\u0131n ad\u0131 varsay\u0131lan olarak sunucu klas\xf6r\xfc (\xe7al\u0131\u015Fma yolu ayar\u0131)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"txdname"}),(0,a.jsx)(n.td,{children:"Modeller sunucu klas\xf6r\xfcnde varsay\u0131lan olarak bulunan .txd model kaplama dosyas\u0131n\u0131n ad\u0131 (\xe7al\u0131\u015Fma yolu ayar\u0131)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timeon"}),(0,a.jsx)(n.td,{children:"D\xfcnya oyun zaman\u0131 (saat) bu nesne g\xf6r\xfcn\xfcr."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timeoff"}),(0,a.jsx)(n.td,{children:"D\xfcnya oyun zaman\u0131 (saat) bu nesne kaybolacak."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,a.jsx)(n.p,{children:"1: \u0130\u015Flev ba\u015Far\u0131yla y\xfcr\xfct\xfcld\xfc."}),"\n",(0,a.jsx)(n.p,{children:"0: \u0130\u015Flev y\xfcr\xfct\xfclemedi."}),"\n",(0,a.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18); // Bu duvar yaln\u0131zca 09:00 - 18:00 saatleri aras\u0131nda i\u015Fler.\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Sanal d\xfcnya ayarland\u0131\u011F\u0131nda bunun \xe7al\u0131\u015Fmas\u0131 i\xe7in \xf6ncelikle sunucu ayarlar\u0131nda userartwork etkinle\u015Ftirilmesi gerekir; oynat\u0131c\u0131 belirli bir d\xfcnyaya girdi\u011Finde modeller indirilir. :::"}),(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"\u015Eu anda bu fonksiyonu ne zaman arayabilece\u011Finiz konusunda herhangi bir k\u0131s\u0131tlama yoktur, ancak OnFilterScriptInit/OnGameModeInit i\xe7inde aramaman\u0131z durumunda, halihaz\u0131rda sunucuda bulunan baz\u0131 oyuncular\u0131n modelleri indirmemi\u015F olma riskini \xe7al\u0131\u015Ft\u0131rd\u0131\u011F\u0131n\u0131z\u0131 unutmay\u0131n."})})]}),"\n",(0,a.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tr/docs/scripting/callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Bir oyuncu \xf6zel modelleri indirmeyi bitirdi\u011Finde \xe7a\u011Fr\u0131l\u0131r."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return d}});var l=i(67294);let a={},r=l.createContext(a);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
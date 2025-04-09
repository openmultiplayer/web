"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62053"],{37814:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>s,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/CreateActor","title":"CreateActor","description":"Statik akt\xf6r olu\u015Fturma.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/CreateActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateActor","permalink":"/tr/docs/scripting/functions/CreateActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateActor.md","tags":[],"version":"current","frontMatter":{"title":"CreateActor","sidebar_label":"CreateActor","description":"Statik akt\xf6r olu\u015Fturma.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Create3DTextLabel","permalink":"/tr/docs/scripting/functions/Create3DTextLabel"},"next":{"title":"CreateExplosion","permalink":"/tr/docs/scripting/functions/CreateExplosion"}}'),l=n("85893"),a=n("50065");let i={title:"CreateActor",sidebar_label:"CreateActor",description:"Statik akt\xf6r olu\u015Fturma.",tags:[]},o=void 0,c={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarnTR:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnTR",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(r.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(r.p,{children:"Statik 'akt\xf6r' olu\u015Fturun. Akt\xf6rler NPC'lere benzer, ancak i\u015Flevleri s\u0131n\u0131rl\u0131d\u0131r. Akt\xf6rler oyuncu slotlar\u0131n\u0131 doldurmazlar."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Parametre"}),(0,l.jsx)(r.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"modelid"}),(0,l.jsx)(r.td,{children:"Akt\xf6re ait olacak model (Skin) ID'si."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"x"}),(0,l.jsx)(r.td,{children:"Akt\xf6r\xfcn olu\u015Fturulaca\u011F\u0131 X koordinat\u0131."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"y"}),(0,l.jsx)(r.td,{children:"Akt\xf6r\xfcn olu\u015Fturulaca\u011F\u0131 Y koordinat\u0131."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"z"}),(0,l.jsx)(r.td,{children:"Akt\xf6r\xfcn olu\u015Fturulaca\u011F\u0131 Z koordinat\u0131."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"Rotation"}),(0,l.jsx)(r.td,{children:"Akt\xf6re ait olan a\xe7\u0131."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(r.p,{children:"1: Akt\xf6r ba\u015Far\u0131yla olu\u015Fturuldu. (ID 0'dan ba\u015Flar)."}),"\n",(0,l.jsx)(r.p,{children:"0: Akt\xf6r olu\u015Fturulamad\u0131. (E\u011Fer akt\xf6r limitine (1000) ula\u015F\u0131l\u0131rsa)"}),"\n",(0,l.jsx)(r.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"new gActorCJ;\n\npublic OnGameModeInit()\n{\n    // Akt\xf6r\xfcm\xfcz\xfc harita \xfczerinde Blueberry Acress B\xf6lgesi \xfczerinde olu\u015Fturuyoruz.\n    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);\n}\n\npublic OnGameModeExit()\n{\n    // Sevgili CJ'i sildik. (CJ)\n    DestroyActor(gActorCJ);\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsx)(r.p,{children:"Akt\xf6rler, kasiyerler ve barmenler gibi sadece bir yerde duracak \u015Fekilde tasarlanm\u0131\u015Ft\u0131r. ApplyActorAnimation kullanarak (d\xf6ng\xfc veya bir kez) animasyonlar ger\xe7ekle\u015Ftirebilir."})}),"\n",(0,l.jsx)(r.admonition,{type:"warning",children:(0,l.jsx)(r.p,{children:"Akt\xf6rler NPC'lerden tamamen farkl\u0131d\u0131r. Sunucunun slotlar\u0131n\u0131 KULLANMAZLAR ve NPC'ler gibi KULLANILMAZLAR.\nAkt\xf6rler 1000 (MAX_ACTORS) ile s\u0131n\u0131rl\u0131d\u0131r. Ara\xe7lar ile itilebilirler, ayr\u0131ca konumlar\u0131na geri koymak i\xe7inde timer kullan\u0131labilir.\n0.3.7 R2 s\xfcr\xfcm\xfc ve sonraki s\xfcr\xfcmlerde akt\xf6rler dokunulmaz (hasar almaz) olarak ayarlanabilir."})}),"\n",(0,l.jsx)(r.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"DestroyActor",children:"DestroyActor"}),": Olu\u015Fturdu\u011Funuz akt\xf6r\xfc silme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetActorPos",children:"SetActorPos"}),": Akt\xf6r\xfcn harita \xfczerindeki pozisyonunu d\xfczenleme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetActorPos",children:"GetActorPos"}),": Akt\xf6r\xfcn harita \xfczerindeki pozisyonunu kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetActorFacingAngle",children:"SetActorFacingAngle"}),": Akt\xf6r\xfcn a\xe7\u0131s\u0131n\u0131 d\xfczenleme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetActorFacingAngle",children:"GetActorFacingAngle"}),": Akt\xf6r\xfcn a\xe7\u0131s\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetActorVirtualWorld",children:"SetActorVirtualWorld"}),": Akt\xf6r\xfcn sanal d\xfcnya de\u011Ferini d\xfczenleme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetActorVirtualWorld",children:"GetActorVirtualWorld"}),": Akt\xf6r\xfcn sanal d\xfcnya de\u011Ferini kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Akt\xf6re animasyon uygulatma."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"ClearActorAnimations",children:"ClearActorAnimations"}),": Akt\xf6r\xfcn animasyonunu durdurma."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerCameraTargetActor",children:"GetPlayerCameraTargetActor"}),": Bir oyuncunun bakt\u0131\u011F\u0131 akt\xf6r ID'sini \xe7ekme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsActorStreamedIn",children:"IsActorStreamedIn"}),": Oyuncu i\xe7in akt\xf6r\xfcn olup olmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Akt\xf6r\xfcn can de\u011Ferini d\xfczenleme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetActorHealth",children:"GetActorHealth"}),": Akt\xf6r\xfcn cande\u011Ferini kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetActorInvulnerable",children:"SetActorInvulnerable"}),": Akt\xf6r\xfcn dokunulmazl\u0131\u011F\u0131n\u0131 d\xfczenleme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsActorInvulnerable",children:"IsActorInvulnerable"}),": Akt\xf6r\xfcn dokunulmazl\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidActor",children:"IsValidActor"}),": Akt\xf6r\xfcn olu\u015Fturulup olu\u015Fturulmad\u0131\u011F\u0131n\u0131 kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetActorPoolSize",children:"GetActorPoolSize"}),": Sunucuda olu\u015Fturulan en son akt\xf6r\xfc kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerTargetActor",children:"GetPlayerTargetActor"}),": Oyuncunun hedef ald\u0131\u011F\u0131 (silahla) akt\xf6r\xfcn ID'sini kontrol etme."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"../callbacks/OnActorStreamIn",children:"OnActorStreamIn"}),": Bu callback, bir akt\xf6r ba\u015Fka bir oyuncunun ak\u0131\u015F alan\u0131na girdi\u011Finde tetiklenir."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"../callbacks/OnActorStreamOut",children:"OnActorStreamOut"}),": Bu callback, bir akt\xf6r oyuncunun ak\u0131\u015F alan\u0131ndan ayr\u0131ld\u0131\u011F\u0131nda tetiklenir."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"../callbacks/OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"}),": Bu callback, bir oyuncu bir NPC'ye hasar verdi\u011Finde \xe7a\u011F\u0131r\u0131l\u0131r."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var t=n(67294);let l={},a=t.createContext(l);function i(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);
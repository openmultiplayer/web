"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85310"],{60284:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/AddStaticVehicleEx","title":"AddStaticVehicleEx","description":"Ekstra parametre(ler) girerek statik ara\xe7 olu\u015Fturman\u0131z\u0131 sa\u011Flar.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicleEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicleEx","permalink":"/tr/docs/scripting/functions/AddStaticVehicleEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticVehicleEx.md","tags":[],"version":"current","frontMatter":{"title":"AddStaticVehicleEx","sidebar_label":"AddStaticVehicleEx","description":"Ekstra parametre(ler) girerek statik ara\xe7 olu\u015Fturman\u0131z\u0131 sa\u011Flar.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddStaticVehicle","permalink":"/tr/docs/scripting/functions/AddStaticVehicle"},"next":{"title":"AddVehicleComponent","permalink":"/tr/docs/scripting/functions/AddVehicleComponent"}}'),t=a("85893"),i=a("50065");let l={title:"AddStaticVehicleEx",sidebar_label:"AddStaticVehicleEx",description:"Ekstra parametre(ler) girerek statik ara\xe7 olu\u015Fturman\u0131z\u0131 sa\u011Flar.",tags:[]},s=void 0,d={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,t.jsx)(n.p,{children:"Oyun modunda oyuncular i\xe7in modeli daha \xf6nceden y\xfcklenmi\u015F olan statik ara\xe7 olu\u015Fturman\u0131z\u0131 sa\u011Flar. AddStaticVehicle fonksiyonundan tek fark\u0131 vard\u0131r: s\xfcr\xfcc\xfc arac\u0131 bo\u015F b\u0131rakt\u0131ktan sonra girdi\u011Finiz parametre sayesinde arac\u0131n ne kadar s\xfcre sonra respawn olaca\u011F\u0131n\u0131 ayarlayabilirsiniz."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u0130sim"}),(0,t.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modelid"}),(0,t.jsx)(n.td,{children:"ara\xe7 modeli."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":spawn_X"]}),(0,t.jsx)(n.td,{children:"arac\u0131n spawn olaca\u011F\u0131 X koordinat\u0131."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":spawn_Y"]}),(0,t.jsx)(n.td,{children:"arac\u0131n spawn olaca\u011F\u0131 Y koordinat\u0131."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":spawn_Z"]}),(0,t.jsx)(n.td,{children:"arac\u0131n spawn olaca\u011F\u0131 Z koordinat\u0131."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":z_angle"]}),(0,t.jsx)(n.td,{children:"arac\u0131n spawn oldu\u011Funda bakaca\u011F\u0131 rotasyon."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"color1"}),(0,t.jsx)(n.td,{children:"birinci renk."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"color2"}),(0,t.jsx)(n.td,{children:"ikinci renk."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"respawn_delay"}),(0,t.jsx)(n.td,{children:"respawn delay s\xfcresi. (ka\xe7 saniye sonra re-spawn olacak (saniye bazl\u0131))"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"addsiren  (opsiyonel)"}),(0,t.jsx)(n.td,{children:"siren de\u011Feri. (0 yok, 1 var)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,t.jsx)(n.p,{children:"Olu\u015Fturulan arac\u0131n ID'si: (1 - MAX_VEHICLES) ara\xe7 olu\u015Fturuldu."}),"\n",(0,t.jsx)(n.p,{children:"Ge\xe7ersiz ara\xe7 ID'si (65535): ara\xe7 olu\u015Fturulamad\u0131. (hatal\u0131 model ya da ara\xe7 limiti a\u015F\u0131ld\u0131\u011F\u0131 i\xe7in)."}),"\n",(0,t.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Oyuna bo\u015F b\u0131rak\u0131ld\u0131ktan 15 saniye sonra re-spawn olacak bir hydra ekle (520 model)\n    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);\n\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/tr/docs/scripting/functions/AddStaticVehicle",children:"AddStaticVehicle"}),": Statik ara\xe7 ekleyin."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CreateVehicle.md",children:"CreateVehicle"}),": Ara\xe7 olu\u015Fturun."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var r=a(67294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
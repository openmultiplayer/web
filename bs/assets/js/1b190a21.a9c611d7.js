"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42884"],{61762:function(e,i,n){n.r(i),n.d(i,{default:()=>c,frontMatter:()=>o,metadata:()=>a,assets:()=>s,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/SetTimerEx","title":"SetTimerEx","description":"Postavlja tajmer za pozivanje funkcije nakon navedenog intervala.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetTimerEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimerEx","permalink":"/bs/docs/scripting/functions/SetTimerEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetTimerEx.md","tags":[],"version":"current","frontMatter":{"title":"SetTimerEx","sidebar_label":"SetTimerEx","description":"Postavlja tajmer za pozivanje funkcije nakon navedenog intervala.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetTimer","permalink":"/bs/docs/scripting/functions/SetTimer"},"next":{"title":"SetVehicleAngularVelocity","permalink":"/bs/docs/scripting/functions/SetVehicleAngularVelocity"}}'),t=n("85893"),r=n("50065");let o={title:"SetTimerEx",sidebar_label:"SetTimerEx",description:"Postavlja tajmer za pozivanje funkcije nakon navedenog intervala.",tags:[]},l=void 0,s={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function j(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Postavlja tajmer za pozivanje funkcije nakon navedenog intervala. Ova varijanta ('Ex') mo\u017Ee proslijediti parametre (kao npr playerID) funkciji."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"funcname[]"}),(0,t.jsx)(i.td,{children:"Ime javne funkcije koju treba pozvati kada istekne tajmer."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"interval"}),(0,t.jsx)(i.td,{children:"Interval u milisekundama (1 sekunda = 1000 MS)."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"repeating"}),(0,t.jsx)(i.td,{children:"Boolean (true/false (ili 1/0)) koji navodi treba li tajmer pozivati \u200B\u200Bvi\u0161e puta (mo\u017Ee se zaustaviti samo pomo\u0107u KillTimer) ili samo jednom."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"format[]"}),(0,t.jsx)(i.td,{children:"Poseban format koji ozna\u010Dava vrste vrijednosti koje \u0107e tajmer pro\u0107i."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\\ {Float, _}:..."}),(0,t.jsx)(i.td,{children:"Neograni\u010Deni broj argumenata koje treba proslijediti (mora slijediti format naveden u prethodnom parametru)."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"ID tajmera koji je pokrenut. ID-ovi odbrojavanja po\u010Dinju na 1 i nikad se vi\u0161e ne koriste. Ne postoje interne provjere koje bi provjerile jesu li proslije\u0111eni valjani parametri (npr. Trajanje nije minus vrijednost). Y_Less-ov 'fixes2' plugin implementira ove provjere i tako\u0111er zna\u010Dajno pobolj\u0161ava preciznost tajmera, a tako\u0111er dodaje podr\u0161ku za prolazak stringa/niza."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n// EndAntiSpawnKill - funkcija koja \u0107e biti pozvana\n// 5000 - 5000 MS (5 sekundi). Ovo je interval. Tajmer \u0107e se pozvati nakon 5 sekundi.\n// false - Ne ponavlja se. Pozvat \u0107e se samo jednom.\n// "i" - I ozna\u010Dava cijeli broj (cijeli broj). Funkciji prenosimo cijeli broj (ID igra\u010Da).\n// playerid - Vrijednost koju treba proslijediti. Ovo je cijeli broj naveden u prethodnom parametru.\n// Povratni poziv doga\u0111aja (OnPlayerSpawn) - ovdje \u0107emo pokrenuti tajmer\npublic OnPlayerSpawn(playerid)\n{\n    // Anti-Spawnkill (5 sekundi)\n\n    // Postavi im veoma visoke helte tako da ne mogu biti ubijeni\n    SetPlayerHealth(playerid, 999999);\n\n    // Obavijesi ih\n    SendClientMessage(playerid, -1, "Zasticen si od spawn-killa 5 sekundi.");\n\n    // Zapo\u010Dni tajmer od 5 sekundi koji \u0107e zaustaviti Anti-SpawnKill\n    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n}\n\n// Forward (u\u010Dini public) funkcijom kako bi je server mogao \'vidjeti\'\nforward EndAntiSpawnKill(playerid);\n// Tajmer funkcija - kod koji treba izvr\u0161iti kada se pozove tajmer ide ovdje\npublic EndAntiSpawnKill(playerid)\n{\n    // 5 sekundi je pro\u0161lo, tako da mu stavljamo healthe nazad na 100\n    SetPlayerHealth(playerid, 100);\n\n    // Opet ih obavijestimo\n    SendClientMessage(playerid, -1, "Vi\u0161e nisi pod Spawn-kill za\u0161titom");\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Varijable ID-a tajmera trebaju se inicijalizirati na -1 kada mogu kako bi se smanjila mogu\u0107nost slu\u010Dajnog ubijanja ID-a tajmera 0 gre\u0161kom (ili upotrijebite ID tajmera 0 gore na po\u010Detku OnGameModeInit). Intervali tajmera nisu ta\u010Dni (otprilike 25% popusta). Postoje ispravci dostupni ovdje i ovdje. Funkcija koju treba pozvati mora biti javna. To zna\u010Di da se mora proslijediti."})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Postavi tajmer."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Zaustavi tajmer."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CallLocalFunction",children:"CallLocalFunction"}),": Pozovite funkciju u skripti."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CallRemoteFunction",children:"CallRemoteFunction"}),": Pozovite funkciju u bilo kojoj u\u010Ditanoj skripti."]}),"\n"]})]})}function c(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return o}});var a=n(67294);let t={},r=a.createContext(t);function o(e){let i=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);
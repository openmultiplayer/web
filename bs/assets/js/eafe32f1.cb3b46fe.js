"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["45485"],{79246:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/SendPlayerMessageToAll","title":"SendPlayerMessageToAll","description":"Po\u0161alji poruku u ime drugog igra\u010Da svim drugim igra\u010Dima na serveru.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SendPlayerMessageToAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendPlayerMessageToAll","permalink":"/bs/docs/scripting/functions/SendPlayerMessageToAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendPlayerMessageToAll.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SendPlayerMessageToAll","sidebar_label":"SendPlayerMessageToAll","description":"Po\u0161alji poruku u ime drugog igra\u010Da svim drugim igra\u010Dima na serveru.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SendDeathMessageToPlayer","permalink":"/bs/docs/scripting/functions/SendDeathMessageToPlayer"},"next":{"title":"SendPlayerMessageToPlayer","permalink":"/bs/docs/scripting/functions/SendPlayerMessageToPlayer"}}'),a=i("85893"),s=i("50065");let t={title:"SendPlayerMessageToAll",sidebar_label:"SendPlayerMessageToAll",description:"Po\u0161alji poruku u ime drugog igra\u010Da svim drugim igra\u010Dima na serveru.",tags:["player"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(n.p,{children:"Po\u0161alji poruku u ime drugog igra\u010Da svim drugim igra\u010Dima na serveru. Linija \u0107e po\u010Deti sa imenom po\u0161iljaoca u njegovoj boji, prate\u0107i poruku u bijeloj boji."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ime"}),(0,a.jsx)(n.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"senderid"}),(0,a.jsx)(n.td,{children:"ID po\u0161iljatelja. Ako je neva\u017Ee\u0107i, poruka se ne\u0107e poslati."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"const message[]"}),(0,a.jsx)(n.td,{children:"Poruka koja \u0107e biti poslana."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnPlayerText(playerid, text[])\n{\n    // formatiraj poruku da bi sadr\u017Eala njegov ID pored imena\n    new\n        string[128];\n\n    format(string, sizeof(string), \"(%d): %s\", playerid, text);\n    SendPlayerMessageToAll(playerid, string);\n\n    return 0; // return 0 spre\u010Dava slanje originalne poruke\n\n    // Pod pretpostavkom da je 'playerid' 0 i da se igra\u010D zove Tenpenny, Izlaz \u0107e biti 'Tenpenny:(0) <message>'\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Izbjegavajte koristiti specifikatore formata u svojim porukama bez formatiranja poslanog stringa. U suprotnom \u0107e rezultirati padovima."})}),"\n",(0,a.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Prisilite igra\u010Da da po\u0161alje tekst za jednog igra\u010Da."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"SendClientMessageToAll",children:"SendClientMessageToAll"}),": Po\u0161alji poruku svim igra\u010Dima."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../callbacks/OnPlayerText",children:"OnPlayerText"}),": Pozvano kada igra\u010D po\u0161alje poruku putem chata."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return t}});var r=i(67294);let a={},s=r.createContext(a);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
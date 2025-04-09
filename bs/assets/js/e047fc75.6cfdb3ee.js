"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["4445"],{96678:function(e,n,i){i.r(n),i.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/GetConsoleVarAsString","title":"GetConsoleVarAsString","description":"Dobij string vrijednost varijable iz konzole.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetConsoleVarAsString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetConsoleVarAsString","permalink":"/bs/docs/scripting/functions/GetConsoleVarAsString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetConsoleVarAsString.md","tags":[],"version":"current","frontMatter":{"title":"GetConsoleVarAsString","sidebar_label":"GetConsoleVarAsString","description":"Dobij string vrijednost varijable iz konzole.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetConsoleVarAsInt","permalink":"/bs/docs/scripting/functions/GetConsoleVarAsInt"},"next":{"title":"GetCustomModelPath","permalink":"/bs/docs/scripting/functions/GetCustomModelPath"}}'),r=i("85893"),s=i("50065");let o={title:"GetConsoleVarAsString",sidebar_label:"GetConsoleVarAsString",description:"Dobij string vrijednost varijable iz konzole.",tags:[]},a=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(n.p,{children:"Dobij string vrijednost varijable iz konzole."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ime"}),(0,r.jsx)(n.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const varname[]"}),(0,r.jsx)(n.td,{children:"Ime string varijable za dobijanje vrijednosti."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buffer[]"}),(0,r.jsx)(n.td,{children:"Array u koji se pohranjuje vrijednost, proslije\u0111ena referencom."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"len"}),(0,r.jsx)(n.td,{children:"Du\u017Eina stringa koju treba pohraniti."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Du\u017Eina returnanog stringa. 0 ako navedena console varijabla nije string ili ne postoji."}),"\n",(0,r.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new hostname[64];\n    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));\n    printf("Hostname: %s", hostname);\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Kada su filterskripte ili plugini specificirani kao varname, ova funkcija returna samo ime prve specificirane filterskripte ili plugina."})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Upi\u0161ite 'varlist' u konzolu servera da biste prikazali listu dostupnih console varijabli i njihove tipove."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Kori\u0161tenje ove funkcije s bilo \u010Dim drugim osim stringom (integerom, booleanom ili floatom) \u0107e uzrokovati pad va\u0161eg servera. Kori\u0161tenje s nepostoje\u0107om console varijablom tako\u0111er \u0107e uzrokovati pad va\u0161eg servera."})}),"\n",(0,r.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetConsoleVarAsInt",children:"GetConsoleVarAsInt"}),": Dobij cjelobrojnu (integer) vrijednost varijable iz konzole."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetConsoleVarAsBool",children:"GetConsoleVarAsBool"}),": Dobij bool(ean) vrijednost varijable iz konzole."]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(67294);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
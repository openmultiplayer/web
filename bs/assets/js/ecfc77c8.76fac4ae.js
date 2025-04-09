"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39333"],{46008:function(e,i,n){n.r(i),n.d(i,{default:()=>j,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPVarInt","title":"SetPVarInt","description":"Postavi cjelobrojnu player (igra\u010Devu) varijablu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPVarInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPVarInt","permalink":"/bs/docs/scripting/functions/SetPVarInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPVarInt.md","tags":[{"inline":true,"label":"pvar","permalink":"/bs/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"SetPVarInt","sidebar_label":"SetPVarInt","description":"Postavi cjelobrojnu player (igra\u010Devu) varijablu.","tags":["pvar"]},"sidebar":"docsSidebar","previous":{"title":"SetPVarFloat","permalink":"/bs/docs/scripting/functions/SetPVarFloat"},"next":{"title":"SetPVarString","permalink":"/bs/docs/scripting/functions/SetPVarString"}}'),t=n("85893"),a=n("50065");let l={title:"SetPVarInt",sidebar_label:"SetPVarInt",description:"Postavi cjelobrojnu player (igra\u010Devu) varijablu.",tags:["pvar"]},s=void 0,o={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Postavi cjelobrojnu player (igra\u010Devu) varijablu."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"ID igra\u010Da \u010Dija \u0107e player varijabla biti postavljena."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"varname"}),(0,t.jsx)(i.td,{children:"Ime player varijable."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"int_value"}),(0,t.jsx)(i.td,{children:"Cijeli broj za postaviti."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,t.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ili navedeni igra\u010D nije konektovan, ili je ime varijable prazno ili preko 40 karaktera."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'// Postavi GetPlayerMoney vrijednost player varijable nazvane "Money"\nSetPVarInt(playerid, "Money", GetPlayerMoney(playerid));\n// ispisati \u0107e da igra\u010D ima\nprintf("money: %d", GetPVarInt(playerid, "Money"));\n'})}),"\n",(0,t.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Varijable se resetiraju tek nakon \u0161to se pozove OnPlayerDisconnect, tako da su vrijednosti i dalje dostupne u OnPlayerDisconnect."})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Dobij prethodno postavljeni cijeli broj iz igra\u010Deve varijable."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPVarString",children:"SetPVarString"}),": Postavi string za igra\u010Devu varijablu."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPVarString",children:"GetPVarString"}),": Dobij prethodno postavljeni string iz igra\u010Deve varijable."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Postavi float za igra\u010Devu varijablu."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Dobij prethodno postavljeni float iz igra\u010Deve varijable."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DeletePVar",children:"DeletePVar"}),": Ukloni igra\u010Devu varijablu."]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return l}});var r=n(67294);let t={},a=r.createContext(t);function l(e){let i=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);
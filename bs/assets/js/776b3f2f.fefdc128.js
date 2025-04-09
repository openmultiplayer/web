"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39524"],{24798:function(e,t,i){i.r(t),i.d(t,{default:()=>j,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetPlayerHoldingObject","title":"SetPlayerHoldingObject","description":"Pri\u010Dvr\u0161\u0107uje objekat za kost.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerHoldingObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerHoldingObject","permalink":"/bs/docs/scripting/functions/SetPlayerHoldingObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerHoldingObject.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerHoldingObject","sidebar_label":"SetPlayerHoldingObject","description":"Pri\u010Dvr\u0161\u0107uje objekat za kost.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerHealth","permalink":"/bs/docs/scripting/functions/SetPlayerHealth"},"next":{"title":"SetPlayerInterior","permalink":"/bs/docs/scripting/functions/SetPlayerInterior"}}'),r=i("85893"),l=i("50065");let a={title:"SetPlayerHoldingObject",sidebar_label:"SetPlayerHoldingObject",description:"Pri\u010Dvr\u0161\u0107uje objekat za kost.",tags:["player"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(t.p,{children:"Pri\u010Dvr\u0161\u0107uje objekat za kost."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Ime"}),(0,r.jsx)(t.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"ID igra\u010Da za kojeg \u017Eelite prikva\u010Diti objekat."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modelid"}),(0,r.jsx)(t.td,{children:"Model kojeg \u017Eelite koristiti."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bone"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"../resources/boneid",children:"Kost"})," za koju \u017Eelite prikva\u010Diti objekat."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetX"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi X za polo\u017Eaj objekta."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetY"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi Y za polo\u017Eaj objekta."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetZ"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi Z za polo\u017Eaj objekta."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotX"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi X za rotaciju objekta."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotY"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi Y za rotaciju objekta."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotZ"}),(0,r.jsx)(t.td,{children:"(neobavezno) Pomak osi Z za rotaciju objekta."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1 pri uspjehu, 0 pri gre\u0161ci."}),"\n",(0,r.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerHoldingObject(playerid, 1609, 2); // Prikva\u010Di kornja\u010Du za playerid-evu glavu!\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Po igra\u010Du se mo\u017Ee prika\u010Diti samo jedan predmet. Ova je funkcija odvojena od spremi\u0161ta CreateObject / CreatePlayerObject."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["uklonjena je u SA-MP 0.3c. Provjeri ",(0,r.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"})]})}),"\n",(0,r.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopPlayerHoldingObject",children:"StopPlayerHoldingObject"}),": Uklanja prikva\u010Dene objekte."]}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return a}});var n=i(67294);let r={},l=n.createContext(r);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
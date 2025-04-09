"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70370"],{8838:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayerHealth","title":"SetPlayerHealth","description":"Postavi healthe (zdravlje) igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerHealth","permalink":"/bs/docs/scripting/functions/SetPlayerHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerHealth.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerHealth","sidebar_label":"SetPlayerHealth","description":"Postavi healthe (zdravlje) igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerGravity","permalink":"/bs/docs/scripting/functions/SetPlayerGravity"},"next":{"title":"SetPlayerHoldingObject","permalink":"/bs/docs/scripting/functions/SetPlayerHoldingObject"}}'),n=i("85893"),a=i("50065");let l={title:"SetPlayerHealth",sidebar_label:"SetPlayerHealth",description:"Postavi healthe (zdravlje) igra\u010Da.",tags:["player"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Postavi healthe (zdravlje) igra\u010Da."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID igra\u010Da za postaviti healthe."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":health"]}),(0,n.jsx)(t.td,{children:"Vrijednost za postaviti healthe igra\u010Du. Maksimalan health koji se mo\u017Ee prikazati na HUD-u je 100, ali i ve\u0107e vrijednosti su va\u017Ee\u0107e."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,n.jsx)(t.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da navedeni igra\u010D ne postoji."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'// Postavi igra\u010Du healthe na potpuno (full)\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/heal", cmdtext, true))\n    {\n        SetPlayerHealth(playerid, 100.0);\n        return 1;\n    }\n    if (!strcmp("/kill", cmdtext, true))\n    {\n        SetPlayerHealth(playerid, 0.0);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Ako je health/zdravlje igra\u010Da postavljeno na 0 ili minus vrijednost, oni \u0107e odmah umrijeti. Ako je zdravstveno stanje igra\u010Da ispod 10 ili vi\u0161e od 98303, traka zdravlja \u0107e treptati."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Zdravlje se zaokru\u017Euje na cijele brojeve: postavite 50,15, ali \u0107ete dobiti 50,0"})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Doznaj koliko healtha ima igra\u010D."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Otkrijte koliko armora ima igra\u010D."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerArmour",children:"SetPlayerArmour"}),": Postavi armor igra\u010Da."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return l}});var r=i(67294);let n={},a=r.createContext(n);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
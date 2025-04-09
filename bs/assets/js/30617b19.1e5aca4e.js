"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76940"],{5790:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/TogglePlayerClock","title":"TogglePlayerClock","description":"Uklju\u010Dite sat u igri (gornji desni kut) za odre\u0111enog igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/TogglePlayerClock.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TogglePlayerClock","permalink":"/bs/docs/scripting/functions/TogglePlayerClock","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TogglePlayerClock.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"TogglePlayerClock","sidebar_label":"TogglePlayerClock","description":"Uklju\u010Dite sat u igri (gornji desni kut) za odre\u0111enog igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ToggleChatTextReplacement","permalink":"/bs/docs/scripting/functions/ToggleChatTextReplacement"},"next":{"title":"TogglePlayerControllable","permalink":"/bs/docs/scripting/functions/TogglePlayerControllable"}}'),t=n("85893"),l=n("50065");let a={title:"TogglePlayerClock",sidebar_label:"TogglePlayerClock",description:"Uklju\u010Dite sat u igri (gornji desni kut) za odre\u0111enog igra\u010Da.",tags:["player"]},o=void 0,s={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Uklju\u010Dite sat u igri (gornji desni kut) za odre\u0111enog igra\u010Da. Kada je ovo omogu\u0107eno, vrijeme \u0107e napredovati 1 minutu u sekundi. Vrijeme \u0107e se tako\u0111er interpolirati (polako mijenjati tokom vremena) kada se postavi pomo\u0107u SetWeather / SetPlayerWeather."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"Igra\u010D \u010Diji sat \u017Eelite omogu\u0107iti / onemogu\u0107iti"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"toggle"}),(0,t.jsx)(i.td,{children:"1 da ga prika\u017Eete 0 da ga sakrijete. Skriven po zadanim postavkama."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,t.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. The specified player does not exist."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    TogglePlayerClock(playerid, 1); // Prika\u017Ei sat\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Vrijeme \u0107e automatski napredovati za 6 sati kada igra\u010D umre."})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerTime",children:"GetPlayerTime"}),": Dobij vrijeme igra\u010Da."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Postavi igra\u010Du vrijeme."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Postavi globalno vrijeme servera."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return a}});var r=n(67294);let t={},l=r.createContext(t);function a(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);
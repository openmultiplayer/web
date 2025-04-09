"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29426"],{34914:function(e,i,r){r.r(i),r.d(i,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetPlayerTime","title":"GetPlayerTime","description":"Doznajte trenutno igra\u010Devo vrijeme igre.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTime","permalink":"/bs/docs/scripting/functions/GetPlayerTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerTime.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerTime","sidebar_label":"GetPlayerTime","description":"Doznajte trenutno igra\u010Devo vrijeme igre.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTeam","permalink":"/bs/docs/scripting/functions/GetPlayerTeam"},"next":{"title":"GetPlayerTrainSpeed","permalink":"/bs/docs/scripting/functions/GetPlayerTrainSpeed"}}'),t=r("85893"),s=r("50065");let a={title:"GetPlayerTime",sidebar_label:"GetPlayerTime",description:"Doznajte trenutno igra\u010Devo vrijeme igre.",tags:["player"]},l=void 0,o={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Doznajte trenutno igra\u010Devo vrijeme igre. Postavlja SetWorldTime ili vra\u0107a vrijeme igre automatski ako se koristi TogglePlayerClock."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"ID igra\u010Da za dobiti trenutno vrijeme u igri."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"&hour"}),(0,t.jsx)(i.td,{children:"Varijabla za pohraniti sate, proslije\u0111eno referencom."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"&minute"}),(0,t.jsx)(i.td,{children:"Varijabla za pohraniti minute, proslije\u0111eno referencom."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena.."}),"\n",(0,t.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Navedeni igra\u010D ne postoji."}),"\n",(0,t.jsx)(i.p,{children:"Trenutno vrijeme igre pohranjeno je u navedenim varijablama."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'new hour, minutes;\nGetPlayerTime(playerid, hour, minutes);\nif (hour == 13 && minutes == 37)\n{\n    SendClientMessage(playerid, COLOR_WHITE, "Vrijeme je 13:37!");\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerTime",children:"SetPlayerTime"}),": Postavi igra\u010Du vrijeme."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Postavi globalno vrijeme servera."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"TogglePlayerClock",children:"TogglePlayerClock"}),": Uklju\u010Dite / isklju\u010Dite sat u gornjem desnom uglu."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return l},a:function(){return a}});var n=r(67294);let t={},s=n.createContext(t);function a(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
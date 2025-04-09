"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34902"],{83010:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/SetPlayerFacingAngle","title":"SetPlayerFacingAngle","description":"Postavi smjer gledanja igra\u010Da (Z rotacija).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerFacingAngle","permalink":"/bs/docs/scripting/functions/SetPlayerFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerFacingAngle.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerFacingAngle","sidebar_label":"SetPlayerFacingAngle","description":"Postavi smjer gledanja igra\u010Da (Z rotacija).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerDrunkLevel","permalink":"/bs/docs/scripting/functions/SetPlayerDrunkLevel"},"next":{"title":"SetPlayerFightingStyle","permalink":"/bs/docs/scripting/functions/SetPlayerFightingStyle"}}'),r=i("85893"),a=i("50065");let l={title:"SetPlayerFacingAngle",sidebar_label:"SetPlayerFacingAngle",description:"Postavi smjer gledanja igra\u010Da (Z rotacija).",tags:["player"]},s=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(n.p,{children:"Postavi smjer gledanja igra\u010Da (Z rotacija)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ime"}),(0,r.jsx)(n.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID igra\u010Da za postaviti smjer gledanja."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":ang"]}),(0,r.jsx)(n.td,{children:"Ugao pod kojim \u0107e igra\u010D gledati."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(n.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Navedeni igra\u010D ne postoji."}),"\n",(0,r.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"SetPlayerFacingAngle( playerid, 0 ); // Igra\u010D gleda sjeverno\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"         sjever (0)\n            |\n(90) zapad-   -istok (270)      (Dobro za zapamtiti: Nikad ne jedite isjeckanu p\u0161enicu)\n            |\n         south (180)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Uglovi su obrnuti u GTA",":SA","; 90 stepeni bi bilo isto\u010Dno u stvarnom svijetu, ali u GTA",":SA"," 90 stepeni je zapravo zapad. Sjever i Jug su i dalje 0/360 i 180. Da biste to pretvorili, jednostavno napravite kut od 360."]})}),"\n",(0,r.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),": Provjeri gdje igra\u010D gleda."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Postavite poziciju igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var t=i(67294);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
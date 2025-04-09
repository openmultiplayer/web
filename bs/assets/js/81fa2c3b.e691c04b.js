"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["10510"],{80309:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayerVirtualWorld","title":"SetPlayerVirtualWorld","description":"Postavite virtualni svijet igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVirtualWorld","permalink":"/bs/docs/scripting/functions/SetPlayerVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerVirtualWorld","sidebar_label":"SetPlayerVirtualWorld","description":"Postavite virtualni svijet igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerVelocity","permalink":"/bs/docs/scripting/functions/SetPlayerVelocity"},"next":{"title":"SetPlayerWantedLevel","permalink":"/bs/docs/scripting/functions/SetPlayerWantedLevel"}}'),n=t("85893"),l=t("50065");let a={title:"SetPlayerVirtualWorld",sidebar_label:"SetPlayerVirtualWorld",description:"Postavite virtualni svijet igra\u010Da.",tags:["player"]},s=void 0,d={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(i.p,{children:"Postavite virtualni svijet igra\u010Da. Mogu vidjeti samo one igra\u010De i vozila koji su u istom svijetu."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Ime"}),(0,n.jsx)(i.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"ID igra\u010Da za postaviti virutalni svijet."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"worldid"}),(0,n.jsx)(i.td,{children:"ID virtualnog svijeta za ubaciti igra\u010Da."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,n.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da igra\u010D nije konektovan."}),"\n",(0,n.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'if (strcmp(cmdtext, "/world3", true) == 0)\n{\n    SetPlayerVirtualWorld(playerid, 3);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"Zadani virtualni svijet je 0."})}),"\n",(0,n.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": Provjerava u kojem je igra\u010D virtualnom svijetu."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": Postavi virtualni svijet vozila."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return a}});var r=t(67294);let n={},l=r.createContext(n);function a(e){let i=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);
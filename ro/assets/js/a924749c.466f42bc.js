"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80631"],{33222:function(e,i,r){r.r(i),r.d(i,{default:()=>o,frontMatter:()=>n,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnTrailerUpdate","title":"OnTrailerUpdate","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor a trimis o actualizare a trailerului.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnTrailerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnTrailerUpdate","permalink":"/ro/docs/scripting/callbacks/OnTrailerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnTrailerUpdate.md","tags":[],"version":"current","frontMatter":{"title":"OnTrailerUpdate","sidebar_label":"OnTrailerUpdate","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor a trimis o actualizare a trailerului.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnScriptUnloadPlayer","permalink":"/ro/docs/scripting/callbacks/OnScriptUnloadPlayer"},"next":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/ro/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"}}'),a=r("85893"),l=r("50065");let n={title:"OnTrailerUpdate",sidebar_label:"OnTrailerUpdate",description:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor a trimis o actualizare a trailerului.",tags:[]},c=void 0,s={},d=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Examples",id:"examples",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"descriere",children:"Descriere"}),"\n",(0,a.jsx)(i.p,{children:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor a trimis o actualizare a trailerului."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Nume"}),(0,a.jsx)(i.th,{children:"Descriere"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"ID-ul juc\u0103torului care a trimis o actualizare a trailerului"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"vehicleid"}),(0,a.jsx)(i.td,{children:"Trailerul \xeen curs de actualizare"})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,a.jsx)(i.p,{children:"0 - Anuleaz\u0103 orice actualiz\u0103ri ale trailerului pentru a fi trimise altor juc\u0103tori. Actualizarea este \xeenc\u0103 trimis\u0103 juc\u0103torului de actualizare."}),"\n",(0,a.jsx)(i.p,{children:"1 - Proceseaz\u0103 actualizarea trailerului ca de obicei \u0219i o sincronizeaz\u0103 \xeentre to\u021Bi juc\u0103torii."}),"\n",(0,a.jsx)(i.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri."}),"\n",(0,a.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:"public OnTrailerUpdate(playerid, vehicleid)\n{\n    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));\n    return 0;\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"note",children:"Note"}),"\n",(0,a.jsx)(i.admonition,{type:"warning",children:(0,a.jsx)(i.p,{children:"Acest apel invers este apelat foarte frecvent pe secund\u0103 pe remorc\u0103. Ar trebui s\u0103 v\u0103 ab\u021Bine\u021Bi de la implementarea unor calcule intensive sau opera\u021Biuni intensive de scriere/citire a fi\u0219ierelor \xeen acest apel invers."})}),"\n",(0,a.jsx)(i.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/GetVehicleTrailer",children:"GetVehicleTrailer"}),": Verifica\u021Bi ce remorc\u0103 trage un vehicul."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/IsTrailerAttachedToVehicle",children:"IsTrailerAttachedToVehicle"}),": Verifica\u021Bi dac\u0103 o remorc\u0103 este ata\u0219at\u0103 la un vehicul."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/AttachTrailerToVehicle",children:"AttachTrailerToVehicle"}),": Ata\u0219a\u021Bi o remorc\u0103 la un vehicul."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Deta\u0219a\u021Bi o remorc\u0103 de pe un vehicul."]}),"\n"]})]})}function o(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return c},a:function(){return n}});var t=r(67294);let a={},l=t.createContext(a);function n(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
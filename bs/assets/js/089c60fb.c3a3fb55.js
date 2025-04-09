"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89157"],{88238:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/IsVehicleStreamedIn","title":"IsVehicleStreamedIn","description":"Provjerava ako je vozilo u\u010Ditano za igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/IsVehicleStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsVehicleStreamedIn","permalink":"/bs/docs/scripting/functions/IsVehicleStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsVehicleStreamedIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsVehicleStreamedIn","sidebar_label":"IsVehicleStreamedIn","description":"Provjerava ako je vozilo u\u010Ditano za igra\u010Da.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsVehicleSirenEnabled","permalink":"/bs/docs/scripting/functions/IsVehicleSirenEnabled"},"next":{"title":"Kick","permalink":"/bs/docs/scripting/functions/Kick"}}'),a=n("85893"),t=n("50065");let s={title:"IsVehicleStreamedIn",sidebar_label:"IsVehicleStreamedIn",description:"Provjerava ako je vozilo u\u010Ditano za igra\u010Da.",tags:["vehicle"]},l=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(i.p,{children:"Provjerava ako je vozilo u\u010Ditano za igra\u010Da. Samo vozila u blizini su u\u010Ditana (vidljiva) za igra\u010Da."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Ime"}),(0,a.jsx)(i.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"vehicleid"}),(0,a.jsx)(i.td,{children:"ID vozila za provjeru."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"forplayerid"}),(0,a.jsx)(i.td,{children:"ID igra\u010Da za provjeru."})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(i.p,{children:"0: Vozilo nije u\u010Ditano za igra\u010Da, ili funkcija nije uspjela da se izvr\u0161i (igra\u010D i/ili vozilo ne postoje)."}),"\n",(0,a.jsx)(i.p,{children:"1: Vozilo je u\u010Ditano za igra\u010Da."}),"\n",(0,a.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:'new streamedVehicleCount;\n\nfor(new v = 1; v <= MAX_VEHICLES; v++)\n{\n    if (IsVehicleStreamedIn(v, playerid))\n    {\n        streamedVehicleCount ++;\n    }\n}\n\nnew szString[144];\nformat(szString, sizeof(szString), "Trenutno ima\u0161 %i vozila u\u010Ditanih u va\u0161u igru.", streamedVehicleCount);\nSendClientMessage(playerid, -1, szString);\n'})}),"\n",(0,a.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"IsPlayerStreamedIn",children:"IsPlayerStreamedIn"}),": Provjerava da li je igra\u010D u\u010Ditan kod drugog igra\u010Da."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../callbacks/OnVehicleStreamIn",children:"OnVehicleStreamIn"}),": Pozvano kada se vozilo u\u010Dita za igra\u010Da."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../callbacks/OnVehicleStreamOut",children:"OnVehicleStreamOut"}),": Pozvano kada se vozilo i\u0161\u010Dita za igra\u010Da."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../callbacks/OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": Pozvano kada se igra\u010D u\u010Dita za drugog igra\u010Da."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../callbacks/OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": Pozvano kada se igra\u010D i\u0161\u010Dita za drugog igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return s}});var r=n(67294);let a={},t=r.createContext(a);function s(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);
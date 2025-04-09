"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["25342"],{80241:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetVehicleRotationQuat","title":"GetVehicleRotationQuat","description":"Vra\u0107a rotaciju vozila na svim osama kao kvaternion.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleRotationQuat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRotationQuat","permalink":"/bs/docs/scripting/functions/GetVehicleRotationQuat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleRotationQuat.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRotationQuat","sidebar_label":"GetVehicleRotationQuat","description":"Vra\u0107a rotaciju vozila na svim osama kao kvaternion.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleRespawnTick","permalink":"/bs/docs/scripting/functions/GetVehicleRespawnTick"},"next":{"title":"GetVehicleSeats","permalink":"/bs/docs/scripting/functions/GetVehicleSeats"}}'),a=t("85893"),r=t("50065");let o={title:"GetVehicleRotationQuat",sidebar_label:"GetVehicleRotationQuat",description:"Vra\u0107a rotaciju vozila na svim osama kao kvaternion.",tags:["vehicle"]},s=void 0,l={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(i.p,{children:"Vra\u0107a rotaciju vozila na svim osama kao kvaternion."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Ime"}),(0,a.jsx)(i.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"vehicleid"}),(0,a.jsx)(i.td,{children:"ID vozila za dobiti njegovu rotaciju."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["&Float",":w"]}),(0,a.jsx)(i.td,{children:"Float varijabla za pohraniti prvi kvarterionski ugao, proslije\u0111eno referencom."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["&Float",":x"]}),(0,a.jsx)(i.td,{children:"Float varijabla za pohraniti srugi kvarterionski ugao, proslije\u0111eno referencom."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["&Float",":y"]}),(0,a.jsx)(i.td,{children:"Float varijabla za pohraniti tre\u0107i kvarterionski ugao, proslije\u0111eno referencom."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["&Float",":z"]}),(0,a.jsx)(i.td,{children:"Float varijabla za pohraniti \u010Detvrti kvarterionski ugao, proslije\u0111eno referencom."})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,a.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da navedeno vozilo ne postoji."}),"\n",(0,a.jsx)(i.p,{children:"Rotacija vozila pohranjena je u navedenim varijablama."}),"\n",(0,a.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"Ne postoji 'set' varijacija ove funkcije; ne mo\u017Eete podesiti rotaciju vozila (osim Z ugla). Ova funkcija mo\u017Ee vratiti neta\u010Dne vrijednosti za nenaseljena vozila. Razlog je taj \u0161to se tre\u0107i red matrice interne rotacije vozila o\u0161teti ako se a\u017Eurira dok je nenastanjen."})}),"\n",(0,a.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Provjerite trenutni ugao vozila."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"GetVehicleRotation",children:"GetVehicleRotation"}),": Nabavite rotacijska vozila na XYZ osi."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return o}});var n=t(67294);let a={},r=n.createContext(a);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
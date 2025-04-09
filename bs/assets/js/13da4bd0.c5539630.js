"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48622"],{74236:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/LinkVehicleToInterior","title":"LinkVehicleToInterior","description":"Povezuje vozilo za enterijer.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/LinkVehicleToInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/LinkVehicleToInterior","permalink":"/bs/docs/scripting/functions/LinkVehicleToInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/LinkVehicleToInterior.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"LinkVehicleToInterior","sidebar_label":"LinkVehicleToInterior","description":"Povezuje vozilo za enterijer.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"LimitPlayerMarkerRadius","permalink":"/bs/docs/scripting/functions/LimitPlayerMarkerRadius"},"next":{"title":"ManualVehicleEngineAndLights","permalink":"/bs/docs/scripting/functions/ManualVehicleEngineAndLights"}}'),t=n("85893"),s=n("50065");let l={title:"LinkVehicleToInterior",sidebar_label:"LinkVehicleToInterior",description:"Povezuje vozilo za enterijer.",tags:["vehicle"]},o=void 0,c={},a=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Povezuje vozilo za enterijer. Vozila mogu biti vidljiva samo igra\u010Dima u istom enterijeru (SetPlayerInterior)."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vehicleid"}),(0,t.jsx)(i.td,{children:"ID vozila za povezati sa enterijerom."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"interiorid"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.a,{href:"../resources/interiorids",children:"Interior ID"})," za povezati."]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,t.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da vozilo ne postoji."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);\n    LinkVehicleToInterior(vehicleId, 6);\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": Postavi virtualni svijet vozila."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Postavlja igra\u010Du enterijer"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return l}});var r=n(67294);let t={},s=r.createContext(t);function l(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);
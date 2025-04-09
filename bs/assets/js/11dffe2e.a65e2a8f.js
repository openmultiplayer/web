"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95927"],{96690:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/AddStaticVehicleEx","title":"AddStaticVehicleEx","description":"Dodaje \'stati\u010Dno\' vozilo (modeli su unaprijed u\u010Ditani za igra\u010D) u gamemode-u.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicleEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicleEx","permalink":"/bs/docs/scripting/functions/AddStaticVehicleEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticVehicleEx.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicleEx","sidebar_label":"AddStaticVehicleEx","description":"Dodaje \'stati\u010Dno\' vozilo (modeli su unaprijed u\u010Ditani za igra\u010D) u gamemode-u.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticVehicle","permalink":"/bs/docs/scripting/functions/AddStaticVehicle"},"next":{"title":"AddVehicleComponent","permalink":"/bs/docs/scripting/functions/AddVehicleComponent"}}'),d=n("85893"),r=n("50065");let s={title:"AddStaticVehicleEx",sidebar_label:"AddStaticVehicleEx",description:"Dodaje 'stati\u010Dno' vozilo (modeli su unaprijed u\u010Ditani za igra\u010D) u gamemode-u.",tags:["vehicle"]},a=void 0,o={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,d.jsxs)(i.p,{children:["Dodaje 'stati\u010Dno' vozilo (modeli su unaprijed u\u010Ditani za igra\u010D) u gamemode-u. Od ",(0,d.jsx)(i.code,{children:"AddStaticVehicle"})," razlikuje se u tome \u0161to dozvoljava da se postavi proizvoljno respawn vrijeme za bozilo kada igra\u010D napusti mjesto voza\u010Da."]}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Ime"}),(0,d.jsx)(i.th,{children:"Deskripcija"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"modelid"}),(0,d.jsx)(i.td,{children:"ID modela za vozilo."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsxs)(i.td,{children:["Float",":spawn_X"]}),(0,d.jsx)(i.td,{children:"X kordinata za vozilo."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsxs)(i.td,{children:["Float",":spawn_Y"]}),(0,d.jsx)(i.td,{children:"Y kordinata za vozilo."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsxs)(i.td,{children:["Float",":spawn_Z"]}),(0,d.jsx)(i.td,{children:"Z kordinata za vozilo."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsxs)(i.td,{children:["Float",":z_angle"]}),(0,d.jsx)(i.td,{children:"Pravac vozila - angle."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"../resources/vehiclecolorid.md",children:"color1"})}),(0,d.jsx)(i.td,{children:"ID primarne boje. -1 za random."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"../resources/vehiclecolorid.md",children:"color2"})}),(0,d.jsx)(i.td,{children:"ID sekundarne boje. -1 za random."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"respawn_delay"}),(0,d.jsx)(i.td,{children:"Vrijeme za koje \u0107e se vozilo respawnovati bez vozila, u sekundama."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"addsiren"}),(0,d.jsx)(i.td,{children:"Dodano u 0.3.7; ne\u0107e raditi u ranijim verzijama. Zadana (default) vrijednost mu je 0. Omogu\u0107ava vozilu da ima sirenu, pod uslovom da vozilo ima sirenu(horn)."})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(i.p,{children:"ID vozila koje je kreirano (1 - MAX_VEHICLES)."}),"\n",(0,d.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) je vozilo koje nije kreirano (limit vozila je dostignut ili je proslije\u0111en neva\u017Ee\u0107i model ID vozila)."}),"\n",(0,d.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Dodaj Hydru (520) u igru koja \u0107e se respawnovati 15 sekundi nakon \u0161to bude napu\u0161tena\n    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);\n\n    return 1;\n}\n"})}),"\n",(0,d.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/bs/docs/scripting/functions/AddStaticVehicle",children:"AddStaticVehicle"}),": Dodaj stati\u010Dno vozilo."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/bs/docs/scripting/functions/CreateVehicle",children:"CreateVehicle"}),": Kreiraj vozilo."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var t=n(67294);let d={},r=t.createContext(d);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
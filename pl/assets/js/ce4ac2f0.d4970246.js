"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6511"],{18179:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/AddStaticVehicle","title":"AddStaticVehicle","description":"Dodaje \u201Estatyczny\u201D pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.","source":"@site/i18n/pl/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicle","permalink":"/pl/docs/scripting/functions/AddStaticVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicle","sidebar_label":"AddStaticVehicle","description":"Dodaje \u201Estatyczny\u201D pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticPickup","permalink":"/pl/docs/scripting/functions/AddStaticPickup"},"next":{"title":"AddStaticVehicleEx","permalink":"/pl/docs/scripting/functions/AddStaticVehicleEx"}}'),d=i("85893"),c=i("50065");let r={title:"AddStaticVehicle",sidebar_label:"AddStaticVehicle",description:"Dodaje \u201Estatyczny\u201D pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.",tags:["vehicle"]},a=void 0,s={},o=[{value:"Opis",id:"opis",level:2},{value:"Zwracane warto\u015Bci",id:"zwracane-warto\u015Bci",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2},{value:"Powi\u0105zane funkcje",id:"powi\u0105zane-funkcje",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{id:"opis",children:"Opis"}),"\n",(0,d.jsx)(t.p,{children:"Dodaje \u201Estatyczny\u201D pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Nazwa"}),(0,d.jsx)(t.th,{children:"Opis"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"modelid"}),(0,d.jsx)(t.td,{children:"ID modelu pojazdu."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":spawn_X"]}),(0,d.jsx)(t.td,{children:"Koordynat X pojazdu."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":spawn_Y"]}),(0,d.jsx)(t.td,{children:"Koordynat Y pojazdu."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":spawn_Z"]}),(0,d.jsx)(t.td,{children:"Koordynat Z pojazdu."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:["Float",":z_angle"]}),(0,d.jsx)(t.td,{children:"Kierunek pojazdu (k\u0105t)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../resources/vehiclecolorid.md",children:"color1"})}),(0,d.jsx)(t.td,{children:"ID pierwszego koloru. -1 to losowy."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"../resources/vehiclecolorid.md",children:"color2"})}),(0,d.jsx)(t.td,{children:"ID drugiego koloru. -1 to losowy."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"zwracane-warto\u015Bci",children:"Zwracane warto\u015Bci"}),"\n",(0,d.jsx)(t.p,{children:"ID stworzonego pojazdu (pomi\u0119dzy 1, a MAX_VEHICLES)."}),"\n",(0,d.jsx)(t.p,{children:"INVALID_VEHICLE_ID (65535) je\u017Celi pojazd nie zosta\u0142 utworzony (osi\u0105gni\u0119to limit pojazd\xf3w lub podano nieprawid\u0142owe ID modelu)."}),"\n",(0,d.jsx)(t.h2,{id:"przyk\u0142ady",children:"Przyk\u0142ady"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Dodaje Hydr\u0119 do gry\n    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);\n\n    return 1;\n}\n"})}),"\n",(0,d.jsx)(t.h2,{id:"powi\u0105zane-funkcje",children:"Powi\u0105zane funkcje"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"/pl/docs/scripting/functions/AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Dodaje statyczny pojazd z niestandardowym czasem respawnu."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"CreateVehicle.md",children:"CreateVehicle"}),": Tworzy pojazd."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"DestroyVehicle.md",children:"DestroyVehicle"}),": Kasuje pojazd."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return r}});var n=i(67294);let d={},c=n.createContext(d);function r(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["12490"],{28829:function(e,i,c){c.r(i),c.d(i,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>o,toc:()=>r,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/AddStaticVehicle","title":"AddStaticVehicle","description":"A\xf1ade un veh\xedculo \'est\xe1tico\' (los modelos est\xe1n pre-cargados para los jugadores) al modo de juego.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicle","permalink":"/es/docs/scripting/functions/AddStaticVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticVehicle.md","tags":[{"inline":true,"label":"veh\xedculo, vehicle","permalink":"/es/docs/tags/vehiculo-vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicle","sidebar_label":"AddStaticVehicle","description":"A\xf1ade un veh\xedculo \'est\xe1tico\' (los modelos est\xe1n pre-cargados para los jugadores) al modo de juego.","tags":["veh\xedculo, vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticPickup","permalink":"/es/docs/scripting/functions/AddStaticPickup"},"next":{"title":"AddStaticVehicleEx","permalink":"/es/docs/scripting/functions/AddStaticVehicleEx"}}'),n=c("85893"),t=c("50065");let d={title:"AddStaticVehicle",sidebar_label:"AddStaticVehicle",description:"A\xf1ade un veh\xedculo 'est\xe1tico' (los modelos est\xe1n pre-cargados para los jugadores) al modo de juego.",tags:["veh\xedculo, vehicle"]},s=void 0,o={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(i.p,{children:"A\xf1ade un veh\xedculo 'est\xe1tico' (los modelos est\xe1n pre-cargados para los jugadores) al modo de juego."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Nombre"}),(0,n.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"modelid"}),(0,n.jsx)(i.td,{children:"El ID del modelo para el veh\xedculo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:["Float",":spawn_X"]}),(0,n.jsx)(i.td,{children:"La coordenada X para el veh\xedculo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:["Float",":spawn_Y"]}),(0,n.jsx)(i.td,{children:"La coordenada Y para el veh\xedculo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:["Float",":spawn_Z"]}),(0,n.jsx)(i.td,{children:"La coordenada Z para el veh\xedculo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:["Float",":z_angle"]}),(0,n.jsx)(i.td,{children:"Direcci\xf3n del veh\xedculo - \xe1ngulo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"color1"})}),(0,n.jsx)(i.td,{children:"El ID del color primario. -1 para aleatorio."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"color2"})}),(0,n.jsx)(i.td,{children:"El ID del color secundario. -1 para aleatorio."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,n.jsx)(i.p,{children:"El ID del veh\xedculo creado (entre 1 y MAX_VEHICLES)."}),"\n",(0,n.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) si el veh\xedculo no fue creado (se alcanz\xf3 el l\xedmite de veh\xedculos o se pas\xf3 un ID de modelo de veh\xedculo no v\xe1lido)."}),"\n",(0,n.jsx)(i.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit() {\n    // A\xf1adir un Hydra al juego\n    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": A\xf1adir un veh\xedculo est\xe1tico con tiempo de reaparici\xf3n personalizado."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Crear un veh\xedculo."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Destruir un veh\xedculo."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,i,c){c.d(i,{Z:function(){return s},a:function(){return d}});var l=c(67294);let n={},t=l.createContext(n);function d(e){let i=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),l.createElement(t.Provider,{value:i},e.children)}}}]);
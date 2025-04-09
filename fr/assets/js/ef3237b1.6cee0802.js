"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5375"],{50759:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/callbacks/OnVehicleDamageStatusUpdate","title":"OnVehicleDamageStatusUpdate","description":"Cette callback est appel\xe9e lorsqu\'un \xe9l\xe9ment de v\xe9hicule - tel que les portes ou les phares - sont endommag\xe9s.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleDamageStatusUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleDamageStatusUpdate","permalink":"/fr/docs/scripting/callbacks/OnVehicleDamageStatusUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleDamageStatusUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleDamageStatusUpdate","sidebar_label":"OnVehicleDamageStatusUpdate","description":"Cette callback est appel\xe9e lorsqu\'un \xe9l\xe9ment de v\xe9hicule - tel que les portes ou les phares - sont endommag\xe9s.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/fr/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"},"next":{"title":"OnVehicleDeath","permalink":"/fr/docs/scripting/callbacks/OnVehicleDeath"}}'),i=n("85893"),l=n("50065");let r={title:"OnVehicleDamageStatusUpdate",sidebar_label:"OnVehicleDamageStatusUpdate",description:"Cette callback est appel\xe9e lorsqu'un \xe9l\xe9ment de v\xe9hicule - tel que les portes ou les phares - sont endommag\xe9s.",tags:["vehicle"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Voir ",(0,i.jsx)(t.a,{href:"../resources/damagestatus",children:'"damagestatus"'}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Cette callback est appel\xe9e lorsqu'un \xe9l\xe9ment de v\xe9hicule - tel que les portes ou les phares - sont endommag\xe9s."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Nom"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"int"})," vehicleid"]}),(0,i.jsx)(t.td,{children:"L'ID du v\xe9hicule qui a \xe9t\xe9 endommag\xe9"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"int"})," playerid"]}),(0,i.jsx)(t.td,{children:"L'ID du joueur qui a inflig\xe9 les d\xe9g\xe2ts"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,i.jsxs)(t.p,{children:["Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, ",(0,i.jsx)(t.code,{children:"return callback();"})," ne fonctionnera pas car la callback ne retourne rien, mais un return ",(0,i.jsxs)(t.em,{children:["(",(0,i.jsx)(t.code,{children:"return 1;"})," ou ",(0,i.jsx)(t.code,{children:"return 0;"}),")"]})," doit \xeatre effectu\xe9 dans la callback."]}),"\n",(0,i.jsx)(t.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"// example code: protect vehicle tires from being popped\n// uses encode_tires function from: http://forum.sa-mp.com/index.php?topic=161491.msg960040#msg960040\n \npublic OnVehicleDamageStatusUpdate(vehicleid, playerid)\n{\n    #pragma unused playerid\n \n    new panels, doors, lights, tires;	\n    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n    tires = encode_tires(0, 0, 0, 0); // fix all tires\n    panels = encode_panels(0, 0, 0, 0, 0, 0, 0); // fix all panels //fell off - (3, 3, 3, 3, 3, 3, 3)\n    doors = encode_doors(0, 0, 0, 0, 0, 0); // fix all doors //fell off - (4, 4, 4, 4, 0, 0)\n    lights = encode_lights(0, 0, 0, 0); // fix all lights\n    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n    return 1;	\n}\n \nencode_tires(tire1, tire2, tire3, tire4) return tire1 | (tire2 << 1) | (tire3 << 2) | (tire4 << 3);\nencode_panels(flp, frp, rlp, rrp, windshield, front_bumper, rear_bumper)\n{\n    return flp | (frp << 4) | (rlp << 8) | (rrp << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);\n}\nencode_doors(bonnet, boot, driver_door, passenger_door, behind_driver_door, behind_passenger_door)\n{\n    #pragma unused behind_driver_door\n    #pragma unused behind_passenger_door\n    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);\n}\nencode_lights(light1, light2, light3, light4)\n{\n    return light1 | (light2 << 1) | (light3 << 2) | (light4 << 3);\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"astuces",children:"Astuces"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Cela n'inclut pas les changements de heal du v\xe9hicule."})}),"\n",(0,i.jsx)(t.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"}),": R\xe9cup\xe8re les d\xe9g\xe2ts de chaque partie d'un v\xe9hicule."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),": Met \xe0 jour les d\xe9g\xe2ts d'un v\xe9hicule."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(67294);let i={},l=s.createContext(i);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);
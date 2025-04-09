"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62311"],{70279:function(e,i,t){t.r(i),t.d(i,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetVehicleHealth","title":"GetVehicleHealth","description":"Dobij healthe vozila.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleHealth","permalink":"/bs/docs/scripting/functions/GetVehicleHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleHealth.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleHealth","sidebar_label":"GetVehicleHealth","description":"Dobij healthe vozila.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleDriver","permalink":"/bs/docs/scripting/functions/GetVehicleDriver"},"next":{"title":"GetVehicleHydraReactorAngle","permalink":"/bs/docs/scripting/functions/GetVehicleHydraReactorAngle"}}'),l=t("85893"),r=t("50065");let a={title:"GetVehicleHealth",sidebar_label:"GetVehicleHealth",description:"Dobij healthe vozila.",tags:["vehicle"]},s=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,l.jsx)(i.p,{children:"Dobij healthe vozila."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Ime"}),(0,l.jsx)(i.th,{children:"Deskripcija"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"ID vozila za dobiti healthe."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["&Float",":health"]}),(0,l.jsx)(i.td,{children:"Float varijabla za pohraniti healthe vozila, proslije\u0111eno referencom"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(i.p,{children:"1 - uspje\u0161no"}),"\n",(0,l.jsx)(i.p,{children:"0 - gre\u0161ka (neva\u017Ee\u0107i ID vozila)."}),"\n",(0,l.jsx)(i.p,{children:"Healthi vozila su pohranjeni u varijablama, ne u return vrijednosti."}),"\n",(0,l.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'if (strcmp(cmdtext, "/repair", true) == 0)\n{\n    new\n        Float: vehicleHealth,\n        playerVehicleId = GetPlayerVehicleID(playerid);\n\n    GetVehicleHealth(playerVehicleId, vehicleHealth);\n\n    if (vehicleHealth > 500)\n    {\n        return SendClientMessage(playerid, COLOR_RED, "Vozilo ne treba popravak!");\n    }\n\n    SetVehicleHealth(playerVehicleId, 1000);\n    SendClientMessage(playerid, COLOR_GREEN, "Vozilo popravljeno!");\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsxs)(i.p,{children:["Potpuno health stanje vozila je 1000, me\u0111utim mogu\u0107e su ve\u0107e vrijednosti i pove\u0107avaju health stanje vozila. Za vi\u0161e informacija o health vrijednostima pogledajte ",(0,l.jsx)(i.a,{href:"../resources/vehiclehealth",children:"ovdje"}),"."]})}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsx)(i.p,{children:"Vozilo se zapali kad mu je health ispod 250. Eksplodirat \u0107e nekoliko sekundi kasnije."})}),"\n",(0,l.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetVehicleHealth",children:"SetVehicleHealth"}),": Postavi helte vozila."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Doznaj koliko healtha ima igra\u010D."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Otkrijte koliko armora ima igra\u010D."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return a}});var n=t(67294);let l={},r=n.createContext(l);function a(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56946"],{57072:function(e,i,n){n.r(i),n.d(i,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/RepairVehicle","title":"RepairVehicle","description":"U potpunosti popravlja vozilo, uklju\u010Duju\u0107i vidljivu \u0161tetu (neravnine, udubljenja, ogrebotine, puknute gume itd.).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/RepairVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RepairVehicle","permalink":"/bs/docs/scripting/functions/RepairVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RepairVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RepairVehicle","sidebar_label":"RepairVehicle","description":"U potpunosti popravlja vozilo, uklju\u010Duju\u0107i vidljivu \u0161tetu (neravnine, udubljenja, ogrebotine, puknute gume itd.).","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemoveVehicleComponent","permalink":"/bs/docs/scripting/functions/RemoveVehicleComponent"},"next":{"title":"ResetPlayerMoney","permalink":"/bs/docs/scripting/functions/ResetPlayerMoney"}}'),r=n("85893"),l=n("50065");let s={title:"RepairVehicle",sidebar_label:"RepairVehicle",description:"U potpunosti popravlja vozilo, uklju\u010Duju\u0107i vidljivu \u0161tetu (neravnine, udubljenja, ogrebotine, puknute gume itd.).",tags:["vehicle"]},o=void 0,c={},a=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function u(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"U potpunosti popravlja vozilo, uklju\u010Duju\u0107i vidljivu \u0161tetu (neravnine, udubljenja, ogrebotine, puknute gume itd.)."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"ID vozila za popraviti."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da navedeno vozilo ne postoji."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/repair", cmdtext))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return SendClientMessage(playerid, 0xFFFFFFFF, "Nisi u vozilu!");\n        }\n\n        RepairVehicle(GetPlayerVehicleID(playerid));\n\n        SendClientMessage(playerid, 0xFFFFFFFF, "Tvoje vozilo je popravljeno!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehicleHealth",children:"SetVehicleHealth"}),": Postavi helte vozila."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Provjeri helte vozila."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return s}});var t=n(67294);let r={},l=t.createContext(r);function s(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
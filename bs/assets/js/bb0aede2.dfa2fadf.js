"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37174"],{78424:function(e,i,t){t.r(i),t.d(i,{default:()=>d,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetVehicleHealth","title":"SetVehicleHealth","description":"Postavlja helte (zdravlje/health) vozila.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleHealth","permalink":"/bs/docs/scripting/functions/SetVehicleHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleHealth.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleHealth","sidebar_label":"SetVehicleHealth","description":"Postavlja helte (zdravlje/health) vozila.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleDead","permalink":"/bs/docs/scripting/functions/SetVehicleDead"},"next":{"title":"SetVehicleNumberPlate","permalink":"/bs/docs/scripting/functions/SetVehicleNumberPlate"}}'),l=t("85893"),a=t("50065");let r={title:"SetVehicleHealth",sidebar_label:"SetVehicleHealth",description:"Postavlja helte (zdravlje/health) vozila.",tags:["vehicle"]},s=void 0,c={},h=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,l.jsx)(i.p,{children:"Postavlja helte (zdravlje/health) vozila. Kada se health stanje vozila smanji, motor \u0107e stvoriti dim, a na kraju i vatru kada padne na manje od 250 (25%)."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Ime"}),(0,l.jsx)(i.th,{children:"Deskripcija"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"ID vozila za postaviti stanje healtha."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":health"]}),(0,l.jsx)(i.td,{children:"Health, dat kao float vrijednost."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,l.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010Di da vozilo ne postoji."}),"\n",(0,l.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'if (strcmp("/fixengine", cmdtext, true) == 0)\n{\n    new\n        vehicleid = GetPlayerVehicleID(playerid);\n\n    SetVehicleHealth(vehicleid, 1000);\n    SendClientMessage(playerid, COLOUR_WHITE, "Motor vozila je u potpunosti popravljen.");\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsxs)(i.p,{children:["Ukupan health vozila je 1000. Ve\u0107e vrijednosti su mogu\u0107e. Za vi\u0161e informacija o vrijednostima healtha, pogledaj ",(0,l.jsx)(i.a,{href:"../resources/vehiclehealth",children:"ovu"})," stranicu."]})}),"\n",(0,l.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Provjeri helte vozila."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"RepairVehicle",children:"RepairVehicle"}),": U potpunosti popravite vozilo."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerHealth",children:"SetPlayerHealth"}),": Postavlja igra\u010Du helte."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../callbacks/OnVehicleDeath",children:"OnVehicleDeath"}),": Pozvano kada vozilo biva uni\u0161teno."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return r}});var n=t(67294);let l={},a=n.createContext(l);function r(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
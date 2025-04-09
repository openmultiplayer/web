"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80101"],{92357:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/SetVehicleZAngle","title":"SetVehicleZAngle","description":"Postavi Z rotaciju (yaw) vozila.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleZAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleZAngle","permalink":"/bs/docs/scripting/functions/SetVehicleZAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleZAngle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleZAngle","sidebar_label":"SetVehicleZAngle","description":"Postavi Z rotaciju (yaw) vozila.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleVirtualWorld","permalink":"/bs/docs/scripting/functions/SetVehicleVirtualWorld"},"next":{"title":"SetWeather","permalink":"/bs/docs/scripting/functions/SetWeather"}}'),r=n("85893"),l=n("50065");let c={title:"SetVehicleZAngle",sidebar_label:"SetVehicleZAngle",description:"Postavi Z rotaciju (yaw) vozila.",tags:["vehicle"]},s=void 0,a={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Postavi Z rotaciju (yaw) vozila."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"ID vozila za postaviti rotaciju."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":z_angle"]}),(0,r.jsx)(i.td,{children:"Z ugao za postaviti."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Navedeno vozilo ne postoji."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/flip", true) == 0)\n    {\n        new\n            currentVehicle,\n            Float: angle;\n        currentVehicle = GetPlayerVehicleID(playerid);\n        GetVehicleZAngle(currentVehicle, angle);\n        SetVehicleZAngle(currentVehicle, angle);\n        SendClientMessage(playerid, 0xFFFFFFFF, "Tvoje vozilo je prevrnuto.");\n        return 1;\n    }\n\n     return 0;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsxs)(i.p,{children:[":::",(0,r.jsx)(i.strong,{children:"tip"})]}),"\n",(0,r.jsx)(i.p,{children:"Kada se koristi ova funkcija, okretanje vozila X i Y (nagib i kotrljanje) resetirat \u0107e se. Rotacije X i Y ne mogu se postaviti. Ova funkcija ne radi na neuzetim vozilima (vjeruje se da je to GTA ograni\u010Denje)."}),"\n",(0,r.jsx)(i.p,{children:":::"}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Provjerite trenutni ugao vozila."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehiclePos",children:"SetVehiclePos"}),": Postavi poziciju vozila."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return c}});var t=n(67294);let r={},l=t.createContext(r);function c(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
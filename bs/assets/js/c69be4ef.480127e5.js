"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93285"],{61681:function(e,i,r){r.r(i),r.d(i,{default:()=>c,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/GetPlayerVirtualWorld","title":"GetPlayerVirtualWorld","description":"Dohva\u0107a trenutni virtualni svijet u kojem se igra\u010D nalazi.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVirtualWorld","permalink":"/bs/docs/scripting/functions/GetPlayerVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerVirtualWorld","sidebar_label":"GetPlayerVirtualWorld","description":"Dohva\u0107a trenutni virtualni svijet u kojem se igra\u010D nalazi.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVersion","permalink":"/bs/docs/scripting/functions/GetPlayerVersion"},"next":{"title":"GetPlayerWantedLevel","permalink":"/bs/docs/scripting/functions/GetPlayerWantedLevel"}}'),n=r("85893"),l=r("50065");let a={title:"GetPlayerVirtualWorld",sidebar_label:"GetPlayerVirtualWorld",description:"Dohva\u0107a trenutni virtualni svijet u kojem se igra\u010D nalazi.",tags:["player"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function u(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(i.p,{children:"Dohva\u0107a trenutni virtualni svijet u kojem se igra\u010D nalazi."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Ime"}),(0,n.jsx)(i.th,{children:"Deskripcija"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"ID igra\u010Da za dobiti virtualni svijet."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"ID virtualnog svijeta u kojem je igra\u010D trenutno."}),"\n",(0,n.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/world", true))\n    {\n        new\n            string[32];\n        format(string, sizeof(string), "Tvoj virtualni svijet: %i", GetPlayerVirtualWorld(playerid));\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"Virtualni svjetovi nisu isto \u0161ti i enterijeri."})}),"\n",(0,n.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPlayerVirtualWorld",children:"SetPlayerVirtualWorld"}),": Postavite virtualni svijet igra\u010Da."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetVehicleVirtualWorld",children:"GetVehicleVirtualWorld"}),": Provjerite u kojem je virtualnom svijetu vozilo."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetPlayerInterior",children:"GetPlayerInterior"}),": Dobij trenutni enterijer igra\u010Da."]}),"\n"]})]})}function c(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},50065:function(e,i,r){r.d(i,{Z:function(){return s},a:function(){return a}});var t=r(67294);let n={},l=t.createContext(n);function a(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92997"],{10234:function(a,n,e){e.r(n),e.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/PutPlayerInVehicle","title":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/PutPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PutPlayerInVehicle","permalink":"/fil/docs/scripting/functions/PutPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PutPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PutPlayerInVehicle","sidebar_label":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawUseBox","permalink":"/fil/docs/scripting/functions/PlayerTextDrawUseBox"},"next":{"title":"RedirectDownload","permalink":"/fil/docs/scripting/functions/RedirectDownload"}}'),l=e("85893"),t=e("50065");let r={title:"PutPlayerInVehicle",sidebar_label:"PutPlayerInVehicle",description:"Puts a player in a vehicle.",tags:["player","vehicle"]},s=void 0,c={},d=[{value:"Paglalarawan",id:"paglalarawan",level:2},{value:"Returns",id:"returns",level:2},{value:"Halimbawa ng Paggamit",id:"halimbawa-ng-paggamit",level:2},{value:"Mga Dapat Unawain",id:"mga-dapat-unawain",level:2},{value:"Mga Kaugnay na Functions",id:"mga-kaugnay-na-functions",level:2}];function o(a){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"paglalarawan",children:"Paglalarawan"}),"\n",(0,l.jsx)(n.p,{children:"Inilalagay ang isang manlalaro sa isang sasakyan."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Ang ID ng player na ilalagay sa isang sasakyan."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"Ang ID ng sasakyan kung saan ilalagay ang player."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"seatid"}),(0,l.jsx)(n.td,{children:"Ang ID ng upuan kung saan ilalagay ang player."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,l.jsx)(n.p,{children:"0: Nabigong maisagawa ang function. Ang manlalaro o sasakyan ay wala."}),"\n",(0,l.jsx)(n.h2,{id:"halimbawa-ng-paggamit",children:"Halimbawa ng Paggamit"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)\n{\n    PutPlayerInVehicle(playerid, vehicleid, 0);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"0 - Driver\n1 - Front passenger\n2 - Back-left passenger\n3 - Back-right passenger\n4+ - Passenger seats (coach etc.)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"mga-dapat-unawain",children:"Mga Dapat Unawain"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Maaari mong gamitin ang GetPlayerVehicleSeat sa isang loop upang tingnan kung ang isang upuan ay inookupahan ng sinumang manlalaro."}),"\n"]})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Kung ang upuan ay hindi wasto o kinuha, ay magdudulot ng pag-crash kapag LUMABAS sila sa sasakyan."}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"mga-kaugnay-na-functions",children:"Mga Kaugnay na Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Itapon ang isang manlalaro sa labas ng kanilang sasakyan."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Kunin ang ID ng sasakyan kung saan nakasakay ang player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Suriin kung saan nakaupo ang isang manlalaro."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),": Tinatawag kapag nagsimulang pumasok ang isang manlalaro sa isang sasakyan."]}),"\n"]})]})}function u(a={}){let{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(o,{...a})}):o(a)}},50065:function(a,n,e){e.d(n,{Z:function(){return s},a:function(){return r}});var i=e(67294);let l={},t=i.createContext(l);function r(a){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof a?a(n):{...n,...a}},[n,a])}function s(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:r(a.components),i.createElement(t.Provider,{value:n},a.children)}}}]);
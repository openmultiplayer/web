"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["24751"],{83302:function(a,n,e){e.r(n),e.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterVehicle","title":"OnPlayerEnterVehicle","description":"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterVehicle","permalink":"/fil/docs/scripting/callbacks/OnPlayerEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterVehicle.md","tags":[],"version":"current","frontMatter":{"title":"OnPlayerEnterVehicle","sidebar_label":"OnPlayerEnterVehicle","description":"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/fil/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"},"next":{"title":"OnPlayerExitVehicle","permalink":"/fil/docs/scripting/callbacks/OnPlayerExitVehicle"}}'),l=e("85893"),t=e("50065");let s={title:"OnPlayerEnterVehicle",sidebar_label:"OnPlayerEnterVehicle",description:"This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.",tags:[]},r=void 0,c={},o=[{value:"Paglalarawan",id:"paglalarawan",level:2},{value:"Returns",id:"returns",level:2},{value:"Halimbawa ng Paggamit",id:"halimbawa-ng-paggamit",level:2},{value:"Mga Dapat Unawain",id:"mga-dapat-unawain",level:2},{value:"Mga Kaugnay na Callback",id:"mga-kaugnay-na-callback",level:2},{value:"Mga Kaugnay na Functions",id:"mga-kaugnay-na-functions",level:2}];function g(a){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...a.components},{VersionWarn:e}=n;return e||function(a,n){throw Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(n.h2,{id:"paglalarawan",children:"Paglalarawan"}),"\n",(0,l.jsx)(n.p,{children:"Ang callback na ito ay natatawag kapag ang isang manlalaro ay pumasok sa loob ng sasakyan."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Pangalan"}),(0,l.jsx)(n.th,{children:"Deskripsyon"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Ang ID ng manlalaro nag sumasakay sa sasakyan."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"Ang ID ng sasakyan na pinasukan ng manlalaro."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ispassenger"}),(0,l.jsx)(n.td,{children:"0 kung ang manlalaro ay pumasok bilang driver, 1 kung pasahero."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"Lagi itong na tatawag una sa mga filterscript."}),"\n",(0,l.jsx)(n.h2,{id:"halimbawa-ng-paggamit",children:"Halimbawa ng Paggamit"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    new string[128];\n    format(string, sizeof(string), "Ikaw ay sumasakay bilang %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"mga-dapat-unawain",children:"Mga Dapat Unawain"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ang callback na ito ay tinatawag kapag ang isang manlalaro ay NAGSIMULA na pumasok sa isang sasakyan, hindi kapag napasok na nila ito."}),"\n",(0,l.jsx)(n.li,{children:"Ang callback na ito ay tinatawag pa rin kung ang player ay tinanggihan sa pagpasok sa sasakyan (hal. ito ay naka-lock o puno)."}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"mga-kaugnay-na-callback",children:"Mga Kaugnay na Callback"}),"\n",(0,l.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang din ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o sa iba pa."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/fil/docs/scripting/callbacks/OnPlayerExitVehicle",children:"OnPlayerExitVehicle"}),": Tinatawag kapag ang manlalaro ay umalis sa sasakyan."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/fil/docs/scripting/callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),": Tinatawag kapag nagbago ang estado ng manlalaro."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"mga-kaugnay-na-functions",children:"Mga Kaugnay na Functions"}),"\n",(0,l.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/fil/docs/scripting/functions/PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Maglagay ng manlalaro sa sasakyan."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/fil/docs/scripting/functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Suriin kung saan nakaupo ang isang manlalaro."]}),"\n"]})]})}function d(a={}){let{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(g,{...a})}):g(a)}},50065:function(a,n,e){e.d(n,{Z:function(){return r},a:function(){return s}});var i=e(67294);let l={},t=i.createContext(l);function s(a){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof a?a(n):{...n,...a}},[n,a])}function r(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:s(a.components),i.createElement(t.Provider,{value:n},a.children)}}}]);
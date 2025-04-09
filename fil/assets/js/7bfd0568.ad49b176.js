"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["9163"],{42764:function(a,n,e){e.r(n),e.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>r,toc:()=>g,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/callbacks/OnVehicleSpawn","title":"OnVehicleSpawn","description":"This callback is called when a vehicle respawns.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSpawn","permalink":"/fil/docs/scripting/callbacks/OnVehicleSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleSpawn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSpawn","sidebar_label":"OnVehicleSpawn","description":"This callback is called when a vehicle respawns.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSirenStateChange","permalink":"/fil/docs/scripting/callbacks/OnVehicleSirenStateChange"},"next":{"title":"OnVehicleStreamIn","permalink":"/fil/docs/scripting/callbacks/OnVehicleStreamIn"}}'),l=e("85893"),t=e("50065");let s={title:"OnVehicleSpawn",sidebar_label:"OnVehicleSpawn",description:"This callback is called when a vehicle respawns.",tags:["vehicle"]},c=void 0,r={},g=[{value:"Paglalarawan",id:"paglalarawan",level:2},{value:"Returns",id:"returns",level:2},{value:"Halimbawa ng Paggamit",id:"halimbawa-ng-paggamit",level:2},{value:"Mga Kaugnay na Callbacks",id:"mga-kaugnay-na-callbacks",level:2},{value:"Mga Kaugnay na Functions",id:"mga-kaugnay-na-functions",level:2}];function d(a){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["Ang callback na ito ay tinatawag ",(0,l.jsx)(n.strong,{children:"lamang"})," kapag ang sasakyan ay ",(0,l.jsx)(n.strong,{children:"muling"})," umusbong! CreateVehicle at AddStaticVehicle(Ex) ay ",(0,l.jsx)(n.strong,{children:"hindi"})," magti-trigger ng callback na ito."]})}),"\n",(0,l.jsx)(n.h2,{id:"paglalarawan",children:"Paglalarawan"}),"\n",(0,l.jsx)(n.p,{children:"Ang callback na ito ay tinatawag kapag ang isang sasakyan ay nag respawn."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"Ang ID ng sasakyan na nag respawn."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"0 - Pipigilan ang iba pang mga filterscript mula sa pagtanggap ng callback na ito."}),"\n",(0,l.jsx)(n.p,{children:"1 - Isinasaad na ang callback na ito ay ipapasa sa susunod na filterscript."}),"\n",(0,l.jsx)(n.p,{children:"Lagi itong na tatawag una sa mga filterscript."}),"\n",(0,l.jsx)(n.h2,{id:"halimbawa-ng-paggamit",children:"Halimbawa ng Paggamit"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnVehicleSpawn(vehicleid)\n{\n    printf("Vehicle %i spawned!",vehicleid);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"mga-kaugnay-na-callbacks",children:"Mga Kaugnay na Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./OnVehicleDeath",children:"OnVehicleDeath"}),": Ang callback na ito ay tinatawag kapag nasira ang isang sasakyan."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"./OnPlayerSpawn",children:"OnPlayerSpawn"}),": Tinatawag ang callback na ito kapag nag-spawn ang isang player."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"mga-kaugnay-na-functions",children:"Mga Kaugnay na Functions"}),"\n",(0,l.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetVehicleToRespawn",children:"SetVehicleToRespawn"}),": Respawn ang sasakyan."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CreateVehicle",children:"CreateVehicle"}),": Gumawa ng sasakyan."]}),"\n"]})]})}function h(a={}){let{wrapper:n}={...(0,t.a)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(d,{...a})}):d(a)}},50065:function(a,n,e){e.d(n,{Z:function(){return c},a:function(){return s}});var i=e(67294);let l={},t=i.createContext(l);function s(a){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof a?a(n):{...n,...a}},[n,a])}function c(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:s(a.components),i.createElement(t.Provider,{value:n},a.children)}}}]);
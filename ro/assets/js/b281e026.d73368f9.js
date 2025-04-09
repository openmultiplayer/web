"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97212"],{30990:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>c,assets:()=>s,toc:()=>d,contentTitle:()=>a});var c=JSON.parse('{"id":"scripting/callbacks/OnVehicleSpawn","title":"OnVehicleSpawn","description":"Acest callback este apelat atunci c\xe2nd un vehicul reapare.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSpawn","permalink":"/ro/docs/scripting/callbacks/OnVehicleSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleSpawn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ro/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSpawn","sidebar_label":"OnVehicleSpawn","description":"Acest callback este apelat atunci c\xe2nd un vehicul reapare.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSirenStateChange","permalink":"/ro/docs/scripting/callbacks/OnVehicleSirenStateChange"},"next":{"title":"OnVehicleStreamIn","permalink":"/ro/docs/scripting/callbacks/OnVehicleStreamIn"}}'),t=i("85893"),l=i("50065");let r={title:"OnVehicleSpawn",sidebar_label:"OnVehicleSpawn",description:"Acest callback este apelat atunci c\xe2nd un vehicul reapare.",tags:["vehicle"]},a=void 0,s={},d=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Acest callback se nume\u0219te ",(0,t.jsx)(n.strong,{children:"doar"})," c\xe2nd vehiculul ",(0,t.jsx)(n.strong,{children:"re"}),"apare! CreateVehicle \u0219i AddStaticVehicle(Ex) ",(0,t.jsx)(n.strong,{children:"nu"})," vor declan\u0219a acest apel invers."]})}),"\n",(0,t.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,t.jsx)(n.p,{children:"Acest callback este apelat atunci c\xe2nd un vehicul reapare."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nume"}),(0,t.jsx)(n.th,{children:"Descriere"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID-ul vehiculului care a ap\u0103rut."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,t.jsx)(n.p,{children:"0 - Va \xeempiedica alte filterscript-uri s\u0103 primeasc\u0103 acest apel invers."}),"\n",(0,t.jsx)(n.p,{children:"1 - Indic\u0103 faptul c\u0103 acest callback va fi transmis urm\u0103torului filterscript."}),"\n",(0,t.jsx)(n.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnVehicleSpawn(vehicleid)\n{\n    printf("Vehiculul %i a ap\u0103rut!",vehicleid);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetVehicleToRespawn",children:"SetVehicleToRespawn"}),": Readuce\u021Bi un vehicul."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/CreateVehicle",children:"CreateVehicle"}),": creeaz\u0103 un vehicul."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var c=i(67294);let t={},l=c.createContext(t);function r(e){let n=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);
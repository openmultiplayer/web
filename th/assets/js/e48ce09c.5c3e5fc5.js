"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32838"],{27415:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetVehiclePoolSize","title":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetVehiclePoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePoolSize","permalink":"/th/docs/scripting/functions/GetVehiclePoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehiclePoolSize.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePoolSize","sidebar_label":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsSirenState","permalink":"/th/docs/scripting/functions/GetVehicleParamsSirenState"},"next":{"title":"GetVehiclePos","permalink":"/th/docs/scripting/functions/GetVehiclePos"}}'),l=i("85893"),r=i("50065");let s={title:"GetVehiclePoolSize",sidebar_label:"GetVehiclePoolSize",description:"Gets the highest vehicleid currently in use on the server.",tags:["vehicle"]},c=void 0,o={},h=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function a(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E43\u0E19 SA-MP 0.3.7 \u0E41\u0E25\u0E30\u0E08\u0E30\u0E44\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E19\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49!"})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(t.p,{children:"Gets the highest vehicleid currently in use on the server."}),"\n",(0,l.jsx)(t.table,{children:(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"RepairAllVehicles()\n{\n    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++) // vehicleids start at 1\n    {\n        RepairVehicle(i);\n    }\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"GetPlayerPoolSize: Gets the highest playerid connected to the server."}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let l={},r=n.createContext(l);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
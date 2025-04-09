"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35786"],{94801:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/SetVehicleParamsCarWindows","title":"SetVehicleParamsCarWindows","description":"Allows you to open and close the windows of a vehicle.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleParamsCarWindows.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsCarWindows","permalink":"/th/docs/scripting/functions/SetVehicleParamsCarWindows","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleParamsCarWindows.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleParamsCarWindows","sidebar_label":"SetVehicleParamsCarWindows","description":"Allows you to open and close the windows of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsCarDoors","permalink":"/th/docs/scripting/functions/SetVehicleParamsCarDoors"},"next":{"title":"SetVehicleParamsEx","permalink":"/th/docs/scripting/functions/SetVehicleParamsEx"}}'),s=n("85893"),r=n("50065");let o={title:"SetVehicleParamsCarWindows",sidebar_label:"SetVehicleParamsCarWindows",description:"Allows you to open and close the windows of a vehicle.",tags:["vehicle"]},l=void 0,a={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E43\u0E19 SA-MP 0.3.7 \u0E41\u0E25\u0E30\u0E08\u0E30\u0E44\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E19\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49!"})}),"\n",(0,s.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,s.jsx)(t.p,{children:"Allows you to open and close the windows of a vehicle."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle to set the window state of"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"driver"}),(0,s.jsx)(t.td,{children:"The state of the driver's window. 0 to open, 1 to close."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"passenger"}),(0,s.jsx)(t.td,{children:"The state of the passenger window. 0 to open, 1 to close."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"backleft"}),(0,s.jsx)(t.td,{children:"The state of the rear left window (if available). 0 to open, 1 to close."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"backright"}),(0,s.jsx)(t.td,{children:"The state of the rear right window (if available). 0 to open, 1 to close."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,s.jsx)(t.p,{children:"[edit]"}),"\n",(0,s.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"SetVehicleParamsCarDoors: Open and close the doors of a vehicle."}),"\n",(0,s.jsx)(t.li,{children:"GetVehicleParamsCarDoors: Retrive the current state of a vehicle's doors."}),"\n",(0,s.jsx)(t.li,{children:"GetVehicleParamsCarWindows: Retrive the current state of a vehicle's windows"}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
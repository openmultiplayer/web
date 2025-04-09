"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7787"],{41598:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/GetVehicleParamsCarWindows","title":"GetVehicleParamsCarWindows","description":"Allows you to retrieve the current state of a vehicle\'s windows.","source":"@site/docs/scripting/functions/GetVehicleParamsCarWindows.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleParamsCarWindows","permalink":"/hu/docs/scripting/functions/GetVehicleParamsCarWindows","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleParamsCarWindows.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleParamsCarWindows","sidebar_label":"GetVehicleParamsCarWindows","description":"Allows you to retrieve the current state of a vehicle\'s windows.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsCarDoors","permalink":"/hu/docs/scripting/functions/GetVehicleParamsCarDoors"},"next":{"title":"GetVehicleParamsEx","permalink":"/hu/docs/scripting/functions/GetVehicleParamsEx"}}'),r=s("85893"),n=s("50065");let o={title:"GetVehicleParamsCarWindows",sidebar_label:"GetVehicleParamsCarWindows",description:"Allows you to retrieve the current state of a vehicle's windows.",tags:["vehicle"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Allows you to retrieve the current state of a vehicle's windows"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&bool",":frontLeft"]}),(0,r.jsx)(t.td,{children:"The integer to save the state of the drivers window to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&bool",":frontRight"]}),(0,r.jsx)(t.td,{children:"The integer to save the state of the passengers window to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&bool",":rearLeft"]}),(0,r.jsx)(t.td,{children:"The integer to save the state of the rear left window to (if available)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&bool",":rearRight"]}),(0,r.jsx)(t.td,{children:"The integer to save the state of the rear right window to (if available)."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The vehicle's windows state is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"The values returned in each variable are as follows:"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"-1"}),": Window state not set (generally closed, unless set explicitly to -1)"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"0"}),": Open"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"1"}),": Closed"]})]}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleParamsCarWindows",children:"SetVehicleParamsCarWindows"}),": Open and close the windows of a vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleParamsCarDoors",children:"GetVehicleParamsCarDoors"}),": Retrive the current state of a vehicle's doors."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleParamsCarDoors",children:"SetVehicleParamsCarDoors"}),": Open and close the doors of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return o}});var i=s(67294);let r={},n=i.createContext(r);function o(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
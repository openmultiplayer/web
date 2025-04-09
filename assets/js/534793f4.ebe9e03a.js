"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53855"],{93878:function(e,t,i){i.r(t),i.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/functions/GetVehicleModelInfo","title":"GetVehicleModelInfo","description":"Retrieve information about a specific vehicle model such as the size or position of seats.","source":"@site/docs/scripting/functions/GetVehicleModelInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleModelInfo","permalink":"/docs/scripting/functions/GetVehicleModelInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleModelInfo.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleModelInfo","sidebar_label":"GetVehicleModelInfo","description":"Retrieve information about a specific vehicle model such as the size or position of seats.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModelCount","permalink":"/docs/scripting/functions/GetVehicleModelCount"},"next":{"title":"GetVehicleModelsUsed","permalink":"/docs/scripting/functions/GetVehicleModelsUsed"}}'),s=i("85893"),l=i("50065");let o={title:"GetVehicleModelInfo",sidebar_label:"GetVehicleModelInfo",description:"Retrieve information about a specific vehicle model such as the size or position of seats.",tags:["vehicle"]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Retrieve information about a specific vehicle model such as the size or position of seats"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehiclemodel"}),(0,s.jsx)(t.td,{children:"The vehicle model to get info of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["VEHICLE_MODEL_INFO",":infotype"]}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/vehicleinformationtypes",children:"type of information"})," to retrieve."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":x"]}),(0,s.jsx)(t.td,{children:"A float to store the X value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":y"]}),(0,s.jsx)(t.td,{children:"A float to store the Y value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":z"]}),(0,s.jsx)(t.td,{children:"A float to store the Z value."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The vehicle info is stored in the specified variables."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new\n	Float: x, Float: y, Float: z;\n//Get the size of vehicle model 411 (Infernus)\nGetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);\n//Prints "The infernus is 2.3m wide, 5.7m long and 1.3m high" into the console\nprintf("The infernus is %.1fm wide, %.1fm long and %.1fm high", X, Y, Z);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": Get the model id of a vehicle."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/vehicleinformationtypes",children:"Vehicle Information Types"})}),"\n"]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return o}});var n=i(67294);let s={},l=n.createContext(s);function o(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
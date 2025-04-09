"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75285"],{50142:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetVehicleColours","title":"GetVehicleColours","description":"Gets the vehicle colours.","source":"@site/docs/scripting/functions/GetVehicleColours.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleColours","permalink":"/ta/docs/scripting/functions/GetVehicleColours","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleColours.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleColours","sidebar_label":"GetVehicleColours","description":"Gets the vehicle colours.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleCab","permalink":"/ta/docs/scripting/functions/GetVehicleCab"},"next":{"title":"GetVehicleComponentInSlot","permalink":"/ta/docs/scripting/functions/GetVehicleComponentInSlot"}}'),i=n("85893"),l=n("50065");let o={title:"GetVehicleColours",sidebar_label:"GetVehicleColours",description:"Gets the vehicle colours.",tags:["vehicle"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the vehicle colours."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vehicleid"}),(0,i.jsx)(t.td,{children:"The ID of the vehicle."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&colour1"}),(0,i.jsx)(t.td,{children:"A variable in which to store the colour1 value, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&colour2"}),(0,i.jsx)(t.td,{children:"A variable in which to store the colour2 value, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n\n    new \n        colour1,\n        colour2;\n\n    GetVehicleColours(vehicleid, colour1, colour2);\n    // colour1 = 6\n    // colour2 = 0\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ChangeVehicleColours",children:"ChangeVehicleColours"}),": Change a vehicle's primary and secondary colors."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehiclecolorid",children:"Vehicle Colour IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(67294);let i={},l=r.createContext(i);function o(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
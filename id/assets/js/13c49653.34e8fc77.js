"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11724"],{75565:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>s,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/VehicleCanHaveComponent","title":"VehicleCanHaveComponent","description":"Is the component legal on a vehicle model?","source":"@site/docs/scripting/functions/VehicleCanHaveComponent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/VehicleCanHaveComponent","permalink":"/id/docs/scripting/functions/VehicleCanHaveComponent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/VehicleCanHaveComponent.md","tags":[{"inline":true,"label":"vehicle","permalink":"/id/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"VehicleCanHaveComponent","sidebar_label":"VehicleCanHaveComponent","description":"Is the component legal on a vehicle model?","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"VectorSize","permalink":"/id/docs/scripting/functions/VectorSize"},"next":{"title":"VehicleColourIndexToColour","permalink":"/id/docs/scripting/functions/VehicleColourIndexToColour"}}'),o=t("85893"),l=t("50065");let c={title:"VehicleCanHaveComponent",sidebar_label:"VehicleCanHaveComponent",description:"Is the component legal on a vehicle model?",tags:["vehicle"]},r=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Is the component legal on the vehicle model?"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../resources/vehicleid",children:"modelid"})}),(0,o.jsx)(n.td,{children:"Vehicle Model ID"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"component"})}),(0,o.jsx)(n.td,{children:"ID of the component to check."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"true"})," - The component is legal on the vehicle."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"false"})," - The component is illegal on the vehicle."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'new vehicleid = GetPlayerVehicleID(playerid);\n\nif (VehicleCanHaveComponent(GetVehicleModel(vehicleid), 1010))\n{\n    SendClientMessage(playerid, 0x00FF00FF, "Nitro is legal on this vehicle.");\n}\nelse\n{\n    SendClientMessage(playerid, 0xFF0000FF, "Nitro is illegal on this vehicle.");\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"RemoveVehicleComponent",children:"RemoveVehicleComponent"}),": Remove a component from a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Check what components a vehicle has."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Check the type of component via the ID."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"Car Component IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var i=t(67294);let o={},l=i.createContext(o);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
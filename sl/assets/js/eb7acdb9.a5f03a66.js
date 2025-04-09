"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96311"],{14111:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/RemoveVehicleComponent","title":"RemoveVehicleComponent","description":"Remove a component from a vehicle.","source":"@site/docs/scripting/functions/RemoveVehicleComponent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemoveVehicleComponent","permalink":"/sl/docs/scripting/functions/RemoveVehicleComponent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RemoveVehicleComponent.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RemoveVehicleComponent","sidebar_label":"RemoveVehicleComponent","description":"Remove a component from a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemoveServerRule","permalink":"/sl/docs/scripting/functions/RemoveServerRule"},"next":{"title":"RepairVehicle","permalink":"/sl/docs/scripting/functions/RepairVehicle"}}'),l=t("85893"),o=t("50065");let c={title:"RemoveVehicleComponent",sidebar_label:"RemoveVehicleComponent",description:"Remove a component from a vehicle.",tags:["vehicle"]},s=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Remove a component from a vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"ID of the vehicle."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"../resources/carcomponentid",children:"component"})}),(0,l.jsx)(n.td,{children:"ID of the component to remove."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The component was successfully removed from the vehicle."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The component was not removed because the vehicle does not exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"// Remove Nitro from player vehicle\nnew vehicleid = GetPlayerVehicleID(playerid);\nRemoveVehicleComponent(vehicleid, 1010);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Check what components a vehicle has."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Check the type of component via the ID."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"VehicleCanHaveComponent",children:"VehicleCanHaveComponent"}),": Is the component legal on the vehicle?"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Called when a vehicle is modded."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/carcomponentid",children:"Car Component IDs"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let l={},o=i.createContext(l);function c(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
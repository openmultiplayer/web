"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76016"],{79999:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/LinkVehicleToInterior","title":"LinkVehicleToInterior","description":"Links a vehicle to an interior.","source":"@site/docs/scripting/functions/LinkVehicleToInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/LinkVehicleToInterior","permalink":"/docs/scripting/functions/LinkVehicleToInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/LinkVehicleToInterior.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"LinkVehicleToInterior","sidebar_label":"LinkVehicleToInterior","description":"Links a vehicle to an interior.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"LimitPlayerMarkerRadius","permalink":"/docs/scripting/functions/LimitPlayerMarkerRadius"},"next":{"title":"ManualVehicleEngineAndLights","permalink":"/docs/scripting/functions/ManualVehicleEngineAndLights"}}'),r=n("85893"),s=n("50065");let l={title:"LinkVehicleToInterior",sidebar_label:"LinkVehicleToInterior",description:"Links a vehicle to an interior.",tags:["vehicle"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Links a vehicle to an interior. Vehicles can only be seen by players in the same interior (SetPlayerInterior)."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"The ID of the vehicle to link to an interior."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"interiorid"}),(0,r.jsxs)(i.td,{children:["The ",(0,r.jsx)(i.a,{href:"../resources/interiorids",children:"Interior ID"})," to link it to."]})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"false"})," - The function failed to execute. This means the vehicle does not exist."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);\n    LinkVehicleToInterior(vehicleId, 6);\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetVehicleInterior",children:"GetVehicleInterior"}),": Get the interior id of a vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": Set the virtual world of a vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"../resources/interiorids",children:"Interior IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return l}});var t=n(67294);let r={},s=t.createContext(r);function l(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);
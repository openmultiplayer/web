"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92934"],{86812:function(e,i,t){t.r(i),t.d(i,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetVehiclePoolSize","title":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","source":"@site/docs/scripting/functions/GetVehiclePoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePoolSize","permalink":"/fil/docs/scripting/functions/GetVehiclePoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehiclePoolSize.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePoolSize","sidebar_label":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsSirenState","permalink":"/fil/docs/scripting/functions/GetVehicleParamsSirenState"},"next":{"title":"GetVehiclePos","permalink":"/fil/docs/scripting/functions/GetVehiclePos"}}'),r=t("85893"),o=t("50065");let l={title:"GetVehiclePoolSize",sidebar_label:"GetVehiclePoolSize",description:"Gets the highest vehicleid currently in use on the server.",tags:["vehicle"]},s=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["Gets the highest vehicleid currently in use on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,r.jsx)(i.code,{children:"0"})," even when there are no vehicles.  fixes.inc and open.mp correct this to return ",(0,r.jsx)(i.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,r.jsx)(i.code,{children:"MAX_VEHICLES"})," or ",(0,r.jsx)(i.code,{children:"foreach"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"RepairAllVehicles()\n{\n    // vehicleids start at 1\n    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)\n    {\n        RepairVehicle(i);\n    }\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPlayerPoolSize",children:"GetPlayerPoolSize"}),": Gets the highest playerid connected to the server."]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return l}});var n=t(67294);let r={},o=n.createContext(r);function l(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);
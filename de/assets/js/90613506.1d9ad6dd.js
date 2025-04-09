"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92934"],{86812:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetVehiclePoolSize","title":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","source":"@site/docs/scripting/functions/GetVehiclePoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePoolSize","permalink":"/de/docs/scripting/functions/GetVehiclePoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehiclePoolSize.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePoolSize","sidebar_label":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsSirenState","permalink":"/de/docs/scripting/functions/GetVehicleParamsSirenState"},"next":{"title":"GetVehiclePos","permalink":"/de/docs/scripting/functions/GetVehiclePos"}}'),r=i("85893"),o=i("50065");let s={title:"GetVehiclePoolSize",sidebar_label:"GetVehiclePoolSize",description:"Gets the highest vehicleid currently in use on the server.",tags:["vehicle"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Gets the highest vehicleid currently in use on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,r.jsx)(t.code,{children:"0"})," even when there are no vehicles.  fixes.inc and open.mp correct this to return ",(0,r.jsx)(t.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,r.jsx)(t.code,{children:"MAX_VEHICLES"})," or ",(0,r.jsx)(t.code,{children:"foreach"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"RepairAllVehicles()\n{\n    // vehicleids start at 1\n    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)\n    {\n        RepairVehicle(i);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerPoolSize",children:"GetPlayerPoolSize"}),": Gets the highest playerid connected to the server."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return s}});var n=i(67294);let r={},o=n.createContext(r);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
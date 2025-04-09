"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["14601"],{67250:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/GetVehicleComponentInSlot","title":"GetVehicleComponentInSlot","description":"Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.","source":"@site/docs/scripting/functions/GetVehicleComponentInSlot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleComponentInSlot","permalink":"/pt-BR/docs/scripting/functions/GetVehicleComponentInSlot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleComponentInSlot.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleComponentInSlot","sidebar_label":"GetVehicleComponentInSlot","description":"Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleColours","permalink":"/pt-BR/docs/scripting/functions/GetVehicleColours"},"next":{"title":"GetVehicleComponentType","permalink":"/pt-BR/docs/scripting/functions/GetVehicleComponentType"}}'),l=t("85893"),o=t("50065");let s={title:"GetVehicleComponentInSlot",sidebar_label:"GetVehicleComponentInSlot",description:"Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.",tags:["vehicle"]},c=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to check for the component."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["CARMODTYPE",":slot"]}),(0,l.jsxs)(n.td,{children:["The ",(0,l.jsx)(n.a,{href:"../resources/Componentslots",children:"component slot"})," to check for components."]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"The ID of the component installed in the specified slot."}),"\n",(0,l.jsxs)(n.p,{children:["Returns ",(0,l.jsx)(n.strong,{children:"0"})," if no component in specified vehicle's specified slot, or if vehicle doesn't exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/myspoiler", cmdtext, true))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return 1;\n        }\n\n        new\n            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);\n\n        if (component == 1049)\n        {\n            SendClientMessage(playerid, -1, "You have an Alien spoiler installed in your Elegy!");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"Known Bug(s):"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Doesn't work for CARMODTYPE_STEREO."}),"\n",(0,l.jsx)(n.li,{children:"Both front bull bars and front bumper components are saved in the CARMODTYPE_FRONT_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last."}),"\n",(0,l.jsx)(n.li,{children:"Both rear bull bars and rear bumper components are saved in the CARMODTYPE_REAR_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last."}),"\n",(0,l.jsx)(n.li,{children:"Both left side skirt and right side skirt are saved in the CARMODTYPE_SIDESKIRT slot. If a vehicle has both of them installed, this function will only return the one which was installed last."}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Check the type of component via the ID."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Called when a vehicle is modded."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/Componentslots",children:"Vehicle Component Slots"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var i=t(67294);let l={},o=i.createContext(l);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
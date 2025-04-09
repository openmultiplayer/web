"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68826"],{50304:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/IsValidVehicle","title":"IsValidVehicle","description":"Check if a vehicle is created.","source":"@site/docs/scripting/functions/IsValidVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidVehicle","permalink":"/id/docs/scripting/functions/IsValidVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/id/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsValidVehicle","sidebar_label":"IsValidVehicle","description":"Check if a vehicle is created.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsValidTimer","permalink":"/id/docs/scripting/functions/IsValidTimer"},"next":{"title":"IsVehicleDead","permalink":"/id/docs/scripting/functions/IsVehicleDead"}}'),s=n("85893"),l=n("50065");let r={title:"IsValidVehicle",sidebar_label:"IsValidVehicle",description:"Check if a vehicle is created.",tags:["vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["This function is not present in the old libraries packaged with the SA-MP server however the ",(0,s.jsx)(i.a,{href:"https://github.com/pawn-lang/samp-stdlib",children:"latest versions of the maintained libraries"})," contain this and other formerly missing declarations."]})}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Check if a vehicle is created."}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"vehicleid"}),(0,s.jsx)(i.td,{children:"The vehicle to check for existance"})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"true"})," if the vehicle exists, otherwise ",(0,s.jsx)(i.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'#if !defined IsValidVehicle\n    native IsValidVehicle(vehicleid);\n#endif\n\n// Count vehicles\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/countvehicles", true))\n    {\n        new\n            count,\n            string[128];\n\n        for (new i = 0; i < MAX_VEHICLES; i++)\n        {\n            if (IsValidVehicle(i))\n            {\n                count++;\n            }\n        }\n\n        format(string, sizeof(string), "* There are %d valid spawned vehicles on this server.", count);\n        SendClientMessage(playerid, 0x33CCCCFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": Get the model id of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return r}});var t=n(67294);let s={},l=t.createContext(s);function r(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
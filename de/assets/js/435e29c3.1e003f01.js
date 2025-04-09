"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5285"],{9645:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/GetVehicleDistanceFromPoint","title":"GetVehicleDistanceFromPoint","description":"This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate.","source":"@site/docs/scripting/functions/GetVehicleDistanceFromPoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleDistanceFromPoint","permalink":"/de/docs/scripting/functions/GetVehicleDistanceFromPoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetVehicleDistanceFromPoint.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleDistanceFromPoint","sidebar_label":"GetVehicleDistanceFromPoint","description":"This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleDamageStatus","permalink":"/de/docs/scripting/functions/GetVehicleDamageStatus"},"next":{"title":"GetVehicleDriver","permalink":"/de/docs/scripting/functions/GetVehicleDriver"}}'),c=n("85893"),a=n("50065");let s={title:"GetVehicleDistanceFromPoint",sidebar_label:"GetVehicleDistanceFromPoint",description:"This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate.",tags:["vehicle"]},r=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate. This can be useful to detect how far a vehicle away is from a location."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vehicleid"}),(0,c.jsx)(t.td,{children:"The ID of the vehicle to calculate the distance for."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":x"]}),(0,c.jsx)(t.td,{children:"The X map coordinate."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":y"]}),(0,c.jsx)(t.td,{children:"The Y map coordinate."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":z"]}),(0,c.jsx)(t.td,{children:"The Z map coordinate."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"A float containing the distance from the point specified in the coordinates."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"/* when the player types 'vendingmachine' in to the chat box, they'll see this.*/\npublic OnPlayerText(playerid, text[])\n{\n    if (strcmp(text, \"vendingmachine\", true) == 0)\n    {\n        new\n            string[64],\n            vehicleid = GetPlayerVehicleID(playerid);\n        \n        new\n            Float:distance = GetVehicleDistanceFromPoint(vehicleid, 237.9, 115.6, 1010.2);\n\n        format(string, sizeof(string), \"You're %.2f away from our vending machine.\", distance);\n        SendClientMessage(playerid, 0xA9C4E4FF, string);\n    }\n    return 0;\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerDistanceFromPoint",children:"GetPlayerDistanceFromPoint"}),": Get the distance between a player and a point."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Get the position of a vehicle."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var i=n(67294);let c={},a=i.createContext(c);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
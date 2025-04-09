"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41673"],{82750:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/IsPlayerInVehicle","title":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","source":"@site/docs/scripting/functions/IsPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInVehicle","permalink":"/vi/docs/scripting/functions/IsPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsPlayerInVehicle","sidebar_label":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInRangeOfPoint","permalink":"/vi/docs/scripting/functions/IsPlayerInRangeOfPoint"},"next":{"title":"IsPlayerNPC","permalink":"/vi/docs/scripting/functions/IsPlayerNPC"}}'),l=i("85893"),r=i("50065");let s={title:"IsPlayerInVehicle",sidebar_label:"IsPlayerInVehicle",description:"Checks if a player is in a specific vehicle.",tags:["player","vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Checks if a player is in a specific vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"ID of the player."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"ID of the vehicle. Note: NOT the modelid!"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - Player IS in the vehicle."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - Player is NOT in the vehicle."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new gSpecialCar;\n\npublic OnGameModeInit()\n{\n    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)\n    {\n        if (IsPlayerInVehicle(playerid, gSpecialCar))\n        {\n            SendClientMessage(playerid, -1, "You\'re in the special car!");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInAnyVehicle",children:"IsPlayerInAnyVehicle"}),": Check if a player is in any vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(67294);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
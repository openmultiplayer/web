"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["67217"],{59638:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>h,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/PutPlayerInVehicle","title":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/PutPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PutPlayerInVehicle","permalink":"/th/docs/scripting/functions/PutPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PutPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PutPlayerInVehicle","sidebar_label":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawUseBox","permalink":"/th/docs/scripting/functions/PlayerTextDrawUseBox"},"next":{"title":"RedirectDownload","permalink":"/th/docs/scripting/functions/RedirectDownload"}}'),l=t("85893"),r=t("50065");let c={title:"PutPlayerInVehicle",sidebar_label:"PutPlayerInVehicle",description:"Puts a player in a vehicle.",tags:["player","vehicle"]},s=void 0,a={},h=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(n.p,{children:"Puts a player in a vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to put in a vehicle."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to put the player in."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"seatid"}),(0,l.jsx)(n.td,{children:"The ID of the seat to put the player in."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(n.p,{children:"1: The function was executed successfully."}),"\n",(0,l.jsx)(n.p,{children:"0: The function failed to execute. The player or vehicle don't exist."}),"\n",(0,l.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerEnterVehicle(playerid,vehicleid,ispassanger)\n{\n    PutPlayerInVehicle(playerid, vehicleid, 0);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"0 - Driver\n1 - Front passenger\n2 - Back-left passenger\n3 - Back-right passenger\n4+ - Passenger seats (coach etc.)\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"You can use GetPlayerVehicleSeat in a loop to check if a seat is occupied by any players."})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"If the seat is invalid or is taken, will cause a crash when they EXIT the vehicle."})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"RemovePlayerFromVehicle: Throw a player out of their vehicle."}),"\n",(0,l.jsx)(n.li,{children:"GetPlayerVehicleID: Get the ID of the vehicle the player is in."}),"\n",(0,l.jsx)(n.li,{children:"GetPlayerVehicleSeat: Check what seat a player is in."}),"\n",(0,l.jsx)(n.li,{children:"OnPlayerEnterVehicle: Called when a player starts to enter a vehicle."}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(67294);let l={},r=i.createContext(l);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
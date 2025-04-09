"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86682"],{62282:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>h,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/PutPlayerInVehicle","title":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","source":"@site/docs/scripting/functions/PutPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PutPlayerInVehicle","permalink":"/it/docs/scripting/functions/PutPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PutPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PutPlayerInVehicle","sidebar_label":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawUseBox","permalink":"/it/docs/scripting/functions/PlayerTextDrawUseBox"},"next":{"title":"RedirectDownload","permalink":"/it/docs/scripting/functions/RedirectDownload"}}'),n=i("85893"),r=i("50065");let a={title:"PutPlayerInVehicle",sidebar_label:"PutPlayerInVehicle",description:"Puts a player in a vehicle.",tags:["player","vehicle"]},s=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Puts a player in a vehicle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to put in a vehicle."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle to put the player in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seatid"}),(0,n.jsx)(t.td,{children:"The ID of the seat to put the player in."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player or vehicle doesn't exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'// Global array to track which vehicle belongs to each player.\n// INVALID_VEHICLE_ID is used as a placeholder for players without a vehicle.\nstatic s_PlayerVehicle[MAX_PLAYERS] = { INVALID_VEHICLE_ID, ... };\n\npublic OnPlayerSpawn(playerid)\n{\n    // Check if the player already has a valid vehicle.\n    if (!IsValidVehicle(s_PlayerVehicle[playerid]))\n    {\n        // If not, create a new vehicle for the player and store its ID.\n        s_PlayerVehicle[playerid] = CreateVehicle(411, 0.0, 0.0, 3.5, 0.0, -1, -1, -1);\n    }\n\n    // Mark that the player should be placed in their vehicle once it is fully loaded.\n    // This avoids issues where the vehicle might not yet be loaded on the client\'s side.\n    SetPVarInt(playerid, "PutPlayerInVehicle", 1);\n\n    return 1;\n}\n\npublic OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    // This callback is triggered when a vehicle streams in for the player (i.e. when it is loaded into memory).\n    // Check if the streamed-in vehicle is the player\'s and if they need to be placed in it.\n    if (vehicleid == s_PlayerVehicle[forplayerid] && GetPVarInt(forplayerid, "PutPlayerInVehicle"))\n    {\n        // Put the player into the vehicle.\n        PutPlayerInVehicle(forplayerid, vehicleid, 0);\n\n        // Clear the marker to prevent repeatedly putting the player into the vehicle\n        // (e.g., if the player leaves the vehicle and it streams in again later).\n        DeletePVar(forplayerid, "PutPlayerInVehicle");\n    }\n\n    return 1;\n}\n\n'})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"ID"}),(0,n.jsx)(t.th,{children:"Seat"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Driver"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Front passenger"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Back-left passenger"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"Back-right passenger"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4+"}),(0,n.jsx)(t.td,{children:"Passenger seats (coach etc.)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"})," in a loop to check if a seat is occupied by any players."]})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If the seat is invalid or already taken, the client will crash when they EXIT the vehicle."}),"\n",(0,n.jsx)(t.li,{children:"Putting a player into a vehicle that is not streamed in can be unreliable. This is due to a potential client-side issue where the vehicle may not have fully loaded into memory yet."}),"\n",(0,n.jsx)(t.li,{children:"This also applies when attempting to put a player into a vehicle that was just created."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Throw a player out of their vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetVehicleSeats",children:"GetVehicleSeats"}),": Gets the number of seats in the vehicle."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),": Called when a player starts to enter a vehicle."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return a}});var l=i(67294);let n={},r=l.createContext(n);function a(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);
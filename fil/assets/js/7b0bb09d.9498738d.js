"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59038"],{76450:function(e,t,c){c.r(t),c.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>s,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/AttachPlayerObjectToVehicle","title":"AttachPlayerObjectToVehicle","description":"Attach a player object to a vehicle.","source":"@site/docs/scripting/functions/AttachPlayerObjectToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachPlayerObjectToVehicle","permalink":"/fil/docs/scripting/functions/AttachPlayerObjectToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachPlayerObjectToVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fil/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/fil/docs/tags/playerobject"},{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AttachPlayerObjectToVehicle","sidebar_label":"AttachPlayerObjectToVehicle","description":"Attach a player object to a vehicle.","tags":["player","object","playerobject","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AttachPlayerObjectToPlayer","permalink":"/fil/docs/scripting/functions/AttachPlayerObjectToPlayer"},"next":{"title":"AttachTrailerToVehicle","permalink":"/fil/docs/scripting/functions/AttachTrailerToVehicle"}}'),l=c("85893"),n=c("50065");let i={title:"AttachPlayerObjectToVehicle",sidebar_label:"AttachPlayerObjectToVehicle",description:"Attach a player object to a vehicle.",tags:["player","object","playerobject","vehicle"]},a=void 0,o={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Attach a player object to a vehicle."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player the object was created for."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objectid"}),(0,l.jsx)(t.td,{children:"The ID of the object to attach to the vehicle."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"parentid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to attach the object to."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,l.jsx)(t.td,{children:"The X position offset for attachment."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,l.jsx)(t.td,{children:"The Y position offset for attachment."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,l.jsx)(t.td,{children:"The Z position offset for attachment."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,l.jsx)(t.td,{children:"The X rotation offset for attachment."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,l.jsx)(t.td,{children:"The Y rotation offset for attachment."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,l.jsx)(t.td,{children:"The Z rotation offset for attachment."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER) // If player enters vehicle\n    {\n        // Attach massive cow.\n        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n        new vehicleid = GetPlayerVehicleID(playerid);\n\n        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"You need to create the object before attempting to attach it to a vehicle."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move a object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,c){c.d(t,{Z:function(){return a},a:function(){return i}});var r=c(67294);let l={},n=r.createContext(l);function i(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
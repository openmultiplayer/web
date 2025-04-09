"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63813"],{21801:function(e,t,c){c.r(t),c.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/AttachObjectToPlayer","title":"AttachObjectToPlayer","description":"Attach an object to a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToPlayer","permalink":"/th/docs/scripting/functions/AttachObjectToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"AttachObjectToPlayer","sidebar_label":"AttachObjectToPlayer","description":"Attach an object to a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AttachObjectToObject","permalink":"/th/docs/scripting/functions/AttachObjectToObject"},"next":{"title":"AttachObjectToVehicle","permalink":"/th/docs/scripting/functions/AttachObjectToVehicle"}}'),i=c("85893"),r=c("50065");let s={title:"AttachObjectToPlayer",sidebar_label:"AttachObjectToPlayer",description:"Attach an object to a player.",tags:["player"]},o=void 0,a={},l=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Attach an object to a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to attach to the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to attach the object to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,i.jsx)(t.td,{children:"The distance between the player and the object in the X direction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,i.jsx)(t.td,{children:"The distance between the player and the object in the Y direction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,i.jsx)(t.td,{children:"The distance between the player and the object in the Z direction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotX"]}),(0,i.jsx)(t.td,{children:"The X rotation between the object and the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotY"]}),(0,i.jsx)(t.td,{children:"The Y rotation between the object and the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,i.jsx)(t.td,{children:"The Z rotation between the object and the player."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"This function always returns 0."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new myobject;\nmyobject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\nAttachObjectToPlayer(myobject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Attach an object to a vehicle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachObjectToObject",children:"AttachObjectToObject"}),": Attach an object to an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,c){c.d(t,{Z:function(){return o},a:function(){return s}});var n=c(67294);let i={},r=n.createContext(i);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
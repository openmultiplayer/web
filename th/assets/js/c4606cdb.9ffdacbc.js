"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["35918"],{64318:function(t,e,c){c.r(e),c.d(e,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>h,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/functions/AttachObjectToObject","title":"AttachObjectToObject","description":"You can use this function to attach objects to other objects.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToObject","permalink":"/th/docs/scripting/functions/AttachObjectToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToObject.md","tags":[],"version":"current","frontMatter":{"title":"AttachObjectToObject","sidebar_label":"AttachObjectToObject","description":"You can use this function to attach objects to other objects.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AttachCameraToPlayerObject","permalink":"/th/docs/scripting/functions/AttachCameraToPlayerObject"},"next":{"title":"AttachObjectToPlayer","permalink":"/th/docs/scripting/functions/AttachObjectToPlayer"}}'),i=c("85893"),o=c("50065");let s={title:"AttachObjectToObject",sidebar_label:"AttachObjectToObject",description:"You can use this function to attach objects to other objects.",tags:[]},r=void 0,a={},h=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function l(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsx)(e.p,{children:"This function was added in SA-MP 0.3d and will not work in earlier versions!"})}),"\n",(0,i.jsx)(e.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(e.p,{children:"You can use this function to attach objects to other objects. The objects will folow the main object."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"objectid"}),(0,i.jsx)(e.td,{children:"The object to attach to another object."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"attachtoid"}),(0,i.jsx)(e.td,{children:"The object to attach the object to."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":OffsetX"]}),(0,i.jsx)(e.td,{children:"The distance between the main object and the object in the X direction."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":OffsetY"]}),(0,i.jsx)(e.td,{children:"The distance between the main object and the object in the Y direction."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":OffsetZ"]}),(0,i.jsx)(e.td,{children:"The distance between the main object and the object in the Z direction."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":RotX"]}),(0,i.jsx)(e.td,{children:"The X rotation between the object and the main object."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":RotY"]}),(0,i.jsx)(e.td,{children:"The Y rotation between the object and the main object."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":RotZ"]}),(0,i.jsx)(e.td,{children:"The Z rotation between the object and the main object."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SyncRotation"}),(0,i.jsx)(e.td,{children:"If set to 0, objectid's rotation will not change with attachtoid's."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(e.p,{children:"1: The function executed successfully."}),"\n",(0,i.jsx)(e.p,{children:"0: The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists."}),"\n",(0,i.jsx)(e.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"new objectid = CreateObject(...);\nnew attachtoid = CreateObject(...);\n\nAttachObjectToObject(objectid, attachtoid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"Both objects need to be created before attempting to attach them. There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers."})}),"\n",(0,i.jsx)(e.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Attach an object to a vehicle."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/th/docs/scripting/functions/GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n"]})]})}function d(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},50065:function(t,e,c){c.d(e,{Z:function(){return r},a:function(){return s}});var n=c(67294);let i={},o=n.createContext(i);function s(t){let e=n.useContext(o);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);
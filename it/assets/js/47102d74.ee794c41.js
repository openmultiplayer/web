"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95314"],{46753:function(e,t,c){c.r(t),c.d(t,{default:()=>j,frontMatter:()=>r,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/AttachObjectToObject","title":"AttachObjectToObject","description":"You can use this function to attach objects to other objects.","source":"@site/docs/scripting/functions/AttachObjectToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToObject","permalink":"/it/docs/scripting/functions/AttachObjectToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachObjectToObject.md","tags":[{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"AttachObjectToObject","sidebar_label":"AttachObjectToObject","description":"You can use this function to attach objects to other objects.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"AttachCameraToPlayerObject","permalink":"/it/docs/scripting/functions/AttachCameraToPlayerObject"},"next":{"title":"AttachObjectToPlayer","permalink":"/it/docs/scripting/functions/AttachObjectToPlayer"}}'),o=c("85893"),i=c("50065");let r={title:"AttachObjectToObject",sidebar_label:"AttachObjectToObject",description:"You can use this function to attach objects to other objects.",tags:["object"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"You can use this function to attach objects to other objects. The objects will follow the main object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The object to attach to another object."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"parentid"}),(0,o.jsx)(t.td,{children:"The object to attach the object to."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,o.jsx)(t.td,{children:"The distance between the main object and the object in the X direction."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,o.jsx)(t.td,{children:"The distance between the main object and the object in the Y direction."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,o.jsx)(t.td,{children:"The distance between the main object and the object in the Z direction."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,o.jsx)(t.td,{children:"The X rotation between the object and the main object."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,o.jsx)(t.td,{children:"The Y rotation between the object and the main object."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,o.jsx)(t.td,{children:"The Z rotation between the object and the main object."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["bool",":syncRotation"]}),(0,o.jsxs)(t.td,{children:["If set to ",(0,o.jsx)(t.code,{children:"false"}),", objectid's rotation will not change with attachtoid's."]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new gObjectId = CreateObject(...);\nnew gAttachToId = CreateObject(...);\n\nAttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Both objects need to be created before attempting to attach them."})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.p,{children:"There is no player-object version of this function in SA-MP."}),(0,o.jsxs)(t.p,{children:["But there is ",(0,o.jsx)(t.a,{href:"AttachPlayerObjectToObject",children:"AttachPlayerObjectToObject"})," in open.mp"]})]}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Attach an object to a vehicle."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,c){c.d(t,{Z:function(){return s},a:function(){return r}});var n=c(67294);let o={},i=n.createContext(o);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
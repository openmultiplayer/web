"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["27059"],{93205:function(e,t,c){c.r(t),c.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>s,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/AttachPlayerObjectToObject","title":"AttachPlayerObjectToObject","description":"You can use this function to attach player-objects to other player-objects.","source":"@site/docs/scripting/functions/AttachPlayerObjectToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachPlayerObjectToObject","permalink":"/ta/docs/scripting/functions/AttachPlayerObjectToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachPlayerObjectToObject.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"object","permalink":"/ta/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/ta/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"AttachPlayerObjectToObject","sidebar_label":"AttachPlayerObjectToObject","description":"You can use this function to attach player-objects to other player-objects.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"AttachObjectToVehicle","permalink":"/ta/docs/scripting/functions/AttachObjectToVehicle"},"next":{"title":"AttachPlayerObjectToPlayer","permalink":"/ta/docs/scripting/functions/AttachPlayerObjectToPlayer"}}'),r=c("85893"),o=c("50065");let a={title:"AttachPlayerObjectToObject",sidebar_label:"AttachPlayerObjectToObject",description:"You can use this function to attach player-objects to other player-objects.",tags:["player","object","playerobject"]},i=void 0,l={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:c}=t;return c||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"You can use this function to attach player-objects to other player-objects. The objects will follow the main object."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The player-object to attach to another player-object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"parentid"}),(0,r.jsx)(t.td,{children:"The object to attach the object to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,r.jsx)(t.td,{children:"The distance between the main object and the object in the X direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,r.jsx)(t.td,{children:"The distance between the main object and the object in the Y direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,r.jsx)(t.td,{children:"The distance between the main object and the object in the Z direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotX"]}),(0,r.jsx)(t.td,{children:"The X rotation between the object and the main object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotY"]}),(0,r.jsx)(t.td,{children:"The Y rotation between the object and the main object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,r.jsx)(t.td,{children:"The Z rotation between the object and the main object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":syncRotation"]}),(0,r.jsxs)(t.td,{children:["If set to ",(0,r.jsx)(t.code,{children:"false"}),", objectid's rotation will not change with parentid's."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"false"})," - The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (parentid) exists."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new objectid = CreatePlayerObject(...);\nnew parentid = CreatePlayerObject(...);\n\nAttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Both objects need to be created before attempting to attach them."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToObject",children:"AttachObjectToObject"}),": Attach an object to other object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Attach an object to a vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,c){c.d(t,{Z:function(){return i},a:function(){return a}});var n=c(67294);let r={},o=n.createContext(r);function a(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
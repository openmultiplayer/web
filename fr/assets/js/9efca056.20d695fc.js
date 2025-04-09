"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11706"],{88423:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>s,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerObjectSyncRotation","title":"GetPlayerObjectSyncRotation","description":"Get the sync rotation of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectSyncRotation.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectSyncRotation","permalink":"/fr/docs/scripting/functions/GetPlayerObjectSyncRotation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectSyncRotation.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fr/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/fr/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectSyncRotation","sidebar_label":"GetPlayerObjectSyncRotation","description":"Get the sync rotation of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectRot","permalink":"/fr/docs/scripting/functions/GetPlayerObjectRot"},"next":{"title":"GetPlayerPickupModel","permalink":"/fr/docs/scripting/functions/GetPlayerPickupModel"}}'),o=n("85893"),c=n("50065");let i={title:"GetPlayerObjectSyncRotation",sidebar_label:"GetPlayerObjectSyncRotation",description:"Get the sync rotation of a player-object.",tags:["player","object","playerobject"]},a=void 0,l={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Get the sync rotation of a player-object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the player-object."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:["Returns the sync rotation of the player-object as boolean (",(0,o.jsx)(t.code,{children:"true"}),"/",(0,o.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new objectid = CreatePlayerObject(...);\nnew parentid = CreatePlayerObject(...);\nAttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);\n\nnew bool:syncRotation = GetPlayerObjectSyncRotation(playerid, objectid);\n// syncRotation = true\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachPlayerObjectToObject",children:"AttachPlayerObjectToObject"}),": Attach player-objects to other player-objects."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectSyncRotation",children:"GetObjectSyncRotation"}),": Get the sync rotation of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(67294);let o={},c=r.createContext(o);function i(e){let t=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
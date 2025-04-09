"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2711"],{66004:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>c,metadata:()=>i,assets:()=>s,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/BeginPlayerObjectEditing","title":"BeginPlayerObjectEditing","description":"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.","source":"@site/docs/scripting/functions/BeginPlayerObjectEditing.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/BeginPlayerObjectEditing","permalink":"/pl/docs/scripting/functions/BeginPlayerObjectEditing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/BeginPlayerObjectEditing.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"object","permalink":"/pl/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/pl/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"BeginPlayerObjectEditing","sidebar_label":"BeginPlayerObjectEditing","description":"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"BeginObjectSelecting","permalink":"/pl/docs/scripting/functions/BeginObjectSelecting"},"next":{"title":"BlockIpAddress","permalink":"/pl/docs/scripting/functions/BlockIpAddress"}}'),r=n("85893"),l=n("50065");let c={title:"BeginPlayerObjectEditing",sidebar_label:"BeginPlayerObjectEditing",description:"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.",tags:["player","object","playerobject"]},o=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Allows players to edit a player-object (position and rotation) with a GUI and their mouse."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player that should edit the object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The object to be edited by the player"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"false"})," - The function failed to execute. Player or object not valid."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerSpawn(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/edit", true))\n    {\n        BeginPlayerObjectEditing(playerid, gPlayerObject[playerid]);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"BeginObjectSelecting",children:"BeginObjectSelecting"}),": Select an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EndObjectEditing",children:"EndObjectEditing"}),": Cancel the edition of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var i=n(67294);let r={},l=i.createContext(r);function c(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
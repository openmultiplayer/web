"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19371"],{7489:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetPlayerObjectPos","title":"SetPlayerObjectPos","description":"Sets the position of a player-object to the specified coordinates.","source":"@site/docs/scripting/functions/SetPlayerObjectPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectPos","permalink":"/it/docs/scripting/functions/SetPlayerObjectPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectPos.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/it/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"SetPlayerObjectPos","sidebar_label":"SetPlayerObjectPos","description":"Sets the position of a player-object to the specified coordinates.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectNoCameraCollision","permalink":"/it/docs/scripting/functions/SetPlayerObjectNoCameraCollision"},"next":{"title":"SetPlayerObjectRot","permalink":"/it/docs/scripting/functions/SetPlayerObjectRot"}}'),c=r("85893"),i=r("50065");let l={title:"SetPlayerObjectPos",sidebar_label:"SetPlayerObjectPos",description:"Sets the position of a player-object to the specified coordinates.",tags:["player","object","playerobject"]},s=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Sets the position of a player-object to the specified coordinates."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player whose player-object to set the position of."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the player-object to set the position of. Returned by CreatePlayerObject."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":x"]}),(0,c.jsx)(t.td,{children:"The X coordinate to put the object at."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":y"]}),(0,c.jsx)(t.td,{children:"The Y coordinate to put the object at."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":z"]}),(0,c.jsx)(t.td,{children:"The Z coordinate to put the object at."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"false"})," - The function failed to execute. Player and/or object do not exist."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);\n    return 1;\n}\n\n// Later\nSetPlayerObjectPos(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 14.283400);\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var n=r(67294);let c={},i=n.createContext(c);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
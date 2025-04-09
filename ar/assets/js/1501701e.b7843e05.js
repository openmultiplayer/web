"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["81165"],{609:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>s,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetPlayerObject","title":"GetPlayerCameraTargetPlayerObject","description":"Allows you to retrieve the ID of the player-object the player is looking at.","source":"@site/docs/scripting/functions/GetPlayerCameraTargetPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetPlayerObject","permalink":"/ar/docs/scripting/functions/GetPlayerCameraTargetPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraTargetPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/ar/docs/tags/camera"},{"inline":true,"label":"object","permalink":"/ar/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/ar/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetPlayerObject","sidebar_label":"GetPlayerCameraTargetPlayerObject","description":"Allows you to retrieve the ID of the player-object the player is looking at.","tags":["player","camera","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraTargetPlayer","permalink":"/ar/docs/scripting/functions/GetPlayerCameraTargetPlayer"},"next":{"title":"GetPlayerCameraTargetVehicle","permalink":"/ar/docs/scripting/functions/GetPlayerCameraTargetVehicle"}}'),n=r("85893"),l=r("50065");let i={title:"GetPlayerCameraTargetPlayerObject",sidebar_label:"GetPlayerCameraTargetPlayerObject",description:"Allows you to retrieve the ID of the player-object the player is looking at.",tags:["player","camera","object","playerobject"]},o=void 0,c={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to retrieve the ID of the player-object the player is looking at."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to check"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The ID of the player-object the player is looking at."}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"INVALID_OBJECT_ID"})," (65535) is returned, player isn't looking at any object."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 19174, 978.9045, -986.3599, 40.9522, 0.0000, 0.0000, 228.0000);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/check", true))\n    {\n        new objectid = GetPlayerCameraTargetPlayerObject(playerid);\n        if (objectid == gPlayerObject[playerid])\n        {\n            SendClientMessage(playerid, -1, "You\'re looking at your object.");\n        }\n        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535\n        {\n            SendClientMessage(playerid, -1, "You\'re not looking at any object.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is disabled by default to save bandwidth. Use ",(0,n.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"})," to enable it for each player."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraTargetObject",children:"GetPlayerCameraTargetObject"}),": Get the ID of the object a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetplayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetplayerCameraTargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": Get the ID of the player a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var a=r(67294);let n={},l=a.createContext(n);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
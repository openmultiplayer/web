"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["67909"],{98102:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>s,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetVehicle","title":"GetPlayerCameraTargetVehicle","description":"Get the ID of the vehicle the player is looking at.","source":"@site/docs/scripting/functions/GetPlayerCameraTargetVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetVehicle","permalink":"/ru/docs/scripting/functions/GetPlayerCameraTargetVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraTargetVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"},{"inline":true,"label":"camera","permalink":"/ru/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetVehicle","sidebar_label":"GetPlayerCameraTargetVehicle","description":"Get the ID of the vehicle the player is looking at.","tags":["player","vehicle","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraTargetPlayerObject","permalink":"/ru/docs/scripting/functions/GetPlayerCameraTargetPlayerObject"},"next":{"title":"GetPlayerCameraUpVector","permalink":"/ru/docs/scripting/functions/GetPlayerCameraUpVector"}}'),a=r("85893"),l=r("50065");let i={title:"GetPlayerCameraTargetVehicle",sidebar_label:"GetPlayerCameraTargetVehicle",description:"Get the ID of the vehicle the player is looking at.",tags:["player","vehicle","camera"]},c=void 0,o={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the ID of the vehicle the player is looking at."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:["The vehicle ID of the vehicle the player is looking at. ",(0,a.jsx)(t.code,{children:"INVALID_VEHICLE_ID"})," if none."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new globalVehicleID;\n\npublic OnGameModeInit()\n{\n    globalVehicleID = CreateVehicle(596, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, -1, -1, -1);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    EnablePlayerCameraTarget(playerid, true);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/check", true))\n    {\n        new vehicleid = GetPlayerCameraTargetVehicle(playerid);\n        if (vehicleid == globalVehicleID)\n        {\n            SendClientMessage(playerid, -1, "You\'re looking at your vehicle!");\n        }\n        else\n        {\n            SendClientMessage(playerid, -1, "You\'re not looking at your vehicle.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"This function can (obviously) only return one vehicle ID at a time, while the player may be looking at multiple. It generally seems to detect the closest vehicle first."})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["This function is disabled by default to save bandwidth. Use ",(0,a.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"})," to enable it for each player."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraTargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": Get the ID of the player a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetplayerCameraTargetObject",children:"GetPlayerCameraTargetObject"}),": Get the ID of the object a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"}),": Enable player camera targetting functions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayercameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera fron"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(67294);let a={},l=n.createContext(a);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
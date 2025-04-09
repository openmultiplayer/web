"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["52447"],{61476:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>o,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>r});var l=JSON.parse('{"id":"scripting/functions/DisableRemoteVehicleCollisions","title":"DisableRemoteVehicleCollisions","description":"Disables collisions between occupied vehicles for a player.","source":"@site/docs/scripting/functions/DisableRemoteVehicleCollisions.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableRemoteVehicleCollisions","permalink":"/id/docs/scripting/functions/DisableRemoteVehicleCollisions","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DisableRemoteVehicleCollisions.md","tags":[{"inline":true,"label":"vehicle","permalink":"/id/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"DisableRemoteVehicleCollisions","sidebar_label":"DisableRemoteVehicleCollisions","description":"Disables collisions between occupied vehicles for a player.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"DisablePlayerRaceCheckpoint","permalink":"/id/docs/scripting/functions/DisablePlayerRaceCheckpoint"},"next":{"title":"EditAttachedObject","permalink":"/id/docs/scripting/functions/EditAttachedObject"}}'),s=n("85893"),t=n("50065");let o={title:"DisableRemoteVehicleCollisions",sidebar_label:"DisableRemoteVehicleCollisions",description:"Disables collisions between occupied vehicles for a player.",tags:["vehicle"]},r=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let i={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Disables collisions between occupied vehicles for a player."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"playerid"}),(0,s.jsx)(i.td,{children:"The ID of the player for whom you want to disable collisions."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["bool",":disable"]}),(0,s.jsx)(i.td,{children:"'true' to disable collisions, 'false' to enable collisions."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'new bool:gPlayerVehicleCollision[MAX_PLAYERS];\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/collision", true))\n    {\n        new string[64];\n\n        format(string, sizeof(string), "Vehicle collision for you is now \'%s\'", (gPlayerVehicleCollision[playerid]\xa0== false)\xa0? ("Disabled")\xa0: ("Enabled"));\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n\n        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];\n\n        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);\n        return 1;\n    }\n    return 0;\n}\n'})})]})}function p(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return r},a:function(){return o}});var l=n(67294);let s={},t=l.createContext(s);function o(e){let i=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:i},e.children)}}}]);
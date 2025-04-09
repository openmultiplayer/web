"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78474"],{25980:function(e,t,r){r.r(t),r.d(t,{default:()=>f,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingPlayerObjectID","title":"GetPlayerSurfingPlayerObjectID","description":"Returns the ID of the player-object the player is surfing on.","source":"@site/docs/scripting/functions/GetPlayerSurfingPlayerObjectID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingPlayerObjectID","permalink":"/hu/docs/scripting/functions/GetPlayerSurfingPlayerObjectID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerSurfingPlayerObjectID.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"object","permalink":"/hu/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/hu/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingPlayerObjectID","sidebar_label":"GetPlayerSurfingPlayerObjectID","description":"Returns the ID of the player-object the player is surfing on.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingOffsets","permalink":"/hu/docs/scripting/functions/GetPlayerSurfingOffsets"},"next":{"title":"GetPlayerSurfingVehicleID","permalink":"/hu/docs/scripting/functions/GetPlayerSurfingVehicleID"}}'),i=r("85893"),s=r("50065");let l={title:"GetPlayerSurfingPlayerObjectID",sidebar_label:"GetPlayerSurfingPlayerObjectID",description:"Returns the ID of the player-object the player is surfing on.",tags:["player","object","playerobject"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Returns the ID of the player-object the player is surfing on."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player surfing the object"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The ID of the moving object the player is surfing. If the player isn't surfing a moving object, it will return INVALID_OBJECT_ID"}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"/* when the player types 'objectsurfing' in to the chat box, they'll see this.*/\npublic OnPlayerText(playerid, text[])\n{\n    if (strcmp(text, \"objectsurfing\", true) == 0)\n    {\n        new\n            szMessage[46];\n\n        format(szMessage, sizeof(szMessage), \"You're surfing on object #%d.\", GetPlayerSurfingPlayerObjectID(playerid));\n        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);\n    }\n    return 0;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerSurfingObjectID",children:"GetPlayerSurfingObjectID"}),": Get the ID of the object that the player is surfing on."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerSurfingVehicleID",children:"GetPlayerSurfingVehicleID"}),": Get the ID of the vehicle that the player is surfing (stuck to the roof of)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerSurfingOffsets",children:"GetPlayerSurfingOffsets"}),": Gets a player's surfing offsets."]}),"\n"]})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return l}});var n=r(67294);let i={},s=n.createContext(i);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5554"],{64752:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerCameraFrontVector","title":"GetPlayerCameraFrontVector","description":"This function will return the current direction of player\'s aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.","source":"@site/docs/scripting/functions/GetPlayerCameraFrontVector.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraFrontVector","permalink":"/ro/docs/scripting/functions/GetPlayerCameraFrontVector","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraFrontVector.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/ro/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraFrontVector","sidebar_label":"GetPlayerCameraFrontVector","description":"This function will return the current direction of player\'s aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraAspectRatio","permalink":"/ro/docs/scripting/functions/GetPlayerCameraAspectRatio"},"next":{"title":"GetPlayerCameraMode","permalink":"/ro/docs/scripting/functions/GetPlayerCameraMode"}}'),a=r("85893"),i=r("50065");let o={title:"GetPlayerCameraFrontVector",sidebar_label:"GetPlayerCameraFrontVector",description:"This function will return the current direction of player's aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.",tags:["player","camera"]},s=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["This function will return the current direction of player's aiming in 3-D space, the coords are relative to the camera position, see ",(0,a.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player you want to obtain the camera front vector of"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":x"]}),(0,a.jsx)(t.td,{children:"A float to store the X coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":y"]}),(0,a.jsx)(t.td,{children:"A float to store the Y coordinate, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["&Float",":z"]}),(0,a.jsx)(t.td,{children:"A float to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The position is stored in the specified variables."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'// A simple command to manipulate this vector using the\n// positions from GetPlayerCameraPos. This command will create\n// a hydra missile in the direction of where the player is looking.\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/test camera vector"))\n    {\n        new\n            Float:fPX, Float:fPY, Float:fPZ,\n            Float:fVX, Float:fVY, Float:fVZ,\n            Float:object_x, Float:object_y, Float:object_z;\n\n        // Change me to change the scale you want. A larger scale increases the distance from the camera.\n        // A negative scale will inverse the vectors and make them face in the opposite direction.\n        const\n            Float:fScale = 5.0;\n\n        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);\n        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);\n\n        object_x = fPX + floatmul(fVX, fScale);\n        object_y = fPY + floatmul(fVY, fScale);\n        object_z = fPZ + floatmul(fVZ, fScale);\n\n        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);\n\n        return 1;\n    }\n\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"The camera data can be obtained when the player is in any vehicle or on foot."})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return o}});var n=r(67294);let a={},i=n.createContext(a);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["12268"],{3491:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraPos","title":"GetPlayerCameraPos","description":"Get the position of the player\'s camera.","source":"@site/docs/scripting/functions/GetPlayerCameraPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraPos","permalink":"/hu/docs/scripting/functions/GetPlayerCameraPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraPos.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/hu/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraPos","sidebar_label":"GetPlayerCameraPos","description":"Get the position of the player\'s camera.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraMode","permalink":"/hu/docs/scripting/functions/GetPlayerCameraMode"},"next":{"title":"GetPlayerCameraTargetActor","permalink":"/hu/docs/scripting/functions/GetPlayerCameraTargetActor"}}'),n=r("85893"),s=r("50065");let i={title:"GetPlayerCameraPos",sidebar_label:"GetPlayerCameraPos",description:"Get the position of the player's camera.",tags:["player","camera"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get the position of the player's camera."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to get the camera position of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":x"]}),(0,n.jsx)(t.td,{children:"A float variable to store the X coordinate in, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":y"]}),(0,n.jsx)(t.td,{children:"A float variable to store the Y coordinate in, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":z"]}),(0,n.jsx)(t.td,{children:"A float variable to store the Z coordinate in, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The player's position is stored in the specified variables."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerDisconnect(playerid)\n{\n    new Float:x, Float:y, Float:z;\n    GetPlayerCameraPos(playerid, x, y, z);\n\n    printf("The player left when they had their camera at %f, %f, %f.", x, y, z);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Player's camera positions are only updated once a second, unless aiming.It is recommended to set a 1 second timer if you wish to take action that relies on a player's camera position."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraZoom",children:"GetPlayerCameraZoom"}),": Get the zoom level of a player's camera."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraAspectRatio",children:"GetPlayerCameraAspectRatio"}),": Get the aspect ratio of a player's camera."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetplayerCameraMode",children:"GetPlayerCameraMode"}),": Get a player's camera mode."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerZAim",children:"GetPlayerZAim"}),": Gets a player's Z Aim."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var a=r(67294);let n={},s=a.createContext(n);function i(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
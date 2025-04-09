"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["81150"],{38140:function(e,r,t){t.r(r),t.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraMode","title":"GetPlayerCameraMode","description":"Returns the current GTA camera mode for the requested player.","source":"@site/docs/scripting/functions/GetPlayerCameraMode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraMode","permalink":"/de/docs/scripting/functions/GetPlayerCameraMode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraMode.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/de/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraMode","sidebar_label":"GetPlayerCameraMode","description":"Returns the current GTA camera mode for the requested player.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraFrontVector","permalink":"/de/docs/scripting/functions/GetPlayerCameraFrontVector"},"next":{"title":"GetPlayerCameraPos","permalink":"/de/docs/scripting/functions/GetPlayerCameraPos"}}'),n=t("85893"),s=t("50065");let i={title:"GetPlayerCameraMode",sidebar_label:"GetPlayerCameraMode",description:"Returns the current GTA camera mode for the requested player.",tags:["player","camera"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Returns the current GTA ",(0,n.jsx)(r.a,{href:"../resources/cameramodes",children:"camera mode"})," for the requested player. The camera modes are useful in determining whether a player is aiming, doing a passenger driveby etc."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player whose camera mode to retrieve"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"The camera mode as an integer (or -1 if player is not connected)"}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'/* when the player types \'cameramode\' in to the chat box, they\'ll see this. */\npublic OnPlayerText(playerid, text[])\n{\n    if (strcmp(text, "cameramode", true) == 0)\n    {\n        new string[48];\n        format(string, sizeof(string), "Your camera mode: %d", GetPlayerCameraMode(playerid));\n        SendClientMessage(playerid, 0xA9C4E4FF, string);\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": Set where a player's camera should face."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),": Set a player's camera behind them."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../resources/cameramodes",children:"Camera Modes"})}),"\n"]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return i}});var a=t(67294);let n={},s=a.createContext(n);function i(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);
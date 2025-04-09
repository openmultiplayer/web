"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62481"],{20840:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/functions/SetPlayerCameraLookAt","title":"SetPlayerCameraLookAt","description":"Set the direction a player\'s camera looks at.","source":"@site/docs/scripting/functions/SetPlayerCameraLookAt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerCameraLookAt","permalink":"/it/docs/scripting/functions/SetPlayerCameraLookAt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerCameraLookAt.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/it/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetPlayerCameraLookAt","sidebar_label":"SetPlayerCameraLookAt","description":"Set the direction a player\'s camera looks at.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerAttachedObject","permalink":"/it/docs/scripting/functions/SetPlayerAttachedObject"},"next":{"title":"SetPlayerCameraPos","permalink":"/it/docs/scripting/functions/SetPlayerCameraPos"}}'),n=r("85893"),s=r("50065");let l={title:"SetPlayerCameraLookAt",sidebar_label:"SetPlayerCameraLookAt",description:"Set the direction a player's camera looks at.",tags:["player","camera"]},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set the direction a player's camera looks at. Generally meant to be used in combination with SetPlayerCameraPos."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose camera to set."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":x"]}),(0,n.jsx)(t.td,{children:"The X coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":y"]}),(0,n.jsx)(t.td,{children:"The Y coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":z"]}),(0,n.jsx)(t.td,{children:"The Z coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["CAM_MOVE",":cut"]}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.a,{href:"../resources/cameracutstyles",children:"style"})," of the change. Can be used to interpolate (change slowly) from old pos to new pos using CAMERA_MOVE."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);\nSetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Using the camera functions directly after enabling spectator mode doesn't work."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),": Set a player's camera behind them."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/cameracutstyles",children:"Camera Cut Styles"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var a=r(67294);let n={},s=a.createContext(n);function l(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
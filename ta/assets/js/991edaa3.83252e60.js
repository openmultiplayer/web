"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54705"],{90562:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/SetPlayerCameraPos","title":"SetPlayerCameraPos","description":"Sets the camera to a specific position for a player.","source":"@site/docs/scripting/functions/SetPlayerCameraPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerCameraPos","permalink":"/ta/docs/scripting/functions/SetPlayerCameraPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerCameraPos.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/ta/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetPlayerCameraPos","sidebar_label":"SetPlayerCameraPos","description":"Sets the camera to a specific position for a player.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerCameraLookAt","permalink":"/ta/docs/scripting/functions/SetPlayerCameraLookAt"},"next":{"title":"SetPlayerChatBubble","permalink":"/ta/docs/scripting/functions/SetPlayerChatBubble"}}'),n=r("85893"),i=r("50065");let s={title:"SetPlayerCameraPos",sidebar_label:"SetPlayerCameraPos",description:"Sets the camera to a specific position for a player.",tags:["player","camera"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Sets the camera to a specific position for a player."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID of the player"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":x"]}),(0,n.jsx)(t.td,{children:"The X coordinate to place the camera at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":y"]}),(0,n.jsx)(t.td,{children:"The Y coordinate to place the camera at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":z"]}),(0,n.jsx)(t.td,{children:"The Z coordinate to place the camera at."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified doesn't exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You may also have to use SetPlayerCameraLookAt with this function in order to work properly."}),"\n",(0,n.jsx)(t.li,{children:"Use SetCameraBehindPlayer to reset the camera to behind the player."}),"\n"]})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Using the camera functions directly after enabling spectator mode doesn't work."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": Set where a player's camera should face."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetCameraBehindPlayer",children:"SetCameraBehindPlayer"}),": Set a player's camera behind them."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var a=r(67294);let n={},i=a.createContext(n);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
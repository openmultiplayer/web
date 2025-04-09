"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17916"],{49940:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraZoom","title":"GetPlayerCameraZoom","description":"Retrieves the game camera zoom level for a given player.","source":"@site/docs/scripting/functions/GetPlayerCameraZoom.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraZoom","permalink":"/it/docs/scripting/functions/GetPlayerCameraZoom","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraZoom.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/it/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraZoom","sidebar_label":"GetPlayerCameraZoom","description":"Retrieves the game camera zoom level for a given player.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraUpVector","permalink":"/it/docs/scripting/functions/GetPlayerCameraUpVector"},"next":{"title":"GetPlayerCheckpoint","permalink":"/it/docs/scripting/functions/GetPlayerCheckpoint"}}'),n=r("85893"),i=r("50065");let l={title:"GetPlayerCameraZoom",sidebar_label:"GetPlayerCameraZoom",description:"Retrieves the game camera zoom level for a given player.",tags:["player","camera"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Retrieves the game camera zoom level for a given player."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to get the camera zoom level of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The player's camera zoom level (camera, sniper etc.), a float."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new string[128];\nformat(string, sizeof(string), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This retrieves the zoom level of the GAME Camera (including Sniper scope), not the camera WEAPON."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraAspectRation",children:"GetPlayerCameraAspectRatio"}),": Get the aspect ratio of a player's camera."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return l}});var a=r(67294);let n={},i=a.createContext(n);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
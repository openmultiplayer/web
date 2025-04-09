"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17916"],{49940:function(e,r,t){t.r(r),t.d(r,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraZoom","title":"GetPlayerCameraZoom","description":"Retrieves the game camera zoom level for a given player.","source":"@site/docs/scripting/functions/GetPlayerCameraZoom.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraZoom","permalink":"/ru/docs/scripting/functions/GetPlayerCameraZoom","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraZoom.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/ru/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraZoom","sidebar_label":"GetPlayerCameraZoom","description":"Retrieves the game camera zoom level for a given player.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraUpVector","permalink":"/ru/docs/scripting/functions/GetPlayerCameraUpVector"},"next":{"title":"GetPlayerCheckpoint","permalink":"/ru/docs/scripting/functions/GetPlayerCheckpoint"}}'),n=t("85893"),i=t("50065");let l={title:"GetPlayerCameraZoom",sidebar_label:"GetPlayerCameraZoom",description:"Retrieves the game camera zoom level for a given player.",tags:["player","camera"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Retrieves the game camera zoom level for a given player."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player to get the camera zoom level of."})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"The player's camera zoom level (camera, sniper etc.), a float."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'new string[128];\nformat(string, sizeof(string), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"This retrieves the zoom level of the GAME Camera (including Sniper scope), not the camera WEAPON."})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraAspectRation",children:"GetPlayerCameraAspectRatio"}),": Get the aspect ratio of a player's camera."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return l}});var a=t(67294);let n={},i=a.createContext(n);function l(e){let r=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);
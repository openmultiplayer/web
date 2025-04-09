"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91180"],{46852:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetPlayer","title":"GetPlayerCameraTargetPlayer","description":"Allows you to retrieve the ID of the player the playerid is looking at.","source":"@site/docs/scripting/functions/GetPlayerCameraTargetPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetPlayer","permalink":"/zh-TW/docs/scripting/functions/GetPlayerCameraTargetPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerCameraTargetPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/zh-TW/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetPlayer","sidebar_label":"GetPlayerCameraTargetPlayer","description":"Allows you to retrieve the ID of the player the playerid is looking at.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraTargetObject","permalink":"/zh-TW/docs/scripting/functions/GetPlayerCameraTargetObject"},"next":{"title":"GetPlayerCameraTargetPlayerObject","permalink":"/zh-TW/docs/scripting/functions/GetPlayerCameraTargetPlayerObject"}}'),n=r("85893"),l=r("50065");let i={title:"GetPlayerCameraTargetPlayer",sidebar_label:"GetPlayerCameraTargetPlayer",description:"Allows you to retrieve the ID of the player the playerid is looking at.",tags:["player","camera"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to retrieve the ID of the player the playerid is looking at."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to check"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The ID of the player the playerid is looking at"}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new playerTarget = GetPlayerCameraTargetPlayer(playerid);\n\nif (IsPlayerAdmin(playerTarget))\n{\n    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Do not confuse this function with GetPlayerTargetPlayer. GetPlayerTargetPlayer returns the ID of the player playerid is aming at (with a weapon). GetPlayerCameraTargetPlayer returns the ID of the player playerid is looking at (reference point is the center of the screen)."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraTargetActor",children:"GetPlayerCameraTargetActor"}),": Get the ID of the actor (if any) a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetplayerCameraTargetObject",children:"GetPlayerCameraTargetObject"}),": Get the ID of the object a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayercameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var a=r(67294);let n={},l=a.createContext(n);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);
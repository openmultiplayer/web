"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55875"],{65619:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>a});var l=JSON.parse('{"id":"scripting/functions/GetPlayerDrunkLevel","title":"GetPlayerDrunkLevel","description":"Checks the player\'s level of drunkenness.","source":"@site/docs/scripting/functions/GetPlayerDrunkLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDrunkLevel","permalink":"/sl/docs/scripting/functions/GetPlayerDrunkLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerDrunkLevel.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerDrunkLevel","sidebar_label":"GetPlayerDrunkLevel","description":"Checks the player\'s level of drunkenness.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDistanceFromPoint","permalink":"/sl/docs/scripting/functions/GetPlayerDistanceFromPoint"},"next":{"title":"GetPlayerFacingAngle","permalink":"/sl/docs/scripting/functions/GetPlayerFacingAngle"}}'),r=t("85893"),s=t("50065");let i={title:"GetPlayerDrunkLevel",sidebar_label:"GetPlayerDrunkLevel",description:"Checks the player's level of drunkenness.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Checks the player's level of drunkenness. If the level is less than 2000, the player is sober. The player's level of drunkness goes down slowly automatically (26 levels per second) but will always reach 2000 at the end. The higher drunkenness levels affect the player's camera, and the car driving handling. The level of drunkenness increases when the player drinks from a bottle (You can use SetPlayerSpecialAction to give them bottles)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The player you want to check the drunkenness level of."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"An integer with the level of drunkenness of the player."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerStateChange(playerid, oldstate, newstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)\n    {\n        SendClientMessage(playerid, 0xFFFFFFFF, "Don\'t drink and drive!");\n        RemovePlayerFromVehicle(playerid);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerDrunkLevel",children:"SetPlayerDrunkLevel"}),": Set a player's drunk level."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(67294);let r={},s=l.createContext(r);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
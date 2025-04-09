"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83239"],{18862:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/GetPlayerPos","title":"GetPlayerPos","description":"Get the position of a player, represented by X, Y and Z coordinates.","source":"@site/docs/scripting/functions/GetPlayerPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPos","permalink":"/es/docs/scripting/functions/GetPlayerPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPos.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerPos","sidebar_label":"GetPlayerPos","description":"Get the position of a player, represented by X, Y and Z coordinates.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPoolSize","permalink":"/es/docs/scripting/functions/GetPlayerPoolSize"},"next":{"title":"GetPlayerRaceCheckpoint","permalink":"/es/docs/scripting/functions/GetPlayerRaceCheckpoint"}}'),r=t("85893"),i=t("50065");let a={title:"GetPlayerPos",sidebar_label:"GetPlayerPos",description:"Get the position of a player, represented by X, Y and Z coordinates.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get the position of a player, represented by X, Y and Z coordinates."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to get the position of."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["&Float",":x"]}),(0,r.jsx)(n.td,{children:"A float variable in which to store the X coordinate in, passed by reference."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["&Float",":y"]}),(0,r.jsx)(n.td,{children:"A float variable in which to store the Y coordinate in, passed by reference."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["&Float",":z"]}),(0,r.jsx)(n.td,{children:"A float variable in which to store the Z coordinate in, passed by reference."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," on success."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," on failure (i.e. player not connected)."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Declare 3 float variables to store the X, Y and Z coordinates in\n    new Float:x, Float:y, Float:z;\n\n    // Use GetPlayerPos, passing the 3 float variables we just created\n    GetPlayerPos(playerid, x, y, z);\n\n    // Create a cash pickup at the player's position\n    CreatePickup(1212, 4, x, y, z, -1);\n   return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["This function is known to return unreliable values when used in ",(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," and OnPlayerRequestClass. This is because the player is not spawned."]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Set a player's position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Get the position of a vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInRangeOfPoint",children:"IsPlayerInRangeOfPoint"}),": Check whether a player is in range of a point."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerDistanceFromPoint",children:"GetPlayerDistanceFromPoint"}),": Get the distance between a player and a point."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(67294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
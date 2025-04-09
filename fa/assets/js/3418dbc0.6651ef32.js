"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["24249"],{62502:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/IsPlayerInRangeOfPoint","title":"IsPlayerInRangeOfPoint","description":"Checks if a player is in range of a point.","source":"@site/docs/scripting/functions/IsPlayerInRangeOfPoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInRangeOfPoint","permalink":"/fa/docs/scripting/functions/IsPlayerInRangeOfPoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerInRangeOfPoint.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerInRangeOfPoint","sidebar_label":"IsPlayerInRangeOfPoint","description":"Checks if a player is in range of a point.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInRaceCheckpoint","permalink":"/fa/docs/scripting/functions/IsPlayerInRaceCheckpoint"},"next":{"title":"IsPlayerInVehicle","permalink":"/fa/docs/scripting/functions/IsPlayerInVehicle"}}'),r=t("85893"),s=t("50065");let a={title:"IsPlayerInRangeOfPoint",sidebar_label:"IsPlayerInRangeOfPoint",description:"Checks if a player is in range of a point.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Checks if a player is in range of a point. This native function is faster than the PAWN implementation using distance formula."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":range"]}),(0,r.jsx)(n.td,{children:"The furthest distance the player can be from the point to be in range."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":x"]}),(0,r.jsx)(n.td,{children:"The X coordinate of the point to check the range to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":y"]}),(0,r.jsx)(n.td,{children:"The Y coordinate of the point to check the range to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":z"]}),(0,r.jsx)(n.td,{children:"The Z coordinate of the point to check the range to."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The player is in range of the point."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The player is not in range of the point."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/stadium", true))\n    {\n        if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))\n        {\n            SendClientMessage(playerid, 0xFFFFFFFF, "You are near the stadium entrance!");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerDistanceFromPoint",children:"GetPlayerDistanceFromPoint"}),": Get the distance between a player and a point."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehicleDistanceFromPoint",children:"GetVehicleDistanceFromPoint"}),": Get the distance between a vehicle and a point."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerPos",children:"GetPlayerPos"}),": Get a player's position."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
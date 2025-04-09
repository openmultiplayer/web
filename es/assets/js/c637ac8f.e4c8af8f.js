"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["40498"],{15648:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/SetPlayerVelocity","title":"SetPlayerVelocity","description":"Set a player\'s velocity on the X, Y and Z axes.","source":"@site/docs/scripting/functions/SetPlayerVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVelocity","permalink":"/es/docs/scripting/functions/SetPlayerVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerVelocity.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerVelocity","sidebar_label":"SetPlayerVelocity","description":"Set a player\'s velocity on the X, Y and Z axes.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTime","permalink":"/es/docs/scripting/functions/SetPlayerTime"},"next":{"title":"SetPlayerVirtualWorld","permalink":"/es/docs/scripting/functions/SetPlayerVirtualWorld"}}'),l=n("85893"),r=n("50065");let s={title:"SetPlayerVelocity",sidebar_label:"SetPlayerVelocity",description:"Set a player's velocity on the X, Y and Z axes.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Set a player's velocity on the X, Y and Z axes."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The player to apply the speed to."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":x"]}),(0,l.jsx)(t.td,{children:"The velocity (speed) on the X axis."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":y"]}),(0,l.jsx)(t.td,{children:"The velocity (speed) on the Y axis."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":z"]}),(0,l.jsx)(t.td,{children:"The velocity (speed) on the Z axis."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/jump", cmdtext))\n    {\n        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forces the player to jump (Z velocity + 0.2)\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerVelocity",children:"GetPlayerVelocity"}),": Get a player's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleVelocity",children:"SetVehicleVelocity"}),": Set a vehicle's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleVelocity",children:"GetVehicleVelocity"}),": Get a vehicle's velocity."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var i=n(67294);let l={},r=i.createContext(l);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46128"],{33984:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>l,assets:()=>o,toc:()=>h,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/GetPlayerHealth","title":"GetPlayerHealth","description":"The function GetPlayerHealth allows you to retrieve the health of a player.","source":"@site/docs/scripting/functions/GetPlayerHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerHealth","permalink":"/fil/docs/scripting/functions/GetPlayerHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerHealth.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerHealth","sidebar_label":"GetPlayerHealth","description":"The function GetPlayerHealth allows you to retrieve the health of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerGravity","permalink":"/fil/docs/scripting/functions/GetPlayerGravity"},"next":{"title":"GetPlayerHydraReactorAngle","permalink":"/fil/docs/scripting/functions/GetPlayerHydraReactorAngle"}}'),r=n("85893"),a=n("50065");let i={title:"GetPlayerHealth",sidebar_label:"GetPlayerHealth",description:"The function GetPlayerHealth allows you to retrieve the health of a player.",tags:["player"]},s=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The function GetPlayerHealth allows you to retrieve the health of a player. Useful for cheat detection, among other things."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":health"]}),(0,r.jsx)(t.td,{children:"Float to store health, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - success"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - failure (i.e. player not connected)."]}),"\n",(0,r.jsx)(t.p,{children:"The player's health is stored in the specified variable."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/doctor", true) == 0)\n    {\n        // Sets players health to 50 if it was lower than\n        // 50 before, as soon as he typed /doctor\n        \n        new Float:health;\n        GetPlayerHealth(playerid, health);\n        \n        if (health < 50.0)\n        {\n            SetPlayerHealth(playerid, 50.0);\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Even though the health can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc. Health is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Check the health of a vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Find out how much armour a player has."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var l=n(67294);let r={},a=l.createContext(r);function i(e){let t=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);
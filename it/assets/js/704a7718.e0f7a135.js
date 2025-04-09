"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29478"],{83138:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/IsPlayerNPC","title":"IsPlayerNPC","description":"Check if a player is an actual player or an NPC.","source":"@site/docs/scripting/functions/IsPlayerNPC.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerNPC","permalink":"/it/docs/scripting/functions/IsPlayerNPC","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerNPC.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"npc","permalink":"/it/docs/tags/npc"}],"version":"current","frontMatter":{"title":"IsPlayerNPC","sidebar_label":"IsPlayerNPC","description":"Check if a player is an actual player or an NPC.","tags":["player","npc"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInVehicle","permalink":"/it/docs/scripting/functions/IsPlayerInVehicle"},"next":{"title":"IsPlayerObjectMaterialSlotUsed","permalink":"/it/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed"}}'),i=t("85893"),s=t("50065");let l={title:"IsPlayerNPC",sidebar_label:"IsPlayerNPC",description:"Check if a player is an actual player or an NPC.",tags:["player","npc"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Check if a player is an actual player or an NPC."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The player is an NPC."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The player is not an NPC."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    if (IsPlayerNPC(playerid))\n    {\n        SendClientMessageToAll(-1, "An NPC connected!");\n        return 1;\n    }\n\n    // The other code here won\'t be executed unless its a player\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ConnectNPC",children:"ConnectNPC"}),": Connect an NPC."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
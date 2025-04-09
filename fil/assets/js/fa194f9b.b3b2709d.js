"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96313"],{11657:function(n,e,i){i.r(e),i.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/IsPlayerNPC","title":"IsPlayerNPC","description":"Suriin kung ang isang player ay isang aktwal na player o isang NPC.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerNPC.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerNPC","permalink":"/fil/docs/scripting/functions/IsPlayerNPC","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerNPC.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"npc","permalink":"/fil/docs/tags/npc"}],"version":"current","frontMatter":{"title":"IsPlayerNPC","sidebar_label":"IsPlayerNPC","description":"Suriin kung ang isang player ay isang aktwal na player o isang NPC.","tags":["player","npc"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInVehicle","permalink":"/fil/docs/scripting/functions/IsPlayerInVehicle"},"next":{"title":"IsPlayerObjectMaterialSlotUsed","permalink":"/fil/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed"}}'),t=i("85893"),r=i("50065");let l={title:"IsPlayerNPC",sidebar_label:"IsPlayerNPC",description:"Suriin kung ang isang player ay isang aktwal na player o isang NPC.",tags:["player","npc"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"Suriin kung ang isang player ay isang aktwal na player o isang NPC."}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"playerid"}),(0,t.jsx)(e.td,{children:"Ang ID ng player na susuriin."})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(e.p,{children:"1: Ang player ay isang NPC."}),"\n",(0,t.jsx)(e.p,{children:"0: Ang player ay hindi isang NPC."}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    if (IsPlayerNPC(playerid))\n    {\n        SendClientMessageToAll(-1, "An NPC connected!");\n        return 1;\n    }\n\n    // Ang ibang code dito ay hindi ma e-execute maliban kung ito ay isang player\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"ConnectNPC",children:"ConnectNPC"}),": Ikonekta ang isang NPC."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Sinusuri kung ang isang manlalaro ay naka-log in sa RCON."]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return s},a:function(){return l}});var a=i(67294);let t={},r=a.createContext(t);function l(n){let e=a.useContext(r);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);
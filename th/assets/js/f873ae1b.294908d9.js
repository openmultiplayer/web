"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19361"],{12703:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>c,assets:()=>l,toc:()=>d,contentTitle:()=>r});var c=JSON.parse('{"id":"scripting/functions/IsPlayerAttachedObjectSlotUsed","title":"IsPlayerAttachedObjectSlotUsed","description":"Check if a player has an object attached in the specified index (slot).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerAttachedObjectSlotUsed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerAttachedObjectSlotUsed","permalink":"/th/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerAttachedObjectSlotUsed","sidebar_label":"IsPlayerAttachedObjectSlotUsed","description":"Check if a player has an object attached in the specified index (slot).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerAdmin","permalink":"/th/docs/scripting/functions/IsPlayerAdmin"},"next":{"title":"IsPlayerCameraTargetEnabled","permalink":"/th/docs/scripting/functions/IsPlayerCameraTargetEnabled"}}'),i=n("85893"),s=n("50065");let a={title:"IsPlayerAttachedObjectSlotUsed",sidebar_label:"IsPlayerAttachedObjectSlotUsed",description:"Check if a player has an object attached in the specified index (slot).",tags:["player"]},r=void 0,l={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Check if a player has an object attached in the specified index (slot)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to check."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"index"}),(0,i.jsx)(t.td,{children:"The index (slot) to check."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"1: The specified slot is used for an attached object."}),"\n",(0,i.jsx)(t.p,{children:"0: The specified slot is not in use for an attached object."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"stock CountAttachedObjects(playerid)\n{\n    new count;\n    for(new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)\n    {\n        if (IsPlayerAttachedObjectSlotUsed(playerid, i))\n        {\n            count++;\n        }\n    }\n    return count;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var c=n(67294);let i={},s=c.createContext(i);function a(e){let t=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18030"],{40053:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/GetPlayerKeys","title":"GetPlayerKeys","description":"Check which keys a player is pressing.","source":"@site/docs/scripting/functions/GetPlayerKeys.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerKeys","permalink":"/ru/docs/scripting/functions/GetPlayerKeys","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerKeys.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerKeys","sidebar_label":"GetPlayerKeys","description":"Check which keys a player is pressing.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerIp","permalink":"/ru/docs/scripting/functions/GetPlayerIp"},"next":{"title":"GetPlayerLandingGearState","permalink":"/ru/docs/scripting/functions/GetPlayerLandingGearState"}}'),r=n("85893"),i=n("50065");let l={title:"GetPlayerKeys",sidebar_label:"GetPlayerKeys",description:"Check which keys a player is pressing.",tags:["player"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Check which keys a player is pressing."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the keys of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&KEY",":keys"]}),(0,r.jsxs)(t.td,{children:["A set of bits containing the player's key states. This value is what is called a bit mask. ",(0,r.jsx)(t.a,{href:"../resources/keys",children:"Click here"})," for a list of keys."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"updown"}),(0,r.jsx)(t.td,{children:"Up/down state."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"leftright"}),(0,r.jsx)(t.td,{children:"Left/right state."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The keys are stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new\n        KEY:keys, updown, leftright;\n\n    GetPlayerKeys(playerid, keys, updown, leftright);\n\n    if (updown == KEY_UP)\n    {\n        SendClientMessage(playerid, -1, "UP");\n    }\n    else if (updown == KEY_DOWN)\n    {\n        SendClientMessage(playerid, -1, "DOWN");\n    }\n\n    if (leftright == KEY_LEFT)\n    {\n        SendClientMessage(playerid, -1, "LEFT");\n    }\n    else if (leftright == KEY_RIGHT)\n    {\n        SendClientMessage(playerid, -1, "RIGHT");\n    }\n\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsx)(t.p,{children:"Only the FUNCTION of keys can be detected; not actual keys. For example, it is not possible to detect if a player presses SPACE, but you can detect if they press SPRINT (which can be mapped (assigned/binded) to ANY key (but is space by default))."}),(0,r.jsx)(t.p,{children:'As of update 0.3.7, the keys "A" and "D" are not recognized when in a vehicle. However, keys "W" and "S" can be detected with the "keys" parameter.'})]}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/keys",children:"Keys"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(67294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
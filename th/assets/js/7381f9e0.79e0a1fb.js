"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64008"],{98721:function(e,a,t){t.r(a),t.d(a,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/th/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/th/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/th/docs/scripting/callbacks/OnPlayerWeaponShot"}}'),r=t("85893"),l=t("50065");let i={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"This callback is called every time a client/player updates the server with their status.",tags:["player"]},s=void 0,o={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(a.p,{children:"This callback is called every time a client/player updates the server with their status. It is often used to create custom callbacks for client updates that aren't actively tracked by the server, such as health or armor updates or players switching weapons."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"playerid"}),(0,r.jsx)(a.td,{children:"ID of the player sending an update packet."})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(a.p,{children:"0 - Update from this player will not be replicated to other clients."}),"\n",(0,r.jsx)(a.p,{children:"1 - Indicates that this update can be processed normally and sent to other players."}),"\n",(0,r.jsx)(a.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E1F\u0E34\u0E25\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,r.jsx)(a.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new iCurWeap = GetPlayerWeapon(playerid); // Return the player\'s current weapon\n    if (iCurWeap\xa0!= GetPVarInt(playerid, "iCurrentWeapon")) // If he changed weapons since the last update\n    {\n        // Lets call a callback named OnPlayerChangeWeapon\n        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);\n        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Update the weapon variable\n    }\n    return 1; // Send this update to other players.\n}\n\nstock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)\n{\n    new     s[128],\n        oWeapon[24],\n        nWeapon[24];\n\n    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));\n    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));\n\n    format(s, sizeof(s), "You changed weapon from %s to %s!", oWeapon, nWeapon);\n\n    SendClientMessage(playerid, 0xFFFFFFFF, s);\n}\npublic OnPlayerUpdate(playerid)\n{\n    new Float:fHealth;\n\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth\xa0!= GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // Player health has changed since the last update -> server, so obviously thats the thing updated.\n        // Lets do further checks see if he\'s lost or gained health, anti-health cheat?\xa0;)\n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            /* He has gained health! Cheating? Write your own scripts here to figure how a player\n            gained health! */\n        }\n        else\n        {\n            /* He has lost health! */\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:"NPC \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01 Callback \u0E19\u0E35\u0E49\u0E44\u0E14\u0E49"})}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsx)(a.p,{children:"This callback is called, on average, 30 times per second, per player; only use it when you know what it's meant for (or more importantly what it's NOT meant for). The frequency with which this callback is called for each player varies, depending on what the player is doing. Driving or shooting will trigger a lot more updates than idling."})}),"\n",(0,r.jsx)(a.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"})]})}function p(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return s},a:function(){return i}});var n=t(67294);let r={},l=n.createContext(r);function i(e){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);
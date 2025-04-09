"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["66567"],{69169:function(e,a,n){n.r(a),n.d(a,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerTakeDamage","title":"OnPlayerTakeDamage","description":"This callback is called when a player takes damage.","source":"@site/docs/scripting/callbacks/OnPlayerTakeDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerTakeDamage","permalink":"/it/docs/scripting/callbacks/OnPlayerTakeDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerTakeDamage.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerTakeDamage","sidebar_label":"OnPlayerTakeDamage","description":"This callback is called when a player takes damage.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamOut","permalink":"/it/docs/scripting/callbacks/OnPlayerStreamOut"},"next":{"title":"OnPlayerText","permalink":"/it/docs/scripting/callbacks/OnPlayerText"}}'),t=n("85893"),r=n("50065");let i={title:"OnPlayerTakeDamage",sidebar_label:"OnPlayerTakeDamage",description:"This callback is called when a player takes damage.",tags:["player"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(a.p,{children:"This callback is called when a player takes damage."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"The ID of the player that took damage."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"issuerid"}),(0,t.jsx)(a.td,{children:"The ID of the player that caused the damage. INVALID_PLAYER_ID if self-inflicted."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["Float",":amount"]}),(0,t.jsx)(a.td,{children:"The amount of damage the player took (health and armour combined)."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,t.jsx)(a.td,{children:"The ID of the weapon/reason for the damage."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"bodypart"}),(0,t.jsxs)(a.td,{children:["The ",(0,t.jsx)(a.a,{href:"../resources/bodyparts",children:"body part"})," that was hit."]})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"1 - Callback will not be called in other filterscripts."}),"\n",(0,t.jsx)(a.p,{children:"0 - Allows this callback to be called in other filterscripts."}),"\n",(0,t.jsx)(a.p,{children:"It is always called first in filterscripts so returning 1 there blocks other filterscripts from processing it."}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    if (issuerid\xa0!= INVALID_PLAYER_ID) // If not self-inflicted\n    {\n        new\n            infoString[128],\n            weaponName[24],\n            victimName[MAX_PLAYER_NAME],\n            attackerName[MAX_PLAYER_NAME];\n\n        GetPlayerName(playerid, victimName, sizeof (victimName));\n        GetPlayerName(issuerid, attackerName, sizeof (attackerName));\n\n        GetWeaponName(weaponid, weaponName, sizeof (weaponName));\n\n        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);\n        SendClientMessageToAll(-1, infoString);\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:"public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    if (issuerid\xa0!= INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)\n    {\n        // One shot to the head to kill with sniper rifle\n        SetPlayerHealth(playerid, 0.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)."}),"\n",(0,t.jsx)(a.li,{children:"The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)"}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"playerid"})," is the only one who can call the callback."]}),"\n",(0,t.jsx)(a.li,{children:"The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left."}),"\n"]})}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/GetPlayerHealth",children:"GetPlayerHealth"})," and ",(0,t.jsx)(a.a,{href:"../functions/GetPlayerArmour",children:"GetPlayerArmour"})," will return the old amounts of the player before this callback."]}),"\n",(0,t.jsx)(a.li,{children:"Always check if issuerid is valid before using it as an array index."}),"\n"]})}),"\n",(0,t.jsx)(a.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(a.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerGiveDamage",children:"OnPlayerGiveDamage"}),": This callback is called when a player gives damage."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerWeaponShot",children:"OnPlayerWeaponShot"}),": This callback is called when a player fires a weapon."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../resources/bodyparts",children:"Body Parts"})}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return i}});var l=n(67294);let t={},r=l.createContext(t);function i(e){let a=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);
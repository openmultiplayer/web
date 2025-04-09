"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46254"],{88298:function(e,a,n){n.r(a),n.d(a,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamage","title":"OnPlayerGiveDamage","description":"This callback is called when a player gives damage to another player.","source":"@site/docs/scripting/callbacks/OnPlayerGiveDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamage","permalink":"/ta/docs/scripting/callbacks/OnPlayerGiveDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamage.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamage","sidebar_label":"OnPlayerGiveDamage","description":"This callback is called when a player gives damage to another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerFinishedDownloading","permalink":"/ta/docs/scripting/callbacks/OnPlayerFinishedDownloading"},"next":{"title":"OnPlayerGiveDamageActor","permalink":"/ta/docs/scripting/callbacks/OnPlayerGiveDamageActor"}}'),t=n("85893"),r=n("50065");let i={title:"OnPlayerGiveDamage",sidebar_label:"OnPlayerGiveDamage",description:"This callback is called when a player gives damage to another player.",tags:["player"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(a.p,{children:"This callback is called when a player gives damage to another player."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"The ID of the player that gave damage."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"damagedid"}),(0,t.jsx)(a.td,{children:"The ID of the player that received damage."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["Float",":amount"]}),(0,t.jsx)(a.td,{children:"The amount of health/armour damagedid has lost (combined)."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,t.jsx)(a.td,{children:"The reason that caused the damage."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"bodypart"}),(0,t.jsxs)(a.td,{children:["The ",(0,t.jsx)(a.a,{href:"../resources/bodyparts",children:"body part"})," that was hit."]})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"1 - Callback will not be called in other filterscripts."}),"\n",(0,t.jsx)(a.p,{children:"0 - Allows this callback to be called in other filterscripts."}),"\n",(0,t.jsx)(a.p,{children:"It is always called first in filterscripts so returning 1 there blocks other filterscripts from processing it."}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];\n    new weaponname[24];\n    GetPlayerName(playerid, attacker, sizeof (attacker));\n    GetPlayerName(damagedid, victim, sizeof (victim));\n\n    GetWeaponName(weaponid, weaponname, sizeof (weaponname));\n    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Keep in mind this function can be inaccurate in some cases."}),"\n",(0,t.jsxs)(a.li,{children:["If you want to prevent certain players from damaging eachother, use ",(0,t.jsx)(a.a,{href:"../functions/SetPlayerTeam",children:"SetPlayerTeam"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)"}),"\n",(0,t.jsx)(a.li,{children:"The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)"}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"playerid"})," is the only one who can call the callback."]}),"\n",(0,t.jsx)(a.li,{children:"The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left."}),"\n"]})}),"\n",(0,t.jsx)(a.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(a.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerTakeDamage",children:"OnPlayerTakeDamage"}),": This callback is called when a player takes damage."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerWeaponShot",children:"OnPlayerWeaponShot"}),": This callback is called when a player fires a weapon."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"../resources/bodyparts",children:"Body Parts"})}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return i}});var l=n(67294);let t={},r=l.createContext(t);function i(e){let a=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);
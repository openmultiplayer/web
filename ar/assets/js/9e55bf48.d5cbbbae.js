"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["73747"],{4896:function(e,a,t){t.r(a),t.d(a,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamageActor","title":"OnPlayerGiveDamageActor","description":"This callback is called when a player gives damage to an actor.","source":"@site/docs/scripting/callbacks/OnPlayerGiveDamageActor.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamageActor","permalink":"/ar/docs/scripting/callbacks/OnPlayerGiveDamageActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamageActor.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"actor","permalink":"/ar/docs/tags/actor"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamageActor","sidebar_label":"OnPlayerGiveDamageActor","description":"This callback is called when a player gives damage to an actor.","tags":["player","actor"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamage","permalink":"/ar/docs/scripting/callbacks/OnPlayerGiveDamage"},"next":{"title":"OnPlayerInteriorChange","permalink":"/ar/docs/scripting/callbacks/OnPlayerInteriorChange"}}'),n=t("85893"),l=t("50065");let i={title:"OnPlayerGiveDamageActor",sidebar_label:"OnPlayerGiveDamageActor",description:"This callback is called when a player gives damage to an actor.",tags:["player","actor"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,n.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(a.p,{children:"This callback is called when a player gives damage to an actor."}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Name"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"playerid"}),(0,n.jsx)(a.td,{children:"The ID of the player that gave damage."})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"damaged_actorid"}),(0,n.jsx)(a.td,{children:"The ID of the actor that received damage."})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsxs)(a.td,{children:["Float",":amount"]}),(0,n.jsx)(a.td,{children:"The amount of health/armour damaged_actorid has lost."})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,n.jsx)(a.td,{children:"The reason that caused the damage."})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"bodypart"}),(0,n.jsxs)(a.td,{children:["The ",(0,n.jsx)(a.a,{href:"../resources/bodyparts",children:"body part"})," that was hit"]})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:"1 - Callback will not be called in other filterscripts."}),"\n",(0,n.jsx)(a.p,{children:"0 - Allows this callback to be called in other filterscripts."}),"\n",(0,n.jsx)(a.p,{children:"It is always called first in filterscripts so returning 1 there blocks other filterscripts from processing it."}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-c",children:'public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128];\n    new attackerName[MAX_PLAYER_NAME];\n    new weaponName[24];\n\n    GetPlayerName(playerid, attackerName, sizeof (attackerName));\n    GetWeaponName(weaponid, weaponName, sizeof (weaponName));\n\n    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See ",(0,n.jsx)(a.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(a.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"OnActorStreamOut",children:"OnActorStreamOut"}),": This callback is called when an actor is streamed out by a player's client."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"OnActorStreamOut",children:"OnActorStreamIn"}),": This callback is called when an actor is streamed in by a player's client."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(a.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/GetActorHealth",children:"GetActorHealth"}),": Gets the health of an actor."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/IsActorInvulnerable",children:"IsActorInvulnerable"}),": Check if actor is invulnerable."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"../functions/IsValidActor",children:"IsValidActor"}),": Check if actor id is valid."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"../resources/bodyparts",children:"Body Parts"})}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return s},a:function(){return i}});var r=t(67294);let n={},l=r.createContext(n);function i(e){let a=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);
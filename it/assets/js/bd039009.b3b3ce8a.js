"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74546"],{15077:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/SetSpawnInfo","title":"SetSpawnInfo","description":"This function can be used to change the spawn information of a specific player.","source":"@site/docs/scripting/functions/SetSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSpawnInfo","permalink":"/it/docs/scripting/functions/SetSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetSpawnInfo.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetSpawnInfo","sidebar_label":"SetSpawnInfo","description":"This function can be used to change the spawn information of a specific player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetServerRuleFlags","permalink":"/it/docs/scripting/functions/SetServerRuleFlags"},"next":{"title":"SetTeamCount","permalink":"/it/docs/scripting/functions/SetTeamCount"}}'),i=t("85893"),r=t("50065");let a={title:"SetSpawnInfo",sidebar_label:"SetSpawnInfo",description:"This function can be used to change the spawn information of a specific player.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["This function can be used to change the spawn information of a specific player. It allows you to automatically set someone's spawn weapons, their team, skin and spawn position, normally used in case of minigames or automatic-spawn systems. This function is more crash-safe then using ",(0,i.jsx)(n.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"})," in ",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerSpawn",children:"OnPlayerSpawn"})," and/or ",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerRequestClass",children:"OnPlayerRequestClass"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The PlayerID of who you want to set the spawn information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"team"}),(0,i.jsx)(n.td,{children:"The Team-ID of the chosen player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"skin"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/skins",children:"skin"})," which the player will spawn with."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":spawnX"]}),(0,i.jsx)(n.td,{children:"The X-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":spawnY"]}),(0,i.jsx)(n.td,{children:"The Y-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":spawnZ"]}),(0,i.jsx)(n.td,{children:"The Z-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":angle"]}),(0,i.jsx)(n.td,{children:"The direction in which the player needs to be facing after spawning."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["WEAPON",":weapon1"]}),(0,i.jsx)(n.td,{children:"The first spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ammo1"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the primary spawnweapon."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["WEAPON",":weapon2"]}),(0,i.jsx)(n.td,{children:"The second spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ammo2"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the second spawnweapon."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["WEAPON",":weapon3"]}),(0,i.jsx)(n.td,{children:"The third spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ammo3"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the third spawnweapon."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerRequestClass(playerid, classid)\n{\n    // This simple example demonstrates how to spawn every player automatically with\n    // CJ's skin, which is number 0. The player will spawn in Las Venturas, with\n    // 36 Sawnoff-Shotgun rounds and 150 Tec9 rounds.\n    SetSpawnInfo(playerid, NO_TEAM, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:['In case you don\'t need to set a team to the player, make sure that the "team" parameter is set to ',(0,i.jsx)(n.code,{children:"NO_TEAM"})," (255)."]}),(0,i.jsx)(n.p,{children:"Team ID 0 in open.mp is a valid team while in SA-MP it is not (SA-MP bug)."})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetSpawnInfo",children:"GetSpawnInfo"}),": Return the current spawn data for a player, where they will spawn next."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),": Set a player's team."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SpawnPlayer",children:"SpawnPlayer"}),": Force a player to spawn."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/skins",children:"Skin IDs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(67294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
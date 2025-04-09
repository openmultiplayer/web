"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22581"],{72291:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>r});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerSpawn","title":"OnPlayerSpawn","description":"This callback is called when a player spawns.","source":"@site/docs/scripting/callbacks/OnPlayerSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSpawn","permalink":"/ta/docs/scripting/callbacks/OnPlayerSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerSpawn","sidebar_label":"OnPlayerSpawn","description":"This callback is called when a player spawns.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSelectedMenuRow","permalink":"/ta/docs/scripting/callbacks/OnPlayerSelectedMenuRow"},"next":{"title":"OnPlayerStateChange","permalink":"/ta/docs/scripting/callbacks/OnPlayerStateChange"}}'),t=a("85893"),s=a("50065");let i={title:"OnPlayerSpawn",sidebar_label:"OnPlayerSpawn",description:"This callback is called when a player spawns.",tags:["player"]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["This callback is called when a player spawns. (i.e. after caling ",(0,t.jsx)(n.a,{href:"../functions/SpawnPlayer",children:"SpawnPlayer"})," function)"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that spawned."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,t.jsx)(n.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    new PlayerName[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));\n\n    new string[64];\n    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);\n\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["When a player dies in San Andreas they get $100 deducted from them to cover hospital bills automatically. This feature remains in SA",":MP",", but is removed from open.mp to allow scripts to manage all their own money. Several scripts attempt to fix this already by adding $100 to a player after death, or on spawn. If this is your script simply delete the additional fix, although the code in open.mp does attempt to account for scripts that do this. If your script relied on this feature, simply add the following code to ",(0,t.jsx)(n.a,{href:"OnPlayerDeath",children:"OnPlayerDeath"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"GivePlayerMoney(playerid, -100);\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerDeath",children:"OnPlayerDeath"}),": This callback is called when a player dies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleSpawn",children:"OnVehicleSpawn"}),": This callback is called when a vehicle respawns."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SpawnPlayer",children:"SpawnPlayer"}),": Force a player to spawn."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),": Add a class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetSpawnInfo",children:"SetSpawnInfo"}),": Set the spawn setting for a player."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var l=a(67294);let t={},s=l.createContext(t);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
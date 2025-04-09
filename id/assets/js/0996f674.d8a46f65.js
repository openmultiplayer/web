"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["338"],{89897:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/IsPlayerSpawned","title":"IsPlayerSpawned","description":"Checks if a player is spawned.","source":"@site/docs/scripting/functions/IsPlayerSpawned.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerSpawned","permalink":"/id/docs/scripting/functions/IsPlayerSpawned","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerSpawned.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerSpawned","sidebar_label":"IsPlayerSpawned","description":"Checks if a player is spawned.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerRaceCheckpointActive","permalink":"/id/docs/scripting/functions/IsPlayerRaceCheckpointActive"},"next":{"title":"IsPlayerStreamedIn","permalink":"/id/docs/scripting/functions/IsPlayerStreamedIn"}}'),s=t("85893"),i=t("50065");let a={title:"IsPlayerSpawned",sidebar_label:"IsPlayerSpawned",description:"Checks if a player is spawned.",tags:["player"]},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a player is spawned."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The player is spawned."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The player is not spawned."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    if (!IsPlayerSpawned(playerid))\n    {\n        SendClientMessage(playerid, COLOR_RED, "ERROR: You must be spawned to send messages.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SpawnPlayer",children:"SpawnPlayer"}),": (Re)Spawns a player."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
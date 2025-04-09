"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61715"],{24133:function(e,n,c){c.r(n),c.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>a,assets:()=>s,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterRaceCheckpoint","title":"OnPlayerEnterRaceCheckpoint","description":"This callback is called when a player enters a race checkpoint.","source":"@site/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterRaceCheckpoint","permalink":"/ru/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/ru/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/ru/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"OnPlayerEnterRaceCheckpoint","sidebar_label":"OnPlayerEnterRaceCheckpoint","description":"This callback is called when a player enters a race checkpoint.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/ru/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"},"next":{"title":"OnPlayerEnterVehicle","permalink":"/ru/docs/scripting/callbacks/OnPlayerEnterVehicle"}}'),l=c("85893"),r=c("50065");let t={title:"OnPlayerEnterRaceCheckpoint",sidebar_label:"OnPlayerEnterRaceCheckpoint",description:"This callback is called when a player enters a race checkpoint.",tags:["player","checkpoint","racecheckpoint"]},i=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:c}=n;return c||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player enters a race checkpoint."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player who entered the race checkpoint."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterRaceCheckpoint(playerid)\n{\n    printf("Player %d entered a race checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": This callback is called when a player enters a checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": This callback is called when a player leaves a checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": This callback is called when a player leaves a race checkpoint."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,n,c){c.d(n,{Z:function(){return i},a:function(){return t}});var a=c(67294);let l={},r=a.createContext(l);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
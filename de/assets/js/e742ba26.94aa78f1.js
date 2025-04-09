"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95705"],{31128:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>l,assets:()=>s,toc:()=>h,contentTitle:()=>r});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeaveCheckpoint","title":"OnPlayerLeaveCheckpoint","description":"This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.","source":"@site/docs/scripting/callbacks/OnPlayerLeaveCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeaveCheckpoint","permalink":"/de/docs/scripting/callbacks/OnPlayerLeaveCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerLeaveCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/de/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"OnPlayerLeaveCheckpoint","sidebar_label":"OnPlayerLeaveCheckpoint","description":"This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerKeyStateChange","permalink":"/de/docs/scripting/callbacks/OnPlayerKeyStateChange"},"next":{"title":"OnPlayerLeaveGangZone","permalink":"/de/docs/scripting/callbacks/OnPlayerLeaveGangZone"}}'),t=a("85893"),c=a("50065");let i={title:"OnPlayerLeaveCheckpoint",sidebar_label:"OnPlayerLeaveCheckpoint",description:"This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.",tags:["player","checkpoint"]},r=void 0,s={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{TipNPCCallbacks:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["This callback is called when a player leaves the checkpoint set for them by ",(0,t.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),". Only one checkpoint can be set at a time."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that left their checkpoint."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerLeaveCheckpoint(playerid)\n{\n    printf("Player %i left a checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": This callback is called when a player enters a checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": This callback is called when a player enters a race checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": This callback is called when a player leaves a race checkpoint."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var l=a(67294);let t={},c=l.createContext(t);function i(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
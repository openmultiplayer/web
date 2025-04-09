"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95430"],{54485:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerStateChange","title":"OnPlayerStateChange","description":"This callback is called when a player changes state.","source":"@site/docs/scripting/callbacks/OnPlayerStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStateChange","permalink":"/pl/docs/scripting/callbacks/OnPlayerStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStateChange.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStateChange","sidebar_label":"OnPlayerStateChange","description":"This callback is called when a player changes state.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSpawn","permalink":"/pl/docs/scripting/callbacks/OnPlayerSpawn"},"next":{"title":"OnPlayerStreamIn","permalink":"/pl/docs/scripting/callbacks/OnPlayerStreamIn"}}'),n=l("85893"),r=l("50065");let s={title:"OnPlayerStateChange",sidebar_label:"OnPlayerStateChange",description:"This callback is called when a player changes state.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player that changed state."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PLAYER_STATE",":newstate"]}),(0,n.jsx)(t.td,{children:"The player's new state."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PLAYER_STATE",":oldstate"]}),(0,n.jsx)(t.td,{children:"The player's previous state."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Refer to ",(0,n.jsx)(t.a,{href:"../resources/playerstates",children:"Player States"})," for a list of all available player states."]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver\n    {\n        new vehicleid = GetPlayerVehicleID(playerid);\n        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle\n    }\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(l,{}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnPlayerInteriorChange",children:"OnPlayerInteriorChange"}),": This callback is called when a player changes interior."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/GetPlayerState",children:"GetPlayerState"}),": Get a player's current state."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Get a player's current special action."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Set a player's special action."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/playerstates",children:"Player States"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return i},a:function(){return s}});var a=l(67294);let n={},r=a.createContext(n);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
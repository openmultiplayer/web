"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93890"],{40707:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/SetTimerEx","title":"SetTimerEx","description":"Sets a timer to call a function after the specified interval.","source":"@site/docs/scripting/functions/SetTimerEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimerEx","permalink":"/sl/docs/scripting/functions/SetTimerEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetTimerEx.md","tags":[{"inline":true,"label":"timer","permalink":"/sl/docs/tags/timer"}],"version":"current","frontMatter":{"title":"SetTimerEx","sidebar_label":"SetTimerEx","description":"Sets a timer to call a function after the specified interval.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"SetTimer","permalink":"/sl/docs/scripting/functions/SetTimer"},"next":{"title":"SetVehicleAngularVelocity","permalink":"/sl/docs/scripting/functions/SetVehicleAngularVelocity"}}'),r=n("85893"),s=n("50065");let l={title:"SetTimerEx",sidebar_label:"SetTimerEx",description:"Sets a timer to call a function after the specified interval.",tags:["timer"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Sets a timer to call a function after the specified interval. This variant ('Ex') can pass parameters (such as a player ID) to the function."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const functionName[]"}),(0,r.jsx)(i.td,{children:"The name of a public function to call when the timer expires."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"interval"}),(0,r.jsx)(i.td,{children:"Interval in milliseconds (1 second = 1000 MS)."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["bool",":repeating"]}),(0,r.jsx)(i.td,{children:"Boolean (true/false (or 1/0)) that states whether the timer should be called repeatedly (can only be stopped with KillTimer) or only once."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const specifiers[]"}),(0,r.jsx)(i.td,{children:"Special format indicating the types of values the timer will pass."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"OPEN_MP_TAGS:..."}),(0,r.jsx)(i.td,{children:"Indefinite number of arguments to pass (must follow format specified in previous parameter)."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"The ID of the timer that was started. Timer IDs start at 1 and are never reused. There are no internal checks to verify that the parameters passed are valid (e.g. duration not a minus value). Y_Less' 'fixes2' plugin implements these checks and also vastly improves the accuracy of timers, and also adds support for array/string passing."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n// EndAntiSpawnKill - The function that will be called\n// 5000 - 5000 MS (5 seconds). This is the interval. The timer will be called after 5 seconds.\n// false - Not repeating. Will only be called once.\n// "i" - I stands for integer (whole number). We are passing an integer (a player ID) to the function.\n// playerid - The value to pass. This is the integer specified in the previous parameter.\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'// The event callback (OnPlayerSpawn) - we will start a timer here\npublic OnPlayerSpawn(playerid)\n{\n    // Anti-Spawnkill (5 seconds)\n\n    // Set their health very high so they can\'t be killed\n    SetPlayerHealth(playerid, 999999.0);\n\n    // Notify them\n    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");\n\n    // Start a 5 second timer to end the anti-spawnkill\n    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n}\n\n// Forward (make public) the function so the server can \'see\' it\nforward EndAntiSpawnKill(playerid);\n// The timer function - the code to be executed when the timer is called goes here\npublic EndAntiSpawnKill(playerid)\n{\n    // 5 seconds has passed, so let\'s set their health back to 100\n    SetPlayerHealth(playerid, 100.0);\n\n    // Let\'s notify them also\n    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(i.admonition,{type:"warning",children:[(0,r.jsxs)(i.p,{children:["Timer intervals are not accurate (roughly 25% off) in SA-MP. There are fixes available ",(0,r.jsx)(i.a,{href:"https://sampforum.blast.hk/showthread.php?tid=289675",children:"here"})," and ",(0,r.jsx)(i.a,{href:"https://sampforum.blast.hk/showthread.php?tid=650736",children:"here"}),"."]}),(0,r.jsx)(i.p,{children:"But it is fixed in open.mp"})]}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["Timer ID variables should be reset to 0 when they can to minimise the chance of accidentally killing new timers by mistake.  ",(0,r.jsx)(i.code,{children:"-1"})," is commonly mistaken to be the invalid ID - it isn't."]}),(0,r.jsx)(i.p,{children:"The function to be called must be public. That means it has to be forwarded."})]}),"\n",(0,r.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Definition"}),(0,r.jsx)(i.th,{children:"Value"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"INVALID_TIMER"}),(0,r.jsx)(i.td,{children:"0"})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Set a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": Gets the interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerRemaining",children:"GetTimerRemaining"}),": Gets the remaining interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CallLocalFunction",children:"CallLocalFunction"}),": Call a function in the script."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CallRemoteFunction",children:"CallRemoteFunction"}),": Call a function in any loaded script."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return l}});var t=n(67294);let r={},s=t.createContext(r);function l(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);
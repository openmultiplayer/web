"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18437"],{56278:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetTimer","title":"SetTimer","description":"Sets a \'timer\' to call a function after some time.","source":"@site/docs/scripting/functions/SetTimer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimer","permalink":"/fr/docs/scripting/functions/SetTimer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetTimer.md","tags":[{"inline":true,"label":"timer","permalink":"/fr/docs/tags/timer"}],"version":"current","frontMatter":{"title":"SetTimer","sidebar_label":"SetTimer","description":"Sets a \'timer\' to call a function after some time.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"SetTeamCount","permalink":"/fr/docs/scripting/functions/SetTeamCount"},"next":{"title":"SetTimerEx","permalink":"/fr/docs/scripting/functions/SetTimerEx"}}'),r=t("85893"),s=t("50065");let l={title:"SetTimer",sidebar_label:"SetTimer",description:"Sets a 'timer' to call a function after some time.",tags:["timer"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Sets a 'timer' to call a function after some time. Can be set to repeat."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const functionName[]"}),(0,r.jsx)(i.td,{children:"Name of the function to call as a string. This must be a public function (forwarded). A null string here will crash the server."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"interval"}),(0,r.jsx)(i.td,{children:"Interval in milliseconds."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["bool",":repeating"]}),(0,r.jsx)(i.td,{children:"Boolean (true/false) on whether the timer should repeat or not."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"The ID of the timer that was started."}),"\n",(0,r.jsxs)(i.p,{children:["Timer IDs start at ",(0,r.jsx)(i.strong,{children:"1"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    print("Starting timer...");\n    SetTimer("OneSecondTimer", 1000, true); // Set a repeating timer of 1000 milliseconds (1 second)\n}\n\nforward OneSecondTimer();\npublic OneSecondTimer()\n{\n    print("1 second has passed.");\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(i.admonition,{type:"warning",children:[(0,r.jsxs)(i.p,{children:["Timer intervals are not accurate (roughly 25% off) in SA-MP. There are fixes available ",(0,r.jsx)(i.a,{href:"https://sampforum.blast.hk/showthread.php?tid=289675",children:"here"})," and ",(0,r.jsx)(i.a,{href:"https://sampforum.blast.hk/showthread.php?tid=650736",children:"here"}),"."]}),(0,r.jsx)(i.p,{children:"But it is fixed in open.mp"})]}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"The use of many timers will result in increased memory/cpu usage."})}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsx)(i.p,{children:"Timer IDs are never used twice."}),(0,r.jsxs)(i.p,{children:["You can use ",(0,r.jsx)(i.a,{href:"KillTimer",children:"KillTimer"})," on a timer ID and it won't matter if it's running or not. The function that should be called, must be public, meaning it has to be forwarded."]})]}),"\n",(0,r.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Definition"}),(0,r.jsx)(i.th,{children:"Value"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"INVALID_TIMER"}),(0,r.jsx)(i.td,{children:"0"})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": Gets the interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerRemaining",children:"GetTimerRemaining"}),": Gets the remaining interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return l}});var n=t(67294);let r={},s=n.createContext(r);function l(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
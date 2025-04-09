"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8847"],{61460:function(e,i,t){t.r(i),t.d(i,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/IsRepeatingTimer","title":"IsRepeatingTimer","description":"Checks if a timer is set to repeat.","source":"@site/docs/scripting/functions/IsRepeatingTimer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsRepeatingTimer","permalink":"/fil/docs/scripting/functions/IsRepeatingTimer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsRepeatingTimer.md","tags":[{"inline":true,"label":"timer","permalink":"/fil/docs/tags/timer"}],"version":"current","frontMatter":{"title":"IsRepeatingTimer","sidebar_label":"IsRepeatingTimer","description":"Checks if a timer is set to repeat.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerWidescreenToggled","permalink":"/fil/docs/scripting/functions/IsPlayerWidescreenToggled"},"next":{"title":"IsTextDrawVisibleForPlayer","permalink":"/fil/docs/scripting/functions/IsTextDrawVisibleForPlayer"}}'),r=t("85893"),s=t("50065");let l={title:"IsRepeatingTimer",sidebar_label:"IsRepeatingTimer",description:"Checks if a timer is set to repeat.",tags:["timer"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Checks if a timer is set to repeat."}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"timerid"}),(0,r.jsx)(i.td,{children:"The ID of the timer to check."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"true"}),": Timer is a repeating timer."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"false"}),": Timer is not a repeating timer."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'new g_Timer;\n\npublic OnGameModeInit()\n{\n    g_Timer = SetTimer("TimerCallback", 60000, true);\n\n    if (IsRepeatingTimer(g_Timer))\n    {\n        // Do something\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Set a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return l}});var n=t(67294);let r={},s=n.createContext(r);function l(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23865"],{99078:function(e,i,n){n.r(i),n.d(i,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/KillTimer","title":"KillTimer","description":"Kills (stops) a running timer.","source":"@site/docs/scripting/functions/KillTimer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/KillTimer","permalink":"/de/docs/scripting/functions/KillTimer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/KillTimer.md","tags":[{"inline":true,"label":"timer","permalink":"/de/docs/tags/timer"}],"version":"current","frontMatter":{"title":"KillTimer","sidebar_label":"KillTimer","description":"Kills (stops) a running timer.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"Kick","permalink":"/de/docs/scripting/functions/Kick"},"next":{"title":"LimitGlobalChatRadius","permalink":"/de/docs/scripting/functions/LimitGlobalChatRadius"}}'),r=n("85893"),l=n("50065");let s={title:"KillTimer",sidebar_label:"KillTimer",description:"Kills (stops) a running timer.",tags:["timer"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Kills (stops) a running timer."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"timerid"}),(0,r.jsx)(i.td,{children:"The ID of the timer to kill (returned by SetTimer or SetTimerEx)."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"This function always returns 0."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'new gConnectTimer[MAX_PLAYERS] = {0, ...};\n\npublic OnPlayerConnect(playerid)\n{\n    print("Starting timer...");\n    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);\n    return 1;\n}\n\npublic OnPlayerDisconnect(playerid)\n{\n    KillTimer(gConnectTimer[playerid]);\n    gConnectTimer[playerid] = 0;\n    return 1;\n}\n\nforward WelcomeTimer(playerid);\npublic WelcomeTimer(playerid)\n{\n    SendClientMessage(playerid, -1, "Welcome!");\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Set a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": Gets the interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerRemaining",children:"GetTimerRemaining"}),": Gets the remaining interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function m(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var t=n(67294);let r={},l=t.createContext(r);function s(e){let i=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["44412"],{25746:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"tutorials/cooldowns","title":"Cooldowns","description":"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers.","source":"@site/docs/tutorials/cooldowns.md","sourceDirName":"tutorials","slug":"/tutorials/cooldowns","permalink":"/hu/docs/tutorials/cooldowns","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/tutorials/cooldowns.md","tags":[],"version":"current","frontMatter":{"title":"Cooldowns","sidebar_label":"Cooldowns","description":"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers."},"sidebar":"docsSidebar","previous":{"title":"Color Fix","permalink":"/hu/docs/tutorials/colorfix"},"next":{"title":"Server variable system","permalink":"/hu/docs/tutorials/servervariablesystem"}}'),a=t("85893"),o=t("50065");let s={title:"Cooldowns",sidebar_label:"Cooldowns",description:"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers."},r=void 0,l={},c=[{value:"Using Timers",id:"using-timers",level:2},{value:"Using <code>GetTickCount()</code> and <code>gettime()</code>",id:"using-gettickcount-and-gettime",level:2},{value:"A Cooldown",id:"a-cooldown",level:3},{value:"A Stopwatch",id:"a-stopwatch",level:3},{value:"Breakdown",id:"breakdown",level:4},{value:"Recap and Notes",id:"recap-and-notes",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This tutorial covers writing a commonly used gameplay mechanic in action games: cooldowns. A cooldown is a tool to limit the frequency at which a player can do something. This may be something like using an ability such as healing or writing chat messages. It allows you to slow the rate at which players do things either for gameplay balancing purposes or to prevent spam."}),"\n",(0,a.jsxs)(n.p,{children:["First I'll example the ",(0,a.jsx)(n.em,{children:"bad"})," way of doing a cooldown by using ",(0,a.jsx)(n.code,{children:"SetTimer"})," to update state."]}),"\n",(0,a.jsx)(n.h2,{id:"using-timers",children:"Using Timers"}),"\n",(0,a.jsx)(n.p,{children:"Say for example you have a specific action that can only be performed once every so many seconds, I see a lot of people (including Southclaws, many years ago) doing something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n/* This can be any sort of input event a player makes such as:\n *  Entering a command\n *  Picking up a pickup\n *  Entering a checkpoint\n *  Pressing a button\n *  Entering an area\n *  Using a dialog\n */\n{\n    // This only works when the player is allowed to\n    if (IsPlayerAllowedToDoThing[playerid])\n    {\n        // Do the thing the player requested\n        DoTheThingThePlayerRequested();\n\n        // Disallow the player\n        IsPlayerAllowedToDoThing[playerid] = false;\n\n        // Allow the player to do the thing again in 10 seconds\n        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);\n\n        return 1;\n    }\n    else\n    {\n        SendClientMessage(playerid, -1, "You are not allowed to do that yet!");\n\n        return 0;\n    }\n}\n\n// Called 10 seconds after the player does the thing\npublic AllowPlayer(playerid)\n{\n    IsPlayerAllowedToDoThing[playerid] = true;\n    SendClientMessage(playerid, -1, "You are allowed to do the thing again! :D");\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now this is all well and good, it works, the player won't be able to do that thing again for 10 seconds after he uses it."}),"\n",(0,a.jsx)(n.p,{children:"Take another example here, this is a stopwatch that measures how long it takes for a player to do a simple point to point race:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'static\n    StopWatchTimerID[MAX_PLAYERS],\n    StopWatchTotalTime[MAX_PLAYERS];\n\nStartPlayerRace(playerid)\n{\n    // Calls a function every second\n    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);\n}\n\npublic StopWatch(playerid)\n{\n    // Increment the seconds counter\n    StopWatchTotalTime[playerid]++;\n}\n\nOnPlayerFinishRace(playerid)\n{\n    new str[128];\n\n    format(str, 128, "You took %d seconds to do that", StopWatchTotalTime[playerid]);\n    SendClientMessage(playerid, -1, str);\n\n    KillTimer(StopWatchTimerID[playerid]);\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"These two examples are common and they may work fine. However, there is a much better way of achieving both of these outcomes, which is more way accurate and can give stopwatch timings down to the millisecond!"}),"\n",(0,a.jsxs)(n.h2,{id:"using-gettickcount-and-gettime",children:["Using ",(0,a.jsx)(n.code,{children:"GetTickCount()"})," and ",(0,a.jsx)(n.code,{children:"gettime()"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GetTickCount()"})," is a function that gives you the time in milliseconds since the server process was opened. ",(0,a.jsx)(n.code,{children:"gettime()"})," returns the number of seconds since January 1st 1970, also known as a Unix Timestamp."]}),"\n",(0,a.jsx)(n.p,{children:"If you call either of these functions at two different times, and subtract the first time from the second you suddenly have an interval between those two events in milliseconds or seconds respectively! Take a look at this example:"}),"\n",(0,a.jsx)(n.h3,{id:"a-cooldown",children:"A Cooldown"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'static PlayerAllowedTick[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n{\n   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)\n   // This only works when the current tick minus the last tick is above 10000.\n   // In other words, it only works when the interval between the actions is over 10 seconds.\n   {\n       DoTheThingThePlayerRequested();\n       PlayerAllowedTick[playerid] = GetTickCount(); // Update the tick count with the latest time.\n\n       return 1;\n   }\n   else\n   {\n       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");\n\n       return 0;\n   }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Or, alternatively the ",(0,a.jsx)(n.code,{children:"gettime()"})," version:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'static PlayerAllowedSeconds[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n{\n   if (gettime() - PlayerAllowedSeconds[playerid] > 10)\n   // This only works when the current seconds minus the last seconds is above 10.\n   // In other words, it only works when the interval between the actions is over 10 seconds.\n   {\n       DoTheThingThePlayerRequested();\n       PlayerAllowedSeconds[playerid] = gettime(); // Update the seconds count with the latest time.\n\n       return 1;\n   }\n   else\n   {\n       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");\n\n       return 0;\n   }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"There's a lot less code there, no need for a public function or a timer. If you really want to, you can put the remaining time in the error message:"}),"\n",(0,a.jsx)(n.p,{children:"(I'm using SendFormatMessage in this example)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'SendFormatMessage(\n    playerid,\n    -1,\n    "You are not allowed to do that yet! You can again in %d ms",\n    10000 - (GetTickCount() - PlayerAllowedTick[playerid])\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["That's a very basic example, it would be better to convert that MS value into a string of ",(0,a.jsx)(n.code,{children:"minutes:seconds.milliseconds"})," but I'll post that code at the end."]}),"\n",(0,a.jsx)(n.h3,{id:"a-stopwatch",children:"A Stopwatch"}),"\n",(0,a.jsx)(n.p,{children:"Hopefully you can see how powerful this is to get intervals between events, let's look at another example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'static Stopwatch[MAX_PLAYERS];\n\nStartPlayerRace(playerid)\n{\n    Stopwatch[playerid] = GetTickCount();\n}\n\nOnPlayerFinishRace(playerid)\n{\n    new\n        interval,\n        str[128];\n\n    interval = GetTickCount() - Stopwatch[playerid];\n\n    format(str, 128, "You took %d milliseconds to do that", interval);\n    SendClientMessage(playerid, -1, str);\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"In this example, the tick count is saved to the player variable when he starts the race. When he finishes it, the current tick (of when he finished) has that initial tick (The smaller value) subtracted from it and thus leaves us with the amount of milliseconds in between the start and the end of the race."}),"\n",(0,a.jsx)(n.h4,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(n.p,{children:"Now lets break the code down a bit."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:"new Stopwatch[MAX_PLAYERS];\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is a global variable, we need to use this so we can save the tick count and retrieve the value at another point in time (in other words, use it in another function, later on)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:"StartPlayerRace(playerid)\n{\n    Stopwatch[playerid] = GetTickCount();\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is when the player starts the race, the tick count of now is recorded, if this happens is 1 minute after the server started, the value of that variable will be 60,000 because it is 60 seconds and each second has a thousand milliseconds."}),"\n",(0,a.jsx)(n.p,{children:"Okay, we now have that player's variable set at 60,000, now he finishes the race 1 minute 40 seconds later:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pawn",children:'OnPlayerFinishRace(playerid)\n{\n    new\n        interval,\n        str[128];\n\n    interval = GetTickCount() - Stopwatch[playerid];\n\n    format(str, 128, "You took %d milliseconds to do that", interval);\n    SendClientMessage(playerid, -1, str);\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Here is where the calculation of the interval happens, well, I say calculation, it's just subtracting two values!"}),"\n",(0,a.jsx)(n.p,{children:"GetTickCount() returns the current tick count, so it will be bigger than the initial tick count which means you subtract the initial tick count from the current tick count to get your interval between the two measures."}),"\n",(0,a.jsx)(n.p,{children:"So, as we said the player finishes the race 1 minute and 40 seconds later (100 seconds, or 100,000 milliseconds), GetTickCount will return 160,000. Subtract the initial value (Which is 60,000) from the new value (Which is 160,000) and you get 100,000 milliseconds, which is 1 minute 40 seconds, which is the time it took the player to do the race!"}),"\n",(0,a.jsx)(n.h2,{id:"recap-and-notes",children:"Recap and Notes"}),"\n",(0,a.jsx)(n.p,{children:"So! We learned that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"GetTickCount returns the amount of time in milliseconds since the computer system that the server is running on started."}),"\n",(0,a.jsx)(n.li,{children:"And we can use that by calling it at two intervals, saving the first to a variable and comparing the two values can give you an accurate interval in milliseconds between those two events."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Last of all, you don't want to be telling your players time values in milliseconds! What if they take an hour to complete a race?"}),"\n",(0,a.jsx)(n.p,{children:"It's best to use a function that takes the milliseconds and converts it to a readable format, for instance, the earlier example the player took 100,000 milliseconds to do the race, if you told the player he took that long, it would take longer to read that 100,000 and figure out what it means in human-readable time."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ScavengeSurvive/timeutil",children:"This package"})," contains a function to format milliseconds into a string."]}),"\n",(0,a.jsxs)(n.p,{children:["I hope this helped! I wrote it because I've helped a few people out recently who didn't know how to use ",(0,a.jsx)(n.code,{children:"GetTickCount()"})," or ",(0,a.jsx)(n.code,{children:"gettime()"})," as an alternative for timers or for getting intervals etc."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(67294);let a={},o=i.createContext(a);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
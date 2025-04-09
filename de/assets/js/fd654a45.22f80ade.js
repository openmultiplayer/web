"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["71358"],{15861:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"scripting/callbacks/OnRconLoginAttempt","title":"OnRconLoginAttempt","description":"This callback is called when someone attempts to log in to RCON in-game, regardless of whether this attempt is successful or not.","source":"@site/docs/scripting/callbacks/OnRconLoginAttempt.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconLoginAttempt","permalink":"/de/docs/scripting/callbacks/OnRconLoginAttempt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnRconLoginAttempt.md","tags":[{"inline":true,"label":"rcon","permalink":"/de/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/de/docs/tags/administration"}],"version":"current","frontMatter":{"title":"OnRconLoginAttempt","sidebar_label":"OnRconLoginAttempt","description":"This callback is called when someone attempts to log in to RCON in-game, regardless of whether this attempt is successful or not.","tags":["rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"OnRconCommand","permalink":"/de/docs/scripting/callbacks/OnRconCommand"},"next":{"title":"OnRecordingPlaybackEnd","permalink":"/de/docs/scripting/callbacks/OnRecordingPlaybackEnd"}}'),i=t("85893"),l=t("50065");let a={title:"OnRconLoginAttempt",sidebar_label:"OnRconLoginAttempt",description:"This callback is called when someone attempts to log in to RCON in-game, regardless of whether this attempt is successful or not.",tags:["rcon","administration"]},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This callback is called when someone attempts to log in to RCON in-game, regardless of whether this attempt is successful or not."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ip[]"}),(0,i.jsx)(n.td,{children:"The IP address of the player who attempted to log in to RCON."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password[]"}),(0,i.jsx)(n.td,{children:"The password used in the login attempt."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"0 if the password was incorrect, or 1 if it was correct."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This callback is always called first in filterscripts."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnRconLoginAttempt(ip[], password[], success)\n{\n    if (!success) // If the password was incorrect\n    {\n        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);\n\n        new ipAddress[16];\n\n        for (new i = 0; i\uFFFD< MAX_PLAYERS; i++) // Loop through all players\n        {\n            if (!IsPlayerConnected(i))\n            {\n                continue;\n            }\n\n            GetPlayerIp(i, ipAddress, sizeof(ipAddress));\n\n            if (!strcmp(ip, ipAddress, true)) // If a player\'s IP is the IP that failed the login\n            {\n                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); // Send a message\n                Kick(i); // Kick the player\n                break;\n            }\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This callback is only called when /rcon login is used in-game. This callback is only called when the player is not yet logged in. When the player is logged in, ",(0,i.jsx)(n.a,{href:"OnRconCommand",children:"OnRconCommand"})," is called instead."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnRconCommand",children:"OnRconCommand"}),": This callback is called when an RCON command is sent."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SetPlayerAdmin",children:"SetPlayerAdmin"}),": Sets the player as an RCON admin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": Sends an RCON command via the script."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(67294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
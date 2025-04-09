"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17662"],{82828:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"scripting/functions/Kick","title":"Kick","description":"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/Kick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Kick","permalink":"/th/docs/scripting/functions/Kick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Kick.md","tags":[{"inline":true,"label":"administration","permalink":"/th/docs/tags/administration"}],"version":"current","frontMatter":{"title":"Kick","sidebar_label":"Kick","description":"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.","tags":["administration"]},"sidebar":"docsSidebar","previous":{"title":"IsVehicleStreamedIn","permalink":"/th/docs/scripting/functions/IsVehicleStreamedIn"},"next":{"title":"KillTimer","permalink":"/th/docs/scripting/functions/KillTimer"}}'),r=t("85893"),s=t("50065");let a={title:"Kick",sidebar_label:"Kick",description:"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.",tags:["administration"]},c=void 0,l={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to kick."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"This function always returns 1, even if the function failed to execute (player specified doesn't exist)."}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Any action taken directly before Kick() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the kick."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// In order to display a message (eg. reason) for the player before the connection is closed\n// you have to use a timer to create a delay. This delay only needs to be a few milliseconds long,\n// but this example uses a full second just to be on the safe side.\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/kickme", true) == 0)\n    {\n        // Kick the player who executed this command.\n\n        // First, send them a message.\n        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");\n\n        // Actually kick them a second later on a timer.\n        SetTimerEx("DelayedKick", 1000, false, "i", playerid);\n        return 1;\n    }\n    return 0;\n}\n\nforward DelayedKick(playerid);\npublic DelayedKick(playerid)\n{\n    Kick(playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/Ban",children:"Ban"}),": Ban a player from playing on the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/BanEx",children:"BanEx"}),": Ban a player with a custom reason."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
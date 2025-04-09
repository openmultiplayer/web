"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17882"],{95838:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/Ban","title":"Ban","description":"Ban a player who is currently in the server.","source":"@site/docs/scripting/functions/Ban.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Ban","permalink":"/de/docs/scripting/functions/Ban","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Ban.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"administration","permalink":"/de/docs/tags/administration"}],"version":"current","frontMatter":{"title":"Ban","sidebar_label":"Ban","description":"Ban a player who is currently in the server.","tags":["player","administration"]},"sidebar":"docsSidebar","previous":{"title":"AttachTrailerToVehicle","permalink":"/de/docs/scripting/functions/AttachTrailerToVehicle"},"next":{"title":"BanEx","permalink":"/de/docs/scripting/functions/BanEx"}}'),i=t("85893"),s=t("50065");let a={title:"Ban",sidebar_label:"Ban",description:"Ban a player who is currently in the server.",tags:["player","administration"]},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Ban a player who is currently in the server. They will be unable to join the server ever again."}),"\n",(0,i.jsxs)(n.p,{children:["The ban will be IP-based, and be saved in the ",(0,i.jsx)(n.strong,{children:"bans.json"})," file in the server's root directory."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"BanEx",children:"BanEx"})," can be used to give a reason for the ban."]}),"\n",(0,i.jsxs)(n.p,{children:["IP bans can be added/removed using the RCON ",(0,i.jsx)(n.code,{children:"banip"})," and ",(0,i.jsx)(n.code,{children:"unbanip"})," commands (",(0,i.jsx)(n.a,{href:"SendRconCommand",children:"SendRconCommand"}),")."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to ban."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Any action taken directly before Ban() (such as sending a message with ",(0,i.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),") will not reach the player. A timer must be used to delay the ban."]})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// In order to display a message (eg. reason) for the player before the connection is closed\n// you have to use a timer to create a delay. This delay needs only to be a few milliseconds long,\n// but this example uses a full second just to be on the safe side.\n\nforward DelayedBan(playerid);\npublic DelayedBan(playerid)\n{\n    Ban(playerid);\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/banme", true) == 0)\n    {\n        // Bans the player who executed this command.\n\n        // First, send them a message.\n        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");\n\n        // Actually ban them a second later on a timer.\n        SetTimerEx("DelayedBan", 1000, false, "d", playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BanEx",children:"BanEx"}),": Ban a player with a custom reason."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Kick",children:"Kick"}),": Kick a player from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),": Block an IP address from connecting to the server for a set amount of time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"UnBlockIpAddress",children:"UnBlockIpAddress"}),": Unblock an IP that was previously blocked."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
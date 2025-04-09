"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5538"],{36632:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/functions/BanEx","title":"BanEx","description":"Ban a player with a reason.","source":"@site/docs/scripting/functions/BanEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/BanEx","permalink":"/ar/docs/scripting/functions/BanEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/BanEx.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"administration","permalink":"/ar/docs/tags/administration"}],"version":"current","frontMatter":{"title":"BanEx","sidebar_label":"BanEx","description":"Ban a player with a reason.","tags":["player","administration"]},"sidebar":"docsSidebar","previous":{"title":"Ban","permalink":"/ar/docs/scripting/functions/Ban"},"next":{"title":"BeginObjectEditing","permalink":"/ar/docs/scripting/functions/BeginObjectEditing"}}'),i=t("85893"),r=t("50065");let s={title:"BanEx",sidebar_label:"BanEx",description:"Ban a player with a reason.",tags:["player","administration"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Ban a player with a reason."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to ban."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const reason[]"}),(0,i.jsx)(n.td,{children:"The reason for the ban."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Any action taken directly before BanEx() (such as sending a message with ",(0,i.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),") will not reach the player. A timer must be used to delay the ban."]})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText( playerid, cmdtext[] )\n{\n    if (!strcmp(cmdtext, "/banme", true))\n    {\n        // Bans the player who executed this command and includes a reason ("Request")\n        BanEx(playerid, "Request");\n        return 1;\n    }\n}\n'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// In order to display a message (eg. reason) for the player before the connection is closed\n// you have to use a timer to create a delay. This delay needs only to be a few milliseconds long,\n// but this example uses a full second just to be on the safe side.\n\nforward BanExPublic(playerid, reason[]);\npublic BanExPublic(playerid, reason[])\n{\n    BanEx(playerid, reason);\n}\n\nstock BanExWithMessage(playerid, color, message[], reason[])\n{\n    //reason - The ban reason to be used for BanEx.\n    SendClientMessage(playerid, color, message);\n    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/banme", true) == 0)\n    {\n        //Bans the player who executed this command.\n        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Ban",children:"Ban"}),": Ban a player from playing on the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Kick",children:"Kick"}),": Kick a player from the server."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
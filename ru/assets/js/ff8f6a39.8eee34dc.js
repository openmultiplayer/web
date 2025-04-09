"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["90435"],{18294:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/functions/IsPlayerConnected","title":"IsPlayerConnected","description":"Checks if a player is connected (if an ID is taken by a connected player).","source":"@site/docs/scripting/functions/IsPlayerConnected.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerConnected","permalink":"/ru/docs/scripting/functions/IsPlayerConnected","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsPlayerConnected.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerConnected","sidebar_label":"IsPlayerConnected","description":"Checks if a player is connected (if an ID is taken by a connected player).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerCheckpointActive","permalink":"/ru/docs/scripting/functions/IsPlayerCheckpointActive"},"next":{"title":"IsPlayerControllable","permalink":"/ru/docs/scripting/functions/IsPlayerControllable"}}'),i=t("85893"),r=t("50065");let s={title:"IsPlayerConnected",sidebar_label:"IsPlayerConnected",description:"Checks if a player is connected (if an ID is taken by a connected player).",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if a player is connected (if an ID is taken by a connected player)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - Player is connected."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - Player is NOT connected."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'KillPlayer(playerid)\n{\n    if (!IsPlayerConnected(playerid))\n    {\n        printf("Player ID %i is not connected!", playerid);\n    }\n    else\n    {\n        SetPlayerHealth(playerid, 0.0);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This function can be omitted in a lot of cases. Many other functions already have some sort of connection check built in."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Called when a player connects to the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Called when a player leaves the server."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var l=t(67294);let i={},r=l.createContext(i);function s(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
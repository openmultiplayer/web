"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["27077"],{97516:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/SendClientMessageToAll","title":"SendClientMessageToAll","description":"Displays a message in chat to all players.","source":"@site/docs/scripting/functions/SendClientMessageToAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientMessageToAll","permalink":"/fil/docs/scripting/functions/SendClientMessageToAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendClientMessageToAll.md","tags":[],"version":"current","frontMatter":{"title":"SendClientMessageToAll","sidebar_label":"SendClientMessageToAll","description":"Displays a message in chat to all players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientMessage","permalink":"/fil/docs/scripting/functions/SendClientMessage"},"next":{"title":"SendClientMessageToAllf","permalink":"/fil/docs/scripting/functions/SendClientMessageToAllf"}}'),i=s("85893"),l=s("50065");let r={title:"SendClientMessageToAll",sidebar_label:"SendClientMessageToAll",description:"Displays a message in chat to all players.",tags:[]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Displays a message in chat to all players. This is a multi-player equivalent of ",(0,i.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"colour"}),(0,i.jsx)(n.td,{children:"The color of the message (0xRRGGBBAA Hex format)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const format[]"}),(0,i.jsx)(n.td,{children:"The message to show (max 144 characters)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["This function always returns ",(0,i.jsx)(n.strong,{children:"true (1)"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/helloworld", true) == 0)\n    {\n        // Send a message to everyone.\n        SendClientMessageToAll(-1, "Hello!");\n        return 1;\n    }\n    if (strcmp(cmdtext, "/time", true) == 0)\n    {\n        new\n            hours,\n            minutes,\n            seconds;\n\n        gettime(hours, minutes, seconds);\n\n        // Send current time message to everyone.\n        SendClientMessageToAll(-1, "Current time is %02d:%02d:%02d", hours, minutes, seconds);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),": Send a message to a certain player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Force a player to send text for all players."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(67294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["58049"],{97732:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/SendClientMessageToAllf","title":"SendClientMessageToAllf","description":"Displays a formatted message in chat to all players.","source":"@site/docs/scripting/functions/SendClientMessageToAllf.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientMessageToAllf","permalink":"/id/docs/scripting/functions/SendClientMessageToAllf","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendClientMessageToAllf.md","tags":[],"version":"current","frontMatter":{"title":"SendClientMessageToAllf","sidebar_label":"SendClientMessageToAllf","description":"Displays a formatted message in chat to all players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientMessageToAll","permalink":"/id/docs/scripting/functions/SendClientMessageToAll"},"next":{"title":"SendClientMessagef","permalink":"/id/docs/scripting/functions/SendClientMessagef"}}'),i=t("85893"),l=t("50065");let r={title:"SendClientMessageToAllf",sidebar_label:"SendClientMessageToAllf",description:"Displays a formatted message in chat to all players.",tags:[]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"open.mp beta build 6"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"This function was deprecated."}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"SendClientMessageToAll",children:"SendClientMessageToAll"})," function now is built-in with format!"]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Displays a formatted message in chat to all players. This is a multi-player equivalent of SendClientMessage."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"color"}),(0,i.jsx)(n.td,{children:"The color of the message (0xRRGGBBAA Hex format)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const message[]"}),(0,i.jsx)(n.td,{children:"The message to show (max 144 characters)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"{Float, _}:..."}),(0,i.jsx)(n.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function always returns true (1)."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#define HELLO_WORLD "Hello World"\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/helloworld", true) == 0)\n    {\n        // Send a message to everyone.\n        SendClientMessageToAllf(-1, "%s!", HELLO_WORLD);\n        return 1;\n    }\n    return 0;\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(67294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
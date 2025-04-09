"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92746"],{21534:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerCommandText","title":"OnPlayerCommandText","description":"This callback is called when a player enters a command into the client chat window.","source":"@site/docs/scripting/callbacks/OnPlayerCommandText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerCommandText","permalink":"/ta/docs/scripting/callbacks/OnPlayerCommandText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerCommandText.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerCommandText","sidebar_label":"OnPlayerCommandText","description":"This callback is called when a player enters a command into the client chat window.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickTextDraw","permalink":"/ta/docs/scripting/callbacks/OnPlayerClickTextDraw"},"next":{"title":"OnPlayerConnect","permalink":"/ta/docs/scripting/callbacks/OnPlayerConnect"}}'),l=t("85893"),r=t("50065");let s={title:"OnPlayerCommandText",sidebar_label:"OnPlayerCommandText",description:"This callback is called when a player enters a command into the client chat window.",tags:["player"]},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that entered a command."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"cmdtext[]"}),(0,l.jsx)(n.td,{children:"The command that was entered (including the forward slash)."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts so returning 1 there blocks other scripts from processing it."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, \"/help\", true))\n    {\n        SendClientMessage(playerid, -1, \"SERVER: This is the /help command!\");\n        return 1;\n        // Returning 1 informs the server that the command has been processed.\n        // OnPlayerCommandText won't be called in other scripts.\n    }\n    return 0;\n    // Returning 0 informs the server that the command hasn't been processed by this script.\n    // OnPlayerCommandText will be called in other scripts until one returns 1.\n    // If no scripts return 1, the 'SERVER: Unknown Command' message will be shown to the player.\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerText",children:"OnPlayerText"}),": This callback is called when a player sends a chat message."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnRconCommand",children:"OnRconCommand"}),': This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".']}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": Sends an RCON command via the script."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var a=t(67294);let l={},r=a.createContext(l);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
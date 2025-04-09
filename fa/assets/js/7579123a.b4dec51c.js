"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80499"],{63796:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>a,contentTitle:()=>i});var o=JSON.parse('{"id":"scripting/functions/TogglePlayerGhostMode","title":"TogglePlayerGhostMode","description":"Toggle player\'s ghost mode.","source":"@site/docs/scripting/functions/TogglePlayerGhostMode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TogglePlayerGhostMode","permalink":"/fa/docs/scripting/functions/TogglePlayerGhostMode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TogglePlayerGhostMode.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"TogglePlayerGhostMode","sidebar_label":"TogglePlayerGhostMode","description":"Toggle player\'s ghost mode.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"TogglePlayerControllable","permalink":"/fa/docs/scripting/functions/TogglePlayerControllable"},"next":{"title":"TogglePlayerSpectating","permalink":"/fa/docs/scripting/functions/TogglePlayerSpectating"}}'),r=n("85893"),l=n("50065");let s={title:"TogglePlayerGhostMode",sidebar_label:"TogglePlayerGhostMode",description:"Toggle player's ghost mode.",tags:["player"]},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Toggle player's ghost mode.\nGhost mode disables the collision between player models."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to toggle the ghost mode."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":toggle"]}),(0,r.jsx)(t.td,{children:"true for enable and false for disable."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function always returns true."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/ghostmode", true))\n    {\n        TogglePlayerGhostMode(playerid, true);\n        SendClientMessage(playerid, -1, "SERVER: You enabled the ghost mode!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerGhostMode",children:"GetPlayerGhostMode"}),": Get player's ghost mode."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var o=n(67294);let r={},l=o.createContext(r);function s(e){let t=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);
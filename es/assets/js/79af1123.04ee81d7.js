"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["27147"],{51573:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/SetModeRestartTime","title":"SetModeRestartTime","description":"Sets the delay between loading main scripts, in seconds.","source":"@site/docs/scripting/functions/SetModeRestartTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetModeRestartTime","permalink":"/es/docs/scripting/functions/SetModeRestartTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetModeRestartTime.md","tags":[],"version":"current","frontMatter":{"title":"SetModeRestartTime","sidebar_label":"SetModeRestartTime","description":"Sets the delay between loading main scripts, in seconds.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetMenuColumnHeader","permalink":"/es/docs/scripting/functions/SetMenuColumnHeader"},"next":{"title":"SetMyFacingAngle","permalink":"/es/docs/scripting/functions/SetMyFacingAngle"}}'),i=n("85893"),r=n("50065");let d={title:"SetModeRestartTime",sidebar_label:"SetModeRestartTime",description:"Sets the delay between loading main scripts, in seconds.",tags:[]},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the delay between loading main scripts, in seconds."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":seconds"]}),(0,i.jsx)(t.td,{children:"Seconds to restart."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(t.p,{children:"1 - Function executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0 - Function failed to execute. This means that the specified seconds should not be less than 1."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/restart", true))\n    {\n        if (!IsPlayerAdmin(playerid))\n        {\n            return 1;\n        }\n\n        SetModeRestartTime(5.0);\n        SendClientMessage(playerid, -1, "[SERVER]: The server will restart in 5 seconds.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"seconds"})," parameter is a float."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetModeRestartTime",children:"GetModeRestartTime"}),": Gets the delay between loading main scripts, in seconds."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GameModeExit",children:"GameModeExit"}),": Ends the current gamemode."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var s=n(67294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["45159"],{10506:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"This callback is called when a SendClientCheck request completes","source":"@site/docs/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/th/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"This callback is called when a SendClientCheck request completes","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/th/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/th/docs/scripting/callbacks/OnClientMessage"}}'),i=t("85893"),l=t("50065");let r={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"This callback is called when a SendClientCheck request completes",tags:[]},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This callback is called when a SendClientCheck request completes."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player checked."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actionid"}),(0,i.jsx)(n.td,{children:"The type of check performed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"memaddr"}),(0,i.jsx)(n.td,{children:"The address requested."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"retndata"}),(0,i.jsx)(n.td,{children:"The result of the check."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if (actionid == 0x48) // or 72\n    {\n        print("The player is connecting using the PC client.");\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["SA",":MP"," Server"]}),": This callback is only called when it is in a filterscript."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open Multiplayer Server"}),": This callback functions normally inside a gamemode / filterscript."]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following function might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Perform a memory check on the client."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../resources/opcodes",children:"opcodes"}),": Action opcodes IDs and their purpose."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(67294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
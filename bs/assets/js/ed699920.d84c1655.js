"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82569"],{19334:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/callbacks/OnScriptUnloadPlayer","title":"OnScriptUnloadPlayer","description":"This callback is called for each connected player when a script is unloaded.","source":"@site/docs/scripting/callbacks/OnScriptUnloadPlayer.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnScriptUnloadPlayer","permalink":"/bs/docs/scripting/callbacks/OnScriptUnloadPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnScriptUnloadPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnScriptUnloadPlayer","sidebar_label":"OnScriptUnloadPlayer","description":"This callback is called for each connected player when a script is unloaded.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnScriptLoadPlayer","permalink":"/bs/docs/scripting/callbacks/OnScriptLoadPlayer"},"next":{"title":"OnTrailerUpdate","permalink":"/bs/docs/scripting/callbacks/OnTrailerUpdate"}}'),t=l("85893"),a=l("50065");let i={title:"OnScriptUnloadPlayer",sidebar_label:"OnScriptUnloadPlayer",description:"This callback is called for each connected player when a script is unloaded.",tags:["player"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{name:"callback",version:"omp v1.3.1.2748"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This callback is called for each connected player when a script is unloaded."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that script is unloaded for."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["bool",":isEntryScript"]}),(0,t.jsx)(n.td,{children:"Determining whether it's an entry script (main script) or a side script."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnScriptUnloadPlayer(playerid, bool:isEntryScript)\n{\n    printf("Script unloaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This callback is called when you are ",(0,t.jsx)(n.strong,{children:"unloading"})," a side script (filterscript) at runtime."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnScriptLoadPlayer",children:"OnScriptLoadPlayer"}),": This callback is called for each connected player when a script is loaded."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player leaves the server."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return i}});var r=l(67294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
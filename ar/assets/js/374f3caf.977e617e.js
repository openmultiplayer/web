"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29164"],{16705:function(e,s,l){l.r(s),l.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestClass","title":"OnPlayerRequestClass","description":"This callback is called when a player changes class at class selection (and when class selection first appears).","source":"@site/docs/scripting/callbacks/OnPlayerRequestClass.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestClass","permalink":"/ar/docs/scripting/callbacks/OnPlayerRequestClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerRequestClass.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"class","permalink":"/ar/docs/tags/class"}],"version":"current","frontMatter":{"title":"OnPlayerRequestClass","sidebar_label":"OnPlayerRequestClass","description":"This callback is called when a player changes class at class selection (and when class selection first appears).","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickupStreamOut","permalink":"/ar/docs/scripting/callbacks/OnPlayerPickupStreamOut"},"next":{"title":"OnPlayerRequestDownload","permalink":"/ar/docs/scripting/callbacks/OnPlayerRequestDownload"}}'),n=l("85893"),t=l("50065");let r={title:"OnPlayerRequestClass",sidebar_label:"OnPlayerRequestClass",description:"This callback is called when a player changes class at class selection (and when class selection first appears).",tags:["player","class"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This callback is called when a player changes class at class selection (and when class selection first appears)."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"playerid"}),(0,n.jsx)(s.td,{children:"The ID of the player that changed class."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"classid"}),(0,n.jsxs)(s.td,{children:["The ID of the current class being viewed (returned by ",(0,n.jsx)(s.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),")."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c",children:'public OnPlayerRequestClass(playerid,classid)\n{\n    if (classid == 3 && !IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"This callback is also called when a player presses F4."})}),"\n",(0,n.jsx)(s.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(s.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"OnPlayerRequestSpawn",children:"OnPlayerRequestSpawn"}),": This callback is called when a player attempts to spawn via class selection."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(s.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),": Add a player class."]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,s,l){l.d(s,{Z:function(){return i},a:function(){return r}});var a=l(67294);let n={},t=a.createContext(n);function r(e){let s=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);
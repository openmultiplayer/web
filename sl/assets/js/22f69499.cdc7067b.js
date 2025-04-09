"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61166"],{52670:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerFinishedDownloading","title":"OnPlayerFinishedDownloading","description":"This callback is called when a player finishes downloading custom models.","source":"@site/docs/scripting/callbacks/OnPlayerFinishedDownloading.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerFinishedDownloading","permalink":"/sl/docs/scripting/callbacks/OnPlayerFinishedDownloading","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerFinishedDownloading.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerFinishedDownloading","sidebar_label":"OnPlayerFinishedDownloading","description":"This callback is called when a player finishes downloading custom models.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerExitedMenu","permalink":"/sl/docs/scripting/callbacks/OnPlayerExitedMenu"},"next":{"title":"OnPlayerGiveDamage","permalink":"/sl/docs/scripting/callbacks/OnPlayerGiveDamage"}}'),a=l("85893"),s=l("50065");let t={title:"OnPlayerFinishedDownloading",sidebar_label:"OnPlayerFinishedDownloading",description:"This callback is called when a player finishes downloading custom models.",tags:["player"]},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the ",(0,a.jsx)(n.a,{href:"https://sampforum.blast.hk/showthread.php?tid=644105",children:"release thread"})," and ",(0,a.jsx)(n.a,{href:"https://sampforum.blast.hk/showthread.php?tid=644123",children:"this tutorial"}),"."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player that finished downloading custom models."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"virtualworld"}),(0,a.jsx)(n.td,{children:"The ID of the virtual world the player finished downloading custom models for."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerFinishedDownloading(playerid, virtualworld)\n{\n    SendClientMessage(playerid, 0xFFFFFFFF, "Downloads finished.");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world."})}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player leaves the server."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnIncomingConnection",children:"OnIncomingConnection"}),": This callback is called when a player is attempting to connect to the server."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return t}});var i=l(67294);let a={},s=i.createContext(a);function t(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15130"],{36427:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"scripting/functions/ConnectNPC","title":"ConnectNPC","description":"Connect an NPC to the server.","source":"@site/docs/scripting/functions/ConnectNPC.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ConnectNPC","permalink":"/vi/docs/scripting/functions/ConnectNPC","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ConnectNPC.md","tags":[{"inline":true,"label":"npc","permalink":"/vi/docs/tags/npc"}],"version":"current","frontMatter":{"title":"ConnectNPC","sidebar_label":"ConnectNPC","description":"Connect an NPC to the server.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"ClearPlayerWorldBounds","permalink":"/vi/docs/scripting/functions/ClearPlayerWorldBounds"},"next":{"title":"CountRunningTimers","permalink":"/vi/docs/scripting/functions/CountRunningTimers"}}'),i=t("85893"),r=t("50065");let l={title:"ConnectNPC",sidebar_label:"ConnectNPC",description:"Connect an NPC to the server.",tags:["npc"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Connect an NPC to the server."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const name[]"}),(0,i.jsx)(n.td,{children:"The name the NPC should connect as. Must follow the same rules as normal player names."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const script[]"}),(0,i.jsx)(n.td,{children:"The NPC script name that is located in the npcmodes folder (without the .amx extension)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function always return 1."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    ConnectNPC("[BOT]Pilot", "pilot");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["NPCs do not have nametags. These can be scripted with ",(0,i.jsx)(n.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerNPC",children:"IsPlayerNPC"}),": Check if a player is an NPC or an actual player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Called when a player connects to the server."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(67294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
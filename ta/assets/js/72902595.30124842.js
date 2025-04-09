"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82810"],{12699:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"This callback gets called whenever the NPC sees a ClientMessage.","source":"@site/docs/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/ta/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"This callback gets called whenever the NPC sees a ClientMessage.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/ta/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/ta/docs/scripting/callbacks/OnDialogResponse"}}'),l=s("85893"),a=s("50065");let i={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"This callback gets called whenever the NPC sees a ClientMessage.",tags:[]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["This callback gets called whenever the NPC sees a ClientMessage. This will be everytime a ",(0,l.jsx)(n.a,{href:"../functions/SendClientMessageToAll",children:"SendClientMessageToAll"})," function is used and everytime a ",(0,l.jsx)(n.a,{href:"../functions/SendClientMessage",children:"SendClientMessage"})," function is sent towards the NPC. This callback won't be called when someone says something. For a version of this with player text, see ",(0,l.jsxs)(n.a,{href:"OnPlayerText",children:["NPC",":OnPlayerText"]}),"."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"color"}),(0,l.jsx)(n.td,{children:"The color the ClientMessage is."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"text[]"}),(0,l.jsx)(n.td,{children:"The actual message."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Bank Balance: $0") != -1)\n    {\n        SendClientMessage(playerid, -1, "I am poor :(");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerText",children:"OnPlayerText"}),": This callback is called everytime anyone says anything in the chat. This includes any player, any other NPC, or the same NPC himself."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(67294);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41229"],{41692:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/SetPlayerChatBubble","title":"SetPlayerChatBubble","description":"Creates a chat bubble above a player\'s name tag.","source":"@site/docs/scripting/functions/SetPlayerChatBubble.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerChatBubble","permalink":"/pt-BR/docs/scripting/functions/SetPlayerChatBubble","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerChatBubble.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerChatBubble","sidebar_label":"SetPlayerChatBubble","description":"Creates a chat bubble above a player\'s name tag.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerCameraPos","permalink":"/pt-BR/docs/scripting/functions/SetPlayerCameraPos"},"next":{"title":"SetPlayerCheckpoint","permalink":"/pt-BR/docs/scripting/functions/SetPlayerCheckpoint"}}'),r=n("85893"),i=n("50065");let a={title:"SetPlayerChatBubble",sidebar_label:"SetPlayerChatBubble",description:"Creates a chat bubble above a player's name tag.",tags:["player"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Creates a chat bubble above a player's name tag."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The player which should have the chat bubble."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const text[]"}),(0,r.jsx)(t.td,{children:"The text to display."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"colour"}),(0,r.jsx)(t.td,{children:"The text color"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,r.jsx)(t.td,{children:"The distance from where players are able to see the chat bubble."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expireTime"}),(0,r.jsx)(t.td,{children:"The time in miliseconds the bubble should be displayed for."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,r.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerText(playerid, text[])\n{\n    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"You can't see your own chat bubbles. The same applies to attached 3D text labels."})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You can use color embedding for multiple colors in the message."}),"\n",(0,r.jsx)(t.li,{children:"Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF)."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var l=n(67294);let r={},i=l.createContext(r);function a(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);
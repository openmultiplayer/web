"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11106"],{7944:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SendChat","title":"SendChat","description":"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.","source":"@site/docs/scripting/functions/SendChat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendChat","permalink":"/fr/docs/scripting/functions/SendChat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendChat.md","tags":[],"version":"current","frontMatter":{"title":"SendChat","sidebar_label":"SendChat","description":"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SelectTextDraw","permalink":"/fr/docs/scripting/functions/SelectTextDraw"},"next":{"title":"SendClientCheck","permalink":"/fr/docs/scripting/functions/SendClientCheck"}}'),s=n("85893"),r=n("50065");let l={title:"SendChat",sidebar_label:"SendChat",description:"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.",tags:[]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["This will send a player text by the bot, just like using ",(0,s.jsx)(t.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),", but this function is to be used inside the NPC scripts."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"msg[]"}),(0,s.jsx)(t.td,{children:"The text to be sent by the NPC."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerDeath(playerid)\n{\n    new string[80], name[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, name, sizeof(name));\n    format(string, sizeof(string), "Oh no %s! I didn\'t want you to die that way!", name);\n    SendChat(string);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../functions/SendCommand",children:"SendCommand"}),": Sends a command as the NPC."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
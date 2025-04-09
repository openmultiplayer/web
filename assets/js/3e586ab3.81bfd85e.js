"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88956"],{54620:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SendCommand","title":"SendCommand","description":"This will force the NPC to write a desired command, and this way, getting the effects it would produce.","source":"@site/docs/scripting/functions/SendCommand.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendCommand","permalink":"/docs/scripting/functions/SendCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendCommand.md","tags":[],"version":"current","frontMatter":{"title":"SendCommand","sidebar_label":"SendCommand","description":"This will force the NPC to write a desired command, and this way, getting the effects it would produce.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientMessagef","permalink":"/docs/scripting/functions/SendClientMessagef"},"next":{"title":"SendDeathMessage","permalink":"/docs/scripting/functions/SendDeathMessage"}}'),s=t("85893"),d=t("50065");let r={title:"SendCommand",sidebar_label:"SendCommand",description:"This will force the NPC to write a desired command, and this way, getting the effects it would produce.",tags:[]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This will force the NPC to write a desired command, and this way, getting the effects it would produce."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"commandtext[]"}),(0,s.jsx)(n.td,{children:"The command text to be sent by the NPC."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    if (strfind(text, "stupid bot") != -1)\n    {\n        new string[80], name[MAX_PLAYER_NAME];\n        GetPlayerName(playerid, name, sizeof(name));\n        SendCommand("/kill");\n        format(string, sizeof(string), "Hey %s! You are so mean, you make me so sad!", name);\n        SendChat(string);\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/SendChat",children:"SendChat"}),": Sends a text as the NPC."]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let s={},d=i.createContext(s);function r(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);
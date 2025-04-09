"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21255"],{3019:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerText","title":"OnPlayerText","description":"Apelat atunci c\xe2nd un juc\u0103tor trimite un mesaj de chat.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerText","permalink":"/ro/docs/scripting/callbacks/OnPlayerText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerText.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerText","sidebar_label":"OnPlayerText","description":"Apelat atunci c\xe2nd un juc\u0103tor trimite un mesaj de chat.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerTakeDamage","permalink":"/ro/docs/scripting/callbacks/OnPlayerTakeDamage"},"next":{"title":"OnPlayerUpdate","permalink":"/ro/docs/scripting/callbacks/OnPlayerUpdate"}}'),i=r("85893"),l=r("50065");let a={title:"OnPlayerText",sidebar_label:"OnPlayerText",description:"Apelat atunci c\xe2nd un juc\u0103tor trimite un mesaj de chat.",tags:["player"]},c=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{TipNPCCallbacks:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"descriere",children:"Descriere"}),"\n",(0,i.jsx)(t.p,{children:"Apelat atunci c\xe2nd un juc\u0103tor trimite un mesaj de chat."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Descriere"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"ID-ul juc\u0103torului care a tastat textul."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text[]"}),(0,i.jsx)(t.td,{children:"Textul pe care l-a tastat juc\u0103torul."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,i.jsx)(t.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri, astfel \xeenc\xe2t returnarea 0 acolo blocheaz\u0103 alte scripturi s\u0103-l vad\u0103."}),"\n",(0,i.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    new pText[144];\n    format(pText, sizeof (pText), "(%d) %s", playerid, text);\n    SendPlayerMessageToAll(playerid, pText);\n    return 0; // ignor\u0103 textul implicit \u0219i trimite-l pe cel personalizat\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(t.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": For\u021Ba\u021Bi un juc\u0103tor s\u0103 trimit\u0103 text pentru un juc\u0103tor."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": For\u021Ba\u021Bi un juc\u0103tor s\u0103 trimit\u0103 text pentru to\u021Bi juc\u0103torii."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3337"],{19074:function(e,n,c){c.r(n),c.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnNPCDisconnect","title":"OnNPCDisconnect","description":"Essa callback \xe9 executada quando um NPC \xe9 desconectado do servidor.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCDisconnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCDisconnect","permalink":"/pt-BR/docs/scripting/callbacks/OnNPCDisconnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnNPCDisconnect.md","tags":[],"version":"current","frontMatter":{"title":"OnNPCDisconnect","sidebar_label":"OnNPCDisconnect","description":"Essa callback \xe9 executada quando um NPC \xe9 desconectado do servidor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnNPCConnect","permalink":"/pt-BR/docs/scripting/callbacks/OnNPCConnect"},"next":{"title":"OnNPCEnterVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnNPCEnterVehicle"}}'),s=c("85893"),a=c("50065");let o={title:"OnNPCDisconnect",sidebar_label:"OnNPCDisconnect",description:"Essa callback \xe9 executada quando um NPC \xe9 desconectado do servidor.",tags:[]},r=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Callbacks Relacionadas",id:"callbacks-relacionadas",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"Essa callback \xe9 executada quando um NPC \xe9 desconectado do servidor."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reason[]"}),(0,s.jsx)(n.td,{children:"The reason why the bot has disconnected from the server"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnNPCDisconnect(reason[])\n{\n    printf("Desconectado do servidor. Motivo: %s", reason);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"callbacks-relacionadas",children:"Callbacks Relacionadas"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnNPCConnect",children:"OnNPCConnect"}),": Executada quando um NPC conecta no servidor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Executada quando o jogador desconecta do servidor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Executada quando o jogador conecta no servidor."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,c){c.d(n,{Z:function(){return r},a:function(){return o}});var t=c(67294);let s={},a=t.createContext(s);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47664"],{22609:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Essa callback \xe9 executada quando a requisi\xe7\xe3o enviada pela fun\xe7\xe3o SendClientCheck \xe9 completa.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/pt-BR/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"Essa callback \xe9 executada quando a requisi\xe7\xe3o enviada pela fun\xe7\xe3o SendClientCheck \xe9 completa.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/pt-BR/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/pt-BR/docs/scripting/callbacks/OnClientMessage"}}'),a=t("85893"),s=t("50065");let c={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"Essa callback \xe9 executada quando a requisi\xe7\xe3o enviada pela fun\xe7\xe3o SendClientCheck \xe9 completa.",tags:[]},l=void 0,r={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"Essa callback \xe9 executada quando a requisi\xe7\xe3o enviada pela fun\xe7\xe3o SendClientCheck \xe9 completa."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nome"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"ID do jogador checado."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"actionid"}),(0,a.jsx)(n.td,{children:"Tipo da checagem feita."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"memaddr"}),(0,a.jsx)(n.td,{children:"Endere\xe7o requisitado."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"retndata"}),(0,a.jsx)(n.td,{children:"Resultado da checagem."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,a.jsx)(n.p,{children:"Sempre a primeira a ser declarada em filterscripts."}),"\n",(0,a.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if(actionid == 0x48) // ou 72\n    {\n        print("AVISO: O jogador n\xe3o parece estar usando um computador!");\n        Kick(playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Esse callback \xe9 usado somente em filterscripts."})}),"\n",(0,a.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Realiza uma checagem de mem\xf3ria no cliente."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var i=t(67294);let a={},s=i.createContext(a);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
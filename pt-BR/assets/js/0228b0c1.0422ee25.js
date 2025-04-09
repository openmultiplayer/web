"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50646"],{77644:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/callbacks/OnActorStreamOut","title":"OnActorStreamOut","description":"Esta callback \xe9 chamada quando um ator \xe9 descarregado (torna-se invis\xedvel) para um jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamOut","permalink":"/pt-BR/docs/scripting/callbacks/OnActorStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnActorStreamOut.md","tags":[],"version":"current","frontMatter":{"title":"OnActorStreamOut","sidebar_label":"OnActorStreamOut","description":"Esta callback \xe9 chamada quando um ator \xe9 descarregado (torna-se invis\xedvel) para um jogador.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamIn","permalink":"/pt-BR/docs/scripting/callbacks/OnActorStreamIn"},"next":{"title":"OnClientCheckResponse","permalink":"/pt-BR/docs/scripting/callbacks/OnClientCheckResponse"}}'),n=r("85893"),o=r("50065");let s={title:"OnActorStreamOut",sidebar_label:"OnActorStreamOut",description:"Esta callback \xe9 chamada quando um ator \xe9 descarregado (torna-se invis\xedvel) para um jogador.",tags:[]},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components},{TipNPCCallbacksPT:r,VersionWarnPT:a}=t;return r||p("TipNPCCallbacksPT",!0),a||p("VersionWarnPT",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(t.p,{children:"Esta callback \xe9 chamada quando um ator \xe9 descarregado (torna-se invis\xedvel) para um jogador."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actorid"}),(0,n.jsx)(t.td,{children:"O ID do ator que foi descarregado pelo jogador"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forplayerid"}),(0,n.jsx)(t.td,{children:"O ID do jogador que descarregou o ator."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"retorno",children:"Retorno"}),"\n",(0,n.jsx)(t.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,n.jsx)(t.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnActorStreamOut(actorid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "Ator %d descarregou para voc\xea.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notas",children:"Notas"}),"\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)(t.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return s}});var a=r(67294);let n={},o=a.createContext(n);function s(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
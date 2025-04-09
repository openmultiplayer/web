"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87250"],{25313:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/callbacks/OnActorStreamIn","title":"OnActorStreamIn","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamIn","permalink":"/es/docs/scripting/callbacks/OnActorStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnActorStreamIn.md","tags":[],"version":"current","frontMatter":{"t\xedtulo":"OnActorStreamIn","descripci\xf3n":"Este callback se llama cuando un actor es cargado (se hace visible) por el cliente de un jugador.","tags":[]},"sidebar":"docsSidebar","next":{"title":"OnActorStreamOut","permalink":"/es/docs/scripting/callbacks/OnActorStreamOut"}}'),c=t("85893"),s=t("50065");let a={"t\xedtulo":"OnActorStreamIn","descripci\xf3n":"Este callback se llama cuando un actor es cargado (se hace visible) por el cliente de un jugador.",tags:[]},i=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{TipNPCCallbacksES:t,VersionWarnES:r}=n;return t||p("TipNPCCallbacksES",!0),r||p("VersionWarnES",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"Este callback se llama cuando un actor es cargado (se hace visible) por el cliente de un jugador."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"actorid"}),(0,c.jsx)(n.td,{children:"El ID del actor que est\xe1 siendo transmitido por el jugador."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"forplayerid"}),(0,c.jsx)(n.td,{children:"El ID del jugador que est\xe1 transmitiendo al actor."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,c.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnActorStreamIn(actorid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "El actor %d est\xe1 siendo transmitido a tu jugador.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,c.jsx)(n.p,{children:"Los siguientes callbacks pueden ser \xfatiles, ya que est\xe1n relacionados de alguna forma u otra con OnActorStreamIn:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnActorStreamOut",children:"OnActorStreamOut"}),": Este callback es llamado cuando un actor deja de transmitirse (deja de ser visible) por el cliente de un jugador."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(67294);let c={},s=r.createContext(c);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17305"],{79470:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>r,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/es/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"t\xedtulo":"OnClientCheckResponse","descripci\xf3n":"Este callback se llama cuando una funci\xf3n SendClientCheck es completada.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/es/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/es/docs/scripting/callbacks/OnClientMessage"}}'),c=i("85893"),s=i("50065");let l={"t\xedtulo":"OnClientCheckResponse","descripci\xf3n":"Este callback se llama cuando una funci\xf3n SendClientCheck es completada.",tags:[]},a=void 0,r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"Este callback se llama cuando una funci\xf3n SendClientCheck es completada."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"El ID del jugador verificado."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"actionid"}),(0,c.jsx)(n.td,{children:"El tipo de chequeo realizado."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"memaddr"}),(0,c.jsx)(n.td,{children:"La direcci\xf3n requerida."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"retndata"}),(0,c.jsx)(n.td,{children:"El resultado del chequeo."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,c.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if(actionid == 0x48) // or 72\n    {\n        print("ADVERTENCIA: El jugador no parece estar usando una computadora normal!");\n        Kick(playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:"Este callback s\xf3lo se llama cuando est\xe1 en un filterscript."})}),"\n",(0,c.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,c.jsx)(n.p,{children:"La siguiente funci\xf3n puede ser \xfatil, ya que est\xe1 relacionada de alguna forma u otra con OnClientCheckResponse:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Realiza un chequeo de memoria en el cliente."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var t=i(67294);let c={},s=t.createContext(c);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
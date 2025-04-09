"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64567"],{99226:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>r,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/SetVehicleToRespawn","title":"SetVehicleToRespawn","description":"Coloca um ve\xedculo de volta para a posi\xe7\xe3o onde foi criado.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleToRespawn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleToRespawn","permalink":"/pt-BR/docs/scripting/functions/SetVehicleToRespawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleToRespawn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleToRespawn","sidebar_label":"SetVehicleToRespawn","description":"Coloca um ve\xedculo de volta para a posi\xe7\xe3o onde foi criado.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleSpawnInfo","permalink":"/pt-BR/docs/scripting/functions/SetVehicleSpawnInfo"},"next":{"title":"SetVehicleVelocity","permalink":"/pt-BR/docs/scripting/functions/SetVehicleVelocity"}}'),o=i("85893"),c=i("50065");let s={title:"SetVehicleToRespawn",sidebar_label:"SetVehicleToRespawn",description:"Coloca um ve\xedculo de volta para a posi\xe7\xe3o onde foi criado.",tags:["vehicle"]},l=void 0,r={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"Coloca um ve\xedculo de volta para a posi\xe7\xe3o onde foi criado."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vehicleid"}),(0,o.jsx)(n.td,{children:"O ID do ve\xedculo a respawnar."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,o.jsx)(n.p,{children:"1: A fun\xe7\xe3o foi executada com sucesso."}),"\n",(0,o.jsx)(n.p,{children:"0: A fun\xe7\xe3o falhou ao ser executada. O ve\xedculo n\xe3o existe."}),"\n",(0,o.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"// Respawna o primeiro ve\xedculo.\nSetVehicleToRespawn(1);\nfor(new i = GetVehiclePoolSize(); i > 0; i--)\n{\n    SetVehicleToRespawn(i);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/pt-BR/docs/scripting/functions/CreateVehicle",children:"CreateVehicle"}),": Cria um ve\xedculo."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/pt-BR/docs/scripting/functions/DestroyVehicle",children:"DestroyVehicle"}),": Destr\xf3i um ve\xedculo."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var t=i(67294);let o={},c=t.createContext(o);function s(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
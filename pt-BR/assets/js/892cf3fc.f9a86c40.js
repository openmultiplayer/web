"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53849"],{20406:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>s,toc:()=>a,contentTitle:()=>r});var n=JSON.parse('{"id":"scripting/functions/AddStaticPickup","title":"AddStaticPickup","description":"Esta fun\xe7\xe3o adiciona um pickup \'fixo\' no jogo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticPickup","permalink":"/pt-BR/docs/scripting/functions/AddStaticPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddStaticPickup.md","tags":[],"version":"current","frontMatter":{"title":"AddStaticPickup","sidebar_label":"AddStaticPickup","description":"Esta fun\xe7\xe3o adiciona um pickup \'fixo\' no jogo.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddSimpleModelTimed","permalink":"/pt-BR/docs/scripting/functions/AddSimpleModelTimed"},"next":{"title":"AddStaticVehicle","permalink":"/pt-BR/docs/scripting/functions/AddStaticVehicle"}}'),c=t("85893"),o=t("50065");let d={title:"AddStaticPickup",sidebar_label:"AddStaticPickup",description:"Esta fun\xe7\xe3o adiciona um pickup 'fixo' no jogo.",tags:[]},r=void 0,s={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsx)(i.p,{children:"Esta fun\xe7\xe3o adiciona um pickup 'fixo' no jogo. Esses pickups suportam armas, vida, colete, etc, com a capacidade de funcionar sem scripts (armas/vida/colete s\xe3o definidos automaticamente)."}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"Nome"}),(0,c.jsx)(i.th,{children:"Descri\xe7\xe3o"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../resources/pickupids.md",children:"model"})}),(0,c.jsx)(i.td,{children:"O modelo do pickup."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:(0,c.jsx)(i.a,{href:"../resources/pickuptypes.md",children:"type"})}),(0,c.jsx)(i.td,{children:"O tipo de pickup. Determina como o pickup reage quando \xe9 coletado."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":X"]}),(0,c.jsx)(i.td,{children:"A coordenada-X para colocar o pickup."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":Y"]}),(0,c.jsx)(i.td,{children:"A coordenada-Y para colocar o pickup."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsxs)(i.td,{children:["Float",":Z"]}),(0,c.jsx)(i.td,{children:"A coordenada-Z para colocar o pickup."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:"virtualworld"}),(0,c.jsx)(i.td,{children:"O ID do mundo virtual para colocar o pickup. Use -1 para mostrar o pickup em todos os mundos."})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"retorno",children:"Retorno"}),"\n",(0,c.jsx)(i.p,{children:"1 se o pickup \xe9 criado com sucesso."}),"\n",(0,c.jsx)(i.p,{children:"0 se falhar ao criar."}),"\n",(0,c.jsx)(i.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Cria um pickup para colete.\n    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);\n\n    // Cria um pickup para alguma vida, bem ao lado do colete.\n    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);\n\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(i.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(i.admonition,{type:"tip",children:(0,c.jsx)(i.p,{children:"Esta fun\xe7\xe3o n\xe3o retorna um pickup ID que voc\xea pode usar, por exemplo, em OnPlayerPickUpPickup. Use CreatePickup se desejar atribuir IDs."})}),"\n",(0,c.jsx)(i.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"CreatePickup.md",children:"CreatePickup"}),": Cria um pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"DestroyPickup.md",children:"DestroyPickup"}),": Destr\xf3i um pickup."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"/pt-BR/docs/scripting/callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": \xc9 chamado quando um jogador pega num pickup."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return r},a:function(){return d}});var n=t(67294);let c={},o=n.createContext(c);function d(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["67260"],{43891:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeavePlayerGangZone","title":"OnPlayerLeavePlayerGangZone","description":"Este callback \xe9 chamado quando um jogador sai de uma player gangzone.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerLeavePlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeavePlayerGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/pt-BR/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerLeavePlayerGangZone","sidebar_label":"OnPlayerLeavePlayerGangZone","description":"Este callback \xe9 chamado quando um jogador sai de uma player gangzone.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerLeaveGangZone"},"next":{"title":"OnPlayerLeaveRaceCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint"}}'),l=n("85893"),o=n("50065");let s={title:"OnPlayerLeavePlayerGangZone",sidebar_label:"OnPlayerLeavePlayerGangZone",description:"Este callback \xe9 chamado quando um jogador sai de uma player gangzone.",tags:["player","gangzone"]},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:n}=a;return n||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsx)(a.p,{children:"Este callback \xe9 chamado quando um jogador sai de uma player gangzone."}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Nome"}),(0,l.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"playerid"}),(0,l.jsx)(a.td,{children:"O ID do jogador que saiu da player gangzone."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"zoneid"}),(0,l.jsx)(a.td,{children:"O ID da player gangzone que o jogador saiu."})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"retornos",children:"Retornos"}),"\n",(0,l.jsx)(a.p,{children:"Ele \xe9 sempre chamado primeiro no modo de jogo."}),"\n",(0,l.jsx)(a.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-c",children:'public OnPlayerLeavePlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "Voc\xea est\xe1 saindo da player gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(a.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,l.jsx)(a.p,{children:"Os seguintes callbacks podem ser \xfateis, pois est\xe3o relacionados a este callback de alguma forma."}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"OnPlayerEnterPlayerGangZone",children:"OnPlayerEnterPlayerGangZone"}),": Este callback \xe9 chamado quando um jogador entra em uma player gangzone."]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,l.jsx)(a.p,{children:"As seguintes fun\xe7\xf5es podem ser \xfateis, pois est\xe3o relacionadas a este callback de alguma forma:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Cria uma player gangzone."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroi uma player gangzone."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"../functions/UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Ativa o callback quando um jogador sai desta zona."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return t},a:function(){return s}});var r=n(67294);let l={},o=r.createContext(l);function s(e){let a=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);
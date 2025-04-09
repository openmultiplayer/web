"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83820"],{56337:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>i,contentTitle:()=>t});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestDownload","title":"OnPlayerRequestDownload","description":"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestDownload.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestDownload","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerRequestDownload.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestDownload","sidebar_label":"OnPlayerRequestDownload","description":"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestClass","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestClass"},"next":{"title":"OnPlayerRequestSpawn","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestSpawn"}}'),o=a("85893"),s=a("50065");let r={title:"OnPlayerRequestDownload",sidebar_label:"OnPlayerRequestDownload",description:"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.",tags:["player"]},t=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarnPT:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnPT",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"playerid"}),(0,o.jsx)(n.td,{children:"O ID do jogador que solicitou o download de um modelo."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"type"}),(0,o.jsx)(n.td,{children:"O tipo de solicita\xe7\xe3o (veja abaixo)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"crc"}),(0,o.jsx)(n.td,{children:"O CRC de soma de verifica\xe7\xe3o dos modelos."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,o.jsx)(n.p,{children:"0 - Nega o download do modelo"}),"\n",(0,o.jsx)(n.p,{children:"1 - Aceita o download requisitado"}),"\n",(0,o.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'#define DOWNLOAD_REQUEST_EMPTY        (0)\n#define DOWNLOAD_REQUEST_MODEL_FILE   (1)\n#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)\nnew baseurl[] = "https://files.sa-mp.com/server";\n\npublic OnPlayerRequestDownload(playerid, type, crc)\n{\n    new fullurl[256+1];\n    new dlfilename[64+1];\n    new foundfilename=0;\n\n    if (!IsPlayerConnected(playerid)) return 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {\n        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {\n        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);\n    }\n\n    if (foundfilename) {\n        format(fullurl,256,"%s/%s",baseurl,dlfilename);\n        RedirectDownload(playerid,fullurl);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Chamada quando um jogador termina de baixar os modelos personalizados."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return r}});var l=a(67294);let o={},s=l.createContext(o);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
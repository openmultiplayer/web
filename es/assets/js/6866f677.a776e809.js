"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95675"],{93654:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>r,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/callbacks/OnGameModeInit","title":"OnGameModeInit","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnGameModeInit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeInit","permalink":"/es/docs/scripting/callbacks/OnGameModeInit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnGameModeInit.md","tags":[],"version":"current","frontMatter":{"t\xedtulo":"OnGameModeInit","descripci\xf3n":"Este callback es desencadenado cuando el gamemode inicia.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnGameModeExit","permalink":"/es/docs/scripting/callbacks/OnGameModeExit"},"next":{"title":"OnIncomingConnection","permalink":"/es/docs/scripting/callbacks/OnIncomingConnection"}}'),c=i("85893"),t=i("50065");let s={"t\xedtulo":"OnGameModeInit","descripci\xf3n":"Este callback es desencadenado cuando el gamemode inicia.",tags:[]},l=void 0,o={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Callbacks relacionados",id:"callbacks-relacionados",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"Este callback es desencadenado cuando el gamemode inicia."}),"\n",(0,c.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    print("Gamemode iniciado!");\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"Esta funci\xf3n tambi\xe9n puede ser usada en un filterscript para detectar si el gamemode cambia mediante comandos RCON como changemode o gmx, porque cambiando el gamemode no se recarga el filterscript."})}),"\n",(0,c.jsx)(n.h2,{id:"callbacks-relacionados",children:"Callbacks relacionados"}),"\n",(0,c.jsx)(n.p,{children:"Los siguientes callbacks pueden ser \xfatiles, ya que est\xe1n relacionados de alguna forma u otra con OnGameModeInit:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnGameModeExit",children:"OnGameModeExit"}),": Este callback es llamado cuando un modo de juego finaliza."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": Este callback es llamado cuando un filterscript es cargado."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": Este callback es llamado cuando un filterscript finaliza."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var a=i(67294);let c={},t=a.createContext(c);function s(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);
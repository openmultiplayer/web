"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61872"],{79193:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/callbacks/OnFilterScriptExit","title":"OnFilterScriptExit","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnFilterScriptExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnFilterScriptExit","permalink":"/es/docs/scripting/callbacks/OnFilterScriptExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnFilterScriptExit.md","tags":[],"version":"current","frontMatter":{"t\xedtulo":"OnFilterScriptExit","descripci\xf3n":"Este callback se llama cuando termina la ejecuci\xf3n de un filterscript. S\xf3lo se llama adentro del mismo filterscript.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnEnterExitModShop","permalink":"/es/docs/scripting/callbacks/OnEnterExitModShop"},"next":{"title":"OnFilterScriptInit","permalink":"/es/docs/scripting/callbacks/OnFilterScriptInit"}}'),l=n("85893"),c=n("50065");let r={"t\xedtulo":"OnFilterScriptExit","descripci\xf3n":"Este callback se llama cuando termina la ejecuci\xf3n de un filterscript. S\xf3lo se llama adentro del mismo filterscript.",tags:[]},a=void 0,s={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(i.p,{children:"Este callback se llama cuando termina la ejecuci\xf3n de un filterscript. S\xf3lo se llama adentro del mismo filterscript."}),"\n",(0,l.jsx)(i.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'public OnFilterScriptExit()\n{\n    print("\\n--------------------------------------");\n    print(" Mi filterscript dej\xf3 de ejecutarse");\n    print("--------------------------------------\\n");\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,l.jsx)(i.p,{children:"Los siguientes callbacks pueden ser \xfatiles, ya que est\xe1n relacionados de alguna forma u otra con OnFilterScriptExit:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"}),": Este callback es llamado cuando un filterscript es cargado."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),": Este callback es llamado cuando un modo de juego (el server) inicia."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../callbacks/OnGameModeExit",children:"OnGameModeExit"}),": Este callback es llamado cuando un modo de juego finaliza (por ejemplo, al apagar el servidor)."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return r}});var t=n(67294);let l={},c=t.createContext(l);function r(e){let i=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89104"],{14415:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnGameModeInit","title":"OnGameModeInit","description":"Ez a visszah\xedv\xe1s akkor indul el, amikor a j\xe1t\xe9km\xf3d elindul.","source":"@site/i18n/hu/docusaurus-plugin-content-docs/current/scripting/callbacks/OnGameModeInit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeInit","permalink":"/hu/docs/scripting/callbacks/OnGameModeInit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnGameModeInit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeInit","sidebar_label":"OnGameModeInit","description":"Ez a visszah\xedv\xe1s akkor indul el, amikor a j\xe1t\xe9km\xf3d elindul.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnGameModeExit","permalink":"/hu/docs/scripting/callbacks/OnGameModeExit"},"next":{"title":"OnIncomingConnection","permalink":"/hu/docs/scripting/callbacks/OnIncomingConnection"}}'),a=i("85893"),l=i("50065");let s={title:"OnGameModeInit",sidebar_label:"OnGameModeInit",description:"Ez a visszah\xedv\xe1s akkor indul el, amikor a j\xe1t\xe9km\xf3d elindul.",tags:[]},r=void 0,o={},d=[{value:"Le\xedr\xe1s",id:"le\xedr\xe1s",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2},{value:"Megjegyz\xe9sek",id:"megjegyz\xe9sek",level:2},{value:"Kapcsolod\xf3 visszh\xedv\xe1sok",id:"kapcsolod\xf3-visszh\xedv\xe1sok",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"le\xedr\xe1s",children:"Le\xedr\xe1s"}),"\n",(0,a.jsx)(n.p,{children:"Ez a visszah\xedv\xe1s akkor indul el, amikor a j\xe1t\xe9km\xf3d elindul."}),"\n",(0,a.jsx)(n.h2,{id:"p\xe9ld\xe1k",children:"P\xe9ld\xe1k"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    print("J\xe1t\xe9km\xf3d elind\xedtva!");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"megjegyz\xe9sek",children:"Megjegyz\xe9sek"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Ezt a funkci\xf3t egy filterszkriptben is fel lehet haszn\xe1lni, hogy \xe9rz\xe9kelje, ha a gamemode v\xe1ltozik az RCON parancsokkal, p\xe9ld\xe1ul a changemode vagy a gmx, mivel a gamemode megv\xe1ltoztat\xe1sa nem t\xf6lti be \xfajra a filtercriptet."})}),"\n",(0,a.jsx)(n.h2,{id:"kapcsolod\xf3-visszh\xedv\xe1sok",children:"Kapcsolod\xf3 visszh\xedv\xe1sok"}),"\n",(0,a.jsx)(n.p,{children:"Ezek a visszah\xedv\xe1sok hasznosak lehetnek mivel valamilyen m\xf3don kapcsol\xf3dik ehhez a visszah\xedv\xe1shoz."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnGameModeExit",children:"OnGameModeExit"}),": Ezt a visszah\xedv\xe1st akkor h\xedvja meg amikor egy j\xe1t\xe9km\xf3d le\xe1ll."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": Ezt a visszah\xedv\xe1st akkor h\xedvja meg amikor egy filterszkript elindul."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": Ezt a visszah\xedv\xe1st akkor h\xedvja meg amikor egy filterszkript le\xe1ll."]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(67294);let a={},l=t.createContext(a);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
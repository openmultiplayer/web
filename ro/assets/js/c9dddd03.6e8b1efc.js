"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["90047"],{33987:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/callbacks/OnGameModeExit","title":"OnGameModeExit","description":"Acest callback este apelat atunci c\xe2nd un mod de joc se termin\u0103, fie prin \u201Egmx\u201D, serverul fiind oprit, fie GameModeExit.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnGameModeExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeExit","permalink":"/ro/docs/scripting/callbacks/OnGameModeExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnGameModeExit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeExit","sidebar_label":"OnGameModeExit","description":"Acest callback este apelat atunci c\xe2nd un mod de joc se termin\u0103, fie prin \u201Egmx\u201D, serverul fiind oprit, fie GameModeExit.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnFilterScriptInit","permalink":"/ro/docs/scripting/callbacks/OnFilterScriptInit"},"next":{"title":"OnGameModeInit","permalink":"/ro/docs/scripting/callbacks/OnGameModeInit"}}'),r=n("85893"),c=n("50065");let a={title:"OnGameModeExit",sidebar_label:"OnGameModeExit",description:"Acest callback este apelat atunci c\xe2nd un mod de joc se termin\u0103, fie prin \u201Egmx\u201D, serverul fiind oprit, fie GameModeExit.",tags:[]},l=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2},{value:"Callback-uri similare",id:"callback-uri-similare",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"descriere",children:"Descriere"}),"\n",(0,r.jsx)(i.p,{children:"Acest callback este apelat atunci c\xe2nd un mod de joc se termin\u0103, fie prin \u201Egmx\u201D, serverul fiind oprit, fie GameModeExit."}),"\n",(0,r.jsx)(i.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnGameModeExit()\n{\n    print("Modul de joc s-a \xeencheiat.");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Aceast\u0103 func\u021Bie poate fi, de asemenea, utilizat\u0103 \xeentr-un filterscript pentru a detecta dac\u0103 modul de joc se schimb\u0103 cu comenzi RCON precum changemode sau gmx, deoarece schimbarea modului de joc nu re\xeencarc\u0103 un filterscript. C\xe2nd utiliza\u021Bi OnGameModeExit \xeempreun\u0103 cu comanda consolei \u201Ercon gmx\u201D, re\u021Bine\u021Bi c\u0103 exist\u0103 poten\u021Bialul de apari\u021Bie a erorilor clientului, un exemplu \xeen acest sens este apelurile excesive la RemoveBuildingForPlayer \xeen timpul OnGameModeInit, care ar putea duce la o blocare a clientului. Acest callback NU va fi apelat dac\u0103 serverul se blocheaz\u0103 sau procesul este oprit prin alte mijloace, cum ar fi utilizarea comenzii Linux kill sau ap\u0103sarea butonului de \xeenchidere de pe consola Windows."})}),"\n",(0,r.jsx)(i.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../functions/GameModeExit",children:"GameModeExit"}),": Ie\u0219i din modul de joc curent."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"callback-uri-similare",children:"Callback-uri similare"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),": Apelat c\xe2nd porne\u0219te un mod de joc."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": Apelat c\xe2nd este \xeenc\u0103rcat un filterscript."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": Apelat c\xe2nd un filterscript este desc\u0103rcat."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return a}});var t=n(67294);let r={},c=t.createContext(r);function a(e){let i=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);
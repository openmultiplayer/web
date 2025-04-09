"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54146"],{48475:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>u,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamOut","title":"OnPlayerStreamOut","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor este transmis \xeen flux de la clientul altui juc\u0103tor.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamOut","permalink":"/ro/docs/scripting/callbacks/OnPlayerStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamOut","sidebar_label":"OnPlayerStreamOut","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor este transmis \xeen flux de la clientul altui juc\u0103tor.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamIn","permalink":"/ro/docs/scripting/callbacks/OnPlayerStreamIn"},"next":{"title":"OnPlayerTakeDamage","permalink":"/ro/docs/scripting/callbacks/OnPlayerTakeDamage"}}'),l=r("85893"),a=r("50065");let i={title:"OnPlayerStreamOut",sidebar_label:"OnPlayerStreamOut",description:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor este transmis \xeen flux de la clientul altui juc\u0103tor.",tags:["player"]},c=void 0,s={},u=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Examples",id:"examples",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function o(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{TipNPCCallbacks:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"descriere",children:"Descriere"}),"\n",(0,l.jsx)(t.p,{children:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor este transmis \xeen flux de la clientul altui juc\u0103tor."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Nume"}),(0,l.jsx)(t.th,{children:"Descriere"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"Juc\u0103torul care a fost destreamat."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"forplayerid"}),(0,l.jsx)(t.td,{children:"Juc\u0103torul care a eliminat cel\u0103lalt juc\u0103tor."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,l.jsx)(t.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerStreamOut(playerid, forplayerid)\n{\n    new string[80];\n    format(string, sizeof(string), "Computerul dvs. tocmai a desc\u0103rcat ID-ul juc\u0103torului %d", playerid);\n    SendClientMessage(forplayerid, 0xFF0000FF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,l.jsx)(r,{}),"\n",(0,l.jsx)(t.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(67294);let l={},a=n.createContext(l);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
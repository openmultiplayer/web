"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62685"],{94422:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/DestroyActor","title":"DestroyActor","description":"Uni\u0161ti aktora koji je kreiran sa CreateActor.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/DestroyActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyActor","permalink":"/bs/docs/scripting/functions/DestroyActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DestroyActor.md","tags":[],"version":"current","frontMatter":{"title":"DestroyActor","sidebar_label":"DestroyActor","description":"Uni\u0161ti aktora koji je kreiran sa CreateActor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"DeleteSVar","permalink":"/bs/docs/scripting/functions/DeleteSVar"},"next":{"title":"DestroyMenu","permalink":"/bs/docs/scripting/functions/DestroyMenu"}}'),i=r("85893"),s=r("50065");let o={title:"DestroyActor",sidebar_label:"DestroyActor",description:"Uni\u0161ti aktora koji je kreiran sa CreateActor.",tags:[]},c=void 0,a={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u ni\u017Eim verzijama!"})}),"\n",(0,i.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(t.p,{children:"Uni\u0161ti aktora koji je kreiran sa CreateActor."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Ime"}),(0,i.jsx)(t.th,{children:"Deskripcija"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"ID aktora koji se uni\u0161tava. Kreiran sa CreateActor"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,i.jsx)(t.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Aktor sa odre\u0111enim ID-em ne postoji."}),"\n",(0,i.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new MyActor;\n\npublic OnFilterScriptInit()\n{\n    MyActor = CreateActor(...);\n    return 1;\n}\n\npublic OnFilterScriptExit()\n{\n    DestroyActor(MyActor);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Kreiraj aktora (stati\u010Dnog NPC-a)."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return o}});var n=r(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
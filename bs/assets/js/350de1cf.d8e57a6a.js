"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84247"],{3273:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>l,metadata:()=>a,assets:()=>t,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/GangZoneHideForAll","title":"GangZoneHideForAll","description":"GangZoneHideForAll sakriva gangzonu za sve igra\u010De.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GangZoneHideForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneHideForAll","permalink":"/bs/docs/scripting/functions/GangZoneHideForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneHideForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/bs/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneHideForAll","sidebar_label":"GangZoneHideForAll","description":"GangZoneHideForAll sakriva gangzonu za sve igra\u010De.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneGetPos","permalink":"/bs/docs/scripting/functions/GangZoneGetPos"},"next":{"title":"GangZoneHideForPlayer","permalink":"/bs/docs/scripting/functions/GangZoneHideForPlayer"}}'),i=r("85893"),o=r("50065");let l={title:"GangZoneHideForAll",sidebar_label:"GangZoneHideForAll",description:"GangZoneHideForAll sakriva gangzonu za sve igra\u010De.",tags:["gangzone"]},s=void 0,t={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(n.p,{children:"GangZoneHideForAll sakriva gangzonu za sve igra\u010De."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Ime"}),(0,i.jsx)(n.th,{children:"Deskripcija"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zone"}),(0,i.jsx)(n.td,{children:"Zone za skriti."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,i.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new gGangZoneId;\ngGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\nGangZoneHideForAll(gGangZoneId);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Kreiraj gangzonu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Uni\u0161ti gang zonu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Prika\u017Ei gang zonu za igra\u010Da."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Prika\u017Ei gang zonu za sve igra\u010De."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Sakrij gangzonu za igra\u010Da."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Kreiraj bljeskalicu gang zone za igra\u010Da."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Kreiraj bljeskalicu gang zone za sve igra\u010De."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Zaustavi gang zonu da bljeska za igra\u010Da."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Zaustavi gang zonu da bljeska za sve igra\u010De."]}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var a=r(67294);let i={},o=a.createContext(i);function l(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
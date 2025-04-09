"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["45846"],{88782:function(n,e,a){a.r(e),a.d(e,{default:()=>g,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GangZoneShowForAll","title":"GangZoneShowForAll","description":"Prikazuje gangzonu sa \u017Eeljenom bojom svim igra\u010Dima.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GangZoneShowForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneShowForAll","permalink":"/bs/docs/scripting/functions/GangZoneShowForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GangZoneShowForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/bs/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneShowForAll","sidebar_label":"GangZoneShowForAll","description":"Prikazuje gangzonu sa \u017Eeljenom bojom svim igra\u010Dima.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneHideForPlayer","permalink":"/bs/docs/scripting/functions/GangZoneHideForPlayer"},"next":{"title":"GangZoneShowForPlayer","permalink":"/bs/docs/scripting/functions/GangZoneShowForPlayer"}}'),i=a("85893"),o=a("50065");let l={title:"GangZoneShowForAll",sidebar_label:"GangZoneShowForAll",description:"Prikazuje gangzonu sa \u017Eeljenom bojom svim igra\u010Dima.",tags:["gangzone"]},s=void 0,t={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(e.p,{children:"Prikazuje gangzonu sa \u017Eeljenom bojom svim igra\u010Dima."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Ime"}),(0,i.jsx)(e.th,{children:"Deskripcija"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"zone"}),(0,i.jsx)(e.td,{children:"ID gangzone za prikazati (returnovana/vra\u0107ena od GangZoneCreate)."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"color"}),(0,i.jsx)(e.td,{children:"Boja za bljeskanje gangzone, kao cijeli broj ili hex u RGBA formatu boja. Podr\u017Eana alfa transparentnost."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena. Gangzona je prikazana svim igra\u010Dima."}),"\n",(0,i.jsx)(e.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Gangzona ne postoji."}),"\n",(0,i.jsx)(e.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsPlayerAdmin(playerid))\n    {\n        GangZoneShowForAll(gGangZoneId, COLOR_RED);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Kreiraj gangzonu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Uni\u0161ti gang zonu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Prika\u017Ei gang zonu za igra\u010Da."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Sakrij gangzonu za igra\u010Da."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Sakrij gangzonu za sve igra\u010De."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Kreiraj bljeskalicu gang zone za igra\u010Da."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Kreiraj bljeskalicu gang zone za sve igra\u010De."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Zaustavi gang zonu da bljeska za igra\u010Da."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Zaustavi gang zonu da bljeska za sve igra\u010De."]}),"\n"]})]})}function g(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return s},a:function(){return l}});var r=a(67294);let i={},o=r.createContext(i);function l(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5271"],{29777:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"scripting/functions/UsePlayerPedAnims","title":"UsePlayerPedAnims","description":"Koristi standardnu \u200B\u200Banimaciju hodanja igra\u010Da (animacija CJ ko\u017Ee) umjesto prilago\u0111enih animacija za svaku ko\u017Eu (npr. Klizanje za ko\u017Ee kliza\u010Da).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/UsePlayerPedAnims.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UsePlayerPedAnims","permalink":"/bs/docs/scripting/functions/UsePlayerPedAnims","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/UsePlayerPedAnims.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"UsePlayerPedAnims","sidebar_label":"UsePlayerPedAnims","description":"Koristi standardnu \u200B\u200Banimaciju hodanja igra\u010Da (animacija CJ ko\u017Ee) umjesto prilago\u0111enih animacija za svaku ko\u017Eu (npr. Klizanje za ko\u017Ee kliza\u010Da).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"UsePlayerGangZoneCheck","permalink":"/bs/docs/scripting/functions/UsePlayerGangZoneCheck"},"next":{"title":"VectorSize","permalink":"/bs/docs/scripting/functions/VectorSize"}}'),r=n("85893"),s=n("50065");let o={title:"UsePlayerPedAnims",sidebar_label:"UsePlayerPedAnims",description:"Koristi standardnu \u200B\u200Banimaciju hodanja igra\u010Da (animacija CJ ko\u017Ee) umjesto prilago\u0111enih animacija za svaku ko\u017Eu (npr. Klizanje za ko\u017Ee kliza\u010Da).",tags:["player"]},t=void 0,l={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Koristi standardnu \u200B\u200Banimaciju hodanja igra\u010Da (animacija CJ ko\u017Ee) umjesto prilago\u0111enih animacija za svaku ko\u017Eu (npr. Klizanje za ko\u017Ee kliza\u010Da)."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    UsePlayerPedAnims();\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["Radi samo kada se postavi pod ",(0,r.jsx)(i.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),"."]}),(0,r.jsx)(i.p,{children:"Neupotreba ove funkcije dovodi do toga da se dvoru\u010Dno oru\u017Eje (ne dvostruko - jedno oru\u017Eje koje dr\u017Ee obje ruke) dr\u017Ei u samo jednoj ruci."})]}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["You can also enable standard player walking animation via ",(0,r.jsx)(i.a,{href:"../../server/config.json",children:"config.json"})]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",children:'"use_player_ped_anims": true,\n'})})]}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Primijeni animaciju na igra\u010Da."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ClearAnimations",children:"ClearAnimations"}),": O\u010Disti svaku animaciju koju igra\u010D izvodi."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return o}});var a=n(67294);let r={},s=a.createContext(r);function o(e){let i=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59051"],{69136:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/ForceClassSelection","title":"ForceClassSelection","description":"Prisiljava igra\u010Da da se vrati na odabir klase.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/ForceClassSelection.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ForceClassSelection","permalink":"/bs/docs/scripting/functions/ForceClassSelection","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ForceClassSelection.md","tags":[],"version":"current","frontMatter":{"title":"ForceClassSelection","sidebar_label":"ForceClassSelection","description":"Prisiljava igra\u010Da da se vrati na odabir klase.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"FindTextureFileNameFromCRC","permalink":"/bs/docs/scripting/functions/FindTextureFileNameFromCRC"},"next":{"title":"GameModeExit","permalink":"/bs/docs/scripting/functions/GameModeExit"}}'),a=n("85893"),t=n("50065");let s={title:"ForceClassSelection",sidebar_label:"ForceClassSelection",description:"Prisiljava igra\u010Da da se vrati na odabir klase.",tags:[]},l=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(i.p,{children:"Prisiljava igra\u010Da da se vrati na odabir klase."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Ime"}),(0,a.jsx)(i.th,{children:"Deskripcija"})]})}),(0,a.jsx)(i.tbody,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"Igra\u010D za povratak na odabir klase."})]})})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(i.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:'if (!strcmp(cmdtext, "/class", true))\n{\n    ForceClassSelection(playerid);\n    TogglePlayerSpectating(playerid, true);\n    TogglePlayerSpectating(playerid, false);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(i.admonition,{type:"warning",children:(0,a.jsx)(i.p,{children:"Ova funkcija ne vr\u0161i promjenu stanja u PLAYER_STATE_WASTED kada se kombinira s TogglePlayerSpectating (pogledajte primjer dolje), kao \u0161to je ovdje navedeno."})}),"\n",(0,a.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Dodaj klasu."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Postavi skin igra\u010Du."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"GetPlayerSkin",children:"GetPlayerSkin"}),": Dobij igra\u010Dev trenutni skin."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../callbacks/OnPlayerRequestClass",children:"OnPlayerRequestClass"}),": Pozvano kada igra\u010D prmijeni klasu na odabiru klasa."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return s}});var r=n(67294);let a={},t=r.createContext(a);function s(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);
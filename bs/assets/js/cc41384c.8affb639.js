"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59891"],{30098:function(e,r,a){a.r(r),a.d(r,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/ShowPlayerMarkers","title":"ShowPlayerMarkers","description":"Omogu\u0107ava/onemogu\u0107ava markere/oznake igra\u010Da (bljeskalice na radaru).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/ShowPlayerMarkers.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerMarkers","permalink":"/bs/docs/scripting/functions/ShowPlayerMarkers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowPlayerMarkers.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerMarkers","sidebar_label":"ShowPlayerMarkers","description":"Omogu\u0107ava/onemogu\u0107ava markere/oznake igra\u010Da (bljeskalice na radaru).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPlayerDialog","permalink":"/bs/docs/scripting/functions/ShowPlayerDialog"},"next":{"title":"ShowPlayerNameTagForPlayer","permalink":"/bs/docs/scripting/functions/ShowPlayerNameTagForPlayer"}}'),n=a("85893"),s=a("50065");let t={title:"ShowPlayerMarkers",sidebar_label:"ShowPlayerMarkers",description:"Omogu\u0107ava/onemogu\u0107ava markere/oznake igra\u010Da (bljeskalice na radaru).",tags:["player"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Marker Modes",id:"marker-modes",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(r.p,{children:"Omogu\u0107ava/onemogu\u0107ava markere/oznake igra\u010Da (bljeskalice na radaru). Mora se koristiti kada server po\u010Dne (OnGameModeInit). Za ostala vremena, pogledaj SetPlayerMarkerForPlayer."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Ime"}),(0,n.jsx)(r.th,{children:"Deskripcija"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mode"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"#marker-modes",children:"Mode"})," za koristiti za markere/oznake. Mogu se emitirati, \u0161to zna\u010Di da su vidljivi samo igra\u010Dima u blizini. Pogledajte donju tabelu."]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Oznake igra\u010Da vidljive samo igra\u010Dima u blizini\n    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"marker-modes",children:"Marker Modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"ID"}),(0,n.jsx)(r.th,{children:"MODE"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_OFF"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_GLOBAL"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2"}),(0,n.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_STREAMED"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"Tako\u0111e je mogu\u0107e postaviti boju igra\u010Da na boju koja ima potpunu prozirnost (bez alfa vrijednosti). To omogu\u0107ava prikazivanje markera/oznaka po igra\u010Du."})}),"\n",(0,n.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Postavite marker/oznaku igra\u010Da."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"LimitPlayerMarkerRadius",children:"LimitPlayerMarkerRadius"}),": Ograni\u010Dite radijus markera/oznake igra\u010Da."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"ShowNameTags",children:"ShowNameTags"}),": Postavi nametagove uklju\u010Deno ili isklju\u010Deno."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Postavi boju igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,r,a){a.d(r,{Z:function(){return l},a:function(){return t}});var i=a(67294);let n={},s=i.createContext(n);function t(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
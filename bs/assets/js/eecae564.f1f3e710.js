"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48597"],{74251:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/TextDrawLetterSize","title":"TextDrawLetterSize","description":"Postavlja \u0161irinu i visinu slova.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawLetterSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawLetterSize","permalink":"/bs/docs/scripting/functions/TextDrawLetterSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawLetterSize.md","tags":[{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawLetterSize","sidebar_label":"TextDrawLetterSize","description":"Postavlja \u0161irinu i visinu slova.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawIsSelectable","permalink":"/bs/docs/scripting/functions/TextDrawIsSelectable"},"next":{"title":"TextDrawSetOutline","permalink":"/bs/docs/scripting/functions/TextDrawSetOutline"}}'),a=r("85893"),n=r("50065");let s={title:"TextDrawLetterSize",sidebar_label:"TextDrawLetterSize",description:"Postavlja \u0161irinu i visinu slova.",tags:["textdraw"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(t.p,{children:"Postavlja \u0161irinu i visinu slova."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Ime"}),(0,a.jsx)(t.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"text"}),(0,a.jsx)(t.td,{children:"TextDraw za izmijeniti."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":x"]}),(0,a.jsx)(t.td,{children:"\u0160irina karaktera."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":y"]}),(0,a.jsx)(t.td,{children:"Visina karaktera."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text: gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Primjer Textdrawa");\n    TextDrawLetterSize(gMyTextdraw, 3.2 ,5.1);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Kada ovu funkciju koristite \u010Disto da biste utjecali na box TextDrawa, pomno\u017Eite 'Y' s 0,135 da biste pretvorili u mjerenja nalik TextDrawTextSize. Savjet: Lak\u0161e je i izuzetno precizno koristiti LD_SPAC",":white"," sprit za samo crtanje boxa, TextDrawTextSize \u0107e imati redovite pomake."]})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Ukoliko \u017Eelite promijeniti veli\u010Dinu slova textdrawa koji je ve\u0107 prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon ure\u0111ivanja i promjena \u0107e biti vidljiva. Fontovi izgledaju najbolje sa X naprema Y rastojanju od 1 do 4 (npr. ako je x 0.5 onda bi y trebao biti 2)."})}),"\n",(0,a.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Kreiraj textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Uni\u0161ti textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Postavi boju teksta u textdrawu."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Postavi boju boxa u textdrawu."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Postavi boju pozadine textdrawa."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Postavi poravnanje textdrawa."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Postavi font textdrawa."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Postavi veli\u010Dinu boxa u textdrawu."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Odlu\u010Di da li da tekst ima outline."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Uklju\u010Di/isklju\u010Di sjene (shadows) na textdrawu."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Razmjestite razmak izme\u0111u teksta u texstdrawu na proporcionalni omjer."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Uklju\u010Dite ili isklju\u010Dite da li textdraw koristi box ili ne."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Postavi tekst u ve\u0107 postoje\u0107em textdrawu."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Prika\u017Ei textdraw za odre\u0111enog igra\u010Da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Sakrij textdraw za odre\u0111enog igra\u010Da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Prika\u017Ei textdraw za sve igra\u010De."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Sakrij textdraw za sve igra\u010De."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var i=r(67294);let a={},n=i.createContext(a);function s(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
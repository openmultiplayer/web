"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78303"],{16388:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>x,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/TextDrawBoxColor","title":"TextDrawBoxColor","description":"Prilago\u0111ava boju okvira za tekst (koristi se samo ako je parametar \'use\' TextDrawUseBox 1).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawBoxColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawBoxColor","permalink":"/bs/docs/scripting/functions/TextDrawBoxColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawBoxColor.md","tags":[{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawBoxColor","sidebar_label":"TextDrawBoxColor","description":"Prilago\u0111ava boju okvira za tekst (koristi se samo ako je parametar \'use\' TextDrawUseBox 1).","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawBackgroundColour","permalink":"/bs/docs/scripting/functions/TextDrawBackgroundColour"},"next":{"title":"TextDrawBoxColour","permalink":"/bs/docs/scripting/functions/TextDrawBoxColour"}}'),a=t("85893"),n=t("50065");let o={title:"TextDrawBoxColor",sidebar_label:"TextDrawBoxColor",description:"Prilago\u0111ava boju okvira za tekst (koristi se samo ako je parametar 'use' TextDrawUseBox 1).",tags:["textdraw"]},s=void 0,l={},x=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(r.p,{children:"Prilago\u0111ava boju okvira za tekst (koristi se samo ako je parametar 'use' TextDrawUseBox 'true')."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Ime"}),(0,a.jsx)(r.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"text"}),(0,a.jsx)(r.td,{children:"Textdraw za izmijeniti."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"color"}),(0,a.jsx)(r.td,{children:"Boja. Neprozirnost se postavlja alfa intenzitetom boje (npr. Boja 0x000000FF ima neproziran crni box, dok 0x000000AA ima poluproziran crni box)."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Primjer");\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0xFFFFFFFF);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["Ukoliko \u017Eelite promijeniti boju boxa textdrawa koji je ve\u0107 prikazan, ne morate ga ponovno kreirati. Prosto koristite ",(0,a.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,a.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"})," nakon ure\u0111ivanja i promjena \u0107e biti vidljiva."]})}),"\n",(0,a.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Kreiraj textdraw."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Uni\u0161ti textdraw."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Postavi boju teksta u textdrawu."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Postavi boju pozadine textdrawa."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Postavi poravnanje textdrawa."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Postavi font textdrawa."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Postavi veli\u010Dinu znakova teksta u textdrawu."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Postavi veli\u010Dinu boxa u textdrawu."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Odlu\u010Di da li da tekst ima outline."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Uklju\u010Di/isklju\u010Di sjene (shadows) na textdrawu."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Razmjestite razmak izme\u0111u teksta u texstdrawu na proporcionalni omjer."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Uklju\u010Dite ili isklju\u010Dite da li textdraw koristi box ili ne."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Postavi tekst u ve\u0107 postoje\u0107em textdrawu."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Prika\u017Ei textdraw za odre\u0111enog igra\u010Da."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Sakrij textdraw za odre\u0111enog igra\u010Da."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Prika\u017Ei textdraw za sve igra\u010De."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Sakrij textdraw za sve igra\u010De."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return o}});var i=t(67294);let a={},n=i.createContext(a);function o(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);
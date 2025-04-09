"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19436"],{57581:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>s,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewModel","title":"TextDrawSetPreviewModel","description":"Postavi Model za textdraw prikaz modela.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawSetPreviewModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewModel","permalink":"/bs/docs/scripting/functions/TextDrawSetPreviewModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawSetPreviewModel.md","tags":[{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewModel","sidebar_label":"TextDrawSetPreviewModel","description":"Postavi Model za textdraw prikaz modela.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPos","permalink":"/bs/docs/scripting/functions/TextDrawSetPos"},"next":{"title":"TextDrawSetPreviewRot","permalink":"/bs/docs/scripting/functions/TextDrawSetPreviewRot"}}'),a=r("85893"),n=r("50065");let l={title:"TextDrawSetPreviewModel",sidebar_label:"TextDrawSetPreviewModel",description:"Postavi Model za textdraw prikaz modela.",tags:["textdraw"]},d=void 0,o={},s=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(t.p,{children:"Postavi Model za textdraw prikaz modela. Klikni ovdje da vidi\u0161 efekat ove funkcije."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Ime"}),(0,a.jsx)(t.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"text"}),(0,a.jsx)(t.td,{children:"ID textdrawa koji \u0107e prikazati 3D pregled."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"modelindex"}),(0,a.jsxs)(t.td,{children:["GTA SA ili SA",":MP"," model ID za prikazati."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:textdraw;\n\npublic OnGameModeInit()\n{\n    textdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(textdraw, true);\n    TextDrawBoxColor(textdraw, 0x000000FF);\n    TextDrawTextSize(textdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(textdraw, 411); //Prika\u017Ei model 411 (Infernus)\n        //TextDrawSetPreviewModel(textdraw, 1); //Prika\u017Ei model 1 (CJ Skin)\n        //TextDrawSetPreviewModel(textdraw, 18646); //Prika\u017Ei model 18646 (Police light objekat)\n\n    //Jo\u0161 uvijek mora\u0161 da koristi\u0161 TextDrawShowForAll/TextDrawShowForPlayer kako bi textdraw bio vidljiv.\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Koristi ",(0,a.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"})," da postavi\u0161 boju pozadine iza Modela."]})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["Textdraw MORA korisiti tip fonta ",(0,a.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," kako bi ova funkcija imala efekta."]})}),"\n",(0,a.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Postavlja rotaciju 3D prikaza u textdraw-u."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetPreviewVehCol",children:"TextDrawSetPreviewVehCol"}),": Postavi boju vozila u 3D pregledu modela textdrawa."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Postavi font textdrawa."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Postavlja ID modela 3D prikaza u player-textdrawu."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Pozvano kada igra\u010D klikne na textdraw."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return l}});var i=r(67294);let a={},n=i.createContext(a);function l(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
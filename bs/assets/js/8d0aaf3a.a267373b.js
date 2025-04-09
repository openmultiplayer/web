"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["44900"],{75021:function(e,r,a){a.r(r),a.d(r,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>s,toc:()=>x,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/PlayerTextDrawBoxColor","title":"PlayerTextDrawBoxColor","description":"Postavlja boju box-a textdraw-a (PlayerTextDrawUseBox).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawBoxColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawBoxColor","permalink":"/bs/docs/scripting/functions/PlayerTextDrawBoxColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawBoxColor.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/bs/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawBoxColor","sidebar_label":"PlayerTextDrawBoxColor","description":"Postavlja boju box-a textdraw-a (PlayerTextDrawUseBox).","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawBackgroundColour","permalink":"/bs/docs/scripting/functions/PlayerTextDrawBackgroundColour"},"next":{"title":"PlayerTextDrawBoxColour","permalink":"/bs/docs/scripting/functions/PlayerTextDrawBoxColour"}}'),l=a("85893"),n=a("50065");let i={title:"PlayerTextDrawBoxColor",sidebar_label:"PlayerTextDrawBoxColor",description:"Postavlja boju box-a textdraw-a (PlayerTextDrawUseBox).",tags:["player","textdraw","playertextdraw"]},o=void 0,s={},x=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,l.jsx)(r.p,{children:"Postavlja boju box-a textdraw-a (PlayerTextDrawUseBox)."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Ime"}),(0,l.jsx)(r.th,{children:"Deskripcija"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"ID igra\u010Da \u010Dijem se player-textdrawu postavlja boja box-a."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":text"]}),(0,l.jsx)(r.td,{children:"ID player-textdrawa za postaviti boju box-a."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"color"}),(0,l.jsx)(r.td,{children:"Boja za postaviti. Alpha (transparentno) je podr\u017Eano."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,l.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:pTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");\n    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);\n    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Crveni box bez transparentnosti\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Kreiraj player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Uni\u0161ti player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Postavi boju teksta u player-textdrawu."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Postavi boju pozadine player-textdrawa."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Postavi poravnanje player-textdrawa."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Postavi font player-textdrawa."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Postavi veli\u010Dinu slova u tekstu player-textdrawa."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Postavi veli\u010Dinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje outline-a za player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Postavi sjenu na player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Postavi tekst player-textdrawa."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Prika\u017Ei player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Sakrij player-textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,r,a){a.d(r,{Z:function(){return o},a:function(){return i}});var t=a(67294);let l={},n=t.createContext(l);function i(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);
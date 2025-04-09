"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18647"],{66524:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawUseBox","title":"PlayerTextDrawUseBox","description":"Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawUseBox.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawUseBox","permalink":"/bs/docs/scripting/functions/PlayerTextDrawUseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawUseBox.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/bs/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawUseBox","sidebar_label":"PlayerTextDrawUseBox","description":"Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawTextSize","permalink":"/bs/docs/scripting/functions/PlayerTextDrawTextSize"},"next":{"title":"PutPlayerInVehicle","permalink":"/bs/docs/scripting/functions/PutPlayerInVehicle"}}'),i=t("85893"),n=t("50065");let l={title:"PlayerTextDrawUseBox",sidebar_label:"PlayerTextDrawUseBox",description:"Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(r.p,{children:"Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Ime"}),(0,i.jsx)(r.th,{children:"Deskripcija"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"ID igra\u010Da za \u010Diji se textdraw treba koristiti box ili ne."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["PlayerText",":text"]}),(0,i.jsx)(r.td,{children:"ID player-textdrawa za omogu\u0107iti/onemogu\u0107iti box"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["bool",":use"]}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.strong,{children:"true"})," da koristi box ",(0,i.jsx)(r.strong,{children:"false"})," da ne koristi box."]})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,i.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'new PlayerText:MyTD[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    MyTD[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Primjer Teksta!~N~_");\n    PlayerTextDrawUseBox(playerid, MyTD[playerid], true);\n    PlayerTextDrawBoxColor(playerid, MyTD[playerid], 0x00000066); // Postavite boju box-a na poluprozirnu crnu boju\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Kreiraj player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Uni\u0161ti player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Postavi boju teksta u player-textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Postavi boju box-a od player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Postavi boju pozadine player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Postavi poravnanje player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Postavi font player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Postavi veli\u010Dinu slova u tekstu player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Postavi veli\u010Dinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable)."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje outline-a za player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Postavi sjenu na player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Postavi tekst player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Prika\u017Ei player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Sakrij player-textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var a=t(67294);let i={},n=a.createContext(i);function l(e){let r=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);
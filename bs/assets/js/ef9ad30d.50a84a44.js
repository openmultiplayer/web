"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["69953"],{52654:function(e,r,t){t.r(r),t.d(r,{default:()=>c,frontMatter:()=>l,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawDestroy","title":"PlayerTextDrawDestroy","description":"Uni\u0161ti player-textdraw.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawDestroy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawDestroy","permalink":"/bs/docs/scripting/functions/PlayerTextDrawDestroy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayerTextDrawDestroy.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/bs/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawDestroy","sidebar_label":"PlayerTextDrawDestroy","description":"Uni\u0161ti player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawColour","permalink":"/bs/docs/scripting/functions/PlayerTextDrawColour"},"next":{"title":"PlayerTextDrawFont","permalink":"/bs/docs/scripting/functions/PlayerTextDrawFont"}}'),n=t("85893"),i=t("50065");let l={title:"PlayerTextDrawDestroy",sidebar_label:"PlayerTextDrawDestroy",description:"Uni\u0161ti player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,d={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(r.p,{children:"Destroy a player-textdraw."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Ime"}),(0,n.jsx)(r.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"ID igra\u010Da \u010Diji \u0107e player-textdraw biti uni\u0161ten."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"text"}),(0,n.jsx)(r.td,{children:"ID textdrawa za uni\u0161titi."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'new PlayerText:pTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");\n    return 1;\n}\n\npublic OnPlayerDisconnect(playerid, reason)\n{\n    PlayerTextDrawDestroy(playerid, pTextdraw[playerid]);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Kreiraj player-textdraw."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Postavi boju teksta u player-textdrawu."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Postavi boju box-a od player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Postavi boju pozadine player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Postavi poravnanje player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Postavi font player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Postavi veli\u010Dinu slova u tekstu player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Postavi veli\u010Dinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje outline-a za player-textdraw."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Postavi sjenu na player-textdraw."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Postavi tekst player-textdrawa."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Prika\u017Ei player-textdraw."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Sakrij player-textdraw."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return l}});var a=t(67294);let n={},i=a.createContext(n);function l(e){let r=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);
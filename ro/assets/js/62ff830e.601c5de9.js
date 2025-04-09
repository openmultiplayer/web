"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53854"],{67002:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>s,toc:()=>u,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/ShowPlayerDialog","title":"ShowPlayerDialog","description":"Afi\u0219eaz\u0103 juc\u0103torlui un dialog sincron (doar unul o dat\u0103).","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/functions/ShowPlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerDialog","permalink":"/ro/docs/scripting/functions/ShowPlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowPlayerDialog.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerDialog","sidebar_label":"ShowPlayerDialog","description":"Afi\u0219eaz\u0103 juc\u0103torlui un dialog sincron (doar unul o dat\u0103).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPickupForPlayer","permalink":"/ro/docs/scripting/functions/ShowPickupForPlayer"},"next":{"title":"ShowPlayerMarkers","permalink":"/ro/docs/scripting/functions/ShowPlayerMarkers"}}'),r=i("85893"),l=i("50065");let a={title:"ShowPlayerDialog",sidebar_label:"ShowPlayerDialog",description:"Afi\u0219eaz\u0103 juc\u0103torlui un dialog sincron (doar unul o dat\u0103).",tags:["player"]},o=void 0,s={},u=[{value:"Description",id:"description",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii Asociate",id:"func\u021Bii-asociate",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Afi\u0219eaz\u0103 juc\u0103torlui un dialog sincron (doar unul o dat\u0103)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nume"}),(0,r.jsx)(n.th,{children:"Descriere"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID-ul juc\u0103torului c\u0103ruia i se arat\u0103 dialogul."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dialogid"}),(0,r.jsx)(n.td,{children:"ID-ul dialogului, pentru ca r\u0103spunsurile s\u0103 poat\u0103 fi prelucrate. Maximul pentru dialogid e 32767. Dac\u0103 se folosesc valori negative atunci se va \xeenchide orice dialog deschis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"style"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"../resources/dialogstyles.md",children:"Stilul"})," dialogului."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"caption[]"}),(0,r.jsx)(n.td,{children:"Titlul de sus al dialogului. Lungimea lui nu poate dep\u0103\u0219i 64 de caractere, altfel \xeencepe s\u0103 se taie."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info[]"}),(0,r.jsx)(n.td,{children:"Textul afi\u0219at \xeen partea principal\u0103 a dialogului. Folosi\u021Bi \\n pentru a \xeencepe o nou\u0103 linie \u0219i \\t pentru tabulatur\u0103."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"button1[]"}),(0,r.jsx)(n.td,{children:"Textul butonului din st\xe2nga."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"button2[]"}),(0,r.jsx)(n.td,{children:'Textul butonului din dreapta. L\u0103sa\u021Bi-l gol ( "" ) pentru a-l ascunde.'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,r.jsx)(n.p,{children:"1: Func\u021Bia a fost executat\u0103 cu succes."}),"\n",(0,r.jsx)(n.p,{children:"0: Executarea func\u021Biei a e\u0219uat. Asta \xeenseamn\u0103 c\u0103 juc\u0103torului nu e conectat."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// Definim ID-urile dialogurilor folosind un enum:\nenum\n{\n    DIALOG_NULL,\n    DIALOG_LOGIN,\n    DIALOG_WELCOME,\n    DIALOG_WEAPONS\n}\n\n// Sau macro-uri:\n#define DIALOG_NULL 0\n#define DIALOG_LOGIN 1\n#define DIALOG_WELCOME 2\n#define DIALOG_WEAPONS 3\n\n// Enum-urile sunt recomandate, fiindc\u0103 nu trebuie s\u0103 \u021Binem coint de ID-urile folosite. Totu\u0219i, enum-urile folosesc memorie pentru a stoca, pe c\xe2nd define-urile sunt procesate \xeen stadiul de compilare.\n\n// Exemplu pentru DIALOG_STYLE_MSGBOX:\nShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "Ai fost conectat la server!", "Close", "");\n\n// Exemplu pentru DIALOG_STYLE_INPUT:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola mai jos:", "Login", "Cancel");\n\n// Exemplu pentru DIALOG_STYLE_LIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\\nM4\\nSniper Rifle", "Option 1", "Option 2");\n\n// Exemplu pentru DIALOG_STYLE_PASSWORD:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Introdu parola mai jos:", "Login", "Cancel");\n\n// Exemplu pentru DIALOG_STYLE_TABLIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n\n// Exemplu pentru DIALOG_STYLE_TABLIST_HEADERS:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\\tPrice\\tAmmo\\nDeagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n'})}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Este recomandat s\u0103 se foloseasc\u0103 enumera\u021Bii (vezi mai sus) sau defini\u021Bii (#define) pentru a determina care ID-uri sunt ale c\u0103ror dialoguri, pentru ca pe viitor s\u0103 se evite confuzia."})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Folose\u0219te color embedding pentru mai multe culori \xeen text. Folosind -1 ca \u0219i dialogid \xeenchide toate dialog-urile deschise pe ecranul clientului."})}),"\n",(0,r.jsx)(n.h2,{id:"func\u021Bii-asociate",children:"Func\u021Bii Asociate"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"TextDrawShowForPlayer.md",children:"TextDrawShowForPlayer"}),": Arat\u0103 un textdraw unui juc\u0103tor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/ro/docs/scripting/callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Apelat atunci c\xe2nd un juc\u0103tor r\u0103spunde unui dialog."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var t=i(67294);let r={},l=t.createContext(r);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
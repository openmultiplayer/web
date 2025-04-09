"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22049"],{6910:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerSelectedMenuRow","title":"OnPlayerSelectedMenuRow","description":"Ovaj callback je pozvan kada igra\u010D selektuje odre\u0111enu stavku (item) iz menija (ShowMenuForPlayer).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerSelectedMenuRow.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSelectedMenuRow","permalink":"/bs/docs/scripting/callbacks/OnPlayerSelectedMenuRow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSelectedMenuRow.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/bs/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerSelectedMenuRow","sidebar_label":"OnPlayerSelectedMenuRow","description":"Ovaj callback je pozvan kada igra\u010D selektuje odre\u0111enu stavku (item) iz menija (ShowMenuForPlayer).","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSelectObject","permalink":"/bs/docs/scripting/callbacks/OnPlayerSelectObject"},"next":{"title":"OnPlayerSpawn","permalink":"/bs/docs/scripting/callbacks/OnPlayerSpawn"}}'),t=i("85893"),a=i("50065");let l={title:"OnPlayerSelectedMenuRow",sidebar_label:"OnPlayerSelectedMenuRow",description:"Ovaj callback je pozvan kada igra\u010D selektuje odre\u0111enu stavku (item) iz menija (ShowMenuForPlayer).",tags:["player","menu"]},s=void 0,c={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Ovaj callback je pozvan kada igra\u010D selektuje odre\u0111enu stavku (item) iz menija (ShowMenuForPlayer)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID igra\u010Da koji je selektovao stavku iz menija."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"ID reda stavke koja je selektovana. Prvi red je ID 0."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Uvijek je pozvan prvi u gamemode-u."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new Menu:MyMenu;\n\npublic OnGameModeInit()\n{\n    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);\n    AddMenuItem(MyMenu, 0, "Item 1");\n    AddMenuItem(MyMenu, 0, "Item 2");\n    return 1;\n}\n\npublic OnPlayerSelectedMenuRow(playerid, row)\n{\n    if (GetPlayerMenu(playerid) == MyMenu)\n    {\n        switch(row)\n        {\n            case 0: print("Item 1 Selected");\n            case 1: print("Item 2 Selected");\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"ID menija nije proslije\u0111en ovom callbacku. GetPlayerMenu se mora koristiti kako bi se odredilo na kojem meniju je igra\u010D selektovao stavku."})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/bs/docs/scripting/functions/CreateMenu",children:"CreateMenu"}),": Kreiraj meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/bs/docs/scripting/functions/DestroyMenu",children:"DestroyMenu"}),": Uni\u0161ti meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/bs/docs/scripting/functions/AddMenuItem",children:"AddMenuItem"}),": Dodaj stavku u odre\u0111eni meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/bs/docs/scripting/functions/ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Prika\u017Ei meni igra\u010Du."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/bs/docs/scripting/functions/HideMenuForPlayer",children:"HideMenuForPlayer"}),": Sakrij meni za igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var r=i(67294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["30474"],{70429:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>l,assets:()=>s,toc:()=>d,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerSelectedMenuRow","title":"OnPlayerSelectedMenuRow","description":"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerSelectedMenuRow.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSelectedMenuRow","permalink":"/th/docs/scripting/callbacks/OnPlayerSelectedMenuRow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSelectedMenuRow.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/th/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerSelectedMenuRow","sidebar_label":"OnPlayerSelectedMenuRow","description":"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSelectObject","permalink":"/th/docs/scripting/callbacks/OnPlayerSelectObject"},"next":{"title":"OnPlayerSpawn","permalink":"/th/docs/scripting/callbacks/OnPlayerSpawn"}}'),r=t("85893"),i=t("50065");let a={title:"OnPlayerSelectedMenuRow",sidebar_label:"OnPlayerSelectedMenuRow",description:"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).",tags:["player","menu"]},c=void 0,s={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"This callback is called when a player selects an item from a menu (ShowMenuForPlayer)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that selected a menu item."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"The ID of the row that was selected. The first row is ID 0."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E40\u0E01\u0E21\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new Menu:MyMenu;\n\npublic OnGameModeInit()\n{\n    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);\n    AddMenuItem(MyMenu, 0, "Item 1");\n    AddMenuItem(MyMenu, 0, "Item 2");\n    return 1;\n}\n\npublic OnPlayerSelectedMenuRow(playerid, row)\n{\n    if (GetPlayerMenu(playerid) == MyMenu)\n    {\n        switch(row)\n        {\n            case 0: print("Item 1 Selected");\n            case 1: print("Item 2 Selected");\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/HideMenuForPlayer",children:"HideMenuForPlayer"}),": Hide a menu for a player."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var l=t(67294);let r={},i=l.createContext(r);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);
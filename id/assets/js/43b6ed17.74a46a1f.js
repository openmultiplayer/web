"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92031"],{76714:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerSelectedMenuRow","title":"OnPlayerSelectedMenuRow","description":"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).","source":"@site/docs/scripting/callbacks/OnPlayerSelectedMenuRow.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSelectedMenuRow","permalink":"/id/docs/scripting/callbacks/OnPlayerSelectedMenuRow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSelectedMenuRow.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/id/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerSelectedMenuRow","sidebar_label":"OnPlayerSelectedMenuRow","description":"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSelectObject","permalink":"/id/docs/scripting/callbacks/OnPlayerSelectObject"},"next":{"title":"OnPlayerSpawn","permalink":"/id/docs/scripting/callbacks/OnPlayerSpawn"}}'),a=l("85893"),r=l("50065");let i={title:"OnPlayerSelectedMenuRow",sidebar_label:"OnPlayerSelectedMenuRow",description:"This callback is called when a player selects an item from a menu (ShowMenuForPlayer).",tags:["player","menu"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This callback is called when a player selects an item from a menu (",(0,a.jsx)(n.a,{href:"../functions/ShowMenuForPlayer",children:"ShowMenuForPlayer"}),")."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player that selected a menu item."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"row"}),(0,a.jsx)(n.td,{children:"The ID of the row that was selected. The first row is ID 0."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new Menu:MyMenu;\n\npublic OnGameModeInit()\n{\n    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);\n    AddMenuItem(MyMenu, 0, "Item 1");\n    AddMenuItem(MyMenu, 0, "Item 2");\n    return 1;\n}\n\npublic OnPlayerSelectedMenuRow(playerid, row)\n{\n    if (GetPlayerMenu(playerid) == MyMenu)\n    {\n        switch (row)\n        {\n            case 0:\n            {\n                print("Item 1 Selected");\n            }\n            case 1:\n            {\n                print("Item 2 Selected");\n            }\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The menu ID is not passed to this callback. ",(0,a.jsx)(n.a,{href:"../functions/GetPlayerMenu",children:"GetPlayerMenu"})," must be used to determine which menu the player selected an item on."]})}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": This callback is called when a player exits a menu."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnDialogResponse",children:"OnDialogResponse"}),": This callback is called when a player responds to a dialog."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/HideMenuForPlayer",children:"HideMenuForPlayer"}),": Hide a menu for a player."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return i}});var t=l(67294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
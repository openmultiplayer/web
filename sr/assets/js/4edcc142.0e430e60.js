"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["54522"],{79705:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/DisableMenuRow","title":"DisableMenuRow","description":"Disable a specific row in a menu for all players.","source":"@site/docs/scripting/functions/DisableMenuRow.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableMenuRow","permalink":"/sr/docs/scripting/functions/DisableMenuRow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DisableMenuRow.md","tags":[{"inline":true,"label":"menu","permalink":"/sr/docs/tags/menu"}],"version":"current","frontMatter":{"title":"DisableMenuRow","sidebar_label":"DisableMenuRow","description":"Disable a specific row in a menu for all players.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"DisableMenu","permalink":"/sr/docs/scripting/functions/DisableMenu"},"next":{"title":"DisableNameTagLOS","permalink":"/sr/docs/scripting/functions/DisableNameTagLOS"}}'),t=i("85893"),r=i("50065");let l={title:"DisableMenuRow",sidebar_label:"DisableMenuRow",description:"Disable a specific row in a menu for all players.",tags:["menu"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Disable a specific row in a menu for all players. It will be greyed-out and can't be selected by players."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,t.jsx)(n.td,{children:"The ID of the menu to disable a row of. Ensure this is valid, as an invalid menu ID will crash the entire server."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"The ID of the row to disable (rows start at 0)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["This function always returns ",(0,t.jsx)(n.strong,{children:"1"}),", even if the function fails."]}),"\n",(0,t.jsx)(n.p,{children:"If an invalid row is specified, nothing will happen."}),"\n",(0,t.jsx)(n.p,{children:"If an invalid menu ID is specified, the server will crash."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new Menu:WeaponMenu;\n\npublic OnGameModeInit()\n{\n    WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);\n    AddMenuItem(WeaponMenu, 0, "Rocket Launcher");\n    AddMenuItem(WeaponMenu, 0, "Flamethrower");\n    AddMenuItem(WeaponMenu, 0, "Minigun");\n    AddMenuItem(WeaponMenu, 0, "Grenades");\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/disablemenu", true))\n    {\n        DisableMenuRow(WeaponMenu, 2); //Disable the "Minigun" row\n        return 1;\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Crashes when passed an invalid menu ID."}),"\n",(0,t.jsx)(n.li,{children:"This function disabled the specified menu row for all players."}),"\n",(0,t.jsx)(n.li,{children:"There is no function to disable a menu row for a specific player."}),"\n",(0,t.jsx)(n.li,{children:"You'd have to create two menus - one with a row disabled, and one without. Or one per player."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsMenuRowDisabled",children:"IsMenuRowDisabled"}),": Check if a menu row is disabled."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(67294);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
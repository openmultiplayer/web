"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99471"],{59677:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/ShowMenuForPlayer","title":"ShowMenuForPlayer","description":"Shows a previously created menu for a player.","source":"@site/docs/scripting/functions/ShowMenuForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowMenuForPlayer","permalink":"/zh-TW/docs/scripting/functions/ShowMenuForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowMenuForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/zh-TW/docs/tags/menu"}],"version":"current","frontMatter":{"title":"ShowMenuForPlayer","sidebar_label":"ShowMenuForPlayer","description":"Shows a previously created menu for a player.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"SetWorldTime","permalink":"/zh-TW/docs/scripting/functions/SetWorldTime"},"next":{"title":"ShowNameTags","permalink":"/zh-TW/docs/scripting/functions/ShowNameTags"}}'),l=r("85893"),i=r("50065");let s={title:"ShowMenuForPlayer",sidebar_label:"ShowMenuForPlayer",description:"Shows a previously created menu for a player.",tags:["player","menu"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Shows a previously created menu for a player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,l.jsx)(n.td,{children:"The ID of the menu to show. Returned by CreateMenu."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to whom the menu will be shown."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. Menu and/or player doesn't exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new Menu:exampleMenu;\n\npublic OnGameModeInit()\n{\n    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/menu", true) == 0)\n    {\n        ShowMenuForPlayer(exampleMenu, playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Crashes the both server and player if an invalid menu ID given."})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var t=r(67294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
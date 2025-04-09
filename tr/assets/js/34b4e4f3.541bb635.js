"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["44095"],{65937:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/GetPlayerMenu","title":"GetPlayerMenu","description":"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).","source":"@site/docs/scripting/functions/GetPlayerMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerMenu","permalink":"/tr/docs/scripting/functions/GetPlayerMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerMenu.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/tr/docs/tags/menu"}],"version":"current","frontMatter":{"title":"GetPlayerMenu","sidebar_label":"GetPlayerMenu","description":"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMarkerForPlayer","permalink":"/tr/docs/scripting/functions/GetPlayerMarkerForPlayer"},"next":{"title":"GetPlayerMoney","permalink":"/tr/docs/scripting/functions/GetPlayerMoney"}}'),l=r("85893"),i=r("50065");let s={title:"GetPlayerMenu",sidebar_label:"GetPlayerMenu",description:"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).",tags:["player","menu"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer)."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to get the current menu of."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["The ID of the player's currently shown menu, or ",(0,l.jsx)(n.code,{children:"INVALID_MENU"})," (255) if no menu shown."]}),"\n",(0,l.jsxs)(n.p,{children:["Value returned is tagged with ",(0,l.jsx)(n.strong,{children:"Menu:"})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new Menu:currentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Returns previous menu when none is displayed."})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"HideMenuForPlayer",children:"HideMenuForPlayer"}),": Hide a menu for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var t=r(67294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
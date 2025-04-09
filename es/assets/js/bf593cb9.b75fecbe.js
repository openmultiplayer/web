"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8730"],{53832:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/AddMenuItem","title":"AddMenuItem","description":"Adds an item to a specified menu.","source":"@site/docs/scripting/functions/AddMenuItem.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddMenuItem","permalink":"/es/docs/scripting/functions/AddMenuItem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddMenuItem.md","tags":[{"inline":true,"label":"menu","permalink":"/es/docs/tags/menu"}],"version":"current","frontMatter":{"title":"AddMenuItem","sidebar_label":"AddMenuItem","description":"Adds an item to a specified menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"AddCharModel","permalink":"/es/docs/scripting/functions/AddCharModel"},"next":{"title":"AddPlayerClass","permalink":"/es/docs/scripting/functions/AddPlayerClass"}}'),d=t("85893"),s=t("50065");let l={title:"AddMenuItem",sidebar_label:"AddMenuItem",description:"Adds an item to a specified menu.",tags:["menu"]},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Adds an item to a specified menu."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,d.jsx)(n.td,{children:"The menu id to add an item to."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"column"}),(0,d.jsx)(n.td,{children:"The column to add the item to."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"const title[]"}),(0,d.jsx)(n.td,{children:"The title for the new menu item."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,d.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:"The index of the row this item was added to."}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'new Menu:gExampleMenu;\n\npublic OnGameModeInit()\n{\n    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);\n    AddMenuItem(gExampleMenu, 0, "item 1");\n    AddMenuItem(gExampleMenu, 0, "item 2");\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Crashes when passed an invalid menu ID."}),"\n",(0,d.jsx)(n.li,{children:"You can only have 12 items per menu (13th goes to the right side of the header of column name (colored), 14th and higher not display at all)."}),"\n",(0,d.jsx)(n.li,{children:"You can only use 2 columns (0 and 1)."}),"\n",(0,d.jsxs)(n.li,{children:["You can only add 8 color codes per one item (",(0,d.jsx)(n.del,{children:"r"}),", ",(0,d.jsx)(n.del,{children:"g"})," etc.). Maximum length of menu item is 31 symbols."]}),"\n"]})}),"\n",(0,d.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"IsMenuRowDisabled",children:"IsMenuRowDisabled"}),": Check if a menu row is disabled."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(67294);let d={},s=i.createContext(d);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
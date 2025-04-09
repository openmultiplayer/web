"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63010"],{69454:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>i,assets:()=>u,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/DisableMenu","title":"DisableMenu","description":"Disable a menu.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/DisableMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableMenu","permalink":"/th/docs/scripting/functions/DisableMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DisableMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/th/docs/tags/menu"}],"version":"current","frontMatter":{"title":"DisableMenu","sidebar_label":"DisableMenu","description":"Disable a menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"DisableInteriorEnterExits","permalink":"/th/docs/scripting/functions/DisableInteriorEnterExits"},"next":{"title":"DisableMenuRow","permalink":"/th/docs/scripting/functions/DisableMenuRow"}}'),s=t("85893"),r=t("50065");let a={title:"DisableMenu",sidebar_label:"DisableMenu",description:"Disable a menu.",tags:["menu"]},l=void 0,u={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,s.jsx)(n.p,{children:"Disable a menu."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,s.jsx)(n.td,{children:"The ID of the menu to disable."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new WeaponMenu;\n\nWeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);\nAddMenuItem(WeaponMenu, 0, "Rocket Launcher");\nAddMenuItem(WeaponMenu, 0, "Flamethrower");\nAddMenuItem(WeaponMenu, 0, "Minigun");\nAddMenuItem(WeaponMenu, 0, "Grenades");\n\n// Under OnPlayerCommandText\nif (!strcmp(cmdtext, "/disableguns", true))\n{\n    DisableMenu(WeaponMenu); //Disable the weapon menu\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Crashes when passed an invalid menu ID."})}),"\n",(0,s.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/th/docs/scripting/functions/CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/th/docs/scripting/functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/th/docs/scripting/functions/AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
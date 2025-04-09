"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78006"],{70559:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/DeletePVar","title":"DeletePVar","description":"Deletes a previously set player variable.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/DeletePVar.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DeletePVar","permalink":"/th/docs/scripting/functions/DeletePVar","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DeletePVar.md","tags":[{"inline":true,"label":"pvar","permalink":"/th/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"DeletePVar","sidebar_label":"DeletePVar","description":"Deletes a previously set player variable.","tags":["pvar"]},"sidebar":"docsSidebar","previous":{"title":"Delete3DTextLabel","permalink":"/th/docs/scripting/functions/Delete3DTextLabel"},"next":{"title":"DeletePlayer3DTextLabel","permalink":"/th/docs/scripting/functions/DeletePlayer3DTextLabel"}}'),i=r("85893"),l=r("50065");let a={title:"DeletePVar",sidebar_label:"DeletePVar",description:"Deletes a previously set player variable.",tags:["pvar"]},s=void 0,c={},o=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Deletes a previously set player variable."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player whose player variable to delete."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"varname"}),(0,i.jsx)(t.td,{children:"The name of the player variable to delete."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. Either the player specified isn't connected or there is no variable set with the given name."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'SetPVarInt(playerid, "SomeVarName", 69);\n\n// Later on, when the variable is no longer needed...\n\nDeletePVar(playerid, "SomeVarName");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Once a variable is deleted, attempts to retrieve the value will return 0 (for integers and floats and NULL for strings."})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
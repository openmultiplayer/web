"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["21369"],{54571:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/SetPlayerShopName","title":"SetPlayerShopName","description":"Loads or unloads an interior script for a player (for example the ammunation menu).","source":"@site/docs/scripting/functions/SetPlayerShopName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerShopName","permalink":"/sl/docs/scripting/functions/SetPlayerShopName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerShopName.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerShopName","sidebar_label":"SetPlayerShopName","description":"Loads or unloads an interior script for a player (for example the ammunation menu).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerScore","permalink":"/sl/docs/scripting/functions/SetPlayerScore"},"next":{"title":"SetPlayerSkillLevel","permalink":"/sl/docs/scripting/functions/SetPlayerSkillLevel"}}'),i=t("85893"),s=t("50065");let l={title:"SetPlayerShopName",sidebar_label:"SetPlayerShopName",description:"Loads or unloads an interior script for a player (for example the ammunation menu).",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Loads or unloads an interior script for a player (for example the ammunation menu)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to load the interior script for."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const shopname[]"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/shopnames",children:"shop script"}),' to load. Leave blank ("") to unload scripts.']})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/enter", cmdtext))\n    {\n        SetPlayerInterior(playerid, 5);\n        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);\n        SetPlayerShopName(playerid, "FDPIZA");\n        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Pizza Stack!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This function does not support casino scripts."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DisableInteriorEnterExits",children:"DisableInteriorEnterExits"}),": Disable the yellow door markers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/shopnames",children:"Shop Names"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
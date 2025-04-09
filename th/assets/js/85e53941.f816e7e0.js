"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97472"],{67538:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/SetPlayerArmour","title":"SetPlayerArmour","description":"Set a player\'s armor level.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerArmour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerArmour","permalink":"/th/docs/scripting/functions/SetPlayerArmour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerArmour.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerArmour","sidebar_label":"SetPlayerArmour","description":"Set a player\'s armor level.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmedWeapon","permalink":"/th/docs/scripting/functions/SetPlayerArmedWeapon"},"next":{"title":"SetPlayerAttachedObject","permalink":"/th/docs/scripting/functions/SetPlayerAttachedObject"}}'),i=r("85893"),l=r("50065");let a={title:"SetPlayerArmour",sidebar_label:"SetPlayerArmour",description:"Set a player's armor level.",tags:["player"]},s=void 0,o={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Set a player's armor level."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to set the armour of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":armour"]}),(0,i.jsx)(t.td,{children:"The amount of armour to set, as a percentage (float). Values larger than 100 are valid, but won't be displayed in the HUD's armour bar."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. This means the player specified does not exist."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Give players full armour (100%) when they spawn.\n    SetPlayerArmour(playerid, 100.0);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The function's name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Armour is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GetPlayerArmour: Find out how much armour a player has."}),"\n",(0,i.jsx)(t.li,{children:"SetPlayerHealth: Set a player's health."}),"\n",(0,i.jsx)(t.li,{children:"GetPlayerHealth: Find out how much health a player has."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},l=n.createContext(i);function a(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
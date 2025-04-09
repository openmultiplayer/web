"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99429"],{56260:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/SetPlayerArmour","title":"SetPlayerArmour","description":"Set a player\'s armor level.","source":"@site/docs/scripting/functions/SetPlayerArmour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerArmour","permalink":"/vi/docs/scripting/functions/SetPlayerArmour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerArmour.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerArmour","sidebar_label":"SetPlayerArmour","description":"Set a player\'s armor level.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmedWeapon","permalink":"/vi/docs/scripting/functions/SetPlayerArmedWeapon"},"next":{"title":"SetPlayerAttachedObject","permalink":"/vi/docs/scripting/functions/SetPlayerAttachedObject"}}'),i=r("85893"),l=r("50065");let s={title:"SetPlayerArmour",sidebar_label:"SetPlayerArmour",description:"Set a player's armor level.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Set a player's armor level."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to set the armour of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":armour"]}),(0,i.jsx)(t.td,{children:"The amount of armour to set, as a percentage (float). Values larger than 100 are valid, but won't be displayed in the HUD's armour bar."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"0"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Give players full armour (100%) when they spawn.\n    SetPlayerArmour(playerid, 100.0);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The function's name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Armour is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Find out how much armour a player has."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Find out how much health a player has."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return s}});var n=r(67294);let i={},l=n.createContext(i);function s(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
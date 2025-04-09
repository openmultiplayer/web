"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48541"],{34661:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>o,assets:()=>s,toc:()=>d,contentTitle:()=>r});var o=JSON.parse('{"id":"scripting/functions/SetPlayerAmmo","title":"SetPlayerAmmo","description":"Set the ammo of a player\'s weapon.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerAmmo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerAmmo","permalink":"/th/docs/scripting/functions/SetPlayerAmmo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerAmmo.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerAmmo","sidebar_label":"SetPlayerAmmo","description":"Set the ammo of a player\'s weapon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerAdmin","permalink":"/th/docs/scripting/functions/SetPlayerAdmin"},"next":{"title":"SetPlayerArmedWeapon","permalink":"/th/docs/scripting/functions/SetPlayerArmedWeapon"}}'),i=n("85893"),a=n("50065");let l={title:"SetPlayerAmmo",sidebar_label:"SetPlayerAmmo",description:"Set the ammo of a player's weapon.",tags:["player"]},r=void 0,s={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function c(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Set the ammo of a player's weapon."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to set the weapon ammo of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"weaponid"}),(0,i.jsx)(t.td,{children:"The ID of the weapon to set the ammo of. (not the weaponslot as in samp include)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ammo"}),(0,i.jsx)(t.td,{children:"The amount of ammo to set."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"1: The function was executed successfully. Success is also returned when the weapon slot specified is invalid (not 0-12)."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. The player isn't connected."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Set ammo of Shotgun to 100 bullets\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The param 'weaponslot' is a typo in the sa-mp include. You must use the weapon ID and not the weapon slot of the weapon you would like to set the ammo of."})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Set the ammo to 0 to remove a weapon from a player's inventory. Note that the weapon will still show up in GetPlayerWeaponData, albeit with 0 ammo."})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GetPlayerAmmo: Check how much ammo a player has in the specified slot."}),"\n",(0,i.jsx)(t.li,{children:"GivePlayerWeapon: Give a player a weapon."}),"\n",(0,i.jsx)(t.li,{children:"SetPlayerArmedWeapon: Set a player's armed weapon."}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var o=n(67294);let i={},a=o.createContext(i);function l(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
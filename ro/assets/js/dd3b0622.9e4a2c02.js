"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15262"],{12757:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/functions/GetPlayerWeaponData","title":"GetPlayerWeaponData","description":"Get the weapon and ammo in a specific player\'s weapon slot (e.","source":"@site/docs/scripting/functions/GetPlayerWeaponData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeaponData","permalink":"/ro/docs/scripting/functions/GetPlayerWeaponData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerWeaponData.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeaponData","sidebar_label":"GetPlayerWeaponData","description":"Get the weapon and ammo in a specific player\'s weapon slot (e.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeapon","permalink":"/ro/docs/scripting/functions/GetPlayerWeapon"},"next":{"title":"GetPlayerWeaponState","permalink":"/ro/docs/scripting/functions/GetPlayerWeaponState"}}'),s=t("85893"),r=t("50065");let i={title:"GetPlayerWeaponData",sidebar_label:"GetPlayerWeaponData",description:"Get the weapon and ammo in a specific player's weapon slot (e.",tags:["player"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the weapon and ammo in a specific player's weapon slot (e.g. the weapon in the 'SMG' slot)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player whose weapon data to retrieve."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["WEAPON_SLOT",":slot"]}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/weaponslots",children:"weapon slot"})," to get data for (0-12)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&WEAPON",":weapons"]}),(0,s.jsxs)(n.td,{children:["A variable in which to store the ",(0,s.jsx)(n.a,{href:"../resources/weaponids",children:"weapon ID"}),", passed by reference."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&ammo"}),(0,s.jsx)(n.td,{children:"A variable in which to store the ammo, passed by reference."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"0"})," - The function failed to execute. The player isn't connected and/or the weapon slot specified is invalid (valid is 0-12)."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// Common use: get all weapons and store info in an array containing 13 slots\n// The first value is the weapon ID, and second is the ammo\n\nnew weapons[13][2];\n\nfor (new i = 0; i <= 12; i++)\n{\n    GetPlayerWeaponData(playerid, WEAPON_SLOT:i, weapons[i][0], weapons[i][1]);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Another example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new \n    weaponid,\n    ammo;\n\n// Get the player weapon ID and ammo in the PISTOL slot\nGetPlayerWeaponData(playerid, WEAPON_SLOT_PISTOL, weaponid, ammo);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Old weapons with no ammo left are still returned."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/weaponslots",children:"Weapon Slots"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(67294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
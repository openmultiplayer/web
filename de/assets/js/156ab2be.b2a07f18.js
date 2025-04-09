"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6231"],{24662:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/GivePlayerWeapon","title":"GivePlayerWeapon","description":"Give a player a weapon with a specified amount of ammo.","source":"@site/docs/scripting/functions/GivePlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GivePlayerWeapon","permalink":"/de/docs/scripting/functions/GivePlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GivePlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"GivePlayerWeapon","sidebar_label":"GivePlayerWeapon","description":"Give a player a weapon with a specified amount of ammo.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GivePlayerMoney","permalink":"/de/docs/scripting/functions/GivePlayerMoney"},"next":{"title":"HTTP","permalink":"/de/docs/scripting/functions/HTTP"}}'),i=r("85893"),a=r("50065");let s={title:"GivePlayerWeapon",sidebar_label:"GivePlayerWeapon",description:"Give a player a weapon with a specified amount of ammo.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Give a player a weapon with a specified amount of ammo."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to give a weapon to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/weaponids",children:"ID of the weapon"})," to give to the player."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ammo"}),(0,i.jsx)(n.td,{children:"The amount of ammo to give to the player."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Give playerid a sawn-off shotgun with 64 ammo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Removes all weapons from a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": Remove a specified weapon from a player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(67294);let i={},a=t.createContext(i);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
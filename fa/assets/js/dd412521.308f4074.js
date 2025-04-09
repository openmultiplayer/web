"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37128"],{86205:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerWeapon","title":"GetPlayerWeapon","description":"Returns the ID of the weapon a player is currently holding.","source":"@site/docs/scripting/functions/GetPlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeapon","permalink":"/fa/docs/scripting/functions/GetPlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeapon","sidebar_label":"GetPlayerWeapon","description":"Returns the ID of the weapon a player is currently holding.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWantedLevel","permalink":"/fa/docs/scripting/functions/GetPlayerWantedLevel"},"next":{"title":"GetPlayerWeaponData","permalink":"/fa/docs/scripting/functions/GetPlayerWeaponData"}}'),r=t("85893"),a=t("50065");let l={title:"GetPlayerWeapon",sidebar_label:"GetPlayerWeapon",description:"Returns the ID of the weapon a player is currently holding.",tags:["player"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the ID of the weapon a player is currently holding."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to get the currently held weapon of."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"The ID of the player's current weapon. Returns -1 if the player specified does not exist."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Check if the killerid is not an invalid player (which means is connected).\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        // The WEAPON_MINIGUN constant is pre-defined in the standard library and is equal to 38.\n        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)\n        {\n            //Ban if they have a minigun\n            Ban(killerid);\n        }\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["When the player state is ",(0,r.jsx)(n.code,{children:"PLAYER_STATE_DRIVER"})," or ",(0,r.jsx)(n.code,{children:"PLAYER_STATE_PASSENGER"})," this function returns the weapon held by the player before they entered the vehicle. If a cheat is used to spawn a weapon inside a vehicle, this function will not report it."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Sometimes the result can be -1 which is an invalid weapon ID. Circumstances of this are not yet known, but it is best to discard information when returned weapon is -1."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": Find out information about weapons a player has."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Remove all weapons from a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": Remove a specified weapon from a player."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(67294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
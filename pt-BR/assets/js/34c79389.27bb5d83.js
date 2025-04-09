"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["60054"],{72111:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"scripting/functions/RemovePlayerWeapon","title":"RemovePlayerWeapon","description":"Remove a specified weapon from a player.","source":"@site/docs/scripting/functions/RemovePlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerWeapon","permalink":"/pt-BR/docs/scripting/functions/RemovePlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RemovePlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"RemovePlayerWeapon","sidebar_label":"RemovePlayerWeapon","description":"Remove a specified weapon from a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerMapIcon","permalink":"/pt-BR/docs/scripting/functions/RemovePlayerMapIcon"},"next":{"title":"RemoveServerRule","permalink":"/pt-BR/docs/scripting/functions/RemoveServerRule"}}'),s=r("85893"),o=r("50065");let a={title:"RemovePlayerWeapon",sidebar_label:"RemovePlayerWeapon",description:"Remove a specified weapon from a player.",tags:["player"]},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Remove a specified weapon from a player."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player whose weapon to remove."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/weaponids",children:"ID of the weapon"})," to remove."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Remove the Desert-Eagle from the player\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Removes all weapons from a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(67294);let s={},o=t.createContext(s);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
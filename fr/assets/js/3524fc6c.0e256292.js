"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["40203"],{96881:function(e,l,n){n.r(l),n.d(l,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>s,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/AllowPlayerTeleport","title":"AllowPlayerTeleport","description":"Enable/Disable the teleporting ability for a player by right-clicking on the map.","source":"@site/docs/scripting/functions/AllowPlayerTeleport.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowPlayerTeleport","permalink":"/fr/docs/scripting/functions/AllowPlayerTeleport","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowPlayerTeleport.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AllowPlayerTeleport","sidebar_label":"AllowPlayerTeleport","description":"Enable/Disable the teleporting ability for a player by right-clicking on the map.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AllowNickNameCharacter","permalink":"/fr/docs/scripting/functions/AllowNickNameCharacter"},"next":{"title":"AllowPlayerWeapons","permalink":"/fr/docs/scripting/functions/AllowPlayerWeapons"}}'),i=n("85893"),r=n("50065");let o={title:"AllowPlayerTeleport",sidebar_label:"AllowPlayerTeleport",description:"Enable/Disable the teleporting ability for a player by right-clicking on the map.",tags:["player"]},a=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.admonition,{type:"warning",children:(0,i.jsxs)(l.p,{children:["This function, as of 0.3d, is deprecated. Check ",(0,i.jsx)(l.a,{href:"../callbacks/OnPlayerClickMap",children:"OnPlayerClickMap"}),"."]})}),"\n",(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"Enable/Disable the teleporting ability for a player by right-clicking on the map"}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"The ID of the player to allow teleport."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsxs)(l.td,{children:["bool",":allow"]}),(0,i.jsx)(l.td,{children:"'false' to disallow and 'true' to allow."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    // Allows the Player to teleport by right-clicking on the map\n    // since this is in OnPlayerConnect, this will be done for EACH player\n    AllowPlayerTeleport(playerid, true);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(l.admonition,{type:"warning",children:(0,i.jsxs)(l.p,{children:["This function will work only if ",(0,i.jsx)(l.a,{href:"AllowAdminTeleport",children:"AllowAdminTeleport"})," is enabled, and you have to be an admin."]})}),"\n",(0,i.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"IsPlayerTeleportAllowed",children:"IsPlayerTeleportAllowed"}),": Can this player teleport by right-clicking on the map?"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"AllowAdminTeleport",children:"AllowAdminTeleport"}),": Toggle waypoint teleporting for RCON admins."]}),"\n"]})]})}function p(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return a},a:function(){return o}});var t=n(67294);let i={},r=t.createContext(i);function o(e){let l=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);
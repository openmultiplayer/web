"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["91857"],{24421:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetPlayerTargetPlayer","title":"GetPlayerTargetPlayer","description":"Check who a player is aiming at.","source":"@site/docs/scripting/functions/GetPlayerTargetPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTargetPlayer","permalink":"/sl/docs/scripting/functions/GetPlayerTargetPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerTargetPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerTargetPlayer","sidebar_label":"GetPlayerTargetPlayer","description":"Check who a player is aiming at.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTargetActor","permalink":"/sl/docs/scripting/functions/GetPlayerTargetActor"},"next":{"title":"GetPlayerTeam","permalink":"/sl/docs/scripting/functions/GetPlayerTeam"}}'),n=a("85893"),l=a("50065");let i={title:"GetPlayerTargetPlayer",sidebar_label:"GetPlayerTargetPlayer",description:"Check who a player is aiming at.",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Check who a player is aiming at."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to get the target of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:["The ID of the target player, or ",(0,n.jsx)(t.code,{children:"INVALID_PLAYER_ID"})," if none."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    // Store the ID\n    new playerTargetId = GetPlayerTargetPlayer(playerid);\n    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))\n    {\n        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerGiveDamage",children:"OnPlayerGiveDamage"}),": This callback is called when a player gives damage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerTakeDamage",children:"OnPlayerTakeDamage"}),": This callback is called when a player takes damage."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var r=a(67294);let n={},l=r.createContext(n);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
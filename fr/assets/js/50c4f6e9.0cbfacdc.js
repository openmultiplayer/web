"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50212"],{14517:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayerTeam","title":"SetPlayerTeam","description":"Set the team of a player.","source":"@site/docs/scripting/functions/SetPlayerTeam.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerTeam","permalink":"/fr/docs/scripting/functions/SetPlayerTeam","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerTeam.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerTeam","sidebar_label":"SetPlayerTeam","description":"Set the team of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerSpecialAction","permalink":"/fr/docs/scripting/functions/SetPlayerSpecialAction"},"next":{"title":"SetPlayerTime","permalink":"/fr/docs/scripting/functions/SetPlayerTime"}}'),i=n("85893"),l=n("50065");let a={title:"SetPlayerTeam",sidebar_label:"SetPlayerTeam",description:"Set the team of a player.",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Set the team of a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player you want to set the team of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"teamid"}),(0,i.jsx)(t.td,{children:"The team to put the player in. Use NO_TEAM to remove the player from any team."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Set a player's team to 4 when they spawn\n    SetPlayerTeam(playerid, 4);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Players can not damage/kill players on the same team unless they use a knife to slit their throat."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Players are also unable to damage vehicles driven by a player from the same team. This can be enabled with ",(0,i.jsx)(t.a,{href:"EnableVehicleFriendlyFire",children:"EnableVehicleFriendlyFire"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["255 (or ",(0,i.jsx)(t.code,{children:"NO_TEAM"}),") is the default team to be able to shoot other players, not 0."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerTeam",children:"GetPlayerTeam"}),": Check what team a player is on."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetTeamCount",children:"SetTeamCount"}),": Set the number of teams available."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"EnableVehicleFriendlyFire",children:"EnableVehicleFriendlyFire"}),": Enable friendly fire for team vehicles."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let i={},l=r.createContext(i);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
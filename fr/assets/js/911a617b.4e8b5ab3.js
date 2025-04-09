"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51866"],{98762:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/IsActorStreamedIn","title":"IsActorStreamedIn","description":"Checks if an actor is streamed in for a player.","source":"@site/docs/scripting/functions/IsActorStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsActorStreamedIn","permalink":"/fr/docs/scripting/functions/IsActorStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsActorStreamedIn.md","tags":[{"inline":true,"label":"actor","permalink":"/fr/docs/tags/actor"}],"version":"current","frontMatter":{"title":"IsActorStreamedIn","sidebar_label":"IsActorStreamedIn","description":"Checks if an actor is streamed in for a player.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"IsActorInvulnerable","permalink":"/fr/docs/scripting/functions/IsActorInvulnerable"},"next":{"title":"IsAdminTeleportAllowed","permalink":"/fr/docs/scripting/functions/IsAdminTeleportAllowed"}}'),i=n("85893"),s=n("50065");let o={title:"IsActorStreamedIn",sidebar_label:"IsActorStreamedIn",description:"Checks if an actor is streamed in for a player.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Checks if an actor is streamed in for a player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function returns 1 if the actor is streamed in for the player, or 0 if it is not."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsActorStreamedIn(gMyActor, playerid))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsPlayerStreamedIn",children:"IsPlayerStreamedIn"}),": Checks if a player is streamed in for another player."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
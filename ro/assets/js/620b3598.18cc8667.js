"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55325"],{42195:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>s,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/CreateActor","title":"CreateActor","description":"Create a static \'actor\' in the world.","source":"@site/docs/scripting/functions/CreateActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateActor","permalink":"/ro/docs/scripting/functions/CreateActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateActor.md","tags":[{"inline":true,"label":"actor","permalink":"/ro/docs/tags/actor"}],"version":"current","frontMatter":{"title":"CreateActor","sidebar_label":"CreateActor","description":"Create a static \'actor\' in the world.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"Create3DTextLabel","permalink":"/ro/docs/scripting/functions/Create3DTextLabel"},"next":{"title":"CreateExplosion","permalink":"/ro/docs/scripting/functions/CreateExplosion"}}'),a=r("85893"),i=r("50065");let o={title:"CreateActor",sidebar_label:"CreateActor",description:"Create a static 'actor' in the world.",tags:["actor"]},c=void 0,l={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Create a static 'actor' in the world. These 'actors' are like NPCs, however they have limited functionality. They do not take up server player slots."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"skin"}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.a,{href:"../resources/skins",children:"model ID"})," the actor should have."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":x"]}),(0,a.jsx)(t.td,{children:"The X coordinate to create the actor at."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":y"]}),(0,a.jsx)(t.td,{children:"The Y coordinate to create the actor at."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":z"]}),(0,a.jsx)(t.td,{children:"The Z coordinate to create the actor at."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":angle"]}),(0,a.jsx)(t.td,{children:"The facing angle (rotation) for the actor to have."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The created Actor ID (start at 0)."}),"\n",(0,a.jsx)(t.p,{children:"INVALID_ACTOR_ID (65535) If the actor limit (1000) is reached."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new gActorCJ;\n\npublic OnGameModeInit()\n{\n    // Create an actor (CJ) at Blueberry Acres (Center of SA map)\n    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);\n}\n\npublic OnGameModeExit()\n{\n    // Destroy our lovely actor (CJ)\n    DestroyActor(gActorCJ);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Actors are designed to just stand somewhere, for example cashiers and bartenders. They can perform animations (once or looping) using ",(0,a.jsx)(t.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),"."]})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Actors are completely separate from NPCs. They do NOT use player IDs/slots on the server and CANNOT be handled like NPCs. Actors are limited to 1000 (MAX_ACTORS)."}),"\n",(0,a.jsx)(t.li,{children:"Actors can be pushed by vehicles, use a timer to put them back at their positions."}),"\n",(0,a.jsx)(t.li,{children:"Actors default to being invulnerable."}),"\n"]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyActor",children:"DestroyActor"}),": Destroy an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorPos",children:"SetActorPos"}),": Set the position of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorSpawnInfo",children:"GetActorSpawnInfo"}),": Get the initial spawn point of the actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorFacingAngle",children:"SetActorFacingAngle"}),": Set the facing angle of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorFacingAngle",children:"GetActorFacingAngle"}),": Get the facing angle of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorVirtualWorld",children:"SetActorVirtualWorld"}),": Set the virtual world of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorVirtualWorld",children:"GetActorVirtualWorld"}),": Get the virtual world of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Apply an animation to an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"ClearActorAnimations",children:"ClearActorAnimations"}),": Clear any animations that are applied to an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorAnimation",children:"GetActorAnimation"}),": Get the animation the actor is currently performing."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraTargetActor",children:"GetPlayerCameraTargetActor"}),": Get the ID of the actor (if any) a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsActorStreamedIn",children:"IsActorStreamedIn"}),": Checks if an actor is streamed in for a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorSkin",children:"SetActorSkin"}),": Set the skin of the actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorSkin",children:"GetActorSkin"}),": Get the skin of the actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorHealth",children:"GetActorHealth"}),": Gets the health of an actor."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsActorInvulnerable",children:"IsActorInvulnerable"}),": Check if actor is invulnerable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidActor",children:"IsValidActor"}),": Check if actor id is valid."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetActorPoolSize",children:"GetActorPoolSize"}),": Gets the highest actorid created on the server."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerTargetActor",children:"GetPlayerTargetActor"}),": Gets id of an actor which is aimed by certain player."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnActorStreamIn",children:"OnActorStreamIn"}),": Called when an actor is streamed in by a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnActorStreamOut",children:"OnActorStreamOut"}),": Called when an actor is streamed out by a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"}),": This callback is called when a player gives damage to an actor."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return o}});var n=r(67294);let a={},i=n.createContext(a);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
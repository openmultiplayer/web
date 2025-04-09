"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["66538"],{88640:function(t,e,n){n.r(e),n.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetActorSkin","title":"GetActorSkin","description":"Get the skin of the actor.","source":"@site/docs/scripting/functions/GetActorSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorSkin","permalink":"/pt-BR/docs/scripting/functions/GetActorSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActorSkin.md","tags":[{"inline":true,"label":"actor","permalink":"/pt-BR/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorSkin","sidebar_label":"GetActorSkin","description":"Get the skin of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorPos","permalink":"/pt-BR/docs/scripting/functions/GetActorPos"},"next":{"title":"GetActorSpawnInfo","permalink":"/pt-BR/docs/scripting/functions/GetActorSpawnInfo"}}'),i=n("85893"),o=n("50065");let c={title:"GetActorSkin",sidebar_label:"GetActorSkin",description:"Get the skin of the actor.",tags:["actor"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Get the skin of the actor."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"actorid"}),(0,i.jsx)(e.td,{children:"The ID of the actor to get."})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(e.p,{children:"Returns the actor's current skin."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n    \n    new actorSkinID = GetActorSkin(gMyActor);\n    // The value of `actorSkinID` is now 179\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"SetActorSkin",children:"SetActorSkin"}),": Set the skin of the actor."]}),"\n"]})]})}function u(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return s},a:function(){return c}});var r=n(67294);let i={},o=r.createContext(i);function c(t){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);
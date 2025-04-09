"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19666"],{16331:function(t,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetActorVirtualWorld","title":"GetActorVirtualWorld","description":"Get the virtual world of an actor.","source":"@site/docs/scripting/functions/GetActorVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorVirtualWorld","permalink":"/docs/scripting/functions/GetActorVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActorVirtualWorld.md","tags":[{"inline":true,"label":"actor","permalink":"/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorVirtualWorld","sidebar_label":"GetActorVirtualWorld","description":"Get the virtual world of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorSpawnInfo","permalink":"/docs/scripting/functions/GetActorSpawnInfo"},"next":{"title":"GetActors","permalink":"/docs/scripting/functions/GetActors"}}'),o=r("85893"),i=r("50065");let l={title:"GetActorVirtualWorld",sidebar_label:"GetActorVirtualWorld",description:"Get the virtual world of an actor.",tags:["actor"]},c=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{VersionWarn:r}=e;return r||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Get the virtual world of an actor."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"actorid"}),(0,o.jsx)(e.td,{children:"The ID of the actor to get the virtual world of."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:"The virtual world of the actor. By default this is 0."}),"\n",(0,o.jsx)(e.p,{children:"Also returns 0 if actor specified does not exist."}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);\n\n    SetActorVirtualWorld(MyActor, 20);\n    return 1;\n}\n\n// Somewhere else\nif (GetActorVirtualWorld(MyActor) == 20)\n{\n    // Do something\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"SetActorVirtualWorld",children:"SetActorVirtualWorld"}),": Set the virtual world of an actor."]}),"\n"]})]})}function u(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},50065:function(t,e,r){r.d(e,{Z:function(){return c},a:function(){return l}});var n=r(67294);let o={},i=n.createContext(o);function l(t){let e=n.useContext(i);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);
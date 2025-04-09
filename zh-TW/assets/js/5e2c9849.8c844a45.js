"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["820"],{86258:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetActorSkin","title":"SetActorSkin","description":"Set the skin of the actor.","source":"@site/docs/scripting/functions/SetActorSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorSkin","permalink":"/zh-TW/docs/scripting/functions/SetActorSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetActorSkin.md","tags":[{"inline":true,"label":"actor","permalink":"/zh-TW/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorSkin","sidebar_label":"SetActorSkin","description":"Set the skin of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorPos","permalink":"/zh-TW/docs/scripting/functions/SetActorPos"},"next":{"title":"SetActorVirtualWorld","permalink":"/zh-TW/docs/scripting/functions/SetActorVirtualWorld"}}'),i=n("85893"),o=n("50065");let s={title:"SetActorSkin",sidebar_label:"SetActorSkin",description:"Set the skin of the actor.",tags:["actor"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Set the skin of the actor."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"actorid"}),(0,i.jsx)(e.td,{children:"The ID of the actor to set."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"skin"}),(0,i.jsx)(e.td,{children:"The ID of the skin to give them"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"true"})," - Success."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"false"})," - Failure (i.e. Actor is not created/valid)."]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n    SetActorSkin(gMyActor, 270); // Change actor skin from 179 to 270\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"GetActorSkin",children:"GetActorSkin"}),": Get the skin of the actor."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return c},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(t){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);
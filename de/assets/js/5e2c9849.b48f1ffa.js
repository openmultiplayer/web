"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["820"],{86258:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/SetActorSkin","title":"SetActorSkin","description":"Set the skin of the actor.","source":"@site/docs/scripting/functions/SetActorSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorSkin","permalink":"/de/docs/scripting/functions/SetActorSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetActorSkin.md","tags":[{"inline":true,"label":"actor","permalink":"/de/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorSkin","sidebar_label":"SetActorSkin","description":"Set the skin of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorPos","permalink":"/de/docs/scripting/functions/SetActorPos"},"next":{"title":"SetActorVirtualWorld","permalink":"/de/docs/scripting/functions/SetActorVirtualWorld"}}'),i=n("85893"),o=n("50065");let s={title:"SetActorSkin",sidebar_label:"SetActorSkin",description:"Set the skin of the actor.",tags:["actor"]},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Set the skin of the actor."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor to set."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"skin"}),(0,i.jsx)(t.td,{children:"The ID of the skin to give them"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - Success."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - Failure (i.e. Actor is not created/valid)."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n    SetActorSkin(gMyActor, 270); // Change actor skin from 179 to 270\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetActorSkin",children:"GetActorSkin"}),": Get the skin of the actor."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
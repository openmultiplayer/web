"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79143"],{53450:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/IsValidActor","title":"IsValidActor","description":"Checks if an actor ID is valid.","source":"@site/docs/scripting/functions/IsValidActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidActor","permalink":"/ar/docs/scripting/functions/IsValidActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidActor.md","tags":[{"inline":true,"label":"actor","permalink":"/ar/docs/tags/actor"}],"version":"current","frontMatter":{"title":"IsValidActor","sidebar_label":"IsValidActor","description":"Checks if an actor ID is valid.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"IsValid3DTextLabel","permalink":"/ar/docs/scripting/functions/IsValid3DTextLabel"},"next":{"title":"IsValidAnimationLibrary","permalink":"/ar/docs/scripting/functions/IsValidAnimationLibrary"}}'),i=n("85893"),s=n("50065");let o={title:"IsValidActor",sidebar_label:"IsValidActor",description:"Checks if an actor ID is valid.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Checks if an actor ID is valid."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor to check."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The actor is valid."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The actor is not valid."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    \n    if (IsValidActor(gMyActor))\n    {\n        SetActorHealth(gMyActor, 100.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetActorPoolSize",children:"GetActorPoolSize"}),": Gets the highest actorid created on the server."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
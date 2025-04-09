"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48215"],{57493:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetActorInvulnerable","title":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","source":"@site/docs/scripting/functions/SetActorInvulnerable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorInvulnerable","permalink":"/pt-BR/docs/scripting/functions/SetActorInvulnerable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetActorInvulnerable.md","tags":[{"inline":true,"label":"actor","permalink":"/pt-BR/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorInvulnerable","sidebar_label":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorHealth","permalink":"/pt-BR/docs/scripting/functions/SetActorHealth"},"next":{"title":"SetActorPos","permalink":"/pt-BR/docs/scripting/functions/SetActorPos"}}'),i=n("85893"),l=n("50065");let o={title:"SetActorInvulnerable",sidebar_label:"SetActorInvulnerable",description:"Toggle an actor's invulnerability.",tags:["actor"]},s=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Toggle an actor's invulnerability."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor to set invulnerability."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":invulnerable"]}),(0,i.jsx)(t.td,{children:"'false' to make them vulnerable, 'true' to make them invulnerable."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - Success"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - Failure (i.e. Actor is not created)."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    SetActorInvulnerable(gMyActor, true);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Once set invulnerable, the actor does not call ",(0,i.jsx)(t.a,{href:"OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"}),". Players will have actor's invulnerability state changed only when it is restreamed to them."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsActorInvulnerable",children:"IsActorInvulnerable"}),": Check if an actor is invulnerable."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(67294);let i={},l=r.createContext(i);function o(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
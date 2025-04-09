"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48215"],{57493:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetActorInvulnerable","title":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","source":"@site/docs/scripting/functions/SetActorInvulnerable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorInvulnerable","permalink":"/fa/docs/scripting/functions/SetActorInvulnerable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetActorInvulnerable.md","tags":[{"inline":true,"label":"actor","permalink":"/fa/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorInvulnerable","sidebar_label":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorHealth","permalink":"/fa/docs/scripting/functions/SetActorHealth"},"next":{"title":"SetActorPos","permalink":"/fa/docs/scripting/functions/SetActorPos"}}'),i=t("85893"),l=t("50065");let o={title:"SetActorInvulnerable",sidebar_label:"SetActorInvulnerable",description:"Toggle an actor's invulnerability.",tags:["actor"]},s=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Toggle an actor's invulnerability."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actorid"}),(0,i.jsx)(n.td,{children:"The ID of the actor to set invulnerability."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":invulnerable"]}),(0,i.jsx)(n.td,{children:"'false' to make them vulnerable, 'true' to make them invulnerable."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - Success"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - Failure (i.e. Actor is not created)."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    SetActorInvulnerable(gMyActor, true);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Once set invulnerable, the actor does not call ",(0,i.jsx)(n.a,{href:"OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"}),". Players will have actor's invulnerability state changed only when it is restreamed to them."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsActorInvulnerable",children:"IsActorInvulnerable"}),": Check if an actor is invulnerable."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(67294);let i={},l=r.createContext(i);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
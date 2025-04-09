"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["40219"],{92682:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/IsActorInvulnerable","title":"IsActorInvulnerable","description":"Check if an actor is invulnerable.","source":"@site/docs/scripting/functions/IsActorInvulnerable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsActorInvulnerable","permalink":"/hu/docs/scripting/functions/IsActorInvulnerable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsActorInvulnerable.md","tags":[{"inline":true,"label":"actor","permalink":"/hu/docs/tags/actor"}],"version":"current","frontMatter":{"title":"IsActorInvulnerable","sidebar_label":"IsActorInvulnerable","description":"Check if an actor is invulnerable.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"Is3DTextLabelStreamedIn","permalink":"/hu/docs/scripting/functions/Is3DTextLabelStreamedIn"},"next":{"title":"IsActorStreamedIn","permalink":"/hu/docs/scripting/functions/IsActorStreamedIn"}}'),i=t("85893"),s=t("50065");let l={title:"IsActorInvulnerable",sidebar_label:"IsActorInvulnerable",description:"Check if an actor is invulnerable.",tags:["actor"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Check if an actor is invulnerable."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actorid"}),(0,i.jsx)(n.td,{children:"The ID of the actor to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The actor is invulnerable."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The actor is vulnerable."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    \n    if (IsActorInvulnerable(gMyActor))\n    {\n        print("Actor is invulnerable.");\n    }\n    else\n    {\n        print("Actor is vulnerable.");\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
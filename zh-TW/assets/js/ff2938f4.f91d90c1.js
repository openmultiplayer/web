"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88787"],{63850:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetActorHealth","title":"SetActorHealth","description":"Set the health of an actor.","source":"@site/docs/scripting/functions/SetActorHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorHealth","permalink":"/zh-TW/docs/scripting/functions/SetActorHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetActorHealth.md","tags":[{"inline":true,"label":"actor","permalink":"/zh-TW/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorHealth","sidebar_label":"SetActorHealth","description":"Set the health of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorFacingAngle","permalink":"/zh-TW/docs/scripting/functions/SetActorFacingAngle"},"next":{"title":"SetActorInvulnerable","permalink":"/zh-TW/docs/scripting/functions/SetActorInvulnerable"}}'),o=n("85893"),c=n("50065");let i={title:"SetActorHealth",sidebar_label:"SetActorHealth",description:"Set the health of an actor.",tags:["actor"]},s=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Set the health of an actor."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"actorid"}),(0,o.jsx)(t.td,{children:"The ID of the actor to set the health of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":health"]}),(0,o.jsx)(t.td,{children:"The value to set the actors's health to."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"true"})," - success"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"false"})," - failure (i.e. actor is not created)."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation\n    \n    SetActorHealth(gMyActor, 100.0);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetActorHealth",children:"GetActorHealth"}),": Get the health of an actor."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);let o={},c=r.createContext(o);function i(e){let t=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
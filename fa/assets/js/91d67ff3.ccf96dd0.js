"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61774"],{66136:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/ClearActorAnimations","title":"ClearActorAnimations","description":"Clear any animations applied to an actor.","source":"@site/docs/scripting/functions/ClearActorAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearActorAnimations","permalink":"/fa/docs/scripting/functions/ClearActorAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ClearActorAnimations.md","tags":[{"inline":true,"label":"actor","permalink":"/fa/docs/tags/actor"}],"version":"current","frontMatter":{"title":"ClearActorAnimations","sidebar_label":"ClearActorAnimations","description":"Clear any animations applied to an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"ChatTextReplacementToggled","permalink":"/fa/docs/scripting/functions/ChatTextReplacementToggled"},"next":{"title":"ClearAnimations","permalink":"/fa/docs/scripting/functions/ClearAnimations"}}'),r=t("85893"),o=t("50065");let a={title:"ClearActorAnimations",sidebar_label:"ClearActorAnimations",description:"Clear any animations applied to an actor.",tags:["actor"]},s=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Clear any animations applied to an actor."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"actorid"}),(0,r.jsxs)(n.td,{children:["The ID of the actor (returned by ",(0,r.jsx)(n.a,{href:"CreateActor",children:"CreateActor"}),") to clear the animations for."]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation\n    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // Pay anim\n    return 1;\n}\n\n// Somewhere else\nClearActorAnimations(gMyActor);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Apply an animation to an actor."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let r={},o=i.createContext(r);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
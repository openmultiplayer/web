"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89059"],{12267:function(t,e,n){n.r(e),n.d(e,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/ApplyActorAnimation","title":"ApplyActorAnimation","description":"Apply an animation to an actor.","source":"@site/docs/scripting/functions/ApplyActorAnimation.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ApplyActorAnimation","permalink":"/sl/docs/scripting/functions/ApplyActorAnimation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ApplyActorAnimation.md","tags":[{"inline":true,"label":"actor","permalink":"/sl/docs/tags/actor"},{"inline":true,"label":"animation","permalink":"/sl/docs/tags/animation"}],"version":"current","frontMatter":{"title":"ApplyActorAnimation","sidebar_label":"ApplyActorAnimation","description":"Apply an animation to an actor.","tags":["actor","animation"]},"sidebar":"docsSidebar","previous":{"title":"AllowPlayerWeapons","permalink":"/sl/docs/scripting/functions/AllowPlayerWeapons"},"next":{"title":"ApplyAnimation","permalink":"/sl/docs/scripting/functions/ApplyAnimation"}}'),o=n("85893"),r=n("50065");let a={title:"ApplyActorAnimation",sidebar_label:"ApplyActorAnimation",description:"Apply an animation to an actor.",tags:["actor","animation"]},l=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Apply an animation to an actor."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"actorid"}),(0,o.jsx)(e.td,{children:"The ID of the actor to apply the animation to."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"const animationLibrary[]"}),(0,o.jsx)(e.td,{children:"The animation library from which to apply an animation."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"const animationName[]"}),(0,o.jsx)(e.td,{children:"The name of the animation to apply, within the specified library."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["float",":delta"]}),(0,o.jsx)(e.td,{children:"The speed to play the animation (use 4.1)."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["bool",":loop"]}),(0,o.jsx)(e.td,{children:"If set to true, the animation will loop. If set to false, the animation will play once."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["bool",":lockX"]}),(0,o.jsx)(e.td,{children:"If set to false, the actor is returned to their old X coordinate once the animation is complete (for animations that move the actor such as walking). true will not return them to their old position."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["bool",":lockY"]}),(0,o.jsx)(e.td,{children:"Same as above but for the Y axis. Should be kept the same as the previous parameter."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["bool",":freeze"]}),(0,o.jsx)(e.td,{children:"Setting this to true will freeze an actor at the end of the animation. false will not."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"time"}),(0,o.jsx)(e.td,{children:"Timer in milliseconds. For a never-ending loop it should be 0."})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:'new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation\n    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // Pay anim\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    // Preload the \'DEALER\' animation library for the player\n    ApplyAnimation(playerid, "DEALER", "null", 4.1, false, false, false, false, 0);\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"You must preload the animation library for the player the actor will be applying the animation for, and not for the actor. Otherwise, the animation won't be applied to the actor until the function is executed again."})}),"\n",(0,o.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"ClearActorAnimations",children:"ClearActorAnimations"}),": Clear any animations that are applied to an actor."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GetActorAnimation",children:"GetActorAnimation"}),": Get the animation the actor is currently performing."]}),"\n"]})]})}function p(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return l},a:function(){return a}});var i=n(67294);let o={},r=i.createContext(o);function a(t){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32418"],{39829:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/GetActorPoolSize","title":"GetActorPoolSize","description":"Gets the highest actorid created on the server.","source":"@site/docs/scripting/functions/GetActorPoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorPoolSize","permalink":"/ru/docs/scripting/functions/GetActorPoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActorPoolSize.md","tags":[{"inline":true,"label":"actor","permalink":"/ru/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorPoolSize","sidebar_label":"GetActorPoolSize","description":"Gets the highest actorid created on the server.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorHealth","permalink":"/ru/docs/scripting/functions/GetActorHealth"},"next":{"title":"GetActorPos","permalink":"/ru/docs/scripting/functions/GetActorPos"}}'),o=n("85893"),i=n("50065");let c={title:"GetActorPoolSize",sidebar_label:"GetActorPoolSize",description:"Gets the highest actorid created on the server.",tags:["actor"]},s=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["Gets the highest actorid created on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,o.jsx)(t.code,{children:"0"})," even when there are no actors.  fixes.inc and open.mp correct this to return ",(0,o.jsx)(t.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,o.jsx)(t.code,{children:"MAX_ACTORS"})," or ",(0,o.jsx)(t.code,{children:"foreach"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"SetAllActorsHealth(Float:health)\n{\n    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)\n    {\n        if (IsValidActor(i))\n        {\n            SetActorHealth(i, health);\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"isValidActor",children:"IsValidActor"}),": Check if actor id is valid."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var r=n(67294);let o={},i=r.createContext(o);function c(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
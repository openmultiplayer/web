"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70636"],{55599:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetActorFacingAngle","title":"GetActorFacingAngle","description":"Get the facing angle of an actor.","source":"@site/docs/scripting/functions/GetActorFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorFacingAngle","permalink":"/de/docs/scripting/functions/GetActorFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActorFacingAngle.md","tags":[{"inline":true,"label":"actor","permalink":"/de/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorFacingAngle","sidebar_label":"GetActorFacingAngle","description":"Get the facing angle of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorAnimation","permalink":"/de/docs/scripting/functions/GetActorAnimation"},"next":{"title":"GetActorHealth","permalink":"/de/docs/scripting/functions/GetActorHealth"}}'),r=n("85893"),c=n("50065");let o={title:"GetActorFacingAngle",sidebar_label:"GetActorFacingAngle",description:"Get the facing angle of an actor.",tags:["actor"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the facing angle of an actor."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"actorid"}),(0,r.jsxs)(t.td,{children:["The ID of the actor to get the facing angle of. Returned by ",(0,r.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":angle"]}),(0,r.jsx)(t.td,{children:"A float variable, passed by reference, in to which the actor's facing angle will be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,r.jsx)(t.p,{children:"The actor's facing angle is stored in the specified variable."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new Float:facingAngle;\nGetActorFacingAngle(actorid, facingAngle);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetActorFacingAngle",children:"SetActorFacingAngle"}),": Set the facing angle of an actor."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(67294);let r={},c=i.createContext(r);function o(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);
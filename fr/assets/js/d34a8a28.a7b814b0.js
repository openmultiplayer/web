"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80061"],{63679:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/functions/GetActors","title":"GetActors","description":"Gets an array variable of the IDs of the created actors on the server.","source":"@site/docs/scripting/functions/GetActors.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActors","permalink":"/fr/docs/scripting/functions/GetActors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetActors.md","tags":[{"inline":true,"label":"actor","permalink":"/fr/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActors","sidebar_label":"GetActors","description":"Gets an array variable of the IDs of the created actors on the server.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorVirtualWorld","permalink":"/fr/docs/scripting/functions/GetActorVirtualWorld"},"next":{"title":"GetAnimationName","permalink":"/fr/docs/scripting/functions/GetAnimationName"}}'),s=r("85893"),i=r("50065");let o={title:"GetActors",sidebar_label:"GetActors",description:"Gets an array variable of the IDs of the created actors on the server.",tags:["actor"]},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets an array variable of the IDs of the created actors on the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actors[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the actor IDs, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size of the array."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function returns the number of actors stored in the array."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-pawn",children:"new actors[MAX_ACTORS];\n\nGetActors(actors, sizeof(actors));\n// The `actors` array now contains created actor IDs. { 0, 1, 2, 3, 4, ... }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayers",children:"GetPlayers"}),": Gets an array variable of the IDs of the current players on the server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicles",children:"GetVehicles"}),": Gets an array variable of the IDs of the created vehicles on the server."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(67294);let s={},i=n.createContext(s);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
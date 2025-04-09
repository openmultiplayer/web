"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56214"],{83220:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/DestroyActor","title":"DestroyActor","description":"Destroy an actor which was created with CreateActor.","source":"@site/docs/scripting/functions/DestroyActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyActor","permalink":"/sl/docs/scripting/functions/DestroyActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DestroyActor.md","tags":[{"inline":true,"label":"actor","permalink":"/sl/docs/tags/actor"}],"version":"current","frontMatter":{"title":"DestroyActor","sidebar_label":"DestroyActor","description":"Destroy an actor which was created with CreateActor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"DeleteSVar","permalink":"/sl/docs/scripting/functions/DeleteSVar"},"next":{"title":"DestroyMenu","permalink":"/sl/docs/scripting/functions/DestroyMenu"}}'),s=r("85893"),o=r("50065");let i={title:"DestroyActor",sidebar_label:"DestroyActor",description:"Destroy an actor which was created with CreateActor.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Destroy an actor which was created with CreateActor."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actorid"}),(0,s.jsx)(t.td,{children:"The ID of the actor to destroy. Returned by CreateActor."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. The actor with the ID specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new MyActor;\n\npublic OnFilterScriptInit()\n{\n    MyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);\n    return 1;\n}\n\npublic OnFilterScriptExit()\n{\n    DestroyActor(MyActor);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(67294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
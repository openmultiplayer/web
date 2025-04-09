"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75924"],{34982:function(n,t,e){e.r(t),e.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/ClearActorAnimations","title":"ClearActorAnimations","description":"I-clear ang anumang mga animation na inilapat sa isang aktor.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/ClearActorAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearActorAnimations","permalink":"/fil/docs/scripting/functions/ClearActorAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ClearActorAnimations.md","tags":[],"version":"current","frontMatter":{"title":"ClearActorAnimations","sidebar_label":"ClearActorAnimations","description":"I-clear ang anumang mga animation na inilapat sa isang aktor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ChatTextReplacementToggled","permalink":"/fil/docs/scripting/functions/ChatTextReplacementToggled"},"next":{"title":"ClearAnimations","permalink":"/fil/docs/scripting/functions/ClearAnimations"}}'),a=e("85893"),r=e("50065");let o={title:"ClearActorAnimations",sidebar_label:"ClearActorAnimations",description:"I-clear ang anumang mga animation na inilapat sa isang aktor.",tags:[]},s=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(n){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components},{VersionWarn:e}=t;return e||function(n,t){throw Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"I-clear ang anumang mga animation na inilapat sa isang aktor."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"actorid"}),(0,a.jsx)(t.td,{children:"Ang ID ng aktor (ni-return ni CreateActor) para i-clear ang mga animation."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,a.jsx)(t.p,{children:"0: Nabigo ang function na isagawa. Ang aktor na tinukoy ay wala."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(...);\n}\n\n// Sa ibang lugar\nApplyActorAnimation(gMyActor, ...);\n\n// Sa ibang lugar\nClearActorAnimations(gMyActor);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Mag-apply ng animation sa isang actor."]}),"\n"]})]})}function u(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},50065:function(n,t,e){e.d(t,{Z:function(){return s},a:function(){return o}});var i=e(67294);let a={},r=i.createContext(a);function o(n){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96208"],{25027:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>p,contentTitle:()=>r});var s=JSON.parse('{"id":"scripting/functions/heapspace","title":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","source":"@site/docs/scripting/functions/heapspace.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/heapspace","permalink":"/sl/docs/scripting/functions/heapspace","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/heapspace.md","tags":[{"inline":true,"label":"core","permalink":"/sl/docs/tags/core"}],"version":"current","frontMatter":{"title":"heapspace","sidebar_label":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"gpci","permalink":"/sl/docs/scripting/functions/gpci"},"next":{"title":"ispacked","permalink":"/sl/docs/scripting/functions/ispacked"}}'),i=n("85893"),o=n("50065");let a={title:"heapspace",sidebar_label:"heapspace",description:"Returns the amount of memory available for the heap/stack in bytes.",tags:["core"]},r=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Returns the amount of memory available for the heap/stack in bytes."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    printf("Heapspace: %i kilobytes", heapspace() / 1024);\n    return 1;\n}\n'})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var s=n(67294);let i={},o=s.createContext(i);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
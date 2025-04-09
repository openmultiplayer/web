"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96208"],{25027:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>p,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/heapspace","title":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","source":"@site/docs/scripting/functions/heapspace.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/heapspace","permalink":"/sr/docs/scripting/functions/heapspace","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/heapspace.md","tags":[{"inline":true,"label":"core","permalink":"/sr/docs/tags/core"}],"version":"current","frontMatter":{"title":"heapspace","sidebar_label":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"gpci","permalink":"/sr/docs/scripting/functions/gpci"},"next":{"title":"ispacked","permalink":"/sr/docs/scripting/functions/ispacked"}}'),i=n("85893"),r=n("50065");let o={title:"heapspace",sidebar_label:"heapspace",description:"Returns the amount of memory available for the heap/stack in bytes.",tags:["core"]},a=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Returns the amount of memory available for the heap/stack in bytes."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    printf("Heapspace: %i kilobytes", heapspace() / 1024);\n    return 1;\n}\n'})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(67294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["96208"],{25027:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>p,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/heapspace","title":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","source":"@site/docs/scripting/functions/heapspace.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/heapspace","permalink":"/ru/docs/scripting/functions/heapspace","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/heapspace.md","tags":[{"inline":true,"label":"core","permalink":"/ru/docs/tags/core"}],"version":"current","frontMatter":{"title":"heapspace","sidebar_label":"heapspace","description":"Returns the amount of memory available for the heap/stack in bytes.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"gpci","permalink":"/ru/docs/scripting/functions/gpci"},"next":{"title":"ispacked","permalink":"/ru/docs/scripting/functions/ispacked"}}'),s=n("85893"),r=n("50065");let o={title:"heapspace",sidebar_label:"heapspace",description:"Returns the amount of memory available for the heap/stack in bytes.",tags:["core"]},a=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns the amount of memory available for the heap/stack in bytes."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    printf("Heapspace: %i kilobytes", heapspace() / 1024);\n    return 1;\n}\n'})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
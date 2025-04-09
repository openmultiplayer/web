"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74102"],{67744:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/numargs","title":"numargs","description":"Get the number of arguments passed to a function.","source":"@site/docs/scripting/functions/numargs.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/numargs","permalink":"/fa/docs/scripting/functions/numargs","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/numargs.md","tags":[{"inline":true,"label":"core","permalink":"/fa/docs/tags/core"},{"inline":true,"label":"arguments","permalink":"/fa/docs/tags/arguments"},{"inline":true,"label":"args","permalink":"/fa/docs/tags/args"}],"version":"current","frontMatter":{"title":"numargs","sidebar_label":"numargs","description":"Get the number of arguments passed to a function.","tags":["core","arguments","args"]},"sidebar":"docsSidebar","previous":{"title":"min","permalink":"/fa/docs/scripting/functions/min"},"next":{"title":"numpubvars","permalink":"/fa/docs/scripting/functions/numpubvars"}}'),s=t("85893"),i=t("50065");let a={title:"numargs",sidebar_label:"numargs",description:"Get the number of arguments passed to a function.",tags:["core","arguments","args"]},o=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the number of arguments passed to a function."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'SomeFunction(...)\n{\n    printf("numargs(): %i", numargs());\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunction(1, 2, 3);\n}\n\n// Output: "numargs(): 3"\n// Because 3 parameters (1, 2, 3) were passed.\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"getarg",children:"getarg"}),": Retrieve an argument from a variable argument list."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
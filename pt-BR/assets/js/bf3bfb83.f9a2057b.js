"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["36790"],{10433:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/min","title":"min","description":"Return the lowest of two numbers.","source":"@site/docs/scripting/functions/min.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/min","permalink":"/pt-BR/docs/scripting/functions/min","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/min.md","tags":[{"inline":true,"label":"core","permalink":"/pt-BR/docs/tags/core"}],"version":"current","frontMatter":{"title":"min","sidebar_label":"min","description":"Return the lowest of two numbers.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"memcpy","permalink":"/pt-BR/docs/scripting/functions/memcpy"},"next":{"title":"numargs","permalink":"/pt-BR/docs/scripting/functions/numargs"}}'),r=t("85893"),s=t("50065");let l={title:"min",sidebar_label:"min",description:"Return the lowest of two numbers.",tags:["core"]},o=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Function used to compare the values."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value1"}),(0,r.jsx)(n.td,{children:"Value 1 (a) to compare."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value1"}),(0,r.jsx)(n.td,{children:"Value 2 (b) to compare."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["The lower value of ",(0,r.jsx)(n.code,{children:"value1"})," and ",(0,r.jsx)(n.code,{children:"value2"})]}),"\n",(0,r.jsxs)(n.p,{children:["If both are equivalent, ",(0,r.jsx)(n.code,{children:"value1"})," is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'\npublic OnGameModeInit()\n{\n    new a, b, result;\n\n    a = 5;\n    b = 10;\n    result = min(a, b);\n\n    printf("min(%d, %d) = %d", a, b, result);\n    // Since a is smaller than b so result will be 5.\n    \n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"max",children:"max"}),": Compare and get the maximum value."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
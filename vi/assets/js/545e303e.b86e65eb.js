"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94039"],{54671:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/max","title":"max","description":"Return the highest of two numbers.","source":"@site/docs/scripting/functions/max.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/max","permalink":"/vi/docs/scripting/functions/max","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/max.md","tags":[{"inline":true,"label":"core","permalink":"/vi/docs/tags/core"}],"version":"current","frontMatter":{"title":"max","sidebar_label":"max","description":"Return the highest of two numbers.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"listenport","permalink":"/vi/docs/scripting/functions/listenport"},"next":{"title":"memcpy","permalink":"/vi/docs/scripting/functions/memcpy"}}'),r=t("85893"),s=t("50065");let o={title:"max",sidebar_label:"max",description:"Return the highest of two numbers.",tags:["core"]},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Function used to compare the values."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value1"}),(0,r.jsx)(n.td,{children:"Value 1 (a) to compare."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value2"}),(0,r.jsx)(n.td,{children:"Value 2 (b) to compare."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["The higher value of ",(0,r.jsx)(n.code,{children:"value1"})," and ",(0,r.jsx)(n.code,{children:"value2"})]}),"\n",(0,r.jsxs)(n.p,{children:["If both are equivalent, ",(0,r.jsx)(n.code,{children:"value1"})," is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new a, b, result;\n\n    a = 5;\n    b = 10;\n    result = max(a, b);\n\n    printf("max(%d, %d) = %d", a, b, result);\n    // Since b is bigger than a so result will be 10.\n    \n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"min",children:"min"}),": Compare and get the minimum value."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
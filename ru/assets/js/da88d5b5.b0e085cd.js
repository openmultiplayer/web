"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76349"],{44899:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/getarg","title":"getarg","description":"Get an argument that was passed to a function.","source":"@site/docs/scripting/functions/getarg.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getarg","permalink":"/ru/docs/scripting/functions/getarg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/getarg.md","tags":[{"inline":true,"label":"core","permalink":"/ru/docs/tags/core"},{"inline":true,"label":"arguments","permalink":"/ru/docs/tags/arguments"},{"inline":true,"label":"args","permalink":"/ru/docs/tags/args"}],"version":"current","frontMatter":{"title":"getarg","sidebar_label":"getarg","description":"Get an argument that was passed to a function.","tags":["core","arguments","args"]},"sidebar":"docsSidebar","previous":{"title":"fwrite","permalink":"/ru/docs/scripting/functions/fwrite"},"next":{"title":"getdate","permalink":"/ru/docs/scripting/functions/getdate"}}'),s=n("85893"),i=n("50065");let a={title:"getarg",sidebar_label:"getarg",description:"Get an argument that was passed to a function.",tags:["core","arguments","args"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get an argument that was passed to a function."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arg"}),(0,s.jsx)(t.td,{children:"The argument sequence number. Use 0 for first argument."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"index"}),(0,s.jsxs)(t.td,{children:["The index (in case the argument is an array) ",(0,s.jsx)(t.em,{children:"(optional=0)"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The value of the argument."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'SomeFunc(...)\n{\n    printf("%i", getarg(3));\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunc(1, 3, 3, 7);\n}\n\n// Output: 7. The fourth argument (index 3) is 7.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"numargs",children:"numargs"}),": Return the number of arguments."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(67294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
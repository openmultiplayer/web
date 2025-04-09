"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76349"],{44899:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/getarg","title":"getarg","description":"Get an argument that was passed to a function.","source":"@site/docs/scripting/functions/getarg.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getarg","permalink":"/fil/docs/scripting/functions/getarg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/getarg.md","tags":[{"inline":true,"label":"core","permalink":"/fil/docs/tags/core"},{"inline":true,"label":"arguments","permalink":"/fil/docs/tags/arguments"},{"inline":true,"label":"args","permalink":"/fil/docs/tags/args"}],"version":"current","frontMatter":{"title":"getarg","sidebar_label":"getarg","description":"Get an argument that was passed to a function.","tags":["core","arguments","args"]},"sidebar":"docsSidebar","previous":{"title":"fwrite","permalink":"/fil/docs/scripting/functions/fwrite"},"next":{"title":"getdate","permalink":"/fil/docs/scripting/functions/getdate"}}'),i=n("85893"),s=n("50065");let a={title:"getarg",sidebar_label:"getarg",description:"Get an argument that was passed to a function.",tags:["core","arguments","args"]},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get an argument that was passed to a function."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"arg"}),(0,i.jsx)(t.td,{children:"The argument sequence number. Use 0 for first argument."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"index"}),(0,i.jsxs)(t.td,{children:["The index (in case the argument is an array) ",(0,i.jsx)(t.em,{children:"(optional=0)"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The value of the argument."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'SomeFunc(...)\n{\n    printf("%i", getarg(3));\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunc(1, 3, 3, 7);\n}\n\n// Output: 7. The fourth argument (index 3) is 7.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"numargs",children:"numargs"}),": Return the number of arguments."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
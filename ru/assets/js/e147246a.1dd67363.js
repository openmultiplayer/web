"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["69866"],{84477:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"scripting/functions/floatcmp","title":"floatcmp","description":"floatcmp can be used to compare float values to each other, to validate the comparison.","source":"@site/docs/scripting/functions/floatcmp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatcmp","permalink":"/ru/docs/scripting/functions/floatcmp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floatcmp.md","tags":[{"inline":true,"label":"math","permalink":"/ru/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/ru/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatcmp","sidebar_label":"floatcmp","description":"floatcmp can be used to compare float values to each other, to validate the comparison.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatadd","permalink":"/ru/docs/scripting/functions/floatadd"},"next":{"title":"floatcos","permalink":"/ru/docs/scripting/functions/floatcos"}}'),r=n("85893"),a=n("50065");let s={title:"floatcmp",sidebar_label:"floatcmp",description:"floatcmp can be used to compare float values to each other, to validate the comparison.",tags:["math","floating-point"]},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"floatcmp can be used to compare float values to each other, to validate the comparison."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":oper1"]}),(0,r.jsx)(t.td,{children:"The first float value to compare."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":oper2"]}),(0,r.jsx)(t.td,{children:"The second float value to compare."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"0"})," if value does match, ",(0,r.jsx)(t.strong,{children:"1"})," if the first value is bigger and ",(0,r.jsx)(t.strong,{children:"-1"})," if the 2nd value is bigger."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new value;\n\nvalue = floatcmp(2.0, 2.0); // Returns 0 because they match.\n\nvalue = floatcmp(1.0, 2.0); // Returns -1 because the second value is bigger.\n\nvalue = floatcmp(2.0, 1.0); // Returns 1 because the first value is bigger.\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var o=n(67294);let r={},a=o.createContext(r);function s(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
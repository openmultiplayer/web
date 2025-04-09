"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63921"],{40043:function(t,e,n){n.r(e),n.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"scripting/functions/floatsub","title":"floatsub","description":"Subtracts one float from another one.","source":"@site/docs/scripting/functions/floatsub.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatsub","permalink":"/ta/docs/scripting/functions/floatsub","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floatsub.md","tags":[{"inline":true,"label":"math","permalink":"/ta/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/ta/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatsub","sidebar_label":"floatsub","description":"Subtracts one float from another one.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatstr","permalink":"/ta/docs/scripting/functions/floatstr"},"next":{"title":"floattan","permalink":"/ta/docs/scripting/functions/floattan"}}'),r=n("85893"),s=n("50065");let i={title:"floatsub",sidebar_label:"floatsub",description:"Subtracts one float from another one.",tags:["math","floating-point"]},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Subtracts one float from another one. Note that this function has no real use, as one can simply use the standard operator (-) instead."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":oper1"]}),(0,r.jsx)(e.td,{children:"First Float."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":oper2"]}),(0,r.jsx)(e.td,{children:"Second Float (gets subtracted from the first float)"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(e.p,{children:"The difference of the two given floats."}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 5, Float:Number2 = 2; // Declares two floats, Number1 (5) and Number2 (2)\n    new Float:Difference;\n    Difference = floatsub(Number1, Number2); // Saves the Difference(5-2 = 3) of Number1 and Number2 in the float "Difference"\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"Floatadd",children:"Floatadd"}),": Adds two floats."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"Floatmul",children:"Floatmul"}),": Multiplies two floats."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"floatdiv",children:"floatdiv"}),": Divides a float by another."]}),"\n"]})]})}function u(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return a},a:function(){return i}});var o=n(67294);let r={},s=o.createContext(r);function i(t){let e=o.useContext(s);return o.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);
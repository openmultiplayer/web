"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["62347"],{78871:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/floatdiv","title":"floatdiv","description":"Divide one float by another one.","source":"@site/docs/scripting/functions/floatdiv.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatdiv","permalink":"/es/docs/scripting/functions/floatdiv","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floatdiv.md","tags":[{"inline":true,"label":"math","permalink":"/es/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/es/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatdiv","sidebar_label":"floatdiv","description":"Divide one float by another one.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatcos","permalink":"/es/docs/scripting/functions/floatcos"},"next":{"title":"floatfract","permalink":"/es/docs/scripting/functions/floatfract"}}'),o=n("85893"),l=n("50065");let r={title:"floatdiv",sidebar_label:"floatdiv",description:"Divide one float by another one.",tags:["math","floating-point"]},s=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Divide one float by another one. Redundant as the division operator (/) does the same thing."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":dividend"]}),(0,o.jsx)(t.td,{children:"First float."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":divisor"]}),(0,o.jsx)(t.td,{children:"Second float (dividates the first float.)"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"The quotient of the two given floats."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 8.05, Float:Number2 = 3.5; // Declares two floats, Number1 (8.05) and Number2 (3.5)\n    new Float:Quotient;\n    Quotient = floatdiv(Number1, Number2); // Saves the quotient(=8.05/3.5 = 2.3) of Number1 and Number2 in the float "Quotient"\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"floatadd",children:"floatadd"}),": Adds two floats together."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"floatsub",children:"floatsub"}),": Subtract a float from another float."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"floatmul",children:"floatmul"}),": Multiply two floats."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(67294);let o={},l=i.createContext(o);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
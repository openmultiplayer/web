"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78364"],{58013:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>s});var o=JSON.parse('{"id":"scripting/functions/floatround","title":"floatround","description":"Round a floating point number to an integer value.","source":"@site/docs/scripting/functions/floatround.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatround","permalink":"/ta/docs/scripting/functions/floatround","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/floatround.md","tags":[{"inline":true,"label":"math","permalink":"/ta/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/ta/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatround","sidebar_label":"floatround","description":"Round a floating point number to an integer value.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatpower","permalink":"/ta/docs/scripting/functions/floatpower"},"next":{"title":"floatsin","permalink":"/ta/docs/scripting/functions/floatsin"}}'),r=t("85893"),l=t("50065");let i={title:"floatround",sidebar_label:"floatround",description:"Round a floating point number to an integer value.",tags:["math","floating-point"]},s=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Round a floating point number to an integer value."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":value"]}),(0,r.jsx)(n.td,{children:"The value to round."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["floatround_method",":method"]}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"../resources/floatroundmodes",children:"floatround mode"})," to use.",(0,r.jsx)("br",{}),"By default: ",(0,r.jsx)(n.code,{children:"floatround_round"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"The rounded value as an integer."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new value = floatround(3.3, floatround_ceil);\nprintf("3.3 rounded to %d", value); // 3.3 rounded to 4\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new value = floatround(50.996229);\nprintf("50.996229 rounded to %d", value); // 50.996229 rounded to 51\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new value = floatround(270.0034);\nprintf("270.0034 rounded to %d", value); // 270.0034 rounded to 270\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"float",children:"float"}),": Convert an integer to a float."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"floatstr",children:"floatstr"}),": Convert an string to a float."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/floatroundmodes",children:"Floatround Modes"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var o=t(67294);let r={},l=o.createContext(r);function i(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);
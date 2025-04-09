"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42642"],{50666:function(t,e,n){n.r(e),n.d(e,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/strfloat","title":"strfloat","description":"Converts a string to a float.","source":"@site/docs/scripting/functions/strfloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strfloat","permalink":"/de/docs/scripting/functions/strfloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strfloat.md","tags":[{"inline":true,"label":"string","permalink":"/de/docs/tags/string"},{"inline":true,"label":"floating-point","permalink":"/de/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"strfloat","sidebar_label":"strfloat","description":"Converts a string to a float.","tags":["string","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"strfind","permalink":"/de/docs/scripting/functions/strfind"},"next":{"title":"strins","permalink":"/de/docs/scripting/functions/strins"}}'),r=n("85893"),s=n("50065");let o={title:"strfloat",sidebar_label:"strfloat",description:"Converts a string to a float.",tags:["string","floating-point"]},l=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components},{LowercaseNote:n,VersionWarn:i}=e;return n||f("LowercaseNote",!0),i||f("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Converts a string to a float."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"const string[]"}),(0,r.jsx)(e.td,{children:"The string to convert into a float."})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(e.p,{children:"The requested float value."}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'new string[4] = "6.9"; // A STRING holding a FLOAT.\n\nnew Float:value = strfloat(string);\n\nSetPlayerPos(playerid, 0.0, 0.0, value);\n'})}),"\n",(0,r.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["This function is the same as ",(0,r.jsx)(e.a,{href:"floatstr",children:"floatstr"}),"."]})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"floatround",children:"floatround"}),": Convert a float to an integer (rounding)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"float",children:"float"}),": Convert an integer to a float."]}),"\n"]})]})}function u(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}function f(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(t,e,n){n.d(e,{Z:function(){return l},a:function(){return o}});var i=n(67294);let r={},s=i.createContext(r);function o(t){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);
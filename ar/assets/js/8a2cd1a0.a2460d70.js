"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70045"],{48218:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/valstr","title":"valstr","description":"Convert an integer into a string.","source":"@site/docs/scripting/functions/valstr.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/valstr","permalink":"/ar/docs/scripting/functions/valstr","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/valstr.md","tags":[{"inline":true,"label":"string","permalink":"/ar/docs/tags/string"}],"version":"current","frontMatter":{"title":"valstr","sidebar_label":"valstr","description":"Convert an integer into a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"uuencode","permalink":"/ar/docs/scripting/functions/uuencode"},"next":{"title":"Contents","permalink":"/ar/docs/scripting/language/reference/Contents"}}'),i=n("85893"),r=n("50065");let a={title:"valstr",sidebar_label:"valstr",description:"Convert an integer into a string.",tags:["string"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Convert an integer into a string."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dest"}),(0,i.jsx)(t.td,{children:"The destination of the string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"The value to convert to a string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["pack ",(0,i.jsx)(t.em,{children:"(optional)"})]}),(0,i.jsx)(t.td,{children:"Whether to pack the destination (off by default)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new string[4];\nnew value = 250;\nvalstr(string, value); // string is now "250"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsxs)(t.p,{children:["Passing a high value to this function can cause the server to freeze/crash. Fixes are available. Below is a fix that can be put straight in to your script (before valstr is used anywhere). ",(0,i.jsx)(t.a,{href:"https://github.com/pawn-lang/sa-mp-fixes",children:"fixes.inc"})," includes this fix."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'// valstr fix by Slice\nstock FIX_valstr(dest[], value, bool:pack = false)\n{\n    // format can\'t handle cellmin properly\n    static const cellmin_value[] =\xa0!"-2147483648";\n\n    if (value == cellmin)\n        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);\n    else\n        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);\n}\n#define valstr FIX_valstr\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(67294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
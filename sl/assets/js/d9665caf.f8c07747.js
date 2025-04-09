"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46889"],{13785:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"scripting/functions/uuencode","title":"uuencode","description":"Encode a string to an UU-decoded string.","source":"@site/docs/scripting/functions/uuencode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/uuencode","permalink":"/sl/docs/scripting/functions/uuencode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/uuencode.md","tags":[{"inline":true,"label":"string","permalink":"/sl/docs/tags/string"},{"inline":true,"label":"encryption","permalink":"/sl/docs/tags/encryption"}],"version":"current","frontMatter":{"title":"uuencode","sidebar_label":"uuencode","description":"Encode a string to an UU-decoded string.","tags":["string","encryption"]},"sidebar":"docsSidebar","previous":{"title":"uudecode","permalink":"/sl/docs/scripting/functions/uudecode"},"next":{"title":"valstr","permalink":"/sl/docs/scripting/functions/valstr"}}'),i=t("85893"),r=t("50065");let o={title:"uuencode",sidebar_label:"uuencode",description:"Encode a string to an UU-decoded string.",tags:["string","encryption"]},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Encode a string to an UU-decoded string."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dest[]"}),(0,i.jsx)(n.td,{children:"The destination string for the encoded stream."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const source[]"}),(0,i.jsx)(n.td,{children:"The source, non-encoded string."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numbytes"}),(0,i.jsx)(n.td,{children:"The number of bytes to encode, this should not exceed 45."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxlength = sizeof (dest)"}),(0,i.jsx)(n.td,{children:"The maximum length of the dest[] array."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"uuencode(encodedString, normalString, 45);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"uudecode",children:"uudecode"}),": Decode an UU-encoded string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"memcpy",children:"memcpy"}),": Copy bytes from one location to another."]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
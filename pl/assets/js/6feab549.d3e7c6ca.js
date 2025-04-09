"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23357"],{75636:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/memcpy","title":"memcpy","description":"Copy bytes from one location to another.","source":"@site/docs/scripting/functions/memcpy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/memcpy","permalink":"/pl/docs/scripting/functions/memcpy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/memcpy.md","tags":[{"inline":true,"label":"string","permalink":"/pl/docs/tags/string"}],"version":"current","frontMatter":{"title":"memcpy","sidebar_label":"memcpy","description":"Copy bytes from one location to another.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"max","permalink":"/pl/docs/scripting/functions/max"},"next":{"title":"min","permalink":"/pl/docs/scripting/functions/min"}}'),r=n("85893"),i=n("50065");let c={title:"memcpy",sidebar_label:"memcpy",description:"Copy bytes from one location to another.",tags:["string"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Copy bytes from one location to another."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dest[]"}),(0,r.jsx)(t.td,{children:"An array into which the bytes from source are copied in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const source[]"}),(0,r.jsx)(t.td,{children:"The source array."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index = 0"}),(0,r.jsx)(t.td,{children:"The start index in bytes in the destination array where the data should be copied to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numbytes"}),(0,r.jsx)(t.td,{children:"The number of bytes (not cells) to copy."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxlength = sizeof (dest)"}),(0,r.jsx)(t.td,{children:"The maximum number of cells that fit in the destination buffer."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," on success, ",(0,r.jsx)(t.strong,{children:"false"})," on failure."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'// Concatenate two strings with memcpy\nnew\n	destination[64] = "This is ",\n	source[] = "a string in a 32 Bit Array";\n\nmemcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);\nprint(destination);\n// Output: This is a string in a 32 Bit Array\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to see if they are the same."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strfind",children:"strfind"}),": Search for a substring in a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strdel",children:"strdel"}),": Delete part/all of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strins",children:"strins"}),": Put a string into another string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strlen",children:"strlen"}),": Check the length of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract characters from a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strval",children:"strval"}),": Find the value of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var s=n(67294);let r={},i=s.createContext(r);function c(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
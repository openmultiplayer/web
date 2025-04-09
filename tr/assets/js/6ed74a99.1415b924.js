"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94227"],{12048:function(e,s,t){t.r(s),t.d(s,{default:()=>l,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>h,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/SHA256_PassHash","title":"SHA256_PassHash","description":"Hashes a password using the SHA-256 hashing algorithm.","source":"@site/docs/scripting/functions/SHA256_PassHash.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SHA256_PassHash","permalink":"/tr/docs/scripting/functions/SHA256_PassHash","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SHA256_PassHash.md","tags":[{"inline":true,"label":"encryption","permalink":"/tr/docs/tags/encryption"}],"version":"current","frontMatter":{"title":"SHA256_PassHash","sidebar_label":"SHA256_PassHash","description":"Hashes a password using the SHA-256 hashing algorithm.","tags":["encryption"]},"sidebar":"docsSidebar","previous":{"title":"ResumeRecordingPlayback","permalink":"/tr/docs/scripting/functions/ResumeRecordingPlayback"},"next":{"title":"SelectObject","permalink":"/tr/docs/scripting/functions/SelectObject"}}'),i=t("85893"),r=t("50065");let a={title:"SHA256_PassHash",sidebar_label:"SHA256_PassHash",description:"Hashes a password using the SHA-256 hashing algorithm.",tags:["encryption"]},o=void 0,d={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function c(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{VersionWarn:t}=s;return t||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"SA-MP 0.3.7 R1"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["This function is deprecated in open.mp, Use ",(0,i.jsx)(s.a,{href:"https://github.com/Sreyas-Sreelal/samp-bcrypt",children:"samp-bcrypt"})," plugin for hashing."]})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Hashes a password using the SHA-256 hashing algorithm. Includes a salt. The output is always 256 bits in length, or the equivalent of 64 Pawn cells."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"const password[]"}),(0,i.jsx)(s.td,{children:"The password to hash."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"const salt[]"}),(0,i.jsx)(s.td,{children:"The salt to use in the hash."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"output[]"}),(0,i.jsx)(s.td,{children:"The returned hash in uppercase hexadecimal digest."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"size = sizeof (output)"}),(0,i.jsx)(s.td,{children:"The returned hash maximum length."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:"The hash is stored in the specified array."}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new MyHash[64 + 1]; // + 1 to account for the required null terminator\n    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);\n    printf("Returned hash: %s", MyHash); // Returned hash: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"The returned hash has zero padding (i.e. possible prefix 00ABCD123...)."})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"The salt is appended to the end of the password, meaning password 'foo' and salt 'bar' would form 'foobar'. The salt should be random, unique for each player and at least as long as the hashed password. It is to be stored alongside the actual hash in the player's account."})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"This function is not binary-safe. Using binary values on password and salt might give unexpected result."})})]})}function l(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return o},a:function(){return a}});var n=t(67294);let i={},r=n.createContext(i);function a(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
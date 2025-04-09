"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84894"],{4542:function(n,e,i){i.r(e),i.d(e,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>s,toc:()=>h,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestSpawn","title":"OnPlayerRequestSpawn","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i c\u1ED1 g\u1EAFng xu\u1EA5t hi\u1EC7n qua vi\u1EC7c ch\u1ECDn l\u1EDBp b\u1EB1ng c\xe1ch nh\u1EA5n SHIFT ho\u1EB7c nh\u1EA5p v\xe0o n\xfat \'Spawn\'.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestSpawn","permalink":"/vi/docs/scripting/callbacks/OnPlayerRequestSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerRequestSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"class","permalink":"/vi/docs/tags/class"}],"version":"current","frontMatter":{"title":"OnPlayerRequestSpawn","sidebar_label":"OnPlayerRequestSpawn","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i c\u1ED1 g\u1EAFng xu\u1EA5t hi\u1EC7n qua vi\u1EC7c ch\u1ECDn l\u1EDBp b\u1EB1ng c\xe1ch nh\u1EA5n SHIFT ho\u1EB7c nh\u1EA5p v\xe0o n\xfat \'Spawn\'.","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestDownload","permalink":"/vi/docs/scripting/callbacks/OnPlayerRequestDownload"},"next":{"title":"OnPlayerSelectObject","permalink":"/vi/docs/scripting/callbacks/OnPlayerSelectObject"}}'),c=i("85893"),l=i("50065");let a={title:"OnPlayerRequestSpawn",sidebar_label:"OnPlayerRequestSpawn",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i c\u1ED1 g\u1EAFng xu\u1EA5t hi\u1EC7n qua vi\u1EC7c ch\u1ECDn l\u1EDBp b\u1EB1ng c\xe1ch nh\u1EA5n SHIFT ho\u1EB7c nh\u1EA5p v\xe0o n\xfat 'Spawn'.",tags:["player","class"]},r=void 0,s={},h=[{value:"M\xf4 t\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Gi\xe1 tr\u1ECB tr\u1EA3 v\u1EC1",id:"gi\xe1-tr\u1ECB-tr\u1EA3-v\u1EC1",level:2},{value:"V\xed d\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Ghi ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c Callbacks li\xean quan",id:"c\xe1c-callbacks-li\xean-quan",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components},{TipNPCCallbacks:i}=e;return i||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 t\u1EA3"}),"\n",(0,c.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i c\u1ED1 g\u1EAFng xu\u1EA5t hi\u1EC7n qua vi\u1EC7c ch\u1ECDn l\u1EDBp b\u1EB1ng c\xe1ch nh\u1EA5n SHIFT ho\u1EB7c nh\u1EA5p v\xe0o n\xfat 'Spawn'."}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"T\xean"}),(0,c.jsx)(e.th,{children:"M\xf4 t\u1EA3"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"playerid"}),(0,c.jsx)(e.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i y\xeau c\u1EA7u xu\u1EA5t hi\u1EC7n."})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"gi\xe1-tr\u1ECB-tr\u1EA3-v\u1EC1",children:"Gi\xe1 tr\u1ECB tr\u1EA3 v\u1EC1"}),"\n",(0,c.jsx)(e.p,{children:"N\xf3 lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong filterscripts n\xean tr\u1EA3 v\u1EC1 0 \u1EDF \u0111\xf3 c\u0169ng ch\u1EB7n c\xe1c script kh\xe1c nh\xecn th\u1EA5y n\xf3."}),"\n",(0,c.jsx)(e.h2,{id:"v\xed-d\u1EE5",children:"V\xed d\u1EE5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'public OnPlayerRequestSpawn(playerid)\n{\n    if (!IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, -1, "You may not spawn.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"ghi-ch\xfa",children:"Ghi ch\xfa"}),"\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsx)(e.p,{children:"\u0110\u1EC3 ng\u0103n ng\u01B0\u1EDDi ch\u01A1i xu\u1EA5t hi\u1EC7n v\u1EDBi c\xe1c l\u1EDBp nh\u1EA5t \u0111\u1ECBnh, l\u1EDBp cu\u1ED1i c\xf9ng \u0111\xe3 xem ph\u1EA3i \u0111\u01B0\u1EE3c l\u01B0u trong m\u1ED9t bi\u1EBFn trong OnPlayerRequestClass."})}),"\n",(0,c.jsx)(e.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks li\xean quan"}),"\n",(0,c.jsx)(e.p,{children:"C\xe1c callback sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"OnPlayerSpawn",children:"OnPlayerSpawn"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i xu\u1EA5t hi\u1EC7n."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"OnPlayerRequestClass",children:"OnPlayerRequestClass"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i thay \u0111\u1ED5i l\u1EDBp \u1EDF vi\u1EC7c ch\u1ECDn l\u1EDBp."]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return a}});var t=i(67294);let c={},l=t.createContext(c);function a(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20440"],{26898:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>h,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t y\xeau c\u1EA7u SendClientCheck ho\xe0n t\u1EA5t.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/vi/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t y\xeau c\u1EA7u SendClientCheck ho\xe0n t\u1EA5t.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/vi/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/vi/docs/scripting/callbacks/OnClientMessage"}}'),c=t("85893"),l=t("50065");let s={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t y\xeau c\u1EA7u SendClientCheck ho\xe0n t\u1EA5t.",tags:[]},r=void 0,a={},h=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Ghi Ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c H\xe0m Li\xean Quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2},{value:"T\xe0i Nguy\xean Li\xean Quan",id:"t\xe0i-nguy\xean-li\xean-quan",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,c.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t y\xeau c\u1EA7u SendClientCheck ho\xe0n t\u1EA5t."}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"T\xean"}),(0,c.jsx)(e.th,{children:"M\xf4 T\u1EA3"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"playerid"}),(0,c.jsx)(e.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c ki\u1EC3m tra."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"actionid"}),(0,c.jsx)(e.td,{children:"Lo\u1EA1i ki\u1EC3m tra \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"memaddr"}),(0,c.jsx)(e.td,{children:"\u0110\u1ECBa ch\u1EC9 y\xeau c\u1EA7u."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"retndata"}),(0,c.jsx)(e.td,{children:"K\u1EBFt qu\u1EA3 c\u1EE7a ki\u1EC3m tra."})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,c.jsx)(e.p,{children:"N\xf3 lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong c\xe1c filterscripts."}),"\n",(0,c.jsx)(e.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if (actionid == 0x48) // ho\u1EB7c 72\n    {\n        print("Ng\u01B0\u1EDDi ch\u01A1i \u0111ang k\u1EBFt n\u1ED1i b\u1EB1ng kh\xe1ch h\xe0ng PC.");\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"ghi-ch\xfa",children:"Ghi Ch\xfa"}),"\n",(0,c.jsxs)(e.admonition,{type:"warning",children:[(0,c.jsxs)(e.p,{children:[(0,c.jsxs)(e.strong,{children:["M\xe1y ch\u1EE7 SA",":MP"]}),": Callback n\xe0y ch\u1EC9 \u0111\u01B0\u1EE3c g\u1ECDi khi n\xf3 n\u1EB1m trong m\u1ED9t filterscript."]}),(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"M\xe1y ch\u1EE7 Open Multiplayer"}),": Callback n\xe0y ho\u1EA1t \u0111\u1ED9ng b\xecnh th\u01B0\u1EDDng trong gamemode / filterscript."]})]}),"\n",(0,c.jsx)(e.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m Li\xean Quan"}),"\n",(0,c.jsx)(e.p,{children:"H\xe0m sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Th\u1EF1c hi\u1EC7n ki\u1EC3m tra b\u1ED9 nh\u1EDB tr\xean kh\xe1ch h\xe0ng."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"t\xe0i-nguy\xean-li\xean-quan",children:"T\xe0i Nguy\xean Li\xean Quan"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../resources/opcodes",children:"opcodes"}),": ID opcodes h\xe0nh \u0111\u1ED9ng v\xe0 m\u1EE5c \u0111\xedch c\u1EE7a ch\xfang."]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return s}});var i=t(67294);let c={},l=i.createContext(c);function s(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);
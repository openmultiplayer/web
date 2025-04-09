"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47982"],{51442:function(t,n,e){e.r(n),e.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>c,assets:()=>s,toc:()=>o,contentTitle:()=>l});var c=JSON.parse('{"id":"scripting/callbacks/OnActorStreamOut","title":"OnActorStreamOut","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t actor \u0111\u01B0\u1EE3c truy\u1EC1n ra kh\u1ECFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamOut","permalink":"/vi/docs/scripting/callbacks/OnActorStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnActorStreamOut.md","tags":[{"inline":true,"label":"actor","permalink":"/vi/docs/tags/actor"}],"version":"current","frontMatter":{"title":"OnActorStreamOut","sidebar_label":"OnActorStreamOut","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t actor \u0111\u01B0\u1EE3c truy\u1EC1n ra kh\u1ECFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamIn","permalink":"/vi/docs/scripting/callbacks/OnActorStreamIn"},"next":{"title":"OnClientCheckResponse","permalink":"/vi/docs/scripting/callbacks/OnClientCheckResponse"}}'),r=e("85893"),i=e("50065");let a={title:"OnActorStreamOut",sidebar_label:"OnActorStreamOut",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t actor \u0111\u01B0\u1EE3c truy\u1EC1n ra kh\u1ECFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.",tags:["actor"]},l=void 0,s={},o=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Ghi Ch\xfa",id:"ghi-ch\xfa",level:2},{value:"Callbacks Li\xean Quan",id:"callbacks-li\xean-quan",level:2}];function h(t){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{TipNPCCallbacks:e,VersionWarn:c}=n;return e||u("TipNPCCallbacks",!0),c||u("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(n.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,r.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t actor \u0111\u01B0\u1EE3c truy\u1EC1n ra kh\u1ECFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"T\xean"}),(0,r.jsx)(n.th,{children:"M\xf4 T\u1EA3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"actorid"}),(0,r.jsx)(n.td,{children:"ID c\u1EE7a actor \u0111\xe3 \u0111\u01B0\u1EE3c truy\u1EC1n ra kh\u1ECFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forplayerid"}),(0,r.jsx)(n.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 truy\u1EC1n actor ra ngo\xe0i."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,r.jsx)(n.p,{children:"N\xf3 lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong c\xe1c filterscripts."}),"\n",(0,r.jsx)(n.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnActorStreamOut(actorid, forplayerid)\n{\n    new string[48];\n    format(string, sizeof(string), "Actor %d hi\u1EC7n \u0111ang b\u1ECB truy\u1EC1n ra kh\u1ECFi b\u1EA1n.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ghi-ch\xfa",children:"Ghi Ch\xfa"}),"\n",(0,r.jsx)(e,{}),"\n",(0,r.jsx)(n.h2,{id:"callbacks-li\xean-quan",children:"Callbacks Li\xean Quan"}),"\n",(0,r.jsx)(n.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnActorStreamIn",children:"OnActorStreamIn"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t actor \u0111\u01B0\u1EE3c truy\u1EC1n v\xe0o b\u1EDFi kh\xe1ch h\xe0ng c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]})]})}function d(t={}){let{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}function u(t,n){throw Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(t,n,e){e.d(n,{Z:function(){return l},a:function(){return a}});var c=e(67294);let r={},i=c.createContext(r);function a(t){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),c.createElement(i.Provider,{value:n},t.children)}}}]);